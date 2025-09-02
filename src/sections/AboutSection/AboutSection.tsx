import React, { useState } from "react";
import "./AboutSection.css";
import profilePhoto from "../../assets/images/profile.png";

type AboutCardProps = {
  title: string;
  initiallyOpen?: boolean;
  children: React.ReactNode;
};

const Chevron: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    className={`chevron ${open ? "open" : ""}`}
    width="22"
    height="22"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M6 9l6 6 6-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AboutCard: React.FC<AboutCardProps> = ({ title, initiallyOpen = false, children }) => {
  const [open, setOpen] = useState(initiallyOpen);

  return (
    <section className={`about-card ${open ? "open" : ""}`}>
      <header className="about-card__header">
        <h2 className="about-card__title">{title}</h2>
        <button
          className="about-card__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Collapse section" : "Expand section"}
        >
          <Chevron open={open} />
        </button>
      </header>

      <div className="about-card__content" aria-hidden={!open}>
        {children}
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  return (
    <div className="about-section" id="about-section">
      <div className="about-section-container">
        {/* Intro row */}
        <div className="about-row intro">
          <img className="about-photo" src={profilePhoto} alt="Profile" />
          <div className="about-intro-text">
            <h1>About Me</h1>
            <p>
              I'm a Full-Stack Developer focused on building scalable web apps
              and delightful user experiences. I enjoy .NET, React/TypeScript,
              and modern backend APIs with a strong eye for clean, maintainable code.
            </p>
          </div>
        </div>

        {/* Cards row */}
        <div className="about-row cards">
          <AboutCard title="My Coding Journey" initiallyOpen>
            <p>
              I started with small web projects and grew into full-stack work:
              React/TypeScript on the front, ASP.NET Core or NestJS on the back,
              plus PostgreSQL and cloud deployments. I’ve shipped freelance
              products, contributed to e-commerce backends, and built tools that
              integrate LLMs to speed up development and content workflows.
            </p>
          </AboutCard>

          <AboutCard title="Core Skills">
            <ul className="skills">
              <li><span>Languages</span><em>TypeScript, C#, JavaScript, SQL, Python</em></li>
              <li><span>Frontend</span><em>React, Redux Toolkit, Vite</em></li>
              <li><span>Backend</span><em>ASP.NET Core, Node.js, NestJS</em></li>
              <li><span>Data</span><em>PostgreSQL, SQLite, MongoDB</em></li>
              <li><span>Cloud/DevOps</span><em>AWS (EB, RDS, S3), Docker, CI/CD, Netlify</em></li>
              <li><span>Other</span><em>REST APIs, Auth, Testing, LLM Integrations</em></li>
            </ul>
          </AboutCard>

          <AboutCard title="My Hobbies & Preferences">
            <p>
              Outside of code: gym sessions, 3D modeling, evening walks, and
              gamedev experiments with Unity/Godot. I’m learning chess (aiming
              for 1500 ELO on Chess.com) and I’m a big cat person. 😺
            </p>
          </AboutCard>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
