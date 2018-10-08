/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTag,
  faCalendarAlt,
  faUser
} from '@fortawesome/free-solid-svg-icons';

const mediumURL = `https://medium.com/@leelorz6/`;
const imageURL = `https://miro.medium.com/fit/c/1400/420/`;

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

const iconStyle = css`
  color: gray;
  margin-left: 2px;
  margin-right: 2px;
`;

export default ({ node }) => {
  const title = node.title;
  const previewImage = node.virtuals.previewImage.imageId;
  const image = previewImage ? <Image src={imageURL + previewImage} /> : '';
  return (
    <Link target="_blank" href={`${mediumURL}${node.id}`} key={node.id}>
      <Blog>
        <Title>{title}</Title>
        {image}
        <div />
        {node.virtuals.tags.map(({ name }) => {
          return (
            <small key={name}>
              <FontAwesomeIcon className={iconStyle} icon={faTag} />
              {' ' + name + ' '}
            </small>
          );
        })}
        <br />
        <small>
          <FontAwesomeIcon className={iconStyle} icon={faCalendarAlt} />{' '}
          {node.firstPublishedAt}{' '}
          <FontAwesomeIcon className={iconStyle} icon={faUser} />{' '}
          {node.author.name}
        </small>
        <p dangerouslySetInnerHTML={{ __html: node.virtuals.subtitle }} />
      </Blog>
    </Link>
  );
};
