import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import { ExternalLink } from './styles';

const Contact: React.FC = () => {
  return (
    <p>
      <ExternalLink
        href="https://www.linkedin.com/in/christian-wong/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </ExternalLink>
      <ExternalLink
        href="https://github.com/christianwong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </ExternalLink>
      <ExternalLink
        href="https://www.instagram.com/nossofuquinho/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} />
      </ExternalLink>
    </p>
  );
};

export default Contact;
