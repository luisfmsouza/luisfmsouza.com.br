import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';

const App = () => (
  <div className="container">
    <header>
      <h1 className="title">Luís Felipe Souza</h1>
      <h2 className="headline">
        Staff Engineer @{' '}
        <a
          href="https://www.vio.com/careers?utm_source=luisfmsouza.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vio.com
        </a>
        . <br />
        Based in Sunny Valencia, Spain 🇪🇸
      </h2>
    </header>

    <section className="content">
      <ul className="social-list">
        <li>
          <SocialIcon url="https://instagram.com/luisfmsouza" target="_blank" />
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
          <SocialIcon url="https://medium.com/@luisfmsouza" target="_blank" />
        </li>
      </ul>
    </section>
  </div>
);

export default App;
