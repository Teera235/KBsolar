import { motion } from 'framer-motion';
import { useLang } from '../i18n';
import { SectionHeading } from './ui';

const Blog = () => {
  const { t } = useLang();

  const blogPosts = [
    {
      id: 1,
      title: {
        th: 'KB Solar และ SolarHub ร่วมงาน Rracks เม้าท์ติ้งที่รับประกันนาน 25 ปี',
        en: 'KB Solar and SolarHub join the Rracks event for mounting systems with a 25-year warranty'
      },
      description: {
        th: '"ครูบอล" อินฟูไฮบริด แห่ง KB Solar และ อ.อิสระ แห่ง SolarHub มางานของ Rracks เม้าท์ติ้งที่รับประกันนาน 25 ปี การติดตั้งหลังคาโซล่าเซลล์ (Solar Rooftop) ได้รับความนิยมเพิ่มขึ้นอย่างมากในประเทศไทย',
        en: '"Kru Ball" (Infu Hybrid) of KB Solar and Ajarn Itsara of SolarHub attended the Rracks event, showcasing mounting systems with a 25-year warranty. Solar rooftop installations have become far more popular in Thailand.'
      },
      image: '/Blog/solar-house-1.jpg',
      readTime: { th: 'อ่าน 5 นาที', en: '5 MIN READ' },
      badge: { th: 'ข่าวประชาสัมพันธ์', en: 'NEWS RELEASE' }
    },
    {
      id: 2,
      title: {
        th: 'การออกแบบระบบโซล่าร์ และคำนวณจุดคุ้มทุนการติดตั้ง รวมถึงการเลือกใช้ระบบที่เหมาะสม',
        en: 'Designing solar systems, calculating the break-even point and choosing the right system'
      },
      description: {
        th: 'การออกแบบระบบโซล่าร์ และคำนวณจุดคุ้มทุนการติดตั้ง รวมถึงการเลือกใช้ระบบที่เหมาะสมด้วยที่คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ ขอบคุณ LVTOPSUN ที่จัดกิจกรรมดีๆในครั้งนี้ครับ',
        en: 'Designing solar systems, calculating the break-even point of an installation and choosing the right system, at the Faculty of Engineering, Kasetsart University. Thank you to LVTOPSUN for organizing this great event.'
      },
      image: '/Blog/lvtopsun-kasetsart.png',
      readTime: { th: 'อ่าน 8 นาที', en: '8 MIN READ' },
      badge: { th: 'ข่าวประชาสัมพันธ์', en: 'NEWS RELEASE' }
    },
    {
      id: 3,
      title: {
        th: 'เทรนนิ่งจนกว่าผู้ใช้จะเข้าใจและเข้าถึงลดได้ตามเป้า',
        en: 'Training until users understand the system and reach their savings target'
      },
      description: {
        th: 'การฝึกอบรมและให้ความรู้เกี่ยวกับระบบโซล่าร์เซลล์ เพื่อให้ผู้ใช้เข้าใจการใช้งานและสามารถลดค่าไฟฟ้าได้ตามเป้าหมายที่ตั้งไว้ พร้อมการดูแลและให้คำปรึกษาอย่างต่อเนื่อง',
        en: 'Training and education on solar systems so users understand how to use them and can cut their electricity bills to the target they set, with ongoing support and advice.'
      },
      image: '/Blog/training-solar.png',
      readTime: { th: 'อ่าน 6 นาที', en: '6 MIN READ' },
      badge: { th: 'ข่าวประชาสัมพันธ์', en: 'NEWS RELEASE' }
    },
    {
      id: 4,
      title: {
        th: 'BESS hybrid C&I 125kW/261kWh ระบบกักเก็บพลังงาน เพื่อธุรกิจที่ยั่งยืน',
        en: 'BESS hybrid C&I 125kW/261kWh: energy storage for a sustainable business'
      },
      description: {
        th: 'ความมั่นคงทางพลังงานคือสิ่งสำคัญต่อธุรกิจ กุมภานี้พบกันครับ first site ที่ไทย จัดให้แบบพิเศษ รอชมได้เลยครับ Solis Inverter hybrid 125kW BESS Battery 261kWh LVTOPSUN Aiko ABC technology 124.45kWp Backup Systems & AC charger',
        en: 'Energy security matters to every business. See you this February at the first site of its kind in Thailand, a special project worth the wait. Solis Inverter hybrid 125kW, BESS Battery 261kWh, LVTOPSUN Aiko ABC technology 124.45kWp, Backup Systems & AC charger.'
      },
      image: '/Blog/bess-hybrid-ci.png',
      readTime: { th: 'อ่าน 5 นาที', en: '5 MIN READ' },
      badge: { th: 'บทความ', en: 'BLOG' }
    },
    {
      id: 5,
      title: {
        th: 'ทำไม On-Grid ถึงเป็นตัวเลือกอันดับ 1 ของคนไทย',
        en: 'Why On-Grid is the No. 1 choice in Thailand'
      },
      subtitle: {
        th: 'ประหยัดสูงสุด คืนทุนเร็วที่สุด',
        en: 'The biggest savings and the fastest payback'
      },
      description: {
        th: 'ระบบโซล่าเซลล์แบบเชื่อมต่อกับโครงข่าย (Solar Panels On-Grid) สามารถขายไฟส่วนเกินคืนให้การไฟฟ้าได้ ประหยัดค่าไฟสูงสุด 80-95%',
        en: 'A grid-connected solar system (Solar Panels On-Grid) can sell surplus power back to the utility and cut your power bill by up to 80-95%.'
      },
      image: '/Blog/0n-grid.webp',
      slug: 'on-grid-solar-system'
    },
    {
      id: 6,
      title: {
        th: 'Off-Grid คือคำตอบสำหรับความเป็นอิสระ',
        en: 'Off-Grid: The Answer for Energy Independence'
      },
      subtitle: {
        th: 'อิสระเต็มที่ ไม่ต้องพึ่งการไฟฟ้า',
        en: 'Fully independent, no need to rely on the utility'
      },
      description: {
        th: 'ระบบโซล่าเซลล์แบบอิสระที่ไม่ต้องพึ่งพาการไฟฟ้า (Solar Cell Rooftop Home) มีแบตเตอรี่เก็บพลังงาน',
        en: 'A standalone solar system that does not depend on the utility (Solar Cell Rooftop Home), with batteries to store energy.'
      },
      image: '/Blog/off-grid.webp',
      slug: 'off-grid-solar-system'
    },
    {
      id: 7,
      title: {
        th: 'Hybrid Solar System ตอบโจทย์ทุกความต้องการ',
        en: 'Hybrid Solar System: covers every need'
      },
      subtitle: {
        th: 'ระบบที่ให้คุณทั้งประหยัดและมีไฟสำรอง',
        en: 'A system that saves you money and gives you backup power'
      },
      description: {
        th: 'ระบบโซล่าเซลล์ที่ผสมผสาน (Solar Panels Hybrid) สามารถใช้พลังงานจากโซลาร์เซลล์ แบตเตอรี่ และโครงข่ายการไฟฟ้าร่วมกันได้',
        en: 'A combined solar system (Solar Panels Hybrid) that can use power from solar panels, batteries and the utility grid together.'
      },
      image: '/Blog/hrbrid.webp',
      slug: 'hybrid-solar-system'
    }
  ];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 lg:mb-14 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            className="!mb-0 lg:!mb-0"
            title={t('', 'Featured')}
            highlight={t('ข่าวเด่น', 'News')}
          />
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm">
            <span className="text-gray-600 text-sm font-semibold">{t('เผยแพร่ล่าสุด', 'Recently Published')}</span>
          </div>
        </div>

        {/* Featured Layout: 1 Large + 1 Medium + 2 Small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mb-8">
          
          {/* Left - Main Large Feature (5 columns) */}
          <div className="md:col-span-2 lg:col-span-5">
            <motion.div
              className="group relative overflow-hidden cursor-pointer bg-black h-full rounded-[1.25rem] ring-1 ring-black/5 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 motion-reduce:hover:translate-y-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-kb-img relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-full">
                <img 
                  src={blogPosts[0].image} 
                  alt={t(blogPosts[0].title)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/5" />
                
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kb-orange/90 text-white text-[11px] font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  {t(blogPosts[0].badge)}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-orange-300 text-xs font-bold uppercase tracking-wider mb-2">
                    {t(blogPosts[0].readTime)}
                  </p>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors line-clamp-2">
                    {t(blogPosts[0].title)}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm line-clamp-3">
                    {t(blogPosts[0].description)}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle - Medium Feature (4 columns) */}
          <div className="md:col-span-2 lg:col-span-4">
            <motion.div
              className="group relative overflow-hidden cursor-pointer bg-black h-full rounded-[1.25rem] ring-1 ring-black/5 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 motion-reduce:hover:translate-y-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="card-kb-img relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-full">
                <img 
                  src={blogPosts[1].image} 
                  alt={t(blogPosts[1].title)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/5" />
                
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kb-orange/90 text-white text-[11px] font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  {t(blogPosts[1].badge)}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-orange-300 text-xs font-bold uppercase tracking-wider mb-2">
                    {t(blogPosts[1].readTime)}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-300 transition-colors line-clamp-2">
                    {t(blogPosts[1].title)}
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
                className="group relative overflow-hidden cursor-pointer bg-black rounded-[1.25rem] ring-1 ring-black/5 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 motion-reduce:hover:translate-y-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
              >
                <div className="card-kb-img relative h-[180px] sm:h-[190px]">
                  <img 
                    src={post.image} 
                    alt={t(post.title)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/5" />
                  
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kb-orange/90 text-white text-[11px] font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  {t(post.badge)}
                </span>

                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <p className="text-orange-300 text-xs font-bold uppercase tracking-wider mb-1">
                      {t(post.readTime)}
                    </p>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-orange-300 transition-colors line-clamp-2">
                      {t(post.title)}
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
                className="group h-full"
              >
                <a
                  href={`/blog/${post.slug}`}
                  className="card-kb overflow-hidden cursor-pointer h-full flex flex-col"
                >
                  {/* Image Section */}
                  <div className="card-kb-img relative h-48 flex-shrink-0">
                    <img 
                      src={post.image} 
                      alt={t(post.title)}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-kb-orange transition-colors">
                      {t(post.title)}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                      {t(post.description)}
                    </p>
                    
                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-kb-orange font-semibold text-sm mt-auto">
                      <span>{t('อ่านเพิ่มเติม', 'Read More')}</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Blog;
