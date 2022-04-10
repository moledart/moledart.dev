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

export const getWorks = async (props = null) => {
  const query = gql`
    query MyQuery {
      worksConnection(orderBy: publishedAt_DESC, first: ${props}) {
        edges {
          node {
            title
            description
            link
            github
            id
            tags {
              id
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

export const getWikis = async (props = null) => {
  const query = gql`
    query MyQuery {
      wikisConnection(first: ${props}) {
        edges {
          node {
            title
            description
            color
            link
            tags {
              name
              id
              color
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.wikisConnection.edges;
};
