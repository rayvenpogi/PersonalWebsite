import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container active">
        <div className="contact-content">
          <div className="blur-box show">
            <div className="contact-title">Contact Information</div>

            <div className="contact-box">
              <div className="contact-box-title">
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </div>
              <div className="contact-box-content">erolivera@gbox.ncf.edu.ph</div>
            </div>

            <div className="contact-box">
              <div className="contact-box-title">
                <FontAwesomeIcon icon={faPhone} /> Phone Number
              </div>
              <div className="contact-box-content">09984518831</div>
            </div>

            <div className="contact-box">
              <div className="contact-box-title">
              <div className="icon"><div/><FaFacebook /></div>Facebook
              </div>
              <div className="contact-box-content">
                <a href="https://www.facebook.com/rayven.peranca.1" className="link">
                  Ehrvayn Rayven Olivera
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
