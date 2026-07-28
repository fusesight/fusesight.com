import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Lock, Mail, Phone, MapPin, Globe, ArrowLeft } from 'lucide-react';
import './LegalModal.css';

export default function LegalModal({ isOpen, onClose, initialTab = 'privacy' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="sb-legal-overlay" onClick={onClose}>
      <div className="sb-legal-modal" onClick={(e) => e.stopPropagation()}>
        {/* Fixed Header Bar */}
        <header className="sb-legal-header">
          <div className="sb-header-left">
            <button className="sb-back-btn" onClick={onClose}>
              <ArrowLeft size={16} />
              <span>Back to Site</span>
            </button>
            <div className="sb-header-tabs">
              <button 
                className={`sb-tab-link ${activeTab === 'privacy' ? 'active' : ''}`}
                onClick={() => setActiveTab('privacy')}
              >
                Privacy Policy
              </button>
              <button 
                className={`sb-tab-link ${activeTab === 'terms' ? 'active' : ''}`}
                onClick={() => setActiveTab('terms')}
              >
                Terms and Conditions
              </button>
            </div>
          </div>

          <button className="sb-close-icon-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </header>

        {/* StackBlooms-Style Centered Document Container */}
        <div className="sb-legal-scroll-container">
          <div className="sb-document-wrapper">
            {activeTab === 'privacy' ? (
              <article className="sb-legal-article">
                {/* Document Header */}
                <div className="sb-doc-header">
                  <span className="sb-accent-tag">Privacy Policy</span>
                  <p className="sb-last-updated">Last updated: July 28, 2026</p>
                  
                  <p className="sb-lead-text">
                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                  </p>
                  <p className="sb-lead-text">
                    We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                  </p>
                </div>

                {/* Section: Interpretation and Definitions */}
                <section className="sb-section">
                  <h2 className="sb-section-title">Interpretation and Definitions</h2>
                  
                  <h3 className="sb-subheading">Interpretation</h3>
                  <p>
                    The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>

                  <h3 className="sb-subheading">Definitions</h3>
                  <p>For the purposes of this Privacy Policy:</p>
                  
                  <ul className="sb-def-list">
                    <li>
                      <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
                    </li>
                    <li>
                      <strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                    </li>
                    <li>
                      <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Privacy Policy) refers to FuseSight LLC (Founded by Natalie Chamberlain on January 25, 2023), 650 Market St, San Francisco, CA 94102, USA.
                    </li>
                    <li>
                      <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses.
                    </li>
                    <li>
                      <strong>Country/State</strong> refers to: California, United States.
                    </li>
                    <li>
                      <strong>Device</strong> means any device that can access the Service, such as a computer, a cell phone or a digital tablet.
                    </li>
                    <li>
                      <strong>Personal Data</strong> (or "Personal Information") is any information that relates to an identified or identifiable individual.
                    </li>
                    <li>
                      <strong>Service</strong> refers to the Website.
                    </li>
                    <li>
                      <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, or to assist in analyzing how the Service is used.
                    </li>
                    <li>
                      <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                    </li>
                    <li>
                      <strong>Website</strong> refers to FuseSight, accessible from <a href="https://fusesight.com" target="_blank" rel="noopener noreferrer">https://fusesight.com</a>
                    </li>
                    <li>
                      <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                    </li>
                  </ul>
                </section>

                {/* Section: Collecting and Using Your Personal Information */}
                <section className="sb-section">
                  <h2 className="sb-section-title">Collecting and Using Your Personal Information</h2>
                  
                  <h3 className="sb-subheading">Types of Data Collected</h3>
                  
                  <h4 className="sb-minor-title">Personal Data</h4>
                  <p>
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <ul className="sb-bullet-list">
                    <li>Email address</li>
                    <li>First name and last name</li>
                  </ul>

                  <h4 className="sb-minor-title">Usage Data</h4>
                  <p>Usage Data is collected automatically when using the Service.</p>
                  <p>
                    Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                  </p>

                  <h4 className="sb-minor-title">Tracking Technologies and Cookies</h4>
                  <p>
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
                  </p>
                  <ul className="sb-bullet-list">
                    <li>
                      <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of Our Service.
                    </li>
                    <li>
                      <strong>Web Beacons.</strong> Certain sections of Our Service and Our emails may contain small electronic files known as web beacons that permit the Company, for example, to count users who have visited those pages or opened an email.
                    </li>
                  </ul>
                </section>

                {/* Section: Use of Your Personal Data */}
                <section className="sb-section">
                  <h2 className="sb-section-title">Use of Your Personal Data</h2>
                  <p>The Company may use Personal Data for the following purposes:</p>
                  <ul className="sb-bullet-list">
                    <li><strong>To provide and maintain Our Service</strong>, including to monitor the usage of Our Service.</li>
                    <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
                    <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products or services purchased.</li>
                    <li><strong>To contact You:</strong> by email, telephone calls, SMS, or equivalent electronic communication regarding updates or security notices.</li>
                    <li><strong>To provide You with news and special offers:</strong> general information about goods and services similar to those purchased unless opted out.</li>
                    <li><strong>To manage Your requests:</strong> to attend and manage Your requests to Us.</li>
                  </ul>
                </section>

                {/* Section: Retention of Personal Data */}
                <section className="sb-section">
                  <h2 className="sb-section-title">Retention of Your Personal Data</h2>
                  <p>
                    The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
                  </p>
                  <ul className="sb-bullet-list">
                    <li><strong>Account Information:</strong> Retained for the duration of Your Account relationship plus up to 24 months after account closure.</li>
                    <li><strong>Customer Support Data:</strong> Retained up to 24 months from the date of ticket closure.</li>
                    <li><strong>Website Analytics & Logs:</strong> Retained up to 24 months from the date of collection.</li>
                  </ul>
                </section>

                {/* Section: Contact Us */}
                <section className="sb-section">
                  <h2 className="sb-section-title">Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                  
                  <div className="sb-contact-box">
                    <div className="sb-contact-line">
                      <Mail size={16} />
                      <span>By email: <a href="mailto:help@fusesight.com">help@fusesight.com</a></span>
                    </div>
                    <div className="sb-contact-line">
                      <Globe size={16} />
                      <span>By visiting: <a href="https://fusesight.com/" target="_blank" rel="noopener noreferrer">https://fusesight.com/</a></span>
                    </div>
                    <div className="sb-contact-line">
                      <Phone size={16} />
                      <span>By phone: <a href="tel:+14155550121">+1 (415) 555-0121</a></span>
                    </div>
                    <div className="sb-contact-line">
                      <MapPin size={16} />
                      <span>By mail: FuseSight LLC, 650 Market St, San Francisco, CA 94102, USA</span>
                    </div>
                  </div>
                </section>
              </article>
            ) : (
              <article className="sb-legal-article">
                {/* Document Header */}
                <div className="sb-doc-header">
                  <span className="sb-accent-tag">Terms and Conditions</span>
                  <p className="sb-last-updated">Last updated: July 28, 2026</p>
                  
                  <p className="sb-lead-text">
                    Please read these terms and conditions carefully before using Our Service.
                  </p>
                </div>

                {/* Section: Interpretation and Definitions */}
                <section className="sb-section">
                  <h2 className="sb-section-title">Interpretation and Definitions</h2>
                  
                  <h3 className="sb-subheading">Interpretation</h3>
                  <p>
                    The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>

                  <h3 className="sb-subheading">Definitions</h3>
                  <p>For the purposes of these Terms and Conditions:</p>
                  
                  <ul className="sb-def-list">
                    <li>
                      <strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                    </li>
                    <li>
                      <strong>Country/State</strong> refers to: California, United States.
                    </li>
                    <li>
                      <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in these Terms and Conditions) refers to FuseSight LLC (Founded by Natalie Chamberlain on January 25, 2023), 650 Market St, San Francisco, CA 94102, USA.
                    </li>
                    <li>
                      <strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.
                    </li>
                    <li>
                      <strong>Service</strong> refers to the Website.
                    </li>
                    <li>
                      <strong>Terms and Conditions</strong> (also referred to as "Terms") means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service.
                    </li>
                    <li>
                      <strong>Website</strong> refers to FuseSight, accessible from <a href="https://fusesight.com" target="_blank" rel="noopener noreferrer">https://fusesight.com</a>
                    </li>
                    <li>
                      <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                    </li>
                  </ul>
                </section>

                {/* Section: Acknowledgment */}
                <section className="sb-section">
                  <h2 className="sb-section-title">Acknowledgment</h2>
                  <p>
                    These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                  </p>
                  <p>
                    By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                  </p>
                  <p>
                    You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                  </p>
                </section>

                {/* Section: Limitation of Liability */}
                <section className="sb-section">
                  <h2 className="sb-section-title">Limitation of Liability</h2>
                  <p>
                    Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                  </p>
                </section>

                {/* Section: Governing Law */}
                <section className="sb-section">
                  <h2 className="sb-section-title">Governing Law</h2>
                  <p>
                    The laws of the Country/State (California, United States), excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.
                  </p>
                </section>

                {/* Section: Contact Us */}
                <section className="sb-section">
                  <h2 className="sb-section-title">Contact Us</h2>
                  <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                  
                  <div className="sb-contact-box">
                    <div className="sb-contact-line">
                      <Mail size={16} />
                      <span>By email: <a href="mailto:help@fusesight.com">help@fusesight.com</a></span>
                    </div>
                    <div className="sb-contact-line">
                      <Globe size={16} />
                      <span>By visiting: <a href="https://fusesight.com/" target="_blank" rel="noopener noreferrer">https://fusesight.com/</a></span>
                    </div>
                    <div className="sb-contact-line">
                      <Phone size={16} />
                      <span>By phone: <a href="tel:+14155550121">+1 (415) 555-0121</a></span>
                    </div>
                    <div className="sb-contact-line">
                      <MapPin size={16} />
                      <span>By mail: FuseSight LLC, 650 Market St, San Francisco, CA 94102, USA</span>
                    </div>
                  </div>
                </section>
              </article>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
