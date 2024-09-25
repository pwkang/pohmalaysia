import { GraphQLClient, RequestDocument } from 'graphql-request';

const ENDPOINT = process.env.GRAPHQL_ENDPOINT;

export const fetchStrapi = (query: RequestDocument) => {
  const graphqlClient = new GraphQLClient(ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHQL_ACCESS_TOKEN}`,
    },
  });

  return graphqlClient.request(query);
};
