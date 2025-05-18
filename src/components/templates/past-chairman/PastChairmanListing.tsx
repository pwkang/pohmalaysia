import React from 'react';
import Image from 'next/image';

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
  // Get current chairman (last in the list)
  const currentChairman = presidentList[presidentList.length - 1];
  // Get past chairmen (all except the last one, in reverse order)
  const pastChairmen = [...presidentList.slice(0, -1)].reverse();

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Modern header section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-2 font-cn bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">历届会长</h1>
        <p className="text-gray-600 max-w-3xl">
          自1975年马来西亚傅氏公会成立以来，历届会长带领公会不断发展壮大，为宗亲服务，传承傅氏精神。
        </p>
      </div>

      {/* Current Chairman Feature Section */}
      <div className="mb-20">
        <div className="flex items-center mb-8">
          <h2 className="text-2xl font-bold font-cn text-gray-800">现任会长</h2>
          <div className="h-[1px] bg-gradient-to-r from-indigo-500 to-transparent flex-grow ml-4"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image section */}
            <div className="md:w-1/3 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 flex items-center justify-center">
              <div className="relative w-48 h-64 overflow-hidden">
                <Image
                  src={`/img/home/past_chairman/chairman${presidentList.length}.jpg`}
                  alt={`${currentChairman.name}宗长`}
                  width={240}
                  height={320}
                  className="object-contain"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>

            {/* Content section */}
            <div className="md:w-2/3 p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-3xl font-bold font-cn text-gray-800">{currentChairman.name}</h3>
                <div className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
                  {currentChairman.placeString}
                </div>
                <div className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                  {currentChairman.term}
                </div>
                <div className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {currentChairman.year}
                </div>
              </div>

              <p className="text-gray-600 mb-6">{currentChairman.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Past Chairmen Section */}
      <div>
        <div className="flex items-center mb-8">
          <h2 className="text-2xl font-bold font-cn text-gray-800">历届会长</h2>
          <div className="h-[1px] bg-gradient-to-r from-indigo-500 to-transparent flex-grow ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastChairmen.map((president) => (
            <div
              key={president.year}
              className="group"
            >
              <div
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-all duration-300 h-full flex flex-col"
              >
                <div className="p-5 flex items-start gap-4">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-24 overflow-hidden bg-gray-50 rounded">
                      <Image
                        src={`/img/home/past_chairman/chairman${presidentList.findIndex(p => p.name === president.name) + 1}.jpg`}
                        alt={`${president.name}宗长`}
                        width={100}
                        height={120}
                        className="object-contain"
                        style={{ objectPosition: 'center top' }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold font-cn text-gray-800">{president.name}</h3>
                      <div className="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full">
                        {president.placeString}
                      </div>
                    </div>
                    <div className="flex gap-2 text-xs text-gray-500 mb-2">
                      <span>{president.term}</span>
                      <span>•</span>
                      <span>{president.year}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{president.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PastChairmanListing;
