import React, { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import helmetImg from '../assets/about-helmet-model.png';
import './DigitalFrontier.css';

export default function DigitalFrontier() {
  const [activeTab, setActiveTab] = useState('Mission');

  const tabContents = {
    Mission: "FuseSight is dedicated to pushing the boundaries of spatial computing and autonomous agent technology, delivering hyper-realistic virtual environments for global pioneers.",
    Vision: "To establish a seamless digital universe where spatial visual interfaces, AI intelligence, and real-time telemetric data converge into an effortless human experience.",
    Values: "Built on absolute precision, ultra-low latency SLAs, zero-trust security architecture, and uncompromising visual excellence."
  };

  return (
    <section id="about" className="digital-frontier-section">
      <div className="container frontier-container">
        {/* Left Column: Dark Glossy Spatial Helmet Model */}
        <div className="frontier-visual">
          <div className="helmet-image-wrapper">
            <img src={helmetImg} alt="The Digital Frontier Helmet Model" className="helmet-img" />
          </div>
        </div>

        {/* Right Column: Text, Tabs & Actions */}
        <div className="frontier-content">
          <div className="section-tag">ABOUT US</div>
          
          <h2 className="frontier-title">
            THE DIGITAL <br />
            FRONTIER
          </h2>

          {/* Interactive Tabs: Mission / Vision / Values */}
          <div className="frontier-tabs">
            {['Mission', 'Vision', 'Values'].map((tab) => (
              <button
                key={tab}
                className={`frontier-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <p className="frontier-description">
            {tabContents[activeTab]}
          </p>

          <div className="frontier-actions">
            <a href="#services" className="frontier-btn-primary">
              Read More
            </a>
            <button className="frontier-btn-secondary">
              <div className="play-icon-circle">
                <Play size={14} fill="#ffffff" />
              </div>
              <span>The Trailer</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
