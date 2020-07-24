import React from 'react';
import logo from './chris.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Christian Wong</h1>
        <p>
          Hello, world! I am a developer and work as Scrum Master at Amdocs. I
          got my master degree in Computer Science at University of São Paulo.
        </p>
        <p>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/christian-wong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          &nbsp;|&nbsp;
          <a
            className="App-link"
            href="https://github.com/christianwong"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          &nbsp;|&nbsp;
          <a
            className="App-link"
            href="https://www.instagram.com/nossofuquinho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Bug
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
