import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Brand / copyright */}
        <div className="footer-col brand">
          <h3>Seymur Uvarov</h3>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle: Quick links */}
        <div className="footer-col links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about-section">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right: Social / contact */}
        <div className="footer-col social">
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:seymur.uvarov98@gmail.com">Email</a></li>
            <li><a href="https://github.com/princeVegeta2" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/seymur-uvarov-953932267/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="tel:+48604715542">Phone</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
