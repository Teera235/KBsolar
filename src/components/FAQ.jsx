import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from './AnimatedSection';
import { useLang } from '../i18n';
import { SectionHeading } from './ui';

const FAQ = () => {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: t('ติดตั้งโซลาร์เซลล์คุ้มค่าไหม?', 'Is installing solar panels worth it?'),
      answer: t('คุ้มค่ามากครับ ด้วยราคาแผงโซลาร์ที่ลดลงและค่าไฟที่เพิ่มขึ้นทุกปี การติดตั้งโซลาร์เซลล์สามารถคืนทุนได้ภายใน 4-6 ปี และใช้งานได้นานกว่า 25 ปี หมายความว่าคุณจะได้ไฟฟ้าฟรีอีกกว่า 20 ปี ประหยัดได้หลายแสนบาทตลอดอายุการใช้งาน', 'Yes, very much so. Panel prices keep falling while electricity rates rise every year, so a solar system can pay for itself within 4-6 years and lasts more than 25 years. That means 20+ years of free electricity, saving several hundred thousand baht over the system\'s lifetime.'),
    },
    {
      question: t('ระบบ On-Grid, Hybrid, Off-Grid ต่างกันอย่างไร?', 'What is the difference between On-Grid, Hybrid and Off-Grid systems?'),
      answer: t('• On-Grid: เชื่อมต่อกับการไฟฟ้า ประหยัดค่าไฟได้ทันที แต่ไม่มีสำรองไฟเมื่อไฟดับ ราคาถูกที่สุด\n• Hybrid: มีแบตเตอรี่สำรองไฟเมื่อไฟดับ + ประหยัดค่าไฟ เหมาะกับบ้านที่ต้องการความมั่นคงด้านพลังงาน\n• Off-Grid: ระบบอิสระ 100% ไม่ต้องพึ่งการไฟฟ้าเลย เหมาะกับพื้นที่ห่างไกลหรือไม่มีไฟฟ้าเข้าถึง', '• On-Grid: connected to the utility grid. Cuts your bill right away but gives no backup power during outages. The lowest-cost option.\n• Hybrid: battery backup during outages + lower bills. Suits homes that want reliable power.\n• Off-Grid: 100% independent, no reliance on the grid at all. Suits remote areas or places without grid access.'),
    },
    {
      question: t('บ้านผมเหมาะกับระบบขนาดเท่าไหร่?', 'What system size is right for my home?'),
      answer: t('ขึ้นอยู่กับค่าไฟรายเดือนของคุณ:\n• ค่าไฟ 1,500-2,500 บาท → ระบบ 3 kW\n• ค่าไฟ 2,500-4,000 บาท → ระบบ 5 kW\n• ค่าไฟ 4,000-6,000 บาท → ระบบ 6-8 kW\n• ค่าไฟ 6,000+ บาท → ระบบ 8-10 kW\n\nเราจะวิเคราะห์ข้อมูลการใช้ไฟจริงของคุณเพื่อออกแบบระบบที่เหมาะสมที่สุด', 'It depends on your monthly electricity bill:\n• 1,500-2,500 THB bill → 3 kW system\n• 2,500-4,000 THB bill → 5 kW system\n• 4,000-6,000 THB bill → 6-8 kW system\n• 6,000+ THB bill → 8-10 kW system\n\nWe analyse your actual usage to design the system that fits you best.'),
    },
    {
      question: t('ต้องขออนุญาตการไฟฟ้าไหม?', 'Do I need permission from the electricity authority?'),
      answer: t('ระบบ On-Grid และ Hybrid ที่เชื่อมต่อกับการไฟฟ้าต้องขออนุญาต (ใช้เวลาประมาณ 2-4 สัปดาห์) ซึ่งเราจะดำเนินการให้ทั้งหมดโดยไม่มีค่าใช้จ่ายเพิ่ม ส่วนระบบ Off-Grid ไม่ต้องขออนุญาตเพราะไม่ได้เชื่อมต่อกับระบบไฟฟ้า', 'On-Grid and Hybrid systems connected to the grid need a permit (about 2-4 weeks). We handle the whole application at no extra cost. Off-Grid systems need no permit because they are not connected to the grid.'),
    },
    {
      question: t('รับประกันนานแค่ไหน?', 'How long is the warranty?'),
      answer: t('• แผงโซลาร์: รับประกันประสิทธิภาพ 25-30 ปี\n• Inverter: รับประกัน 5-10 ปี (ขึ้นอยู่กับรุ่น)\n• แบตเตอรี่: รับประกัน 7-10 ปี\n• งานติดตั้ง: รับประกัน 2-3 ปี\n\nพร้อมบริการหลังการขายตลอดอายุการใช้งาน มีทีมช่างพร้อมดูแลทุกปัญหา', '• Solar panels: 25-30 year performance warranty\n• Inverter: 5-10 year warranty (depending on model)\n• Battery: 7-10 year warranty\n• Installation work: 2-3 year warranty\n\nPlus after-sales service for the life of the system, with technicians ready to handle any issue.'),
    },
    {
      question: t('ใช้เวลาติดตั้งนานแค่ไหน?', 'How long does installation take?'),
      answer: t('สำหรับบ้านพักอาศัยทั่วไป ใช้เวลาติดตั้ง 1-2 วัน ขึ้นอยู่กับขนาดระบบและความซับซ้อนของหลังคา หลังติดตั้งเสร็จสามารถใช้งานได้ทันที (สำหรับระบบ On-Grid ต้องรอการไฟฟ้าอนุมัติก่อน)', 'A typical home takes 1-2 days, depending on system size and how complex the roof is. The system can be used as soon as installation is finished (On-Grid systems must wait for utility approval first).'),
    },
    {
      question: t('หลังคาบ้านผมติดตั้งได้ไหม?', 'Can panels be installed on my roof?'),
      answer: t('หลังคาส่วนใหญ่สามารถติดตั้งได้ ไม่ว่าจะเป็นหลังคาเมทัลชีท กระเบื้อง หรือคอนกรีต เราจะสำรวจหน้างานฟรีเพื่อประเมินความเหมาะสม รวมถึงทิศทาง มุมเอียง และพื้นที่ว่างบนหลังคา', 'Most roofs can take panels, whether metal sheet, tile or concrete. We do a free site survey to check suitability, including roof direction, tilt angle and available space.'),
    },
    {
      question: t('ฝนตก เมฆเยอะ ยังผลิตไฟได้ไหม?', 'Does it still generate power when it rains or is cloudy?'),
      answer: t('ได้ครับ แต่ประสิทธิภาพจะลดลง วันที่ฝนตกหรือเมฆเยอะอาจผลิตได้ 10-30% ของวันแดดจัด แต่โดยเฉลี่ยทั้งปีในประเทศไทยยังคงคุ้มค่า เพราะเรามีแสงแดดเฉลี่ย 4-5 ชั่วโมงต่อวัน', 'Yes, but output drops. On rainy or very cloudy days it may produce 10-30% of a sunny day\'s output. Averaged over the year it is still worthwhile in Thailand, since we get an average of 4-5 hours of sunlight per day.'),
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50 mobile-full-width bg-section-mobile">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container-fix">
        <SectionHeading
          title={t('คำถาม', 'Frequently Asked')}
          highlight={t('ที่พบบ่อย', 'Questions')}
          subtitle={t('รวมคำตอบสำหรับข้อสงสัยเกี่ยวกับการติดตั้งโซลาร์เซลล์', 'Answers to common questions about solar installation')}
        />

        {/* FAQ List */}
        <StaggerContainer className="space-y-3" staggerDelay={0.08}>
          {faqs.map((faq, idx) => {
            const open = openIndex === idx;
            return (
              <StaggerItem key={idx}>
                <div
                  className={`relative bg-white rounded-[1.25rem] overflow-hidden border transition-[border-color,box-shadow] duration-300 ${
                    open
                      ? 'border-kb-orange/40'
                      : 'border-gray-900/[.06] shadow-[0_1px_2px_rgba(17,24,39,.04),0_8px_24px_-12px_rgba(17,24,39,.12)] hover:border-kb-orange/25'
                  }`}
                >
                  {/* Orange left accent when open */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-kb-orange transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
                  />
                  <button
                    onClick={() => setOpenIndex(open ? -1 : idx)}
                    aria-expanded={open}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 text-left"
                  >
                    <span className={`font-semibold pr-1 sm:pr-3 text-sm sm:text-base leading-snug transition-colors ${open ? 'text-kb-orange-dark' : 'text-gray-900'}`}>{faq.question}</span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        open ? 'bg-kb-orange text-white rotate-180' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 pb-5">
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm sm:text-base break-words">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <FadeUp delay={0.3}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-gray-600 mb-4">
              <HelpCircle className="w-5 h-5 text-kb-orange" />
              <span>{t('ยังมีคำถามอื่นอีกไหม?', 'Have another question?')}</span>
            </div>
            <div>
              <a href="#contact" className="btn-kb">
                {t('ติดต่อสอบถามเพิ่มเติม', 'Contact us')}
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default FAQ;
