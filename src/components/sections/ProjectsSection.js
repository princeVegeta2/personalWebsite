import React from 'react';
import '../../assets/styles/ProjectsSection.css';
import ProjectCard from '../common//ProjectCard';
import TrackerScreenshot from '../../assets/images/tracker-screenshot.png';
import DataEntryScreenshot from '../../assets/images/data-entry-screenshot.png';
import FlappyScreenshot from '../../assets/images/flappy-screenshot.png';
import SalesTrends from '../../assets/images/sales_trends.png';

function ProjectsSection() {
    const projects = [
        {
            name: "Bitcoin Price Tracker",
            description: "A NextJS website connected to ElephantSQL database and CoindeskAPI to fetch BTC prices to save and display them.",
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
            name: "Sales analysis",
            description: "A simple analysis of a sales dataset with Pandas visualized using Matplotlib. ",
            technologies: ["Python", "Pandas", "Matplotlib"],
            image: SalesTrends,
            githubLink: "https://github.com/princeVegeta2/salesAnalysis"
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