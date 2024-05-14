// src/components/common/ProjectCard.js
import React from 'react';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={project.image} alt={`${project.name} screenshot`} />
            <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                    {project.technologies.map(tech => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
                <div className="project-links">
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
