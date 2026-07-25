import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "FuseSight has completely revolutionized how our team visualizes spatial telemetric data. The Master tier AI agent orchestration saved us hundreds of engineering hours.",
      author: "Elena Rostova",
      role: "VP of Product, Synthetic Reality Labs",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80"
    },
    {
      id: 2,
      quote: "The low latency and sub-50ms sync between our spatial VR headsets and executive dashboards is unprecedented. Super tier got us started, Master tier scaled us globally.",
      author: "Marcus Vance",
      role: "Chief Architect, Omnispatial Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
    },
    {
      id: 3,
      quote: "Minimal, ultra-clean UI paired with brutal processing speed. FuseSight is the defining spatial intelligence OS of our era.",
      author: "Dr. Aris Thorne",
      role: "Founder, Quantum Mind AI",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-card">
          <Quote size={48} className="quote-icon" />
          
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#000" stroke="none" />
            ))}
          </div>

          <p className="testimonial-text">
            "{reviews[activeIndex].quote}"
          </p>

          <div className="testimonial-author-row">
            <img src={reviews[activeIndex].avatar} alt={reviews[activeIndex].author} className="author-avatar" />
            <div className="author-info">
              <h4 className="author-name">{reviews[activeIndex].author}</h4>
              <p className="author-role">{reviews[activeIndex].role}</p>
            </div>
          </div>

          <div className="testimonial-controls">
            <button onClick={prevReview} aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <span className="slide-counter">{activeIndex + 1} / {reviews.length}</span>
            <button onClick={nextReview} aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
