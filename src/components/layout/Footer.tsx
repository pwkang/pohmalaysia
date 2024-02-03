import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className="flex justify-between px-8 py-4">
      <div className="flex gap-16">
        <Image
          src="/img/logo1.png"
          alt="Poh association Malaysia logo"
          width={123}
          height={122}
          className="object-contain"
        />
        <Image
          src="/img/logo2.png"
          alt="Poh association Malaysia logo"
          width={119}
          height={118}
          className="object-contain"
        />
      </div>
      <div className="text-right">
        <p className="uppercase text-xs mb-2">All rights reserved © 2024</p>
        <h5 className="text-2xl font-semibold font-cn">马来西亚傅氏总会</h5>
        <p className="uppercase text-sm font-bold">
          poh association of malaysia
        </p>
        <p className="uppercase text-sm">persatuan keturunan poh malaysia</p>
      </div>
    </div>
  );
}

export default Footer;
