import React from "react";
import "./ProjectSection.css";

import pongSS from "../../assets/images/aiPong.png";
import flappySS from "../../assets/images/flappy-screenshot.png";
import salesSS from "../../assets/images/sales_trends.png";
import dataSS from "../../assets/images/data-entry-screenshot.png";
import aiSS from "../../assets/images/webBuilder.png";
import paperSS from "../../assets/images/paper.png";
import nextSS from "../../assets/images/nextwave-screenshot.png";

interface GithubLink { name: string; link: string }

interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  links: GithubLink[];
}

const projects: Project[] = [
  {
    name: "NextWave Solutions",
    description:
      "A website with an integrated backend for my freelancing endeavours. Clients can book their projects and make accounts here.",
    technologies: ["React", "TypeScript", "C#", ".NET", "EntiyFramework", "PostgreSQL", "EC2", "RDS", "EB"],
    image: nextSS,
    links: [{ name: "Live Demo", link: "https://kostik.netlify.app/" }],
  },
  {
    name: "Paper trading platform",
    description:
      "A crypto paper trading platform simulator built for the Solana blockchain. Uses real prices and metrics to track the user's progress and help them trade without risking real money",
    technologies: ["React", "TypeScript", "NestJS", "TypeORM", "PostgreSQL", "EC2", "RDS", "EB"],
    image: paperSS,
    links: [
      { name: "Frontend repo", link: "https://github.com/princeVegeta2/sol-frontend" },
      { name: "Backend repo", link: "https://github.com/princeVegeta2/sol-backend" },
    ],
  },
  {
    name: "AI Website builder",
    description:
      "A user-friendly UI which allows the user to build websites on React using simple building blocks. The websites then sends that as a prompt to an Anthropic LLM and returns pure JSX and CSS",
    technologies: ["React", "JavaScript", ".NET", "EntityFramework", "PostgreSQL", "EC2", "RDS", "EB"],
    image: aiSS,
    links: [
      { name: "Frontend repo", link: "https://github.com/princeVegeta2/ai-web-builder" },
      { name: "Backend repo", link: "https://github.com/princeVegeta2/ai-builder-server-dotnet" },
    ],
  },
  {
    name: "Data entry app",
    description:
      "A simple windows forms desktop app which allows the user to connect to any database with a connection string and add data through a csv file, similar to pgAdmin",
    technologies: ["C#", ".NET", "WindowsForms", "PostgreSQL", "MySQL", "XML"],
    image: dataSS,
    links: [{ name: "Repo", link: "https://github.com/princeVegeta2/dataEntryApp" }],
  },
  {
    name: "Sales data analysis",
    description: "A data analysis project aimed at analyzing sales data in a large dataset",
    technologies: ["Python", "Pandas", "NumPy"],
    image: salesSS,
    links: [{ name: "Repo", link: "https://github.com/princeVegeta2/salesAnalysis" }],
  },
  {
    name: "Flappy AI",
    description:
      "A 2D FlappyBird clone made in unity with an AI agent integrated into the process to teach it how to play the game",
    technologies: ["C#", "Python", "Unity2D", "MlAgents", "PyTorch", "NumPy"],
    image: flappySS,
    links: [{ name: "Repo", link: "https://github.com/princeVegeta2/flappyAI" }],
  },
  {
    name: "Pong AI",
    description:
      "A simple 2D game clone of oldschool Pong, but with an integarted AI agent which can be taught to play it",
    technologies: ["Python", "Pygame", "PyTorch", "NumPy", "TensorFlow"],
    image: pongSS,
    links: [{ name: "Repo", link: "https://github.com/princeVegeta2/ai-pong" }],
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section className="project-section" id="projects">
      <div className="project-section__container">
        <h2 className="project-section__title">Projects</h2>

        <div className="project-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.name}>
              <div className="project-card__media">
                <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{p.name}</h3>
                <p className="project-card__desc">{p.description}</p>

                <ul className="project-card__tags">
                  {p.technologies.map((t) => (
                    <li className="tag" key={t}>{t}</li>
                  ))}
                </ul>

                <div className="project-card__links">
                  {p.links.map((l) => (
                    <a
                      key={l.link}
                      href={l.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      {l.name}
                      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M14 3h7v7m0-7L10 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
