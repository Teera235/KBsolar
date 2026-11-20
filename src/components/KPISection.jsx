import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Percent, Clock, Leaf, TrendingUp, Shield, Award, Sun, Battery, Wrench } from 'lucide-react';
import { useLang } from '../i18n';
import { SectionHeading, CountUp } from './ui';

const KPISection = () => {
  const { t } = useLang();
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // Reviews data
  const reviews = [
    {
      id: 1,
      text: t('ติดตั้งโซลาร์เซลล์กับ KB Solar มา 1 ปีแล้ว ค่าไฟลดลงเกือบ 70% ทีมงานให้คำปรึกษาดีมาก ติดตั้งเรียบร้อย รวดเร็ว และบริการหลังการขายดีเยี่ยม ประทับใจมากครับ', 'We\'ve had our KB Solar system for a year and our electricity bill is down almost 70%. The team gave great advice, the installation was neat and quick, and the after-sales service is excellent. Very impressed.'),
      name: t('คุณสมชาย วงศ์ประเสริฐ', 'Khun Somchai Wongprasert'),
      role: t('เจ้าของโรงงาน', 'Factory owner'),
      avatar: t('คส', 'S')
    },
    {
      id: 2,
      text: t('เลือก KB Solar เพราะเป็นบริษัทที่มีประสบการณ์และมาตรฐาน ทีมช่างมืออาชีพ อุปกรณ์คุณภาพดี ระบบทำงานได้ดีมาก ค่าไฟลดลงชัดเจน คุ้มค่ากับการลงทุนจริงๆ', 'I chose KB Solar because they are experienced and work to proper standards. Professional technicians, good-quality equipment, and the system works very well. Our bill has dropped noticeably. Truly worth the investment.'),
      name: t('คุณวิไล สุขสวัสดิ์', 'Khun Wilai Suksawat'),
      role: t('เจ้าของร้านอาหาร', 'Restaurant owner'),
      avatar: t('คว', 'W')
    },
    {
      id: 3,
      text: t('ใช้ไฟเยอะมากเพราะเปิดแอร์ทั้งวัน ตัดสินใจติดโซลาร์เซลล์กับ KB Solar เป็นการตัดสินใจที่ถูกต้อง ค่าไฟลดลงมาก ทีมงานดูแลดี มีปัญหาอะไรติดต่อได้ตลอด', 'We use a lot of power because the air conditioning runs all day. Going solar with KB Solar was the right decision. Our bill has dropped a lot, the team looks after us well, and we can reach them any time there\'s an issue.'),
      name: t('คุณประสิทธิ์ มั่นคง', 'Khun Prasit Mankhong'),
      role: t('เจ้าของคลินิก', 'Clinic owner'),
      avatar: t('คป', 'P')
    },
    {
      id: 4,
      text: t('โรงแรมเราใช้ไฟเยอะมาก หลังติดตั้งโซลาร์เซลล์ ค่าไฟลดลงเกือบครึ่งหนึ่ง ระบบทำงานเสถียร ไม่มีปัญหา ทีม KB Solar ให้บริการดีมาก แนะนำเลยครับ', 'Our hotel uses a lot of electricity. Since installing solar, the bill is down by almost half. The system is stable with no problems, and the KB Solar team gives great service. Highly recommended.'),
      name: t('คุณสุรชัย เจริญผล', 'Khun Surachai Charoenphon'),
      role: t('ผู้จัดการโรงแรม', 'Hotel manager'),
      avatar: t('คส', 'S')
    },
    {
      id: 5,
      text: t('ร้านสะดวกซื้อเราเปิด 24 ชั่วโมง ค่าไฟแพงมาก หลังติดโซลาร์เซลล์ ประหยัดได้เดือนละหลายหมื่น คืนทุนเร็วกว่าที่คิด ขอบคุณ KB Solar มากครับ', 'Our convenience store is open 24 hours, so electricity was very expensive. With solar we save tens of thousands of baht a month, and it paid for itself faster than expected. Thank you, KB Solar.'),
      name: t('คุณอนุชา ดีใจ', 'Khun Anucha Deejai'),
      role: t('เจ้าของร้านค้า', 'Shop owner'),
      avatar: t('คอ', 'A')
    },
    {
      id: 6,
      text: t('บ้านเราใช้ไฟเยอะ มีแอร์หลายตัว หลังติดโซลาร์เซลล์ ค่าไฟลดลงมาก ระบบทำงานดี ไม่มีปัญหา ทีมงาน KB Solar บริการดีมาก ประทับใจค่ะ', 'Our home uses a lot of power with several air conditioners. Since going solar our bill has dropped a lot, and the system runs well with no problems. The KB Solar team\'s service is excellent. Very impressed.'),
      name: t('คุณมาลี สวยงาม', 'Khun Malee Suayngam'),
      role: t('แม่บ้าน', 'Homemaker'),
      avatar: t('คม', 'M')
    }
  ];

  // Duplicate reviews for infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.3; // Slower speed for better readability

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        // Calculate total height of one set of reviews
        const singleSetHeight = scrollContainer.scrollHeight / 2;
        
        if (scrollPosition >= singleSetHeight) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollTop = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);
  const kpis = [
    { icon: Zap, value: '150,000+', unit: 'kWh', label: t('พลังงานที่ผลิต', 'Energy Generated'), mobileLabel: t('พลังงานที่ผลิตได้', 'Energy Generated'), description: t('พลังงานไฟฟ้าที่ผลิตได้ทั้งหมด', 'Total Energy Generated') },
    { icon: Percent, value: '70', unit: '%', label: t('ลดค่าไฟฟ้า', 'Lower Electricity Bills'), description: t('ค่าไฟฟ้าที่ลดลง', 'Electricity Cost Reduction') },
    { icon: Clock, value: '4-6', unit: t('ปี', 'years'), label: t('ระยะเวลาคืนทุน', 'Payback Time'), description: t('คืนทุนจากค่าไฟที่ประหยัดได้', 'Payback Period') },
    { icon: Leaf, value: '85', unit: t('ตัน', 'Tons'), label: t('ลด CO₂ ต่อปี', 'CO₂ Reduced per Year'), mobileLabel: t('ลด CO₂', 'CO₂ Reduced'), description: t('การลดการปล่อยคาร์บอน', 'Carbon Reduction') }
  ];

  // eslint-disable-next-line no-unused-vars
  const features = [
    { icon: Sun, text: t('ใช้พลังงานสะอาด 100%', '100% clean energy'), mobileText: t('พลังงานสะอาด 100%', '100% clean energy') },
    { icon: Battery, text: t('สำรองไฟเมื่อไฟดับ', 'Backup power during outages') },
    { icon: TrendingUp, text: t('ค่าไฟลดทันทีที่ติดตั้ง', 'Lower bills from day one'), mobileText: t('ค่าไฟลดทันที', 'Instant savings') },
    { icon: Shield, text: t('รับประกันยาวนาน 25 ปี', 'Long 25-year warranty'), mobileText: t('รับประกัน 25 ปี', '25-year warranty') },
    { icon: Wrench, text: t('บริการหลังการขายตลอดชีพ', 'Lifetime after-sales service'), mobileText: t('บริการหลังการขาย', 'After-sales service') },
    { icon: Award, text: t('อุปกรณ์มาตรฐานสากล', 'International-standard equipment'), mobileText: t('อุปกรณ์มาตรฐาน', 'Standard equipment') },
  ];

  // eslint-disable-next-line no-unused-vars
  const achievements = [
    { number: '50+', label: t('โปรเจกต์สำเร็จ', 'Projects completed'), mobileLabel: t('โปรเจกต์', 'Projects') },
    { number: '100%', label: t('ลูกค้าพึงพอใจ', 'Customer satisfaction'), mobileLabel: t('พึงพอใจ', 'Satisfaction') },
    { number: '5+', label: t('ปีประสบการณ์', 'Years of experience') },
    { number: '500kW+', label: t('กำลังติดตั้งรวม', 'Total installed capacity'), mobileLabel: t('กำลังรวม', 'Total capacity') },
  ];

  return (
    <section className="section-dark py-20 lg:py-28 overflow-hidden mobile-full-width">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mobile-container-fix">
        <SectionHeading
          dark
          eyebrow={t('ผลลัพธ์ที่วัดได้', 'Measured results')}
          title={t('ทำไมต้องติดตั้ง', 'Why Go')}
          highlight={t('โซลาร์เซลล์?', 'Solar?')}
          subtitle={
            <>
              <span className="block sm:hidden">{t('ประหยัดค่าไฟ สร้างพลังงานสะอาด', 'Save on electricity, make clean energy')}<br />{t('และคืนทุนได้จริงภายใน 4-6 ปี', 'and get your money back within 4-6 years')}</span>
              <span className="hidden sm:block">{t('ประหยัดค่าไฟ สร้างพลังงานสะอาด และคืนทุนได้จริงภายใน 4-6 ปี', 'Save on electricity, make clean energy, and get your money back within 4-6 years')}</span>
            </>
          }
        />

        {/* Main KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16 kpi-grid-mobile">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="card-kb-dark h-full p-5 lg:p-6 cursor-default kpi-card-mobile mobile-text-container relative overflow-hidden min-h-[180px] lg:min-h-[240px] flex flex-col">
                <div className="w-11 h-11 lg:w-14 lg:h-14 bg-gradient-to-br from-kb-orange to-orange-500 rounded-2xl flex items-center justify-center mb-5 lg:mb-6 shadow-lg shadow-kb-orange/30">
                  <kpi.icon className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="flex items-baseline gap-1.5 mb-3 flex-wrap">
                  <CountUp value={kpi.value} className="text-[1.75rem] sm:text-5xl lg:text-4xl xl:text-5xl font-bold leading-none tracking-tight text-kb-gradient" />
                  <span className="text-sm lg:text-lg text-white/70 font-semibold whitespace-nowrap">{kpi.unit}</span>
                </div>
                <p className="text-white font-bold text-sm lg:text-base break-words leading-snug kpi-label-mobile mobile-break-text mb-1.5">
                  <span className="block sm:hidden">{kpi.mobileLabel || kpi.label}</span>
                  <span className="hidden sm:block">{kpi.label}</span>
                </p>
                <p className="text-xs lg:text-sm text-gray-400 break-words leading-relaxed kpi-description-mobile mobile-break-text">{kpi.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Reviews & Benefits Section */}
        <motion.div 
          className="relative rounded-3xl p-5 sm:p-8 lg:p-12 mb-0 overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundImage: `url(/review-bg.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay so the panel sits in the dark band */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F17]/90 via-[#0B0F17]/75 to-[#0B0F17]/90"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start relative z-10">
            {/* Left - Customer Reviews Scrolling */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                {t('เสียงจากลูกค้าจริง', 'What Our Customers Say')}
              </h3>
              
              {/* Scrolling Reviews Container */}
              <div className="relative h-[450px] overflow-hidden rounded-2xl">
                {/* Soft fade at top and bottom */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#0B0F17] to-transparent z-10" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0B0F17] to-transparent z-10" />
                {/* Scrolling Content */}
                <div 
                  ref={scrollRef}
                  className="h-full overflow-y-hidden space-y-4"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {duplicatedReviews.map((review, index) => (
                    <div key={`${review.id}-${index}`} className="rounded-2xl p-5 mb-4 bg-white/[0.06] border border-white/10 backdrop-blur-sm">
                      <p className="text-gray-200 text-sm leading-relaxed mb-4">
                        "{review.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                          <div className="w-full h-full bg-gradient-to-br from-kb-orange to-amber-500 flex items-center justify-center text-white font-bold">
                            {review.avatar}
                          </div>
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">{review.name}</p>
                          <p className="text-gray-400 text-xs">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Benefits */}
            <div className="card-kb-dark p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                {t('ทำไมต้องเลือก KB Solar', 'Why Choose KB Solar')}
              </h3>
              
              <div className="space-y-6">
                {/* Benefit 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-kb-orange to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-kb-orange/30">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{t('ประสบการณ์กว่า 5 ปี', 'Over 5 Years of Experience')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('ติดตั้งโซลาร์เซลล์มากกว่า 50 โครงการ ทั้งบ้านพักอาศัย โรงงาน และอาคารพาณิชย์ ด้วยทีมงานมืออาชีพและอุปกรณ์คุณภาพสูง', 'More than 50 solar projects installed across homes, factories and commercial buildings, by a professional team using high-quality equipment.')}
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-kb-orange to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-kb-orange/30">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{t('รับประกันครบวงจร', 'Full Warranty Coverage')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('รับประกันแผงโซลาร์เซลล์ 25 ปี อินเวอร์เตอร์ 10 ปี พร้อมบริการหลังการขายตลอดอายุการใช้งาน ดูแลคุณอย่างใกล้ชิด', '25-year warranty on solar panels and 10 years on inverters, plus after-sales service for the life of the system. We stay close and look after you.')}
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-kb-orange to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-kb-orange/30">
                      <Wrench className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{t('บริการครบวงจร', 'End-to-End Service')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('ฟรีสำรวจหน้างาน ออกแบบระบบ ขออนุญาตการไฟฟ้า ติดตั้งโดยทีมช่างมืออาชีพ และบำรุงรักษาระบบอย่างสม่ำเสมอ', 'Free site survey, system design, utility permit applications, installation by professional technicians, and regular system maintenance.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KPISection;
