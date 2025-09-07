import { getPayloadClient } from '@/lib/utils';

export const listAllNewspapers = async () => {
  const payload = await getPayloadClient();
  const newspapers = await payload.find({
    collection: 'newspapers',
    sort: 'date',
    limit: 500,
    select: {
      title: true,
      date: true,
      slug: true,
      file: true,
      createdAt: true,
      image: true,
    },
  });
  return newspapers.docs;
};

export const fetchNewspaperSlugs = async () => {
  const payload = await getPayloadClient();
  const newspaperSlugs = await payload.find({
    collection: 'newspapers',
    select: {
      slug: true,
    },
  });
  return newspaperSlugs.docs.map((newspaper) => newspaper.slug) as string[];
};

export const findNewspaperBySlug = async (slug: string) => {
  const payload = await getPayloadClient();
  const newspaper = await payload.find({
    collection: 'newspapers',
    where: {
      slug: { equals: slug },
    },
  });
  return newspaper.docs[0];
};

export const fetchNewspaperMetadata = async (slug: string) => {
  const payload = await getPayloadClient();
  const newspaper = await payload.find({
    collection: 'newspapers',
    where: {
      slug: { equals: slug },
    },
    select: {
      metaTitle: true,
      metaDescription: true,
    },
  });
  return newspaper.docs[0] as { metaTitle?: string; metaDescription?: string };
};
