import React from 'react';
import './Product.css';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <div className="product-coming-soon">
      <div className="coming-soon-container">
        <div className="badge">
          <Sparkles size={14} className="sparkle-icon" />
          <span>In Development</span>
        </div>
        
        <h1 className="coming-soon-title">
          Something <span className="gradient-text">Extraordinary</span><br />
          Is Coming Soon
        </h1>
        
        <p className="coming-soon-subtitle">
          We're building the next generation of our platform. 
          Stay tuned for a revolutionary experience that will change how you work.
        </p>

        <div className="coming-soon-actions">
          <Link to="/" className="back-home-btn">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
      
      {/* Background ambient effects */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
    </div>
  );
}
