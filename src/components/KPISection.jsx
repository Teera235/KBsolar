import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Percent, Clock, Leaf, TrendingUp, Shield, Award, Sun, Battery, Wrench, CheckCircle } from 'lucide-react';

const AnimatedNumber = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numValue = parseInt(value.toString().replace(/[^0-9]/g, ''));
          const duration = 2000;
          const steps = 60;
          const increment = numValue / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numValue) {
              setCount(numValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const KPISection = () => {
  const kpis = [
    { icon: Zap, value: 150000, suffix: '+', unit: 'kWh/year', label: 'พลังงานที่ผลิต', mobileLabel: 'พลังงานที่ผลิตได้ต่อปี', description: 'Total Energy Generated' },
    { icon: Percent, value: 70, suffix: '', unit: '%', label: 'ลดค่าไฟฟ้า', description: 'Electricity Cost Reduction' },
    { icon: Clock, value: '4-6', suffix: '', unit: 'ปี', label: 'ระยะเวลาคืนทุน', description: 'Payback Period', isText: true },
    { icon: Leaf, value: 85, suffix: '', unit: 'Tons', label: 'ลด CO₂ ต่อปี', mobileLabel: 'ลด CO₂', description: 'Carbon Reduction' }
  ];

  const features = [
    { icon: Sun, text: 'ใช้พลังงานสะอาด 100%', mobileText: 'พลังงานสะอาด 100%' },
    { icon: Battery, text: 'สำรองไฟเมื่อไฟดับ' },
    { icon: TrendingUp, text: 'ค่าไฟลดทันทีที่ติดตั้ง', mobileText: 'ค่าไฟลดทันที' },
    { icon: Shield, text: 'รับประกันยาวนาน 25 ปี', mobileText: 'รับประกัน 25 ปี' },
    { icon: Wrench, text: 'บริการหลังการขายตลอดชีพ', mobileText: 'บริการหลังการขาย' },
    { icon: Award, text: 'อุปกรณ์มาตรฐานสากล', mobileText: 'อุปกรณ์มาตรฐาน' },
  ];

  const achievements = [
    { number: '50+', label: 'โปรเจกต์สำเร็จ', mobileLabel: 'โปรเจกต์' },
    { number: '100%', label: 'ลูกค้าพึงพอใจ', mobileLabel: 'พึงพอใจ' },
    { number: '5+', label: 'ปีประสบการณ์' },
    { number: '500kW+', label: 'กำลังติดตั้งรวม', mobileLabel: 'กำลังรวม' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden mobile-full-width bg-section-mobile">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-kb-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mobile-container-fix">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-kb-orange font-semibold text-sm uppercase tracking-wider">Why Solar?</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            ทำไมต้องติดตั้งโซลาร์เซลล์?
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0 leading-relaxed">
            <span className="block sm:hidden">ประหยัดค่าไฟ สร้างพลังงานสะอาด<br />และคืนทุนได้จริงภายใน 4-6 ปี</span>
            <span className="hidden sm:block">ประหยัดค่าไฟ สร้างพลังงานสะอาด และคืนทุนได้จริงภายใน 4-6 ปี</span>
          </p>
        </motion.div>

        {/* Main KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 mb-16 kpi-grid-mobile">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(249, 115, 22, 0.15)' }}
              className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-100 cursor-default group kpi-card-mobile mobile-text-container"
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-kb-orange to-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg shadow-kb-orange/20 group-hover:scale-110 transition-transform"
              >
                <kpi.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
              </motion.div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-none">
                  {kpi.isText ? kpi.value : <AnimatedNumber value={kpi.value} suffix={kpi.suffix} />}
                </span>
                <span className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium">{kpi.unit}</span>
              </div>
              <p className="text-gray-900 font-semibold text-sm sm:text-base break-words leading-tight kpi-label-mobile mobile-break-text">
                <span className="block sm:hidden">{kpi.mobileLabel || kpi.label}</span>
                <span className="hidden sm:block">{kpi.label}</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-400 break-words kpi-description-mobile mobile-break-text">{kpi.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div 
          className="bg-gray-900 rounded-3xl p-8 lg:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Text */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                ข้อดีของการติดตั้ง<span className="text-kb-orange">โซลาร์เซลล์</span>
              </h3>
              <p className="text-gray-400 mb-6">
                การลงทุนที่คุ้มค่าที่สุดสำหรับบ้านและธุรกิจ ประหยัดค่าไฟได้ทันที และยังช่วยรักษาสิ่งแวดล้อม
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-4 features-mobile">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 sm:gap-3 feature-item-mobile"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-kb-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-kb-orange" />
                    </div>
                    <span className="text-gray-300 text-xs sm:text-sm break-words leading-tight feature-text-mobile mobile-card-text">
                      <span className="block sm:hidden">{feature.mobileText || feature.text}</span>
                      <span className="hidden sm:block">{feature.text}</span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 achievements-mobile">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 text-center border border-white/10 achievement-card-mobile"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                >
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-kb-orange mb-1 achievement-number-mobile">{item.number}</p>
                  <p className="text-gray-400 text-xs sm:text-sm break-words leading-tight achievement-label-mobile mobile-card-text">
                    <span className="block sm:hidden">{item.mobileLabel || item.label}</span>
                    <span className="hidden sm:block">{item.label}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-6 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-gray-500">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm">ฟรีสำรวจหน้างาน</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm">ฟรีออกแบบระบบ</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm">ฟรีขออนุญาตการไฟฟ้า</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm">ผ่อน 0% นาน 10 เดือน</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KPISection;
