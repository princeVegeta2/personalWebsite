import React from 'react';
import '../../assets/styles/ProjectsSection.css';
import ProjectCard from '../common//ProjectCard';
import TrackerScreenshot from '../../assets/images/tracker-screenshot.png';
import DataEntryScreenshot from '../../assets/images/data-entry-screenshot.png';
import FlappyScreenshot from '../../assets/images/flappy-screenshot.png';
import WebBuilder from '../../assets/images/webBuilder.png';
import PaperScreenshot from '../../assets/images/paper.png';
import AiPongScreenshot from '../../assets/images/aiPong.png';

function ProjectsSection() {
    const projects = [
        {
            name: "Paper Trading Platform",
            description: "A ReactTS + NestJS full stack project hosted on AWS which allows user to engage in paper-trading on the Solana blockchain. Tracks accurate statistics and solves a real problem.",
            technologies: ["React", "TypeScript", "PostgreSQL", "NestJS", "AWS"],
            image:PaperScreenshot,
            liveDemo: "https://prypto.netlify.app/"
        },
        {
            name: "Pong AI",
            description: "A Pygame pong clone which enables a human to play normally, or allows to train an AI model and then use it to play the game.",
            technologies: ["Python", "Pygame", "PyTorch", "AI", "ML"],
            image: AiPongScreenshot,
            githubLink: "https://github.com/princeVegeta2/ai-pong"
        },
        {
            name: "Bitcoin Price Tracker",
            description: "A NextJS website connected to ElephantSQL(this DB provider is closing their business, the website might not work anymore) database and CoindeskAPI to fetch BTC prices to save and display them.",
            technologies: ["Next.js", "PostgreSQL", "Docker", "CoindeskAPI"],
            image: TrackerScreenshot,
            githubLink: "https://github.com/princeVegeta2/bitcoinPriceTracker",
            liveDemo: "https://bitcoin-price-tracker-mu.vercel.app/"
        },
        {
            name: "Data Entry App",
            description: "A simple .NET application which connects to a database and edits table data.",
            technologies: [".NET", "C#", "MsSql", "SSMS"],
            image: DataEntryScreenshot,
            githubLink: "https://github.com/princeVegeta2/dataEntryApp"
        },
        {
            name: "Flappy AI",
            description: "A flappy AI clone made in unity with and an ML Agent which learns how to play it.",
            technologies: ["Unity", "C#", "MLAgents", "Python", "TensorFlow"],
            image: FlappyScreenshot,
            githubLink: "https://github.com/princeVegeta2/flappyAI"
        },
        {
            name: "AI Web Builder",
            description: "Showcases all of my skill in Fullstack development so far. Uses Anthropic Claude API to build REACT websites in a no-code environment. Comprehensive .NET+PostgreSQL on AWS backend.",
            technologies: ["React", ".NET", "AWS", "AI"],
            image: WebBuilder,
            githubLink: "https://github.com/princeVegeta2/ai-builder-server-dotnet"
        }
        // Add more projects here
    ];

    return (
        <section className="projects-section" id="projects-section">
            <div className="projects-title">
                <h2>My Projects</h2>
                <div className="projects-divider"></div>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;