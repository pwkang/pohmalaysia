import Image from 'next/image';
import config from '@/lib/config';
import type { Committee, Media, Member } from '@/payload-types';
import { fetchBodPage } from '../../../api/bod';
import Container from '../../Container';

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
    <Container className="mt-8 px-4 py-10">
      <Image src="/img/committee/t2.png" alt="组织结构" width={456} height={86} className="mb-6" />
      <h1 className="mb-8 text-center font-bold text-3xl text-gray-800">{currentCommittee.name}</h1>

      <div className="space-y-2 px-4">
        {isCommittee(session?.committees) &&
          session?.committees.committees?.map((committee) => {
            if (!committee.members || committee.members.length === 0) return null;

            return (
              <div key={`role-${committee.title}`}>
                <div className="flex items-center gap-4">
                  {/* Role Title on the Left */}
                  <div className="w-32 min-w-0 flex-shrink-0 lg:w-40">
                    <h2 className="font-medium text-gray-600 text-sm leading-tight lg:text-base">
                      {committee.title}
                    </h2>
                  </div>

                  {/* Members Row on the Right */}
                  <div className="flex-1">
                    <div className="flex w-full flex-wrap gap-3 pb-2">
                      {committee.members.map((memberData, index) => {
                        const member =
                          typeof memberData === 'string' ? null : (memberData as Member);
                        if (!member) return null;

                        return (
                          <div
                            key={`member-${member.id}-${index}`}
                            className="group flex min-w-0 flex-col items-center"
                          >
                            {/* Avatar */}
                            <div className="relative mb-2 aspect-[3/4] w-24 overflow-hidden rounded-md shadow-sm transition-shadow duration-200 group-hover:shadow-md">
                              <Image
                                alt={getAvatarAlt(member.avatar, member.name || 'Member')}
                                src={getAvatarUrl(member.avatar)}
                                fill
                                className="object-cover"
                              />
                            </div>

                            {/* Name */}
                            <p className="text-center font-medium text-gray-700 text-md leading-tight">
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
