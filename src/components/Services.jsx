import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Factory, BarChart3, Wrench, Monitor } from 'lucide-react';

const Services = () => {
  const scrollRef = useRef(null);

  const services = [
    { 
      icon: Home, 
      title: 'Solar Rooftop - Residential', 
      description: 'ระบบโซลาร์เซลล์สำหรับบ้านพักอาศัย ออกแบบให้เหมาะกับการใช้งานของครอบครัว ประหยัดค่าไฟได้ทั้งกลางวันและกลางคืน', 
      features: ['On-Grid / Hybrid System', 'Battery Storage Option', '3-5 kWp Typical Size'],
      image: '/services/Solar Rooftop - Residential.webp'
    },
    { 
      icon: Building2, 
      title: 'Solar Rooftop - Commercial', 
      description: 'ระบบโซลาร์เซลล์สำหรับอาคารพาณิชย์ ร้านค้า สำนักงาน ลดต้นทุนค่าไฟฟ้าอย่างมีประสิทธิภาพ', 
      features: ['Peak Shaving', 'Demand Charge Reduction', '10-100 kWp Systems'],
      image: '/services/Solar Rooftop - Commercial.webp'
    },
    { 
      icon: Factory, 
      title: 'Solar Rooftop - Industrial', 
      description: 'ระบบโซลาร์เซลล์ขนาดใหญ่สำหรับโรงงานอุตสาหกรรม ออกแบบตามโหลดการใช้งานจริง', 
      features: ['Large Scale Systems', 'Grid-Tied Solutions', '100+ kWp Capacity'],
      image: '/services/Solar Rooftop - Industrial.webp'
    },
    { 
      icon: BarChart3, 
      title: 'Energy Analysis & System Design', 
      description: 'วิเคราะห์การใช้พลังงานและออกแบบระบบที่เหมาะสมที่สุด ใช้ข้อมูลจริงในการคำนวณ', 
      features: ['Load Profile Analysis', 'ROI Calculation', 'System Simulation'],
      image: '/services/Energy Analysis & System Design.webp'
    },
    { 
      icon: Wrench, 
      title: 'Installation & Commissioning', 
      description: 'ติดตั้งโดยทีมช่างมืออาชีพ พร้อมทดสอบระบบให้ทำงานได้เต็มประสิทธิภาพ', 
      features: ['Professional Team', 'Safety Standards', 'Quality Assurance'],
      image: '/services/Installation & Commissioning.webp'
    },
    { 
      icon: Monitor, 
      title: 'Monitoring & Maintenance', 
      description: 'ระบบติดตามการผลิตไฟฟ้าแบบ Real-time พร้อมบริการดูแลรักษาตลอดอายุการใช้งาน', 
      features: ['24/7 Monitoring', 'Preventive Maintenance', 'Performance Reports'],
      image: '/services/Monitoring & Maintenance.webp'
    }
  ];

  // Auto scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    const cardWidth = 604; // 600px card + 4px gap
    
    const scroll = () => {
      scrollAmount += scrollSpeed;
      
      if (scrollAmount >= cardWidth * services.length) {
        scrollAmount = 0;
      }
      
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, [services.length]);

  return (
    <section id="services" className="py-12 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-kb-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-4xl font-bold text-kb-dark">บริการครบวงจรด้านโซลาร์เซลล์</h2>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Carousel - Full Width */}
        <div className="relative">
          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide pb-4 px-4" style={{ scrollBehavior: 'auto' }}>
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {/* Duplicate services for infinite scroll effect */}
              {[...services, ...services].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % services.length) * 0.1 }}
                  className="group"
                  style={{ width: '600px', flexShrink: 0 }}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-[500px] bg-white border border-gray-100">
                    {/* Background Image - Full Height */}
                    <div className="absolute inset-0">
                      <img 
                        src={process.env.PUBLIC_URL + service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay - Stronger */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
                      
                      {/* Icon Badge */}
                      <motion.div 
                        className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="w-7 h-7 text-kb-orange" />
                      </motion.div>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative h-full flex flex-col justify-end p-6">
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-kb-orange transition-colors">
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
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-kb-orange to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">ต้องการปรึกษาหรือสอบถามข้อมูลเพิ่มเติม?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="inline-flex items-center gap-2 bg-kb-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-kb-orange/25 hover:shadow-xl hover:shadow-kb-orange/30 group"
          >
            ติดต่อเราเลย
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
