import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <a
        href="https://www.linkedin.com/in/christian-wong/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>

      <a
        href="https://github.com/christianwong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </a>

      <a
        href="https://twitter.com/christianwong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={30} />
      </a>

      <a
        href="https://www.instagram.com/nossofuquinho/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} />
      </a>
    </Container>
  );
};

export default Contact;
