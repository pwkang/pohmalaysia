import React from 'react';
import { fetchBodPage } from '../../../api/bod';
import Container from '../../Container';
import Image from 'next/image';
import config from '@/lib/config';
import { Committee, Member, Media } from '@/payload-types';

interface BodListingProps {
  slug: string;
}

async function BodListing({ slug }: BodListingProps) {
  const bodPage = await fetchBodPage(slug);
  const session = bodPage.sessions[1];
  const currentCommittee = isCommittee(session?.committees) ? session?.committees : null;

  const getAvatarUrl = (avatar: string | Media | null | undefined): string => {
    if (!avatar) return config.noAvatarUrl;
    if (typeof avatar === 'string') return config.noAvatarUrl;
    return avatar.url || config.noAvatarUrl;
  };

  const getAvatarAlt = (avatar: string | Media | null | undefined, name: string): string => {
    if (!avatar || typeof avatar === 'string') return name;
    return avatar.alt || name;
  };

  if (!currentCommittee) return <></>;

  return (
    <Container className="px-4 py-10 mt-8">
      <Image
        src="/img/committee/t2.png"
        alt="组织结构"
        width={456}
        height={86}
        className="mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        {currentCommittee.name}
      </h1>

      <div className="space-y-2 px-4">
        {isCommittee(session?.committees) && session?.committees.committees?.map((committee) => {
          if (!committee.members || committee.members.length === 0) return null;

          return (
            <div key={`role-${committee.title}`}>
              <div className="flex items-center gap-4">
                {/* Role Title on the Left */}
                <div className="flex-shrink-0 min-w-0 w-32 lg:w-40">
                  <h2 className="text-sm lg:text-base font-medium text-gray-600 leading-tight">
                    {committee.title}
                  </h2>
                </div>

                {/* Members Row on the Right */}
                <div className="flex-1">
                  <div className="flex w-full gap-3 pb-2 flex-wrap">
                    {committee.members.map((memberData, index) => {
                      const member = typeof memberData === 'string' ? null : memberData as Member;
                      if (!member) return null;

                      return (
                        <div
                          key={`member-${member.id}-${index}`}
                          className="flex flex-col items-center group min-w-0"
                        >
                          {/* Avatar */}
                          <div className="relative w-24 aspect-[3/4] mb-2 rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-200">
                            <Image
                              alt={getAvatarAlt(member.avatar, member.name || 'Member')}
                              src={getAvatarUrl(member.avatar)}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Name */}
                          <p className="text-md font-medium text-gray-700 text-center leading-tight">
                            {member.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
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
