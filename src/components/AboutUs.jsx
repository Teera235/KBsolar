import { Award, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const highlights = [
    'ทีมวิศวกรที่มีประสบการณ์ตรง',
    'อุปกรณ์คุณภาพจากแบรนด์ชั้นนำ',
    'บริการหลังการขายดูแลระยะยาว',
    'รับประกันงานติดตั้งและอุปกรณ์',
    'ให้คำปรึกษาฟรี ไม่มีค่าใช้จ่าย'
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 text-kb-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            About Us
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            KB Solar Energy
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
            "ลงทุนอย่างมั่นใจ ประหยัดอย่างยั่งยืน"
          </p>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            ช่วยบ้านและธุรกิจลดค่าไฟฟ้าด้วยระบบโซลาร์เซลล์ที่ออกแบบโดยทีมวิศวกรผู้เชี่ยวชาญ 
            วิเคราะห์จากข้อมูลจริง ติดตั้งตามมาตรฐานสากล
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
              className="inline-flex items-center justify-center gap-2 bg-kb-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 text-base"
            >
              ขอใบเสนอราคา
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/', { state: { scrollTo: 'services' } })}
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-kb-orange hover:text-kb-orange transition-all text-base"
            >
              ดูบริการ
            </button>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">ทำไมต้องเลือกเรา</h2>
            </div>
            <ul className="space-y-4">
              {highlights.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3 text-base md:text-lg text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-kb-orange to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
