import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Andrew's Profile" />
      </Link>
      <header>
        <h2>Andrew Sebastian Sibuea</h2>
        <p>
          <a href="mailto:andrewsbastians11@gmail.com">
            andrewsbastians11@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Andrew. I am a university student specializing in data
        analysis and artificial intelligence. I am currently exploring
        innovative solutions, including my AI-powered privacy policy tool. I am
        passionate about collaborating on impactful data-driven projects and
        advancing in these fields.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Michael D&apos;Angelo{' '}
        <Link to="/">mldangelo.com.</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
