import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'services', 'calculator', 'blog', 'packages', 'projects', 'faq', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Calculator', href: '#calculator', id: 'calculator' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Packages', href: '#packages', id: 'packages' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="hidden sm:flex items-center space-x-3">
            <img 
              src={process.env.PUBLIC_URL + '/logo.webp'} 
              alt="KB Solar Logo" 
              className="h-12 w-auto rounded-lg"
            />
            <div className="hidden sm:block">
              <span className={`font-bold text-xl ${scrolled ? 'text-kb-dark' : 'text-white'}`}>
                KB Solar Energy
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-all duration-300 hover:text-kb-orange relative ${
                  scrolled ? 'text-kb-dark' : 'text-white'
                } ${
                  activeSection === link.id 
                    ? 'text-kb-orange scale-110 font-bold' 
                    : ''
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-kb-orange rounded-full"></span>
                )}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-kb-orange hover:bg-kb-orange-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-kb-dark' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-kb-dark hover:bg-kb-light rounded-lg font-medium transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'bg-kb-orange text-white font-bold scale-105' 
                    : ''
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-2 bg-kb-orange text-white text-center py-3 rounded-full font-semibold"
            >
              Get Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
