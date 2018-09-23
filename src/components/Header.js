/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';

const Nav = styled('nav')`
  ${tw`flex font-sans items-center justify-between flex-wrap bg-teal p-6`};
`;

const Brand = styled('div')`
  ${tw`flex items-center flex-no-shrink text-white mr-6`};
`;

const Name = styled('span')`
  ${tw`font-semibold text-xl tracking-tight`};
`;

const Menu = styled('div')`
  ${tw`w-full block flex lg:flex lg:justify-end lg:items-center lg:w-auto`};
`;

const MenuItems = styled('div')`
  ${tw`text-sm lg:flex-grow`};
`;

const MenuItem = styled('span')`
  ${tw`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4`};
`;

const Hidden = styled('div')`
  ${tw`block lg:hidden`};
`;

const MenuButton = styled('button')`
  ${tw`flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white`};
`;

const HomeButton = styled('svg')`
  ${tw`fill-current h-3 w-3`};
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
    <Hidden>
      <MenuButton>
        <HomeButton viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </HomeButton>
      </MenuButton>
    </Hidden>
    <Menu>
      <MenuItems>
        <Link to={'/blog'} className={linkNormal} activeClassName={linkActive}>
          <MenuItem>Blog</MenuItem>
        </Link>
        <Link
          to={'/project'}
          className={linkNormal}
          activeClassName={linkActive}
        >
          <MenuItem>Project</MenuItem>
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
