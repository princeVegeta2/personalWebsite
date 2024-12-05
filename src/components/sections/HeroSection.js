import React from 'react';
import useCustomInView from '../hooks/useCustomInView';
import '../../assets/styles/HeroSection.css';
import bgImage from '../../assets/images/hero-image.jpg';

function HeroSection() {
    const { ref, inView } = useCustomInView();

    return (
        <section className="hero-section" style={{ backgroundImage: `url(${bgImage})` }} id="hero-section">
            <div ref={ref} className={`hero-content ${inView ? 'slide-in' : ''}`}>
                <h1>Hello, I’m Seymur</h1>
                <p>I am a passionate Fullstack Developer with experience in building applications with React, Next.js, .NET and more.</p>
                <a href="https://www.dropbox.com/scl/fi/ynxoir6cfiagv48e44z9p/Resume.pdf?rlkey=wxg6jja4p6kc2g4z86wam0nwj&st=6cwovk3h&dl=1"><button className="cta-button" id="download-button">Download my Resume</button></a>
            </div>
        </section>
    );
}

export default HeroSection;
