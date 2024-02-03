import React from 'react';
import { COMMITTEE } from '@lib/committee';
import Image from 'next/image';

type CommitteeUser = keyof typeof COMMITTEE;

interface CommitteeListProps {
  永久名誉会长?: CommitteeUser[];
  法律顾问?: CommitteeUser[];
  名誉顾问?: CommitteeUser[];
  顾问?: CommitteeUser[];
  执行顾问?: CommitteeUser[];
  荣誉顾问?: CommitteeUser[];
  荣誉会长?: CommitteeUser[];
  主席?: CommitteeUser[];
  副主席?: CommitteeUser[];
  总会长?: CommitteeUser[];
  署理总会长?: CommitteeUser[];
  副总会长?: CommitteeUser[];
  总团长?: CommitteeUser[];
  署理总团长?: CommitteeUser[];
  副总团长?: CommitteeUser[];
  总秘书?: CommitteeUser[];
  副总秘书?: CommitteeUser[];
  总财政?: CommitteeUser[];
  副总财政?: CommitteeUser[];
  青年团团长?: CommitteeUser[];
  妇女组主任?: CommitteeUser[];
  文教组主任?: CommitteeUser[];
  副文教组主任?: CommitteeUser[];
  福利组主任?: CommitteeUser[];
  福利组副主任?: CommitteeUser[];
  康乐主任?: CommitteeUser[];
  副康乐主任?: CommitteeUser[];
  文化事务主任?: CommitteeUser[];
  副文化事务主任?: CommitteeUser[];
  教育事务主任?: CommitteeUser[];
  副教育事务主任?: CommitteeUser[];
  科技资讯主任?: CommitteeUser[];
  科技资讯副主任?: CommitteeUser[];
  宣传主任?: CommitteeUser[];
  副宣传主任?: CommitteeUser[];
  执委?: CommitteeUser[];
  查账?: CommitteeUser[];
}

const CommitteeMap = (position: string) =>
  function Committee(name: CommitteeUser) {
    const committee = COMMITTEE[name];

    return (
      <div className="flex flex-col items-center justify-start">
        <div className="w-36 mb-2">
          <Image
            src={
              committee && 'profile' in committee
                ? committee.profile
                : '/img/profiles/no-pic.jpg'
            }
            alt={name}
            width={425}
            height={517}
          />
        </div>
        <div className="text-center">
          <p className="text-gray-700">{committee?.name}</p>
          <p className="text-gray-400">{position}</p>
        </div>
      </div>
    );
  };

function CommitteeList(props: CommitteeListProps) {
  const className =
    'flex flex-wrap gap-6 md:gap-16 justify-center [&>div:last-child]:mb-12';
  return (
    <div className="px-2 md:px-8">
      <div className={className}>
        {props.永久名誉会长?.map(CommitteeMap('永久名誉会长'))}
        {props.法律顾问?.map(CommitteeMap('法律顾问'))}
        {props.名誉顾问?.map(CommitteeMap('名誉顾问'))}
        {props.执行顾问?.map(CommitteeMap('执行顾问'))}
        {props.荣誉顾问?.map(CommitteeMap('荣誉顾问'))}
        {props.顾问?.map(CommitteeMap('顾问'))}
        {props.荣誉会长?.map(CommitteeMap('荣誉会长'))}
      </div>
      <div className={className}>
        {props.总会长?.map(CommitteeMap('总会长'))}
      </div>
      <div className={className}>
        {props.署理总会长?.map(CommitteeMap('署理总会长'))}
      </div>
      <div className={className}>
        {props.副总会长?.map(CommitteeMap('副总会长'))}
      </div>
      <div className={className}>
        {props.总团长?.map(CommitteeMap('总团长'))}
      </div>
      <div className={className}>
        {props.署理总团长?.map(CommitteeMap('署理总团长'))}
      </div>
      <div className={className}>
        {props.副总团长?.map(CommitteeMap('副总团长'))}
      </div>
      <div className={className}>{props.主席?.map(CommitteeMap('主席'))}</div>
      <div className={className}>
        {props.副主席?.map(CommitteeMap('副主席'))}
      </div>
      <div className={className}>
        {props.总秘书?.map(CommitteeMap('总秘书'))}
        {props.副总秘书?.map(CommitteeMap('副总秘书'))}
        {props.总财政?.map(CommitteeMap('总财政'))}
        {props.副总财政?.map(CommitteeMap('副总财政'))}
      </div>
      <div className={className}>
        {props.青年团团长?.map(CommitteeMap('青年团团长'))}
        {props.妇女组主任?.map(CommitteeMap('妇女组主任'))}
      </div>
      <div className={className}>
        {props.康乐主任?.map(CommitteeMap('康乐主任'))}
        {props.副康乐主任?.map(CommitteeMap('副康乐主任'))}
        {props.福利组主任?.map(CommitteeMap('福利组主任'))}
        {props.福利组副主任?.map(CommitteeMap('福利组副主任'))}
        {props.文教组主任?.map(CommitteeMap('文教组主任'))}
        {props.副文教组主任?.map(CommitteeMap('副文教组主任'))}
        {props.文化事务主任?.map(CommitteeMap('文化事务主任'))}
        {props.副文化事务主任?.map(CommitteeMap('副文化事务主任'))}
      </div>
      <div className={className}>
        {props.教育事务主任?.map(CommitteeMap('教育事务主任'))}
        {props.副教育事务主任?.map(CommitteeMap('副教育事务主任'))}
        {props.科技资讯主任?.map(CommitteeMap('科技资讯主任'))}
        {props.科技资讯副主任?.map(CommitteeMap('科技资讯副主任'))}
      </div>
      <div className={className}>
        {props.宣传主任?.map(CommitteeMap('宣传主任'))}
        {props.副宣传主任?.map(CommitteeMap('副宣传主任'))}
      </div>
      <div className={className}>{props.执委?.map(CommitteeMap('执委'))}</div>
      <div className={className}>{props.查账?.map(CommitteeMap('查账'))}</div>
    </div>
  );
}

export default CommitteeList;
