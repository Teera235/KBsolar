import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import KPISection from './components/KPISection';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Calculator from './components/Calculator';
import Packages from './components/Packages';
import Projects from './components/Projects';
import YouTubeVideos from './components/YouTubeVideos';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-white m-0 p-0 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partners />
      <KPISection />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Calculator />
      <Packages />
      <Projects />
      <YouTubeVideos />
      <Testimonials />
      <AboutUs />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingContact />
      <BackToTop />
    </div>
  );
}

export default App;
