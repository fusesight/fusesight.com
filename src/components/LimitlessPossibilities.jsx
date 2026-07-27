import React, { useState } from 'react';
import possibilitiesImg from '../assets/possibilities-model.png';
import './LimitlessPossibilities.css';

export default function LimitlessPossibilities() {
  const [activeTab, setActiveTab] = useState('Innovation');

  const articles = {
    Innovation: {
      title: 'How VR is Transforming Our Digital World',
      description: 'Virtual Reality (VR) is no longer a concept of the future—it\'s a reality reshaping how we interact, work, and entertain ourselves.',
      author: 'Henry Leonardo',
      date: '08 February 2025'
    },
    Technology: {
      title: 'Sub-50ms Real-time Spatial Synchronization',
      description: 'An architectural deep dive into low-latency WebSockets, gRPC, and GPU spatial telemetry for real-time multiplayer worlds.',
      author: 'Elena Rostova',
      date: '14 February 2025'
    },
    Experience: {
      title: 'Next-Gen Immersive Spatial Intelligence',
      description: 'Explore how spatial multi-camera perception elevates user experiences across enterprise and visual simulation environments.',
      author: 'Marcus Vance',
      date: '20 February 2025'
    }
  };

  const currentArticle = articles[activeTab];

  return (
    <section className="limitless-possibilities-section">
      <div className="container possibilities-container">
        {/* Main Title at Top */}
        <h2 className="possibilities-heading">
          LIMITLESS POSSIBILITIES <br />
          WITH FUSESIGHT
        </h2>

        {/* 3-Column Layout: Tabs, Center Image Card, Right Content */}
        <div className="possibilities-grid">
          {/* Column 1: Vertical Navigation Tabs */}
          <div className="possibilities-tabs">
            {['Innovation', 'Technology', 'Experience'].map((tab) => (
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
              alt="VR Visor Model"
              className="possibilities-img"
            />
          </div>

          {/* Column 3: Right Text Content & Metadata */}
          <div className="possibilities-content">
            <div className="content-body">
              <h3 className="article-title">{currentArticle.title}</h3>
              <p className="article-desc">{currentArticle.description}</p>
              <a href="#learn-more" className="learn-more-btn">
                Learn More
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

