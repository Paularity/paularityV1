import { useNavigate } from "react-router-dom";

import bfDasboard from "../../assets/images/projects/bf-hris/bf-dashboard.jpg";
import bfConfig from "../../assets/images/projects/bf-hris/bf-configs.jpg";
import bfWorkOrder from "../../assets/images/projects/bf-hris/bf-hris-wo.jpg";
import bfLogin from "../../assets/images/projects/bf-hris/bf-login.jpg";
import bfTimesheet from "../../assets/images/projects/bf-hris/bf-timesheet.jpg";
import { useState } from "react";

export default function BlackfortHris() {
  const navigate = useNavigate();
  const [fullscreen, setFullscreen] = useState<string | null>(null);

  const toggleFullscreen = (src: string) => {
    setFullscreen((prev) => (prev === src ? null : src));
  };

  const screenshots = [
    { src: bfDasboard, label: "Dashboard" },
    { src: bfConfig, label: "Configurations" },
    { src: bfLogin, label: "Login Page" },
    { src: bfWorkOrder, label: "Work Order - PDF Generation" },
    { src: bfTimesheet, label: "Timesheet Approval" },
  ];

  return (
    <div className="bf-body py-5">
      {/* background layers */}
      <div className="gradient-background">
        <div className="gradient-sphere sphere-1" />
        <div className="gradient-sphere sphere-2" />
        <div className="gradient-sphere sphere-3" />
        <div className="glow" />
        <div className="grid-overlay" />
        <div className="noise-overlay" />
        <div className="particles-container" id="particles-container" />
      </div>

      <div className="content-container">
        <div className="bf-slider-container mb-5">
          {screenshots.map((img, idx) => (
            <div className="bf-slider-block" key={idx}>
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
                />
                <div className="hover-label">{img.label}</div>
              </div>
            </div>
          ))}
        </div>

        <h1>Blackfort HRIS</h1>
        <p>
          An internal HR system like Sprout PH, managing records, attendance,
          and leave modules.
        </p>
        <button onClick={() => navigate("/")} className="btn">
          ← Back to Home
        </button>
      </div>

      {fullscreen && (
        <div className="fullscreen-overlay" onClick={() => setFullscreen(null)}>
          <img alt={fullscreen} src={fullscreen} className="fullscreen-image" />
        </div>
      )}
    </div>
  );
}
