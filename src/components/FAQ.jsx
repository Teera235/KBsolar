import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from './AnimatedSection';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'ติดตั้งโซลาร์เซลล์คุ้มค่าไหม?',
      answer: 'คุ้มค่ามากครับ ด้วยราคาแผงโซลาร์ที่ลดลงและค่าไฟที่เพิ่มขึ้นทุกปี การติดตั้งโซลาร์เซลล์สามารถคืนทุนได้ภายใน 4-6 ปี และใช้งานได้นานกว่า 25 ปี หมายความว่าคุณจะได้ไฟฟ้าฟรีอีกกว่า 20 ปี ประหยัดได้หลายแสนบาทตลอดอายุการใช้งาน',
    },
    {
      question: 'ระบบ On-Grid, Hybrid, Off-Grid ต่างกันอย่างไร?',
      answer: '• On-Grid: เชื่อมต่อกับการไฟฟ้า ประหยัดค่าไฟได้ทันที แต่ไม่มีสำรองไฟเมื่อไฟดับ ราคาถูกที่สุด\n• Hybrid: มีแบตเตอรี่สำรองไฟเมื่อไฟดับ + ประหยัดค่าไฟ เหมาะกับบ้านที่ต้องการความมั่นคงด้านพลังงาน\n• Off-Grid: ระบบอิสระ 100% ไม่ต้องพึ่งการไฟฟ้าเลย เหมาะกับพื้นที่ห่างไกลหรือไม่มีไฟฟ้าเข้าถึง',
    },
    {
      question: 'บ้านผมเหมาะกับระบบขนาดเท่าไหร่?',
      answer: 'ขึ้นอยู่กับค่าไฟรายเดือนของคุณ:\n• ค่าไฟ 1,500-2,500 บาท → ระบบ 3 kW\n• ค่าไฟ 2,500-4,000 บาท → ระบบ 5 kW\n• ค่าไฟ 4,000-6,000 บาท → ระบบ 6-8 kW\n• ค่าไฟ 6,000+ บาท → ระบบ 8-10 kW\n\nเราจะวิเคราะห์ข้อมูลการใช้ไฟจริงของคุณเพื่อออกแบบระบบที่เหมาะสมที่สุด',
    },
    {
      question: 'ต้องขออนุญาตการไฟฟ้าไหม?',
      answer: 'ระบบ On-Grid และ Hybrid ที่เชื่อมต่อกับการไฟฟ้าต้องขออนุญาต (ใช้เวลาประมาณ 2-4 สัปดาห์) ซึ่งเราจะดำเนินการให้ทั้งหมดโดยไม่มีค่าใช้จ่ายเพิ่ม ส่วนระบบ Off-Grid ไม่ต้องขออนุญาตเพราะไม่ได้เชื่อมต่อกับระบบไฟฟ้า',
    },
    {
      question: 'รับประกันนานแค่ไหน?',
      answer: '• แผงโซลาร์: รับประกันประสิทธิภาพ 25-30 ปี\n• Inverter: รับประกัน 5-10 ปี (ขึ้นอยู่กับรุ่น)\n• แบตเตอรี่: รับประกัน 7-10 ปี\n• งานติดตั้ง: รับประกัน 2-3 ปี\n\nพร้อมบริการหลังการขายตลอดอายุการใช้งาน มีทีมช่างพร้อมดูแลทุกปัญหา',
    },
    {
      question: 'ใช้เวลาติดตั้งนานแค่ไหน?',
      answer: 'สำหรับบ้านพักอาศัยทั่วไป ใช้เวลาติดตั้ง 1-2 วัน ขึ้นอยู่กับขนาดระบบและความซับซ้อนของหลังคา หลังติดตั้งเสร็จสามารถใช้งานได้ทันที (สำหรับระบบ On-Grid ต้องรอการไฟฟ้าอนุมัติก่อน)',
    },
    {
      question: 'หลังคาบ้านผมติดตั้งได้ไหม?',
      answer: 'หลังคาส่วนใหญ่สามารถติดตั้งได้ ไม่ว่าจะเป็นหลังคาเมทัลชีท กระเบื้อง หรือคอนกรีต เราจะสำรวจหน้างานฟรีเพื่อประเมินความเหมาะสม รวมถึงทิศทาง มุมเอียง และพื้นที่ว่างบนหลังคา',
    },
    {
      question: 'ฝนตก เมฆเยอะ ยังผลิตไฟได้ไหม?',
      answer: 'ได้ครับ แต่ประสิทธิภาพจะลดลง วันที่ฝนตกหรือเมฆเยอะอาจผลิตได้ 10-30% ของวันแดดจัด แต่โดยเฉลี่ยทั้งปีในประเทศไทยยังคงคุ้มค่า เพราะเรามีแสงแดดเฉลี่ย 4-5 ชั่วโมงต่อวัน',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-kb-orange font-semibold text-sm tracking-wider uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              คำถามที่พบบ่อย
            </h2>
            <p className="text-gray-600">
              รวมคำตอบสำหรับข้อสงสัยเกี่ยวกับการติดตั้งโซลาร์เซลล์
            </p>
          </div>
        </FadeUp>

        {/* FAQ List */}
        <StaggerContainer className="space-y-3" staggerDelay={0.08}>
          {faqs.map((faq, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-sm"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-kb-orange flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeUp delay={0.3}>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 text-gray-600 mb-4">
              <HelpCircle className="w-5 h-5" />
              <span>ยังมีคำถามอื่นอีกไหม?</span>
            </div>
            <div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-kb-orange hover:bg-kb-orange-dark text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                ติดต่อสอบถามเพิ่มเติม
              </motion.a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default FAQ;
