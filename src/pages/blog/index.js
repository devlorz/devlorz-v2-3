/* global tw */
import React from 'react';
import styled from 'react-emotion';

import Layout from '../../components/Layout';

const mediumURL = `https://medium.com/@leelorz6/`;
const imageURL = `https://cdn-images-1.medium.com/max/750/`;

const Wrapper = styled('div')`
  ${tw`font-sans`};
`;

const Image = styled('img')`
  ${tw`block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0`};
`;

export default ({
  data: {
    allMediumPost: { edges }
  }
}) => (
  <Layout>
    <Wrapper>
      {edges.map(({ node }) => {
        const title = node.title;
        const previewImage = node.virtuals.previewImage.imageId;
        return (
          <a
            target="_blank"
            href={`${mediumURL}${node.id}`}
            key={node.id}
            style={{ color: '#000' }}
          >
            <div>
              <h3
                style={{
                  marginBottom: '1rem'
                }}
              >
                {/* <Link style={{ boxShadow: 'none' }} to={node.fields.slug}> */}
                {title}
                {/* </Link> */}
              </h3>
              <img src={imageURL + previewImage} />
              {/* <Image src={imageURL + previewImage} /> */}
              <div />
              {node.virtuals.tags.map(({ name }) => {
                return <small>#{name + ' '}</small>;
              })}
              <br />
              <small>
                {node.latestPublishedAt} by {node.author.name}
              </small>
              <p dangerouslySetInnerHTML={{ __html: node.virtuals.subtitle }} />
            </div>
          </a>
        );
      })}
    </Wrapper>
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
