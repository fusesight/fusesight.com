import React from 'react';
import { Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">ABOUT FUSESIGHT</div>
          <h2 className="section-title">Engineered for the Next Era of Digital Intelligence</h2>
          <p className="section-subtitle">
            FuseSight integrates spatial visualization, autonomous AI orchestration, and low-latency data pipelines into one seamless platform.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-icon">
              <Cpu size={24} />
            </div>
            <h3>Autonomous AI Orchestration</h3>
            <p>Deploy custom intelligent agents capable of handling complex multi-modal workflows with zero human latency.</p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <Zap size={24} />
            </div>
            <h3>Real-Time Spatial Sync</h3>
            <p>Experience sub-50ms data synchronization across spatial visual interfaces, mobile apps, and enterprise dashboards.</p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <ShieldCheck size={24} />
            </div>
            <h3>Zero-Trust Security</h3>
            <p>Built with military-grade encryption, end-to-end audit logging, and strict compliance controls out of the box.</p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <Layers size={24} />
            </div>
            <h3>Modular Architecture</h3>
            <p>Seamlessly integrate with your existing technology stack using our high-performance GraphQL & REST APIs.</p>
          </div>
        </div>

        {/* Metrics Highlight Banner */}
        <div className="about-metrics-banner">
          <div className="metric-item">
            <span className="metric-num">99.99%</span>
            <span className="metric-desc">System Uptime SLA</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-num">25ms</span>
            <span className="metric-desc">Global API Latency</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-num">120k+</span>
            <span className="metric-desc">Active Agents</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-num">500+</span>
            <span className="metric-desc">Enterprise Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
