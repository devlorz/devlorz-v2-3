import React from 'react';
import { css } from 'react-emotion';
import Icon from './Icon';

const iconStyle = css`
  margin: 5px 10px;
  color: #3d4852;
  width: 32px !important;
  height: 32px;
`;

const linkStyle = css`
  width: 52px;
`;

const style = {
  iconStyle,
  linkStyle
};

export default props => <Icon {...props} {...style} />;
