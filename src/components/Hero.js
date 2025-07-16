// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <h1>Hi, I'm <span>Nikunj Gupta</span></h1>
        <p className="lead">Aspiring Artificial Intelligence and Machine Learning Developer</p>
        <p>
          Results-driven AI & Machine Learning Developer with a strong
          foundation in full-stack web development, cloud deployment, and
          intelligent systems integration.
          </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;