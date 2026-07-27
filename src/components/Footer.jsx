import React, { useState } from 'react';
import { Box, Send, Twitter, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="dark-full-footer">
      <div className="container">
        {/* Top Header Logo Row */}
        <div className="footer-top-brand">
          <a href="#home" className="footer-logo-link">
            <Box size={24} />
            <span>FuseSight</span>
          </a>
        </div>

        {/* Links Grid & Newsletter Row */}
        <div className="footer-main-grid">
          <div className="footer-col">
            <h5 className="col-title">Service</h5>
            <a href="#capabilities">Multi-Camera Perception</a>
            <a href="#capabilities">Scene Intelligence</a>
            <a href="#capabilities">Computer Vision Analytics</a>
            <a href="#capabilities">Intelligent Monitoring</a>
          </div>

          <div className="footer-col">
            <h5 className="col-title">Architecture</h5>
            <a href="#architecture">Input Source Layer</a>
            <a href="#architecture">AI Perception Workflow</a>
            <a href="#architecture">Command Center Dashboard</a>
            <a href="#pricing">Licensing & Tiers</a>
          </div>

          <div className="footer-col">
            <h5 className="col-title">Quick Links</h5>
            <a href="#home">Home</a>
            <a href="#about">Platform Overview</a>
            <a href="#capabilities">Service</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-col">
            <h5 className="col-title">Access</h5>
            <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer">Live Dashboard</a>
            <a href="#pricing">Pricing & Licensing</a>
            <a href="#contact">Enterprise Support</a>
          </div>

          {/* Newsletter Box Right Column */}
          <div className="footer-col newsletter-col">
            <h5 className="col-title">FUSESIGHT VISION NEWSLETTER</h5>
            <p className="newsletter-desc">Subscribe to receive multi-camera perception whitepapers and AI vision release notes.</p>

            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                required
                placeholder="Enter your work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>

            {subscribed && <span className="newsletter-success">Subscribed successfully!</span>}

            {/* Social Icons Row */}
            <div className="footer-social-icons">
              <a href="#telegram" aria-label="Telegram"><MessageCircle size={18} /></a>
              <a href="#twitter" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Partner Logos Row matching Image */}
        <div className="footer-bottom-partners">
          <span className="footer-partner">NVIDIA Jetson</span>
          <span className="footer-partner">DeepStream AI</span>
          <span className="footer-partner">OpenCV CUDA</span>
          <span className="footer-partner">RTSP Stream Grid</span>

          <button onClick={scrollToTop} className="back-top-btn" aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
