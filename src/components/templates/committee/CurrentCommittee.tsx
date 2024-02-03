import React from 'react';
import Container from '../../Container';
import Image from 'next/image';
import CommitteeList from './_components/CommitteeList';

function CurrentCommittee() {
  return (
    <Container className="p-4 mt-8">
      <Image
        src="/img/committee/t2.png"
        alt="组织结构"
        width={456}
        height={86}
      />
      <h1 className="text-center mt-6">
        马来西亚傅氏公会第22届 (2017–2020年) 理事会
      </h1>
      <div className="mt-8">
        <CommitteeList
          永久名誉会长={['利安']}
          法律顾问={['万泉']}
          名誉顾问={['其昌']}
          顾问={['泉福']}
          荣誉会长={['水城', '添祥']}
          总会长={['添来']}
          署理总会长={['文荣']}
          副总会长={['民和', '志明', '文辉', '国伟', '金顺']}
          总秘书={['桂洋']}
          副总秘书={['添明']}
          总财政={['志添']}
          副总财政={['国谋']}
          青年团团长={['威俍']}
          妇女组主任={['傅梁麗娟']}
          文教组主任={['金来']}
          副文教组主任={['国有', '凯欣', '再利']}
          福利组主任={['麒珲']}
          福利组副主任={['文和', '進来', '国胜', '志雄', '得耀', '重瑞']}
          宣传主任={['承崇']}
          副宣传主任={['观娣', '国喜', '文清']}
          执委={['文仲', '立强', '文清', '全和', '振国']}
          查账={['国安', '进杰']}
        />
      </div>
    </Container>
  );
}

export default CurrentCommittee;
