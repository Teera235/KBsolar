import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Survey',
      titleTh: 'สำรวจพื้นที่',
      shortDesc: 'ลงพื้นที่สำรวจหน้างานจริง',
      description: 'ทีมงานลงพื้นที่สำรวจหน้างานจริง วัดขนาดหลังคา ตรวจสอบโครงสร้างความแข็งแรง ประเมินทิศทางและมุมรับแสงอาทิตย์ เพื่อออกแบบระบบที่เหมาะสมที่สุด',
      image: '/process/Survey.webp',
      highlights: ['ตรวจสอบโครงสร้างหลังคา', 'วัดพื้นที่ติดตั้ง', 'ประเมินทิศทางแสง']
    },
    {
      step: '02',
      title: 'Load Analysis',
      titleTh: 'วิเคราะห์โหลด',
      shortDesc: 'วิเคราะห์การใช้ไฟฟ้า',
      description: 'วิเคราะห์พฤติกรรมการใช้ไฟฟ้าของคุณอย่างละเอียด ศึกษาบิลค่าไฟย้อนหลัง ดูช่วงเวลาที่ใช้ไฟมากที่สุด เพื่อออกแบบระบบที่ตอบโจทย์การใช้งานจริง',
      image: '/process/Load Analysis.webp',
      highlights: ['วิเคราะห์บิลค่าไฟ', 'ศึกษาพฤติกรรมการใช้ไฟ', 'คำนวณโหลดที่เหมาะสม']
    },
    {
      step: '03',
      title: 'System Simulation',
      titleTh: 'จำลองระบบ',
      shortDesc: 'จำลองการผลิตไฟฟ้า',
      description: 'ใช้ซอฟต์แวร์ PVsyst จำลองการผลิตไฟฟ้าตลอดทั้งปี คำนวณผลตอบแทนการลงทุน (ROI) ระยะเวลาคืนทุน และประมาณการประหยัดค่าไฟในแต่ละเดือน',
      image: '/process/System Simulation.webp',
      highlights: ['จำลองด้วย PVsyst', 'คำนวณ ROI', 'ประมาณการคืนทุน']
    },
    {
      step: '04',
      title: 'Installation',
      titleTh: 'ติดตั้งระบบ',
      shortDesc: 'ติดตั้งโดยทีมมืออาชีพ',
      description: 'ทีมช่างมืออาชีพดำเนินการติดตั้งตามมาตรฐานความปลอดภัย ใช้อุปกรณ์คุณภาพสูง พร้อมทดสอบระบบให้ทำงานได้เต็มประสิทธิภาพก่อนส่งมอบ',
      image: '/process/Installation.webp',
      highlights: ['ทีมช่างมืออาชีพ', 'มาตรฐานความปลอดภัย', 'ทดสอบก่อนส่งมอบ']
    },
    {
      step: '05',
      title: 'Monitoring',
      titleTh: 'ติดตามผล',
      shortDesc: 'ติดตามผลแบบ Real-time',
      description: 'ระบบ Monitoring ติดตามการผลิตไฟฟ้าแบบ Real-time ผ่านแอปพลิเคชัน พร้อมรายงานประจำเดือน และบริการดูแลรักษาตลอดอายุการใช้งาน',
      image: '/process/Monitoring.webp',
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
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left - Image Showcase */}
          <motion.div 
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-kb-orange/20 to-amber-500/20 rounded-[2rem] blur-2xl opacity-60" />
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-gradient-to-br from-gray-900 to-gray-800">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    className="w-full h-full"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ 
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + steps[activeStep].image}
                      alt={steps[activeStep].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 left-8 w-3 h-3 bg-kb-orange rounded-full opacity-60"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-12 right-12 w-2 h-2 bg-amber-400 rounded-full opacity-40"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Step Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 1.05 }}
                      transition={{ 
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <motion.span 
                          className="bg-kb-orange text-white text-sm font-bold px-3 py-1 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                          Step {steps[activeStep].step}
                        </motion.span>
                        <motion.span 
                          className="text-white/80 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {steps[activeStep].titleTh}
                        </motion.span>
                      </div>
                      <motion.h3 
                        className="text-white text-2xl lg:text-3xl font-bold mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {steps[activeStep].title}
                      </motion.h3>
                      <motion.p 
                        className="text-white/80 text-sm lg:text-base max-w-lg hidden sm:block"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {steps[activeStep].description}
                      </motion.p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="absolute top-6 right-6 flex gap-2">
                  <motion.button 
                    onClick={prevStep}
                    className="w-11 h-11 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-800" />
                  </motion.button>
                  <motion.button 
                    onClick={nextStep}
                    className="w-11 h-11 bg-kb-orange hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center justify-center gap-3 mt-6">
                {steps.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="group relative"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        idx === activeStep 
                          ? 'w-10 bg-kb-orange' 
                          : 'w-2 bg-gray-300 group-hover:bg-gray-400'
                      }`}
                      layout
                    />
                  </motion.button>
                ))}
                <motion.span 
                  className="text-gray-400 text-sm ml-2"
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {activeStep + 1} / {steps.length}
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Right - Steps List */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Steps */}
            <div className="space-y-3">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`process-step relative rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                    idx === activeStep 
                      ? 'active bg-gray-900 shadow-xl' 
                      : 'bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md'
                  }`}
                  whileHover={{ 
                    scale: idx === activeStep ? 1 : 1.02,
                    y: idx === activeStep ? 0 : -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: idx * 0.1,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <div className="p-5">
                    <div className="flex items-center gap-4">
                      {/* Step Number */}
                      <motion.div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold flex-shrink-0 transition-colors ${
                          idx === activeStep 
                            ? 'bg-kb-orange text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                        whileHover={{ rotate: idx === activeStep ? 0 : 5 }}
                        animate={{ 
                          scale: idx === activeStep ? 1.1 : 1,
                          rotate: idx === activeStep ? 360 : 0
                        }}
                        transition={{ 
                          scale: { duration: 0.3 },
                          rotate: { duration: 0.6, ease: "easeInOut" }
                        }}
                      >
                        {step.step}
                      </motion.div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className={`font-bold text-lg ${idx === activeStep ? 'text-white' : 'text-gray-900'}`}>
                            {step.title}
                          </h3>
                          <span className={`text-sm ${idx === activeStep ? 'text-kb-orange' : 'text-gray-400'}`}>
                            • {step.titleTh}
                          </span>
                        </div>
                        <p className={`text-sm mt-1 ${idx === activeStep ? 'text-gray-400' : 'text-gray-500'}`}>
                          {step.shortDesc}
                        </p>
                      </div>

                      {/* Arrow/Check */}
                      <motion.div 
                        className={`flex-shrink-0 ${idx === activeStep ? 'text-kb-orange' : 'text-gray-300'}`}
                        animate={{ 
                          x: idx === activeStep ? 5 : 0,
                          scale: idx === activeStep ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {idx < activeStep ? (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                          </motion.div>
                        ) : (
                          <ArrowRight className={`w-5 h-5 transition-transform ${idx === activeStep ? 'translate-x-0' : '-translate-x-1'}`} />
                        )}
                      </motion.div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {idx === activeStep && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-gray-700">
                            <div className="grid grid-cols-1 gap-2">
                              {step.highlights.map((highlight, hIdx) => (
                                <motion.div
                                  key={hIdx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: hIdx * 0.1 }}
                                  className="flex items-center gap-2 text-gray-300 text-sm"
                                >
                                  <div className="w-1.5 h-1.5 bg-kb-orange rounded-full" />
                                  {highlight}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Active Indicator Line */}
                  {idx === activeStep && (
                    <motion.div 
                      className="absolute left-0 top-0 bottom-0 w-1 bg-kb-orange"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-kb-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all group shadow-lg shadow-kb-orange/25 hover:shadow-xl hover:shadow-kb-orange/30"
              >
                เริ่มต้นกับเรา
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
