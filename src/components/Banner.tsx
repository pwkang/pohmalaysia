import React from 'react';
import Image from 'next/image';

function Banner() {
  return (
    <>
      <div className="bg-[#f3f9fe] w-full flex justify-center">
        <div className="relative w-2xl">
          <Image
            src="/img/brand_banner.png"
            alt="Poh association Malaysia image"
            className="object-contain"
            width={654}
            height={135}
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
