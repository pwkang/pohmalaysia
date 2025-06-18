import { getPayloadClient } from '@/lib/utils';
import { CommitteePage } from '@/payload-types';

export const fetchBodPage = async (slug: string) => {
  const payload = await getPayloadClient();
  const committeePage = await payload.find({
    collection: 'committee-page',
    where: {
      slug: { equals: slug },
    },
    depth: 3,
  });

  return committeePage.docs[0] as CommitteePage;
};

export const fetchBodSlugs = async () => {
  const payload = await getPayloadClient();
  const committeeSlugs = await payload.find({
    collection: 'committee-page',
    select: {
      slug: true,
    },
  });

  return committeeSlugs.docs.map(page => page.slug) as string[];
};

export const getBodPageMetadata = async (slug: string) => {
  const payload = await getPayloadClient();
  const committeePage = await payload.find({
    collection: 'committee-page',
    where: {
      slug: { equals: slug },
    },
    select: {
      metaTitle: true,
      metaDescription: true,
    },
  });
  return committeePage.docs[0] as Pick<CommitteePage, 'metaDescription' | 'metaTitle'>;
};
