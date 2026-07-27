import React from 'react';
import { Play } from 'lucide-react';
import ctaImg from '../assets/cta-dive-future.png';
import './DiveIntoFuture.css';

export default function DiveIntoFuture() {
  return (
    <section className="dive-into-future-section">
      <div className="container">
        <div className="cta-video-card">
          <img src={ctaImg} alt="Dive Into The Future" className="cta-bg-img" />
          <div className="cta-card-overlay"></div>

          <div className="cta-card-content">
            <h2 className="cta-title">
              DIVE INTO THE <br />
              FUTURE
            </h2>

            <div className="cta-action-side">
              <button className="cta-play-btn" aria-label="Play video demo">
                <Play size={22} fill="#ffffff" color="#ffffff" className="play-icon" />
              </button>
              <p className="cta-desc">
                Invites you to immerse yourself in the groundbreaking world of FuseSight. Explore the limitless possibilities of futuristic technology and virtual reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

