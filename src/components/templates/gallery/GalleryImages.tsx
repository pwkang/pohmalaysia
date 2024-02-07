import React from 'react';
import { GalleryEvent } from './events';
import dayjs from 'dayjs';
import Image from 'next/image';

interface GalleryImagesProps {
  event: GalleryEvent;
}

function GalleryImages({ event }: GalleryImagesProps) {
  return (
    <div className="mt-8">
      <h1 className="text-center font-sans">{event.title}</h1>
      <p className="text-xs tracking-widest text-center mt-4 uppercase font-bold font-sans">
        {dayjs(event.date).format('DD MMMM YYYY')}
        <span className="mx-2">•</span>
        {dayjs(event.date).format('YYYY')}年
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[90%] w-5xl m-auto gap-4 mt-8">
        {Array.from({ length: event.totalImages }).map((_, index) => (
          <div
            key={index}
            className="group relative w-full h-48 overflow-hidden cursor-pointer"
          >
            <Image
              src={`/img/gallery/events/${event.slug}/image-${index + 1}.jpg`}
              alt={'Image ' + (index + 1)}
              className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryImages;
