import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="text-gradient">Shivam Sharma</h3>
            <p className="footer-desc">
              AI/ML Developer & Consultant. Building tomorrow's technology today with a focus on AI/ML development and intelligent solutions.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Me</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/shivamshar03" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shivamshar03/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="mailto:shivamsharma.py@gmail.com" className="social-icon">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom glass-panel">
          <p>
            © {new Date().getFullYear()} Shivam Sharma. Built with <Heart size={14} className="heart-icon" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
