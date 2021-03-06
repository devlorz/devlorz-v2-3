/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';

const Nav = styled('nav')`
  ${tw`flex font-sans items-center justify-between flex-wrap bg-teal p-5 md:p-6`};
`;

const Brand = styled('div')`
  ${tw`flex items-center flex-no-shrink text-white`};
`;

const Name = styled('span')`
  ${tw`font-semibold text-xl`};
`;

const Menu = styled('div')`
  ${tw`w-full block flex justify-end items-center w-auto`};
`;

const MenuItems = styled('div')`
  ${tw`text-sm lg:flex-grow`};
`;

const MenuItem = styled('span')`
  ${tw`block mt-4 inline-block mt-0 hover:text-white ml-2 md:ml-4 lg:mr-4`};
`;

const linkStyle = css`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

const linkNormal = css`
  color: #a0f0ed;
`;

const linkActive = css`
  color: #fff;
`;

export default () => (
  <Nav>
    <Link className={linkStyle} to={'/'}>
      <Brand>
        <Name>Nutti Saelor</Name>
      </Brand>
    </Link>
    <Menu>
      <MenuItems>
        <Link
          to={'/article'}
          className={linkNormal}
          activeClassName={linkActive}
        >
          <MenuItem>Articles</MenuItem>
        </Link>
        <Link
          to={'/project'}
          className={linkNormal}
          activeClassName={linkActive}
        >
          <MenuItem>Projects</MenuItem>
        </Link>
        <Link
          to={'/resume'}
          className={linkNormal}
          activeClassName={linkActive}
        >
          <MenuItem>Resume</MenuItem>
        </Link>
      </MenuItems>
    </Menu>
  </Nav>
);
