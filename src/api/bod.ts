import { fetchStrapi } from '@lib/strapi-graphql';
import { gql } from 'graphql-request';
import { BodPage } from '../@types/bodPage';

export const fetchBodPage = async (slug: string) => {
  const councils = await fetchStrapi(gql`
      query BodPages {
          bodPages(filters: { slug: { eq: "${slug}" } }) {
              name
              slug
              bods {
                  name
                  year {
                      start
                      end
                  }
                  committees(pagination: { pageSize: 50 }) {
                      title
                      newRow
                      members {
                          name
                          avatar {
                              url
                          }
                      }
                  }
              }
          }
      }
  `);

  return councils.bodPages[0] as BodPage;
};

export const fetchBodSlugs = async () => {
  const bodSlugs = await fetchStrapi(gql`
    query BodPages {
      bodPages {
        slug
      }
    }
  `);

  return bodSlugs.bodPages.map(page => page.slug) as string[];
};

export const getBodPageMetadata = async (slug: string) => {
  const bodPage = await fetchStrapi(gql`
    query BodPages {
      bodPages(filters: { slug: { eq: "${slug}" } }) {
        metaTitle
        metaDescription
      }
    }`);
  return bodPage.bodPages[0] as Pick<BodPage, 'metaDescription' | 'metaTitle'>;
};
