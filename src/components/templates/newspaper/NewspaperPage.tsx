import dayjs from 'dayjs';
import Image from 'next/image';
import type { Newspaper } from './newspaper';

interface NewspaperPageProps {
  newspaper: Newspaper;
}

function NewspaperPage({ newspaper }: NewspaperPageProps) {
  return (
    <div className="m-auto mt-8 w-5xl max-w-[90%]">
      <h1 className="text-center font-sans">{newspaper.title}</h1>
      <p className="mt-4 text-center font-bold font-sans text-xs uppercase tracking-widest">
        {dayjs(newspaper.date).format('DD MMMM YYYY')}
        <span className="mx-2">•</span>
        {dayjs(newspaper.date).format('YYYY')}年
      </p>
      <div className="mt-8 flex justify-center">
        <Image
          src={`/img/newspaper/${newspaper.slug}.jpg`}
          alt={newspaper.title}
          width={newspaper.imageWidth}
          height={newspaper.imageHeight}
          className="max-h-[64rem] w-full object-contain"
        />
      </div>
    </div>
  );
}

export default NewspaperPage;
