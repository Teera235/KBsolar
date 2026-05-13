import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Percent, Clock, Leaf, TrendingUp, Shield, Award, Sun, Battery, Wrench } from 'lucide-react';

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

const ReviewsAndBenefits = () => {
  const reviews = [
    { id: 1, text: 'ติดตั้งโซลาร์เซลล์กับ KB Solar มา 1 ปีแล้ว ค่าไฟลดลงเกือบ 70% ทีมงานให้คำปรึกษาดีมาก ติดตั้งเรียบร้อย รวดเร็ว และบริการหลังการขายดีเยี่ยม ประทับใจมากครับ', name: 'คุณสมชาย วงศ์ประเสริฐ', role: 'เจ้าของโรงงาน', avatar: 'คส' },
    { id: 2, text: 'เลือก KB Solar เพราะเป็นบริษัทที่มีประสบการณ์และมาตรฐาน ทีมช่างมืออาชีพ อุปกรณ์คุณภาพดี ระบบทำงานได้ดีมาก ค่าไฟลดลงชัดเจน คุ้มค่ากับการลงทุนจริงๆ', name: 'คุณวิไล สุขสวัสดิ์', role: 'เจ้าของร้านอาหาร', avatar: 'คว' },
    { id: 3, text: 'ใช้ไฟเยอะมากเพราะเปิดแอร์ทั้งวัน ตัดสินใจติดโซลาร์เซลล์กับ KB Solar เป็นการตัดสินใจที่ถูกต้อง ค่าไฟลดลงมาก ทีมงานดูแลดี มีปัญหาอะไรติดต่อได้ตลอด', name: 'คุณประสิทธิ์ มั่นคง', role: 'เจ้าของคลินิก', avatar: 'คป' },
    { id: 4, text: 'โรงแรมเราใช้ไฟเยอะมาก หลังติดตั้งโซลาร์เซลล์ ค่าไฟลดลงเกือบครึ่งหนึ่ง ระบบทำงานเสถียร ไม่มีปัญหา ทีม KB Solar ให้บริการดีมาก แนะนำเลยครับ', name: 'คุณสุรชัย เจริญผล', role: 'ผู้จัดการโรงแรม', avatar: 'คส' },
    { id: 5, text: 'ร้านสะดวกซื้อเราเปิด 24 ชั่วโมง ค่าไฟแพงมาก หลังติดโซลาร์เซลล์ ประหยัดได้เดือนละหลายหมื่น คืนทุนเร็วกว่าที่คิด ขอบคุณ KB Solar มากครับ', name: 'คุณอนุชา ดีใจ', role: 'เจ้าของร้านค้า', avatar: 'คอ' },
    { id: 6, text: 'บ้านเราใช้ไฟเยอะ มีแอร์หลายตัว หลังติดโซลาร์เซลล์ ค่าไฟลดลงมาก ระบบทำงานดี ไม่มีปัญหา ทีมงาน KB Solar บริการดีมาก ประทับใจค่ะ', name: 'คุณมาลี สวยงาม', role: 'แม่บ้าน', avatar: 'คม' },
  ];

  const duplicatedReviews = [...reviews, ...reviews];
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.3;
    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        const singleSetHeight = scrollContainer.scrollHeight / 2;
        if (scrollPosition >= singleSetHeight) scrollPosition = 0;
        scrollContainer.scrollTop = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <motion.div
      className="relative rounded-3xl p-8 lg:p-12 mb-0 shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        backgroundImage: `url(/review-bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="grid lg:grid-cols-2 gap-8 items-start relative z-10">
        {/* Left — scrolling reviews */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">เสียงจากลูกค้าจริง</h3>
          <div className="relative h-[450px] overflow-hidden rounded-2xl">
            <div
              ref={scrollRef}
              className="h-full overflow-y-hidden space-y-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {duplicatedReviews.map((review, index) => (
                <div key={`${review.id}-${index}`} className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-gray-200/50 mb-4">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-sm">{review.name}</p>
                      <p className="text-gray-500 text-xs">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — benefits */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-xl border border-white/20">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">เหตุผลที่ลูกค้าเลือก KB Solar</h3>
          <div className="space-y-6">
            {[
              { icon: Shield, title: 'ติดตั้งแล้วกว่า 500 โปรเจกต์', desc: 'ครอบคลุมทุกประเภท ทั้งบ้านพักอาศัย โรงงานอุตสาหกรรม โรงแรม และอาคารพาณิชย์ ทั่วทุกภาคของประเทศไทย' },
              { icon: Award, title: 'คืนทุนเร็ว เฉลี่ยแค่ 4–6 ปี', desc: 'ลูกค้าส่วนใหญ่ประหยัดค่าไฟได้ 50–80% ต่อเดือน ระบบมีอายุการใช้งานกว่า 25 ปี คุ้มค่าทุกบาทที่ลงทุน' },
              { icon: Wrench, title: 'ดูแลหลังการขายตลอดชีพ', desc: 'ทีม Support พร้อมตอบทุกปัญหา มีระบบ Monitoring ออนไลน์ตรวจสอบการผลิตไฟได้ตลอด 24 ชั่วโมง' },
            ].map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <b.icon className="w-7 h-7 text-kb-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">{b.title}</h4>
                  <p className="text-white/90 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const KPISection = () => {
  const kpis = [
    { icon: Zap, value: 150000, suffix: '+', unit: 'kWh', label: 'พลังงานที่ผลิต', mobileLabel: 'พลังงานที่ผลิตได้', description: 'Total Energy Generated' },
    { icon: Percent, value: 70, suffix: '', unit: '%', label: 'ลดค่าไฟฟ้า', description: 'Electricity Cost Reduction' },
    { icon: Clock, value: '4-6', suffix: '', unit: 'ปี', label: 'ระยะเวลาคืนทุน', description: 'Payback Period', isText: true },
    { icon: Leaf, value: 85, suffix: '', unit: 'Tons', label: 'ลด CO₂ ต่อปี', mobileLabel: 'ลด CO₂', description: 'Carbon Reduction' },
  ];

  // eslint-disable-next-line no-unused-vars
  const features = [
    { icon: Sun, text: 'ใช้พลังงานสะอาด 100%', mobileText: 'พลังงานสะอาด 100%' },
    { icon: Battery, text: 'สำรองไฟเมื่อไฟดับ' },
    { icon: TrendingUp, text: 'ค่าไฟลดทันทีที่ติดตั้ง', mobileText: 'ค่าไฟลดทันที' },
    { icon: Shield, text: 'รับประกันยาวนาน 25 ปี', mobileText: 'รับประกัน 25 ปี' },
    { icon: Wrench, text: 'บริการหลังการขายตลอดชีพ', mobileText: 'บริการหลังการขาย' },
    { icon: Award, text: 'อุปกรณ์มาตรฐานสากล', mobileText: 'อุปกรณ์มาตรฐาน' },
  ];

  // eslint-disable-next-line no-unused-vars
  const achievements = [
    { number: '50+', label: 'โปรเจกต์สำเร็จ', mobileLabel: 'โปรเจกต์' },
    { number: '100%', label: 'ลูกค้าพึงพอใจ', mobileLabel: 'พึงพอใจ' },
    { number: '5+', label: 'ปีประสบการณ์' },
    { number: '500kW+', label: 'กำลังติดตั้งรวม', mobileLabel: 'กำลังรวม' },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden mobile-full-width bg-section-mobile">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-kb-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mobile-container-fix">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-kb-dark mb-6">
            ทำไมต้องติดตั้งโซลาร์เซลล์?
          </h2>
          <p className="text-kb-gray max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
            <span className="block sm:hidden">ประหยัดค่าไฟ สร้างพลังงานสะอาด<br />และคืนทุนได้จริงภายใน 4-6 ปี</span>
            <span className="hidden sm:block">ประหยัดค่าไฟ สร้างพลังงานสะอาด และคืนทุนได้จริงภายใน 4-6 ปี</span>
          </p>
        </motion.div>

        {/* Main KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 kpi-grid-mobile">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-5 lg:p-8 shadow-xl border-2 border-gray-100 hover:border-kb-orange/50 cursor-default group kpi-card-mobile mobile-text-container relative overflow-hidden min-h-[180px] lg:min-h-[220px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-kb-orange/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 h-full flex flex-col">
                <motion.div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-kb-orange to-orange-500 rounded-2xl flex items-center justify-center mb-4 lg:mb-5 shadow-lg shadow-kb-orange/30 group-hover:scale-110 transition-transform">
                  <kpi.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </motion.div>
                <div className="flex items-baseline gap-1 mb-3 flex-wrap">
                  <span className="text-xl lg:text-3xl xl:text-4xl font-bold text-kb-dark leading-none">
                    {kpi.isText ? kpi.value : <AnimatedNumber value={kpi.value} suffix={kpi.suffix} />}
                  </span>
                  <span className="text-sm lg:text-lg text-kb-dark/70 font-bold whitespace-nowrap">{kpi.unit}</span>
                </div>
                <p className="text-kb-dark font-bold text-sm lg:text-base break-words leading-snug kpi-label-mobile mobile-break-text mb-2">
                  <span className="block sm:hidden">{kpi.mobileLabel || kpi.label}</span>
                  <span className="hidden sm:block">{kpi.label}</span>
                </p>
                <p className="text-xs lg:text-sm text-kb-gray break-words leading-relaxed kpi-description-mobile mobile-break-text">{kpi.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-kb-orange to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* Reviews + Why KB Solar */}
        <ReviewsAndBenefits />
      </div>
    </section>
  );
};

export default KPISection;
