import React, { useState } from 'react';
import { Activity, LayoutDashboard, ChevronLeft, ChevronRight } from 'lucide-react';
import './OurServices.css';

export default function OurServices() {
  const [startIndex, setStartIndex] = useState(0);

  const capabilities = [
    {
      id: 1,
      icon: <img src="/icons/Multi-Camera%20Perception%20Engine.svg" alt="Multi-Camera Perception Engine" style={{ width: 40, height: 40 }} />,
      title: 'Multi-Camera Perception Engine',
      description: 'Combines visual information from multiple camera sources into a connected perception grid.',
      link: '#architecture'
    },
    {
      id: 2,
      icon: <img src="/icons/Scene%20Intelligence%20Platform.svg" alt="Scene Intelligence Platform" style={{ width: 40, height: 40 }} />,
      title: 'Scene Intelligence Platform',
      description: 'Understands complex activities, spatial relationships, and operational environments through intelligent perception.',
      link: '#architecture'
    },
    {
      id: 3,
      icon: <img src="/icons/Computer%20Vision%20Analytics%20Engine.svg" alt="Computer Vision Analytics Engine" style={{ width: 40, height: 40 }} />,
      title: 'Computer Vision Analytics Engine',
      description: 'Extracts deep structured metadata, patterns, and actionable insights from raw visual streams.',
      link: '#architecture'
    },
    {
      id: 4,
      icon: <Activity size={22} />,
      title: 'Intelligent Monitoring System',
      description: 'Provides enhanced visibility, proactive visual alert triggers, and spatial tracking across environments.',
      link: '#architecture'
    },
    {
      id: 5,
      icon: <LayoutDashboard size={22} />,
      title: 'Visual Intelligence Dashboard',
      description: 'Centralized control room interface for real-time video telemetry, alerts, and system health metrics.',
      link: 'http://localhost:3001'
    }
  ];

  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(capabilities.length - visibleCount, prev + 1));
  };

  const visibleCapabilities = capabilities.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="capabilities" className="our-services-section">
      <div className="container">
        {/* Header with Title Left & Carousel Controls Right (matching reference screenshot) */}
        <div className="our-services-header">
          <div className="header-title-group">
            <h2 className="our-services-title">OUR SERVICE</h2>
            <p className="our-services-subtitle">
              Explore FuseSight's core multi-camera perception layers engineered for enterprise vision intelligence.
            </p>
          </div>

          <div className="carousel-controls">
            <button
              className="carousel-nav-btn"
              onClick={handlePrev}
              disabled={startIndex === 0}
              aria-label="Previous service"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="carousel-nav-btn"
              onClick={handleNext}
              disabled={startIndex >= capabilities.length - visibleCount}
              aria-label="Next service"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 3 Centered Dark Cards Carousel Grid */}
        <div className="services-cards-grid">
          {visibleCapabilities.map((item) => (
            <div key={item.id} className="dark-service-card">
              <div className="card-icon-circle">
                {item.icon}
              </div>

              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.description}</p>

              <a href={item.link} className="card-learn-link">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
