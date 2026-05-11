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
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            About Us
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 leading-tight px-2">
            KB Solar Energy
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 font-medium mb-4 px-2">
            "ลงทุนอย่างมั่นใจ ประหยัดอย่างยั่งยืน"
          </p>
          
          <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6 px-2">
            ช่วยบ้านและธุรกิจลดค่าไฟฟ้าด้วยระบบโซลาร์เซลล์ที่ออกแบบโดยทีมวิศวกรผู้เชี่ยวชาญ 
            วิเคราะห์จากข้อมูลจริง ติดตั้งตามมาตรฐานสากล
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-2">
            <button
              onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg shadow-orange-500/25 transition-all"
            >
              ขอใบเสนอราคา
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/', { state: { scrollTo: 'services' } })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:border-orange-500 hover:text-orange-500 text-gray-700 px-6 py-3 rounded-xl font-semibold text-base border-2 border-gray-200 transition-all"
            >
              ดูบริการ
            </button>
          </div>
        </motion.div>



      </div>
    </section>
  );
};

export default AboutUs;
