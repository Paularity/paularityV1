import { useNavigate } from "react-router-dom";
import data from "../data";

export default function Experience() {
  const navigate = useNavigate();

  return (
    <section id="experience" className="section container">
      <h2 className="mb-5 section-title">Work Experience</h2>
      <div className="experience-stack">
        {data.experience.map((item, idx) => (
          <div className="experience-tile fade-slide-in" key={idx}>
            <div className="experience-tile-header">
              <h4 className="company-name">{item.title}</h4>
              <p className="position-title">{item.position}</p>
              <p className="tile-meta">
                {item.type} | {item.period} | {item.location}
              </p>
            </div>

            {item.projects && (
              <div className="tile-body">
                {item.projects.map((project, pidx) => (
                  <div
                    key={pidx}
                    className="project-block hover-lift"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    <div className="project-name">{project.name}</div>
                    <div className="project-role">{project.role}</div>
                    <p className="project-description">{project.description}</p>
                  </div>
                ))}
              </div>
            )}

            {item.responsibilities && (
              <ul className="tile-responsibilities">
                {item.responsibilities.map((r, ridx) => (
                  <li key={ridx}>{r}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
