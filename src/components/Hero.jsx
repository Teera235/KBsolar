import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sun, Check, Zap, Users, Award, ChevronDown } from 'lucide-react';
import { useLang } from '../i18n';
import { CountUp } from './ui';

const Hero = () => {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();
  const features = [
    t('ฟรีค่าบริการสำรวจหน้างาน', 'Free on-site survey'),
    t('ฟรีค่าออกแบบระบบ', 'Free system design'),
    t('รับประกันงานติดตั้ง 3 ปี', '3-year installation warranty'),
    t('Inverter รับประกัน 5-10 ปี', '5-10 year Inverter warranty'),
    t('รับประกันแบตเตอรี่ 7 ปี', '7-year battery warranty'),
    t('รับประกันแผง 12-30 ปี', '12-30 year panel warranty'),
  ];

  const stats = [
    { icon: Zap, value: '50+', label: t('โปรเจกต์', 'Projects') },
    { icon: Users, value: '100%', label: t('พึงพอใจ', 'Satisfaction') },
    { icon: Award, value: '5+', label: t('ปีประสบการณ์', 'Years of experience') },
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

  // Scroll to the section right after the hero (Partners on the home page)
  const scrollToNext = (e) => {
    const next = e.currentTarget.closest('section')?.nextElementSibling;
    if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="on-dark relative min-h-screen overflow-hidden mobile-full-width bg-section-mobile">
      {/* Background Image with parallax effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img 
          src="/media/hero-2000.webp"
          srcSet="/media/hero-1200.webp 1200w, /media/hero-2000.webp 2000w"
          sizes="100vw"
          fetchpriority="high"
          alt="" 
          className="w-full h-full object-cover sm:object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="hero-sweep" />
      </motion.div>

      {/* Teacher Image with slide animation - Mobile Responsive */}
      <motion.div 
        className="absolute right-[2%] sm:right-[5%] bottom-0 hidden md:block z-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Soft orange glow behind Kru Ball */}
        <div aria-hidden="true" className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square bg-kb-orange/30 blur-3xl rounded-full pointer-events-none" />
        <img
          src="/teacher.webp"
          alt={t('ผู้เชี่ยวชาญ KB Solar', 'KB Solar Expert')}
          className="relative h-[80vh] sm:h-[90vh] lg:h-screen w-auto object-contain object-bottom"
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
          <p className="text-kb-orange font-bold text-lg sm:text-xl">{t('ครูบอล โซล่าเซลล์', 'Kru Ball Solar Cell')}</p>
          <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed mt-2 max-w-[280px] sm:max-w-[320px]">
            {t(
              "ผู้เชี่ยวชาญตัวจริง เจ้าของเพจ 'i am teacher' ที่เน้นให้ความรู้ควบคู่การลงมือทำจริง",
              "A hands-on expert and owner of the 'i am teacher' page, who teaches solar alongside real installation work"
            )}
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
              <div className="inline-flex items-center gap-2 bg-kb-orange/20 backdrop-blur-sm px-4 py-2 rounded-full border border-kb-orange/30">
                <Sun className="w-4 h-4 text-kb-orange" />
                <span className="text-kb-orange text-sm font-semibold">KB Solar Energy</span>
              </div>
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
              <span className="mt-1 sm:mt-2 block">{t('Solar Solution ครบวงจร', 'Complete Solar Solutions')}</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-base sm:text-lg leading-relaxed px-1 sm:px-0"
              variants={itemVariants}
            >
              {t(
                'ออกแบบ ติดตั้ง และให้คำปรึกษาระบบโซลาร์เซลล์แบบครบวงจร ด้วยทีมวิศวกรมืออาชีพ พร้อมบริการหลังการขายที่ใส่ใจ',
                'End-to-end solar design, installation and consulting by a professional engineering team, with attentive after-sales service.'
              )}
            </motion.p>

            {/* Stats */}
            <motion.div className="flex flex-wrap gap-4 sm:gap-6 py-2" variants={itemVariants}>
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-kb-orange/20 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-kb-orange" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl sm:text-2xl leading-none"><CountUp value={stat.value} /></p>
                    <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                  </div>
                </div>
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
                  {t('ลงทุนวันนี้', 'Invest today,')} <span className="text-kb-orange">{t('คืนทุนไว 4-6 ปี', 'pay back in 4-6 years')}</span>
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons - Mobile Responsive */}
            <motion.div className="flex flex-col sm:flex-row gap-3 px-1 sm:px-0" variants={itemVariants}>
              <a href="#contact" className="btn-kb group text-sm sm:text-base">
                {t('ประเมินยอดประหยัดฟรี', 'Get a free savings estimate')}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="btn-kb-ghost text-sm sm:text-base">
                {t('ดูผลงานติดตั้ง', 'See our installations')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue: gentle bob, click goes to the next section */}
      <motion.button
        type="button"
        onClick={scrollToNext}
        aria-label={t('เลื่อนลงไปส่วนถัดไป', 'Scroll down to the next section')}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kb-orange rounded-full p-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="hidden sm:flex w-6 h-10 border-2 border-current rounded-full justify-center pt-2">
          <span className="w-1 h-2 bg-current rounded-full" />
        </span>
        <motion.span
          className="flex"
          animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
