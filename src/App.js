import React from "react";
import "./App.css";
import TwitterIcon from "./components/icons/twitter";
import MediumIcon from "./components/icons/medium";
import LinkedinIcon from "./components/icons/linkedin";
import GithubIcon from "./components/icons/github";

function App() {
  return (
    <div class="container">
      <header>
        <h1 class="title">Luís Felipe Souza</h1>
        <h2 class="headline">
          Front-end Developer,{" "}
          <a href="https://travel2beer.com/" target="_blank">
            traveler
          </a>
          ,{" "}
          <a href="https://www.instagram.com/travel2beer/" target="_blank">
            beer lover
          </a>{" "}
          and entrepreneur in my free time.
        </h2>
      </header>

      <section class="content">
        <ul class="social-list">
          <li>
            <a
              class="social-link"
              href="https://twitter.com/luisfmsouz"
              target="_blank"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              class="social-link"
              href="https://medium.com/@luisfmsouza"
              target="_blank"
            >
              <MediumIcon />
            </a>
          </li>
          <li>
            <a
              class="social-link"
              href="https://br.linkedin.com/in/luisfmsouza"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a
              class="social-link"
              href="https://github.com/luisfmsouza"
              target="_blank"
            >
              <GithubIcon />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
