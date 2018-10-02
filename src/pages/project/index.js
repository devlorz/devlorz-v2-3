import React from 'react';

import Layout from '../../components/Layout';
import { Container, PageHeader, PageHeaderTitle } from '../../components/Style';
import ProjectCard from '../../components/ProjectCard';

import { projects, sideProjects } from '../../data/projects';

export default () => (
  <Layout>
    <Container>
      <PageHeader>
        <PageHeaderTitle>Projects</PageHeaderTitle>
        <div>A few of my past and ongoing projects.</div>
      </PageHeader>
      <div>
        {projects.map(project => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
      <PageHeader>
        <PageHeaderTitle>Side Projects</PageHeaderTitle>
        <div>Some of my side projects that I have worked on my freetime.</div>
      </PageHeader>
      <div>
        {sideProjects.map(project => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </Container>
  </Layout>
);
