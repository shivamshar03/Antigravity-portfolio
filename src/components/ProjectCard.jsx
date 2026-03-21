import { ExternalLink, Github } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, githubLink, liveLink, image }) => {
  return (
    <div className="project-card glass-panel animate-fade-in">
      {image && (
        <div className="project-image-wrapper">
          <img src={image} alt={title} className="project-image" />
        </div>
      )}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        
        <div className="project-tags">
          {tags.map((tag, index) => (
             <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      
      <div className="project-actions">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="action-link">
            <Github size={18} /> Code
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="action-link live-link">
            <ExternalLink size={18} /> View Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
