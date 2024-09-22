import React, { Fragment } from 'react';
import { fetchBodPage } from '../../../api/bod';
import Container from '../../Container';
import Image from 'next/image';

interface BodListingProps {
  slug: string;
}

async function BodListing({ slug }: BodListingProps) {
  const bodPage = await fetchBodPage(slug);
  const currentBods = bodPage.bods[0];

  return (
    <Container className="px-4 py-10 mt-8">
      <Image
        src="/img/committee/t2.png"
        alt="组织结构"
        width={456}
        height={86}
        className="mb-10"
      />
      <h1 className="text-center mb-12">{currentBods?.name}</h1>
      <div className="flex flex-wrap justify-center gap-8 px-10">
        {currentBods?.committees.map((committee) => {
          return (
            <Fragment key={`role-${committee.title}`}>
              {committee.newRow && <hr className="w-full h-0 border-none" />}
              {committee.members.map((member) => (
                <div
                  className="rounded-xl overflow-hidden shadow-lg"
                  key={`member-${member.name}`}
                >
                  <div className="relative w-48 h-56">
                    <Image
                      alt={member.avatar?.alt}
                      src={member.avatar?.url}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-6 py-6 text-center">
                    <p className="font-bold text-gray-700 text-xl">
                      {member.name}
                    </p>
                    <p className="text-md text-neutral-400">
                      {committee.title}
                    </p>
                  </div>
                </div>
              ))}
            </Fragment>
          );
        })}
      </div>
    </Container>
  );
}

export default BodListing;
