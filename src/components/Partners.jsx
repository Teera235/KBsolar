import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Shield, Award, CheckCircle, Sun, Factory, Home, Building, ChevronLeft, ChevronRight, Package } from 'lucide-react';
import { useLang } from '../i18n';
import { SectionHeading } from './ui';

const Partners = () => {
  const { t } = useLang();
  const [selectedRaw, setSelectedPartner] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const partners = [
    { 
      name: 'SOLIS', 
      logo: '/partners/Solis.webp',
      type: 'Inverter',
      tagline: t('ผู้เชี่ยวชาญด้านอินเวอร์เตอร์โซลาร์ระดับโลก', 'A world-class solar inverter specialist'),
      description: t('Solis เป็นผู้ผลิตอินเวอร์เตอร์รายใหญ่ที่มีการติดตั้งทั่วโลก จุดแข็งคือความเสถียรของระบบไฟฟ้า การป้องกันครบ และความแม่นยำในการแปลงพลังงาน', 'Solis is a major inverter manufacturer with installations worldwide. Its strengths are electrical stability, comprehensive protection and precise power conversion.'),
      icon: Zap,
      color: 'from-kb-orange to-orange-600',
      products: [
        '/BRAND/SOLIS/Solis 1.webp',
        '/BRAND/SOLIS/Solis 2.webp',
        '/BRAND/SOLIS/Solis 3.webp',
        '/BRAND/SOLIS/Solis 4.webp',
        '/BRAND/SOLIS/Solis 5.webp',
      ],
      technologies: [
        { title: 'High Efficiency Conversion', desc: t('ประสิทธิภาพสูงสุด (Max Efficiency) ≈ 98.7%', 'Max Efficiency ≈ 98.7%') },
        { title: 'Multiple MPPT', desc: t('เพิ่มการดึงพลังงานสูงสุดจากแผงในสภาวะเงาบัง/ทิศทางต่างกัน', 'Gets the most energy from panels under shading or facing different directions') },
        { title: 'Advanced Protection', desc: 'Over/Under Voltage, Anti-Islanding, DC Arc Fault Detection' },
        { title: 'Smart Monitoring', desc: t('Real-time monitoring ผ่านแอปและ Cloud', 'Real-time monitoring via app and Cloud') },
      ],
      standards: ['IEC 62109', 'IEC 61727', 'CE', 'TUV', 'Grid Code Compliance'],
      suitable: [
        { icon: Home, text: t('บ้านพักอาศัย (Residential)', 'Residential homes') },
        { icon: Building, text: t('อาคารพาณิชย์และโรงงาน (Commercial & Industrial)', 'Commercial & Industrial buildings') },
        { icon: Shield, text: t('ระบบที่ต้องการความเสถียรและดูแลระยะยาว', 'Systems that need stability and long-term support') },
      ],
      whyChoose: t('เสถียรจริง อัตราขัดข้องต่ำ บำรุงรักษาง่าย เหมาะกับอากาศร้อนชื้นแบบประเทศไทย', 'Truly stable, low failure rate, easy to maintain, and well suited to Thailand\'s hot, humid climate.')
    },
    { 
      name: 'AIKO SOLAR', 
      logo: '/partners/AIKO SOLAR.webp',
      type: t('แผงโซลาร์เซลล์ (N-Type)', 'Solar Module (N-Type)'),
      tagline: t('ผู้นำด้านเทคโนโลยีเซลล์แสงอาทิตย์แบบ N-Type', 'A leader in N-Type solar cell technology'),
      description: t('AIKO โดดเด่นด้านการพัฒนาเซลล์ที่ให้กำลังไฟต่อพื้นที่สูง ลดการเสื่อมสภาพในระยะยาว ประสิทธิภาพระดับแนวหน้า', 'AIKO stands out for developing cells with high power per area and less long-term degradation, delivering top-tier efficiency.'),
      icon: Sun,
      color: 'from-kb-orange to-orange-600',
      products: [
        '/BRAND/AIKO SOLAR/AIKO 1.webp',
        '/BRAND/AIKO SOLAR/AIKO 2.webp',
        '/BRAND/AIKO SOLAR/AIKO 3.webp',
        '/BRAND/AIKO SOLAR/AIKO 4.webp',
        '/BRAND/AIKO SOLAR/AIKO 5.webp',
        '/BRAND/AIKO SOLAR/AIKO 6.webp',
      ],
      technologies: [
        { title: 'N-Type ABC Cell', desc: t('All Back Contact - ไม่มี Busbar ด้านหน้า ลดการบังแสง', 'All Back Contact - no front busbars, so less shading') },
        { title: 'High Module Efficiency', desc: t('ประสิทธิภาพสูงกว่า 22–23%+', 'Efficiency above 22–23%+') },
        { title: 'Low Degradation', desc: t('ปีแรก ≤ 1% หลังจากนั้น ~0.35% ต่อปี', '≤ 1% in the first year, then ~0.35% per year') },
        { title: 'Better Low-Light Performance', desc: t('ผลิตไฟได้ดีในแสงเช้า/เย็นและสภาพเมฆมาก', 'Generates well in morning/evening light and cloudy conditions') },
      ],
      standards: ['IEC 61215', 'IEC 61730', 'TUV', 'CE', 'ISO 9001/14001'],
      suitable: [
        { icon: Home, text: t('พื้นที่ติดตั้งจำกัด ต้องการกำลังไฟสูงต่อพื้นที่', 'Limited roof space that needs high power per area') },
        { icon: Award, text: t('โครงการที่เน้น ROI ระยะยาว', 'Projects focused on long-term ROI') },
        { icon: Zap, text: t('ระบบที่ต้องการประสิทธิภาพสูงสุด', 'Systems that need maximum efficiency') },
      ],
      whyChoose: t('กำลังต่อแผงสูง เสื่อมช้ากว่าแผงทั่วไป เหมาะกับงานที่ต้องการประสิทธิภาพระดับมืออาชีพ', 'High output per panel and slower degradation than standard panels. Suited to work that demands professional-grade performance.')
    },
    { 
      name: 'LVtopsun', 
      logo: '/partners/LVtopsun.webp',
      type: t('แผงโซลาร์เซลล์ (เกรดอุตสาหกรรม)', 'Solar Module (Industrial Grade)'),
      tagline: t('แผงโซลาร์เซลล์สำหรับงานโครงการ เน้นความแข็งแรงและความคุ้มค่า', 'Solar panels for project work, built for strength and value'),
      description: t('LVTOPSUN มุ่งเน้นการผลิตแผงที่ผ่านการทดสอบสภาพแวดล้อมหนัก เหมาะกับงานเชิงพาณิชย์และโรงงาน', 'LVTOPSUN focuses on panels tested for harsh environments, suited to commercial and factory installations.'),
      icon: Factory,
      color: 'from-kb-orange to-orange-600',
      products: [
        '/BRAND/LVTOPSUN/LVTOPGUN 1.webp',
        '/BRAND/LVTOPSUN/TOPSUN 2.webp',
        '/BRAND/LVTOPSUN/TOPSUN 3.webp',
        '/BRAND/LVTOPSUN/TOPSUN 4.webp',
      ],
      technologies: [
        { title: 'Monocrystalline / Half-Cell', desc: t('ลดความสูญเสียจากความต้านทานภายใน', 'Reduces losses from internal resistance') },
        { title: 'High Mechanical Strength', desc: t('ทนแรงลมและแรงกดหิมะตามมาตรฐานสากล', 'Withstands wind and snow loads to international standards') },
        { title: 'PID Resistance', desc: t('ลดปัญหา Potential Induced Degradation', 'Reduces Potential Induced Degradation') },
      ],
      standards: ['IEC 61215', 'IEC 61730', 'TUV', 'CE'],
      suitable: [
        { icon: Factory, text: t('โรงงาน, โกดัง, โครงการเชิงพาณิชย์', 'Factories, warehouses, commercial projects') },
        { icon: Award, text: t('งานที่ต้องการความคุ้มค่าต่อวัตต์ (Cost/Watt)', 'Projects that need good value per watt (Cost/Watt)') },
        { icon: Building, text: t('ระบบขนาดกลางถึงใหญ่', 'Medium to large systems') },
      ],
      whyChoose: t('แข็งแรง เชื่อถือได้ และให้ความคุ้มค่าด้านต้นทุนในงานโครงการ', 'Strong, reliable and cost-effective for project work.')
    },
    { 
      name: 'JA Solar', 
      logo: '/partners/JA Solar.webp',
      type: t('แผงโซลาร์เซลล์ (Tier-1)', 'Solar Module (Tier-1)'),
      tagline: t('หนึ่งในผู้ผลิตแผงโซลาร์เซลล์รายใหญ่ที่สุดของโลก', 'One of the world\'s largest solar panel manufacturers'),
      description: t('JA Solar ถูกจัดอยู่ในกลุ่ม Tier-1 Manufacturer ที่ใช้ในโครงการพลังงานแสงอาทิตย์ขนาดใหญ่ทั่วโลก', 'JA Solar is ranked as a Tier-1 Manufacturer and is used in large solar projects around the world.'),
      icon: Award,
      color: 'from-kb-orange to-orange-600',
      products: [
        '/BRAND/JASOLAR/JASOLAR 1.webp',
        '/BRAND/JASOLAR/JASOLAR 2.webp',
        '/BRAND/JASOLAR/JASOLAR 3.webp',
        '/BRAND/JASOLAR/JASOLAR 4.webp',
        '/BRAND/JASOLAR/JASOLAR 5.webp',
      ],
      technologies: [
        { title: 'PERC / TOPCon Technology', desc: t('เทคโนโลยีเซลล์ประสิทธิภาพสูง', 'High-efficiency cell technology') },
        { title: 'High Power Output', desc: t('โมดูลระดับ 550–700W สำหรับ Utility Scale', '550–700W modules for Utility Scale') },
        { title: 'Low Degradation', desc: t('เสถียรในระยะยาว', 'Stable over the long term') },
        { title: 'High Reliability Manufacturing', desc: t('คุณภาพสม่ำเสมอทุกล็อต', 'Consistent quality in every batch') },
      ],
      standards: ['IEC 61215', 'IEC 61730', 'TUV', 'CE', 'ISO 9001/14001'],
      suitable: [
        { icon: Building, text: t('โครงการเชิงพาณิชย์ขนาดใหญ่', 'Large commercial projects') },
        { icon: Sun, text: 'Solar Farm / Utility Scale' },
        { icon: Shield, text: t('งานที่ต้องการซัพพลายเชนมั่นคงและคุณภาพระดับโลก', 'Projects that need a stable supply chain and world-class quality') },
      ],
      whyChoose: t('แบรนด์ระดับสากล ใช้จริงในโครงการขนาดใหญ่ คุณภาพสม่ำเสมอ และความเสี่ยงต่ำ', 'An international brand proven in large projects, with consistent quality and low risk.')
    },
  ];

  // Re-read from the current-language list so an open modal follows a language switch
  const selectedPartner = selectedRaw && partners.find((p) => p.name === selectedRaw.name);

  const handleSelectPartner = (partner) => {
    setSelectedPartner(partner);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedPartner) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedPartner.products.length);
    }
  };

  const prevImage = () => {
    if (selectedPartner) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedPartner.products.length) % selectedPartner.products.length);
    }
  };

  return (
    <>
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title={t('อุปกรณ์คุณภาพจาก', 'Quality Equipment from')}
            highlight={t('แบรนด์ชั้นนำระดับโลก', 'World-Leading Brands')}
            subtitle={t('เราคัดสรรเฉพาะอุปกรณ์คุณภาพสูง มาตรฐานสากล รับประกันยาวนาน', 'We select only high-quality, internationally certified equipment with long warranties.')}
          />

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {partners.map((partner, idx) => (
              <motion.button
                type="button"
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => handleSelectPartner(partner)}
                aria-label={partner.name}
                className="card-kb group p-5 sm:p-6 flex items-center justify-center cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-16 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Detail Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-[9999]">
            <motion.div
              className="absolute inset-0 bg-black/60 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPartner(null)}
            >
              <motion.div
                className="bg-white rounded-[1.5rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl ring-1 ring-black/5 modal-scrollbar"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className={`sticky top-0 bg-gradient-to-r ${selectedPartner.color} p-4 sm:p-6 rounded-t-[1.5rem] z-10`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-white rounded-xl p-2 sm:p-3 shadow-lg">
                        <img 
                          src={selectedPartner.logo} 
                          alt={selectedPartner.name} 
                          className="h-8 sm:h-10 w-auto object-contain" 
                        />
                      </div>
                      <div className="text-white">
                        <div className="flex items-center gap-2">
                          <selectedPartner.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-xs sm:text-sm opacity-90">{selectedPartner.type}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold">{selectedPartner.name}</h3>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPartner(null)}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors mobile-close-button"
                      aria-label={t('ปิด', 'Close')}
                    >
                      <X className="w-5 h-5 text-white mobile-close-icon" />
                    </button>
                  </div>
                  <p className="text-white/90 mt-3 sm:mt-4 text-sm sm:text-lg">{selectedPartner.tagline}</p>
                </div>

                {/* Modal Content */}
                <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
                  {/* Product Gallery */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-kb-orange" />
                      {t('สินค้าของเรา', 'Our Products')}
                    </h4>
                    
                    {/* Main Image */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden mb-4">
                      <div className="aspect-[16/9] sm:aspect-[2/1] flex items-center justify-center p-4 sm:p-8">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImageIndex}
                            src={selectedPartner.products[currentImageIndex]}
                            alt={`${selectedPartner.name} ${t('สินค้า', 'Product')} ${currentImageIndex + 1}`}
                            className="max-h-full max-w-full object-contain drop-shadow-xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                          />
                        </AnimatePresence>
                      </div>
                      
                      {/* Navigation Arrows */}
                      {selectedPartner.products.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
                          >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
                          >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                          </button>
                        </>
                      )}
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                        {currentImageIndex + 1} / {selectedPartner.products.length}
                      </div>
                    </div>
                    
                    {/* Thumbnail Gallery */}
                    <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                      {selectedPartner.products.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                            currentImageIndex === idx 
                              ? 'border-kb-orange shadow-lg' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${t('รูปย่อ', 'Thumbnail')} ${idx + 1}`}
                            className="w-full h-full object-contain bg-gray-50 p-1"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">{selectedPartner.description}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-kb-orange" />
                      {t('เทคโนโลยีหลัก', 'Key Technologies')}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      {selectedPartner.technologies.map((tech, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl p-3 sm:p-4 border border-gray-100 hover:border-orange-200 transition-colors">
                          <h5 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">{tech.title}</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">{tech.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Standards */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-kb-orange" />
                      {t('มาตรฐานรับรอง', 'Certifications')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.standards.map((std, idx) => (
                        <span 
                          key={idx} 
                          className="bg-kb-orange/10 text-kb-orange px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
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
                      {t('เหมาะกับงานแบบไหน', 'Best Suited For')}
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      {selectedPartner.suitable.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                          </div>
                          <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why We Choose */}
                  <div className={`bg-gradient-to-r ${selectedPartner.color} rounded-2xl p-4 sm:p-6 text-white`}>
                    <h4 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      {t('เหตุผลที่เราเลือกใช้', 'Why We Use It')}
                    </h4>
                    <p className="text-white/90 text-sm sm:text-lg">{selectedPartner.whyChoose}</p>
                  </div>

                  {/* CTA */}
                  <div className="text-center pt-2 sm:pt-4">
                    <button
                      onClick={() => {
                        setSelectedPartner(null);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-kb text-sm sm:text-base"
                    >
                      <Sun className="w-5 h-5" />
                      {t('สนใจติดตั้งระบบโซลาร์เซลล์', 'Interested in a Solar System?')}
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
