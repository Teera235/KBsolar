import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Factory, BarChart3, Wrench, Monitor } from 'lucide-react';
import { useLang } from '../i18n';
import { SectionHeading } from './ui';

const Services = () => {
  const { t } = useLang();
  const scrollRef = useRef(null);
  const pausedRef = useRef(false);

  const services = [
    { 
      icon: Home, 
      title: t('โซลาร์รูฟท็อป - บ้านพักอาศัย', 'Solar Rooftop - Residential'), 
      description: t('ระบบโซลาร์เซลล์สำหรับบ้านพักอาศัย ออกแบบให้เหมาะกับการใช้งานของครอบครัว ประหยัดค่าไฟได้ทั้งกลางวันและกลางคืน', 'Solar systems for homes, designed around how your family uses power, saving on electricity bills both day and night.'), 
      features: [t('ระบบ On-Grid / Hybrid', 'On-Grid / Hybrid System'), t('เลือกติดตั้งแบตเตอรี่ได้', 'Battery Storage Option'), t('ขนาดทั่วไป 3-5 kWp', '3-5 kWp Typical Size')],
      image: '/services/Solar Rooftop - Residential.webp'
    },
    { 
      icon: Building2, 
      title: t('โซลาร์รูฟท็อป - อาคารพาณิชย์', 'Solar Rooftop - Commercial'), 
      description: t('ระบบโซลาร์เซลล์สำหรับอาคารพาณิชย์ ร้านค้า สำนักงาน ลดต้นทุนค่าไฟฟ้าอย่างมีประสิทธิภาพ', 'Solar systems for commercial buildings, shops and offices that cut electricity costs efficiently.'), 
      features: [t('ลดค่าไฟช่วงพีค (Peak Shaving)', 'Peak Shaving'), t('ลดค่าความต้องการพลังไฟฟ้า (Demand Charge)', 'Demand Charge Reduction'), t('ระบบขนาด 10-100 kWp', '10-100 kWp Systems')],
      image: '/services/Solar Rooftop - Commercial.webp'
    },
    { 
      icon: Factory, 
      title: t('โซลาร์รูฟท็อป - โรงงานอุตสาหกรรม', 'Solar Rooftop - Industrial'), 
      description: t('ระบบโซลาร์เซลล์ขนาดใหญ่สำหรับโรงงานอุตสาหกรรม ออกแบบตามโหลดการใช้งานจริง', 'Large-scale solar systems for factories, designed around the actual load.'), 
      features: [t('ระบบขนาดใหญ่', 'Large Scale Systems'), t('ระบบเชื่อมต่อสายส่ง (Grid-Tied)', 'Grid-Tied Solutions'), t('กำลังผลิต 100+ kWp', '100+ kWp Capacity')],
      image: '/services/Solar Rooftop - Industrial.webp'
    },
    { 
      icon: BarChart3, 
      title: t('วิเคราะห์พลังงานและออกแบบระบบ', 'Energy Analysis & System Design'), 
      description: t('วิเคราะห์การใช้พลังงานและออกแบบระบบที่เหมาะสมที่สุด ใช้ข้อมูลจริงในการคำนวณ', 'We analyse your energy use and design the best-fit system, calculated from real data.'), 
      features: [t('วิเคราะห์รูปแบบการใช้ไฟ (Load Profile)', 'Load Profile Analysis'), t('คำนวณ ROI', 'ROI Calculation'), t('จำลองการทำงานของระบบ', 'System Simulation')],
      image: '/services/Energy Analysis & System Design.webp'
    },
    { 
      icon: Wrench, 
      title: t('ติดตั้งและทดสอบระบบ', 'Installation & Commissioning'), 
      description: t('ติดตั้งโดยทีมช่างมืออาชีพ พร้อมทดสอบระบบให้ทำงานได้เต็มประสิทธิภาพ', 'Installed by a professional technician team and tested so the system runs at full performance.'), 
      features: [t('ทีมงานมืออาชีพ', 'Professional Team'), t('มาตรฐานความปลอดภัย', 'Safety Standards'), t('ควบคุมคุณภาพงาน', 'Quality Assurance')],
      image: '/services/Installation & Commissioning.webp'
    },
    { 
      icon: Monitor, 
      title: t('ติดตามระบบและบำรุงรักษา', 'Monitoring & Maintenance'), 
      description: t('ระบบติดตามการผลิตไฟฟ้าแบบ Real-time พร้อมบริการดูแลรักษาตลอดอายุการใช้งาน', 'Real-time monitoring of power generation, with maintenance service for the life of the system.'), 
      features: [t('ติดตามระบบตลอด 24/7', '24/7 Monitoring'), t('บำรุงรักษาเชิงป้องกัน', 'Preventive Maintenance'), t('รายงานประสิทธิภาพการผลิต', 'Performance Reports')],
      image: '/services/Monitoring & Maintenance.webp'
    }
  ];

  // Auto scroll effect (pauses while the pointer is over the carousel)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = scrollContainer.scrollLeft;
    const scrollSpeed = 1;

    const scroll = () => {
      if (pausedRef.current) {
        scrollAmount = scrollContainer.scrollLeft;
        return;
      }
      // Width of one full set of cards (card + gap) = where the duplicate set starts
      const track = scrollContainer.firstElementChild;
      const first = track?.children[0];
      const dup = track?.children[services.length];
      const loopWidth = first && dup ? dup.offsetLeft - first.offsetLeft : 0;

      scrollAmount += scrollSpeed;
      if (loopWidth > 0 && scrollAmount >= loopWidth) {
        scrollAmount -= loopWidth;
      }

      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, [services.length]);

  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('บริการครบวงจร', 'End-to-End')}
            highlight={t('ด้านโซลาร์เซลล์', 'Solar Services')}
          />
        </div>

        {/* Horizontal Scrolling Carousel - Full Width */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide pt-3 pb-12 px-4"
            style={{ scrollBehavior: 'auto' }}
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {/* Duplicate services for infinite scroll effect */}
              {[...services, ...services].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % services.length) * 0.1 }}
                  className="group w-[85vw] max-w-[600px] flex-shrink-0"
                >
                  <div className="relative rounded-[1.25rem] overflow-hidden h-[440px] sm:h-[500px] bg-kb-dark ring-1 ring-black/5 shadow-[0_8px_24px_-12px_rgba(17,24,39,.25)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 motion-reduce:hover:translate-y-0">
                    {/* Background Image - Full Height */}
                    <div className="absolute inset-0 card-kb-img">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay - Stronger */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-orange-300" />
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative h-full flex flex-col justify-end p-6">
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/90 mb-4 text-sm leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center gap-2 text-sm text-white/90"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-kb-orange rounded-full flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover Effect - Bottom Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-kb-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-4 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">{t('ต้องการปรึกษาหรือสอบถามข้อมูลเพิ่มเติม?', 'Need advice or more information?')}</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="btn-kb"
          >
            {t('ติดต่อเราเลย', 'Contact us')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
