import React from 'react';
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

export default function App() {
  return (
    <div className="app-main">
      <Navbar />
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
      <Footer />
    </div>
  );
}
