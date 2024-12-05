import React from 'react';
import '../../assets/styles/FooterSection.css';

function FooterSection() {
    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <ul>
                        <li><a href="#projects-section">Projects</a></li>
                        <li><a href="#api-section">APIs</a></li>
                        <li><a href="https://www.dropbox.com/scl/fi/ynxoir6cfiagv48e44z9p/Resume.pdf?rlkey=wxg6jja4p6kc2g4z86wam0nwj&st=6cwovk3h&dl=1" target="_blank" rel="noopener noreferrer">Resume</a></li>
                        <li><a href="#about-section">About me</a></li>
                        <li><a href="#hero-section">Back to top</a></li>
                    </ul>
                </div>

                <div className="row">
                    Copyright © 2024 All rights reserved
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;
