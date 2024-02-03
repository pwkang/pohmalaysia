import React from 'react';
import Container from '../../Container';
import CommitteeList from './_components/CommitteeList';

function CommitteeYouthGroup() {
  return (
    <Container className="p-4 mt-8">
      <h1 className="text-center">
        马来西亚傅氏公会青年团 <br /> 执行理事第5届 (2017-2020)
      </h1>
      <div className="mt-8">
        <CommitteeList
          永久名誉会长={['利安']}
          法律顾问={['万泉']}
          名誉顾问={['其昌']}
          执行顾问={['添来']}
          荣誉顾问={['国伟', '泰荣']}
          顾问={['泉福', '桂洋', '承崇', '永辉_Anson']}
          总团长={['威俍']}
          署理总团长={['承义']}
          副总团长={['来祥', '楚铭', '国胜']}
          总秘书={['国安']}
          副总秘书={['国祥']}
          总财政={['振洲']}
          副总财政={['升亮']}
          福利组主任={['稼赫']}
          福利组副主任={['铭杰']}
          文化事务主任={['一方']}
          副文化事务主任={['楚雯']}
          教育事务主任={['永辉']}
          副教育事务主任={['秋欣']}
          科技资讯主任={['文辉']}
          科技资讯副主任={['振鸿']}
          执委={['文宽', '绩强', '自刚', '振国', '依婷', '观友']}
          查账={['志添', '志雄']}
        />
      </div>
    </Container>
  );
}

export default CommitteeYouthGroup;
