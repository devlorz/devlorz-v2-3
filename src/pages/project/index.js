import React from 'react';

import Layout from '../../components/Layout';
import { Container, PageHeader, PageHeaderTitle } from '../../components/Style';
import ProjectCard from '../../components/ProjectCard';

import { projects } from '../../data/projects';

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
    </Container>
  </Layout>
);
