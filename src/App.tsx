import { JSX } from "react";
import data from "./data";
import myResume from "./assets/Christian-Paul-Decembrana-2025.pdf";

export default function App(): JSX.Element {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient shadow-sm blur-nav">
        <div className="container">
          <a className="navbar-brand fw-bold text-glow" href="#">
            Paularity v0.27
          </a>
          <button
            aria-label="nav"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certifications">
                  Certifications
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hero text-white">
        <div className="hero-bg" />
        <div className="hero-overlay text-center">
          <div className="container py-5">
            <h1 className="display-3 fw-bold text-shadow">
              Christian Paul Decembrana
            </h1>
            <p className="lead">Frontend Developer & IT Consultant</p>
            <div className="d-flex justify-content-center flex-wrap">
              <a
                href="#experience"
                className="btn btn-outline-light btn-lg mt-4 glow-button me-2"
              >
                Explore My Work
              </a>
              <a
                href={myResume}
                className="btn btn-light btn-lg mt-4 glow-button"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="section container fade-in-up">
        <h2 className="mb-4 section-title">About Me</h2>
        <p className="lead text-muted">{data.about}</p>
      </section>

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
                    <div key={pidx} className="project-block">
                      <div className="project-name">{project.name}</div>
                      <div className="project-role">{project.role}</div>
                      <p className="project-description">
                        {project.description}
                      </p>
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

      <section id="skills" className="section container fade-in-up">
        <h2 className="mb-4 section-title">Skills</h2>
        <div className="row g-3">
          {data.skills.map((skill, idx) => (
            <div className="col-6 col-md-4 col-lg-3" key={idx}>
              <div className="skill-card shadow-sm h-100 text-center py-3 px-2">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon-img mb-2"
                />
                <div className="fw-semibold">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="certifications" className="section container">
        <h2 className="mb-5 section-title">Certifications</h2>
        <div className="certification-grid">
          {data.certifications.map((cert, idx) => (
            <div className="certification-card fade-in" key={idx}>
              <div className="certification-content">
                <div className="cert-icon">🎓</div>
                <div className="cert-title">{cert}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="text-center p-4 bg-dark text-white fade-in">
        <p>
          &copy; 2025 Christian Paul Decembrana | Angeles City, PH |{" "}
          <a
            className="text-white"
            href="mailto:work.christiandecembrana@gmail.com"
          >
            Contact Me
          </a>{" "}
          |{" "}
          <a
            className="text-white"
            href="https://linkedin.com/in/paularity"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}
