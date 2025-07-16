// src/components/Navbar.js
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications-achievements', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Check midpoint of viewport

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#hero" className="navbar-brand" onClick={() => handleNavLinkClick('hero')}>
          Nikunj Gupta
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavLinkClick('about')}>About</a>
          </li>
          <li>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleNavLinkClick('skills')}>Skills</a>
          </li>
          <li>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleNavLinkClick('projects')}>Projects</a>
          </li>
          <li>
            <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => handleNavLinkClick('experience')}>Experience</a>
          </li>
          <li>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavLinkClick('contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;