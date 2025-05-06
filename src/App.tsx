import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { SpecialOffers } from './components/SpecialOffers';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <SpecialOffers />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;