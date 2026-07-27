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
            <h5 className="col-title">Product</h5>
            <a href="#about">Force Development</a>
            <a href="#about">Digital Assistance</a>
            <a href="#services">Gaming Solutions</a>
          </div>

          <div className="footer-col">
            <h5 className="col-title">Infrastructure</h5>
            <a href="#about">Spatial Grid SLA</a>
            <a href="#about">Zero-Trust Security</a>
            <a href="#pricing">Super Tier ($29)</a>
            <a href="#pricing">Master Tier ($99)</a>
          </div>

          <div className="footer-col">
            <h5 className="col-title">Quick Links</h5>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Blog & News</a>
          </div>

          <div className="footer-col">
            <h5 className="col-title">Access</h5>
            <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer">Dashboard</a>
            <a href="#contact">Documentation</a>
            <a href="#contact">System Status</a>
          </div>

          {/* Newsletter Box Right Column */}
          <div className="footer-col newsletter-col">
            <h5 className="col-title">FLOW INTO FUTURE NEWSLETTER</h5>
            <p className="newsletter-desc">Subscribe to receive monthly spatial computing whitepapers and LLM agent release notes.</p>

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

            {/* Social Icons Row matching image */}
            <div className="footer-social-icons">
              <a href="#telegram" aria-label="Telegram"><MessageCircle size={18} /></a>
              <a href="#twitter" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Partner Logos Row matching Image */}
        <div className="footer-bottom-partners">
          <span className="footer-partner">logoipsum</span>
          <span className="footer-partner">logoipsum</span>
          <span className="footer-partner">logoipsum</span>
          <span className="footer-partner">logoipsum</span>
          
          <button onClick={scrollToTop} className="back-top-btn" aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
