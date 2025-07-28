'use client';

import * as Dialog from '@radix-ui/react-dialog';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IoChevronBack, IoChevronForward, IoClose } from 'react-icons/io5';
import type { Media } from '@/payload-types';

// Helper function to get image URL from Media object or string
export const getImageUrl = (image: string | Media): string => {
  if (typeof image === 'string') return image;
  return image.url || '';
};

// Helper function to get thumbnail URL from PayloadCMS Media object
export const getThumbnailUrl = (image: string | Media): string => {
  if (typeof image === 'string') {
    // If it's a string URL, try to construct thumbnail URL
    if (!image) return '';
    const urlParts = image.split('/');
    const filename = urlParts.pop() || '';
    return [...urlParts, `thumbnail_${filename}`].join('/');
  }

  // If it's a Media object, use the thumbnail size if available
  if (image.sizes?.thumbnail?.url) {
    return image.sizes.thumbnail.url;
  }

  // Fallback to thumbnailURL property or main URL
  return image.thumbnailURL || image.url || '';
};

interface GalleryImagesProps {
  title: string;
  date: string;
  images: (string | Media)[];
}

function GalleryImages({ title, images, date }: GalleryImagesProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [thumbnailsLoaded, setThumbnailsLoaded] = useState<Record<number, boolean>>({});
  const [originalImagesLoaded, setOriginalImagesLoaded] = useState<Record<number, boolean>>({});
  const [modalImageLoaded, setModalImageLoaded] = useState(false);
  const [visibleImages, setVisibleImages] = useState<Record<number, boolean>>({});
  const [preloadedImages, setPreloadedImages] = useState<Record<number, boolean>>({});

  // Create refs for each image container to observe visibility
  const imageRefs = useRef<(HTMLElement | null)[]>([]);

  const handleThumbnailLoad = useCallback((index: number) => {
    setThumbnailsLoaded((prev) => ({ ...prev, [index]: true }));
  }, []);

  const handleOriginalImageLoad = useCallback((index: number) => {
    setOriginalImagesLoaded((prev) => ({ ...prev, [index]: true }));
  }, []);

  // Preload image function for hover
  const preloadImage = useCallback(
    (index: number) => {
      if (preloadedImages[index] || originalImagesLoaded[index]) return;

      const img = document.createElement('img');
      img.onload = () => {
        setPreloadedImages((prev) => ({ ...prev, [index]: true }));
        setOriginalImagesLoaded((prev) => ({ ...prev, [index]: true }));
      };
      img.src = getImageUrl(images[index]);
    },
    [images, preloadedImages, originalImagesLoaded],
  );

  // Update modal image loaded state when current image changes or modal opens
  useEffect(() => {
    if (modalOpen) {
      // If the original image is already loaded in the grid, use that state
      // Otherwise, we'll need to load it in the modal
      if (originalImagesLoaded[currentImage]) {
        setModalImageLoaded(true);
      } else {
        setModalImageLoaded(false);
      }

      // Preload adjacent images for smoother navigation
      const prevIndex = currentImage === 0 ? images.length - 1 : currentImage - 1;
      const nextIndex = currentImage === images.length - 1 ? 0 : currentImage + 1;
      preloadImage(prevIndex);
      preloadImage(nextIndex);
    } else {
      // Reset modal image loaded state when modal closes
      setModalImageLoaded(false);
    }
  }, [currentImage, modalOpen, originalImagesLoaded, images.length, preloadImage]);

  // Keyboard navigation
  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        const prevImage = currentImage === 0 ? images.length - 1 : currentImage - 1;
        setCurrentImage(prevImage);
        preloadImage(prevImage);
      } else if (e.key === 'ArrowRight') {
        const nextImage = currentImage === images.length - 1 ? 0 : currentImage + 1;
        setCurrentImage(nextImage);
        preloadImage(nextImage);
      } else if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [modalOpen, currentImage, images.length, preloadImage]);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    // Reset refs array when images change
    imageRefs.current = imageRefs.current.slice(0, images.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Get the index from the data attribute
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);

          if (entry.isIntersecting) {
            // Mark this image as visible
            setVisibleImages((prev) => ({ ...prev, [index]: true }));
            // Once the image is visible, we don't need to observe it anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '200px', // Start loading images when they're 200px from entering the viewport
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      },
    );

    // Observe all image containers
    imageRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      // Clean up the observer when the component unmounts
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [images.length]);

  return (
    <div className="mt-8">
      <h1 className="text-center font-sans">{title}</h1>
      <p className="mt-4 text-center font-bold font-sans text-xs uppercase tracking-widest">
        {dayjs(date).format('DD MMMM YYYY')}
        <span className="mx-2">•</span>
        {dayjs(date).format('YYYY')}年
      </p>

      <div className="m-auto mt-8 mb-16 w-5xl max-w-[95%] md:max-w-[90%]">
        {/* Image Grid Gallery - Pinterest Style with Lazy Loading */}
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3 lg:columns-4">
          {images.map((image, index) => {
            // Generate a random aspect ratio for Pinterest-like effect
            // This creates a more dynamic, masonry-style layout
            const aspectRatio = [3 / 4, 4 / 3, 1, 5 / 4, 4 / 5, 9 / 16, 16 / 9][index % 7];
            const paddingTop = `${(1 / aspectRatio) * 100}%`;

            // Determine if this image should be loaded
            // Load the first 4 images immediately, and others when they become visible
            const shouldLoad = index < 4 || visibleImages[index];

            return (
              <button
                key={index}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                type="button"
                data-index={index}
                className="group relative mb-4 w-full cursor-pointer break-inside-avoid overflow-hidden rounded-lg border-0 bg-transparent p-0 shadow-md transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => preloadImage(index)}
                onClick={() => {
                  setCurrentImage(index);
                  setModalOpen(true);
                }}
                aria-label={`View image ${index + 1}`}
              >
                <div className="relative w-full" style={{ paddingTop }}>
                  {/* Show a placeholder while no image is loaded */}
                  {!thumbnailsLoaded[index] && !shouldLoad && (
                    <div className="absolute inset-0 animate-pulse bg-gray-200" />
                  )}

                  {/* Show thumbnail first */}
                  <Image
                    src={getThumbnailUrl(image)}
                    alt={`Thumbnail ${index + 1}`}
                    className={`transition-all duration-300 group-hover:scale-105 ${originalImagesLoaded[index] ? 'opacity-0' : 'opacity-100'}`}
                    fill
                    onLoad={() => handleThumbnailLoad(index)}
                    priority={index < 8} // Prioritize loading more thumbnails since they're smaller
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />

                  {/* Load original image when in viewport */}
                  {shouldLoad && (
                    <Image
                      src={getImageUrl(image)}
                      alt={`Image ${index + 1}`}
                      className={`transition-all duration-300 group-hover:scale-105 ${originalImagesLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                      fill
                      onLoad={() => handleOriginalImageLoad(index)}
                      priority={index < 4} // Prioritize loading only the first 4 original images
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal for full-size view */}
      <Dialog.Root open={modalOpen} onOpenChange={setModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90"
            >
              <div className="flex h-screen flex-col items-center justify-center p-4">
                <div
                  className="relative w-full max-w-4xl"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
                  onKeyDown={(e) => e.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
                >
                  {/* Close button positioned relative to the image */}
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="absolute top-3 right-3 z-20 rounded-full bg-black/60 p-1.5 text-white shadow-md hover:bg-black/80"
                    aria-label="Close modal"
                  >
                    <IoClose size={24} />
                  </button>
                  {/* Progressive loading for modal image */}
                  <div className="relative flex min-h-[60vh] w-full items-center justify-center">
                    {/* Loading placeholder while image loads */}
                    {!modalImageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-lg bg-gray-800/20 p-8">
                          <div className="h-8 w-8 animate-spin rounded-full border-white border-b-2"></div>
                        </div>
                      </div>
                    )}

                    {/* First show thumbnail in modal while original loads */}
                    {!modalImageLoaded && (
                      <Image
                        src={getThumbnailUrl(images[currentImage])}
                        alt={`Thumbnail ${currentImage + 1}`}
                        className="max-h-[80vh] w-auto blur-sm transition-all duration-300"
                        width={1280}
                        height={720}
                        priority={true}
                        style={{ position: 'absolute', objectFit: 'contain' }}
                      />
                    )}

                    {/* Then load and show the full-size image */}
                    <Image
                      src={getImageUrl(images[currentImage])}
                      alt={`Full size ${currentImage + 1}`}
                      className={`max-h-[80vh] w-auto transition-all duration-500 ${modalImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      width={1920}
                      height={1080}
                      onLoad={() => {
                        // Update both modal state and grid state
                        setModalImageLoaded(true);
                        setOriginalImagesLoaded((prev) => ({ ...prev, [currentImage]: true }));
                      }}
                      quality={90} /* Higher quality for modal view */
                      priority={true} /* Always prioritize the modal image */
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  {/* Modal Navigation Controls */}
                  <div
                    className="absolute inset-x-0 bottom-0 flex items-center justify-between p-2 sm:p-4"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on navigation controls
                    onKeyDown={(e) => e.stopPropagation()}
                    role="toolbar"
                    aria-label="Image navigation"
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const prevImage = currentImage === 0 ? images.length - 1 : currentImage - 1;
                        setCurrentImage(prevImage);
                        // Preload the previous image for smoother navigation
                        preloadImage(prevImage);
                      }}
                      className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                      aria-label="Previous image"
                    >
                      <IoChevronBack size={24} />
                    </button>

                    <div className="rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                      {currentImage + 1} /{images.length}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextImage = currentImage === images.length - 1 ? 0 : currentImage + 1;
                        setCurrentImage(nextImage);
                        // Preload the next image for smoother navigation
                        preloadImage(nextImage);
                      }}
                      className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                      aria-label="Next image"
                    >
                      <IoChevronForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default GalleryImages;
