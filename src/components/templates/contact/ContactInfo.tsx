import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import config from '@/lib/config';
import Container from '../../Container';

function ContactInfo() {
  return (
    <Container className="p-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-2 font-bold font-cn text-4xl">联系我们</h1>
        <p className="text-gray-600">Contact Us</p>
      </div>

      <div className="mb-12">
        {/* Organization Information */}
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6 text-center font-sans">
            <h3 className="mb-1 font-bold text-2xl text-blue-600">马来西亚傅氏总会</h3>
            <p className="font-semibold">POH ASSOCIATION OF MALAYSIA</p>
            <p className="text-gray-600">PERSATUAN KETURUNAN POH MALAYSIA</p>
          </div>

          <div className="mx-auto max-w-md space-y-4">
            <div className="flex items-center gap-3">
              <FaPhone className="flex-shrink-0 text-blue-600" />
              <p className="text-gray-700">
                <span className="font-semibold">Contact: </span>
                {config.phone} (Eve)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="flex-shrink-0 text-blue-600" />
              <p className="text-gray-700">
                <span className="font-semibold">Email: </span>
                <a href={`mailto:${config.email}`} className="text-blue-600 hover:underline">
                  {config.email}
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaFacebook className="flex-shrink-0 text-blue-600" />
              <p className="text-gray-700">
                <span className="font-semibold">Facebook: </span>
                <Link
                  href={config.facebookUrl}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  www.facebook.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Current Office Location */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <div className="rounded-full bg-blue-100 px-2.5 py-0.5 font-medium text-blue-800 text-xs">
              Current
            </div>
            <h2 className="font-bold text-2xl">Current Office Location</h2>
          </div>

          <div className="mb-4 flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-blue-600" />
            <p className="text-gray-700">
              <span className="font-semibold">Address: </span>
              <span>
                No.6B, Jalan SG 1/2, Seri Gombak, Batu Caves, 68100 Selangor D.E, Malaysia.
              </span>
            </p>
          </div>

          <div className="relative mb-4 overflow-hidden rounded-lg">
            <Image
              src="/img/contact/office.jpg"
              alt="办公室"
              width={600}
              height={400}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <iframe
              className="h-[24rem] w-full border-0 focus:outline-none"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6,%20Jalan%20SG%201/2,%20Taman%20Sri%20Gombak,%2068100%20Batu%20Caves,%20Selangor,%20Malaysia+(Poh%20Malaysia)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Future Office Location */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <div className="rounded-full bg-green-100 px-2.5 py-0.5 font-medium text-green-800 text-xs">
              Coming Soon
            </div>
            <h2 className="font-bold text-2xl">Office Location 🚧</h2>
          </div>

          <div className="mb-4 flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-blue-600" />
            <div className="text-gray-700">
              <span className="font-semibold">Address: </span>
              <p>
                Taman Vista Hill, PT 58249, Jalan Mahkota 9, Bander Mahkota Cheras, 43200 Kajang
                Selangor.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3.044203,%20101.782777&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="h-[24rem] w-full border-0 focus:outline-none"
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
