import React from 'react';
import { Calculator, FileSearch, Smartphone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from './AnimatedSection';
import { SectionHeading, CountUp } from './ui';
import { useLang } from '../i18n';

const WhyUs = () => {
  const { t } = useLang();
  const features = [
    {
      icon: Calculator,
      title: t('ประหยัดค่าไฟแบบคำนวณได้จริง', 'Savings you can actually calculate'),
      description: t('ก่อนเริ่มงาน KB SOLAR จัดทำรายงานคาดการณ์ผลผลิตไฟฟ้ารายเดือนและจุดคืนทุนจากบิลค่าไฟจริงของคุณ ทุกตัวเลขตรวจสอบย้อนกลับได้ ไม่ใช้คำกว้างว่า “ประหยัดได้ถึง” โดยไม่มีที่มา', 'Before work starts, KB SOLAR prepares a report forecasting monthly power generation and the payback point from your real electricity bills. Every figure can be traced back. No vague “save up to” claims without a source.'),
    },
    {
      icon: FileSearch,
      title: t('ทำงานเป็นขั้นตอน ตรวจสอบได้ทุกสเต็ป', 'A clear process you can check at every step'),
      description: t('สำรวจหน้างาน ออกแบบระบบ ยื่นขออนุญาต กฟน./กฟภ. ติดตั้ง และทดสอบระบบ ทุกขั้นตอนมีรูปถ่ายหน้างานและเอกสารส่งถึงเจ้าของบ้าน เพื่อให้คุณรู้สถานะงานได้ตลอดโครงการ', 'Site survey, system design, MEA/PEA permit application, installation and testing. Every step comes with site photos and documents sent to the homeowner, so you know where the job stands throughout the project.'),
    },
    {
      icon: Smartphone,
      title: t('มอนิเตอร์ผลผลิตไฟผ่านแอปมือถือ', 'Monitor your power generation on your phone'),
      description: t('ทุกระบบของ KB SOLAR เชื่อมแอปอินเวอร์เตอร์ให้พร้อมใช้งานตั้งแต่วันส่งมอบ คุณดูกำลังการผลิต ค่าไฟที่ประหยัดได้ และรับแจ้งเตือนเมื่อระบบผิดปกติได้ทันที ไม่ต้องรอบิลค่าไฟหลายเดือนถึงจะรู้', 'Every KB SOLAR system is connected to the inverter app and ready to use from handover day. You can see output and savings, and get an alert the moment something goes wrong, instead of waiting months for your electricity bill to tell you.'),
    },
    {
      icon: MessageCircle,
      title: t('ทีมซัพพอร์ตคนไทย ตอบไวทุกช่องทาง', 'Thai support team, quick to respond on every channel'),
      description: t('แจ้งปัญหาผ่าน LINE โทรศัพท์ หรืออีเมลถึงทีมเทคนิคของ KB SOLAR รับเรื่องภายในวันทำการและนัดเข้าหน้างานตามระยะเวลาในสัญญาบริการ ดูแลโดยทีมงานในประเทศทุกสายงาน', 'Report an issue to the KB SOLAR technical team by LINE, phone or email. We log it within the business day and schedule a site visit within the time set in your service agreement. Every part of the work is handled by our team in Thailand.'),
    },
  ];

  const warranties = [
    { years: '10', label: t('รับประกัน', 'Warranty'), sublabel: 'Inverter' },
    { years: '30', label: t('รับประกัน', 'Warranty'), sublabel: t('แผงโซล่า', 'Solar panels') },
    { years: '3', label: t('รับประกัน', 'Warranty'), sublabel: t('งานติดตั้ง', 'Installation') },
  ];

  return (
    <section 
      id="why-us" 
      className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
      style={{
        backgroundImage: `url(/bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title={t('สิ่งที่คุณจะได้รับเมื่อเลือก', 'What you get when you choose')}
          highlight="KB SOLAR"
        />

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16" staggerDelay={0.15}>
          {features.map((feature, idx) => (
            <StaggerItem key={idx} className="h-full">
              <div className="card-kb flex gap-4 p-6 lg:p-7 h-full">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-kb-orange flex items-center justify-center shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Warranty Bar */}
        <FadeUp delay={0.3}>
          <div className="card-kb p-4 sm:p-6 lg:p-10 warranty-mobile">
            <div className="grid grid-cols-3 divide-x divide-gray-200 warranty-grid-mobile">
              {warranties.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="text-center px-2 sm:px-4 warranty-item-mobile"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-baseline justify-center gap-1 sm:gap-2">
                    <CountUp
                      value={item.years}
                      duration={1.5}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none text-kb-accent warranty-number-mobile"
                    />
                    <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider warranty-years-mobile">
                      <span className="block sm:hidden">{t('ปี', 'YR')}</span>
                      <span className="hidden sm:block">{t('ปี', 'Years')}</span>
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium mt-2 text-xs sm:text-sm warranty-label-mobile">{item.label}</p>
                  <p className="text-gray-900 font-bold text-xs sm:text-sm warranty-sublabel-mobile">{item.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default WhyUs;
