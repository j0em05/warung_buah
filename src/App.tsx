import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import AboutSection from './components/AboutSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductSection />
      <AboutSection />
      <PartnerSection />
      <Footer />
    </div>
  );
}

export default App;