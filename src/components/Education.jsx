import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2>My <span>Education</span></h2>
      
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="glass-card education-card">
            <div className="edu-header">
              <h3>{edu.degree}</h3>
              <span className="edu-year">{edu.year}</span>
            </div>
            <p className="edu-college">{edu.college}</p>
            {edu.gpa && <p className="edu-gpa"><strong>Score:</strong> {edu.gpa}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}