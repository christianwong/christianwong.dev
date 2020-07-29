import React from 'react';

import { FooterDark } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterDark>
      Site version:&nbsp;
      <a
        href="##GITHUB_SERVER_URL##/##GITHUB_REPOSITORY##/releases/tag/##RELEASE_TAG_NAME##"
        target="_blank"
        rel="noopener noreferrer"
      >
        ##RELEASE_TAG_NAME##
      </a>
    </FooterDark>
  );
};

export default Footer;
