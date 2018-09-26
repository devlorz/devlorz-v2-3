/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faMedium,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/Layout';
import profilePic from '../assets/profile.jpg';

const Avatar = styled('img')`
  ${tw`block h-48 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-0 sm:ml-0`};
`;

const Wrapper = styled('div')`
  ${tw`flex flex-grow flex-col justify-center items-center font-sans`};
`;

const IconList = styled('div')`
  ${tw`m-4`};
`;

const TextWrap = styled('div')`
  ${tw`mt-5 text-center`};
`;

const Text = styled('p')`
  ${tw`m-0 md:text-base text-sm`};
`;

const textStyle = css`
  text-decoration: none;
  color: black;
`;

const iconStyle = css`
  margin: 5px 10px;
  color: black;
`;

export default () => (
  <Layout>
    <Wrapper>
      <Avatar src={profilePic} alt="Nutti Saelor" />
      <TextWrap>
        <Text>Hello, my name is Nutti Saelor 👓.</Text>
        <Text>
          {' '}
          I'm Frontend Developer 💻 and Creator of{' '}
          <a
            href="https://www.facebook.com/devnoteio/"
            target="_blank"
            rel="noopener noreferrer"
            className={textStyle}
          >
            DevNote 📓.
          </a>
        </Text>
      </TextWrap>
      <IconList>
        <a
          href="https://github.com/devlorz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={iconStyle} icon={faGithub} size="2x" />
        </a>
        <a
          href="https://medium.com/@leelorz6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={iconStyle} icon={faMedium} size="2x" />
        </a>
        <a
          href="https://twitter.com/JessHolicz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={iconStyle} icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/nuttisaelor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={iconStyle} icon={faLinkedin} size="2x" />
        </a>
      </IconList>
    </Wrapper>
  </Layout>
);
