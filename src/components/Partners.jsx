import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Shield, Award, CheckCircle, Sun, Factory, Home, Building } from 'lucide-react';

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const partners = [
    { 
      name: 'SOLIS', 
      logo: '/partners/Solis.webp',
      type: 'Inverter',
      tagline: 'ผู้เชี่ยวชาญด้านอินเวอร์เตอร์โซลาร์ระดับโลก',
      description: 'Solis เป็นผู้ผลิตอินเวอร์เตอร์รายใหญ่ที่มีการติดตั้งทั่วโลก จุดแข็งคือความเสถียรของระบบไฟฟ้า การป้องกันครบ และความแม่นยำในการแปลงพลังงาน',
      icon: Zap,
      color: 'from-kb-orange to-orange-600',
      technologies: [
        { title: 'High Efficiency Conversion', desc: 'ประสิทธิภาพสูงสุด (Max Efficiency) ≈ 98.7%' },
        { title: 'Multiple MPPT', desc: 'เพิ่มการดึงพลังงานสูงสุดจากแผงในสภาวะเงาบัง/ทิศทางต่างกัน' },
        { title: 'Advanced Protection', desc: 'Over/Under Voltage, Anti-Islanding, DC Arc Fault Detection' },
        { title: 'Smart Monitoring', desc: 'Real-time monitoring ผ่านแอปและ Cloud' },
      ],
      standards: ['IEC 62109', 'IEC 61727', 'CE', 'TUV', 'Grid Code Compliance'],
      suitable: [
        { icon: Home, text: 'บ้านพักอาศัย (Residential)' },
        { icon: Building, text: 'อาคารพาณิชย์และโรงงาน (Commercial & Industrial)' },
        { icon: Shield, text: 'ระบบที่ต้องการความเสถียรและดูแลระยะยาว' },
      ],
      whyChoose: 'เสถียรจริง อัตราขัดข้องต่ำ บำรุงรักษาง่าย เหมาะกับอากาศร้อนชื้นแบบประเทศไทย'
    },
    { 
      name: 'AIKO SOLAR', 
      logo: '/partners/AIKO SOLAR.png',
      type: 'Solar Module (N-Type)',
      tagline: 'ผู้นำด้านเทคโนโลยีเซลล์แสงอาทิตย์แบบ N-Type',
      description: 'AIKO โดดเด่นด้านการพัฒนาเซลล์ที่ให้กำลังไฟต่อพื้นที่สูง ลดการเสื่อมสภาพในระยะยาว ประสิทธิภาพระดับแนวหน้า',
      icon: Sun,
      color: 'from-kb-orange to-orange-600',
      technologies: [
        { title: 'N-Type ABC Cell', desc: 'All Back Contact - ไม่มี Busbar ด้านหน้า ลดการบังแสง' },
        { title: 'High Module Efficiency', desc: 'ประสิทธิภาพสูงกว่า 22–23%+' },
        { title: 'Low Degradation', desc: 'ปีแรก ≤ 1% หลังจากนั้น ~0.35% ต่อปี' },
        { title: 'Better Low-Light Performance', desc: 'ผลิตไฟได้ดีในแสงเช้า/เย็นและสภาพเมฆมาก' },
      ],
      standards: ['IEC 61215', 'IEC 61730', 'TUV', 'CE', 'ISO 9001/14001'],
      suitable: [
        { icon: Home, text: 'พื้นที่ติดตั้งจำกัด ต้องการกำลังไฟสูงต่อพื้นที่' },
        { icon: Award, text: 'โครงการที่เน้น ROI ระยะยาว' },
        { icon: Zap, text: 'ระบบที่ต้องการประสิทธิภาพสูงสุด' },
      ],
      whyChoose: 'กำลังต่อแผงสูง เสื่อมช้ากว่าแผงทั่วไป เหมาะกับงานที่ต้องการประสิทธิภาพระดับมืออาชีพ'
    },
    { 
      name: 'LVtopsun', 
      logo: '/partners/LVtopsun.webp',
      type: 'Solar Module (Industrial Grade)',
      tagline: 'แผงโซลาร์เซลล์สำหรับงานโครงการ เน้นความแข็งแรงและความคุ้มค่า',
      description: 'LVTOPSUN มุ่งเน้นการผลิตแผงที่ผ่านการทดสอบสภาพแวดล้อมหนัก เหมาะกับงานเชิงพาณิชย์และโรงงาน',
      icon: Factory,
      color: 'from-kb-orange to-orange-600',
      technologies: [
        { title: 'Monocrystalline / Half-Cell', desc: 'ลดความสูญเสียจากความต้านทานภายใน' },
        { title: 'High Mechanical Strength', desc: 'ทนแรงลมและแรงกดหิมะตามมาตรฐานสากล' },
        { title: 'PID Resistance', desc: 'ลดปัญหา Potential Induced Degradation' },
      ],
      standards: ['IEC 61215', 'IEC 61730', 'TUV', 'CE'],
      suitable: [
        { icon: Factory, text: 'โรงงาน, โกดัง, โครงการเชิงพาณิชย์' },
        { icon: Award, text: 'งานที่ต้องการความคุ้มค่าต่อวัตต์ (Cost/Watt)' },
        { icon: Building, text: 'ระบบขนาดกลางถึงใหญ่' },
      ],
      whyChoose: 'แข็งแรง เชื่อถือได้ และให้ความคุ้มค่าด้านต้นทุนในงานโครงการ'
    },
    { 
      name: 'JA Solar', 
      logo: '/partners/JA Solar.png',
      type: 'Solar Module (Tier-1)',
      tagline: 'หนึ่งในผู้ผลิตแผงโซลาร์เซลล์รายใหญ่ที่สุดของโลก',
      description: 'JA Solar ถูกจัดอยู่ในกลุ่ม Tier-1 Manufacturer ที่ใช้ในโครงการพลังงานแสงอาทิตย์ขนาดใหญ่ทั่วโลก',
      icon: Award,
      color: 'from-kb-orange to-orange-600',
      technologies: [
        { title: 'PERC / TOPCon Technology', desc: 'เทคโนโลยีเซลล์ประสิทธิภาพสูง' },
        { title: 'High Power Output', desc: 'โมดูลระดับ 550–700W สำหรับ Utility Scale' },
        { title: 'Low Degradation', desc: 'เสถียรในระยะยาว' },
        { title: 'High Reliability Manufacturing', desc: 'คุณภาพสม่ำเสมอทุกล็อต' },
      ],
      standards: ['IEC 61215', 'IEC 61730', 'TUV', 'CE', 'ISO 9001/14001'],
      suitable: [
        { icon: Building, text: 'โครงการเชิงพาณิชย์ขนาดใหญ่' },
        { icon: Sun, text: 'Solar Farm / Utility Scale' },
        { icon: Shield, text: 'งานที่ต้องการซัพพลายเชนมั่นคงและคุณภาพระดับโลก' },
      ],
      whyChoose: 'แบรนด์ระดับสากล ใช้จริงในโครงการขนาดใหญ่ คุณภาพสม่ำเสมอ และความเสี่ยงต่ำ'
    },
  ];

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-kb-orange font-semibold text-sm uppercase tracking-wider">Our Partners</span>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-2">
              อุปกรณ์คุณภาพจากแบรนด์ชั้นนำระดับโลก
            </h3>
            <p className="text-gray-500 text-sm mt-2">คลิกที่โลโก้เพื่อดูรายละเอียด</p>
          </motion.div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPartner(partner)}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center border border-gray-100 hover:border-kb-orange/30 cursor-pointer"
              >
                <img
                  src={process.env.PUBLIC_URL + partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
                <span className="mt-3 text-xs text-gray-400 group-hover:text-kb-orange transition-colors">
                  {partner.type}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-gray-500 text-sm">
              เราคัดสรรเฉพาะอุปกรณ์คุณภาพสูง มาตรฐานสากล รับประกันยาวนาน
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Detail Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-[9999]">
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPartner(null)}
            >
              <motion.div
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className={`sticky top-0 bg-gradient-to-r ${selectedPartner.color} p-6 rounded-t-3xl`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-white rounded-xl p-3 shadow-lg">
                        <img 
                          src={process.env.PUBLIC_URL + selectedPartner.logo} 
                          alt={selectedPartner.name} 
                          className="h-10 w-auto object-contain" 
                        />
                      </div>
                      <div className="text-white">
                        <div className="flex items-center gap-2">
                          <selectedPartner.icon className="w-5 h-5" />
                          <span className="text-sm opacity-90">{selectedPartner.type}</span>
                        </div>
                        <h3 className="text-2xl font-bold">{selectedPartner.name}</h3>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPartner(null)}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <p className="text-white/90 mt-4 text-lg">{selectedPartner.tagline}</p>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-8">
                  {/* Description */}
                  <div>
                    <p className="text-gray-600 text-lg leading-relaxed">{selectedPartner.description}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-kb-orange" />
                      เทคโนโลยีหลัก
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedPartner.technologies.map((tech, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <h5 className="font-semibold text-gray-800 mb-1">{tech.title}</h5>
                          <p className="text-gray-600 text-sm">{tech.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Standards */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-kb-orange" />
                      มาตรฐานรับรอง
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.standards.map((std, idx) => (
                        <span 
                          key={idx} 
                          className="bg-kb-orange/10 text-kb-orange px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Suitable For */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-kb-orange" />
                      เหมาะกับงานแบบไหน
                    </h4>
                    <div className="space-y-3">
                      {selectedPartner.suitable.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-green-600" />
                          </div>
                          <span className="text-gray-700">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why We Choose */}
                  <div className={`bg-gradient-to-r ${selectedPartner.color} rounded-2xl p-6 text-white`}>
                    <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      เหตุผลที่เราเลือกใช้
                    </h4>
                    <p className="text-white/90 text-lg">{selectedPartner.whyChoose}</p>
                  </div>

                  {/* CTA */}
                  <div className="text-center pt-4">
                    <button
                      onClick={() => {
                        setSelectedPartner(null);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-kb-orange hover:bg-kb-orange-dark text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center gap-2"
                    >
                      <Sun className="w-5 h-5" />
                      สนใจติดตั้งระบบโซลาร์เซลล์
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Partners;
