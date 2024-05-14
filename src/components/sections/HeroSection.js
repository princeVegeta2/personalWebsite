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
                <a href="https://www.dropbox.com/scl/fi/kylelh76onlpb5f4sf9so/Resume-2.pdf?rlkey=tu618zn4kd0waw3aj4wrig0oo&st=4ldm6ep3&dl=1"><button className="cta-button" id="download-button">Download my Resume</button></a>
            </div>
        </section>
    );
}

export default HeroSection;
