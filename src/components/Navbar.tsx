export default function Navbar() {
  return (
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
            {["about", "experience", "skills", "certifications"].map((id) => (
              <li className="nav-item" key={id}>
                <a className="nav-link" href={`#${id}`}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
