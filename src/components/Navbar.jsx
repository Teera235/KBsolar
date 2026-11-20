import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLang } from '../i18n';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for background color
      setScrolled(currentScrollY > 50);
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < 50) {
        // Always show navbar at the top
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setVisible(false);
        setIsOpen(false); // Close mobile menu when hiding
      } else {
        // Scrolling up - show navbar
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Only observe sections on home page
    if (location.pathname !== '/') return;

    const sections = ['home', 'services', 'calculator', 'blog', 'projects', 'packages', 'faq', 'contact'];
    
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
  }, [location.pathname]);

  const navLinks = [
    { name: t('หน้าแรก', 'Home'), href: '#home', id: 'home' },
    { name: t('บริการ', 'Services'), href: '#services', id: 'services' },
    { name: t('คำนวณ', 'Calculator'), href: '#calculator', id: 'calculator' },
    { name: t('บทความ', 'Blog'), href: '#blog', id: 'blog' },
    { name: t('ผลงาน', 'Projects'), href: '#projects', id: 'projects' },
    { name: t('แพ็คเกจ', 'Packages'), href: '#packages', id: 'packages' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: t('ติดต่อ', 'Contact'), href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  // Check if we're on a blog detail page
  const isBlogDetailPage = location.pathname.startsWith('/blog/');
  
  // Always show white background on blog detail pages
  const shouldShowWhiteBg = scrolled || isBlogDetailPage;

  const langToggle = (
    <button
      onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
      aria-label={lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
      className={`text-sm font-semibold whitespace-nowrap px-3 py-1.5 rounded-full border transition-colors ${
        shouldShowWhiteBg ? 'border-gray-300 text-kb-dark hover:border-kb-orange' : 'border-white/40 text-white hover:border-white'
      }`}
    >
      <span className={lang === 'th' ? 'text-kb-orange' : 'opacity-60'}>TH</span>
      <span className="opacity-40 mx-1">/</span>
      <span className={lang === 'en' ? 'text-kb-orange' : 'opacity-60'}>EN</span>
    </button>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      shouldShowWhiteBg ? 'bg-white shadow-lg' : 'bg-transparent'
    } ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-default">
            <img 
              src="/logo.webp" 
              alt="KB Solar Logo" 
              className="h-10 sm:h-12 w-auto rounded-lg"
            />
            <div>
              <span className={`font-bold text-lg sm:text-xl whitespace-nowrap ${shouldShowWhiteBg ? 'text-kb-dark' : 'text-white'}`}>
                KB Solar Energy
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium whitespace-nowrap transition-all duration-300 hover:text-kb-orange relative ${
                  shouldShowWhiteBg ? 'text-kb-dark' : 'text-white'
                } ${
                  activeSection === link.id && location.pathname === '/'
                    ? 'text-kb-orange' 
                    : ''
                }`}
              >
                {link.name}
                {activeSection === link.id && location.pathname === '/' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-kb-orange rounded-full"></span>
                )}
              </a>
            ))}
            {langToggle}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-kb !px-5 !py-2.5 whitespace-nowrap"
            >
              {t('ขอใบเสนอราคา', 'Get Quote')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
          {langToggle}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t('ปิดเมนู', 'Close menu') : t('เปิดเมนู', 'Open menu')}
            aria-expanded={isOpen}
            className={`p-2 rounded-lg ${shouldShowWhiteBg ? 'text-kb-dark' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden bg-white rounded-2xl shadow-xl mt-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block py-3 px-4 text-kb-dark hover:bg-kb-light rounded-lg font-medium transition-all duration-300 ${
                  activeSection === link.id && location.pathname === '/'
                    ? 'bg-kb-orange text-white font-bold' 
                    : ''
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-kb w-full mt-2 !py-3"
            >
              {t('ขอใบเสนอราคา', 'Get Quote')}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
