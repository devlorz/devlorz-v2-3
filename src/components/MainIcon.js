import React from 'react';
import { css } from 'react-emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconStyle = css`
  margin: 5px 10px;
  color: #3d4852;
`;

export default ({ link, icon }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className={iconStyle} icon={icon} size="2x" />
  </a>
);
