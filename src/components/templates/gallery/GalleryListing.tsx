import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import { listAllGalleries } from '../../../api/gallery';
import { Media } from '@/payload-types';

// Helper function to get image URL from Media object or string
const getImageUrl = (image: string | Media | null): string => {
  if (!image) return '';
  if (typeof image === 'string') return image;
  return image.url || '';
};

async function GalleryListing() {
  const galleries = await listAllGalleries();

  return (
    <div className="max-w-[90%] w-5xl m-auto mt-8">
      <h1>活动相册</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-4">
        {galleries.reverse().map(event => (
          <Link
            href={`/gallery/${event.slug}`}
            key={event.slug}
            className="group flex w-full rounded-2xl overflow-hidden flex-col"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={getImageUrl(event.thumbnail)}
                alt={event.title}
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                fill
              />
            </div>
            <div className="bg-white p-6 flex-1">
              <h3 className="font-extrabold font-sans text-lg text-center">
                {event.title}
              </h3>
              <p className="text-[0.65rem] tracking-widest text-center mt-2 uppercase font-bold font-sans">
                {dayjs(event.date).format('DD MMMM YYYY')}
                <span className="mx-2">•</span>
                {dayjs(event.date).format('YYYY')}
                年
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GalleryListing;
