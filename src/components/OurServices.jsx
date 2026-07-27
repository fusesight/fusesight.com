import React from 'react';
import { Camera, Eye, Cpu, Activity, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import './OurServices.css';

export default function OurServices() {
  const capabilities = [
    {
      id: 1,
      icon: <Camera size={24} />,
      title: 'Multi-Camera Perception Engine',
      description: 'Combines visual information from multiple camera sources into a connected perception grid.',
      features: ['Camera Stream Integration', 'Multi-View Analysis', 'Scene Understanding', 'Visual Data Fusion', 'Real-Time Perception']
    },
    {
      id: 2,
      icon: <Eye size={24} />,
      title: 'Scene Intelligence Platform',
      description: 'Understands complex activities, spatial relationships, and operational environments through AI vision.',
      features: ['Scene Classification', 'Activity Recognition', 'Object Tracking', 'Environmental Analysis', 'Context Awareness']
    },
    {
      id: 3,
      icon: <Cpu size={24} />,
      title: 'Computer Vision Analytics Engine',
      description: 'Extracts deep structured metadata, patterns, and actionable insights from raw visual streams.',
      features: ['Object Detection', 'Pattern Recognition', 'Visual Monitoring', 'Event Identification', 'Image-Based Insights']
    },
    {
      id: 4,
      icon: <Activity size={24} />,
      title: 'Intelligent Monitoring System',
      description: 'Provides enhanced visibility, proactive visual alert triggers, and spatial tracking across environments.',
      features: ['Live Camera Analytics', 'Visual Alerts', 'Activity Tracking', 'Operational Insights', 'Performance Monitoring']
    },
    {
      id: 5,
      icon: <LayoutDashboard size={24} />,
      title: 'Visual Intelligence Dashboard',
      description: 'Centralized control room interface for real-time video telemetry, alerts, and system health metrics.',
      features: ['Camera Status Overview', 'Scene Analytics', 'Detection Events', 'Visual Insights', 'System Metrics']
    }
  ];

  return (
    <section id="capabilities" className="our-services-section">
      <div className="container">
        {/* Section Header */}
        <div className="our-services-header">
          <div>
            <div className="section-tag-light">CORE ENGINES</div>
            <h2 className="our-services-title">PLATFORM CAPABILITIES</h2>
          </div>
          <p className="capabilities-header-desc">
            FuseSight delivers 5 integrated AI perception layers to process visual data from edge streams to command center dashboards.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="services-cards-grid">
          {capabilities.map((item) => (
            <div key={item.id} className="dark-service-card">
              <div className="card-top-row">
                <div className="card-icon-wrapper">
                  {item.icon}
                </div>
                <span className="card-num-badge">0{item.id}</span>
              </div>

              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.description}</p>

              <div className="card-features-list">
                {item.features.map((feat, idx) => (
                  <div key={idx} className="feat-chip">
                    <CheckCircle2 size={13} className="chip-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
