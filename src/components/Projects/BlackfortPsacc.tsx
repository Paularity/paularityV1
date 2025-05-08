import { useEffect, useState } from "react";
import psaccLogin from "../../assets/images/projects/bf-psacc/psacc-login.png";
import psaccDashboard from "../../assets/images/projects/bf-psacc/psacc-dashboard.png";
import booking1 from "../../assets/images/projects/bf-psacc/psacc-sample-booking-1.png";
import booking2 from "../../assets/images/projects/bf-psacc/psacc-sample-booking-2.png";
import booking3 from "../../assets/images/projects/bf-psacc/psacc-sample-booking-3.png";
import booking4 from "../../assets/images/projects/bf-psacc/psacc-sample-booking-4.png";

import "../../styles/psacc.css";
import { useNavigate } from "react-router-dom";

export default function BlackfortPsacc() {
  const screenshots = [
    { src: psaccLogin, label: "Login Page" },
    { src: booking1, label: "Booking Step 1 – Shipping Info" },
    { src: booking2, label: "Booking Step 2 – Service Type" },
    { src: booking3, label: "Booking Management Filters" },
    { src: booking4, label: "Booking Summary & Estimate" },
    { src: psaccDashboard, label: "Dashboard – Cargo & Bookings" },
  ];

  const [fullscreen, setFullscreen] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".fade-in-up");
    items.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
    });
  }, []);

  const toggleFullscreen = (src: string) => {
    setFullscreen((prev) => (prev === src ? null : src));
  };

  return (
    <div id="psacc-background">
      <div className="psacc-content p-5">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <button
            onClick={() => navigate("/")}
            className="btn btn-outline-light mb-4 ml-auto"
          >
            ← Back to Home
          </button>
          <h1 className="mb-3">PSACC Cargo Booking & Admin Portal</h1>
          <h4 className="mb-4">
            Senior Frontend Developer | Aug 2022 – Nov 2024
          </h4>

          <p className="mb-4 text-light">
            The PSACC system is an enterprise cargo booking and logistics
            platform for Philippine Span Asia Carrier Corp. It supports secure
            and user-friendly shipment scheduling, live status tracking, and
            administrative workflows.
          </p>

          <section className="mb-5">
            <h5 className="fw-bold">🟡 Key Modules</h5>
            <ul>
              <li>Step-by-step Booking Wizard</li>
              <li>Admin Rate & Service Management</li>
              <li>Live Booking Dashboard</li>
              <li>Role-based Access Control</li>
            </ul>
          </section>

          <section className="mb-5">
            <h5 className="fw-bold">🟡 My Contributions</h5>
            <ul>
              <li>Developed core UI flows for booking and approvals</li>
              <li>
                Customized CSS-based design system based on PSACC branding
              </li>
              <li>Integrated PDF estimation & service filters</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="fw-bold">📸 Screenshots</h5>
            <div className="row g-4">
              {screenshots.map((img, idx) => (
                <div className="col-12 col-md-6 fade-in-up" key={idx}>
                  <div
                    className="screenshot-zoom"
                    onClick={() => toggleFullscreen(img.src)}
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className={`img-fluid ${
                        fullscreen === img.src ? "fullscreen-img" : ""
                      }`}
                      style={{
                        maxHeight: "300px",
                        objectFit: "cover",
                        cursor: "zoom-in",
                      }}
                    />
                    <p className="mt-2 text-center fw-semibold">{img.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {fullscreen && (
        <div className="fullscreen-overlay" onClick={() => setFullscreen(null)}>
          <img alt={fullscreen} src={fullscreen} className="fullscreen-image" />
        </div>
      )}
    </div>
  );
}
