import React from 'react';
import './VoicesOfFuture.css';

export default function VoicesOfFuture() {
  const testimonials = [
    {
      id: 1,
      quote: "FuseSight has completely revolutionized how our team visualizes spatial telemetric data. Master tier AI agent orchestration saved us hundreds of engineering hours.",
      name: "Janette Hayes",
      role: "VP of Product",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&q=80"
    },
    {
      id: 2,
      quote: "The low latency and sub-50ms sync between our spatial VR headsets and executive dashboards is unprecedented. Super tier got us started, Master tier scaled us globally.",
      name: "Samantha Vance",
      role: "Chief Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&q=80"
    },
    {
      id: 3,
      quote: "Minimal, ultra-clean UI paired with brutal processing speed. FuseSight is the defining spatial intelligence OS of our era.",
      name: "Ethan Thorne",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=140&q=80"
    }
  ];

  return (
    <section className="voices-of-future-section">
      {/* Background SVG Wave Accent matching Section 5 in Image */}
      <svg className="wave-bg-accent" viewBox="0 0 1440 200" fill="none">
        <path d="M0 100 C 360 20, 720 180, 1440 80" stroke="#1f1f28" strokeWidth="2" fill="none" />
      </svg>

      <div className="container voices-container">
        {/* Left Column: Title & Subtitle Description */}
        <div className="voices-left">
          <h2 className="voices-title">
            VOICES OF THE <br />
            FUTURE
          </h2>
          <div className="title-accent-line"></div>

          <p className="voices-desc">
            Hear directly from industry leaders, spatial architects, and AI pioneers who are transforming their enterprise workflows using FuseSight digital universe solutions.
          </p>
        </div>

        {/* Right Column: 3 Stacked Cards with Quote on Left, Avatar Circle on Right */}
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
