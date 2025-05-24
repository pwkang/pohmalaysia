import { gql } from 'graphql-request';
import { fetchStrapi } from '@/lib/strapi-graphql';
import { Gallery } from '../@types/gallery';

export const fetchGallery = async (slug: string) => {
  const gallery = await fetchStrapi(gql`
    query Gallery {
      galleries(filters: { slug: { eq: "${slug}" } }) {
        slug
        title
        date
        images(pagination: { limit: 500 }) {
          url
        }
      }
    }
  `);

  return gallery.galleries[0] as Gallery;
};

export const fetchGalleryMetadata = async (slug: string) => {
  const gallery = await fetchStrapi(gql`
    query Gallery {
      galleries(filters: { slug: { eq: "${slug}" } }) {
        metaTitle
        metaDescription
      }
    }
  `);

  return gallery.galleries[0] as Pick<Gallery, 'metaTitle' | 'metaDescription'>;
};

export const fetchGallerySlugs = async () => {
  const gallerySlugs = await fetchStrapi(gql`
    query Gallery {
      galleries {
        slug
      }
    }
  `);

  return gallerySlugs.galleries.map(gallery => gallery.slug) as string[];
};

export const listAllGalleries = async () => {
  const galleries = await fetchStrapi(gql`
    query Gallery {
      galleries(sort: ["date"], pagination: { limit: 500 }) {
        slug
        title
        date
        thumbnail {
          url
        }
      }
    }
  `);

  return galleries.galleries as Gallery[];
};
