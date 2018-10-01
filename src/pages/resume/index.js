/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';

import Layout from '../../components/Layout';
import { Container, Avatar } from '../../components/Style';
import SectionCom from '../../components/Section';
import { sections } from '../../data/sections';
import profilePic from '../../assets/profile.jpg';

const Header = styled('header')`
  ${tw`flex flex-col md:flex-row mb-2 md:mb-4`};
`;

const PicSection = styled('div')`
  ${tw`mx-auto mb-2`};
`;

const Title = styled('h3')`
  ${tw`mt-2 mb-0 text-5xl leading-tight font-medium text-teal`};
`;

const SubTitle = styled('h4')`
  ${tw`my-0 text-2xl font-medium text-grey-darker`};
`;

const Link = styled('a')`
  ${tw`text-grey-darker no-underline`};
`;

const PersonalInfo = styled('div')`
  ${tw`flex flex-col flex-1 mb-2 md:items-end md:justify-center`};
`;

export default () => (
  <Layout>
    <Container>
      <Header>
        <PicSection>
          {/* <Title>Nutti Saelor</Title>
          <Link href="http://devlorz.github.io">devlorz.github.io</Link>
          <Link className={visualSmall} href="mailto:nuttisaelor@gmail.com">
            nuttisaelor@gmail.com
          </Link>
          <Link className={visualSmall} href="https://github.com/devlorz">
            github.com/devlorz
          </Link> */}
          <Avatar src={profilePic} alt="Nutti Saelor" />
        </PicSection>
        <PersonalInfo>
          <Title>Nutti Saelor</Title>
          <SubTitle>Frontend Developer</SubTitle>
          <Link href="http://devlorz.github.io">
            devlorz.github.io
          </Link>
          <Link href="mailto:nuttisaelor@gmail.com">
            nuttisaelor@gmail.com
          </Link>
          <Link href="https://github.com/devlorz">
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
