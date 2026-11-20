import { Layers, CheckCircle, TrendingUp, Database, Settings, ArrowRight, Phone, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SectionHeading, CountUp } from './ui';
import { useLang } from '../i18n';

const AboutUs = () => {
  const navigate = useNavigate();
  const { t } = useLang();

  const features = [
    { icon: Database, title: t('ศึกษา', 'Study'), desc: t('วิเคราะห์ข้อมูลการใช้ไฟจริง', 'Analyse real electricity-use data'), color: 'from-orange-500 to-amber-500' },
    { icon: TrendingUp, title: t('เรียนรู้', 'Learn'), desc: t('อัปเดตเทคโนโลยีอย่างต่อเนื่อง', 'Keep up with new technology'), color: 'from-blue-500 to-cyan-500' },
    { icon: Layers, title: t('สร้าง', 'Build'), desc: t('ออกแบบระบบที่เหมาะสม', 'Design the right system'), color: 'from-emerald-500 to-teal-500' },
    { icon: Settings, title: t('บริการ', 'Service'), desc: t('ดูแลหลังการขายระยะยาว', 'Long-term after-sales care'), color: 'from-purple-500 to-pink-500' }
  ];

  const highlights = [
    t('ทีมวิศวกรที่มีประสบการณ์ตรง', 'Engineers with hands-on experience'),
    t('อุปกรณ์คุณภาพจากแบรนด์ชั้นนำ', 'Quality equipment from leading brands'),
    t('บริการหลังการขายดูแลระยะยาว', 'Long-term after-sales service'),
    t('รับประกันงานติดตั้งและอุปกรณ์', 'Warranty on installation and equipment'),
    t('ให้คำปรึกษาฟรี ไม่มีค่าใช้จ่าย', 'Free consultation at no cost')
  ];

  const stats = [
    { value: 50, suffix: '+', label: t('โปรเจกต์', 'Projects'), },
    { value: 100, suffix: '%', label: t('ความพึงพอใจ', 'Satisfaction') },
    { value: 5, suffix: '+', label: t('ปีประสบการณ์', 'Years Exp.') }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ROW 1 - Top Section */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-6 lg:mb-8">
          
          {/* LEFT - Hero Content (7 cols) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              align="left"
              className="!mb-4"
              title="KB Solar"
              highlight="Energy"
            />

            <p className="text-xl text-gray-700 font-medium mb-3">
              "{t('ลงทุนอย่างมั่นใจ ประหยัดอย่างยั่งยืน', 'Invest with confidence, save for the long term')}"
            </p>
            
            <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-xl">
              {t(
                'ช่วยบ้านและธุรกิจลดค่าไฟฟ้าด้วยระบบโซลาร์เซลล์ที่ออกแบบโดยทีมวิศวกรผู้เชี่ยวชาญ วิเคราะห์จากข้อมูลจริง ติดตั้งตามมาตรฐานสากล',
                'We help homes and businesses cut electricity bills with solar systems designed by expert engineers, based on real data and installed to international standards.'
              )}
            </p>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                className="btn-kb text-sm"
              >
                {t('ขอใบเสนอราคา', 'Request a quote')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/', { state: { scrollTo: 'services' } })}
                className="btn-kb-ghost text-sm"
              >
                {t('ดูบริการ', 'View services')}
              </button>
            </div>
          </motion.div>

          {/* RIGHT - Feature Cards 2x2 (5 cols) */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-orange-50/60 to-white rounded-[1.5rem] p-5 border border-orange-100/70 h-full">
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-kb-orange" />
                {t('หลักการทำงาน', 'Our principles')}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="card-kb p-3 sm:p-4"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-2`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600 leading-snug">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ROW 2 - Bottom Section */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* LEFT - Why Choose Us (7 cols) */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card-kb hover:translate-y-0 p-6 h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 bg-kb-orange rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{t('ทำไมต้องเลือกเรา', 'Why choose us')}</h3>
              </div>
              <ul className="space-y-2.5">
                {highlights.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.08 }}
                  >
                    <div className="w-4 h-4 bg-kb-orange rounded flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT - Stats + Mini CTA (5 cols) */}
          <motion.div 
            className="lg:col-span-5 space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Stats Cards */}
            <div className="bg-[#0B0F17] rounded-[1.25rem] p-5 relative overflow-hidden">
              <div className="relative">
                <h3 className="text-xs font-bold text-white mb-3 opacity-80">{t('ตัวเลขที่พูดแทนเรา', 'Our numbers speak for us')}</h3>
                <div className="grid grid-cols-3 gap-2">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-2xl sm:text-3xl font-bold">
                        <CountUp value={`${stat.value}${stat.suffix}`} className="text-kb-accent" />
                      </p>
                      <p className="text-gray-400 text-[11px] sm:text-xs font-medium mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mini CTA */}
            <div className="bg-kb-orange rounded-[1.25rem] p-5 text-center relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-grid-white/10"></div>
              <div className="relative">
                <p className="text-sm font-bold text-white mb-2">{t('พร้อมเริ่มต้นแล้ว?', 'Ready to get started?')}</p>
                <p className="text-xs text-white/90 mb-3">{t('ปรึกษาฟรี ประเมินระบบให้เหมาะสม', 'Free consultation and system assessment')}</p>
                <button
                  onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                  className="inline-flex items-center justify-center gap-2 bg-white text-kb-orange-dark px-4 py-3 rounded-full font-bold text-sm hover:bg-orange-50 hover:-translate-y-0.5 transition shadow-xl w-full"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {t('ติดต่อเราเลย', 'Contact us')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
