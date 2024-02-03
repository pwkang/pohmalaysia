import React from 'react';
import Container from '../../Container';
import Image from 'next/image';

interface President {
  placeString: string;
  name: string;
  term: string;
  year: string;
}

const presidentList: President[] = [
  {
    placeString: '第一任',
    name: '金水宗长',
    term: '第1届',
    year: '(1975 – 1977)',
  },
  {
    placeString: '第二任',
    name: '成基宗长',
    term: '第2届',
    year: '(1977 – 1979)',
  },
  {
    placeString: '第三任',
    name: '清义宗长',
    term: '第3届',
    year: '(1979 – 1981)',
  },
  {
    placeString: '第四任',
    name: '利安宗长',
    term: '第4届至第6届',
    year: '(1981 – 1987)',
  },
  {
    placeString: '第五任',
    name: '开清宗长',
    term: '第7届至第9届',
    year: '(1987 – 1993)',
  },
  {
    placeString: '第六任',
    name: '利安宗长',
    term: '第10届至第12届',
    year: '(1993 – 1999)',
  },
  {
    placeString: '第七任',
    name: '泉福宗长',
    term: '第13届至第15届',
    year: '(1999 – 2005)',
  },
  {
    placeString: '第八任',
    name: '木松宗长',
    term: '第16届至第18届',
    year: '(2005 – 2011)',
  },
  {
    placeString: '第九任',
    name: '拿督添来宗长',
    term: '第19届至第23届',
    year: '(2011 – 2023)',
  },
];

function PastPresident(props) {
  return (
    <Container className="mt-6 p-4">
      <h1>历届会长</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {presidentList.map((president, index) => (
          <div
            key={president.name}
            className="flex flex-col justify-center items-center mt-6"
          >
            <Image
              src={`/img/home/past_president/president${index + 1}.jpg`}
              alt={`${president.name}宗长`}
              width={130}
              height={170}
            />
            <p className="text-center font-cn">{president.placeString}</p>
            <p className="text-center font-cn">{president.name}</p>
            <p className="text-center font-cn">{president.term}</p>
            <p className="text-center font-cn">{president.year}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default PastPresident;
