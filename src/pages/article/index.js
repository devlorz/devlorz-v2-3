/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTag,
  faCalendarAlt,
  faUser
} from '@fortawesome/free-solid-svg-icons';

import Layout from '../../components/Layout';
import { PageHeader, PageHeaderTitle } from '../../components/Style';

const mediumURL = `https://medium.com/@leelorz6/`;
const imageURL = `https://miro.medium.com/fit/c/1400/420/`;

const Article = styled('article')`
  ${tw`font-sans container mx-auto p-8`};
`;

const Link = styled('a')`
  ${tw`no-underline text-black`};
`;

const Blog = styled('div')`
  ${tw`mb-10 max-w-md`};
`;

const Title = styled('h3')`
  ${tw`text-2xl leading-tight mb-2`};
`;

const Image = styled('img')`
  ${tw`block w-full mx-auto mb-4 mb-2 mr-4 ml-0`};
`;

const FollowText = styled('a')`
  ${tw`no-underline text-teal font-bold`};
`;

const iconStyle = css`
  color: gray;
  margin-left: 2px;
  margin-right: 2px;
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
      {edges.map(({ node }) => {
        const title = node.title;
        const previewImage = node.virtuals.previewImage.imageId;
        const image = previewImage ? (
          <Image src={imageURL + previewImage} />
        ) : (
          ''
        );
        return (
          <Link target="_blank" href={`${mediumURL}${node.id}`} key={node.id}>
            <Blog>
              <Title>
                {/* <Link style={{ boxShadow: 'none' }} to={node.fields.slug}> */}
                {title}
                {/* </Link> */}
              </Title>
              {/* <img src={imageURL + previewImage} /> */}
              {image}
              <div />
              {node.virtuals.tags.map(({ name }) => {
                return (
                  <small>
                    <FontAwesomeIcon className={iconStyle} icon={faTag} />
                    {' ' + name + ' '}
                  </small>
                );
              })}
              <br />
              <small>
                <FontAwesomeIcon className={iconStyle} icon={faCalendarAlt} />{' '}
                {node.latestPublishedAt}{' '}
                <FontAwesomeIcon className={iconStyle} icon={faUser} />{' '}
                {node.author.name}
              </small>
              <p dangerouslySetInnerHTML={{ __html: node.virtuals.subtitle }} />
            </Blog>
          </Link>
        );
      })}
    </Article>
  </Layout>
);

export const pageQuery = graphql`
  query {
    allMediumPost(sort: { fields: [latestPublishedAt], order: DESC }) {
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
          latestPublishedAt
          author {
            name
          }
        }
      }
    }
  }
`;
