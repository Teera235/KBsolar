import { Battery, Grid, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp } from './AnimatedSection';
import { useState, useEffect } from 'react';

const Blog = () => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: 'Hybrid Solar System ตอบโจทย์ทุกความต้องการ',
      subtitle: 'ระบบที่ให้คุณทั้งประหยัดและมีไฟสำรอง',
      description: 'ระบบโซล่าเซลล์ที่ผสมผสาน (Solar Panels Hybrid) สามารถใช้พลังงานจากโซลาร์เซลล์ แบตเตอรี่ และโครงข่ายการไฟฟ้าร่วมกันได้อย่างยืดหยุ่น เหมาะสำหรับบ้านที่ต้องการความมั่นคงในการใช้ไฟฟ้า มีไฟสำรองตลอด 24 ชั่วโมง',
      image: '/Blog/hrbrid.webp',
      icon: Battery,
      color: 'orange',
      badge: 'Hybrid',
      slug: 'hybrid-solar-system'
    },
    {
      id: 2,
      title: 'ทำไม On-Grid ถึงเป็นตัวเลือกอันดับ 1 ของคนไทย',
      subtitle: 'ประหยัดสูงสุด คืนทุนเร็วที่สุด',
      description: 'ระบบโซล่าเซลล์แบบเชื่อมต่อกับโครงข่าย (Solar Panels On-Grid) สามารถขายไฟส่วนเกินคืนให้การไฟฟ้าได้ ประหยัดค่าไฟสูงสุด 80-95% เหมาะสำหรับบ้านและโรงงานที่ต้องการลดค่าไฟและคืนทุนเร็ว ระยะเวลา 3-5 ปี ไม่ต้องลงทุนแบตเตอรี่ ทำให้ต้นทุนต่ำและบำรุงรักษาง่าย เป็นตัวเลือกที่คุ้มค่าที่สุดสำหรับผู้ที่ต้องการประหยัดค่าไฟฟ้าอย่างจริงจัง',
      image: '/Blog/0n-grid.webp',
      icon: Grid,
      color: 'blue',
      badge: 'On-Grid',
      slug: 'on-grid-solar-system'
    },
    {
      id: 3,
      title: 'Off-Grid คือคำตอบสำหรับความเป็นอิสระ',
      subtitle: 'อิสระเต็มที่ ไม่ต้องพึ่งการไฟฟ้า',
      description: 'ระบบโซล่าเซลล์แบบอิสระที่ไม่ต้องพึ่งพาการไฟฟ้า (Solar Cell Rooftop Home) มีแบตเตอรี่เก็บพลังงาน เหมาะสำหรับบ้านสวน พื้นที่ห่างไกล หรือต้องการความเป็นอิสระทางพลังงาน ใช้ไฟได้ตลอด 24 ชั่วโมง ประหยัดค่าไฟ 3,000 - 10,000 บาท',
      image: '/Blog/off-grid.webp',
      icon: Zap,
      color: 'green',
      badge: 'Off-Grid',
      slug: 'off-grid-solar-system'
    }
  ];

  // Auto rotate every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setRotationIndex((prev) => (prev + 1) % blogPosts.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, blogPosts.length]);

  // Rotate array based on current index
  const getRotatedPosts = () => {
    const rotated = [...blogPosts];
    for (let i = 0; i < rotationIndex; i++) {
      rotated.push(rotated.shift());
    }
    return rotated;
  };

  const borderColors = {
    orange: 'border-orange-500',
    blue: 'border-blue-500',
    green: 'border-green-500'
  };

  return (
    <section id="blog" className="py-16 sm:py-20 bg-gray-50 mobile-full-width bg-section-mobile overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 mobile-container-fix">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="inline-block bg-kb-orange/10 text-kb-orange font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              BLOG
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-kb-dark mt-2 mb-4">
              บทความและข่าวสาร
            </h2>
            <p className="text-kb-gray max-w-2xl mx-auto text-lg">
              เรียนรู้เกี่ยวกับระบบโซล่าเซลล์แต่ละประเภท
            </p>
          </div>
        </FadeUp>

        {/* Blog Grid with Slide Animation */}
        <FadeUp delay={0.2}>
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
              layout
            >
              {getRotatedPosts().map((post, index) => {
                return (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    className="group"
                  >
                    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 ${borderColors[post.color]}`}>
                      {/* Image */}
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={process.env.PUBLIC_URL + post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-kb-dark mb-3 group-hover:text-kb-orange transition-colors">
                          {post.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                          {post.description}
                        </p>

                        {/* Read More Button */}
                        <button
                          onClick={() => window.location.href = `/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 bg-kb-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-kb-orange transition-all group/btn"
                        >
                          Read More
                          <svg 
                            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </FadeUp>

        {/* Coming Soon Section */}
        <FadeUp delay={0.4}>
          <div className="mt-12 sm:mt-16 text-center bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-kb-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-kb-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-kb-dark mb-3 sm:mb-4">
              บทความเพิ่มเติมกำลังจะมาเร็วๆ นี้
            </h3>
            <p className="text-base sm:text-lg text-kb-gray max-w-2xl mx-auto">
              เรากำลังเตรียมบทความและข่าวสารที่น่าสนใจเกี่ยวกับพลังงานแสงอาทิตย์ เทคโนโลジีใหม่ๆ และเคล็ดลับการดูแลระบบโซล่าเซลล์ให้กับคุณ
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Blog;
