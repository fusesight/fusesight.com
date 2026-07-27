import React, { useState } from 'react';
import possibilitiesImg from '../assets/possibilities-model.png';
import './LimitlessPossibilities.css';

export default function LimitlessPossibilities() {
  const [activeTab, setActiveTab] = useState('Industrial');

  const articles = {
    Industrial: {
      title: 'Industrial Facilities & Manufacturing',
      description: 'Multi-camera vision streams monitor high-speed assembly lines, machine safety zones, and hazardous areas to prevent costly operational downtime.',
      author: 'Industrial Safety Standard',
      date: 'Enterprise Grade'
    },
    'Smart Space': {
      title: 'Smart Buildings & Security Operations',
      description: 'Synchronized multi-angle perception provides real-time occupancy heatmaps, perimeter tracking, and automated visual alert notifications.',
      author: 'SOC Infrastructure',
      date: 'Real-Time SLA'
    },
    Logistics: {
      title: 'Logistics Environments & Research Hubs',
      description: 'Track autonomous mobile robots (AMRs), warehouse inventory flows, and loading dock activities across complex multi-floor visual spaces.',
      author: 'Supply Chain Vision',
      date: 'Edge Ready'
    }
  };

  const currentArticle = articles[activeTab];

  return (
    <section className="limitless-possibilities-section">
      <div className="container possibilities-container">
        {/* Main Title at Top */}
        <h2 className="possibilities-heading">
          TARGET ENTERPRISE VERTICALS <br />
          WITH FUSESIGHT
        </h2>

        {/* 3-Column Layout: Tabs, Center Image Card, Right Content */}
        <div className="possibilities-grid">
          {/* Column 1: Vertical Navigation Tabs */}
          <div className="possibilities-tabs">
            {['Industrial', 'Smart Space', 'Logistics'].map((tab) => (
              <button
                key={tab}
                className={`v-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Column 2: Center Image Card */}
          <div className="possibilities-image-card">
            <img
              src={possibilitiesImg}
              alt="FuseSight Perception Visor Model"
              className="possibilities-img"
            />
          </div>

          {/* Column 3: Right Text Content & Metadata */}
          <div className="possibilities-content">
            <div className="content-body">
              <h3 className="article-title">{currentArticle.title}</h3>
              <p className="article-desc">{currentArticle.description}</p>
              <a href="#contact" className="learn-more-btn">
                Deploy Solutions
              </a>
            </div>

            <div className="article-meta-footer">
              <span className="article-date">{currentArticle.date}</span>
              <span className="article-author">{currentArticle.author}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

