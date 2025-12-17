import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Rounds from './components/Rounds';
import Prizes from './components/Prizes';
import Mentoring from './components/Mentoring';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { GlobalSpotlight } from './components/MagicEffects';
import { useIsMobile } from './hooks/useIsMobile';

function App() {
  const isMobile = useIsMobile();

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Disable GlobalSpotlight on mobile for performance */}
        <GlobalSpotlight
          enabled={!isMobile}
          spotlightRadius={300}
          glowColor="245, 188, 34"
          targetSelector=".magic-card"
        />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Timeline />
              <Rounds />
              <Mentoring />
              <Prizes />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
