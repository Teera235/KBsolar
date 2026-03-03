import { motion } from 'framer-motion';
import { FadeUp } from './AnimatedSection';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'KB Solar และ SolarHub ร่วมงาน Rracks เม้าท์ติ้งที่รับประกันนาน 25 ปี',
      description: '"ครูบอล" อินฟูไฮบริด แห่ง KB Solar และ อ.อิสระ แห่ง SolarHub มางานของ Rracks เม้าท์ติ้งที่รับประกันนาน 25 ปี การติดตั้งหลังคาโซล่าเซลล์ (Solar Rooftop) ได้รับความนิยมเพิ่มขึ้นอย่างมากในประเทศไทย',
      image: '/Blog/solar-house-1.jpg',
      readTime: '5 MIN READ',
      badge: 'NEWS RELEASE'
    },
    {
      id: 2,
      title: 'การออกแบบระบบโซล่าร์ และคำนวณจุดคุ้มทุนการติดตั้ง รวมถึงการเลือกใช้ระบบที่เหมาะสม',
      description: 'การออกแบบระบบโซล่าร์ และคำนวณจุดคุ้มทุนการติดตั้ง รวมถึงการเลือกใช้ระบบที่เหมาะสมด้วยที่คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ ขอบคุณ LVTOPSUN ที่จัดกิจกรรมดีๆในครั้งนี้ครับ',
      image: '/Blog/lvtopsun-kasetsart.png',
      readTime: '8 MIN READ',
      badge: 'NEWS RELEASE'
    },
    {
      id: 3,
      title: 'เทรนนิ่งจนกว่าผู้ใช้จะเข้าใจและเข้าถึงลดได้ตามเป้า',
      description: 'การฝึกอบรมและให้ความรู้เกี่ยวกับระบบโซล่าร์เซลล์ เพื่อให้ผู้ใช้เข้าใจการใช้งานและสามารถลดค่าไฟฟ้าได้ตามเป้าหมายที่ตั้งไว้ พร้อมการดูแลและให้คำปรึกษาอย่างต่อเนื่อง',
      image: '/Blog/training-solar.png',
      readTime: '6 MIN READ',
      badge: 'NEWS RELEASE'
    },
    {
      id: 4,
      title: 'BESS hybrid C&I 125kW/261kWh ระบบกักเก็บพลังงาน เพื่อธุรกิจที่ยั่งยืน',
      description: 'ความมั่นคงทางพลังงานคือสิ่งสำคัญต่อธุรกิจ กุมภานี้พบกันครับ first site ที่ไทย จัดให้แบบพิเศษ รอชมได้เลยครับ Solis Inverter hybrid 125kW BESS Battery 261kWh LVTOPSUN Aiko ABC technology 124.45kWp Backup Systems & AC charger',
      image: '/Blog/bess-hybrid-ci.png',
      readTime: '5 MIN READ',
      badge: 'BLOG'
    },
    {
      id: 5,
      title: 'ทำไม On-Grid ถึงเป็นตัวเลือกอันดับ 1 ของคนไทย',
      subtitle: 'ประหยัดสูงสุด คืนทุนเร็วที่สุด',
      description: 'ระบบโซล่าเซลล์แบบเชื่อมต่อกับโครงข่าย (Solar Panels On-Grid) สามารถขายไฟส่วนเกินคืนให้การไฟฟ้าได้ ประหยัดค่าไฟสูงสุด 80-95%',
      image: '/Blog/0n-grid.webp',
      slug: 'on-grid-solar-system'
    },
    {
      id: 6,
      title: 'Off-Grid คือคำตอบสำหรับความเป็นอิสระ',
      subtitle: 'อิสระเต็มที่ ไม่ต้องพึ่งการไฟฟ้า',
      description: 'ระบบโซล่าเซลล์แบบอิสระที่ไม่ต้องพึ่งพาการไฟฟ้า (Solar Cell Rooftop Home) มีแบตเตอรี่เก็บพลังงาน',
      image: '/Blog/off-grid.webp',
      slug: 'off-grid-solar-system'
    },
    {
      id: 7,
      title: 'Hybrid Solar System ตอบโจทย์ทุกความต้องการ',
      subtitle: 'ระบบที่ให้คุณทั้งประหยัดและมีไฟสำรอง',
      description: 'ระบบโซล่าเซลล์ที่ผสมผสาน (Solar Panels Hybrid) สามารถใช้พลังงานจากโซลาร์เซลล์ แบตเตอรี่ และโครงข่ายการไฟฟ้าร่วมกันได้',
      image: '/Blog/hrbrid.webp',
      slug: 'hybrid-solar-system'
    }
  ];

  return (
    <section id="blog" className="py-16 sm:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeUp>
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl lg:text-5xl font-bold text-kb-dark">
              Featured News
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-semibold">Recently Published</span>
              <div className="w-2 h-2 rounded-full bg-kb-orange animate-pulse" />
            </div>
          </div>
        </FadeUp>

        {/* Featured Layout: 1 Large + 1 Medium + 2 Small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mb-8">
          
          {/* Left - Main Large Feature (5 columns) */}
          <div className="md:col-span-2 lg:col-span-5">
            <motion.div
              className="group relative overflow-hidden cursor-pointer bg-black h-full rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-full overflow-hidden">
                <img 
                  src={process.env.PUBLIC_URL + blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
                  </div>
                  {blogPosts[0].badge}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-white text-xs font-bold uppercase tracking-wider mb-2">
                    {blogPosts[0].readTime}
                  </p>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-kb-orange transition-colors line-clamp-2">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm line-clamp-3">
                    {blogPosts[0].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle - Medium Feature (4 columns) */}
          <div className="md:col-span-2 lg:col-span-4">
            <motion.div
              className="group relative overflow-hidden cursor-pointer bg-black h-full rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-full overflow-hidden">
                <img 
                  src={process.env.PUBLIC_URL + blogPosts[1].image} 
                  alt={blogPosts[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
                  </div>
                  {blogPosts[1].badge}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-white text-xs font-bold uppercase tracking-wider mb-2">
                    {blogPosts[1].readTime}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-kb-orange transition-colors line-clamp-2">
                    {blogPosts[1].title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - 2 Small Features Stacked (3 columns) */}
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {blogPosts.slice(2, 4).map((post, index) => (
              <motion.div
                key={post.id}
                className="group relative overflow-hidden cursor-pointer bg-black rounded-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
              >
                <div className="relative h-[180px] sm:h-[190px] overflow-hidden">
                  <img 
                    src={process.env.PUBLIC_URL + post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                    <div className="w-3 h-3 rounded-full bg-white/30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    {post.badge}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <p className="text-white text-xs font-bold uppercase tracking-wider mb-1">
                      {post.readTime}
                    </p>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-kb-orange transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom 3 Blog Cards - Simple Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(4, 7).map((post, index) => {
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.a
                  href={`/blog/${post.slug}`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={process.env.PUBLIC_URL + post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-kb-orange transition-colors">
                      {post.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    
                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-kb-orange font-semibold text-sm">
                      <span>อ่านเพิ่มเติม</span>
                      <motion.svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Blog;
