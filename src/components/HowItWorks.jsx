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
      image: '/process/servey.jpg',
      highlights: ['ตรวจสอบโครงสร้างหลังคา', 'วัดพื้นที่ติดตั้ง', 'ประเมินทิศทางแสง']
    },
    {
      step: '02',
      title: 'Load Analysis',
      titleTh: 'วิเคราะห์โหลด',
      shortDesc: 'วิเคราะห์การใช้ไฟฟ้า',
      description: 'วิเคราะห์พฤติกรรมการใช้ไฟฟ้าของคุณอย่างละเอียด ศึกษาบิลค่าไฟย้อนหลัง ดูช่วงเวลาที่ใช้ไฟมากที่สุด เพื่อออกแบบระบบที่ตอบโจทย์การใช้งานจริง',
      image: '/process/Load Analysis.jpg',
      highlights: ['วิเคราะห์บิลค่าไฟ', 'ศึกษาพฤติกรรมการใช้ไฟ', 'คำนวณโหลดที่เหมาะสม']
    },
    {
      step: '03',
      title: 'System Simulation',
      titleTh: 'จำลองระบบ',
      shortDesc: 'จำลองการผลิตไฟฟ้า',
      description: 'ใช้ซอฟต์แวร์ PVsyst จำลองการผลิตไฟฟ้าตลอดทั้งปี คำนวณผลตอบแทนการลงทุน (ROI) ระยะเวลาคืนทุน และประมาณการประหยัดค่าไฟในแต่ละเดือน',
      image: '/process/System Simulation.png',
      highlights: ['จำลองด้วย PVsyst', 'คำนวณ ROI', 'ประมาณการคืนทุน']
    },
    {
      step: '04',
      title: 'Installation',
      titleTh: 'ติดตั้งระบบ',
      shortDesc: 'ติดตั้งโดยทีมมืออาชีพ',
      description: 'ทีมช่างมืออาชีพดำเนินการติดตั้งตามมาตรฐานความปลอดภัย ใช้อุปกรณ์คุณภาพสูง พร้อมทดสอบระบบให้ทำงานได้เต็มประสิทธิภาพก่อนส่งมอบ',
      image: '/process/Installation.jpg',
      highlights: ['ทีมช่างมืออาชีพ', 'มาตรฐานความปลอดภัย', 'ทดสอบก่อนส่งมอบ']
    },
    {
      step: '05',
      title: 'Monitoring',
      titleTh: 'ติดตามผล',
      shortDesc: 'ติดตามผลแบบ Real-time',
      description: 'ระบบ Monitoring ติดตามการผลิตไฟฟ้าแบบ Real-time ผ่านแอปพลิเคชัน พร้อมรายงานประจำเดือน และบริการดูแลรักษาตลอดอายุการใช้งาน',
      image: '/process/Monitoring.png',
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
              
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStep}
                    src={process.env.PUBLIC_URL + steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Step Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-kb-orange text-white text-sm font-bold px-3 py-1 rounded-full">
                          Step {steps[activeStep].step}
                        </span>
                        <span className="text-white/80 text-sm">{steps[activeStep].titleTh}</span>
                      </div>
                      <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">
                        {steps[activeStep].title}
                      </h3>
                      <p className="text-white/80 text-sm lg:text-base max-w-lg hidden sm:block">
                        {steps[activeStep].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="absolute top-6 right-6 flex gap-2">
                  <button 
                    onClick={prevStep}
                    className="w-11 h-11 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-800" />
                  </button>
                  <button 
                    onClick={nextStep}
                    className="w-11 h-11 bg-kb-orange hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center justify-center gap-3 mt-6">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="group relative"
                  >
                    <div className={`h-2 rounded-full transition-all duration-500 ${
                      idx === activeStep 
                        ? 'w-10 bg-kb-orange' 
                        : 'w-2 bg-gray-300 group-hover:bg-gray-400'
                    }`} />
                  </button>
                ))}
                <span className="text-gray-400 text-sm ml-2">
                  {activeStep + 1} / {steps.length}
                </span>
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
                  className={`relative rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                    idx === activeStep 
                      ? 'bg-gray-900 shadow-xl' 
                      : 'bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md'
                  }`}
                  whileHover={{ scale: idx === activeStep ? 1 : 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="p-5">
                    <div className="flex items-center gap-4">
                      {/* Step Number */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold flex-shrink-0 transition-colors ${
                        idx === activeStep 
                          ? 'bg-kb-orange text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {step.step}
                      </div>
                      
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
                      <div className={`flex-shrink-0 ${idx === activeStep ? 'text-kb-orange' : 'text-gray-300'}`}>
                        {idx < activeStep ? (
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                        ) : (
                          <ArrowRight className={`w-5 h-5 transition-transform ${idx === activeStep ? 'translate-x-0' : '-translate-x-1'}`} />
                        )}
                      </div>
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
