import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page container animate-fade-in">
      <div className="contact-wrapper glass-panel">
        <div className="contact-info">
          <h1 className="text-gradient">Get in Touch</h1>
          <p className="contact-desc">
            Whether you are looking to streamline your business with AI, build a scalable web application, or just want to say hi, my inbox is always open.
          </p>
          
          <div className="contact-methods">
            <div className="method">
              <div className="method-icon"><Mail size={20} /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:shivamsharma.py@gmail.com">shivamsharma.py@gmail.com</a>
              </div>
            </div>
            
            <div className="method">
              <div className="method-icon"><Phone size={20} /></div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+916266061914">+91-6266061914</a>
              </div>
            </div>
            
            <div className="method">
              <div className="method-icon"><MapPin size={20} /></div>
              <div>
                <h4>Location</h4>
                <p>Indore, India</p>
              </div>
            </div>
          </div>
          
          <div className="contact-socials">
             <p>Follow me on</p>
             <div className="socials-box">
                <a href="https://github.com/shivamshar03" target="_blank" rel="noopener noreferrer" className="social-pill">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/shivamshar03/" target="_blank" rel="noopener noreferrer" className="social-pill">
                  <Linkedin size={18} /> LinkedIn
                </a>
             </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Send a Message</h2>
            
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            
            <div className="input-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Project Inquiry" required />
            </div>
            
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Let's build something amazing together..." required></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
