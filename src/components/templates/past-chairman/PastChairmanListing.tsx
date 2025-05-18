'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@lib/utils';

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

      {/* Vertical Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Center line - positioned behind everything */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full z-0"></div>

        {/* Timeline items */}
        <div className="space-y-12">
          {presidentList.map((president, index) => (
            <motion.div
              key={president.year}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(`relative flex items-center md:flex-row-reverse md:even:flex-row`,
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              )}
            >
              {/* Timeline dot - positioned behind the card */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-indigo-600 z-0"></div>

              {/* Year marker - also positioned behind the card */}
              <div className={cn(`absolute left-1/2 transform -translate-x-1/2 md:mb-0 md:mt-0 md:left-auto md:right-1/2 md:translate-x-0 md:mr-8 md:even:mr-0 md:even:ml-8 md:even:left-1/2 z-0`,
                index % 2 === 0 ? 'md:mr-auto mt-8' : 'md:ml-auto mb-8'
              )}
              >
                <div className="bg-indigo-100 text-indigo-800 font-bold py-1 px-3 rounded-full text-sm whitespace-nowrap">
                  {president.year}
                </div>
              </div>

              {/* Content card - with higher z-index to appear in front of the dot */}
              <div className={cn(`w-full md:w-[calc(50%-2rem)] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative z-10`,
                index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
              )}
                onClick={() => setSelectedChairman(president)}>
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gray-100">
                      <Image
                        src={`/img/home/past_chairman/chairman${index + 1}.jpg`}
                        alt={`${president.name}宗长`}
                        width={200}
                        height={260}
                        className="object-contain transition-transform duration-500 hover:scale-105"
                        style={{ objectPosition: 'center top' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 md:hidden"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:hidden">
                        <p className="text-sm opacity-80">{president.placeString}</p>
                        <h3 className="text-xl font-bold font-cn">{president.name}</h3>
                        <p className="text-sm opacity-80">{president.term}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="hidden md:block">
                      <p className="text-indigo-600 font-medium">{president.placeString}</p>
                      <h3 className="text-2xl font-bold font-cn mb-1">{president.name}</h3>
                      <p className="text-gray-500 mb-4">{president.term}</p>
                    </div>
                    <p className="text-gray-600 line-clamp-3 md:line-clamp-none">{president.bio}</p>
                    <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
                      查看详情
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
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

              <div className="flex flex-col">
                {/* Header with image and basic info */}
                <div className="flex flex-col md:flex-row">
                  {/* Image section */}
                  <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
                    <div className="relative w-full max-w-[300px]">
                      <Image
                        src={`/img/home/past_chairman/chairman${presidentList.findIndex(p => p.name === selectedChairman.name) + 1}.jpg`}
                        alt={`${selectedChairman.name}宗长`}
                        width={300}
                        height={400}
                        className="object-contain mx-auto"
                        style={{ objectPosition: 'center top' }}
                      />
                    </div>
                  </div>

                  {/* Info section */}
                  <div className="md:w-2/3 bg-gradient-to-r from-indigo-600 to-blue-700 p-8 flex items-center">
                    <div className="text-white">
                      <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold py-1 px-4 rounded-full mb-4">
                        {selectedChairman.placeString}
                      </div>
                      <h2 className="text-4xl font-bold font-cn mb-4">{selectedChairman.name}</h2>
                      <div className="flex items-center space-x-2 mb-6">
                        <span className="text-white/90 font-medium">{selectedChairman.term}</span>
                        <span className="text-white/60">•</span>
                        <span className="text-white/90 font-medium">{selectedChairman.year}</span>
                      </div>
                      <p className="text-white/80 text-lg">{selectedChairman.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-6">
                        <h4 className="text-xl font-bold mb-3 text-indigo-800">贡献与成就</h4>
                        <p className="text-gray-700">
                          在{selectedChairman.name}的领导下，马来西亚傅氏公会取得了显著的发展与进步。
                          他的奉献精神与领导才能为公会的壮大做出了重要贡献，赢得了全体宗亲的尊敬与爱戴。
                        </p>
                      </div>

                      <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
                        <h4 className="text-xl font-bold mb-3 text-blue-800">历史地位</h4>
                        <p className="text-gray-700">
                          作为第{selectedChairman.placeString.replace('第', '').replace('任', '')}位会长，
                          {selectedChairman.name}在马来西亚傅氏公会的历史上占有重要地位。
                          他的领导风格和决策对公会的发展方向产生了深远影响。
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                      <button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 flex items-center"
                        onClick={() => setSelectedChairman(null)}
                      >
                        返回列表
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                      </button>
                    </div>
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
