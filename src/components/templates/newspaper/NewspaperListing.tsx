import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { newspaper } from './newspaper';

function NewspaperListing() {
  return (
    <div className="m-auto mt-8 w-5xl max-w-[90%]">
      <h1>活动剪报</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {newspaper.map((event) => (
          <Link
            href={`/newspaper/${event.slug}`}
            key={event.slug}
            className="group flex w-full flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={`/img/newspaper/${event.slug}.jpg`}
                alt={event.title}
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                fill
              />
            </div>
            <div className="flex-1 bg-white p-6">
              <h3 className="text-center font-extrabold font-sans text-lg">{event.title}</h3>
              <p className="mt-2 text-center font-bold font-sans text-[0.65rem] uppercase tracking-widest">
                {dayjs(event.date).format('DD MMMM YYYY')}
                <span className="mx-2">•</span>
                {dayjs(event.date).format('YYYY')}年
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewspaperListing;
