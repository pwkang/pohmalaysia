import React from 'react';
import { Newspaper } from './newspaper';
import dayjs from 'dayjs';
import Image from 'next/image';

interface NewspaperPageProps {
  newspaper: Newspaper;
}

function NewspaperPage({ newspaper }: NewspaperPageProps) {
  return (
    <>
      <div className="max-w-[90%] w-5xl m-auto mt-8">
        <h1 className="text-center font-sans">{newspaper.title}</h1>
        <p className="text-xs tracking-widest text-center mt-4 uppercase font-bold font-sans">
          {dayjs(newspaper.date).format('DD MMMM YYYY')}
          <span className="mx-2">•</span>
          {dayjs(newspaper.date).format('YYYY')}
          年
        </p>
        <div className="mt-8 flex justify-center">
          <Image
            src={`/img/newspaper/${newspaper.slug}.jpg`}
            alt={newspaper.title}
            width={newspaper.imageWidth}
            height={newspaper.imageHeight}
            className="object-contain w-full max-h-[64rem]"
          />
        </div>
      </div>
    </>
  );
}

export default NewspaperPage;
