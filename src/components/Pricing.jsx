import React, { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';
import './Pricing.css';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">SAAS & LICENSING PLANS</div>
          <h2 className="section-title">Select Your Visual Intelligence Tier</h2>
          <p className="section-subtitle">
            Flexible multi-camera perception packages engineered for facilities, security teams, and enterprise operations.
          </p>

          {/* Billing Switch Toggle */}
          <div className="billing-toggle-container">
            <span className={!isAnnual ? 'active' : ''}>Monthly</span>
            <button
              className={`toggle-switch ${isAnnual ? 'on' : ''}`}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle annual billing"
            >
              <div className="toggle-handle"></div>
            </button>
            <span className={isAnnual ? 'active' : ''}>
              Annual <span className="discount-pill">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Two Tier Plans Side by Side: Standard Edge Plan ($29) & Master Enterprise Plan ($99) */}
        <div className="pricing-grid">
          {/* STANDARD EDGE PLAN CARD */}
          <div className="pricing-card super-plan">
            <div className="card-top">
              <div className="plan-badge">
                <Zap size={16} />
                <span>STANDARD EDGE PLAN</span>
              </div>
              <h3 className="plan-name">Standard Edge</h3>
              <p className="plan-desc">Ideal for single facilities & localized camera networks.</p>

              <div className="price-wrap">
                <span className="currency">$</span>
                <span className="amount">{isAnnual ? '24' : '29'}</span>
                <span className="period">/ month</span>
              </div>
            </div>

            <div className="card-divider"></div>

            <ul className="plan-features">
              <li><Check size={18} className="check-icon" /> Up to 8 Active Camera Feeds</li>
              <li><Check size={18} className="check-icon" /> Multi-Camera Perception Engine</li>
              <li><Check size={18} className="check-icon" /> Real-Time Object & Event Detection</li>
              <li><Check size={18} className="check-icon" /> Standard Visual Analytics Dashboard</li>
              <li><Check size={18} className="check-icon" /> REST API Key & RTSP Stream Access</li>
              <li><Check size={18} className="check-icon" /> Email & Community Support</li>
            </ul>

            <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer" className="plan-btn plan-btn-outlined">
              Deploy Standard Edge
            </a>
          </div>

          {/* MASTER PLAN CARD (HIGHLIGHTED) */}
          <div className="pricing-card master-plan highlighted">
            <div className="popular-ribbon">
              <Sparkles size={14} />
              <span>MOST POPULAR</span>
            </div>

            <div className="card-top">
              <div className="plan-badge master">
                <Sparkles size={16} />
                <span>MASTER ENTERPRISE PLAN</span>
              </div>
              <h3 className="plan-name">Master Enterprise</h3>
              <p className="plan-desc">For large-scale multi-facility vision grids & Jetson deployments.</p>

              <div className="price-wrap">
                <span className="currency">$</span>
                <span className="amount">{isAnnual ? '79' : '99'}</span>
                <span className="period">/ month</span>
              </div>
            </div>

            <div className="card-divider dark"></div>

            <ul className="plan-features">
              <li><Check size={18} className="check-icon master" /> <strong>Unlimited</strong> Camera Streams & Feeds</li>
              <li><Check size={18} className="check-icon master" /> <strong>Full Smart Scene Intelligence Platform</strong> Platform</li>
              <li><Check size={18} className="check-icon master" /> Dedicated Edge Hardware Support</li>
              <li><Check size={18} className="check-icon master" /> 24/7 Priority SLA & On-Site Assistance</li>
              <li><Check size={18} className="check-icon master" /> Full REST, gRPC API & Webhook Triggers</li>
              <li><Check size={18} className="check-icon master" /> Custom Smart Model Training & White Label Option</li>
              <li><Check size={18} className="check-icon master" /> Command Center Dashboard Access</li>
            </ul>

            <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer" className="plan-btn plan-btn-solid">
              Get Master Enterprise
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
