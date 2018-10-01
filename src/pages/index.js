/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';
import {
  faGithub,
  faMedium,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/Layout';
import profilePic from '../assets/profile.jpg';
import MainIcon from '../components/MainIcon';
import { Avatar } from '../components/Style';

const Wrapper = styled('div')`
  ${tw`flex flex-grow flex-col justify-center items-center font-sans`};
`;

const IconList = styled('div')`
  ${tw`m-4`};
`;

const TextWrap = styled('div')`
  ${tw`mt-5 text-center text-grey-darkest`};
`;

const Text = styled('p')`
  ${tw`m-0 md:text-base text-sm`};
`;

const textStyle = css`
  text-decoration: none;
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
        <MainIcon link={'https://github.com/devlorz'} icon={faGithub} />
        <MainIcon link={'https://medium.com/@leelorz6'} icon={faMedium} />
        <MainIcon link={'https://twitter.com/JessHolicz'} icon={faTwitter} />
        <MainIcon
          link={'https://www.linkedin.com/in/nuttisaelor/'}
          icon={faLinkedin}
        />
        <MainIcon
          link={'mailto:nuttisaelor@gmail.com'}
          icon={faEnvelopeSquare}
        />
      </IconList>
    </Wrapper>
  </Layout>
);
