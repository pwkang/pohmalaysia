import React from 'react';
import Container from '../../Container';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa';
import config from '@lib/config';

function ContactInfo() {
  return (
    <Container className="p-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 font-cn">联系我们</h1>
        <p className="text-gray-600">Contact Us</p>
      </div>

      <div className="mb-12">
        {/* Organization Information */}
        <div className="bg-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto">
          <div className="font-sans mb-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-1">
              马来西亚傅氏总会
            </h3>
            <p className="font-semibold">
              POH ASSOCIATION OF MALAYSIA
            </p>
            <p className="text-gray-600">
              PERSATUAN KETURUNAN POH MALAYSIA
            </p>
          </div>

          <div className="space-y-4 max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Contact: </span>
                016-3326088 (Eve)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Email: </span>
                <a href="mailto:pohmalaysia1975@gmail.com" className="text-blue-600 hover:underline">
                  pohmalaysia1975@gmail.com
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaFacebook className="text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Facebook: </span>
                <Link href={config.facebookUrl} target="_blank" className="text-blue-600 hover:underline">
                  www.facebook.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Current Office Location */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Current</div>
            <h2 className="text-2xl font-bold">Current Office Location</h2>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              <span className="font-semibold">Address: </span>
              <p>No.6B, Jalan SG 1/2, Seri Gombak, Batu Caves, 68100 Selangor D.E, Malaysia.</p>
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg mb-4">
            <Image
              src="/img/contact/office.jpg"
              alt="办公室"
              width={600}
              height={400}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="rounded-lg overflow-hidden">
            <iframe
              className="w-full h-[24rem] focus:outline-none border-0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6,%20Jalan%20SG%201/2,%20Taman%20Sri%20Gombak,%2068100%20Batu%20Caves,%20Selangor,%20Malaysia+(Poh%20Malaysia)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Future Office Location */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Coming Soon</div>
            <h2 className="text-2xl font-bold">Future Office Location</h2>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
            <div className="text-gray-700">
              <span className="font-semibold">Address: </span>
              <p>Taman Vista Hill, PT 58249, Jalan Mahkota 9, Bander Mahkota Cheras, 43200 Kajang Selangor.</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3.044203,%20101.782777&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="w-full h-[24rem] focus:outline-none border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContactInfo;
