import React from 'react';
import ctaImg from '../assets/OurTeem.jpg';
import './DiveIntoFuture.css';

export default function DiveIntoFuture() {
  return (
    <section className="dive-into-future-section" id="team">
      <div className="container">
        <div className="cta-video-card">
          {/* Background Poster Image & Overlay */}
          <img src={ctaImg} alt="Our Team" className="cta-bg-img" />
          <div className="cta-card-overlay"></div>

          <div className="cta-card-content">
            <h2 className="cta-title">
              OUR TEAM
            </h2>

            <div className="cta-action-side">
              <p className="cta-desc">
                Meet the brilliant minds behind FuseSight. We are a group of passionate engineers, designers, and innovators dedicated to building the future of multi-camera perception.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
