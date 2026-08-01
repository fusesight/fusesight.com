import React from 'react';
import jamesAvatar from '../assets/James Rizaki.svg';
import samanthaAvatar from '../assets/Samantha Leonardo.svg';
import markAvatar from '../assets/Mark Trevor.svg';
import './VoicesOfFuture.css';

export default function VoicesOfFuture() {
  const testimonials = [
    {
      id: 1,
      quote: "FuseSight unified our 60+ plant cameras into a single smart perception grid. Missed events are down to zero.",
      name: "James Rizaki",
      role: "VP of Plant Operations",
      avatar: jamesAvatar
    },
    {
      id: 2,
      quote: "The multi camera fusion engine detects perimeter anomalies across 4 camera feeds instantly with sub-15ms latency.",
      name: "Samantha Leonardo",
      role: "Chief Security Officer",
      avatar: samanthaAvatar
    },
    {
      id: 3,
      quote: "Deploying FuseSight on dedicated edge processing nodes allowed us to automate visual quality monitoring without cloud delays.",
      name: "Mark Trevor",
      role: "Lead Automation Engineer",
      avatar: markAvatar
    }
  ];

  return (
    <section className="voices-of-future-section">
      {/* Prominent Background Wave Ribbon flowing across section */}
      <svg
        className="wave-bg-accent"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a1a22" />
            <stop offset="45%" stopColor="#323242" />
            <stop offset="100%" stopColor="#1a1a22" />
          </linearGradient>
        </defs>
        <path
          d="M -60 480 C 360 570, 720 280, 1500 390"
          stroke="url(#waveGradient)"
          strokeWidth="34"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="container voices-container">
        {/* Left Column: Title & Subtitle Description */}
        <div className="voices-left">
          <h2 className="voices-title">
            VOICES OF <br />
            INTELLIGENCE
          </h2>
          <div className="title-accent-line"></div>

          <p className="voices-desc">
            Discover how security directors, operations leads, and automation engineers leverage FuseSight multi camera perception and intelligent vision to eliminate monitoring blind spots across facilities.
          </p>
        </div>

        {/* Right Column: 3 Stacked Testimonial Cards */}
        <div className="voices-right">
          <div className="stacked-quotes-list">
            {testimonials.map((item) => (
              <div key={item.id} className="voice-quote-card">
                <div className="quote-content-col">
                  <p className="quote-text">"{item.quote}"</p>
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-role">{item.role}</span>
                </div>

                <div className="avatar-circle-col">
                  <img src={item.avatar} alt={item.name} className="voice-avatar" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

