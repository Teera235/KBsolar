import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Star, Zap, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { FadeUp } from './AnimatedSection';

const allTestimonials = [
  { name: 'คุณสมชาย ว.', location: 'กรุงเทพฯ', system: 'Hybrid 6kW + 16kWh', saving: '4,000', rating: 5, text: 'ทีมงานมืออาชีพ ติดตั้งสวยงาม ค่าไฟลดไป 4,000 บาท/เดือน ไฟไม่ดับอีกต่อไป คุ้มค่ามากครับ' },
  { name: 'คุณวิภา ส.', location: 'นครราชสีมา', system: 'On-Grid 5kW', saving: '2,700', rating: 5, text: 'ค่าไฟจาก 3,500 เหลือ 800 บาท คุ้มค่ามากค่ะ ติดตั้งตรงตามคำนวณ ทีมงานเป็นมืออาชีพจริงๆ' },
  { name: 'คุณประเสริฐ ก.', location: 'ขอนแก่น', system: 'Hybrid 8kW + 10kWh', saving: '5,000', rating: 5, text: 'ติดตั้งให้ฟาร์มเลี้ยงไก่ ระบบ Full Backup ทำงานดีมาก ไฟไม่ดับอีกต่อไป ประหยัดได้เดือนละ 5,000 บาท' },
  { name: 'คุณนภา ท.', location: 'ชลบุรี', system: 'On-Grid 8kW', saving: '6,000', rating: 5, text: 'ค่าไฟจาก 8,000 เหลือ 2,000 บาท คืนทุนไม่เกิน 4 ปี แนะนำเลยค่ะ' },
  { name: 'คุณสุรชัย พ.', location: 'เชียงใหม่', system: 'Hybrid 5kW + 10kWh', saving: '3,500', rating: 5, text: 'ติดตั้งที่รีสอร์ท ไฟไม่เคยดับ ค่าไฟลดเกือบครึ่ง ทีมงานบริการดีมาก ลูกค้าประทับใจ' },
  { name: 'คุณอรุณ จ.', location: 'อุบลราชธานี', system: 'On-Grid 10kW', saving: '11,000', rating: 5, text: 'โรงงานเล็ก ค่าไฟจาก 15,000 เหลือ 4,000 บาท คืนทุนภายใน 3 ปี ดีกว่าที่คิดไว้มากครับ' },
  { name: 'คุณมานี ร.', location: 'สุราษฎร์ธานี', system: 'Off-Grid 5kW + 16kWh', saving: '100%', rating: 5, text: 'บ้านสวนห่างไกล ติดตั้ง Off-Grid ใช้งานดีมาก ไม่ต้องจ่ายค่าไฟอีกต่อไป คุ้มค่ามากๆ' },
  { name: 'คุณสมหญิง ต.', location: 'ระยอง', system: 'Hybrid 6kW + 10kWh', saving: '3,800', rating: 5, text: 'ค่าไฟจาก 5,000 เหลือ 1,200 บาท ทีมงานรวดเร็ว สะอาด แนะนำเพื่อนหลายคนแล้ว' },
  { name: 'คุณชัยวัฒน์ ป.', location: 'สงขลา', system: 'Hybrid 6kW + 15kWh', saving: '8,500', rating: 5, text: 'ร้านอาหาร มีแอร์เยอะ ค่าไฟจาก 12,000 เหลือ 3,500 บาท ธุรกิจไม่สะดุดครับ' },
  { name: 'คุณพิมพ์ใจ ก.', location: 'เชียงราย', system: 'Off-Grid 8kW + 20kWh', saving: '100%', rating: 5, text: 'รีสอร์ทบนดอย ติดตั้ง Off-Grid ใช้งานดีเยี่ยม ลูกค้าประทับใจมากค่ะ แนะนำเลย' },
  { name: 'คุณวัชระ ล.', location: 'นนทบุรี', system: 'Hybrid 10kW + 20kWh', saving: '7,500', rating: 5, text: 'บ้าน 2 ชั้น ค่าไฟจาก 10,000 เหลือ 2,500 บาท คืนทุนเร็วมากครับ ทีมงานดูแลดีมาก' },
  { name: 'คุณสุดา ว.', location: 'ภูเก็ต', system: 'On-Grid 12kW', saving: '13,000', rating: 5, text: 'โฮมสเตย์ 8 ห้อง ค่าไฟจาก 18,000 เหลือ 5,000 บาท ลูกค้าชอบพลังงานสะอาด' },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const timerRef = useRef(null);
  const total = allTestimonials.length;

  const goTo = useCallback((index, dir = 'next') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((index + total) % total);
      setAnimating(false);
    }, 300);
  }, [animating, total]);

  const next = useCallback(() => goTo(current + 1, 'next'), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, 'prev'), [current, goTo]);

  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(next, 2500);
    return () => clearInterval(timerRef.current);
  }, [isHovered, next]);

  const getCard = (offset) => {
    return allTestimonials[(current + offset + total) % total];
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gradient-to-b from-orange-50/60 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-5 shadow-lg shadow-orange-500/30">
              <Zap className="w-3.5 h-3.5 fill-white" />
              เสียงจากลูกค้าจริง
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3 leading-tight">
              ลูกค้าของเรา
              <span className="text-orange-500"> พูดถึงเราอย่างไร</span>
            </h2>

            <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto mb-6">
              กว่า 500 โปรเจกต์ทั่วประเทศ ทุกรีวิวมาจากลูกค้าจริง
            </p>

            {/* Rating summary */}
            <div className="inline-flex items-center gap-4 bg-white border border-orange-100 rounded-2xl px-6 py-3 shadow-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-gray-900 font-black text-sm ml-1">5.0</span>
              </div>
              <div className="w-px h-5 bg-gray-200" />
              <span className="text-gray-500 text-sm font-medium">500+ รีวิว</span>
              <div className="w-px h-5 bg-gray-200" />
              <span className="text-orange-500 text-sm font-bold">98% พึงพอใจ</span>
            </div>
          </div>
        </FadeUp>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cards track */}
          <div className="flex items-center justify-center gap-4 md:gap-6 px-2">

            {/* Prev card (peek) */}
            <div
              className="hidden md:block flex-shrink-0 w-[280px] opacity-40 scale-90 transition-all duration-300 cursor-pointer"
              onClick={prev}
            >
              <ReviewCard item={getCard(-1)} />
            </div>

            {/* Center card */}
            <div
              className={`flex-shrink-0 w-full max-w-[520px] transition-all duration-300 ${
                animating
                  ? direction === 'next'
                    ? 'opacity-0 translate-x-8'
                    : 'opacity-0 -translate-x-8'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              <ReviewCard item={getCard(0)} featured />
            </div>

            {/* Next card (peek) */}
            <div
              className="hidden md:block flex-shrink-0 w-[280px] opacity-40 scale-90 transition-all duration-300 cursor-pointer"
              onClick={next}
            >
              <ReviewCard item={getCard(1)} />
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-4 w-10 h-10 bg-white border border-orange-200 rounded-full shadow-md flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-4 w-10 h-10 bg-white border border-orange-200 rounded-full shadow-md flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {allTestimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2.5 bg-orange-500'
                  : 'w-2.5 h-2.5 bg-orange-200 hover:bg-orange-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

const ReviewCard = ({ item, featured = false }) => (
  <div className={`bg-white rounded-2xl border border-orange-100 shadow-md relative overflow-hidden transition-all duration-300 ${
    featured ? 'p-7 shadow-xl shadow-orange-100' : 'p-5'
  }`}>
    {/* Top accent */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-t-2xl" />

    {/* Quote icon */}
    <Quote className={`text-orange-200 mb-3 ${featured ? 'w-8 h-8' : 'w-6 h-6'}`} />

    {/* Stars */}
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`text-amber-400 fill-amber-400 ${featured ? 'w-4 h-4' : 'w-3 h-3'}`} />
      ))}
    </div>

    {/* Text */}
    <p className={`text-gray-600 leading-relaxed mb-5 ${featured ? 'text-base' : 'text-xs line-clamp-3'}`}>
      "{item.text}"
    </p>

    {/* Divider */}
    <div className="h-px bg-orange-100 mb-4" />

    {/* Author + saving */}
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className={`rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-200 ${
          featured ? 'w-11 h-11' : 'w-8 h-8'
        }`}>
          <span className={`text-white font-black ${featured ? 'text-base' : 'text-xs'}`}>
            {item.name.charAt(2)}
          </span>
        </div>
        <div className="min-w-0">
          <p className={`text-gray-800 font-bold truncate ${featured ? 'text-sm' : 'text-xs'}`}>{item.name}</p>
          <p className={`text-gray-400 truncate ${featured ? 'text-xs' : 'text-[10px]'}`}>
            {item.location} · {item.system}
          </p>
        </div>
      </div>
      <span className={`flex-shrink-0 font-bold bg-orange-50 text-orange-500 rounded-full border border-orange-200 ${
        featured ? 'text-xs px-3 py-1.5' : 'text-[10px] px-2 py-1'
      }`}>
        ลด ฿{item.saving}/เดือน
      </span>
    </div>
  </div>
);

export default Testimonials;
