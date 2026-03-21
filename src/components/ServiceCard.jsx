import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="service-card glass-panel animate-fade-in">
      <div className="service-icon-wrapper">
        <Icon size={32} className="service-icon text-gradient" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
      
      {features && features.length > 0 && (
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}><ArrowRight size={14} className="feature-arrow" /> {feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
