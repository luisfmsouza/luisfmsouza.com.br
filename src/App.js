import React from 'react';
import './App.css';
import TwitterIcon from './components/icons/twitter';
import MediumIcon from './components/icons/medium';
import LinkedinIcon from './components/icons/linkedin';
import GithubIcon from './components/icons/github';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="title">Luís Felipe Souza</h1>
        <h2 className="headline">
          Front-end Engineer @{' '}
          <a
            href="https://findhotel.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FindHotel
          </a>
          . Based in Amsterdam 🇳🇱
        </h2>
      </header>

      <section className="content">
        <ul className="social-list">
          <li>
            <a
              className="social-link"
              href="https://twitter.com/luisfmsouz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://medium.com/@luisfmsouza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediumIcon />
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://br.linkedin.com/in/luisfmsouza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://github.com/luisfmsouza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default App;
