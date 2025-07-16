// src/components/About.js
import React from 'react';
import nikunjProfilePic from '../assets/img/nikunjj.jpeg';
const About = () => {
  return (
    <div className="container text-center">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={nikunjProfilePic} alt="Nikunj Gupta" className="about-img" />
        <div className="about-text">
          <p>
            As a Results-driven AI & Machine Learning Developer , I bring a strong foundation in full-stack web development, cloud deployment, and intelligent systems integration.
            I have spearheaded 6+ impactful projects, including crisis prediction systems, real-time subtitle devices, and eco-friendly smart cab platforms.
          </p>
          <p>
            I am adept at building scalable React/Node.js apps and deploying ML models using TensorFlow, PyTorch, and LLMs. My proven ability lies in collaborating with cross-functional teams, optimizing performance, and delivering user-focused solutions with measurable outcomes. I am currently seeking opportunities to drive innovation through AI-driven problem-solving and robust software engineering.
          </p>
          <p>
            I am pursuing my B.Tech in Computer Science with a specialization in AI & ML from Woxsen University, India, maintaining a CGPA of 3.72/4.
            Additionally, I had the privilege of participating in a Student Exchange Program at Ajman University, UAE, from Jan 2024-May 2024, where I was selected among the top 5% and achieved a GPA of 3.89/4.0.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;