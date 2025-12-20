import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

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
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-900 via-kb-dark to-gray-900 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kb-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-kb-orange font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How It <span className="text-kb-orange">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            กระบวนการทำงานแบบวิศวกรรม ทุกขั้นตอนมีข้อมูลรองรับ
          </p>
        </motion.div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-[140px] left-[8%] right-[8%] h-1 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gray-700/50" />
              <motion.div 
                className="h-full bg-gradient-to-r from-kb-orange via-amber-400 to-kb-orange rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.3 }}
              />
            </div>
            
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Image Container */}
                  <motion.div 
                    className="relative mb-8"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Glow on hover */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-kb-orange to-amber-500 rounded-2xl opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-500" />
                    
                    {/* Image Box */}
                    <div className="relative w-52 h-52 rounded-2xl overflow-hidden border-2 border-gray-700 group-hover:border-kb-orange transition-all duration-500 shadow-2xl">
                      <img 
                        src={process.env.PUBLIC_URL + step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Step Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-kb-orange to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">{step.step}</span>
                        </div>
                      </div>

                      {/* Hover Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </div>

                    {/* Connection Dot */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                      <motion.div 
                        className="w-4 h-4 bg-kb-orange rounded-full border-4 border-gray-900 shadow-lg shadow-kb-orange/50"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-white font-bold text-xl mb-1 group-hover:text-kb-orange transition-colors">{step.title}</h3>
                  <p className="text-kb-orange/80 text-sm mb-4 font-medium">{step.titleTh}</p>
                  <p className="text-gray-400 text-sm leading-relaxed px-2">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex gap-4 items-start bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-kb-orange/50 shadow-lg">
                    <img 
                      src={process.env.PUBLIC_URL + step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-kb-orange to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xs">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">{step.title}</h3>
                  <p className="text-kb-orange text-sm font-medium">{step.titleTh}</p>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 mb-6">พร้อมเริ่มต้นประหยัดค่าไฟกับเราแล้วหรือยัง?</p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-kb-orange to-amber-500 text-white px-10 py-4 rounded-full font-semibold shadow-lg shadow-kb-orange/30 group"
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
