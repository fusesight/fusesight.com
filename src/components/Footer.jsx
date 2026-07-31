import React, { useState } from 'react';
import { Box, Send, Twitter, Linkedin, Facebook, Youtube, ArrowUp } from 'lucide-react';
import './Footer.css';

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
export default function Footer({ onOpenLegal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/meeywnno', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      } else {
        console.error('Formspree newsletter submission failed');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
    }
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
            <h5 className="col-title">Governance & Legal</h5>
            <button className="footer-legal-btn" onClick={() => onOpenLegal && onOpenLegal('terms')}>
              Terms & Conditions
            </button>
            <button className="footer-legal-btn" onClick={() => onOpenLegal && onOpenLegal('privacy')}>
              Privacy Policy
            </button>
            <a href="#contact">Enterprise Compliance</a>
            <a href="mailto:help@fusesight.com">Legal Support</a>
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
              <a href="#facebook" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#twitter" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#youtube" aria-label="YouTube"><Youtube size={18} /></a>
              <a href="#pinterest" aria-label="Pinterest"><PinterestIcon size={18} /></a>
              <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>



        {/* Sub-Footer Copyright & Legal Links Bar */}
        <div className="footer-copyright-bar">
          <span className="copyright-text">© 2026 FuseSight LLC. All rights reserved.</span>
          <div className="bottom-legal-links">
            <button className="bottom-legal-btn" onClick={() => onOpenLegal && onOpenLegal('terms')}>
              Terms & Conditions
            </button>
            <span className="legal-dot">•</span>
            <button className="bottom-legal-btn" onClick={() => onOpenLegal && onOpenLegal('privacy')}>
              Privacy Policy
            </button>
          </div>
          <button onClick={scrollToTop} className="back-top-btn" aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
