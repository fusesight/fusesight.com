import React, { useState, useEffect } from 'react';
import { Search, ArrowUpRight, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.svg';
import './Navbar.css';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : 'at-top'} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo matching FuseSight / visual theme reference */}
        <a href="#home" className="navbar-brand" onClick={closeMobileMenu}>
          <img src={logoImg} alt="FuseSight Logo" className="brand-logo-img" style={{ height: '46px' }} />
        </a>

        {/* Navigation Links */}
        <nav className={`navbar-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link active" onClick={closeMobileMenu}>Home</a>
          <a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a>
          <a href="#capabilities" className="nav-link" onClick={closeMobileMenu}>Service</a>
          <a href="#architecture" className="nav-link" onClick={closeMobileMenu}>Architecture</a>
          <a href="#pricing" className="nav-link" onClick={closeMobileMenu}>Pricing</a>
          <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>

          <div className="mobile-search-pill">
            <input
              type="text"
              placeholder="Search capabilities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn" aria-label="Search">
              <Search size={16} />
            </button>
          </div>
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
            onClick={closeMobileMenu}
          >
            Dashboard
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
