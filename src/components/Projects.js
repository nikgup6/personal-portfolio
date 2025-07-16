// src/components/Projects.js
import React from 'react';
import SmartCab from '../assets/img/greencab.png';
import chronic from '../assets/img/download.jpeg';
import glasses from '../assets/img/transcribe.png';
import nlp from '../assets/img/nlp.png';

const projectsData = [
  {
    title: 'Emergency Prediction System',
    subtitle: 'NLP-Based Crisis Detection',
    description: 'Trained a BART-based NLP model on emergency datasets to classify crisis-related user input with 91% accuracy. Integrated real-time sentiment and intent analysis to trigger instant alerts for potential emergencies. Deployed on mobile platforms with an intuitive UI for quick access in high-stress scenarios.',
    techStack: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'NLP', 'BART'],
    imageUrl: nlp, // Replace with actual image
    link: 'https://github.com/nikgup6/tasksense_app', // Replace with your actual project link/demo
    sources: [79, 80, 81, 82, 83]
  },
  {
    title: 'Transcribe Glasses',
    subtitle: 'Real-Time Speech-to-Text Subtitling',
    description: 'Developed a wearable smart glasses solution for hearing-impaired individuals using deep learning STT models. Achieved transcription latency under 300ms, ensuring natural and readable subtitle output. Deployed using Raspberry Pi for edge processing, reducing dependence on cloud latency.',
    techStack: ['Python', 'TensorFlow', 'SpeechRecognition API', 'Embedded Systems', 'IoT devices (Raspberry Pi)'],
    imageUrl: glasses, // Replace with actual image
    link: 'https://github.com/nikgup6/Speech-to-text-using-hugging-face', // Replace with your actual project link/demo
    sources: [84, 85, 86, 87]
  },
  {
    title: 'Smart Cab',
    subtitle: 'Sustainability & UX-Focused Transport Solution',
    description: 'Designed a cab booking system integrating real-time tracking, walkable route suggestions, and sustainability rewards. Improved trip route optimization by 18%, reducing carbon footprint through AI-driven voluntary walking segments. Added "food-on-the-way" and step-count-based incentives, enhancing UX and promoting eco-conscious travel behavior.',
    techStack: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Flask', 'OpenStreetMap', 'TensorFlow'],
    imageUrl: SmartCab, // Replace with actual image
    link: 'https://github.com/nikgup6/Routemap', // Replace with your actual project link/demo
    sources: [88, 89, 90, 91]
  },
  {
    title: 'Chronic Disease Risk Predictor',
    subtitle: 'ML-Based Health Monitoring Tool',
    description: 'Built a machine learning app that evaluates chronic disease risks based on user inputs. Achieved 87% model accuracy in predicting diabetes, heart disease, and hypertension using NHANES data. Implemented real-time result visualization with interactive risk indicators and health suggestions.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'React.js', 'NHANES Dataset'],
    imageUrl: chronic, // Replace with actual image
    link: 'https://chronic-disease-prediction.vercel.app/', // From your resume [cite: 96]
    sources: [92, 93, 94, 95]
  }
];

const Projects = () => {
  return (
    <div className="container text-center">
      <h2>My Projects</h2>
      <div className="grid-container projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-card-image" />
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description} {project.sources && ``}</p>
              <div className="project-tech-stack">
                Tech Stack- {project.techStack.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;