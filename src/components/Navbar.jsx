import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Search, ArrowUpRight, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.svg';
import './Navbar.css';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMobileMenu();
    
    if (targetId === '') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (location.pathname !== '/') {
      navigate('/#' + targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();
    const sections = [
      { id: 'home', keywords: ['home', 'start'] },
      { id: 'about', keywords: ['about', 'us', 'who', 'company', 'frontier'] },
      { id: 'capabilities', keywords: ['service', 'capability', 'offer', 'what we do', 'feature'] },
      { id: 'architecture', keywords: ['architecture', 'tech', 'stack', 'system', 'build', 'workflow'] },
      { id: 'pricing', keywords: ['price', 'pricing', 'cost', 'plan', 'buy'] },
      { id: 'contact', keywords: ['contact', 'touch', 'message', 'support', 'help'] },
      { id: 'team', keywords: ['team', 'people', 'future', 'dive'] }
    ];

    let targetId = null;
    for (const section of sections) {
      if (section.keywords.some(kw => query.includes(kw))) {
        targetId = section.id;
        break;
      }
    }

    if (targetId) {
      if (location.pathname !== '/') {
        navigate('/#' + targetId);
        setSearchQuery('');
        closeMobileMenu();
        return;
      }
      
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setSearchQuery('');
        closeMobileMenu();
        return;
      }
    }
    
    if (window.find) {
      const found = window.find(searchQuery);
      if (!found) {
        alert(`Could not find "${searchQuery}" on the page.`);
      } else {
        closeMobileMenu();
      }
    } else {
      alert(`No exact section found for "${searchQuery}".`);
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : 'at-top'} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="container navbar-container">
        <a href="/" className="navbar-brand" onClick={(e) => handleNavClick(e, '')}>
          <img src={logoImg} alt="FuseSight Logo" className="brand-logo-img" style={{ height: '46px' }} />
        </a>

        <nav className={`navbar-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="/#home" className={`nav-link ${location.pathname === '/' && location.hash === '' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="/#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="/#capabilities" className="nav-link" onClick={(e) => handleNavClick(e, 'capabilities')}>Service</a>
          <a href="/#architecture" className="nav-link" onClick={(e) => handleNavClick(e, 'architecture')}>Architecture</a>
          <a href="/#pricing" className="nav-link" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
          <a href="/#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          <Link to="/product" className={`nav-link ${location.pathname === '/product' ? 'active' : ''}`} onClick={closeMobileMenu}>Product</Link>

          <form className="mobile-search-pill" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search capabilities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn" aria-label="Search">
              <Search size={16} />
            </button>
          </form>
        </nav>

        <div className="navbar-actions">
          <form className="search-pill" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="I am looking for..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn" aria-label="Search">
              <Search size={16} />
            </button>
          </form>

          <a
            href="http://localhost:3001"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pill-btn"
            onClick={closeMobileMenu}
          >
            FuseSight V1
            <ArrowUpRight size={16} />
          </a>

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
