import React from 'react';
import { Calculator, FileSearch, Smartphone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem, AnimatedCounter } from './AnimatedSection';

const WhyUs = () => {
  const features = [
    {
      icon: Calculator,
      title: 'ประหยัดค่าไฟแบบคำนวณได้จริง',
      description: 'ก่อนเริ่มงาน KB SOLAR จัดทำรายงานคาดการณ์ผลผลิตไฟฟ้ารายเดือนและจุดคืนทุนจากบิลค่าไฟจริงของคุณ ทุกตัวเลขตรวจสอบย้อนกลับได้ ไม่ใช้คำกว้างว่า “ประหยัดได้ถึง” โดยไม่มีที่มา',
    },
    {
      icon: FileSearch,
      title: 'ทำงานเป็นขั้นตอน ตรวจสอบได้ทุกสเต็ป',
      description: 'สำรวจหน้างาน ออกแบบระบบ ยื่นขออนุญาต กฟน./กฟภ. ติดตั้ง และทดสอบระบบ ทุกขั้นตอนมีรูปถ่ายหน้างานและเอกสารส่งถึงเจ้าของบ้าน เพื่อให้คุณรู้สถานะงานได้ตลอดโครงการ',
    },
    {
      icon: Smartphone,
      title: 'มอนิเตอร์ผลผลิตไฟผ่านแอปมือถือ',
      description: 'ทุกระบบของ KB SOLAR เชื่อมแอปอินเวอร์เตอร์ให้พร้อมใช้งานตั้งแต่วันส่งมอบ คุณดูกำลังการผลิต ค่าไฟที่ประหยัดได้ และรับแจ้งเตือนเมื่อระบบผิดปกติได้ทันที ไม่ต้องรอบิลค่าไฟหลายเดือนถึงจะรู้',
    },
    {
      icon: MessageCircle,
      title: 'ทีมซัพพอร์ตคนไทย ตอบไวทุกช่องทาง',
      description: 'แจ้งปัญหาผ่าน LINE โทรศัพท์ หรืออีเมลถึงทีมเทคนิคของ KB SOLAR รับเรื่องภายในวันทำการและนัดเข้าหน้างานตามระยะเวลาในสัญญาบริการ ดูแลโดยทีมงานในประเทศทุกสายงาน',
    },
  ];

  const warranties = [
    { years: '10', label: 'รับประกัน', sublabel: 'Inverter', color: 'text-kb-orange' },
    { years: '30', label: 'รับประกัน', sublabel: 'แผงโซล่า', color: 'text-kb-orange' },
    { years: '3', label: 'รับประกัน', sublabel: 'งานติดตั้ง', color: 'text-kb-orange' },
  ];

  return (
    <section 
      id="why-us" 
      className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
      style={{
        backgroundImage: `url(/bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-kb-orange font-semibold text-sm tracking-wider uppercase">The KB SOLAR Way</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              สิ่งที่คุณจะได้รับเมื่อเลือก KB SOLAR
            </h2>
          </div>
        </FadeUp>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-16" staggerDelay={0.15}>
          {features.map((feature, idx) => (
            <StaggerItem key={idx}>
              <motion.div 
                className="flex gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-kb-orange/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-6 h-6 text-kb-orange" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Warranty Bar */}
        <FadeUp delay={0.3}>
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 warranty-mobile"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="grid grid-cols-3 divide-x divide-gray-200 warranty-grid-mobile">
              {warranties.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="text-center px-2 sm:px-4 warranty-item-mobile"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-baseline justify-center gap-1 sm:gap-2">
                    <span className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${item.color} warranty-number-mobile`}>
                      <AnimatedCounter value={item.years} duration={1.5} />
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider warranty-years-mobile">
                      <span className="block sm:hidden">YR</span>
                      <span className="hidden sm:block">Years</span>
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium mt-1 text-xs sm:text-sm warranty-label-mobile">{item.label}</p>
                  <p className="text-gray-900 font-bold text-xs sm:text-sm warranty-sublabel-mobile">{item.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
};

export default WhyUs;
