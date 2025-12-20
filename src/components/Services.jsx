import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Factory, BarChart3, Wrench, Monitor } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      icon: Home, 
      title: 'Solar Rooftop - Residential', 
      description: 'ระบบโซลาร์เซลล์สำหรับบ้านพักอาศัย ออกแบบให้เหมาะกับการใช้งานของครอบครัว ประหยัดค่าไฟได้ทั้งกลางวันและกลางคืน', 
      features: ['On-Grid / Hybrid System', 'Battery Storage Option', '3-5 kWp Typical Size'],
      image: '/services/Solar Rooftop - Residential.jpg'
    },
    { 
      icon: Building2, 
      title: 'Solar Rooftop - Commercial', 
      description: 'ระบบโซลาร์เซลล์สำหรับอาคารพาณิชย์ ร้านค้า สำนักงาน ลดต้นทุนค่าไฟฟ้าอย่างมีประสิทธิภาพ', 
      features: ['Peak Shaving', 'Demand Charge Reduction', '10-100 kWp Systems'],
      image: '/services/Solar Rooftop - Commercial.jpg'
    },
    { 
      icon: Factory, 
      title: 'Solar Rooftop - Industrial', 
      description: 'ระบบโซลาร์เซลล์ขนาดใหญ่สำหรับโรงงานอุตสาหกรรม ออกแบบตามโหลดการใช้งานจริง', 
      features: ['Large Scale Systems', 'Grid-Tied Solutions', '100+ kWp Capacity'],
      image: '/services/Solar Rooftop - Industrial.jpg'
    },
    { 
      icon: BarChart3, 
      title: 'Energy Analysis & System Design', 
      description: 'วิเคราะห์การใช้พลังงานและออกแบบระบบที่เหมาะสมที่สุด ใช้ข้อมูลจริงในการคำนวณ', 
      features: ['Load Profile Analysis', 'ROI Calculation', 'System Simulation'],
      image: '/services/Energy Analysis & System Design.jpg'
    },
    { 
      icon: Wrench, 
      title: 'Installation & Commissioning', 
      description: 'ติดตั้งโดยทีมช่างมืออาชีพ พร้อมทดสอบระบบให้ทำงานได้เต็มประสิทธิภาพ', 
      features: ['Professional Team', 'Safety Standards', 'Quality Assurance'],
      image: '/services/Installation & Commissioning.jpg'
    },
    { 
      icon: Monitor, 
      title: 'Monitoring & Maintenance', 
      description: 'ระบบติดตามการผลิตไฟฟ้าแบบ Real-time พร้อมบริการดูแลรักษาตลอดอายุการใช้งาน', 
      features: ['24/7 Monitoring', 'Preventive Maintenance', 'Performance Reports'],
      image: '/services/Monitoring & Maintenance.jpg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-kb-orange font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-kb-dark mt-2 mb-4">บริการครบวงจรด้านโซลาร์เซลล์</h2>
          <p className="text-kb-gray max-w-2xl mx-auto">เราให้บริการออกแบบ ติดตั้ง และดูแลระบบโซลาร์เซลล์แบบครบวงจร</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[420px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={process.env.PUBLIC_URL + service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 group-hover:from-kb-dark group-hover:via-kb-dark/80 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 z-10">
                {/* Icon */}
                <motion.div 
                  className="w-14 h-14 bg-kb-orange rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                
                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <ul className="space-y-1.5">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center gap-2 text-sm text-white/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 bg-kb-orange rounded-full flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
