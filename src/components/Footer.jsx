import React from 'react';
import { Box, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand">
              <div className="brand-icon">
                <Box size={22} />
              </div>
              <span>FuseSight</span>
            </a>
            <p className="footer-tagline">
              The Spatial Intelligence Platform. Powering autonomous agent workflows & next-generation spatial computing.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="links-col">
              <h5>Navigation</h5>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="links-col">
              <h5>Pricing Tiers</h5>
              <a href="#pricing">Super Plan ($29/mo)</a>
              <a href="#pricing">Master Plan ($99/mo)</a>
              <a href="#pricing">Enterprise Custom</a>
            </div>

            <div className="links-col">
              <h5>Resources</h5>
              <a href="#about">Documentation</a>
              <a href="#about">API Reference</a>
              <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer">Dashboard</a>
              <a href="#about">System Status</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="copyright">
            © {new Date().getFullYear()} FuseSight Technologies Inc. All rights reserved. Designed to Visual Theme standard.
          </p>

          <div className="social-links">
            <a href="#github" aria-label="Github"><Github size={18} /></a>
            <a href="#twitter" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>

          <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
