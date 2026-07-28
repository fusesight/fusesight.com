import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DigitalFrontier from './components/DigitalFrontier';
import OurServices from './components/OurServices';
import ArchitectureWorkflow from './components/ArchitectureWorkflow';
import LimitlessPossibilities from './components/LimitlessPossibilities';
import VoicesOfFuture from './components/VoicesOfFuture';
import DiveIntoFuture from './components/DiveIntoFuture';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

export default function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState('terms');

  const handleOpenLegal = (tab = 'terms') => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  return (
    <div className="app-main">
      <Navbar onOpenLegal={handleOpenLegal} />
      <main>
        <Hero />
        <DigitalFrontier />
        <OurServices />
        <ArchitectureWorkflow />
        <LimitlessPossibilities />
        <VoicesOfFuture />
        <DiveIntoFuture />
        <Pricing />
        <Contact />
      </main>
      <Footer onOpenLegal={handleOpenLegal} />

      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        initialTab={legalTab}
      />
    </div>
  );
}
