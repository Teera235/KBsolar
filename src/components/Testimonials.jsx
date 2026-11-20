import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from './ui';
import { useLang } from '../i18n';

const Testimonials = () => {
  const { t, lang } = useLang();
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  // Split testimonials into two rows (12 and 8)
  const allTestimonials = [
    {
      name: t('คุณสมชาย ว.', 'Khun Somchai W.'),
      location: t('กรุงเทพมหานคร', 'Bangkok'),
      system: 'Hybrid 6kW + 16kWh',
      rating: 5,
      text: t('ประทับใจมากครับ ทีมงานมืออาชีพ อธิบายละเอียดทุกขั้นตอน ติดตั้งเรียบร้อยสวยงาม ตอนนี้ค่าไฟลดไปเกือบ 4,000 บาท/เดือน แถมไฟไม่ดับอีกต่อไป คุ้มค่ามากครับ', 'Very impressed. A professional team that explained every step in detail, and the installation is neat and tidy. My bill is now down almost 4,000 THB/month, and no more power cuts. Well worth it.'),
    },
    {
      name: t('คุณวิภา ส.', 'Khun Wipa S.'),
      location: t('นครราชสีมา', 'Nakhon Ratchasima'),
      system: 'On-Grid 5kW',
      rating: 5,
      text: t('เลือก KB Solar เพราะดูจาก YouTube ครูบอล อธิบายเข้าใจง่าย ไม่หลอกขาย พอติดตั้งจริงก็ตรงตามที่คำนวณไว้เลย ค่าไฟจาก 3,500 เหลือแค่ 800 บาท คุ้มค่ามากค่ะ', 'I chose KB Solar after watching Kru Ball on YouTube. He explains things clearly and doesn\'t oversell. The real installation matched the calculations exactly. My bill went from 3,500 to just 800 THB. Well worth it.'),
    },
    {
      name: t('คุณประเสริฐ ก.', 'Khun Prasert K.'),
      location: t('ขอนแก่น', 'Khon Kaen'),
      system: 'Hybrid 8kW + 10kWh',
      rating: 5,
      text: t('ติดตั้งให้ฟาร์มเลี้ยงไก่ ตอนนี้ไม่ต้องกังวลเรื่องไฟดับแล้ว ระบบ Full Backup ทำงานได้ดีมาก ไก่ไม่ตายเพราะไฟดับอีกต่อไป ขอบคุณทีมงานครับ', 'Installed at my chicken farm. I no longer worry about power cuts. The Full Backup system works very well, and we no longer lose chickens to outages. Thank you to the team.'),
    },
    {
      name: t('คุณนภา ท.', 'Khun Napa T.'),
      location: t('ชลบุรี', 'Chonburi'),
      system: 'On-Grid 8kW',
      rating: 5,
      text: t('บ้านหลังใหญ่ ค่าไฟเดือนละ 8,000 กว่าบาท ตอนนี้เหลือแค่ 2,000 บาท ประหยัดไปเดือนละ 6,000 คาดว่าคืนทุนไม่เกิน 4 ปี แนะนำเลยค่ะ', 'A large house with a bill of over 8,000 THB a month, now only 2,000 THB. Saving 6,000 a month, I expect payback within 4 years. Highly recommended.'),
    },
    {
      name: t('คุณสุรชัย พ.', 'Khun Surachai P.'),
      location: t('เชียงใหม่', 'Chiang Mai'),
      system: 'Hybrid 5kW + 10kWh',
      rating: 5,
      text: t('ติดตั้งที่รีสอร์ท ลูกค้าชอบมาก เพราะไฟไม่เคยดับ ค่าไฟลดลงเกือบครึ่ง ทีมงานบริการดีมาก ติดตามผลหลังติดตั้งอย่างใส่ใจ', 'Installed at our resort. Guests love it because the power never goes out, and our bill is down almost half. Great service from the team, with careful follow-up after installation.'),
    },
    {
      name: t('คุณอรุณ จ.', 'Khun Arun J.'),
      location: t('อุบลราชธานี', 'Ubon Ratchathani'),
      system: 'On-Grid 10kW',
      rating: 5,
      text: t('โรงงานเล็กๆ ค่าไฟเดือนละ 15,000 บาท ตอนนี้เหลือ 4,000 บาท ประหยัดมากครับ คาดว่าคืนทุนภายใน 3 ปี ระบบทำงานเสถียรมาก', 'A small factory with a 15,000 THB monthly bill, now 4,000 THB. Huge savings. I expect payback within 3 years. The system is very stable.'),
    },
    {
      name: t('คุณมานี ร.', 'Khun Manee R.'),
      location: t('สุราษฎร์ธานี', 'Surat Thani'),
      system: 'Off-Grid 5kW + 16kWh',
      rating: 5,
      text: t('บ้านสวนห่างไกล ไฟฟ้าไม่ถึง ติดตั้งระบบ Off-Grid ใช้งานได้ดีมาก ไม่ต้องจ่ายค่าไฟอีกต่อไป อิสระเต็มที่ครับ', 'A remote orchard house with no grid power. The Off-Grid system works very well. No more electricity bills, complete independence.'),
    },
    {
      name: t('คุณสมหญิง ต.', 'Khun Somying T.'),
      location: t('ระยอง', 'Rayong'),
      system: 'Hybrid 6kW + 10kWh',
      rating: 5,
      text: t('ค่าไฟจาก 5,000 เหลือ 1,200 บาท ประหยัดมากค่ะ ทีมงานติดตั้งรวดเร็ว สะอาด ไม่ทำลายบ้าน แนะนำเพื่อนๆ หลายคนแล้ว', 'My bill went from 5,000 to 1,200 THB. Big savings. The team installed quickly and cleanly without damaging the house. I\'ve already recommended them to several friends.'),
    },
    {
      name: t('คุณธนา ส.', 'Khun Thana S.'),
      location: t('ลพบุรี', 'Lopburi'),
      system: 'On-Grid 6kW',
      rating: 5,
      text: t('ติดตั้งมา 6 เดือนแล้ว ระบบทำงานดีมาก ค่าไฟลดจาก 4,500 เหลือ 900 บาท ประหยัดได้เดือนละ 3,600 บาท คุ้มค่าจริงๆ ครับ', 'Installed 6 months ago and the system works very well. My bill dropped from 4,500 to 900 THB, saving 3,600 THB a month. Really worth it.'),
    },
    {
      name: t('คุณปิยะ ม.', 'Khun Piya M.'),
      location: t('สมุทรปราการ', 'Samut Prakan'),
      system: 'Hybrid 8kW + 16kWh',
      rating: 5,
      text: t('ทาวน์เฮ้าส์ 3 ชั้น ค่าไฟเดือนละ 6,000 บาท ตอนนี้เหลือ 1,500 บาท มีไฟสำรองด้วย ไม่ต้องกังวลเรื่องไฟดับอีกต่อไป สุดยอดครับ', 'A 3-storey townhouse with a 6,000 THB monthly bill, now 1,500 THB. With backup power too, so no more worrying about outages. Excellent.'),
    },
    {
      name: t('คุณวัชระ ล.', 'Khun Watchara L.'),
      location: t('นนทบุรี', 'Nonthaburi'),
      system: 'Hybrid 10kW + 20kWh',
      rating: 5,
      text: t('บ้าน 2 ชั้น ใช้ไฟเยอะมาก ค่าไฟเดือนละ 10,000 บาท ตอนนี้เหลือ 2,500 บาท ประหยัดได้เดือนละ 7,500 บาท คืนทุนเร็วมากครับ', 'A 2-storey house that uses a lot of power. The bill was 10,000 THB a month, now 2,500 THB, saving 7,500 THB a month. Very fast payback.'),
    },
    {
      name: t('คุณสุดา ว.', 'Khun Suda W.'),
      location: t('ภูเก็ต', 'Phuket'),
      system: 'On-Grid 12kW',
      rating: 5,
      text: t('โฮมสเตย์ 8 ห้อง ค่าไฟเดือนละ 18,000 บาท ตอนนี้เหลือ 5,000 บาท ประหยัดมหาศาล ลูกค้าชอบมากเพราะเป็นพลังงานสะอาด', 'An 8-room homestay with an 18,000 THB monthly bill, now 5,000 THB. Huge savings, and guests love that it runs on clean energy.'),
    },
    {
      name: t('คุณชัยวัฒน์ ป.', 'Khun Chaiwat P.'),
      location: t('สงขลา', 'Songkhla'),
      system: 'Hybrid 6kW + 15kWh',
      rating: 5,
      text: t('ร้านอาหาร ใช้ไฟเยอะเพราะมีแอร์เยอะ ค่าไฟจาก 12,000 เหลือ 3,500 บาท ประหยัดได้มาก แถมไฟไม่ดับ ธุรกิจไม่สะดุดครับ', 'A restaurant with lots of air conditioning, so high power use. The bill went from 12,000 to 3,500 THB. Big savings, and no power cuts, so the business keeps running smoothly.'),
    },
    {
      name: t('คุณพิมพ์ใจ ก.', 'Khun Pimjai K.'),
      location: t('เชียงราย', 'Chiang Rai'),
      system: 'Off-Grid 8kW + 20kWh',
      rating: 5,
      text: t('รีสอร์ทบนดอย ไฟฟ้าไม่ถึง ติดตั้งระบบ Off-Grid ใช้งานได้ดีเยี่ยม ลูกค้าประทับใจมาก ไม่ต้องจ่ายค่าไฟอีกต่อไปค่ะ', 'A mountain resort with no grid power. The Off-Grid system works excellently, guests are very impressed, and there are no more electricity bills.'),
    },
    {
      name: t('คุณสมศักดิ์ ช.', 'Khun Somsak C.'),
      location: t('ปทุมธานี', 'Pathum Thani'),
      system: 'Hybrid 5kW + 10kWh',
      rating: 5,
      text: t('บ้านเดี่ยว 2 ชั้น ค่าไฟเดือนละ 4,800 บาท ตอนนี้เหลือ 1,000 บาท ประหยัดได้เดือนละ 3,800 บาท คุ้มค่ามากครับ', 'A 2-storey detached house with a 4,800 THB monthly bill, now 1,000 THB, saving 3,800 THB a month. Well worth it.'),
    },
    {
      name: t('คุณอัญชลี ส.', 'Khun Anchalee S.'),
      location: t('สมุทรสาคร', 'Samut Sakhon'),
      system: 'On-Grid 7kW',
      rating: 5,
      text: t('คลินิกความงาม ใช้ไฟเยอะเพราะมีเครื่องมือเยอะ ค่าไฟจาก 9,000 เหลือ 2,500 บาท ประหยัดได้มาก ลูกค้าชื่นชมด้วยค่ะ', 'A beauty clinic with lots of equipment, so high power use. The bill went from 9,000 to 2,500 THB. Big savings, and our clients appreciate it too.'),
    },
    {
      name: t('คุณวีระ ต.', 'Khun Weera T.'),
      location: t('นครปฐม', 'Nakhon Pathom'),
      system: 'Hybrid 10kW + 30kWh',
      rating: 5,
      text: t('บ้านสวน ใช้ไฟเยอะมาก ค่าไฟเดือนละ 15,000 บาท ตอนนี้เหลือ 3,000 บาท ประหยัดได้เดือนละ 12,000 บาท สุดยอดครับ', 'An orchard house that uses a lot of power. The bill was 15,000 THB a month, now 3,000 THB, saving 12,000 THB a month. Excellent.'),
    },
    {
      name: t('คุณนิตยา จ.', 'Khun Nittaya J.'),
      location: t('ราชบุรี', 'Ratchaburi'),
      system: 'On-Grid 6kW',
      rating: 5,
      text: t('บ้านเดี่ยว ค่าไฟเดือนละ 5,500 บาท ตอนนี้เหลือ 1,200 บาท ประหยัดได้เดือนละ 4,300 บาท ทีมงานบริการดีมากค่ะ', 'A detached house with a 5,500 THB monthly bill, now 1,200 THB, saving 4,300 THB a month. The team gives great service.'),
    },
    {
      name: t('คุณสมบูรณ์ ม.', 'Khun Somboon M.'),
      location: t('กาญจนบุรี', 'Kanchanaburi'),
      system: 'Hybrid 8kW + 16kWh',
      rating: 5,
      text: t('โฮมสเตย์ริมแม่น้ำ ค่าไฟเดือนละ 11,000 บาท ตอนนี้เหลือ 3,500 บาท ประหยัดมาก แถมไฟไม่ดับ ลูกค้าพึงพอใจมากครับ', 'A riverside homestay with an 11,000 THB monthly bill, now 3,500 THB. Big savings, no power cuts, and very happy guests.'),
    },
    {
      name: t('คุณรัตนา พ.', 'Khun Rattana P.'),
      location: t('สระบุรี', 'Saraburi'),
      system: 'On-Grid 9kW',
      rating: 5,
      text: t('โรงงานขนาดเล็ก ค่าไฟเดือนละ 20,000 บาท ตอนนี้เหลือ 6,000 บาท ประหยัดได้มหาศาล คืนทุนเร็วมากค่ะ แนะนำเลย', 'A small factory with a 20,000 THB monthly bill, now 6,000 THB. Huge savings and very fast payback. Highly recommended.'),
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

  const renderCard = (item, key) => (
    <div
      key={key}
      className="card-kb flex-shrink-0 w-[300px] sm:w-[380px] p-6 sm:p-7 relative overflow-hidden"
    >
      {/* Big faint quote mark */}
      <Quote className="w-20 h-20 text-kb-orange/10 absolute -top-2 -right-2 rotate-180 pointer-events-none" strokeWidth={1.5} />

      {/* Rating */}
      <div className="flex gap-1 mb-4 relative">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-4 relative">
        "{item.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-12 h-12 bg-kb-orange rounded-full flex items-center justify-center flex-shrink-0 shadow-md ring-2 ring-white">
          <span className="text-white font-bold text-lg">
            {item.name.charAt(lang === 'en' ? 5 : 3)}
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-bold text-kb-dark truncate">{item.name}</p>
          <p className="text-xs text-gray-500 truncate">{item.location}</p>
          <p className="text-xs text-kb-orange font-medium truncate">{item.system}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('รีวิว', 'Customer')}
          highlight={t('จากลูกค้า', 'Reviews')}
          subtitle={t('ความไว้วางใจจากลูกค้ากว่า 50+ โปรเจกต์ คือความภูมิใจของเรา', 'The trust of customers across 50+ projects is our pride.')}
        />

        {/* Auto-scroll Carousel - Two Rows */}
        <div className="space-y-4">
          {/* Row 1 - Scroll Right (12 items) */}
          <div
            ref={scrollRef1}
            className="flex gap-6 overflow-x-hidden pt-3 pb-6"
            onMouseEnter={() => setIsPausedRow1(true)}
            onMouseLeave={() => setIsPausedRow1(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedRow1.map((item, idx) => renderCard(item, `row1-${idx}`))}
          </div>

          {/* Row 2 - Scroll Left (8 items) */}
          <div
            ref={scrollRef2}
            className="flex gap-6 overflow-x-hidden pt-3 pb-6"
            onMouseEnter={() => setIsPausedRow2(true)}
            onMouseLeave={() => setIsPausedRow2(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedRow2.map((item, idx) => renderCard(item, `row2-${idx}`))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
