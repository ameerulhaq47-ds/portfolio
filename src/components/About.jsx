import { aboutInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2>About <span>Me</span></h2>
      
      <div className="about-grid">
        {/* Left Side: Biography & Focus */}
        <div className="about-main glass-card">
          <h3>My Story</h3>
          <p className="bio-text">{aboutInfo.biography}</p>
          
          <div className="objective-box">
            <h4>Career Objective</h4>
            <p>{aboutInfo.objective}</p>
          </div>

          <div className="highlights-grid">
            {aboutInfo.highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <span className="highlight-title">{item.title}:</span>
                <span className="highlight-value"> {item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Structural Journey */}
        <div className="about-journey glass-card">
          <h3>The Journey</h3>
          <div className="journey-timeline">
            {aboutInfo.journey.map((step, index) => (
              <div key={index} className="journey-node">
                <div className="node-marker"></div>
                <div className="node-content">
                  <h4>{step.milestone}</h4>
                  <p>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}