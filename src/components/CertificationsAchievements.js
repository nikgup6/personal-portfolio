// src/components/CertificationsAchievements.js
import React from 'react';

const certifications = [
  {
    name: 'AWS Cloud Computing Academy Graduate',
    date: 'Jan 2024',
    link:'https://www.credly.com/badges/43c08a37-a759-4438-a4d7-4f6dd8d1f85b/public_url',
    sources: [73, 74]
  },
  {
    name: 'Introduction to LLM by Google',
    date: 'Jun 2025',
    link:'https://www.cloudskillsboost.google/public_profiles/6ad5d862-d9e9-48b7-921d-68e520b97ee9/badges/13226671',
    sources: [75, 76]
  },
  {
    name: 'Introduction to GenAI by Google',
    date: 'Sep 2024',
    link:'https://www.cloudskillsboost.google/public_profiles/6ad5d862-d9e9-48b7-921d-68e520b97ee9/badges/4965648',
    sources: [77]
  },
];

const achievements = [
  {
    name: 'Chair, IEEE Woxsen University',
    duration: '2024-Present',
    description: 'Led a team of 25+ members, increasing student participation in tech communities by 200%',
    sources: [98]
  },
  {
    name: 'President, Baudhik Club (Institution\'s Innovation Council)',
    description: 'Spearheaded idea-stage mentorship programs and startup pitch sessions, helping 5+ student ventures move into prototype stages.',
    sources: [101]
  },
  {
    name: 'Executive, Russell Belk International Relations Cell',
    description: 'Facilitated international academic collaborations with international institutions and ambassadors.',
    sources: [103]
  },
  {
    name: 'Core Member, Programming Club - Code{X}',
    description: 'Organized weekly coding challenges and mentorship sessions; contributed to improving coding contest participation rates by 3x.',
    sources: [105]
  },
  {
    name:'Exchange Program, Ajman University, UAE',
    description: 'Been selected as one of the top 5% of students to represent Woxsen University in the UAE for a Student Exchange Program.',
  },
  {
    name:'Student Ambassador, Woxsen University',
    description: 'Actively promoted university events and initiatives, enhancing student engagement and community outreach.',
  }
];

const CertificationsAchievements = () => {
  return (
    <div className="container text-center">
      <h2>Certifications & Achievements</h2>

      <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>Certifications</h3>
      <div className="grid-container certs-achievements-grid">
        {certifications.map((cert, index) => (
          <div className="item-card" key={`cert-${index}`}>
            <h3>{cert.name}</h3>
            <p>{cert.date} {cert.sources && ``}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View Certificate
              </a>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>Leadership & Achievements</h3>
      <div className="grid-container certs-achievements-grid">
        {achievements.map((ach, index) => (
          <div className="item-card" key={`ach-${index}`}>
            <h3>{ach.name}</h3>
            {ach.duration && <p style={{fontWeight: '500'}}>{ach.duration}</p>}
            <p>{ach.description} {ach.sources && ``}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsAchievements;