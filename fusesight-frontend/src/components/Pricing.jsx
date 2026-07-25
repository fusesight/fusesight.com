import React, { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';
import './Pricing.css';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">TRANSPARENT PRICING</div>
          <h2 className="section-title">Select Your Power Tier</h2>
          <p className="section-subtitle">
            Choose between our core Super Plan and full-spectrum Master Plan with zero hidden fees.
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

        {/* Two Tier Plans Side by Side: Super Plan ($29) & Master Plan ($99) */}
        <div className="pricing-grid">
          {/* SUPER PLAN CARD */}
          <div className="pricing-card super-plan">
            <div className="card-top">
              <div className="plan-badge">
                <Zap size={16} />
                <span>SUPER PLAN</span>
              </div>
              <h3 className="plan-name">Super</h3>
              <p className="plan-desc">Perfect for scaling teams & emerging AI startups.</p>
              
              <div className="price-wrap">
                <span className="currency">$</span>
                <span className="amount">{isAnnual ? '24' : '29'}</span>
                <span className="period">/ month</span>
              </div>
            </div>

            <div className="card-divider"></div>

            <ul className="plan-features">
              <li><Check size={18} className="check-icon" /> Up to 5 Active AI Projects</li>
              <li><Check size={18} className="check-icon" /> 10 GB High-Speed Storage</li>
              <li><Check size={18} className="check-icon" /> Standard Real-Time Telemetry</li>
              <li><Check size={18} className="check-icon" /> Email & Community Support</li>
              <li><Check size={18} className="check-icon" /> REST API Key Access</li>
              <li><Check size={18} className="check-icon" /> 99.9% Uptime Guarantee</li>
            </ul>

            <a href="http://localhost:3001" className="plan-btn plan-btn-outlined">
              Get Super Tier
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
                <span>MASTER PLAN</span>
              </div>
              <h3 className="plan-name">Master</h3>
              <p className="plan-desc">For enterprise workloads & unrestricted spatial power.</p>

              <div className="price-wrap">
                <span className="currency">$</span>
                <span className="amount">{isAnnual ? '79' : '99'}</span>
                <span className="period">/ month</span>
              </div>
            </div>

            <div className="card-divider dark"></div>

            <ul className="plan-features">
              <li><Check size={18} className="check-icon master" /> <strong>Unlimited</strong> AI & Spatial Projects</li>
              <li><Check size={18} className="check-icon master" /> <strong>100 GB</strong> Dedicated Storage</li>
              <li><Check size={18} className="check-icon master" /> Advanced Predictive Analytics & AI Insights</li>
              <li><Check size={18} className="check-icon master" /> 24/7 Priority SLA Support</li>
              <li><Check size={18} className="check-icon master" /> Full REST & gRPC API + Webhooks</li>
              <li><Check size={18} className="check-icon master" /> Custom Integrations & White-Label Option</li>
              <li><Check size={18} className="check-icon master" /> Team Collaboration (Up to 25 Members)</li>
            </ul>

            <a href="http://localhost:3001" className="plan-btn plan-btn-solid">
              Get Master Tier
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
