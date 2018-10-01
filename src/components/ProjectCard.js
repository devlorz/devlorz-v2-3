/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';

import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Icon from '../components/Icon';

const ProjectCard = styled('div')`
  ${tw`flex flex-col items-center mt-0 mx-5p mb-10p md:flex-row md:mx-15p md:mb-5p`};
`;

const ProjectCardImg = styled('div')`
  ${tw`flex items-center min-w-150px`};
`;

const ProjectCardMain = styled('div')`
  ${tw`flex flex-col justify-start items-center pl-0 md:items-start md:pl-12 md:w-3/5 h-180px text-grey-darkest`};
`;

const ProjectTitle = styled('span')`
  ${tw`text-2xl text-teal font-medium md:mt-4`};
`;

const ProjectDescription = styled('p')`
  ${tw`my-0 text-justify flex-grow`};
`;

const ProjectCardFooter = styled('p')`
  ${tw`flex self-end justify-end w-full mt-0 mb-2`};
`;

const iconStyle = css`
  margin-left: 5px;
  color: #3d4852;
`;

export default ({ img, title, desc, link }) => (
  <ProjectCard>
    <ProjectCardImg>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title} />
      </a>
    </ProjectCardImg>
    <ProjectCardMain>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{desc}</ProjectDescription>
      <ProjectCardFooter>
        <Icon icon={faGithub} iconStyle={iconStyle} />
        <Icon link={link} icon={faGlobeAsia} iconStyle={iconStyle} />
      </ProjectCardFooter>
    </ProjectCardMain>
  </ProjectCard>
);
