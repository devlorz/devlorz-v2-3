/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';

import Layout from '../../components/Layout';
import { Container } from '../../components/Style';
import SectionCom from '../../components/Section';
import { sections } from '../../data/sections';

const Header = styled('header')`
  ${tw`flex`};
`;

const NameSection = styled('div')`
  ${tw`flex flex-col mb-2`};
`;

const Title = styled('h3')`
  ${tw`mb-0 text-4xl leading-tight font-medium text-teal`};
`;

const Link = styled('a')`
  ${tw`text-grey-darker no-underline`};
`;

const PersonalInfo = styled('div')`
  ${tw`flex flex-col flex-1 justify-end items-end`};
`;

const visualSmall = css`
  ${tw`md:hidden`};
`;

const visualLarge = css`
  ${tw`hidden md:block`};
`;

export default () => (
  <Layout>
    <Container>
      <Header>
        <NameSection>
          <Title>Nutti Saelor</Title>
          <Link href="http://devlorz.github.io">devlorz.github.io</Link>
          <Link className={visualSmall} href="mailto:nuttisaelor@gmail.com">
            nuttisaelor@gmail.com
          </Link>
          <Link className={visualSmall} href="https://github.com/devlorz">
            github.com/devlorz
          </Link>
        </NameSection>
        <div className="spacer" />
        <PersonalInfo>
          <Link className={visualLarge} href="mailto:nuttisaelor@gmail.com">
            nuttisaelor@gmail.com
          </Link>
          <Link className={visualLarge} href="https://github.com/devlorz">
            github.com/devlorz
          </Link>
        </PersonalInfo>
      </Header>

      {sections.map(section => (
        <SectionCom section={section} key={section.id} />
      ))}
    </Container>
  </Layout>
);
