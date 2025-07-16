// src/components/Skills.js
import React from 'react';
import { FaPython, FaJsSquare, FaJava, FaDatabase, FaReact, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiMongodb, SiNodedotjs, SiExpress, SiFlask, SiRaspberrypi, SiHtml5, SiCss3 } from 'react-icons/si';

const skillsData = [
  {
    category: 'Languages',
    icon: <FaPython />,
    items: ['Python', 'JavaScript', 'Java', 'SQL']
  },
  {
    category: 'Web Technologies',
    icon: <FaReact />,
    items: ['HTML5', 'CSS3', 'Node.js', 'Express.js', 'React.js', 'React Native', 'Flask', 'REST API\'s']
  },
  {
    category: 'Machine Learning',
    icon: <SiTensorflow />,
    items: ['Scikit-learn', 'TensorFlow', 'Keras', 'LLM', 'DL']
  },
  {
    category: 'Databases',
    icon: <FaDatabase />,
    items: ['MySQL', 'MongoDB']
  },
  {
    category: 'Cloud',
    icon: <FaAws />,
    items: ['AWS', 'Render', 'Vercel']
  },
  {
    category: 'Tools',
    icon: <FaGitAlt />,
    items: ['Git', 'Github', 'Jupyter', 'Postman']
  },
  {
    category: 'Embedded & IoT Systems',
    icon: <SiRaspberrypi />,
    items: ['Raspberry Pi', 'SpeechRecognition API', 'Real-Time Processing']
  },
];

const Skills = () => {
  return (
    <div className="container text-center">
      <h2>Technical Skills</h2>
      <div className="grid-container skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-category" key={index}>
            <h3>{skill.icon} {skill.category}</h3>
            <div className="skill-list">
              {skill.items.map((item, i) => (
                <span className="skill-item" key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;