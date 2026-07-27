import React, { useState, useEffect } from 'react';
import { Search, ArrowUpRight, Box } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : 'at-top'}`}>
      <div className="container navbar-container">
        {/* Brand Logo matching FuseSight / visual theme reference */}
        <a href="#home" className="navbar-brand">
          <div className="brand-icon">
            <Box size={22} strokeWidth={2.2} />
          </div>
          <span className="brand-name">FuseSight</span>
        </a>

        {/* Navigation Links */}
        <nav className="navbar-nav">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#capabilities" className="nav-link">Capabilities</a>
          <a href="#architecture" className="nav-link">Architecture</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Search Bar & Action Buttons */}
        <div className="navbar-actions">
          <div className="search-pill">
            <input 
              type="text" 
              placeholder="I am looking for..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn" aria-label="Search">
              <Search size={16} />
            </button>
          </div>

          <a 
            href="http://localhost:3001" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-pill-btn"
          >
            Dashboard
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
