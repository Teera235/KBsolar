import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from './AnimatedSection';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const testimonials = [
    {
      name: 'คุณสมชาย ว.',
      location: 'กรุงเทพมหานคร',
      system: 'Hybrid 6kW + 16kWh',
      rating: 5,
      text: 'ประทับใจมากครับ ทีมงานมืออาชีพ อธิบายละเอียดทุกขั้นตอน ติดตั้งเรียบร้อยสวยงาม ตอนนี้ค่าไฟลดไปเกือบ 4,000 บาท/เดือน แถมไฟไม่ดับอีกต่อไป คุ้มค่ามากครับ',
    },
    {
      name: 'คุณวิภา ส.',
      location: 'นครราชสีมา',
      system: 'On-Grid 5kW',
      rating: 5,
      text: 'เลือก KB Solar เพราะดูจาก YouTube ครูบอล อธิบายเข้าใจง่าย ไม่หลอกขาย พอติดตั้งจริงก็ตรงตามที่คำนวณไว้เลย ค่าไฟจาก 3,500 เหลือแค่ 800 บาท คุ้มค่ามากค่ะ',
    },
    {
      name: 'คุณประเสริฐ ก.',
      location: 'ขอนแก่น',
      system: 'Hybrid 8kW + 10kWh',
      rating: 5,
      text: 'ติดตั้งให้ฟาร์มเลี้ยงไก่ ตอนนี้ไม่ต้องกังวลเรื่องไฟดับแล้ว ระบบ Full Backup ทำงานได้ดีมาก ไก่ไม่ตายเพราะไฟดับอีกต่อไป ขอบคุณทีมงานครับ',
    },
    {
      name: 'คุณนภา ท.',
      location: 'ชลบุรี',
      system: 'On-Grid 8kW',
      rating: 5,
      text: 'บ้านหลังใหญ่ ค่าไฟเดือนละ 8,000 กว่าบาท ตอนนี้เหลือแค่ 2,000 บาท ประหยัดไปเดือนละ 6,000 คาดว่าคืนทุนไม่เกิน 4 ปี แนะนำเลยค่ะ',
    },
    {
      name: 'คุณสุรชัย พ.',
      location: 'เชียงใหม่',
      system: 'Hybrid 5kW + 10kWh',
      rating: 5,
      text: 'ติดตั้งที่รีสอร์ท ลูกค้าชอบมาก เพราะไฟไม่เคยดับ ค่าไฟลดลงเกือบครึ่ง ทีมงานบริการดีมาก ติดตามผลหลังติดตั้งอย่างใส่ใจ',
    },
    {
      name: 'คุณอรุณ จ.',
      location: 'อุบลราชธานี',
      system: 'On-Grid 10kW',
      rating: 5,
      text: 'โรงงานเล็กๆ ค่าไฟเดือนละ 15,000 บาท ตอนนี้เหลือ 4,000 บาท ประหยัดมากครับ คาดว่าคืนทุนภายใน 3 ปี ระบบทำงานเสถียรมาก',
    },
    {
      name: 'คุณมานี ร.',
      location: 'สุราษฎร์ธานี',
      system: 'Off-Grid 5kW + 16kWh',
      rating: 5,
      text: 'บ้านสวนห่างไกล ไฟฟ้าไม่ถึง ติดตั้งระบบ Off-Grid ใช้งานได้ดีมาก ไม่ต้องจ่ายค่าไฟอีกต่อไป อิสระเต็มที่ครับ',
    },
    {
      name: 'คุณสมหญิง ต.',
      location: 'ระยอง',
      system: 'Hybrid 6kW + 10kWh',
      rating: 5,
      text: 'ค่าไฟจาก 5,000 เหลือ 1,200 บาท ประหยัดมากค่ะ ทีมงานติดตั้งรวดเร็ว สะอาด ไม่ทำลายบ้าน แนะนำเพื่อนๆ หลายคนแล้ว',
    },
    {
      name: 'คุณธนา ส.',
      location: 'ลพบุรี',
      system: 'On-Grid 6kW',
      rating: 5,
      text: 'ติดตั้งมา 6 เดือนแล้ว ระบบทำงานดีมาก ค่าไฟลดจาก 4,500 เหลือ 900 บาท ประหยัดได้เดือนละ 3,600 บาท คุ้มค่าจริงๆ ครับ',
    },
    {
      name: 'คุณปิยะ ม.',
      location: 'สมุทรปราการ',
      system: 'Hybrid 8kW + 16kWh',
      rating: 5,
      text: 'ทาวน์เฮ้าส์ 3 ชั้น ค่าไฟเดือนละ 6,000 บาท ตอนนี้เหลือ 1,500 บาท มีไฟสำรองด้วย ไม่ต้องกังวลเรื่องไฟดับอีกต่อไป สุดยอดครับ',
    },
  ];

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-kb-orange font-semibold text-sm tracking-wider uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              รีวิวจากลูกค้า
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ความไว้วางใจจากลูกค้ากว่า 50 โปรเจกต์ คือความภูมิใจของเรา
            </p>
          </div>
        </FadeUp>

        {/* Testimonials Grid with Pagination */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
                {currentTestimonials.map((item, idx) => (
                  <StaggerItem key={idx}>
                    <motion.div
                      className="bg-gray-50 rounded-2xl p-6 relative hover:shadow-lg transition-shadow"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {/* Quote Icon */}
                      <Quote className="w-10 h-10 text-kb-orange/20 absolute top-6 right-6" />
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-gray-700 mb-6 leading-relaxed">"{item.text}"</p>

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-kb-orange to-amber-500 rounded-full flex items-center justify-center"
                          whileHover={{ rotate: 10 }}
                        >
                          <span className="text-white font-bold text-lg">
                            {item.name.charAt(3)}
                          </span>
                        </motion.div>
                        <div>
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.location} • {item.system}</p>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={prevPage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-kb-orange hover:bg-kb-orange-dark text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentPage === idx 
                      ? 'bg-kb-orange w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextPage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-kb-orange hover:bg-kb-orange-dark text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Trust Badge */}
        <FadeUp delay={0.3}>
          <div className="mt-8 text-center">
            <motion.div 
              className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-8 h-8 bg-gradient-to-br from-kb-orange to-amber-500 rounded-full border-2 border-white flex items-center justify-center"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-white text-xs font-bold">{['ส', 'ว', 'ป', 'น', 'อ'][i]}</span>
                  </motion.div>
                ))}
              </div>
              <span className="font-medium ml-2">ลูกค้าพึงพอใจ 100% • รีวิว {testimonials.length} รายการ</span>
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Testimonials;
