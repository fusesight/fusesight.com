import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import possibilitiesImg from '../assets/possibilities-model.png';
import './LimitlessPossibilities.css';

export default function LimitlessPossibilities() {
  const [activeTab, setActiveTab] = useState('Innovation');

  const articles = {
    Innovation: {
      title: 'How VR is Transforming Our Digital World',
      description: 'Discover how modern spatial headsets and AI avatars are reshaping communication, remote enterprise work, and spatial UI interactions.',
      author: 'Alex Rivers',
      date: '18th Jan 2026'
    },
    Technology: {
      title: 'Sub-50ms Real-time Spatial Synchronization',
      description: 'An architectural deep dive into low-latency WebSockets, gRPC, and GPU spatial telemetry for real-time multiplayer worlds.',
      author: 'Elena Rostova',
      date: '14th Jan 2026'
    },
    'Contact Us': {
      title: 'Custom Spatial Intelligence for Enterprise',
      description: 'Learn how FuseSight custom deploys autonomous agent clusters and zero-trust security for Fortune 500 infrastructure.',
      author: 'Marcus Vance',
      date: '10th Jan 2026'
    }
  };

  const currentArticle = articles[activeTab];

  return (
    <section className="limitless-possibilities-section">
      <div className="container possibilities-container">
        {/* Left Column: Title & Vertical Navigation Tabs */}
        <div className="possibilities-left">
          <h2 className="possibilities-title">
            LIMITLESS POSSIBILITIES <br />
            WITH FUSESIGHT
          </h2>

          <div className="vertical-tabs-list">
            {['Innovation', 'Technology', 'Contact Us'].map((tab) => (
              <button
                key={tab}
                className={`v-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Featured Article Card with VR Visor Image */}
        <div className="possibilities-right">
          <div className="article-card">
            <div className="article-image-box">
              <img src={possibilitiesImg} alt="VR Visor Model" className="article-img" />
            </div>

            <div className="article-content">
              <h3 className="article-title">{currentArticle.title}</h3>
              <p className="article-desc">{currentArticle.description}</p>

              <div className="article-footer">
                <span className="author-name">{currentArticle.author}</span>
                <span className="article-date">{currentArticle.date}</span>
                <a href="#contact" className="read-article-link">
                  Read Article <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
