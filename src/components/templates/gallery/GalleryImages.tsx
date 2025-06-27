'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Media } from '@/payload-types';

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
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleThumbnailLoad = useCallback((index: number) => {
    setThumbnailsLoaded(prev => ({ ...prev, [index]: true }));
  }, []);

  const handleOriginalImageLoad = useCallback((index: number) => {
    setOriginalImagesLoaded(prev => ({ ...prev, [index]: true }));
  }, []);

  // Preload image function for hover
  const preloadImage = useCallback((index: number) => {
    if (preloadedImages[index] || originalImagesLoaded[index]) return;

    const img = document.createElement('img');
    img.onload = () => {
      setPreloadedImages(prev => ({ ...prev, [index]: true }));
      setOriginalImagesLoaded(prev => ({ ...prev, [index]: true }));
    };
    img.src = getImageUrl(images[index]);
  }, [images, preloadedImages, originalImagesLoaded]);

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
            setVisibleImages(prev => ({ ...prev, [index]: true }));
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
      <p className="text-xs tracking-widest text-center mt-4 uppercase font-bold font-sans">
        {dayjs(date).format('DD MMMM YYYY')}
        <span className="mx-2">•</span>
        {dayjs(date).format('YYYY')}
        年
      </p>

      <div className="max-w-[95%] md:max-w-[90%] w-5xl m-auto mt-8 mb-16">
        {/* Image Grid Gallery - Pinterest Style with Lazy Loading */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => {
            // Generate a random aspect ratio for Pinterest-like effect
            // This creates a more dynamic, masonry-style layout
            const aspectRatio = [3 / 4, 4 / 3, 1, 5 / 4, 4 / 5, 9 / 16, 16 / 9][index % 7];
            const paddingTop = `${(1 / aspectRatio) * 100}%`;

            // Determine if this image should be loaded
            // Load the first 4 images immediately, and others when they become visible
            const shouldLoad = index < 4 || visibleImages[index];

            return (
              <div
                key={index}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                data-index={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group break-inside-avoid mb-4"
                onMouseEnter={() => preloadImage(index)}
                onClick={() => {
                  setCurrentImage(index);
                  setModalOpen(true);
                }}
              >
                <div className="relative w-full" style={{ paddingTop }}>
                  {/* Show a placeholder while no image is loaded */}
                  {!thumbnailsLoaded[index] && !shouldLoad && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}

                  {/* Show thumbnail first */}
                  <Image
                    src={getThumbnailUrl(image)}
                    alt={`Thumbnail ${index + 1}`}
                    className={`group-hover:scale-105 transition-all duration-300 ${originalImagesLoaded[index] ? 'opacity-0' : 'opacity-100'}`}
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
                      className={`group-hover:scale-105 transition-all duration-300 ${originalImagesLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                      fill
                      onLoad={() => handleOriginalImageLoad(index)}
                      priority={index < 4} // Prioritize loading only the first 4 original images
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
              </div>
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
              className="fixed inset-0 bg-black/90 z-50"
            >
              <div
                className="h-screen flex flex-col items-center justify-center p-4"
                onClick={() => setModalOpen(false)} // Close when clicking outside the image
              >
                <div
                  className="relative w-full max-w-4xl"
                  onClick={e => e.stopPropagation()} // Prevent closing when clicking on the image
                >
                  {/* Close button positioned relative to the image */}
                  <button
                    onClick={() => setModalOpen(false)}
                    className="absolute right-3 top-3 z-20 bg-black/60 text-white p-1.5 rounded-full hover:bg-black/80 shadow-md"
                    aria-label="Close modal"
                  >
                    <IoClose size={24} />
                  </button>
                  {/* Progressive loading for modal image */}
                  <div className="relative w-full flex justify-center items-center min-h-[60vh]">
                    {/* Loading placeholder while image loads */}
                    {!modalImageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-gray-800/20 rounded-lg p-8">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        </div>
                      </div>
                    )}

                    {/* First show thumbnail in modal while original loads */}
                    {!modalImageLoaded && (
                      <Image
                        src={getThumbnailUrl(images[currentImage])}
                        alt={`Thumbnail ${currentImage + 1}`}
                        className="max-h-[80vh] w-auto transition-all duration-300 blur-sm"
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
                        setOriginalImagesLoaded(prev => ({ ...prev, [currentImage]: true }));
                      }}
                      quality={90} /* Higher quality for modal view */
                      priority={true} /* Always prioritize the modal image */
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  {/* Modal Navigation Controls */}
                  <div
                    className="absolute inset-x-0 bottom-0 flex justify-between items-center p-2 sm:p-4"
                    onClick={e => e.stopPropagation()} // Prevent closing when clicking on navigation controls
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const prevImage = currentImage === 0 ? images.length - 1 : currentImage - 1;
                        setCurrentImage(prevImage);
                        // Preload the previous image for smoother navigation
                        preloadImage(prevImage);
                      }}
                      className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                      aria-label="Previous image"
                    >
                      <IoChevronBack size={24} />
                    </button>

                    <div className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                      {currentImage + 1}
                      {' '}
                      /
                      {images.length}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextImage = currentImage === images.length - 1 ? 0 : currentImage + 1;
                        setCurrentImage(nextImage);
                        // Preload the next image for smoother navigation
                        preloadImage(nextImage);
                      }}
                      className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
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
