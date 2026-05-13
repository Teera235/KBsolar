import { Zap, Sun, Shield, PhoneCall, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const stats = [
    { number: '500+', label: 'โครงการที่สำเร็จ' },
    { number: '10+', label: 'ปีประสบการณ์' },
    { number: '98%', label: 'ลูกค้าพึงพอใจ' },
    { number: '24/7', label: 'บริการหลังการขาย' },
  ];

  const features = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: 'ออกแบบเฉพาะคุณ',
      desc: 'วิเคราะห์และออกแบบระบบโซลาร์ที่เหมาะกับการใช้งานจริงของแต่ละบ้านและธุรกิจ'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'รับประกันยาวนาน',
      desc: 'รับประกันงานติดตั้งและอุปกรณ์ทุกชิ้น พร้อมดูแลหลังการขายตลอดอายุการใช้งาน'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'ประหยัดทันที',
      desc: 'เริ่มเห็นผลลดค่าไฟตั้งแต่เดือนแรก ด้วยระบบที่ติดตั้งได้มาตรฐานสากล'
    },
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: 'ปรึกษาฟรี',
      desc: 'ทีมวิศวกรพร้อมให้คำแนะนำโดยไม่มีค่าใช้จ่าย ตั้งแต่วางแผนจนติดตั้งเสร็จ'
    },
  ];

  return (
    <section id="about" className="bg-gray-950 text-white overflow-hidden">

      {/* Hero Block */}
      <div className="relative px-4 pt-16 pb-12 md:pt-24 md:pb-16 max-w-6xl mx-auto">

        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-orange-500/40 text-orange-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase">
            <Star className="w-3 h-3 fill-orange-400" />
            KB Solar Energy
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight">
            พลังงานแสงอาทิตย์<br />
            <span className="text-orange-400">เพื่อทุกบ้านของคุณ</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-4 leading-relaxed">
            "ลงทุนอย่างมั่นใจ ประหยัดอย่างยั่งยืน"
          </p>

          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
            ช่วยบ้านและธุรกิจลดค่าไฟฟ้าด้วยระบบโซลาร์เซลล์ที่ออกแบบโดยทีมวิศวกรผู้เชี่ยวชาญ
            วิเคราะห์จากข้อมูลจริง ติดตั้งตามมาตรฐานสากล
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-500/30"
            >
              ขอใบเสนอราคาฟรี
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/', { state: { scrollTo: 'services' } })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all"
            >
              ดูบริการทั้งหมด
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        className="border-y border-white/10 bg-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-black text-orange-400">{s.number}</div>
              <div className="text-gray-400 text-xs md:text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/5 hover:bg-white/8 border border-white/10 rounded-2xl p-5 md:p-6 flex gap-4 transition-all group"
            >
              <div className="w-12 h-12 bg-orange-500/15 text-orange-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/25 transition-all">
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-sm md:text-base mb-1">{f.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default AboutUs;
