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

            <div className="cta-action-wrap">
              <button className="cta-play-btn" aria-label="Watch interactive spatial demo">
                <Play size={20} fill="#000000" />
              </button>
              <div className="cta-play-text">
                <strong>Experience spatial intelligence now</strong>
                <span>Watch the 4K interactive demo video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
