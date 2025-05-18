import React from 'react';
import Container from '../../Container';
import Image from 'next/image';
import Link from 'next/link';

function HistoryPreview() {
  return (
    <Container className="mt-12 mb-16 p-4">
      <div className="text-center mb-8">
        <Image 
          src="/img/home/t1.png" 
          alt="总会简史" 
          width={456} 
          height={86} 
          className="mx-auto"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-gray-600 space-y-4">
          <p className="text-lg">
            在我国独立后万象更新，大马乡团与宗亲组织如雨后春笋纷纷成立。宗族乡团的小团结已扩张到整个华社大团结。华裔社会能有今天巩固的组织基础，宗族乡团在这方面发挥的作用是无可置疑的。
          </p>
          <p className="text-lg">
            在1975年成立的傅氏公会，也是在这样的情况下, 受到大气候的感召成立，由几位高澹远瞩的宗亲前辈登高一呼，率先领导傅氏宗亲团结，在众志成城的情况下成功成立。
          </p>
          <div className="mt-8">
            <Link 
              href="/history" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              阅读完整历史
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={`history_preview_${index}`}
              className="aspect-square relative border-2 overflow-hidden rounded-lg shadow-md"
            >
              <Image
                alt={`history preview ${index}`}
                src={`/img/home/history/p${index}.jpg`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default HistoryPreview;
