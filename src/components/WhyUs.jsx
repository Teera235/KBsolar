import React from 'react';
import { ClipboardCheck, ShieldCheck, Award, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem, AnimatedCounter } from './AnimatedSection';

const WhyUs = () => {
  const features = [
    {
      icon: ClipboardCheck,
      title: 'ออกแบบเฉพาะบ้านคุณ',
      description: 'ทีมวิศวกรของ KB SOLAR สำรวจหน้างานจริง คำนวณปริมาณการใช้ไฟฟ้า ทิศทางหลังคา และแสงแดดในแต่ละพื้นที่ เพื่อออกแบบระบบโซลาร์ให้เหมาะสมกับบ้านของคุณโดยเฉพาะ ไม่ใช่แพ็กเกจสำเร็จรูปที่ใช้เหมือนกันทุกหลัง',
    },
    {
      icon: ShieldCheck,
      title: 'ติดตั้งโดยทีมช่างมืออาชีพ',
      description: 'ช่างติดตั้งของเราผ่านการอบรมและมีประสบการณ์ตรง ทำงานตามมาตรฐาน วสท. ใช้อุปกรณ์ยึดโครงสร้างและสายไฟที่ทนต่อสภาพอากาศไทย เพื่อให้ระบบทำงานได้ต่อเนื่องและไม่มีปัญหารั่วซึมภายหลัง',
    },
    {
      icon: Award,
      title: 'แผงและอินเวอร์เตอร์แบรนด์ชั้นนำ',
      description: 'KB SOLAR คัดเลือกแผงโซลาร์และอินเวอร์เตอร์จากผู้ผลิต Tier 1 ที่ผ่านมาตรฐาน IEC และขึ้นทะเบียนกับ กฟน./กฟภ. พร้อมเอกสารรับรองครบถ้วน เพื่อให้ขออนุญาตและขายไฟคืนได้จริง',
    },
    {
      icon: HeadphonesIcon,
      title: 'ดูแลระยะยาวหลังติดตั้ง',
      description: 'หลังจบงานติดตั้ง ทีม KB SOLAR ยังพร้อมให้บริการตรวจเช็กระบบ แจ้งเตือนผ่านแอป และเข้าซ่อมเมื่อเกิดปัญหา ครอบคลุมตลอดอายุการรับประกันแผงและอินเวอร์เตอร์ของแต่ละแบรนด์',
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
            <span className="text-kb-orange font-semibold text-sm tracking-wider uppercase">Why Us?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              ทำไมต้อง KB SOLAR
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
