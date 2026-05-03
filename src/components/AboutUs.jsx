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
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          {/* LEFT - Hero Content */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 text-kb-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4 w-fit">
              <Award className="w-3.5 h-3.5" />
              About Us
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
              KB Solar Energy
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 font-medium mb-4">
              "ลงทุนอย่างมั่นใจ ประหยัดอย่างยั่งยืน"
            </p>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
              ช่วยบ้านและธุรกิจลดค่าไฟฟ้าด้วยระบบโซลาร์เซลล์ที่ออกแบบโดยทีมวิศวกรผู้เชี่ยวชาญ 
              วิเคราะห์จากข้อมูลจริง ติดตั้งตามมาตรฐานสากล
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                className="inline-flex items-center justify-center gap-2 bg-kb-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25"
              >
                ขอใบเสนอราคา
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/', { state: { scrollTo: 'services' } })}
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:border-kb-orange hover:text-kb-orange transition-all"
              >
                ดูบริการ
              </button>
            </div>
          </motion.div>

          {/* RIGHT - Feature Cards (Hidden on mobile) */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-lg h-full">
              <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-kb-orange" />
                หลักการทำงาน
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-xl p-4 border border-gray-100 hover:border-kb-orange/30 hover:shadow-md transition-all"
                    whileHover={{ y: -2 }}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600 leading-tight">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Why Choose Us */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">ทำไมต้องเลือกเรา</h2>
              </div>
              <ul className="space-y-3">
                {highlights.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <div className="w-5 h-5 bg-gradient-to-br from-kb-orange to-amber-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats (Hidden on mobile) */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-kb-orange/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <h3 className="text-sm font-bold text-white mb-4 opacity-80">ตัวเลขที่พูดแทนเรา</h3>
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-gray-400 text-xs font-medium mt-1">{stat.label}</p>
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
