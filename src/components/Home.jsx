import React from 'react';
import './Home.css';
import { IoMdHappy } from "react-icons/io";

function Home() {
  return (
    <div className="welcome-container active">
      <div className="welcome-content">
        <div className="welcome">
          Hi, Welcome to my Personal Website!<IoMdHappy />
        </div>
        <div className="created">created by: Ehrvayn Rayven P. Olivera</div>
      </div>
    </div>
  );
}

export default Home;
