import { Database, BrainCircuit, Globe, Smartphone, Monitor, Server } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: BrainCircuit,
      title: "AI & Machine Learning",
      description: "Custom AI solutions to transform your business processes.",
      features: [
        "LLMs & Chatbot Integration",
        "Computer Vision & Pattern Recognition",
        "Predictive Analytics Models",
        "Data Automation Scripts"
      ]
    },
    {
      icon: Database,
      title: "ERP & CRM Solutions",
      description: "End-to-end enterprise portals to manage data and customer relationships.",
      features: [
        "Custom Workflow Automation",
        "Data Migration & ETL Pipelines",
        "Analytics Dashboards",
        "Secure API Integrations"
      ]
    },
    {
      icon: Globe,
      title: "Web App Development",
      description: "High-performance, scalable web portals with modern tech stacks.",
      features: [
        "React & Vite Frontends",
        "FastAPI & Flask Backends",
        "Responsive Dynamic UIs",
        "Database Architecture (SQL/NoSQL)"
      ]
    },
    {
      icon: Smartphone,
      title: "Android & iOS Solutions",
      description: "Mobile presence strategies and app development bridging native APIs.",
      features: [
        "Cross-platform Development",
        "API Consumption",
        "UI/UX Mobile Design",
        "App Store Deployment"
      ]
    },
    {
      icon: Monitor,
      title: "Desktop Applications",
      description: "Powerful local software for heavy computations and management.",
      features: [
        "Python Desktop Apps",
        "Offline-first Architecture",
        "Hardware Integration via Sockets",
        "System Utilities"
      ]
    },
    {
      icon: Server,
      title: "Cloud & Deployment",
      description: "Setting up your applications to scale securely using modern DevOps.",
      features: [
        "Docker Containerization",
        "CI/CD Pipelines",
        "Cloud Hosting (AWS, Render)",
        "Nginx & Load Balancing"
      ]
    }
  ];

  return (
    <div className="services-page container">
      <div className="services-header animate-fade-in">
        <h1 className="section-title text-gradient">Solutions & Consultations</h1>
        <p className="services-intro">
          I offer comprehensive technical solutions ranging from deep logic engineering backends to blazing fast web applications. My specialty lies in integrating <span className="text-gradient">AI capabilities</span> into traditional business software like ERPs and CRMs.
        </p>
      </div>

      <div className="services-grid-large animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {services.map((srv, idx) => (
          <ServiceCard 
            key={idx}
            icon={srv.icon}
            title={srv.title}
            description={srv.description}
            features={srv.features}
          />
        ))}
      </div>
      
      <div className="cta-section glass-panel animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2>Ready to innovate?</h2>
        <p>Whether you need a full enterprise pipeline or a specialized AI module, modern technology can solve it.</p>
        <a href="/contact" className="btn-primary mt-4">Book a Consultation</a>
      </div>
    </div>
  );
};

export default Services;
