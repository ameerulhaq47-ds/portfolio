import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>My <span>Journey</span></h2>
      
      <div className="experience-timeline">
        {experience.map((exp, index) => (
          <div key={index} className="experience-card glass-card">
            <div className="exp-header">
              <div>
                <h3>{exp.role}</h3>
                <h4 className="exp-company">{exp.company}</h4>
              </div>
              <span className="exp-duration">{exp.duration}</span>
            </div>
            <p className="exp-desc">{exp.desc}</p>
            {/* <div className="skill-tags">
              {exp.tech.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}