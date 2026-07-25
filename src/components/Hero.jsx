import React from 'react';
import { Sliders, Play, Box } from 'lucide-react';
import heroModelImg from '../assets/hero-model.png';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background Geometric Light Grey Band matching Image 1 */}
      <div className="hero-bg-ribbon"></div>

      <div className="container hero-container">
        {/* Left Column: Text & Content */}
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="badge-number">05</span>
            <span className="badge-label">FUTURISTIC</span>
          </div>

          <h1 className="hero-title">
            <span className="title-digital-wrap">
              NEW DIGITAL
              {/* Cursive orbital loop flourish matching reference image */}
              <svg className="orbital-loop-svg" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M10 65 C 80 10, 240 -10, 310 35 C 280 60, 160 70, 80 45" 
                  stroke="#111111" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
            <br />
            UNIVERSE
          </h1>

          <div className="hero-cta-group">
            <a href="#pricing" className="hero-btn-primary">
              Get Started
            </a>
            <a href="#contact" className="hero-btn-secondary">
              Contact Us
            </a>
          </div>

          {/* Social Proof & Description Row */}
          <div className="hero-footer-row">
            <div className="trusted-box">
              <span className="trusted-label">Trusted by Clients</span>
              <div className="trusted-avatars-wrap">
                <div className="avatar-stack">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Client 1" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Client 2" />
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" alt="Client 3" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Client 4" />
                </div>
                <span className="trusted-count">20+</span>
              </div>
            </div>

            <div className="icon-badge-btn">
              <Sliders size={18} />
            </div>

            <p className="hero-description">
              In this futuristic realm, users can explore hyper-realistic virtual environments, interact with AI-driven avatars.
            </p>
          </div>
        </div>

        {/* Right Column: Hero Model & Geometric Stat */}
        <div className="hero-visual">
          {/* Stat directly placed on the grey ribbon shape matching Image 1 */}
          <div className="ribbon-stat-item">
            <span className="stat-num">47.2%</span>
            <span className="stat-lbl">Reality</span>
          </div>

          <div className="hero-image-wrapper">
            <img src={heroModelImg} alt="FuseSight Spatial Reality Vision" className="hero-main-img" />
          </div>
        </div>
      </div>

      {/* Dark Angular Bottom Section matching Image 1 Cutout */}
      <div className="hero-dark-section">
        <div className="container dark-section-container">
          <div className="dark-left-accent-line"></div>
          <div className="brand-partners">
            <div className="partner-logo"><Box size={18} /> <span>logoipsum</span></div>
            <div className="partner-logo"><Sliders size={18} /> <span>logoipsum</span></div>
            <div className="partner-logo"><Box size={18} /> <span>logoipsum</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
