/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import { PageHeader, PageHeaderTitle } from '../../components/Style';
import ArticleCard from '../../components/ArticleCard';

const mediumURL = `https://medium.com/@leelorz6/`;

const Article = styled('article')`
  ${tw`font-sans container mx-auto p-8`};
`;

const FollowText = styled('a')`
  ${tw`no-underline text-teal font-bold`};
`;

export default ({
  data: {
    allMediumPost: { edges }
  }
}) => (
  <Layout>
    <Article>
      <PageHeader>
        <PageHeaderTitle>Articles</PageHeaderTitle>
        <div>
          I have published articles on Medium. Feel free to{' '}
          <FollowText href={mediumURL}>follow</FollowText>.
        </div>
      </PageHeader>
      {edges.map(({ node }) => (
        <ArticleCard node={node} key={node.id} />
      ))}
    </Article>
  </Layout>
);

export const pageQuery = graphql`
  query {
    allMediumPost(sort: { fields: [firstPublishedAt], order: DESC }) {
      edges {
        node {
          id
          title
          virtuals {
            subtitle
            previewImage {
              imageId
            }
            tags {
              name
            }
          }
          createdAt
          firstPublishedAt
          author {
            name
          }
        }
      }
    }
  }
`;
