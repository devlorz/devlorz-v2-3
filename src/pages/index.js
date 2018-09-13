/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import styled from 'react-emotion';

const Page = styled('div')`
  ${tw`flex justify-center items-center absolute pin`};
`;

const Container = styled('div')`
  ${tw`bg-white container my-8 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden font-sans`};
`;

const Wrapper = styled('div')`
  ${tw`sm:flex sm:items-center px-6 py-4`};
`;

const Avatar = styled('img')`
  ${tw`block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0`};
`;

const TextContainer = styled('div')`
  ${tw`text-center sm:text-left sm:flex-grow`};
`;

const TextSpacing = styled('div')`
  ${tw`mb-4`};
`;

const Company = styled('p')`
  ${tw`my-0 text-sm leading-tight text-grey-dark`};
`;

// const Name = styled('h1')`
//   ${tw`my-0 text-xl leading-tight`};
// `;

const Button = styled('button')`
  ${tw`bg-white border-purple border font-semibold hover:bg-purple hover:text-white leading-normal px-4 py-1 rounded-full text-purple text-xs`};
`;

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

const MenuItem = styled('a')`
  ${tw`block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4`};
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

export default () => (
  <Nav>
    <Brand>
      <Name>Nutti Saelor</Name>
    </Brand>
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
        <MenuItem>Blog</MenuItem>
        <MenuItem>Project</MenuItem>
        <MenuItem>Resume</MenuItem>
      </MenuItems>
    </Menu>
  </Nav>
);
