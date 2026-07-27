import React, { useState, useRef } from 'react';
import { Play, X } from 'lucide-react';
import ctaImg from '../assets/cta-dive-future.png';
import './DiveIntoFuture.css';

export default function DiveIntoFuture() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Video play error:', err);
      });
    }
  };

  const handleStop = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="dive-into-future-section">
      <div className="container">
        <div className={`cta-video-card ${isPlaying ? 'is-playing' : ''}`}>
          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            className="cta-video-player"
            poster={ctaImg}
            controls={isPlaying}
            playsInline
            onEnded={() => setIsPlaying(false)}
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              type="video/mp4"
            />
            Your browser does not support video playback.
          </video>

          {/* Background Poster Image & Overlay when not playing */}
          {!isPlaying && (
            <>
              <img src={ctaImg} alt="Dive Into The Future" className="cta-bg-img" />
              <div className="cta-card-overlay"></div>

              <div className="cta-card-content">
                <h2 className="cta-title">
                  DIVE INTO THE <br />
                  FUTURE
                </h2>

                <div className="cta-action-side">
                  <button
                    className="cta-play-btn"
                    onClick={handlePlay}
                    aria-label="Play video demo"
                  >
                    <Play size={22} fill="#ffffff" color="#ffffff" className="play-icon" />
                  </button>
                  <p className="cta-desc">
                    Invites you to immerse yourself in the groundbreaking world of FuseSight. Explore the limitless possibilities of futuristic technology and virtual reality.
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Floating Close Video Button when playing */}
          {isPlaying && (
            <button
              className="cta-close-video-btn"
              onClick={handleStop}
              aria-label="Close video"
              title="Close video"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
