'use client';

import React, { useState, useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import ReactSlick from 'react-slick';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface GalleryImagesProps {
  title: string;
  date: string;
  images: {
    url: string;
  }[];
}

function GalleryImages({ title, images, date }: GalleryImagesProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const sliderRef = useRef<ReactSlick>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Reset thumbnail refs array when images change
  useEffect(() => {
    thumbnailRefs.current = thumbnailRefs.current.slice(0, images.length);
  }, [images.length]);

  // Scroll to keep current thumbnail in view
  useEffect(() => {
    const currentThumbnail = thumbnailRefs.current[currentSlide];
    const container = thumbnailContainerRef.current;

    if (currentThumbnail && container) {
      // Get the position of the current thumbnail
      const thumbnailRect = currentThumbnail.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Calculate the scroll position to center the current thumbnail
      const thumbnailLeft = thumbnailRect.left;
      const thumbnailWidth = thumbnailRect.width;
      const containerLeft = containerRect.left;
      const containerWidth = containerRect.width;

      // Calculate the ideal position where the thumbnail would be centered
      const idealLeft = containerLeft + (containerWidth - thumbnailWidth) / 2;
      const scrollOffset = thumbnailLeft - idealLeft;

      // Smooth scroll to the calculated position
      container.scrollBy({
        left: scrollOffset,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    arrows: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          arrows: false,
        }
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  // Custom arrow components for better mobile experience
  function NextArrow(props: { onClick?: React.MouseEventHandler<HTMLButtonElement> }) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md hidden sm:block"
        aria-label="Next slide"
      >
        <IoChevronForward size={24} />
      </button>
    );
  }

  function PrevArrow(props: { onClick?: React.MouseEventHandler<HTMLButtonElement> }) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md hidden sm:block"
        aria-label="Previous slide"
      >
        <IoChevronBack size={24} />
      </button>
    );
  }

  return (
    <div className="mt-8">
      <h1 className="text-center font-sans">{title}</h1>
      <p className="text-xs tracking-widest text-center mt-4 uppercase font-bold font-sans">
        {dayjs(date).format('DD MMMM YYYY')}
        <span className="mx-2">•</span>
        {dayjs(date).format('YYYY')}年
      </p>

      <div className="max-w-[95%] md:max-w-[90%] w-5xl m-auto mt-8 mb-16">
        {/* Main Slider */}
        <div className="relative">
          <ReactSlick ref={sliderRef} {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="outline-none">
                <div
                  className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[32rem] cursor-pointer"
                  onClick={() => setModalOpen(true)}
                >
                  <Image
                    src={image.url}
                    alt={`Image ${index + 1}`}
                    className="object-contain"
                    fill
                  />
                </div>
              </div>
            ))}
          </ReactSlick>
        </div>

        {/* Thumbnail Grid */}
        <div className="relative mt-6">
          {/* Scroll indicators */}
          <div
            ref={thumbnailContainerRef}
            className="flex justify-center overflow-x-auto pb-2 scroll-smooth px-4 md:px-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          >
          {images.map((image, index) => {
            // Calculate distance from current slide (accounting for wrap-around)
            const distance = Math.min(
              Math.abs(index - currentSlide),
              Math.abs(index - currentSlide + images.length),
              Math.abs(index - currentSlide - images.length)
            );

            // Only show thumbnails that are within 3 positions of current slide
            const isVisible = distance <= 3;

            return (
              <div
                key={index}
                ref={el => thumbnailRefs.current[index] = el}
                className={`relative h-16 sm:h-20 min-w-[64px] sm:min-w-[80px] mx-1.5 cursor-pointer transition-all duration-300 ${
                  currentSlide === index ? 'ring-2 ring-blue-500 opacity-100 scale-110 z-10' : 'opacity-60 hover:opacity-90'
                } ${isVisible ? 'block' : 'hidden'}`}
                onClick={() => {
                  setCurrentSlide(index);
                  if (sliderRef.current) {
                    sliderRef.current.slickGoTo(index);
                  }
                }}
              >
                <Image
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="object-cover"
                  fill
                />
              </div>
            );
          })}
          </div>
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
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
                >
                  {/* Close button positioned relative to the image */}
                  <button
                    onClick={() => setModalOpen(false)}
                    className="absolute right-3 top-3 z-20 bg-black/60 text-white p-1.5 rounded-full hover:bg-black/80 shadow-md"
                    aria-label="Close modal"
                  >
                    <IoClose size={24} />
                  </button>
                  <Image
                    src={images[currentSlide].url}
                    alt={`Full size ${currentSlide + 1}`}
                    className="max-h-[80vh] w-auto object-contain mx-auto"
                    width={1920}
                    height={1080}
                  />

                  {/* Modal Navigation Controls */}
                  <div
                    className="absolute inset-x-0 bottom-0 flex justify-between items-center p-2 sm:p-4"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on navigation controls
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const prevSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
                        setCurrentSlide(prevSlide);
                        if (sliderRef.current) {
                          sliderRef.current.slickGoTo(prevSlide);
                        }
                      }}
                      className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                      aria-label="Previous image"
                    >
                      <IoChevronBack size={24} />
                    </button>

                    <div className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                      {currentSlide + 1} / {images.length}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
                        setCurrentSlide(nextSlide);
                        if (sliderRef.current) {
                          sliderRef.current.slickGoTo(nextSlide);
                        }
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
