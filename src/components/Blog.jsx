import { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Battery, Grid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './AnimatedSection';

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: 'Hybrid Solar System',
      subtitle: 'ระบบโซล่าเซลล์แบบ Hybrid',
      description: 'ระบบที่ผสมผสานระหว่าง On-Grid และ Off-Grid ใช้ไฟจากการไฟฟ้าและแบตเตอรี่สำรอง เหมาะสำหรับบ้านที่ต้องการความมั่นคงในการใช้ไฟฟ้า',
      image: '/Blog/hrbrid.png',
      icon: Battery,
      color: 'from-orange-500 to-red-500',
      badge: 'Hybrid'
    },
    {
      id: 2,
      title: 'On-Grid Solar System',
      subtitle: 'ระบบโซล่าเซลล์แบบ On-Grid',
      description: 'ระบบที่เชื่อมต่อกับการไฟฟ้า ขายไฟส่วนเกินคืนให้การไฟฟ้า ประหยัดค่าไฟสูงสุด เหมาะสำหรับบ้านและโรงงาน',
      image: '/Blog/0n-grid.png',
      icon: Grid,
      color: 'from-blue-500 to-cyan-500',
      badge: 'On-Grid'
    },
    {
      id: 3,
      title: 'Off-Grid Solar System',
      subtitle: 'ระบบโซล่าเซลล์แบบ Off-Grid',
      description: 'ระบบที่ไม่ต้องพึ่งการไฟฟ้า ใช้แบตเตอรี่เก็บพลังงาน เหมาะสำหรับพื้นที่ห่างไกลหรือต้องการความเป็นอิสระทางพลังงาน',
      image: '/Blog/off-grid.png',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      badge: 'Off-Grid'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="blog" className="py-16 sm:py-20 bg-white mobile-full-width bg-section-mobile overflow-hidden">
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

        <FadeUp delay={0.2}>
          <div className="relative px-12 sm:px-16 lg:px-20">
            {/* Navigation Arrows - Outside */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-kb-orange rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl z-10 group border-2 border-gray-200 hover:border-kb-orange"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-kb-dark group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-kb-orange rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl z-10 group border-2 border-gray-200 hover:border-kb-orange"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-kb-dark group-hover:text-white transition-colors" />
            </button>

            {/* Main Carousel */}
            <div className="relative h-[500px] sm:h-[600px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={process.env.PUBLIC_URL + blogPosts[currentSlide].image}
                      alt={blogPosts[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 lg:p-12">
                    {/* Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="absolute top-6 left-6 sm:top-8 sm:left-8"
                    >
                      <div className={`bg-gradient-to-r ${blogPosts[currentSlide].color} text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base shadow-lg flex items-center gap-2`}>
                        {(() => {
                          const Icon = blogPosts[currentSlide].icon;
                          return <Icon className="w-4 h-4 sm:w-5 sm:h-5" />;
                        })()}
                        {blogPosts[currentSlide].badge}
                      </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="max-w-3xl"
                    >
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                        {blogPosts[currentSlide].title}
                      </h3>
                      <p className="text-lg sm:text-xl text-white/90 mb-4 sm:mb-6 font-medium">
                        {blogPosts[currentSlide].subtitle}
                      </p>
                      <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8">
                        {blogPosts[currentSlide].description}
                      </p>
                      <button 
                        onClick={() => window.location.href = `/blog/${
                          currentSlide === 0 ? 'hybrid-solar-system' : 
                          currentSlide === 1 ? 'on-grid-solar-system' : 
                          'off-grid-solar-system'
                        }`}
                        className="bg-white text-kb-orange px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-kb-orange hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        อ่านเพิ่มเติม
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {blogPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all ${
                      index === currentSlide
                        ? 'w-12 h-3 bg-white rounded-full'
                        : 'w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {blogPosts.map((post, index) => {
                const Icon = post.icon;
                return (
                  <motion.button
                    key={post.id}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative rounded-2xl overflow-hidden transition-all ${
                      index === currentSlide
                        ? 'ring-4 ring-kb-orange shadow-xl'
                        : 'ring-2 ring-gray-200 hover:ring-gray-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="aspect-[4/3] relative">
                      <img
                        src={process.env.PUBLIC_URL + post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Icon and Badge */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${post.color} flex items-center justify-center mb-2 shadow-lg`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <span className="text-white font-bold text-xs sm:text-sm">{post.badge}</span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </FadeUp>

        {/* Coming Soon Section */}
        <FadeUp delay={0.4}>
          <div className="mt-12 sm:mt-16 text-center bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-kb-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-kb-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-kb-dark mb-3 sm:mb-4">
              บทความเพิ่มเติมกำลังจะมาเร็วๆ นี้
            </h3>
            <p className="text-base sm:text-lg text-kb-gray max-w-2xl mx-auto">
              เรากำลังเตรียมบทความและข่าวสารที่น่าสนใจเกี่ยวกับพลังงานแสงอาทิตย์ เทคโนโลยีใหม่ๆ และเคล็ดลับการดูแลระบบโซล่าเซลล์ให้กับคุณ
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Blog;
