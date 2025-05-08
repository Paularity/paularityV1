import data from "../data";

export default function Skills() {
  return (
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
  );
}
