import React from 'react';
import { Cpu, Terminal, BookOpen, Code2, ShieldAlert, CpuIcon, Layers } from 'lucide-react';
import './TechShowcase.css';

export default function TechShowcase() {
  const sdkItems = [
    {
      title: 'Camera Integration APIs',
      desc: 'High-throughput RTSP/ONVIF ingestion endpoints and WebRTC low-latency streaming wrappers.',
      icon: <Terminal size={22} />,
      tag: 'REST & gRPC'
    },
    {
      title: 'Vision Processing Guides',
      desc: 'Step-by-step developer guides for zero-copy CUDA memory buffers and DeepStream inference.',
      icon: <BookOpen size={22} />,
      tag: 'TensorRT & OpenCV'
    },
    {
      title: 'Edge Deployment Docs',
      desc: 'Containerized Docker & Helm chart configurations for NVIDIA Jetson industrial edge gateways.',
      icon: <Cpu size={22} />,
      tag: 'NVIDIA Jetson'
    },
    {
      title: 'Platform SDK References',
      desc: 'Production-ready Python, C++, and Web SDK references with multi-camera spatial sync.',
      icon: <Code2 size={22} />,
      tag: 'Multi-Language'
    }
  ];

  return (
    <section id="sdk-docs" className="tech-showcase-section">
      <div className="container">
        {/* Section Header */}
        <div className="tech-showcase-header">
          <div className="badge-coming-soon">
            <Terminal size={14} />
            <span>DEVELOPER API & DOCUMENTATION (COMING SOON)</span>
          </div>

          <h2 className="tech-showcase-title">
            Enterprise SDK & Hardware Compatibility Showcase
          </h2>
          <p className="tech-showcase-subtitle">
            Engineered to integrate seamlessly with enterprise vision hardware, DeepStream processing, and industrial computer vision SDKs.
          </p>
        </div>

        {/* Hardware Compatibility Badges */}
        <div className="compatibility-row">
          <span className="compat-label">COMPATIBLE WITH:</span>
          <div className="compat-pills">
            <div className="compat-pill"><Cpu size={16} /> DeepStream AI</div>
            <div className="compat-pill"><Code2 size={16} /> Computer Vision SDKs</div>
            <div className="compat-pill"><Layers size={16} /> NVIDIA Jetson Orin</div>
            <div className="compat-pill"><Terminal size={16} /> OpenCV CUDA</div>
            <div className="compat-pill"><Terminal size={16} /> RTSP / ONVIF Streams</div>
          </div>
        </div>

        {/* Developer Documentation Resource Cards Grid */}
        <div className="sdk-grid">
          {sdkItems.map((item, idx) => (
            <div key={idx} className="sdk-card">
              <div className="sdk-card-top">
                <div className="sdk-icon-box">{item.icon}</div>
                <span className="sdk-tag-pill">{item.tag}</span>
              </div>
              <h3 className="sdk-card-title">{item.title}</h3>
              <p className="sdk-card-desc">{item.desc}</p>
              <div className="sdk-card-footer">
                <span className="doc-link-text">Explore Docs &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
