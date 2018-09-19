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

const Page = styled('div')`
  ${tw`flex justify-center items-center absolute pin`};
`;

const Container = styled('div')`
  ${tw`bg-white container my-8 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden font-sans`};
`;

const TextContainer = styled('div')`
  ${tw`text-center sm:text-left sm:flex-grow`};
`;

const TextSpacing = styled('div')`
  ${tw`mb-4`};
`;

const Company = styled('p')`
  ${tw`my-0 text-sm leading-tight text-grey-dark`};
`;

// const Name = styled('h1')`
//   ${tw`my-0 text-xl leading-tight`};
// `;

const Button = styled('button')`
  ${tw`bg-white border-purple border font-semibold hover:bg-purple hover:text-white leading-normal px-4 py-1 rounded-full text-purple text-xs`};
`;

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
            className={textStyle}
          >
            DevNote 📓.
          </a>
        </Text>
      </TextWrap>
      <IconList>
        <a href="https://github.com/devlorz">
          <FontAwesomeIcon className={iconStyle} icon={faGithub} size="2x" />
        </a>
        <a href="https://medium.com/@leelorz6">
          <FontAwesomeIcon className={iconStyle} icon={faMedium} size="2x" />
        </a>
        <a href="https://twitter.com/JessHolicz">
          <FontAwesomeIcon className={iconStyle} icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/nuttisaelor/">
          <FontAwesomeIcon className={iconStyle} icon={faLinkedin} size="2x" />
        </a>
      </IconList>
    </Wrapper>
  </Layout>
);
