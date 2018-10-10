import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../components/Layout';
import { Container, PageHeader, PageHeaderTitle } from '../../components/Style';
import { ProjectCard } from '../../components/ProjectCard';

import { projects, sideProjects } from '../../data/projects';

export default () => (
  <Layout>
    <Helmet
      title={'Projects'}
      meta={[
        {
          name: 'description',
          content: 'A few of my projects and side projects'
        },
        {
          name: 'keywords',
          content: 'nutti, saelor, devlorz, devnote, projects, side projects'
        },
        { property: 'og:title', content: "Nutti Saelor's Projects" },
        { property: 'og:url', content: 'https://devlorz.github.io/project' },
        {
          property: 'og:description',
          content: "Nutti Saelor's Projects"
        }
      ]}
    />
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
