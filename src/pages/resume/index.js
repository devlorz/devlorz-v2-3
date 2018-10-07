/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';

import Layout from '../../components/Layout';
import { Container, Avatar } from '../../components/Style';
import SectionCom from '../../components/Section';
import { sections } from '../../data/sections';
import profilePic from '../../assets/profile_resume.jpg';
import resume from '../../assets/nutti_saelor_resume.pdf';

const ButtonRow = styled('div')`
  ${tw`flex justify-end`};
`;

const Button = styled('a')`
  ${tw`bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded no-underline`};
`;

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
      <ButtonRow>
        <Button href={resume}>As PDF</Button>
      </ButtonRow>
      <Header>
        <PicSection>
          <Avatar src={profilePic} alt="Nutti Saelor" />
        </PicSection>
        <PersonalInfo>
          <Title>Nutti Saelor</Title>
          <SubTitle>Frontend Developer</SubTitle>
          <Link href="http://devlorz.github.io">devlorz.github.io</Link>
          <Link href="https://github.com/devlorz">github.com/devlorz</Link>
          <Link href="https://medium.com/@leelorz6">medium.com/@leelorz6z</Link>
          <Link href="mailto:nuttisaelor@gmail.com">nuttisaelor@gmail.com</Link>
        </PersonalInfo>
      </Header>

      {sections.map(section => (
        <SectionCom section={section} key={section.id} />
      ))}
    </Container>
  </Layout>
);
