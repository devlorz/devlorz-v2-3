/* global tw */
import React from 'react';
import styled from 'react-emotion';

import Header from './Header';
import Footer from './Footer';

import '../styles/global.css';

const PageLayout = styled('div')`
  ${tw`h-screen flex flex-col`};
`;

const Page = styled('div')`
  ${tw`h-full flex flex-col flex-grow`};
`;

export default ({ children }) => (
  <PageLayout>
    <Header />
    <Page>
      {children}
      <Footer />
    </Page>
  </PageLayout>
);
