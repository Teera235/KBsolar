import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import KPISection from '../components/KPISection';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import WhyUs from '../components/WhyUs';
import Calculator from '../components/Calculator';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Packages from '../components/Packages';
import YouTubeVideos from '../components/YouTubeVideos';
import Testimonials from '../components/Testimonials';
import AboutUs from '../components/AboutUs';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import BackToTop from '../components/BackToTop';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Partners />
      <KPISection />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Calculator />
      <Blog />
      <Projects />
      <Packages />
      <YouTubeVideos />
      <Testimonials />
      <AboutUs />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingContact />
      <BackToTop />
    </>
  );
};

export default HomePage;
