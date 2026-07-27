import React, { useState } from 'react';
import { 
  Camera, 
  Layers, 
  BrainCircuit, 
  Bell, 
  Activity, 
  ArrowRight, 
  CheckCircle,
  Video,
  Radio,
  Sliders,
  ShieldCheck,
  Server
} from 'lucide-react';
import './ArchitectureWorkflow.css';

export default function ArchitectureWorkflow() {
  const [activeWidget, setActiveWidget] = useState('widget-b');

  const workflowSteps = [
    { id: 1, title: 'Multiple Camera Inputs', icon: <Video size={18} /> },
    { id: 2, title: 'Visual Data Fusion', icon: <Layers size={18} /> },
    { id: 3, title: 'AI Scene Understanding', icon: <BrainCircuit size={18} /> },
    { id: 4, title: 'Event Intelligence', icon: <Bell size={18} /> },
    { id: 5, title: 'Operational Insights', icon: <Activity size={18} /> }
  ];

  return (
    <section id="architecture" className="architecture-section">
      <div className="container">
        {/* Header */}
        <div className="section-header center">
          <div className="section-tag">TECHNICAL ARCHITECTURE</div>
          <h2 className="section-title">End-to-End Visual Perception Flow</h2>
          <p className="section-subtitle">
            How FuseSight combines distributed visual sources into a single unified AI intelligence layer.
          </p>
        </div>

        {/* Visual Flow Pipeline Diagram */}
        <div className="workflow-pipeline">
          {workflowSteps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <div className="pipeline-step-card">
                <div className="step-num-badge">0{step.id}</div>
                <div className="step-icon">{step.icon}</div>
                <span className="step-title">{step.title}</span>
              </div>
              {idx < workflowSteps.length - 1 && (
                <div className="pipeline-connector">
                  <ArrowRight size={20} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Product Widget Inspector (Widget A, Widget B, Widget C) */}
        <div className="widget-inspector-container">
          <div className="inspector-header">
            <h3 className="inspector-title">3 CORE PRODUCT PIPELINE WIDGETS</h3>
            <div className="widget-selector-tabs">
              <button 
                className={`widget-tab-btn ${activeWidget === 'widget-a' ? 'active' : ''}`}
                onClick={() => setActiveWidget('widget-a')}
              >
                Widget A – Input Layer
              </button>
              <button 
                className={`widget-tab-btn ${activeWidget === 'widget-b' ? 'active' : ''}`}
                onClick={() => setActiveWidget('widget-b')}
              >
                Widget B – AI Perception Process
              </button>
              <button 
                className={`widget-tab-btn ${activeWidget === 'widget-c' ? 'active' : ''}`}
                onClick={() => setActiveWidget('widget-c')}
              >
                Widget C – Intelligence Dashboard
              </button>
            </div>
          </div>

          <div className="widget-content-body">
            {activeWidget === 'widget-a' && (
              <div className="widget-panel">
                <div className="widget-panel-left">
                  <span className="panel-badge">INPUT INGESTION</span>
                  <h4 className="panel-heading">Distributed Visual Source Layer</h4>
                  <p className="panel-desc">
                    Connect heterogeneous camera streams, edge RTSP nodes, smart facility vision feeds, and industrial sensor networks into a low-latency perception grid.
                  </p>
                </div>
                <div className="widget-panel-right">
                  <div className="items-grid">
                    {[
                      { title: 'Camera Networks', icon: <Camera size={16} /> },
                      { title: 'Edge Devices', icon: <Server size={16} /> },
                      { title: 'RTSP/ONVIF Video Streams', icon: <Video size={16} /> },
                      { title: 'Industrial Environments', icon: <Radio size={16} /> },
                      { title: 'Smart Facilities', icon: <ShieldCheck size={16} /> },
                      { title: 'IoT Vision Sensors', icon: <Sliders size={16} /> }
                    ].map((item, i) => (
                      <div key={i} className="input-item-chip">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeWidget === 'widget-b' && (
              <div className="widget-panel">
                <div className="widget-panel-left">
                  <span className="panel-badge">CORE AI WORKFLOW</span>
                  <h4 className="panel-heading">Multi-Camera AI Perception Process</h4>
                  <p className="panel-desc">
                    Processes incoming frames, aligns spatial coordinates across cameras, executes computer vision tracking, and infers context in real time.
                  </p>
                </div>
                <div className="widget-panel-right">
                  <div className="workflow-list">
                    {[
                      '01. Video Ingestion & Decoding Layer',
                      '02. Multi-Camera Spatial Data Fusion Engine',
                      '03. Deep Computer Vision Analysis',
                      '04. AI Scene Understanding System',
                      '05. Event Detection Framework',
                      '06. Intelligence Generation & Analytics Layer'
                    ].map((stepText, i) => (
                      <div key={i} className="workflow-item-row">
                        <CheckCircle size={16} className="item-icon" />
                        <span>{stepText}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeWidget === 'widget-c' && (
              <div className="widget-panel">
                <div className="widget-panel-left">
                  <span className="panel-badge">COMMAND CENTER</span>
                  <h4 className="panel-heading">Visual Intelligence Dashboard</h4>
                  <p className="panel-desc">
                    Centralized management interface offering live multi-feed surveillance, threat/event telemetry, automated visual alerts, and health metrics.
                  </p>
                </div>
                <div className="widget-panel-right">
                  <div className="items-grid">
                    {[
                      { title: 'Active Camera Feeds', desc: '16 Live Ultra-HD Streams' },
                      { title: 'Scene Understanding Metrics', desc: 'Spatial Density & Flow' },
                      { title: 'Detected Objects & Tracks', desc: 'Bounding Boxes & Class IDs' },
                      { title: 'Activity Analysis', desc: 'Real-Time Anomaly Scoring' },
                      { title: 'Visual Alert Triggers', desc: 'Sub-50ms Event Notifications' },
                      { title: 'System Health', desc: '99.9% Pipeline Uptime' }
                    ].map((item, i) => (
                      <div key={i} className="dash-metric-card">
                        <span className="dash-metric-title">{item.title}</span>
                        <span className="dash-metric-desc">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
