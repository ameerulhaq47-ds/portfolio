import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        {/* <h1>Hi, I'm <span></span></h1> */}
        <h1>Hi, I am {personalInfo.name}</h1>
        <h3>{personalInfo.title}</h3>
        <p>{personalInfo.bio}</p>
        
        <div className="hero-buttons">
          <a href={personalInfo.resume} className="btn btn-primary" download>Download Resume</a>
          <a href="#projects" className="btn btn-outline">View Projects</a>
        </div>
      </div>
    </section>
  );
}