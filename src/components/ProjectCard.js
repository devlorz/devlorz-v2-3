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

const ProjectCardFooter = styled('div')`
  ${tw`flex self-end w-full mt-0 mb-2`};
`;

const TechIcons = styled('div')`
  ${tw``};
`;

const Space = styled('div')`
  ${tw`flex-grow`};
`;

const LinkIcons = styled('div')`
  ${tw``};
`;

const techIconStyle = css`
  margin-right: 5px;
`;

const iconStyle = css`
  margin-left: 5px;
  color: #3d4852;
`;

export default ({ img, title, desc, link, github, techIcons }) => (
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
        <TechIcons>
          {techIcons &&
            techIcons.map(({ iconImg, name }) => (
              <img src={iconImg} alt={name} key={name} class={techIconStyle} />
            ))}
        </TechIcons>
        <Space />
        <LinkIcons>
          {github && (
            <Icon link={github} icon={faGithub} iconStyle={iconStyle} />
          )}
          <Icon link={link} icon={faGlobeAsia} iconStyle={iconStyle} />
        </LinkIcons>
      </ProjectCardFooter>
    </ProjectCardMain>
  </ProjectCard>
);
