import ProjectCard from '../components/ProjectCard';
import { Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Anaya3 - Personal AI Assistant",
      description: "Multimodal AI assistant capable of understanding emotions from voice and facial expressions. Uses advanced NLP with LLMs, speech/facial emotion recognition, and generates human-like responses.",
      tags: ["Python", "OpenCV", "LLMs", "NLP", "FastAPI"],
      githubLink: "https://github.com/shivamshar03"
    },
    {
      title: "AutoFormX - Smart Form Automation",
      description: "Automated dynamic web form filling with adaptive fuzzy matching, XPath detection, and error handling for complex workflows.",
      tags: ["Python", "Selenium", "Fuzzy Matching"],
      githubLink: "https://github.com/shivamshar03"
    },
    {
      title: "Chat Application with Python Sockets",
      description: "Developed a real-time messaging system with socket programming, user authentication, and chat rooms.",
      tags: ["Python", "Sockets", "FastAPI"],
      githubLink: "https://github.com/shivamshar03"
    },
    {
      title: "Data Analysis Assistant",
      description: "Built a Python-based dashboard to analyze and visualize data from CSV/Excel files with filtering and search.",
      tags: ["Python", "Pandas", "Streamlit"],
      githubLink: "https://github.com/shivamshar03"
    },
    {
      title: "Email Generator",
      description: "A tool that automates the creation of professional emails using predefined templates and user inputs, enhancing productivity.",
      tags: ["Python", "Automation", "NLP"],
      githubLink: "https://github.com/shivamshar03"
    },
    {
      title: "Sketch Filter",
      description: "Applies artistic sketch filters to images, transforming photos into pencil sketch-like artworks using computer vision techniques.",
      tags: ["Computer Vision", "Python", "OpenCV"],
      githubLink: "https://github.com/shivamshar03"
    }
  ];

  return (
    <div className="projects-page container">
      <div className="projects-header animate-fade-in">
        <h1 className="section-title text-gradient">Featured Work</h1>
        <p className="projects-intro">
          Here is a selection of my recent open-source projects and products. Over <span className="text-gradient">40+ projects</span> completed, ranging from deep learning to web automation.
        </p>
        <a href="https://github.com/shivamshar03" target="_blank" rel="noopener noreferrer" className="btn-secondary github-btn mt-3">
          <Github size={18} /> View All on GitHub
        </a>
      </div>

      <div className="projects-grid-large animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {projects.map((proj, idx) => (
          <ProjectCard 
            key={idx}
            title={proj.title}
            description={proj.description}
            tags={proj.tags}
            githubLink={proj.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
