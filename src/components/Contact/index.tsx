import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaCommentDots,
} from 'react-icons/fa';

import { ExternalLink } from './styles';

const Contact: React.FC = () => {
  return (
    <>
      <ExternalLink href="https://christianwong.blog" rel="noopener noreferrer">
        <FaCommentDots size={30} />
      </ExternalLink>

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
        href="https://twitter.com/christianwong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={30} />
      </ExternalLink>

      <ExternalLink
        href="https://www.instagram.com/nossofuquinho/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} />
      </ExternalLink>
    </>
  );
};

export default Contact;
