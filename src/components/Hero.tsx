import myResume from "../assets/Christian-Paul-Decembrana-2025.pdf";

export default function Hero() {
  return (
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
  );
}
