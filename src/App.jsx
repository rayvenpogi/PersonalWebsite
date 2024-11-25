import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Hobbies from './components/Hobbies.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [activeLink, setActiveLink] = useState('#home');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    if (activeLink === '#about' || activeLink === '#education') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeLink]);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-logo">My Website</div>
        <ul className="navbar-btn">
          <li>
            <a
              href="#about"
              className={activeLink === '#about' ? 'active' : ''}
              onClick={() => handleClick('#about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeLink === '#education' ? 'active' : ''}
              onClick={() => handleClick('#education')}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#hobbies"
              className={activeLink === '#hobbies' ? 'active' : ''}
              onClick={() => handleClick('#hobbies')}
            >
              Hobbies
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === '#contact' ? 'active' : ''}
              onClick={() => handleClick('#contact')}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#home"
              className={activeLink === '#home' ? 'active' : ''}
              onClick={() => handleClick('#home')}
            >
              Home
            </a>
          </li>
        </ul>
      </nav>

      {activeLink === '#home' && <Home />}
      {activeLink === '#about' && <About />}
      {activeLink === '#education' && <Education />}
      {activeLink === '#hobbies' && <Hobbies />}
      {activeLink === '#contact' && <Contact />}
    </div>
  );
}

export default App;
