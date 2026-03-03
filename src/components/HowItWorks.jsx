import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Survey',
      titleTh: 'สำรวจพื้นที่',
      shortDesc: 'ลงพื้นที่สำรวจหน้างานจริง',
      description: 'ทีมงานลงพื้นที่สำรวจหน้างานจริง วัดขนาดหลังคา ตรวจสอบโครงสร้างความแข็งแรง ประเมินทิศทางและมุมรับแสงอาทิตย์ เพื่อออกแบบระบบที่เหมาะสมที่สุด',
      image: '/Process/Survey.webp',
      highlights: ['ตรวจสอบโครงสร้างหลังคา', 'วัดพื้นที่ติดตั้ง', 'ประเมินทิศทางแสง']
    },
    {
      step: '02',
      title: 'Load Analysis',
      titleTh: 'วิเคราะห์โหลด',
      shortDesc: 'วิเคราะห์การใช้ไฟฟ้า',
      description: 'วิเคราะห์พฤติกรรมการใช้ไฟฟ้าของคุณอย่างละเอียด ศึกษาบิลค่าไฟย้อนหลัง ดูช่วงเวลาที่ใช้ไฟมากที่สุด เพื่อออกแบบระบบที่ตอบโจทย์การใช้งานจริง',
      image: '/Process/Load Analysis.webp',
      highlights: ['วิเคราะห์บิลค่าไฟ', 'ศึกษาพฤติกรรมการใช้ไฟ', 'คำนวณโหลดที่เหมาะสม']
    },
    {
      step: '03',
      title: 'System Simulation',
      titleTh: 'จำลองระบบ',
      shortDesc: 'จำลองการผลิตไฟฟ้า',
      description: 'ใช้ซอฟต์แวร์ PVsyst จำลองการผลิตไฟฟ้าตลอดทั้งปี คำนวณผลตอบแทนการลงทุน (ROI) ระยะเวลาคืนทุน และประมาณการประหยัดค่าไฟในแต่ละเดือน',
      image: '/Process/System Simulation.webp',
      highlights: ['จำลองด้วย PVsyst', 'คำนวณ ROI', 'ประมาณการคืนทุน']
    },
    {
      step: '04',
      title: 'Installation',
      titleTh: 'ติดตั้งระบบ',
      shortDesc: 'ติดตั้งโดยทีมมืออาชีพ',
      description: 'ทีมช่างมืออาชีพดำเนินการติดตั้งตามมาตรฐานความปลอดภัย ใช้อุปกรณ์คุณภาพสูง พร้อมทดสอบระบบให้ทำงานได้เต็มประสิทธิภาพก่อนส่งมอบ',
      image: '/Process/Installation.webp',
      highlights: ['ทีมช่างมืออาชีพ', 'มาตรฐานความปลอดภัย', 'ทดสอบก่อนส่งมอบ']
    },
    {
      step: '05',
      title: 'Monitoring',
      titleTh: 'ติดตามผล',
      shortDesc: 'ติดตามผลแบบ Real-time',
      description: 'ระบบ Monitoring ติดตามการผลิตไฟฟ้าแบบ Real-time ผ่านแอปพลิเคชัน พร้อมรายงานประจำเดือน และบริการดูแลรักษาตลอดอายุการใช้งาน',
      image: '/Process/Monitoring.webp',
      highlights: ['Monitoring Real-time', 'รายงานประจำเดือน', 'บริการหลังการขาย']
    }
  ];

  const nextStep = () => setActiveStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-kb-orange font-semibold text-sm uppercase tracking-widest mb-3">Process</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            ขั้นตอนการทำงาน
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            กระบวนการทำงานแบบวิศวกรรม ทุกขั้นตอนมีข้อมูลรองรับ
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-0 items-stretch bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          
          {/* Left - Image */}
          <motion.div 
            className="relative min-h-[400px] lg:min-h-[600px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={process.env.PUBLIC_URL + steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <motion.button 
                onClick={prevStep}
                className="w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </motion.button>
              <motion.button 
                onClick={nextStep}
                className="w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="flex flex-col justify-center p-8 lg:p-12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {steps[activeStep].title}
                </h3>

                {/* Quote/Description */}
                <div className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-kb-orange rounded-r-2xl p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed text-lg italic mb-4">
                    "{steps[activeStep].description}"
                  </p>
                  <div className="pt-4 border-t border-orange-200">
                    <p className="text-sm font-semibold text-gray-900">{steps[activeStep].titleTh}</p>
                    <p className="text-xs text-gray-500">ขั้นตอนที่ {steps[activeStep].step}</p>
                  </div>
                </div>

                {/* View Projects Button */}
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="w-full py-3 px-6 bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group mb-6"
                >
                  ดูผลงานของเรา
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Highlights */}
                <div className="space-y-3">
                  {steps[activeStep].highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-kb-orange rounded-full flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Step Indicators */}
            <div className="flex items-center gap-2 mt-8 pt-8 border-t border-gray-200">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeStep 
                      ? 'w-8 bg-kb-orange' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">
                {activeStep + 1} / {steps.length}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
