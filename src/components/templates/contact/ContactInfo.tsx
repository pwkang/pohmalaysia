import React from 'react';
import Container from '../../Container';
import Image from 'next/image';

function ContactInfo() {
  return (
    <Container className="p-4">
      <Image src="/img/contact/t6.png" alt="联系我们" width={456} height={86} />
      <Image
        src="/img/contact/office.jpg"
        alt="办公室"
        width={400}
        height={265}
      />
      <div className="font-sans pt-4 text-black">
        <p className="text-lg font-extrabold text-black leading-tight">
          马来西亚傅氏总会
          <br />
          POH ASSOCIATION OF MALAYSIA
          <br />
          PERSATUAN KETURUNAN POH MALAYSIA
          <br />
        </p>
      </div>
      <div className="pt-4 font-sans">
        <p className="text-black text-sm">
          <span className="font-bold">Address : </span>
          No.6B,Jalan SG 1/2,Seri Gombak,Batu Caves,68100 Selangor D.E,Malaysia.
        </p>
        <p className="text-black text-sm">
          <span className="font-bold">Tel : </span>
          03-61868780
          <span className="font-bold ms-4">Fax : </span>
          03-61891739
        </p>
        <p className="text-black text-sm">
          <span className="font-bold">Email :</span>
          pohmalaysia1975@gmail.com
        </p>

        <p className="text-black text-sm">
          <span className="font-bold">Facebook : </span>
          www.facebook.com/malaysia.poh
        </p>
      </div>
      <div className="px-12 py-8">
        <iframe
          // frameBorder="0"
          // scrolling="no"
          // marginHeight="0"
          // marginWidth="0"
          className="w-full h-[32rem] focus:outline-none"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6,%20Jalan%20SG%201/2,%20Taman%20Sri%20Gombak,%2068100%20Batu%20Caves,%20Selangor,%20Malaysia+(Poh%20Malaysia)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Population Estimator map</a>
        </iframe>
      </div>
    </Container>
  );
}

export default ContactInfo;
