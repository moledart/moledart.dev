import { graphql } from "graphql";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            id
            publishedAt
            tags {
              id
              name
            }
            title
            slug
            excerpt
            thumbnail {
              url
            }
            featuredPost
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getWorks = async () => {
  const query = gql`
    query MyQuery {
      worksConnection(orderBy: publishedAt_DESC) {
        edges {
          node {
            title
            description
            link
            github
            id
            tags {
              name
              color
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.worksConnection.edges;
};
