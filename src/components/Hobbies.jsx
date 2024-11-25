import React from 'react';
import './Hobbies.css';

function Hobbies() {
  return (
    <section id="hobbies">
      <div className="hobbies-container active">
        <div className="hobby-card">
          <div className="blur-box show">
            <img src="img/gaming.jpg" className="hobby-image" alt="Gaming" />
            <p className="hobby-description">Playing online games</p>
          </div>
        </div>
        <div className="hobby-card">
          <div className="blur-box show">
            <video
              src="vid/guitar.mp4"
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
            <img src="img/music.png" className="hobby-image" alt="Music" />
            <p className="hobby-description">Listening to music</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
