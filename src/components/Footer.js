// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Nikunj Gupta. All rights reserved.</p>
        <div className="footer-social-links">
          <a href="https://github.com/nikgup6" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/nikunj-gupta-b66b94258" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:nikunjgupta.grandhe@gmail.com" title="Email ">
            <FaEnvelope />
          </a>
          <a href="tel:+918179367637" title="Phone">
            <FaPhone />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;