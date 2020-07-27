import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <>
      <p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/christian-wong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        &nbsp; &nbsp;
        <a
          className="App-link"
          href="https://github.com/christianwong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        &nbsp; &nbsp;
        <a
          className="App-link"
          href="https://www.instagram.com/nossofuquinho/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </p>
    </>
  );
};

export default Contact;
