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
