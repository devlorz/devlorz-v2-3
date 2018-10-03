import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ link, icon, iconStyle, linkStyle }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={linkStyle}
  >
    <FontAwesomeIcon className={iconStyle} icon={icon} size="2x" />
  </a>
);
