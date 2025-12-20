import React from 'react';
import { BarChart3, Cpu, Layers, Award, CheckCircle, TrendingUp, Database, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, AnimatedCounter } from './AnimatedSection';

const AboutUs = () => {
  const values = [
    {
      icon: Database,
      secondaryIcon: BarChart3,
      title: 'Study',
      description: 'วิเคราะห์ข้อมูลการใช้ไฟฟ้าจริง ด้วยซอฟต์แวร์จำลองระบบระดับมืออาชีพ',
      gradient: 'from-orange-500 to-amber-400'
    },
    {
      icon: TrendingUp,
      secondaryIcon: Cpu,
      title: 'Learn',
      description: 'เรียนรู้และอัปเดตเทคโนโลยีใหม่อย่างต่อเนื่อง เพื่อโซลูชันที่ดีที่สุด',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Layers,
      secondaryIcon: Settings,
      title: 'Build with Understanding',
      description: 'ออกแบบและติดตั้งระบบด้วยความเข้าใจลึกซึ้ง ไม่ใช่แค่ติดตั้งแล้วจบ',
      gradient: 'from-emerald-500 to-teal-400'
    }
  ];

  const highlights = [
    'ทีมวิศวกรที่มีประสบการณ์',
    'ใช้อุปกรณ์คุณภาพสูงจากแบรนด์ชั้นนำ',
    'บริการหลังการขายที่ใส่ใจ',
    'รับประกันงานติดตั้งและอุปกรณ์',
    'ให้คำปรึกษาฟรี ไม่มีค่าใช้จ่าย'
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-kb-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <SlideLeft>
            <div>
              <span className="inline-flex items-center gap-2 text-kb-orange font-semibold text-sm uppercase tracking-wider mb-3">
                <Award className="w-4 h-4" />
                About Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-kb-dark mt-2 mb-8">
                KB Energy Solution
              </h2>
              
              {/* Quote Section - Enhanced */}
              <motion.div 
                className="relative bg-white rounded-2xl p-8 mb-10 border-l-4 border-kb-orange shadow-lg shadow-kb-orange/5"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-kb-orange rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-serif">"</span>
                </div>
                <p className="text-kb-dark font-semibold text-xl lg:text-2xl italic leading-relaxed">
                  "Study, Learn, and Build with Understanding"
                </p>
                <p className="text-kb-gray mt-4 leading-relaxed">
                  เราเชื่อว่าการติดตั้งโซลาร์เซลล์ที่ดี ต้องเริ่มจากความเข้าใจ 
                  ไม่ใช่แค่ขายแผงแล้วจบ
                </p>
              </motion.div>

              {/* Description - Enhanced Line Spacing */}
              <div className="space-y-6 mb-10">
                <p className="text-kb-gray leading-loose text-base">
                  KB Energy Solution เป็นบริษัทที่ให้บริการออกแบบ ติดตั้ง และให้คำปรึกษาระบบโซลาร์เซลล์แบบครบวงจร 
                  เราทำหน้าที่เป็น <span className="text-kb-dark font-medium">"Energy Educator"</span> ที่ช่วยให้ลูกค้าเข้าใจระบบพลังงานแสงอาทิตย์อย่างแท้จริง 
                  ก่อนตัดสินใจลงทุน
                </p>

                <p className="text-kb-gray leading-loose text-base">
                  ทุกโปรเจกต์ของเราเริ่มต้นจากการ<span className="text-kb-dark font-medium">วิเคราะห์ข้อมูลจริง</span> ไม่ใช่การคาดเดา 
                  เราใช้<span className="text-kb-dark font-medium">ซอฟต์แวร์จำลองระบบ</span> วิเคราะห์พฤติกรรมการใช้ไฟฟ้า 
                  และออกแบบระบบที่เหมาะสมกับความต้องการของลูกค้าแต่ละราย
                </p>
              </div>

              {/* Highlights - Enhanced */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-sm"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-kb-dark font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  ทำไมต้องเลือกเรา
                </h4>
                <ul className="space-y-3">
                  {highlights.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center gap-3 text-kb-gray"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 bg-kb-orange rounded-full flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </SlideLeft>

          {/* Values - Enhanced Cards */}
          <SlideRight>
            <StaggerContainer className="space-y-5" staggerDelay={0.15}>
              {values.map((value, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="group bg-white rounded-2xl p-6 shadow-md shadow-gray-100/50 border border-gray-100/80 hover:shadow-xl hover:shadow-gray-200/50 hover:border-kb-orange/20 transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-start gap-5">
                      {/* Duotone Icon Container */}
                      <div className="relative flex-shrink-0">
                        <motion.div 
                          className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <value.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        {/* Secondary Icon - Floating */}
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-lg shadow-md flex items-center justify-center">
                          <value.secondaryIcon className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-kb-dark mb-2 group-hover:text-kb-orange transition-colors">{value.title}</h3>
                        <p className="text-kb-gray leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Stats - Glassmorphism Style */}
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <motion.div 
                  className="relative overflow-hidden rounded-2xl p-5 text-center bg-gradient-to-br from-kb-dark/95 to-kb-dark backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-kb-orange/10 to-transparent" />
                  <div className="relative">
                    <p className="text-4xl font-bold bg-gradient-to-r from-kb-orange to-amber-400 bg-clip-text text-transparent">
                      <AnimatedCounter value={50} suffix="+" />
                    </p>
                    <p className="text-gray-400 text-sm mt-1 font-medium">Projects</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="relative overflow-hidden rounded-2xl p-5 text-center bg-gradient-to-br from-kb-dark/95 to-kb-dark backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
                  <div className="relative">
                    <p className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      <AnimatedCounter value={100} suffix="%" />
                    </p>
                    <p className="text-gray-400 text-sm mt-1 font-medium">Satisfaction</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="relative overflow-hidden rounded-2xl p-5 text-center bg-gradient-to-br from-kb-dark/95 to-kb-dark backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                  <div className="relative">
                    <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      <AnimatedCounter value={5} suffix="+" />
                    </p>
                    <p className="text-gray-400 text-sm mt-1 font-medium">Years Exp.</p>
                  </div>
                </motion.div>
              </div>
            </FadeUp>
          </SlideRight>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
