// src/App.js
import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CertificationsAchievements from './components/CertificationsAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Global styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section id="about" className="section-padding">
        <About />
      </section>
      <section id="skills" className="section-padding section-alt-background">
        <Skills />
      </section>
      <section id="projects" className="section-padding">
        <Projects />
      </section>
      <section id="experience" className="section-padding section-alt-background">
        <Experience />
      </section>
      <section id="certifications-achievements" className="section-padding">
        <CertificationsAchievements />
      </section>
      <section id="contact" className="section-padding section-alt-background">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;