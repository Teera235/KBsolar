import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Survey',
      titleTh: 'สำรวจพื้นที่',
      description: 'สำรวจหน้างานจริง วัดขนาดหลังคา ตรวจสอบโครงสร้าง และประเมินทิศทางแสงอาทิตย์',
      image: '/process/servey.jpg'
    },
    {
      step: '02',
      title: 'Load Analysis',
      titleTh: 'วิเคราะห์โหลด',
      description: 'วิเคราะห์พฤติกรรมการใช้ไฟฟ้า ศึกษาบิลค่าไฟย้อนหลัง เพื่อออกแบบระบบที่เหมาะสม',
      image: '/process/Load Analysis.jpg'
    },
    {
      step: '03',
      title: 'System Simulation',
      titleTh: 'จำลองระบบ',
      description: 'จำลองการผลิตไฟฟ้าด้วยซอฟต์แวร์ PVsyst คำนวณผลตอบแทน ROI และระยะเวลาคืนทุน',
      image: '/process/System Simulation.png'
    },
    {
      step: '04',
      title: 'Installation',
      titleTh: 'ติดตั้งระบบ',
      description: 'ติดตั้งโดยทีมช่างมืออาชีพ ตามมาตรฐานความปลอดภัย พร้อมทดสอบระบบ',
      image: '/process/Installation.jpg'
    },
    {
      step: '05',
      title: 'Monitoring',
      titleTh: 'ติดตามผล',
      description: 'ระบบ Monitoring ติดตามการผลิตไฟฟ้าแบบ Real-time พร้อมรายงานประจำเดือน',
      image: '/process/Monitoring.png'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-kb-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-kb-orange font-semibold text-sm uppercase tracking-wider">Process</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            กระบวนการทำงานแบบวิศวกรรม ทุกขั้นตอนมีข้อมูลรองรับ
          </p>
        </motion.div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-[10%] right-[10%] h-1 bg-gray-700 rounded-full">
              <motion.div 
                className="h-full bg-gradient-to-r from-kb-orange via-amber-500 to-kb-orange rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Image Box */}
                  <motion.div 
                    className="relative w-44 h-44 rounded-2xl overflow-hidden mb-6 border-2 border-gray-700 hover:border-kb-orange transition-all duration-300 group shadow-xl"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <img 
                      src={process.env.PUBLIC_URL + step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Step Number Badge */}
                    <div className="absolute top-3 left-3 w-10 h-10 bg-kb-orange rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-kb-orange text-sm mb-3">{step.titleTh}</p>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed px-1">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center">
                {/* Image */}
                <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-kb-orange/50 shadow-lg">
                  <img 
                    src={process.env.PUBLIC_URL + step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-kb-orange to-gray-700 mt-2" />
                )}
              </div>
              <div className="flex-1 pb-4">
                <span className="inline-block bg-kb-orange/20 text-kb-orange font-bold text-xs px-2 py-1 rounded-md mb-2">{step.step}</span>
                <h3 className="text-white font-bold text-lg">{step.title}</h3>
                <p className="text-kb-orange text-sm">{step.titleTh}</p>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-kb-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            เริ่มต้นกับเรา
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
