import React, { Fragment } from 'react';
import { fetchBodPage } from '../../../api/bod';
import Container from '../../Container';
import Image from 'next/image';
import config from '@/lib/config';
import { Committee } from '@/payload-types';

interface BodListingProps {
  slug: string;
}

async function BodListing({ slug }: BodListingProps) {
  const bodPage = await fetchBodPage(slug);
  const session = bodPage.sessions[1];

  return (
    <Container className="px-4 py-10 mt-8">
      <Image
        src="/img/committee/t2.png"
        alt="组织结构"
        width={456}
        height={86}
        className="mb-10"
      />
      <h1 className="text-center mb-12">{bodPage.name}</h1>
      <div className="flex flex-wrap justify-center gap-8 px-10">
        {isCommittee(session?.committees) && session?.committees.committees.map((committee) => {
          return (
            <Fragment key={`role-${committee.title}`}>
              {committee.members.map(member => (
                <div
                  className="rounded-xl overflow-hidden shadow-lg"
                  key={`member-${member.name}`}
                >
                  <div className="relative w-40 h-48">
                    <Image
                      alt={member.avatar?.alt || member.name}
                      src={member.avatar?.url || config.noAvatarUrl}
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

function isCommittee(committee?: Committee | string): committee is Committee {
  return typeof committee === 'object' && 'id' in committee;
}
