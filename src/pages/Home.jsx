import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import DigitalFrontier from '../components/DigitalFrontier';
import OurServices from '../components/OurServices';
import ArchitectureWorkflow from '../components/ArchitectureWorkflow';
import LimitlessPossibilities from '../components/LimitlessPossibilities';
import VoicesOfFuture from '../components/VoicesOfFuture';
import DiveIntoFuture from '../components/DiveIntoFuture';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // slight delay to ensure layout is done
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
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
  );
}
