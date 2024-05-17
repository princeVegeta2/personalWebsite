import React, { useState } from 'react';
import '../../assets/styles/AboutSection.css';
import profilePhoto from '../../assets/images/profile.png';
import useCustomInView from '../hooks/useCustomInView';

function AboutSection() {
    const { ref, inView } = useCustomInView();

    // Expanding logic
    const [expanded, setExpanded] = useState({
        journey: false, skills: false, moreSkills: false,
    });

    const toggleExpanded = (section) => {
        setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="section alternate" id="about-section" ref={ref}>
            <div className="container">
                <div className="profile-photo">
                    <img src={profilePhoto} alt="Profile" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="about-content">
                    <h2>About Me</h2>
                    <p className={`fade-in ${inView ? 'fade-in-active' : ''}`}>
                        I'm a Fullstack Developer with a passion for building scalable web applications and engaging user experiences.
                    </p>
                </div>
            </div>

            <div className="about-subsection">
                <div className={`biography fade-in ${inView ? 'fade-in-active' : ''}`}>
                    <h3>My Coding Journey</h3>
                    <div className="content-container">
                        <p className={expanded.journey ? 'expanded' : ''}>
                            I have started learning how to code back in 2021. My first choice was <b>C++</b>, which was low-level enough for me to familiarize myself with the basics of software engineering.
                            After familiarizing myself with the core concepts of software engineering, I have set my eyes on learning <b>C#</b> and started creating my first <b>APIs</b> and solving <b>Codewars</b> problems.
                            Since my goal was to become a <b>Fullstack</b> developer, I needed to choose a frontend tool, and I have decided to settle with good old <b>React</b>.
                            While sharpening my C# and React skills, I was also actively utilizing <b>Python</b>, especially <b>BS4</b>, <b>Selenium</b> and <b>Pandas</b> libraries.
                        </p>
                        <button onClick={() => toggleExpanded('journey')} className="expand-button">&#9660;</button>
                    </div>
                </div>
            </div>

            <div className="about-subsection">
                <div className={`biography fade-in ${inView ? 'fade-in-active' : ''}`}>
                    <h3>Core skills</h3>
                    <div className="content-container">
                        <p className={expanded.skills ? 'expanded' : ''}>
                            Here you can take a look at the skills I have acquired throughout my learning journey.
                            <div className="skill-categories">
                                <div className="skill-set">
                                    <h4>Frontend</h4>
                                    <ul>
                                        <li>React</li>
                                        <li>Next.js</li>
                                        <li>Html/CSS</li>
                                    </ul>
                                </div>
                                <div className="skill-set">
                                    <h4>Backend</h4>
                                    <ul>
                                        <li>.NET with EntityFramework</li>
                                        <li>MSSQL and PostgreSQL</li>
                                        <li>API development</li>
                                    </ul>
                                </div>
                                <div className="skill-set">
                                    <h4>Other</h4>
                                    <ul>
                                        <li>Docker</li>
                                        <li>Python</li>
                                        <li>SOLID</li>
                                    </ul>
                                </div>
                            </div>
                        </p>
                        <button onClick={() => toggleExpanded('skills')} className="expand-button">&#9660;</button>
                    </div>
                </div>
            </div>

            <div className="about-subsection">
                <div className={`biography fade-in ${inView ? 'fade-in-active' : ''}`}>
                    <h3>My hobbies and preferences</h3>
                    <div className="content-container">
                        <p className={expanded.moreSkills ? 'expanded' : ''}>
                            Aside from coding, I also enjoy going to the gym, 3D modeling and going out for evening walks. Since I love videogames I also participate in GameDev,
                            mainly using Unity and Godot as the game engines of my choice. I am also trying to learn how to play Chess, but so far the results have not been great,
                            but I am determined to get at-least 1500 ELO on Chess.com. Also, I love cats and am planning to get one soon.
                        </p>
                        <button onClick={() => toggleExpanded('moreSkills')} className="expand-button">&#9660;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
