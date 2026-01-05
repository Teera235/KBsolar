import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Award, CheckCircle, Star, Zap } from 'lucide-react';
import { FadeUp, SlideLeft, SlideRight } from './AnimatedSection';

const SolisBrand = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log('Opening Solis modal');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Closing Solis modal');
    setIsModalOpen(false);
  };

  const brandFeatures = [
    {
      icon: Shield,
      title: 'การรับประกัน',
      description: 'รับประกันสินค้า 10-25 ปี',
      details: [
        'รับประกันผลิตภัณฑ์ 10 ปี',
        'รับประกันประสิทธิภาพ 25 ปี',
        'รับประกันการทำงาน 90% หลังปีที่ 10',
        'รับประกันการทำงาน 80% หลังปีที่ 25',
        'ศูนย์บริการทั่วประเทศไทย'
      ]
    },
    {
      icon: Award,
      title: 'คุณภาพระดับโลก',
      description: 'มาตรฐาน IEC, TUV, CE',
      details: [
        'ได้รับการรับรองมาตรฐาน IEC 61215',
        'ได้รับการรับรองมาตรฐาน IEC 61730',
        'ได้รับการรับรองจาก TUV Rheinland',
        'ได้รับการรับรองมาตรฐาน CE',
        'ผ่านการทดสอบในสภาพอากาศหลากหลาย'
      ]
    },
    {
      icon: Zap,
      title: 'เทคโนโลยีล้ำสมัย',
      description: 'ประสิทธิภาพสูงสุด 22.8%',
      details: [
        'เทคโนโลยี PERC Cell ล่าสุด',
        'ประสิทธิภาพการแปลงพลังงานสูงสุด 22.8%',
        'ทนต่อสภาพอากาศเลวร้าย',
        'ลดการสูญเสียพลังงานจากความร้อน',
        'ระบบ Anti-Reflective Coating'
      ]
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-kb-orange font-semibold text-sm uppercase tracking-wider">Premium Brand</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-kb-dark mt-2 mb-4">
                Solis Inverter
              </h2>
              <p className="text-kb-gray max-w-2xl mx-auto">
                อินเวอร์เตอร์คุณภาพสูงจากแบรนด์ชั้นนำระดับโลก พร้อมการรับประกันที่ครอบคลุม
              </p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Solis Logo & CTA */}
            <SlideLeft>
              <div className="text-center lg:text-left">
                <motion.div
                  className="inline-block bg-white rounded-2xl p-8 shadow-lg mb-8 cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-kb-orange"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOpenModal}
                >
                  <img 
                    src="/solis-logo.webp" 
                    alt="Solis Logo" 
                    className="h-16 mx-auto lg:mx-0 mb-4"
                  />
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-kb-orange">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">คลิกเพื่อดูรายละเอียด</span>
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-kb-dark mb-4">
                  ทำไมต้องเลือก Solis?
                </h3>
                <p className="text-kb-gray mb-6">
                  Solis เป็นแบรนด์อินเวอร์เตอร์ชั้นนำจากประเทศจีน ที่ได้รับความไว้วางใจจากลูกค้าทั่วโลก 
                  ด้วยเทคโนโลยีที่ล้ำสมัย คุณภาพที่เชื่อถือได้ และการรับประกันที่ครอบคลุม
                </p>
              </div>
            </SlideLeft>

            {/* Features Grid */}
            <SlideRight>
              <div className="grid gap-6">
                {brandFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-kb-orange"
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOpenModal}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-kb-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-kb-orange" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-kb-dark mb-2">{feature.title}</h4>
                        <p className="text-kb-gray text-sm">{feature.description}</p>
                        <div className="mt-2 text-kb-orange text-sm font-medium">
                          คลิกเพื่อดูรายละเอียด →
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999]">
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
                  <div className="flex items-center gap-4">
                    <img src="/solis-logo.webp" alt="Solis Logo" className="h-12" />
                    <div>
                      <h3 className="text-2xl font-bold text-kb-dark">Solis Inverter</h3>
                      <p className="text-kb-gray">อินเวอร์เตอร์คุณภาพสูงระดับโลก</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-8">
                    {brandFeatures.map((feature, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-kb-orange/10 rounded-lg flex items-center justify-center">
                            <feature.icon className="w-6 h-6 text-kb-orange" />
                          </div>
                          <h4 className="text-xl font-bold text-kb-dark">{feature.title}</h4>
                        </div>
                        
                        <div className="space-y-3">
                          {feature.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-kb-gray text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-kb-orange/5 to-orange-50 rounded-xl">
                    <h4 className="text-lg font-bold text-kb-dark mb-3">ทำไม KB Solar ถึงเลือกใช้ Solis?</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-kb-gray">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-kb-orange" />
                          <span>ประสิทธิภาพการแปลงพลังงานสูง</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-kb-orange" />
                          <span>ทนทานต่อสภาพอากาศไทย</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-kb-orange" />
                          <span>ระบบตรวจสอบและแจ้งเตือนอัตโนมัติ</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-kb-orange" />
                          <span>ศูนย์บริการครอบคลุมทั่วประเทศ</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-kb-orange" />
                          <span>ราคาเหมาะสมคุ้มค่าการลงทุน</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-kb-orange" />
                          <span>การรับประกันที่ครอบคลุมและยาวนาน</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => {
                        handleCloseModal();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-kb-orange hover:bg-kb-orange-dark text-white px-8 py-3 rounded-full font-semibold transition-colors"
                    >
                      สนใจติดตั้งระบบ Solis
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

export default SolisBrand;