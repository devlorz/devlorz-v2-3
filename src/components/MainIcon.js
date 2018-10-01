import React from 'react';
import { css } from 'react-emotion';
import Icon from './Icon';

const iconStyle = css`
  margin: 5px 10px;
  color: #3d4852;
`;

export default props => <Icon {...props} iconStyle={iconStyle} />;
