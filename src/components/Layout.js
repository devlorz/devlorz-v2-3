/* global tw */
import React from 'react';
import styled from 'react-emotion';

import Header from './Header';
import Footer from './Footer';

export default ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer />
  </React.Fragment>
);
