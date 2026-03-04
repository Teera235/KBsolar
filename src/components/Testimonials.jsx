import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp } from './AnimatedSection';

const Testimonials = () => {
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  // Split testimonials into two rows (12 and 8)
  const allTestimonials = [
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
    {
      name: 'คุณวัชระ ล.',
      location: 'นนทบุรี',
      system: 'Hybrid 10kW + 20kWh',
      rating: 5,
      text: 'บ้าน 2 ชั้น ใช้ไฟเยอะมาก ค่าไฟเดือนละ 10,000 บาท ตอนนี้เหลือ 2,500 บาท ประหยัดได้เดือนละ 7,500 บาท คืนทุนเร็วมากครับ',
    },
    {
      name: 'คุณสุดา ว.',
      location: 'ภูเก็ต',
      system: 'On-Grid 12kW',
      rating: 5,
      text: 'โฮมสเตย์ 8 ห้อง ค่าไฟเดือนละ 18,000 บาท ตอนนี้เหลือ 5,000 บาท ประหยัดมหาศาล ลูกค้าชอบมากเพราะเป็นพลังงานสะอาด',
    },
    {
      name: 'คุณชัยวัฒน์ ป.',
      location: 'สงขลา',
      system: 'Hybrid 6kW + 15kWh',
      rating: 5,
      text: 'ร้านอาหาร ใช้ไฟเยอะเพราะมีแอร์เยอะ ค่าไฟจาก 12,000 เหลือ 3,500 บาท ประหยัดได้มาก แถมไฟไม่ดับ ธุรกิจไม่สะดุดครับ',
    },
    {
      name: 'คุณพิมพ์ใจ ก.',
      location: 'เชียงราย',
      system: 'Off-Grid 8kW + 20kWh',
      rating: 5,
      text: 'รีสอร์ทบนดอย ไฟฟ้าไม่ถึง ติดตั้งระบบ Off-Grid ใช้งานได้ดีเยี่ยม ลูกค้าประทับใจมาก ไม่ต้องจ่ายค่าไฟอีกต่อไปค่ะ',
    },
    {
      name: 'คุณสมศักดิ์ ช.',
      location: 'ปทุมธานี',
      system: 'Hybrid 5kW + 10kWh',
      rating: 5,
      text: 'บ้านเดี่ยว 2 ชั้น ค่าไฟเดือนละ 4,800 บาท ตอนนี้เหลือ 1,000 บาท ประหยัดได้เดือนละ 3,800 บาท คุ้มค่ามากครับ',
    },
    {
      name: 'คุณอัญชลี ส.',
      location: 'สมุทรสาคร',
      system: 'On-Grid 7kW',
      rating: 5,
      text: 'คลินิกความงาม ใช้ไฟเยอะเพราะมีเครื่องมือเยอะ ค่าไฟจาก 9,000 เหลือ 2,500 บาท ประหยัดได้มาก ลูกค้าชื่นชมด้วยค่ะ',
    },
    {
      name: 'คุณวีระ ต.',
      location: 'นครปฐม',
      system: 'Hybrid 10kW + 30kWh',
      rating: 5,
      text: 'บ้านสวน ใช้ไฟเยอะมาก ค่าไฟเดือนละ 15,000 บาท ตอนนี้เหลือ 3,000 บาท ประหยัดได้เดือนละ 12,000 บาท สุดยอดครับ',
    },
    {
      name: 'คุณนิตยา จ.',
      location: 'ราชบุรี',
      system: 'On-Grid 6kW',
      rating: 5,
      text: 'บ้านเดี่ยว ค่าไฟเดือนละ 5,500 บาท ตอนนี้เหลือ 1,200 บาท ประหยัดได้เดือนละ 4,300 บาท ทีมงานบริการดีมากค่ะ',
    },
    {
      name: 'คุณสมบูรณ์ ม.',
      location: 'กาญจนบุรี',
      system: 'Hybrid 8kW + 16kWh',
      rating: 5,
      text: 'โฮมสเตย์ริมแม่น้ำ ค่าไฟเดือนละ 11,000 บาท ตอนนี้เหลือ 3,500 บาท ประหยัดมาก แถมไฟไม่ดับ ลูกค้าพึงพอใจมากครับ',
    },
    {
      name: 'คุณรัตนา พ.',
      location: 'สระบุรี',
      system: 'On-Grid 9kW',
      rating: 5,
      text: 'โรงงานขนาดเล็ก ค่าไฟเดือนละ 20,000 บาท ตอนนี้เหลือ 6,000 บาท ประหยัดได้มหาศาล คืนทุนเร็วมากค่ะ แนะนำเลย',
    },
  ];

  // Row 1: First 12 testimonials (scroll right)
  const row1Testimonials = allTestimonials.slice(0, 12);
  const duplicatedRow1 = [...row1Testimonials, ...row1Testimonials];

  // Row 2: Last 8 testimonials (scroll left)
  const row2Testimonials = allTestimonials.slice(12, 20);
  const duplicatedRow2 = [...row2Testimonials, ...row2Testimonials];

  // Auto-scroll for Row 1 (scroll to right)
  useEffect(() => {
    const scrollContainer = scrollRef1.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isPausedRow1) {
        scrollPosition += scrollSpeed;
        
        // Get the width of one set of testimonials
        const singleSetWidth = scrollContainer.scrollWidth / 2;
        
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPausedRow1]);

  // Auto-scroll for Row 2 (scroll to left - reverse)
  useEffect(() => {
    const scrollContainer = scrollRef2.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isPausedRow2) {
        scrollPosition += scrollSpeed;
        
        // Get the width of one set of testimonials
        const singleSetWidth = scrollContainer.scrollWidth / 2;
        
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
        }
        
        // For reverse direction, calculate from the end
        scrollContainer.scrollLeft = singleSetWidth - scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPausedRow2]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-kb-orange/10 via-orange-500/10 to-kb-orange/10 text-kb-orange font-bold text-sm uppercase tracking-wider px-6 py-2.5 rounded-full mb-6 border border-kb-orange/20">
              <Star className="w-4 h-4 fill-current" />
              TESTIMONIALS
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-kb-dark mb-4">
              รีวิวจากลูกค้า
            </h2>
            <p className="text-kb-gray max-w-2xl mx-auto text-lg">
              ความไว้วางใจจากลูกค้ากว่า 50+ โปรเจกต์ คือความภูมิใจของเรา
            </p>
          </div>
        </FadeUp>

        {/* Auto-scroll Carousel - Two Rows */}
        <div className="space-y-6">
          {/* Row 1 - Scroll Right (12 items) */}
          <div 
            ref={scrollRef1}
            className="flex gap-6 overflow-x-hidden pb-4"
            onMouseEnter={() => setIsPausedRow1(true)}
            onMouseLeave={() => setIsPausedRow1(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedRow1.map((item, idx) => (
              <motion.div
                key={`row1-${idx}`}
                className="flex-shrink-0 w-[380px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-kb-orange/10 absolute top-4 right-4 group-hover:text-kb-orange/20 transition-colors" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-kb-gray mb-6 leading-relaxed text-sm line-clamp-4">
                  "{item.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-kb-orange to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white font-bold text-lg">
                      {item.name.charAt(3)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-kb-dark truncate">{item.name}</p>
                    <p className="text-xs text-kb-gray truncate">{item.location}</p>
                    <p className="text-xs text-kb-orange font-medium truncate">{item.system}</p>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-kb-orange to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 - Scroll Left (8 items) */}
          <div 
            ref={scrollRef2}
            className="flex gap-6 overflow-x-hidden pb-4"
            onMouseEnter={() => setIsPausedRow2(true)}
            onMouseLeave={() => setIsPausedRow2(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedRow2.map((item, idx) => (
              <motion.div
                key={`row2-${idx}`}
                className="flex-shrink-0 w-[380px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-kb-orange/10 absolute top-4 right-4 group-hover:text-kb-orange/20 transition-colors" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-kb-gray mb-6 leading-relaxed text-sm line-clamp-4">
                  "{item.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-kb-orange rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white font-bold text-lg">
                      {item.name.charAt(3)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-kb-dark truncate">{item.name}</p>
                    <p className="text-xs text-kb-gray truncate">{item.location}</p>
                    <p className="text-xs text-kb-orange font-medium truncate">{item.system}</p>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-kb-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right rounded-b-2xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
