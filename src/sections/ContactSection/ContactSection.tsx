import React from "react";
import "./ContactSection.css";

import linkedinImg from "../../assets/images/linkedin.png";
import mailImg from "../../assets/images/email.png";
import phoneImg from "../../assets/images/phone-call (1).png";
import githubImg from "../../assets/images/github.png";

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section-container">
        <header className="contact-header">
          <h2>Contact</h2>
          <p>Feel free to reach out for collaborations, freelance projects, or a quick chat.</p>
        </header>

        <div className="contact-grid">
          {/* Left: Contact cards */}
          <div className="contact-cards">
            <a
              className="contact-card"
              href="mailto:seymur.uvarov98@gmail.com"
              aria-label="Send me an email"
            >
              <img src={mailImg} alt="" loading="lazy" />
              <div>
                <h3>Email</h3>
                <p>seymur.uvarov98@gmail.com</p>
              </div>
            </a>

            <a className="contact-card" href="tel:+48604715542" aria-label="Call my phone number">
              <img src={phoneImg} alt="" loading="lazy" />
              <div>
                <h3>Phone</h3>
                <p>+48 604 715 542</p>
              </div>
            </a>

            <a
              className="contact-card"
              href="https://www.linkedin.com/in/seymur-uvarov-953932267/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open my LinkedIn profile"
            >
              <img src={linkedinImg} alt="" loading="lazy" />
              <div>
                <h3>LinkedIn</h3>
                <p>/in/seymur-uvarov-953932267</p>
              </div>
            </a>

            <a
              className="contact-card"
              href="https://github.com/princeVegeta2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open my GitHub profile"
            >
              <img src={githubImg} alt="" loading="lazy" />
              <div>
                <h3>GitHub</h3>
                <p>@princeVegeta2</p>
              </div>
            </a>
          </div>

          {/* Right: Formspree form */}
          <div className="contact-form__wrap">
            <form
              className="contact-form"
              action="https://formspree.io/f/movnnygp"
              method="POST"
            >
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Appleseed"
                  required
                  maxLength={80}
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  inputMode="email"
                />
              </div>

              <div className="field">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi Seymur, I’d love to discuss…"
                  rows={5}
                  maxLength={200}
                  required
                />
                <div className="char-hint" aria-hidden="true">Max 200 characters</div>
              </div>
              <input type="hidden" name="_subject" value="Portfolio contact form submission" />

              <button type="submit" className="btn-primary">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
