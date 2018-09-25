/* global tw */
import React from 'react';
import styled from 'react-emotion';

import Layout from '../../components/Layout';
import moneySimpleIcon from '../../assets/money_simple_icon.png';
import { Container, PageHeader, PageHeaderTitle } from '../../components/Style';

const ProjectCard = styled('div')`
  ${tw`flex flex-col items-center mt-0 mx-5p mb-10p md:flex-row md:mx-15p md:mb-5p`};
`;

const ProjectCardImg = styled('div')`
  ${tw`flex items-center min-w-150px`};
`;

const ProjectCardMain = styled('div')`
  ${tw`flex flex-col justify-center items-center pl-0 md:items-start md:pl-12`};
`;

const ProjectTitle = styled('span')`
  ${tw`text-2xl text-teal`};
`;

const ProjectDescription = styled('p')`
  ${tw`my-0 text-justify`};
`;

const ProjectCardFooter = styled('p')`
  ${tw`flex justify-end w-full`};
`;

export default () => (
  <Layout>
    <Container>
      <PageHeader>
        <PageHeaderTitle>Projects</PageHeaderTitle>
        <div>A few of my past and ongoing projects.</div>
      </PageHeader>
      <div>
        <ProjectCard>
          <ProjectCardImg>
            <img src={moneySimpleIcon} />
          </ProjectCardImg>
          <ProjectCardMain>
            <ProjectTitle>Money Simple</ProjectTitle>
            <ProjectDescription>
              A simple android money management app that help you track income
              and outcome transactions with monthly overview.
            </ProjectDescription>
            <ProjectCardFooter />
          </ProjectCardMain>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardImg>
            <img src={moneySimpleIcon} />
          </ProjectCardImg>
          <ProjectCardMain>
            <ProjectTitle>Money Simple</ProjectTitle>
            <ProjectDescription>
              A simple android money management app that help you track income
              and outcome transactions with monthly overview.
            </ProjectDescription>
            <ProjectCardFooter />
          </ProjectCardMain>
        </ProjectCard>
      </div>
    </Container>
  </Layout>
);
