import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills">
      <h2>My <span>Skills</span></h2>
      <div className="skills-grid">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="glass-card skill-card">
            <h3>{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.items.map(item => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}