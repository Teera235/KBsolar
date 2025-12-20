import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-kb-orange font-semibold text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            ลูกค้าพูดถึงเรา
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ความไว้วางใจจากลูกค้ากว่า 50 โปรเจกต์ คือความภูมิใจของเรา
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-6 relative hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-kb-orange/20 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">"{item.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-kb-orange to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {item.name.charAt(3)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.location} • {item.system}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-kb-orange to-amber-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{['ส', 'ว', 'ป', 'น'][i]}</span>
                </div>
              ))}
            </div>
            <span className="font-medium ml-2">ลูกค้าพึงพอใจ 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
