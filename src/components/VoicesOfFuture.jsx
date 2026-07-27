import React from 'react';
import './VoicesOfFuture.css';

export default function VoicesOfFuture() {
  const testimonials = [
    {
      id: 1,
      quote: "FuseSight completely transformed the way I interact with virtual reality.",
      name: "James Rizaki",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      quote: "Our team has adopted FuseSight's VR collaboration tools.",
      name: "Samantha Leonardo",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      quote: "I've been gaming in VR for years, but FuseSight's technology is unmatched.",
      name: "Mark Trevor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
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
            VOICES OF THE <br />
            FUTURE
          </h2>
          <div className="title-accent-line"></div>

          <p className="voices-desc">
            Here, you'll hear firsthand from users, pioneers, and tech enthusiasts who are shaping the next generation of virtual reality and futuristic technology. Explore their stories and discover how we are transforming the way we interact with the digital world.
          </p>
        </div>

        {/* Right Column: 3 Stacked Testimonial Cards */}
        <div className="voices-right">
          <div className="stacked-quotes-list">
            {testimonials.map((item) => (
              <div key={item.id} className="voice-quote-card">
                <div className="quote-content-col">
                  <p className="quote-text">{item.quote}</p>
                  <h4 className="author-name">{item.name}</h4>
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

