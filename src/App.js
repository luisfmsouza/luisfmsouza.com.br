import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';

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
          . <br />
          Based in Amsterdam 🇳🇱
        </h2>
      </header>

      <section className="content">
        <ul className="social-list">
          <li>
            <SocialIcon
              url="https://instagram.com/luisfmsouza"
              target="_blank"
            />
          </li>
          <li>
            <SocialIcon
              url="https://linkedin.com/in/luisfmsouza"
              target="_blank"
            />
          </li>
          <li>
            <SocialIcon url="https://github.com/luisfmsouza" target="_blank" />
          </li>
          <li>
            <SocialIcon url="https://twitter.com/luisfmsouz" target="_blank" />
          </li>
          <li>
            <SocialIcon url="https://medium.com/@luisfmsouza" target="_blank" />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default App;
