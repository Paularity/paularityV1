import data from "../data";

export default function Certifications() {
  return (
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
  );
}
