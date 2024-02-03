'use client';

import React from 'react';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

function HeroSlider() {
  return (
    <div className="relative">
      <ReactSlick
        dots
        infinite
        speed={1000}
        slidesToShow={1}
        autoplay
        slidesToScroll={1}
        arrows={false}
        initialSlide={0}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={`hero_${index}`}>
            <Image
              src={`/img/heroSlider/hs${index + 1}.jpg`}
              alt="hero slider"
              width={1360}
              height={550}
              className="w-full h-[36rem] object-cover"
            />
          </div>
        ))}
      </ReactSlick>
    </div>
  );
}

export default HeroSlider;
