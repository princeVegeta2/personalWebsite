import React from 'react';
import '../../assets/styles/ContactSection.css';

function ContactSection() {

    const formspreeUrl = process.env.REACT_APP_FORMSPREE_API_URL;

    return (
        <section className="contact-section" id="contact-section">
            <div className="contact-title">
                <h2>Contact Me</h2>
                <div className="contact-divider"></div>
            </div>
            <div className="contact-content">
                <div className="contact-form-container">
                    <form action={formspreeUrl} method="POST" className="contact-form">
                        <label>
                            Name:
                            <input type="text" name="name" required />
                        </label>
                        <label>
                            Message:
                            <textarea name="message" required></textarea>
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p><strong>Phone:</strong> +48 604 715 542</p>
                    <p><strong>Email:</strong> seymur.uvarov98@gmail.com</p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/seymur-uvarov-953932267/" target="_blank" rel="noopener noreferrer">Seymur Uvarov</a></p>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
