import React from "react";
import "./HeroSection.css";
import heroBanner from "../../assets/images/hero-image.jpg";

const HeroSection: React.FC = () => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${heroBanner})` }}
      id="hero-section"
    >
      <div className="hero-section-container">
        <div className="hero-c-1"></div>
        <div className="hero-c-2">
          <div className="hero-c-2-r-1"></div>
          <div className="hero-c-2-r-2">
            <h1>Hello, I'm Seymur</h1>
            <h5>
              I am a passionate Fullstack Developer with experience in building
              applications with React, Next.js, .NET and more.
            </h5>
            <a
              href="https://www.dropbox.com/scl/fi/954mgba4llp5w0wltbd5c/Rezume.pdf?rlkey=fh69ljl461jx3p82epk2977g8&st=gz2ddk6t&dl=1"
              className="cta-button"
            >
              Download my Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
