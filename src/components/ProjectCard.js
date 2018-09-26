/* global tw */
import React from 'react';
import styled from 'react-emotion';

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

export default ({ img, title, desc }) => (
  <ProjectCard>
    <ProjectCardImg>
      <img src={img} alt={title} />
    </ProjectCardImg>
    <ProjectCardMain>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{desc}</ProjectDescription>
      <ProjectCardFooter />
    </ProjectCardMain>
  </ProjectCard>
);
