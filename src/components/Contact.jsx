import { personalInfo } from "../data/portfolioData";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Add your backend logic here)");
  };

  // Helper to ensure URLs work even if 'https://' is missing (like in your linkedin string)
  const formatUrl = (url) => url.startsWith("http") ? url : `https://${url}`;

  return (
    <section id="contact">
      <h2>Get In <span>Touch</span></h2>
      <div className="contact-container glass-card">
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        
        <div className="contact-info">
          <p>Email: {personalInfo.email}</p>
          <p>Location: {personalInfo.location}</p>
          
          <div className="social-links" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            {personalInfo.github && (
              <a 
                href={formatUrl(personalInfo.github)} 
                target="_blank" 
                rel="noreferrer"
                style={{ color: 'inherit', transition: 'color 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#6366F1'}
                onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}
              >
                <FiGithub size={24} />
              </a>
            )}
            
            {personalInfo.linkedin && (
              <a 
                href={formatUrl(personalInfo.linkedin)} 
                target="_blank" 
                rel="noreferrer"
                style={{ color: 'inherit', transition: 'color 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#6366F1'}
                onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}
              >
                <FiLinkedin size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}