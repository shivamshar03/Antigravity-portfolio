import { Terminal, Database, Shield, Cpu } from 'lucide-react';
import './About.css';

const About = () => {
  const experiences = [
    {
      company: 'Carina Softlabs Inc.',
      role: 'Python Developer Intern',
      period: 'June 2025 - Sept 2025',
      points: [
        'Built and optimized backend modules using Python, improving performance and scalability.',
        'Streamlined development processes with Git and GitHub for team collaboration.',
        'Designed user-friendly tools to enhance business workflows and accessibility.'
      ]
    },
    {
      company: 'VKAPS IT Solutions Pvt. Ltd.',
      role: 'AI Automation Intern',
      period: 'April 2025 - May 2025',
      points: [
        'Developed Python automation scripts to streamline repetitive business tasks.',
        'Documented automation workflows and supported integration into existing systems.',
        'Gained practical experience in APIs and automation frameworks.'
      ]
    },
    {
      company: 'Ardent Computech Pvt. Ltd.',
      role: 'Machine Learning Intern',
      period: 'Aug 2024 - Sept 2024',
      points: [
        'Implemented Python-based models for data processing and analysis.',
        'Worked with computer vision tasks and optimized scripts for efficiency.'
      ]
    }
  ];

  const skills = [
    { category: 'Languages', items: ['Python (Advanced)', 'SQL', 'JavaScript', 'HTML/CSS'] },
    { category: 'Frameworks', items: ['Flask', 'FastAPI', 'React', 'Streamlit'] },
    { category: 'AI & Data', items: ['Pandas', 'NumPy', 'OpenCV', 'LLMs', 'Scikit-learn'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Selenium', 'REST APIs'] }
  ];

  return (
    <div className="about-page container">
      <div className="about-header animate-fade-in">
        <h1 className="section-title text-gradient">About Me</h1>
        <p className="about-intro">
          I am a passionate software developer and AI/ML enthusiast focused on creating elegant, efficient solutions. As a Community Lead at NexHub and Mentor at Abhyudaya Coding Club, I believe in building tomorrow's technology today through continuous learning and open-source contribution.
        </p>
      </div>

      <div className="about-grid">
        <div className="experience-section animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2><Terminal size={24} className="heading-icon" /> Work Experience</h2>
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item glass-panel">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <div className="timeline-meta">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  <ul>
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2><Cpu size={24} className="heading-icon" /> Technical Arsenals</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-category glass-panel">
                <h3>{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="education-box glass-panel mt-2">
            <h2><Database size={24} className="heading-icon" /> Education</h2>
            <h3>Bachelor’s Degree</h3>
            <p>Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore (2021 - 2025)</p>
          </div>
          
          <div className="education-box glass-panel mt-2">
             <h2><Shield size={24} className="heading-icon" /> Leadership</h2>
             <ul>
               <li><strong>Founder & President</strong>, Abhyudaya Coding Club – Mentored 200+ students.</li>
               <li><strong>Campus Ambassador</strong>, Technex, IIT (BHU) Varanasi.</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
