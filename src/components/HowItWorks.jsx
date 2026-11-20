import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '../i18n';
import { SectionHeading } from './ui';

const HowItWorks = () => {
  const { t } = useLang();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Survey',
      titleTh: 'สำรวจพื้นที่',
      shortDesc: { th: 'ลงพื้นที่สำรวจหน้างานจริง', en: 'On-site survey' },
      description: { th: 'ทีมงานลงพื้นที่สำรวจหน้างานจริง วัดขนาดหลังคา ตรวจสอบโครงสร้างความแข็งแรง ประเมินทิศทางและมุมรับแสงอาทิตย์ เพื่อออกแบบระบบที่เหมาะสมที่สุด', en: 'Our team visits the site to measure the roof, check that the structure is strong enough, and assess its orientation and angle to the sun, so we can design the best-fit system.' },
      image: '/Process/Survey.webp',
      highlights: [{ th: 'ตรวจสอบโครงสร้างหลังคา', en: 'Roof structure check' }, { th: 'วัดพื้นที่ติดตั้ง', en: 'Installation area measurement' }, { th: 'ประเมินทิศทางแสง', en: 'Sun direction assessment' }]
    },
    {
      step: '02',
      title: 'Load Analysis',
      titleTh: 'วิเคราะห์โหลด',
      shortDesc: { th: 'วิเคราะห์การใช้ไฟฟ้า', en: 'Electricity use analysis' },
      description: { th: 'วิเคราะห์พฤติกรรมการใช้ไฟฟ้าของคุณอย่างละเอียด ศึกษาบิลค่าไฟย้อนหลัง ดูช่วงเวลาที่ใช้ไฟมากที่สุด เพื่อออกแบบระบบที่ตอบโจทย์การใช้งานจริง', en: 'We look closely at how you use electricity, review your past bills and find your peak hours, so the system fits how you actually use power.' },
      image: '/Process/Load Analysis.webp',
      highlights: [{ th: 'วิเคราะห์บิลค่าไฟ', en: 'Electricity bill analysis' }, { th: 'ศึกษาพฤติกรรมการใช้ไฟ', en: 'Usage pattern review' }, { th: 'คำนวณโหลดที่เหมาะสม', en: 'Right-sized load calculation' }]
    },
    {
      step: '03',
      title: 'System Simulation',
      titleTh: 'จำลองระบบ',
      shortDesc: { th: 'จำลองการผลิตไฟฟ้า', en: 'Power generation simulation' },
      description: { th: 'ใช้ซอฟต์แวร์ PVsyst จำลองการผลิตไฟฟ้าตลอดทั้งปี คำนวณผลตอบแทนการลงทุน (ROI) ระยะเวลาคืนทุน และประมาณการประหยัดค่าไฟในแต่ละเดือน', en: 'We use PVsyst software to simulate a full year of power generation and calculate return on investment (ROI), payback period and estimated monthly savings.' },
      image: '/Process/System Simulation.webp',
      highlights: [{ th: 'จำลองด้วย PVsyst', en: 'PVsyst simulation' }, { th: 'คำนวณ ROI', en: 'ROI calculation' }, { th: 'ประมาณการคืนทุน', en: 'Payback estimate' }]
    },
    {
      step: '04',
      title: 'Installation',
      titleTh: 'ติดตั้งระบบ',
      shortDesc: { th: 'ติดตั้งโดยทีมมืออาชีพ', en: 'Professional installation' },
      description: { th: 'ทีมช่างมืออาชีพดำเนินการติดตั้งตามมาตรฐานความปลอดภัย ใช้อุปกรณ์คุณภาพสูง พร้อมทดสอบระบบให้ทำงานได้เต็มประสิทธิภาพก่อนส่งมอบ', en: 'Our professional technicians install to safety standards using high-quality equipment, and test the system for full performance before handover.' },
      image: '/Process/Installation.webp',
      highlights: [{ th: 'ทีมช่างมืออาชีพ', en: 'Professional technicians' }, { th: 'มาตรฐานความปลอดภัย', en: 'Safety standards' }, { th: 'ทดสอบก่อนส่งมอบ', en: 'Tested before handover' }]
    },
    {
      step: '05',
      title: 'Monitoring',
      titleTh: 'ติดตามผล',
      shortDesc: { th: 'ติดตามผลแบบ Real-time', en: 'Real-time monitoring' },
      description: { th: 'ระบบ Monitoring ติดตามการผลิตไฟฟ้าแบบ Real-time ผ่านแอปพลิเคชัน พร้อมรายงานประจำเดือน และบริการดูแลรักษาตลอดอายุการใช้งาน', en: 'A monitoring app tracks power generation in real time, with monthly reports and maintenance service for the life of the system.' },
      image: '/Process/Monitoring.webp',
      highlights: [{ th: 'Monitoring Real-time', en: 'Real-time monitoring' }, { th: 'รายงานประจำเดือน', en: 'Monthly reports' }, { th: 'บริการหลังการขาย', en: 'After-sales service' }]
    }
  ];

  const nextStep = () => setActiveStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          title={t('ขั้นตอน', 'How We')}
          highlight={t('การทำงาน', 'Work')}
          subtitle={t('กระบวนการทำงานแบบวิศวกรรม ทุกขั้นตอนมีข้อมูลรองรับ', 'An engineering-led process, with data behind every step')}
        />

        {/* Main Content */}
        <div className="card-kb grid lg:grid-cols-2 gap-0 items-stretch overflow-hidden">
          
          {/* Left - Image */}
          <motion.div 
            className="card-kb-img relative min-h-[400px] lg:min-h-[600px]"
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
                  src={steps[activeStep].image}
                  alt={t(steps[activeStep].titleTh, steps[activeStep].title)}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <motion.button 
                onClick={prevStep}
                aria-label={t('ขั้นตอนก่อนหน้า', 'Previous step')}
                className="w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </motion.button>
              <motion.button 
                onClick={nextStep}
                aria-label={t('ขั้นตอนถัดไป', 'Next step')}
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
                  {t(steps[activeStep].titleTh, steps[activeStep].title)}
                </h3>

                {/* Quote/Description */}
                <div className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-kb-orange rounded-r-2xl p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed text-lg italic mb-4">
                    "{t(steps[activeStep].description)}"
                  </p>
                  <div className="pt-4 border-t border-orange-200">
                    <p className="text-sm font-semibold text-gray-900">{t(steps[activeStep].shortDesc)}</p>
                    <p className="text-xs text-gray-500">{t('ขั้นตอนที่', 'Step')} {steps[activeStep].step}</p>
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
                  className="btn-kb-ghost w-full group mb-6"
                >
                  {t('ดูผลงานของเรา', 'See our work')}
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
                      <span className="text-sm">{t(highlight)}</span>
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
                  aria-label={`${t('ขั้นตอนที่', 'Step')} ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeStep 
                      ? 'w-10 bg-kb-orange' 
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
