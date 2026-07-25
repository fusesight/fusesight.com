import React from 'react';
import { Activity, Bot, Workflow, Lock, ArrowUpRight } from 'lucide-react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      id: '01',
      icon: <Activity size={28} />,
      title: 'Spatial Analytics & Telemetry',
      description: 'Track, visualize, and optimize spatial user interactions with real-time heatmaps, 3D trajectory tracking, and behavioral insights.',
      tag: 'ANALYTICS'
    },
    {
      id: '02',
      icon: <Bot size={28} />,
      title: 'Autonomous Agent Studio',
      description: 'Build, train, and orchestrate custom LLM-powered AI agents directly integrated with your enterprise data layers.',
      tag: 'AI ORCHESTRATION'
    },
    {
      id: '03',
      icon: <Workflow size={28} />,
      title: 'Real-Time Data Streams',
      description: 'Ultra low-latency WebSocket & gRPC data pipelines ensuring instant synchronization across web, mobile, and spatial hardware.',
      tag: 'PIPELINES'
    },
    {
      id: '04',
      icon: <Lock size={28} />,
      title: 'Enterprise Security Suite',
      description: 'Role-based access controls, SOC2 Type II compliance, localized data sovereignty, and hardware-level encryption.',
      tag: 'SECURITY'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header-row">
          <div>
            <div className="section-tag">OUR SERVICES</div>
            <h2 className="section-title">Capabilities Tailored for High-Growth Enterprises</h2>
          </div>
          <p className="services-lead">
            Empower your team with cutting-edge tools built to perform under massive scale and demanding security standards.
          </p>
        </div>

        <div className="services-list">
          {servicesList.map((item) => (
            <div key={item.id} className="service-row-card">
              <span className="service-id">{item.id}</span>
              
              <div className="service-icon-box">
                {item.icon}
              </div>

              <div className="service-content">
                <span className="service-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="service-action">
                <button className="service-arrow-btn" aria-label="Explore service">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
