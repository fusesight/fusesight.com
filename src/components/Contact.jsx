import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: 'Master Plan ($99/mo)',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', plan: 'Master Plan ($99/mo)', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card-grid">
          {/* Contact Details Left Column */}
          <div className="contact-info-col">
            <div className="section-tag inverse">GET IN TOUCH</div>
            <h2 className="contact-title">Ready to Initialize Multi-Camera AI Perception?</h2>
            <p className="contact-desc">
              Speak directly with our visual intelligence engineering team. We typically respond within 2 business hours.
            </p>

            <div className="contact-methods">
              <div className="method-item">
                <div className="method-icon"><Mail size={20} /></div>
                <div>
                  <span className="method-label">Direct Line</span>
                  <p className="method-value">contact@fusesight.com</p>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon"><Phone size={20} /></div>
                <div>
                  <span className="method-label">Enterprise Desk</span>
                  <p className="method-value">+1 (800) 890-FUSE</p>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon"><MapPin size={20} /></div>
                <div>
                  <span className="method-label">Headquarters</span>
                  <p className="method-value">700 Vision Way, Silicon Valley, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Right Column */}
          <div className="contact-form-col">
            {submitted ? (
              <div className="success-banner">
                <CheckCircle size={48} className="success-icon" />
                <h3>Transmission Received!</h3>
                <p>Thank you, {formData.name || 'partner'}. Our team will contact you shortly regarding the {formData.plan}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="plan">Interested Plan / Integration</label>
                  <select 
                    id="plan"
                    value={formData.plan}
                    onChange={(e) => setFormData({...formData, plan: e.target.value})}
                  >
                    <option value="Standard Edge Plan ($29/mo)">Standard Edge Plan ($29/mo)</option>
                    <option value="Master Enterprise Plan ($99/mo)">Master Enterprise Plan ($99/mo) — Recommended</option>
                    <option value="Custom AI Vision Solution">Custom AI Vision Solution</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Scope / Requirements</label>
                  <textarea 
                    id="message"
                    rows="4"
                    required
                    placeholder="Tell us about your team size, expected throughput, or custom integration needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
