import React, { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import helmetImg from '../assets/about-helmet-model.svg';
import './DigitalFrontier.css';

export default function DigitalFrontier() {
  const [activeTab, setActiveTab] = useState('Mission');

  const tabContents = {
    Mission: "FuseSight is designed to transform multiple visual inputs into a unified intelligence layer for enterprise operations, enabling organizations to process large-scale visual data and understand activities across multiple viewpoints.",
    "The Problem": "Traditional monitoring systems operate in isolated silos requiring constant human attention. Complex visual environments are difficult to interpret manually, and critical events are easily missed across uncoordinated feeds.",
    "The Solution": "FuseSight delivers a connected multi-camera perception system that automatically ingests visual streams, fuses perspective data with AI vision, and generates actionable, real-time scene intelligence."
  };

  return (
    <section id="about" className="digital-frontier-section">
      <div className="container frontier-container">
        {/* Left Column: Dark Glossy Spatial Vision Model */}
        <div className="frontier-visual">
          <div className="helmet-image-wrapper">
            <img src={helmetImg} alt="FuseSight Multi-Camera Perception Model" className="helmet-img" />
          </div>
        </div>

        {/* Right Column: Text, Tabs & Actions */}
        <div className="frontier-content">
          <div className="section-tag">PLATFORM OVERVIEW</div>
          
          <h2 className="frontier-title">
            MULTI-CAMERA <br />
            SCENE INTELLIGENCE
          </h2>

          {/* Interactive Tabs: Mission / The Problem / The Solution */}
          <div className="frontier-tabs">
            {['Mission', 'The Problem', 'The Solution'].map((tab) => (
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
            <a href="#capabilities" className="frontier-btn-primary">
              Platform Capabilities
            </a>
            <a href="#architecture" className="frontier-btn-secondary">
              <div className="play-icon-circle">
                <Play size={14} fill="#ffffff" />
              </div>
              <span>Architecture Demo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
