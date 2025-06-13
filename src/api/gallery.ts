import { getPayloadClient } from '@/lib/utils';
import { Gallery } from '@/payload-types';

export const fetchGallery = async (slug: string) => {
  const payload = await getPayloadClient();
  const gallery = await payload.find({
    collection: 'gallery',
    where: {
      slug: { equals: slug },
    },
  });
  return gallery.docs[0] as Gallery;
};

export const fetchGalleryMetadata = async (slug: string) => {
  const payload = await getPayloadClient();
  const gallery = await payload.find({
    collection: 'gallery',
    where: {
      slug: { equals: slug },
    },
    select: {
      metaTitle: true,
      metaDescription: true,
    },
  });
  return gallery.docs[0] as Pick<Gallery, 'metaTitle' | 'metaDescription'>;
};

export const fetchGallerySlugs = async () => {
  const payload = await getPayloadClient();
  const gallerySlugs = await payload.find({
    collection: 'gallery',
    select: {
      slug: true,
    },
  });
  return gallerySlugs.docs.map(gallery => gallery.slug) as string[];
};

export const listAllGalleries = async () => {
  const payload = await getPayloadClient();
  const galleries = await payload.find({
    collection: 'gallery',
    sort: 'date',
    limit: 500,
    select: {
      title: true,
      date: true,
      slug: true,
      thumbnail: true,
      images: true,
      createdAt: true,
    },
  });
  return galleries.docs as Gallery[];
};
