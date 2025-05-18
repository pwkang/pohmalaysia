'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface President {
  placeString: string;
  name: string;
  term: string;
  year: string;
  bio?: string; // Optional biography text
}

const presidentList: President[] = [
  {
    placeString: '第一任',
    name: '金水宗长',
    term: '第1届',
    year: '(1975 – 1977)',
    bio: '作为马来西亚傅氏公会的首任会长，金水宗长奠定了公会的基础，带领公会完成初期的组织工作。'
  },
  {
    placeString: '第二任',
    name: '成基宗长',
    term: '第2届',
    year: '(1977 – 1979)',
    bio: '成基宗长在任期间积极推动公会发展，开始筹划购置会所的计划。'
  },
  {
    placeString: '第三任',
    name: '清义宗长',
    term: '第3届',
    year: '(1979 – 1981)',
    bio: '清义宗长在任期间为公会争取到一间三层店屋作为会所，为公会的长期发展奠定了重要基础。'
  },
  {
    placeString: '第四任',
    name: '利安宗长',
    term: '第4届至第6届',
    year: '(1981 – 1987)',
    bio: '利安宗长前后担任公会六届会长，出钱出力，慷慨捐助当时的RM30,000公会基金，公会感激利安的义举，遂把公会礼堂命名为《利安厅》以资纪念。'
  },
  {
    placeString: '第五任',
    name: '开清宗长',
    term: '第7届至第9届',
    year: '(1987 – 1993)',
    bio: '开清宗长在任期间积极推动公会各项活动，促进宗亲之间的联系与交流。'
  },
  {
    placeString: '第六任',
    name: '利安宗长',
    term: '第10届至第12届',
    year: '(1993 – 1999)',
    bio: '利安宗长再次担任会长，继续为公会的发展做出重要贡献，深受会员宗亲敬爱。'
  },
  {
    placeString: '第七任',
    name: '泉福宗长',
    term: '第13届至第15届',
    year: '(1999 – 2005)',
    bio: '泉福宗长在任期间致力于扩大公会影响力，增强与其他华人社团的联系。'
  },
  {
    placeString: '第八任',
    name: '木松宗长',
    term: '第16届至第18届',
    year: '(2005 – 2011)',
    bio: '木松宗长在任期间推动公会现代化发展，加强青年团与妇女组的活动。'
  },
  {
    placeString: '第九任',
    name: '拿督添来宗长',
    term: '第19届至第23届',
    year: '(2011 – 2023)',
    bio: '拿督添来宗长在任12年期间，带领公会迈向新的发展阶段，扩大公会规模与影响力。'
  },
  {
    placeString: '第十任',
    name: '桂洋宗长',
    term: '第24届',
    year: '(2023 – 2026)',
    bio: '桂洋宗长作为现任会长，致力于公会的现代化转型，推动数字化发展，提升公会形象。'
  }
];

function PastChairmanListing() {
  const [selectedChairman, setSelectedChairman] = useState<President | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header section with title and description */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 font-cn">历届会长</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          自1975年马来西亚傅氏公会成立以来，历届会长带领公会不断发展壮大，为宗亲服务，传承傅氏精神。
          以下是历届担任会长职务的宗长，他们的贡献与付出让我们永远铭记。
        </p>
      </div>

      {/* Timeline indicator */}
      <div className="hidden md:block relative h-1 bg-gray-200 max-w-5xl mx-auto mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 w-full transform scale-x-100 origin-left"></div>
        {presidentList.map((_, index) => (
          <div 
            key={`timeline-${index}`}
            className="absolute w-3 h-3 rounded-full bg-indigo-600 border-2 border-white"
            style={{ 
              left: `${(index / (presidentList.length - 1)) * 100}%`, 
              top: '-4px' 
            }}
          />
        ))}
      </div>

      {/* Chairman grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {presidentList.map((president, index) => (
          <motion.div
            key={president.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
            onClick={() => setSelectedChairman(president)}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={`/img/home/past_chairman/chairman${index + 1}.jpg`}
                  alt={`${president.name}宗长`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm opacity-80">{president.placeString}</p>
                  <h3 className="text-xl font-bold font-cn">{president.name}</h3>
                  <p className="text-sm opacity-80">{president.term}</p>
                  <p className="text-sm opacity-80">{president.year}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm line-clamp-3">{president.bio}</p>
                <button className="mt-3 text-indigo-600 text-sm font-medium hover:text-indigo-800">
                  查看详情
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for chairman details */}
      {selectedChairman && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedChairman(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-white z-10"
                onClick={() => setSelectedChairman(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={`/img/home/past_chairman/chairman${presidentList.findIndex(p => p.name === selectedChairman.name) + 1}.jpg`}
                    alt={`${selectedChairman.name}宗长`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-4">
                    <p className="text-gray-500">{selectedChairman.placeString}</p>
                    <h2 className="text-2xl font-bold font-cn">{selectedChairman.name}</h2>
                    <p className="text-gray-500">{selectedChairman.term} {selectedChairman.year}</p>
                  </div>
                  <div className="prose">
                    <p>{selectedChairman.bio}</p>
                    <p className="mt-4">
                      在{selectedChairman.name}的领导下，马来西亚傅氏公会取得了显著的发展与进步。
                      他的奉献精神与领导才能为公会的壮大做出了重要贡献，赢得了全体宗亲的尊敬与爱戴。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default PastChairmanListing;
