import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-modern">
      <div className="cta-content">
        <h2 className="cta-modern-title">Let’s Make Something Amazing Together</h2>
        <p className="cta-modern-subtitle">
          Reach out to collaborate, browse our sound library, or start your journey today.
        </p>
        <div className="cta-modern-buttons">
          <Link to="/contact" className="cta-modern-btn primary">Contact Us</Link>
          <Link to="/projects" className="cta-modern-btn outline">Browse Projects</Link>
          <Link to="/login" className="cta-modern-btn ghost">Sign Up </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
