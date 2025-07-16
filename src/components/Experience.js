// src/components/Experience.js
import React from 'react';

const experienceData = [
  {
    title: 'Full Stack Developer Intern',
    company: 'AI Research Center, Woxsen University',
    duration: 'Jan 2025 - Present',
    details: [
      'Engineered a cross-platform ERP portal using React Native and Node.js, reducing student-admin communication delays by 40%.',
      'Designed RAG-based AI chatbots for academic use, increasing query resolution efficiency by 55%.',
      'Developed a 3D model generation system from 2D image groups using computer vision, enabling automated 3D reconstruction.',
      'Coordinated with UI/UX teams to improve user experience and minimize navigation errors by 30%.'
    ]
  },
  {
    title: 'SDE Intern',
    company: 'Efundzz, Bangalore',
    duration: 'Feb 2025 - March 2025',
    details: [
      'Designed and launched a dynamic React-based customer acquisition platform for Elephant Loans, improving site engagement by 35%.',
      'Integrated machine learning models to assess user loan eligibility, reducing manual evaluation time by 60%.',
      'Conducted QA and A/B testing to ensure bug-free deployment and enhance conversion rates by 22%.',
      'Documented key workflows and optimized the backend API structure for easier future maintenance and scalability.'
    ],
    link:'https://elephantloans.in/'
  },
  {
    title: 'Wordpress Website Developer Intern',
    company: 'Rishmay Group, USA',
    duration: 'July 2023 - Aug 2023',
    details: [
      'Built and deployed 3+ WordPress websites for NGOs and NRI clients, resulting in a 70% improvement in online engagement.',
      'Collaborated with international teams to define UI/UX requirements and streamline feedback loops.',
      'Received mentorship from a Google engineer on code review best practices, accessibility standards, and scalable site architecture.'
    ]
  }
];

const Experience = () => {
  return (
    <div className="container text-center">
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceData.map((job, index) => (
          <div className="experience-item" key={index}>
            <h3>{job.title}</h3>
            <h4>{job.company} | {job.duration}</h4>
            <ul>
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            {job.link && (
              <a href={job.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit Website
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;