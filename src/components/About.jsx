import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about">
      <div className="about-container active">
        <div className="about-content">
          <div className="blur-box show">
            <div className="about-me">About me</div>
            <img src="img/profile.jpg" className="about-image" alt="Profile" />
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
  );
}

export default About;
