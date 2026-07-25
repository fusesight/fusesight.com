import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Box, Cpu, Gamepad2, ArrowUpRight } from 'lucide-react';
import './OurServices.css';

export default function OurServices() {
  const services = [
    {
      id: 1,
      icon: <Box size={24} />,
      title: 'Force Development',
      description: 'Building custom spatial 3D environments, physics engines, and telemetric data processing for next-gen hardware.',
      link: '#contact'
    },
    {
      id: 2,
      icon: <Cpu size={24} />,
      title: 'Digital Assistance',
      description: 'Autonomous LLM-powered AI agent creation, real-time spatial memory, and zero-latency prompt orchestration.',
      link: '#contact'
    },
    {
      id: 3,
      icon: <Gamepad2 size={24} />,
      title: 'Gaming Solutions',
      description: 'High-performance WebGL, spatial rendering pipelines, and multiplayer real-time state synchronization.',
      link: '#contact'
    }
  ];

  return (
    <section id="services" className="our-services-section">
      <div className="container">
        {/* Section Header with Left Title & Right Carousel Controls */}
        <div className="our-services-header">
          <h2 className="our-services-title">OUR SERVICE</h2>

          <div className="carousel-controls">
            <button className="carousel-nav-btn" aria-label="Previous service">
              <ChevronLeft size={18} />
            </button>
            <button className="carousel-nav-btn" aria-label="Next service">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 3 Dark Cards Grid */}
        <div className="services-cards-grid">
          {services.map((item) => (
            <div key={item.id} className="dark-service-card">
              <div className="card-icon-wrapper">
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
