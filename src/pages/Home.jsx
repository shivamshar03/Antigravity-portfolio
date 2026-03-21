import { ArrowRight, Code, Database, BrainCircuit, Smartphone, Globe, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-content animate-fade-in">
          <div className="badge">Available for Work</div>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Shivam Sharma</span><br/>
            AI/ML Developer & Consultant
          </h1>
          <p className="hero-subtitle">
            I build elegant, intelligent solutions scaling from web & mobile to deep tech AI. Passionate about AI integrations, ERP/CRM solutions, and next-gen applications.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">View My Work</Link>
            <Link to="/contact" className="btn-secondary">Hire Me</Link>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-panel abstract-sphere">
            {/* Visual representation of an AI node */}
            <div className="core"></div>
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>
          </div>
        </div>
      </section>

      {/* Services Snippet Section */}
      <section className="services-preview-section container">
        <div className="section-header">
          <h2 className="section-title text-gradient">Solutions & Services</h2>
          <Link to="/services" className="see-all-link">See all services <ArrowRight size={18} /></Link>
        </div>
        
        <div className="services-grid">
          <ServiceCard 
            icon={BrainCircuit}
            title="AI & ML Integration"
            description="Leveraging Large Language Models and Computer Vision to automate workflows and create smart applications."
          />
          <ServiceCard 
            icon={Database}
            title="ERP & CRM Systems"
            description="Custom enterprise resource planning and customer relationship management solutions tailored for your business."
          />
          <ServiceCard 
            icon={Globe}
            title="Web Development"
            description="Dynamic, responsive, and high-performance web applications using modern stacks like React and Python."
          />
        </div>
      </section>

      {/* Projects Snippet Section */}
      <section className="projects-preview-section container">
        <div className="section-header">
          <h2 className="section-title text-gradient">Featured Projects</h2>
          <Link to="/projects" className="see-all-link">See all projects <ArrowRight size={18} /></Link>
        </div>
        
        <div className="projects-grid">
          <ProjectCard 
            title="Anaya3 - AI Assistant"
            description="Multimodal AI assistant capable of understanding emotions from voice and facial expressions using LLMs and computer vision."
            tags={['Python', 'LLM', 'OpenCV', 'FastAPI']}
          />
          <ProjectCard 
            title="AutoFormX"
            description="Smart Form Automation with adaptive fuzzy matching, XPath detection, and error handling."
            tags={['Python', 'Selenium', 'Fuzzy Matching']}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
