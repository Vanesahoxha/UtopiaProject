import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-logo">Utopia Studio</h3>
          <p className="footer-text">
            © {new Date().getFullYear()} Utopia Studio. All rights reserved.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/sounds">Sounds</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Sign In</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: soundutopiaa@gmail.com</p>
          <p>Phone: +383 (0) 44 906 261</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
