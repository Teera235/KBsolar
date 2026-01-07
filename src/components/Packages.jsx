import React, { useState } from 'react';
import { Check, X, Battery, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem, HoverScale } from './AnimatedSection';

const Packages = () => {
  const [activeTab, setActiveTab] = useState('hybrid');

  const tabs = [
    { id: 'ongrid', name: 'On-Grid', desc: 'ประหยัดค่าไฟ' },
    { id: 'hybrid', name: 'Hybrid', desc: 'ประหยัด + สำรองไฟ' },
    { id: 'offgrid', name: 'Off-Grid', desc: 'อิสระจากการไฟฟ้า' },
  ];

  const packages = {
    ongrid: {
      tagline: 'On-Grid System',
      description: 'ระบบผลิตไฟฟ้าเชื่อมต่อกับการไฟฟ้า ประหยัดค่าไฟได้ทันที คืนทุนเร็ว',
      plans: [
        {
          name: 'Starter',
          size: '3 kW',
          phase: '1 เฟส',
          price: '89,000',
          popular: false,
          specs: {
            saving: '1,200 - 1,800',
            panels: '5 แผง',
            area: '12-15 ตร.ม.',
            production: '~400 หน่วย/เดือน',
            payback: '4-5 ปี',
          },
          features: [
            { name: 'Inverter SOLIS 3kW', included: true },
            { name: 'รับประกัน Inverter 10 ปี', included: true },
            { name: 'รับประกันแผง 25 ปี', included: true },
            { name: 'รับประกันงานติดตั้ง 2 ปี', included: true },
            { name: 'ระบบ Monitoring', included: true },
            { name: 'ล้างแผงฟรี 1 ครั้ง/ปี', included: false },
          ]
        },
        {
          name: 'Home',
          size: '5 kW',
          phase: '1 เฟส',
          price: '125,000',
          popular: true,
          popularLabel: 'ขายดีที่สุด',
          specs: {
            saving: '2,000 - 3,000',
            panels: '8 แผง',
            area: '20-24 ตร.ม.',
            production: '~700 หน่วย/เดือน',
            payback: '4-5 ปี',
          },
          features: [
            { name: 'Inverter SOLIS 5kW', included: true },
            { name: 'รับประกัน Inverter 10 ปี', included: true },
            { name: 'รับประกันแผง 25 ปี', included: true },
            { name: 'รับประกันงานติดตั้ง 2 ปี', included: true },
            { name: 'ระบบ Monitoring', included: true },
            { name: 'ล้างแผงฟรี 1 ครั้ง/ปี', included: true },
          ]
        },
        {
          name: 'Plus',
          size: '8 kW',
          phase: '1 เฟส',
          price: '175,000',
          popular: false,
          specs: {
            saving: '3,500 - 5,500',
            panels: '12 แผง',
            area: '30-36 ตร.ม.',
            production: '~1,100 หน่วย/เดือน',
            payback: '4-5 ปี',
          },
          features: [
            { name: 'Inverter SOLIS 8kW', included: true },
            { name: 'รับประกัน Inverter 10 ปี', included: true },
            { name: 'รับประกันแผง 25 ปี', included: true },
            { name: 'รับประกันงานติดตั้ง 2 ปี', included: true },
            { name: 'ระบบ Monitoring', included: true },
            { name: 'ล้างแผงฟรี 1 ครั้ง/ปี', included: true },
          ]
        },
      ]
    },
    hybrid: {
      tagline: 'Hybrid System',
      description: 'ระบบผสมผสาน ประหยัดค่าไฟ + สำรองไฟเมื่อไฟดับ ตอบโจทย์ทุกสถานการณ์',
      plans: [
        {
          name: 'Essential',
          size: '5 kW',
          phase: '1 เฟส',
          price: '185,000',
          battery: '5 kWh',
          popular: false,
          specs: {
            saving: '2,500 - 3,500',
            panels: '8 แผง',
            area: '20-24 ตร.ม.',
            production: '~700 หน่วย/เดือน',
            payback: '5-6 ปี',
            backup: '3-4 ชม.',
          },
          features: [
            { name: 'Inverter SOLIS Hybrid 5kW', included: true },
            { name: 'รับประกัน Inverter 5 ปี', included: true },
            { name: 'รับประกันแบตเตอรี่ 7 ปี', included: true },
            { name: 'รับประกันแผง 25 ปี', included: true },
            { name: 'รับประกันงานติดตั้ง 3 ปี', included: true },
            { name: 'Full Backup ทั้งบ้าน', included: false },
          ]
        },
        {
          name: 'Family',
          size: '6 kW',
          phase: '1 เฟส',
          price: '245,000',
          battery: '10 kWh',
          popular: true,
          popularLabel: 'คุ้มค่าที่สุด',
          specs: {
            saving: '3,000 - 4,000',
            panels: '10 แผง',
            area: '25-30 ตร.ม.',
            production: '~900 หน่วย/เดือน',
            payback: '5-6 ปี',
            backup: '6-8 ชม.',
          },
          features: [
            { name: 'Inverter SOLIS Hybrid 6kW', included: true },
            { name: 'รับประกัน Inverter 5 ปี', included: true },
            { name: 'รับประกันแบตเตอรี่ 10 ปี', included: true },
            { name: 'รับประกันแผง 25 ปี', included: true },
            { name: 'รับประกันงานติดตั้ง 3 ปี', included: true },
            { name: 'Full Backup ทั้งบ้าน', included: true },
          ]
        },
        {
          name: 'Premium',
          size: '8 kW',
          phase: '1 เฟส',
          price: '320,000',
          battery: '16 kWh',
          popular: false,
          specs: {
            saving: '3,500 - 5,000',
            panels: '12 แผง',
            area: '30-36 ตร.ม.',
            production: '~1,100 หน่วย/เดือน',
            payback: '5-6 ปี',
            backup: '10-12 ชม.',
          },
          features: [
            { name: 'Inverter SOLIS Hybrid 8kW', included: true },
            { name: 'รับประกัน Inverter 5 ปี', included: true },
            { name: 'รับประกันแบตเตอรี่ 10 ปี', included: true },
            { name: 'รับประกันแผง 25 ปี', included: true },
            { name: 'รับประกันงานติดตั้ง 3 ปี', included: true },
            { name: 'Full Backup ทั้งบ้าน', included: true },
          ]
        },
      ]
    },
    offgrid: {
      tagline: 'Off-Grid System',
      description: 'ระบบอิสระ 100% ไม่ต้องพึ่งการไฟฟ้า เหมาะสำหรับพื้นที่ห่างไกล',
      plans: [
        {
          name: 'Cabin',
          size: '3 kW',
          phase: '1 เฟส',
          price: '145,000',
          battery: '10 kWh',
          popular: false,
          specs: {
            saving: '~2,000/เดือน',
            panels: '6 แผง',
            area: '15-18 ตร.ม.',
            production: '~550 หน่วย/เดือน',
            payback: 'เน้นความมั่นคง',
            backup: '8-10 ชม.',
          },
          features: [
            { name: 'ไม่ต้องขออนุญาตการไฟฟ้า', included: true },
            { name: 'รับประกัน Inverter 5 ปี', included: true },
            { name: 'รับประกันแบตเตอรี่ 10 ปี', included: true },
            { name: 'รับประกันแผง 25 ปี', included: true },
            { name: 'รับประกันงานติดตั้ง 3 ปี', included: true },
            { name: 'รองรับเครื่องปั่นไฟ', included: false },
          ]
        },
        {
          name: 'Farm',
          size: '5 kW',
          phase: '1 เฟส',
          price: '220,000',
          battery: '16 kWh',
          popular: true,
          popularLabel: 'นิยมที่สุด',
          specs: {
            saving: '~3,500/เดือน',
            panels: '10 แผง',
            area: '25-30 ตร.ม.',
            production: '~900 หน่วย/เดือน',
            payback: 'เน้นความมั่นคง',
            backup: '12-16 ชม.',
          },
          features: [
            { name: 'ไม่ต้องขออนุญาตการไฟฟ้า', included: true },
            { name: 'รับประกัน Inverter 5 ปี', included: true },
            { name: 'รับประกันแบตเตอรี่ 10 ปี', included: true },
            { name: 'รับประกันแผง 25 ปี', included: true },
            { name: 'รับประกันงานติดตั้ง 3 ปี', included: true },
            { name: 'รองรับเครื่องปั่นไฟ', included: true },
          ]
        },
        {
          name: 'Estate',
          size: '8 kW',
          phase: '1 เฟส',
          price: '350,000',
          battery: '32 kWh',
          popular: false,
          specs: {
            saving: '~5,000/เดือน',
            panels: '14 แผง',
            area: '35-42 ตร.ม.',
            production: '~1,200 หน่วย/เดือน',
            payback: 'เน้นความมั่นคง',
            backup: '24+ ชม.',
          },
          features: [
            { name: 'ไม่ต้องขออนุญาตการไฟฟ้า', included: true },
            { name: 'รับประกัน Inverter 5 ปี', included: true },
            { name: 'รับประกันแบตเตอรี่ 10 ปี', included: true },
            { name: 'รับประกันแผง 25 ปี', included: true },
            { name: 'รับประกันงานติดตั้ง 3 ปี', included: true },
            { name: 'รองรับเครื่องปั่นไฟ', included: true },
          ]
        },
      ]
    },
  };

  const currentPackage = packages[activeTab];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-kb-orange font-semibold text-sm tracking-wider uppercase">Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              เลือกแพ็คเกจที่เหมาะกับคุณ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              แพ็คเกจโซลาร์เซลล์ครบชุด พร้อมติดตั้งและรับประกัน
            </p>
          </div>
        </FadeUp>

        {/* Tabs */}
        <FadeUp delay={0.1}>
          <div className="flex justify-center mb-10 px-2">
            <div className="inline-flex bg-white rounded-full p-1 shadow-sm overflow-x-auto">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-kb-orange text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.name}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {currentPackage.plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-kb-orange to-kb-orange-dark text-white shadow-xl scale-105 z-10' 
                    : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                }`}
              >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-amber-400 text-gray-900 text-center py-2 font-bold text-sm flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  {plan.popularLabel}
                </div>
              )}

              {/* Plan Header */}
              <div className="p-6 pb-4">
                <h4 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h4>
                <p className={`text-sm mt-1 ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                  {plan.size} • {plan.phase}
                </p>
                {plan.battery && (
                  <div className={`inline-flex items-center gap-1 mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                    plan.popular ? 'bg-white/20 text-white' : 'bg-orange-100 text-kb-orange'
                  }`}>
                    <Battery className="w-3 h-3" />
                    แบตเตอรี่ {plan.battery}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className={`px-6 py-4 ${plan.popular ? 'bg-white/10' : 'bg-gray-50'}`}>
                <p className={`text-xs mb-1 ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>เริ่มต้นที่</p>
                <div className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  ฿{plan.price}
                </div>
              </div>

              {/* Specs */}
              <div className="px-6 py-4 space-y-2">
                <div className="flex justify-between">
                  <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>ประหยัด/เดือน</span>
                  <span className={`text-sm font-semibold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>฿{plan.specs.saving}</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>แผงโซลาร์</span>
                  <span className={`text-sm font-semibold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>{plan.specs.panels}</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>พื้นที่ติดตั้ง</span>
                  <span className={`text-sm font-semibold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>{plan.specs.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>ผลิตไฟได้</span>
                  <span className={`text-sm font-semibold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>{plan.specs.production}</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>คืนทุน</span>
                  <span className={`text-sm font-semibold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>{plan.specs.payback}</span>
                </div>
                {plan.specs.backup && (
                  <div className="flex justify-between">
                    <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>สำรองไฟได้</span>
                    <span className={`text-sm font-semibold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>{plan.specs.backup}</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className={`px-6 py-4 border-t ${plan.popular ? 'border-white/20' : 'border-gray-100'}`}>
                <ul className="space-y-2">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      {feature.included ? (
                        <Check className="w-4 h-4 flex-shrink-0 text-kb-orange" />
                      ) : (
                        <X className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-white/40' : 'text-gray-300'}`} />
                      )}
                      <span className={`text-sm ${
                        feature.included 
                          ? (plan.popular ? 'text-white' : 'text-gray-700') 
                          : (plan.popular ? 'text-white/40' : 'text-gray-400')
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-6 pt-2">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full py-3 rounded-lg text-center font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-kb-orange hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  เลือกแพ็คเกจนี้
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

        {/* Footer Note */}
        <FadeUp delay={0.3}>
          <div className="text-center mt-10">
            <p className="text-sm text-gray-500 mb-4">
              * ราคาอาจเปลี่ยนแปลงตามสภาพหน้างานจริง
            </p>
            <motion.a 
              href="#contact" 
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-kb-orange hover:text-kb-orange-dark font-medium transition-colors"
            >
              ต้องการแพ็คเกจพิเศษ? ติดต่อเรา
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Packages;
