import { personalInfo } from "../data/portfolioData";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Grab the data from the form
    const formData = new FormData(e.target);
    
    // Add your Web3Forms access key here
    formData.append("access_key", "e5a7cc49-2ee6-4f2a-ba92-a41ce5d9b23e");

    try {
      // Send the data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        alert("Message sent successfully! I will get back to you soon.");
        e.target.reset(); // Clears the form after sending
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    }
  };

  // Helper to ensure URLs work even if 'https://' is missing
  const formatUrl = (url) => url.startsWith("http") ? url : `https://${url}`;

  return (
    <section id="contact">
      <h2>Get In <span>Touch</span></h2>
      <div className="contact-container glass-card">
        
        <form onSubmit={handleSubmit} className="contact-form">
          {/* CRITICAL: Added name="name" */}
          <input type="text" name="name" placeholder="Your Name" required />
          
          {/* CRITICAL: Added name="email" */}
          <input type="email" name="email" placeholder="Your Email" required />
          
          {/* CRITICAL: Added name="message" */}
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          
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