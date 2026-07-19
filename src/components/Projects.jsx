import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Featured <span>Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-card project-card">
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="skill-tags">
                {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
                <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}