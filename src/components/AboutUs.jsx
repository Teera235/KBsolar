import { Layers, Award, CheckCircle, TrendingUp, Database, Settings, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AnimatedCounter } from './AnimatedSection';

const AboutUs = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Database, title: 'Study', desc: 'วิเคราะห์ข้อมูลการใช้ไฟจริง', color: 'from-orange-500 to-amber-500' },
    { icon: TrendingUp, title: 'Learn', desc: 'อัปเดตเทคโนโลยีอย่างต่อเนื่อง', color: 'from-blue-500 to-cyan-500' },
    { icon: Layers, title: 'Build', desc: 'ออกแบบระบบที่เหมาะสม', color: 'from-emerald-500 to-teal-500' },
    { icon: Settings, title: 'Service', desc: 'ดูแลหลังการขายระยะยาว', color: 'from-purple-500 to-pink-500' }
  ];

  const highlights = [
    'ทีมวิศวกรที่มีประสบการณ์ตรง',
    'อุปกรณ์คุณภาพจากแบรนด์ชั้นนำ',
    'บริการหลังการขายดูแลระยะยาว',
    'รับประกันงานติดตั้งและอุปกรณ์',
    'ให้คำปรึกษาฟรี ไม่มีค่าใช้จ่าย'
  ];

  const stats = [
    { value: 50, suffix: '+', label: 'Projects', color: 'from-kb-orange to-amber-400' },
    { value: 100, suffix: '%', label: 'Satisfaction', color: 'from-green-400 to-emerald-400' },
    { value: 5, suffix: '+', label: 'Years Exp.', color: 'from-blue-400 to-cyan-400' }
  ];

  return (
    <section id="about" className="min-h-screen bg-white overflow-hidden flex items-center py-2 md:py-8 lg:py-12">
      <div className="w-full max-w-[1100px] mx-auto px-2 md:px-6">
        
        {/* ROW 1 - Top Section */}
        <div className="grid lg:grid-cols-12 gap-2 md:gap-6 mb-2 md:mb-6">
          
          {/* LEFT - Hero Content (7 cols) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 text-kb-orange px-2 py-1 rounded-full text-[10px] md:text-xs font-semibold mb-1 md:mb-3 w-fit">
              <Award className="w-2.5 h-2.5 md:w-3 md:h-3" />
              About Us
            </div>
            
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 md:mb-2 leading-tight">
              KB Solar Energy
            </h1>
            
            <p className="text-sm md:text-xl text-gray-600 font-medium mb-1 md:mb-3">
              "ลงทุนอย่างมั่นใจ ประหยัดอย่างยั่งยืน"
            </p>
            
            <p className="text-[11px] md:text-sm lg:text-base text-gray-600 leading-relaxed mb-2 md:mb-6 max-w-xl">
              ช่วยบ้านและธุรกิจลดค่าไฟฟ้าด้วยระบบโซลาร์เซลล์ที่ออกแบบโดยทีมวิศวกรผู้เชี่ยวชาญ 
              วิเคราะห์จากข้อมูลจริง ติดตั้งตามมาตรฐานสากล
            </p>
            
            <div className="flex flex-col sm:flex-row gap-1.5 md:gap-3">
              <button
                onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                className="inline-flex items-center justify-center gap-2 bg-kb-orange text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 text-xs md:text-sm w-full sm:w-auto"
              >
                ขอใบเสนอราคา
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
              <button
                onClick={() => navigate('/', { state: { scrollTo: 'services' } })}
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-semibold border-2 border-gray-200 hover:border-kb-orange hover:text-kb-orange transition-all text-xs md:text-sm w-full sm:w-auto"
              >
                ดูบริการ
              </button>
            </div>
          </motion.div>

          {/* RIGHT - Feature Cards 2x2 (5 cols) */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-2 md:p-4 border border-gray-100 shadow-lg h-full">
              <h3 className="text-[10px] md:text-sm font-bold text-gray-900 mb-1.5 md:mb-3 flex items-center gap-1 md:gap-2">
                <Zap className="w-3 h-3 md:w-4 md:h-4 text-kb-orange" />
                หลักการทำงาน
              </h3>
              <div className="grid grid-cols-2 gap-1.5 md:gap-3">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-lg p-1.5 md:p-3 border border-gray-100 hover:border-kb-orange/30 hover:shadow-md transition-all"
                    whileHover={{ y: -2 }}
                  >
                    <div className={`w-7 h-7 md:w-9 md:h-9 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-1 md:mb-2`}>
                      <feature.icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                    </div>
                    <h4 className="text-[9px] md:text-xs font-bold text-gray-900 mb-0.5 md:mb-1">{feature.title}</h4>
                    <p className="text-[8px] md:text-[10px] text-gray-600 leading-tight">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ROW 2 - Bottom Section */}
        <div className="grid lg:grid-cols-12 gap-2 md:gap-6">
          
          {/* LEFT - Why Choose Us (7 cols) */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-2 md:p-5 border border-blue-100 h-full">
              <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                </div>
                <h2 className="text-xs md:text-base font-bold text-gray-900">ทำไมต้องเลือกเรา</h2>
              </div>
              <ul className="space-y-1 md:space-y-2">
                {highlights.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-1.5 md:gap-2 text-[10px] md:text-sm text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-gradient-to-br from-kb-orange to-amber-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-2 h-2 md:w-2.5 md:h-2.5 text-white" />
                    </div>
                    <span className="flex-1">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT - Stats + Mini CTA (5 cols) */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Stats Cards */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-2 md:p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-kb-orange/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <h3 className="text-[9px] md:text-xs font-bold text-white mb-1.5 md:mb-3 opacity-80">ตัวเลขที่พูดแทนเรา</h3>
                <div className="grid grid-cols-3 gap-1 md:gap-2">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-1 md:p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                      <p className={`text-lg md:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-gray-400 text-[7px] md:text-[9px] font-medium mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
