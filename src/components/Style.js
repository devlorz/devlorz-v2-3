/* global tw */
import styled from 'react-emotion';

export const Container = styled('div')`
  ${tw`font-sans container mx-auto mb-8 p-8`};
`;

export const PageHeader = styled('div')`
  ${tw`mx-4 my-8 text-center text-grey-darkest`};
`;

export const PageHeaderTitle = styled('h2')`
  ${tw`mb-4 text-4xl leading-tight mt-0 font-medium`};
`;

export const Avatar = styled('img')`
  ${tw`block h-48 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-0 sm:ml-0`};
`;
