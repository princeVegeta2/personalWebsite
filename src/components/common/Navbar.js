import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../../assets/styles/Navbar.css';

function Navbar() {
    const [activeTab, setActiveTab] = useState('');
    const [sliderStyle, setSliderStyle] = useState({});
    const [showDropdown, setShowDropdown] = useState(false);
    const tabsRef = useRef([]);

    const updateSliderPosition = useCallback((tabId = activeTab) => {
        const index = tabsRef.current.findIndex(ref => `#${ref.id}` === tabId);
        const activeEl = tabsRef.current[index];
        if (activeEl) {
            setSliderStyle({
                width: `${activeEl.offsetWidth}px`,
                left: `${activeEl.offsetLeft}px`,
                opacity: 1  // Ensure the slider is visible
            });
        }
    }, [activeTab]);

    useEffect(() => {
        updateSliderPosition();
    }, [activeTab, updateSliderPosition]);

    const onTabClick = (event, tabId) => {
        event.preventDefault();
        setActiveTab(tabId);
        updateSliderPosition(tabId);
        // Scroll logic
        if (tabId === '#tab-about') {
            const section = document.getElementById('about-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (tabId === '#tab-projects') {
            const section = document.getElementById('projects-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (tabId === '#tab-github') {
            window.open('https://github.com/princeVegeta2/', '_blank');
        }
        if (tabId === '#tab-contact') {
            const section = document.getElementById('contact-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (tabId === '#tab-resume') {
            setShowDropdown(!showDropdown);
        } else {
            setShowDropdown(false);
        }
    };

    return (
        <section className="et-hero-tabs">
            <h1>Seymur Uvarov</h1>
            <h3>Full-Stack developer</h3>
            <div className="et-hero-tabs-container">
                {['about', 'projects', 'github', 'resume', 'contact'].map((tab, index) => (
                    <a key={tab}
                        id={`tab-${tab}`}
                        ref={el => tabsRef.current[index] = el}
                        className={`et-hero-tab ${activeTab === `#tab-${tab}` ? 'active' : ''}`}
                        href={`#tab-${tab}`}
                        onClick={(e) => onTabClick(e, `#tab-${tab}`)}>
                        {tab.toUpperCase()}
                    </a>
                ))}
                <span className="et-hero-tab-slider" style={sliderStyle}></span>
                {showDropdown && (
                    <div className="dropdown-menu">
                        <a href="https://www.dropbox.com/scl/fi/ynxoir6cfiagv48e44z9p/Resume.pdf?rlkey=wxg6jja4p6kc2g4z86wam0nwj&st=6cwovk3h&dl=1" target="_blank" rel="noopener noreferrer" className="dropdown-item">Download Resume</a>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Navbar;
