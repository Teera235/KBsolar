import { motion } from 'framer-motion';
import { ArrowRight, Sun, Check, Zap, Users, Award } from 'lucide-react';

const Hero = () => {
  const features = [
    'ฟรีค่าบริการสำรวจหน้างาน',
    'ฟรีค่าออกแบบระบบ',
    'รับประกันงานติดตั้ง 3 ปี',
    'Inverter รับประกัน 5-10 ปี',
    'รับประกันแบตเตอรี่ 7 ปี',
    'รับประกันแผง 12-30 ปี',
  ];

  const stats = [
    { icon: Zap, value: '50+', label: 'โปรเจกต์' },
    { icon: Users, value: '100%', label: 'พึงพอใจ' },
    { icon: Award, value: '5+', label: 'ปีประสบการณ์' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden mobile-full-width bg-section-mobile">
      {/* Background Image with parallax effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img 
          src={process.env.PUBLIC_URL + '/hero-bg.webp'} 
          alt="Solar Panel Background" 
          className="w-full h-full object-cover sm:object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </motion.div>

      {/* Teacher Image with slide animation - Mobile Responsive */}
      <motion.div 
        className="absolute right-[2%] sm:right-[5%] bottom-0 hidden md:block z-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={process.env.PUBLIC_URL + '/teacher.webp'}
          alt="KB Solar Expert"
          className="h-[80vh] sm:h-[90vh] lg:h-screen w-auto object-contain object-bottom"
        />
      </motion.div>

      {/* Teacher Info Card - Mobile Responsive */}
      <motion.div 
        className="absolute bottom-[8%] sm:bottom-[12%] right-[8%] sm:right-[12%] hidden md:block z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div 
          className="bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 sm:px-6 sm:py-5 border border-white/20 shadow-2xl"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <p className="text-kb-orange font-bold text-lg sm:text-xl">ครูบอล โซล่าเซลล์</p>
          <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed mt-2 max-w-[280px] sm:max-w-[320px]">
            ผู้เชี่ยวชาญตัวจริง เจ้าของเพจ 'i am teacher' ที่เน้นให้ความรู้ควบคู่การลงมือทำจริง
          </p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 mobile-container-fix">
        <div className="min-h-screen flex items-center py-16 sm:py-20 pt-24 sm:pt-28">
          <motion.div 
            className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <motion.div 
                className="inline-flex items-center gap-2 bg-kb-orange/20 backdrop-blur-sm px-4 py-2 rounded-full border border-kb-orange/30"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <Sun className="w-4 h-4 text-kb-orange" />
                </motion.div>
                <span className="text-kb-orange text-sm font-semibold">KB Solar Energy</span>
              </motion.div>
            </motion.div>
            
            {/* Headline - Mobile Responsive */}
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              <motion.span 
                className="bg-gradient-to-r from-kb-orange to-amber-400 bg-clip-text text-transparent inline-block pb-1 sm:pb-2"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                KB Solar Energy
              </motion.span>
              <br />
              <span className="mt-1 sm:mt-2 block">Solar Solution ครบวงจร</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-base sm:text-lg leading-relaxed px-1 sm:px-0"
              variants={itemVariants}
            >
              ออกแบบ ติดตั้ง และให้คำปรึกษาระบบโซลาร์เซลล์แบบครบวงจร 
              ด้วยทีมวิศวกรมืออาชีพ พร้อมบริการหลังการขายที่ใส่ใจ
            </motion.p>

            {/* Stats */}
            <motion.div className="flex flex-wrap gap-4 sm:gap-6 py-2" variants={itemVariants}>
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-kb-orange/20 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-kb-orange" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg sm:text-xl">{stat.value}</p>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Feature Checklist - Mobile Responsive */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-5 border border-white/10 mx-1 sm:mx-0"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 gap-y-2 sm:gap-y-3">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1, type: 'spring' }}
                    >
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" strokeWidth={3} />
                    </motion.div>
                    <p className="text-white text-xs sm:text-sm leading-relaxed">{feature}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <p className="text-base sm:text-lg font-bold text-white">
                  ลงทุนวันนี้ <span className="text-kb-orange">คืนทุนไว 4-6 ปี</span>
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons - Mobile Responsive */}
            <motion.div className="flex flex-col sm:flex-row gap-3 px-1 sm:px-0" variants={itemVariants}>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-kb-orange hover:bg-kb-orange-dark text-white px-5 sm:px-6 lg:px-7 py-3 sm:py-4 rounded-full font-semibold transition-colors shadow-lg shadow-kb-orange/30 group text-sm sm:text-base"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                ประเมินยอดประหยัดฟรี
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 sm:px-6 lg:px-7 py-3 sm:py-4 rounded-full font-semibold transition-colors border border-white/20 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                ดูผลงานติดตั้ง
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        {/* Desktop - Mouse Indicator */}
        <motion.div 
          className="hidden sm:flex w-6 h-10 border-2 border-white/40 rounded-full justify-center pt-2 bg-white/5 backdrop-blur-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-3 bg-white/70 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Mobile - Phone Indicator */}
        <motion.div 
          className="block sm:hidden"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="relative w-6 h-10 border-2 border-white/40 rounded-md bg-white/5 backdrop-blur-sm">
            {/* Phone Screen */}
            <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-white/10 rounded-sm">
              {/* Screen Content Lines */}
              <div className="absolute top-1 left-0.5 right-0.5 space-y-0.5">
                <div className="h-0.5 bg-white/30 rounded-full"></div>
                <div className="h-0.5 bg-white/20 rounded-full w-3/4"></div>
                <div className="h-0.5 bg-white/20 rounded-full w-1/2"></div>
              </div>
              {/* Scroll Indicator Dot */}
              <motion.div 
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-kb-orange rounded-full"
                animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            {/* Home Button */}
            <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border border-white/30 rounded-full bg-white/10"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
