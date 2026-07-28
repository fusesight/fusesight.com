import React from 'react';
import { Sliders, Play, Box, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
import heroModelImg from '../assets/hero-model.png';
import './Hero.css';

const PinterestIcon = ({ size = 16, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.406.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.024 0 1.518.769 1.518 1.688 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.25 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.401.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background Geometric Light Grey Band matching Image 1 */}
      <div className="hero-bg-ribbon"></div>

      <div className="container hero-container">
        {/* Left Column: Text & Content */}
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="badge-number">01</span>
            <span className="badge-label">MULTI-CAMERA PERCEPTION PLATFORM</span>
          </div>

          <h1 className="hero-title">
            UNIFIED VISUAL
            <br />
            INTELLIGENCE
          </h1>

          <p className="hero-tagline-quote">
            "Unified Visual Intelligence Across Every Perspective."
          </p>

          <div className="hero-cta-group">
            <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
              Launch Dashboard
            </a>
            <a href="#architecture" className="hero-btn-secondary">
              Explore Architecture
            </a>
          </div>

          {/* Social Proof & Description Row */}
          <div className="hero-footer-row">
            <div className="trusted-box">
              <span className="trusted-label">Enterprise Vision Deployments</span>
              <div className="trusted-avatars-wrap">
                <div className="avatar-stack">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Client 1" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Client 2" />
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" alt="Client 3" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Client 4" />
                </div>
                <span className="trusted-count">500+ Feeds</span>
              </div>
            </div>

            <div className="icon-badge-btn">
              <Sliders size={18} />
            </div>

            <p className="hero-description">
              FuseSight transforms multiple camera streams into a connected intelligence layer for operational awareness, activity tracking, and visual event detection.
            </p>
          </div>
        </div>

        {/* Right Column: Hero Model & Geometric Stat */}
        <div className="hero-visual">
          {/* Stat directly placed on the grey ribbon shape matching Image 1 */}
          <div className="ribbon-stat-item">
            <span className="stat-num">99.4%</span>
            <span className="stat-lbl">Perception Accuracy</span>
          </div>

          <div className="hero-image-wrapper">
            <img src={heroModelImg} alt="FuseSight Spatial Perception Platform" className="hero-main-img" />
          </div>
        </div>
      </div>

      {/* Dark Angular Bottom Section matching Image 1 Cutout */}
      <div className="hero-dark-section">
        <div className="container dark-section-container">
          <div className="dark-left-accent-line"></div>
          <div className="hero-social-links">
            <a href="#facebook" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#twitter" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#youtube" aria-label="YouTube"><Youtube size={18} /></a>
            <a href="#pinterest" aria-label="Pinterest"><PinterestIcon size={18} /></a>
            <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
