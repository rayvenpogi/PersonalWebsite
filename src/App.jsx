import { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

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
              onClick={() => handleClick('#about')}>About</a>
          </li>
          <li>
            <a
              href="#education"
              className={activeLink === '#education' ? 'active' : ''}
              onClick={() => handleClick('#education')}>Education</a>
          </li>
          <li>
            <a
              href="#hobbies"
              className={activeLink === '#hobbies' ? 'active' : ''}
              onClick={() => handleClick('#hobbies')}>Hobbies</a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === '#contact' ? 'active' : ''}
              onClick={() => handleClick('#contact')}>Contact</a>
          </li>
          <li>
            <a
              href="#home"
              className={activeLink === '#home' ? 'active' : ''}
              onClick={() => handleClick('#home')}>
              <FontAwesomeIcon icon={faHouse} className="home-icon" />
            </a>
          </li>
        </ul>
      </nav>

      {activeLink === '#home' && (
        <div className="welcome-container active">
          <div className="welcome-content">
            <div className="welcome">
              Hi, Welcome to my Personal Website!
            </div>
            <div className="created">created by: Ehrvayn Rayven P. Olivera</div>
          </div>
        </div>
      )}

      {activeLink === '#about' && (
        <section id="about">
          <div className="about-container active">
            <div className="about-content">
              <div className="blur-box show">
                <div className="about-me">About me</div>
                <img src="profile.jpg" alt="Your Image" className="about-image" />
                <p className="paragraph">
                  Hello, I'm Ehrvayn Rayven P. Olivera, 20 years old and this
                  is my personal website. I'm from Abella Street Zone-7 Naga
                  City. My birthday is January 30, 2004. I like playing online
                  games, listening to music, and I love playing guitar. These
                  are some of the hobbies that makes me happy and bring joy to
                  my life. These hobbies not only allow me to relax, but also
                  help me stay connected to my passions and continuously
                  discover new things about myself.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeLink === '#education' && (
        <section id="education">
          <div className="education-container active">
            <div className="education-content">
              <div className="blur-box show">
                <div className="education-box">
                  <div className="education-box-title">Elementary</div>
                  <div className="education-box-content">Sta Cruz Elementary School <br/> 2011-2017</div>
                </div>
                <div className="education-box">
                  <div className="education-box-title">Junior High School</div>
                  <div className="education-box-content">Camarines Sur National Highschool <br/>Basic Education Program (B.E.P)<br/> 2017-2021</div>
                </div>
                <div className="education-box">
                  <div className="education-box-title">Senior High School</div>
                  <div className="education-box-content">Camarines Sur National Highschool <br/>Technical-Vocational-Livelihood (T.V.L) <br/>2023-2024</div>
                </div>
                <div className="education-box">
                  <div className="education-box-title">College</div>
                  <div className="education-box-content">Naga College Foundation Inc. Bachelor of Science in Information System (BSIS)</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

{activeLink === '#hobbies' && (
  <section id="hobbies">
    <div className="hobbies-container active">
      <div className="hobby-card">
        <div className="blur-box show">
          <img src="gaming.jpg" alt="Playing Online Games" className="hobby-image" />
          <p className="hobby-description">Playing online games</p>
        </div>
      </div>
      <div className="hobby-card">
        <div className="blur-box show">
          <video 
            src="guitar.mp4" 
            className="hobby-video" 
            autoPlay 
            loop 
            playsInline
          ></video>
          <p className="hobby-description">Playing guitar</p>
        </div>
      </div>
      <div className="hobby-card">
        <div className="blur-box show">
          <img src="music.png" alt="Listening to Music" className="hobby-image" />
          <p className="hobby-description">Listening to music</p>
        </div>
      </div>
    </div>
  </section>
)}

{activeLink === '#contact' && (
  <section id="contact">
    <div className="contact-container active">
      <div className="contact-content">
        <div className="blur-box show">
          <div className="contact-title">Contact Information</div>

          <div className="contact-box">
            <div className="contact-box-title">Email</div>
            <div className="contact-box-content">erolivera@gbox.ncf.edu.ph</div>
          </div>

          <div className="contact-box">
            <div className="contact-box-title">Phone Number</div>
            <div className="contact-box-content">09984518831</div>
          </div>

          <div className="contact-box">
            <div className="contact-box-title">Facebook</div>
            <div className="contact-box-content">
              <a href="https://www.facebook.com/rayven.peranca.1" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                Ehrvayn Rayven Olivera
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)}


    </div>
  );
}

export default App;
