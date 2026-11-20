import { useState } from 'react';
import { Check, X, Battery, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './AnimatedSection';
import { useLang } from '../i18n';
import { SectionHeading } from './ui';

const Packages = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState('hybrid');

  const tabs = [
    { id: 'ongrid', name: 'On-Grid', desc: t('ประหยัดค่าไฟ', 'Lower electricity bills') },
    { id: 'hybrid', name: 'Hybrid', desc: t('ประหยัด + สำรองไฟ', 'Savings + backup power') },
    { id: 'offgrid', name: 'Off-Grid', desc: t('อิสระจากการไฟฟ้า', 'Independent from the grid') },
  ];

  const packages = {
    ongrid: {
      tagline: 'On-Grid System',
      description: t('ระบบผลิตไฟฟ้าเชื่อมต่อกับการไฟฟ้า ประหยัดค่าไฟได้ทันที คืนทุนเร็ว', 'A grid-connected system that cuts your electricity bill right away, with a fast payback.'),
      plans: [
        {
          name: 'Starter',
          size: '3 kW',
          phase: t('1 เฟส', '1-phase'),
          price: '89,000',
          popular: false,
          specs: {
            saving: '1,200 - 1,800',
            panels: t('5 แผง', '5 panels'),
            area: t('12-15 ตร.ม.', '12-15 m²'),
            production: t('~400 หน่วย/เดือน', '~400 units (kWh)/month'),
            payback: t('4-5 ปี', '4-5 years'),
          },
          features: [
            { name: 'Inverter SOLIS 3kW', included: true },
            { name: t('รับประกัน Inverter 10 ปี', '10-year inverter warranty'), included: true },
            { name: t('รับประกันแผง 25 ปี', '25-year panel warranty'), included: true },
            { name: t('รับประกันงานติดตั้ง 2 ปี', '2-year installation warranty'), included: true },
            { name: t('ระบบ Monitoring', 'Monitoring system'), included: true },
            { name: t('ล้างแผงฟรี 1 ครั้ง/ปี', 'Free panel cleaning once a year'), included: false },
          ]
        },
        {
          name: 'Home',
          size: '5 kW',
          phase: t('1 เฟส', '1-phase'),
          price: '125,000',
          popular: true,
          popularLabel: t('ขายดีที่สุด', 'Best seller'),
          specs: {
            saving: '2,000 - 3,000',
            panels: t('8 แผง', '8 panels'),
            area: t('20-24 ตร.ม.', '20-24 m²'),
            production: t('~700 หน่วย/เดือน', '~700 units (kWh)/month'),
            payback: t('4-5 ปี', '4-5 years'),
          },
          features: [
            { name: 'Inverter SOLIS 5kW', included: true },
            { name: t('รับประกัน Inverter 10 ปี', '10-year inverter warranty'), included: true },
            { name: t('รับประกันแผง 25 ปี', '25-year panel warranty'), included: true },
            { name: t('รับประกันงานติดตั้ง 2 ปี', '2-year installation warranty'), included: true },
            { name: t('ระบบ Monitoring', 'Monitoring system'), included: true },
            { name: t('ล้างแผงฟรี 1 ครั้ง/ปี', 'Free panel cleaning once a year'), included: true },
          ]
        },
        {
          name: 'Plus',
          size: '8 kW',
          phase: t('1 เฟส', '1-phase'),
          price: '175,000',
          popular: false,
          specs: {
            saving: '3,500 - 5,500',
            panels: t('12 แผง', '12 panels'),
            area: t('30-36 ตร.ม.', '30-36 m²'),
            production: t('~1,100 หน่วย/เดือน', '~1,100 units (kWh)/month'),
            payback: t('4-5 ปี', '4-5 years'),
          },
          features: [
            { name: 'Inverter SOLIS 8kW', included: true },
            { name: t('รับประกัน Inverter 10 ปี', '10-year inverter warranty'), included: true },
            { name: t('รับประกันแผง 25 ปี', '25-year panel warranty'), included: true },
            { name: t('รับประกันงานติดตั้ง 2 ปี', '2-year installation warranty'), included: true },
            { name: t('ระบบ Monitoring', 'Monitoring system'), included: true },
            { name: t('ล้างแผงฟรี 1 ครั้ง/ปี', 'Free panel cleaning once a year'), included: true },
          ]
        },
      ]
    },
    hybrid: {
      tagline: 'Hybrid System',
      description: t('ระบบผสมผสาน ประหยัดค่าไฟ + สำรองไฟเมื่อไฟดับ ตอบโจทย์ทุกสถานการณ์', 'A combined system that lowers your bill and keeps the power on during outages, ready for any situation.'),
      plans: [
        {
          name: 'Essential',
          size: '5 kW',
          phase: t('1 เฟส', '1-phase'),
          price: '185,000',
          battery: '5 kWh',
          popular: false,
          specs: {
            saving: '2,500 - 3,500',
            panels: t('8 แผง', '8 panels'),
            area: t('20-24 ตร.ม.', '20-24 m²'),
            production: t('~700 หน่วย/เดือน', '~700 units (kWh)/month'),
            payback: t('5-6 ปี', '5-6 years'),
            backup: t('3-4 ชม.', '3-4 hrs'),
          },
          features: [
            { name: 'Inverter SOLIS Hybrid 5kW', included: true },
            { name: t('รับประกัน Inverter 5 ปี', '5-year inverter warranty'), included: true },
            { name: t('รับประกันแบตเตอรี่ 7 ปี', '7-year battery warranty'), included: true },
            { name: t('รับประกันแผง 25 ปี', '25-year panel warranty'), included: true },
            { name: t('รับประกันงานติดตั้ง 3 ปี', '3-year installation warranty'), included: true },
            { name: t('Full Backup ทั้งบ้าน', 'Full-home backup'), included: false },
          ]
        },
        {
          name: 'Family',
          size: '6 kW',
          phase: t('1 เฟส', '1-phase'),
          price: '245,000',
          battery: '10 kWh',
          popular: true,
          popularLabel: t('คุ้มค่าที่สุด', 'Best value'),
          specs: {
            saving: '3,000 - 4,000',
            panels: t('10 แผง', '10 panels'),
            area: t('25-30 ตร.ม.', '25-30 m²'),
            production: t('~900 หน่วย/เดือน', '~900 units (kWh)/month'),
            payback: t('5-6 ปี', '5-6 years'),
            backup: t('6-8 ชม.', '6-8 hrs'),
          },
          features: [
            { name: 'Inverter SOLIS Hybrid 6kW', included: true },
            { name: t('รับประกัน Inverter 5 ปี', '5-year inverter warranty'), included: true },
            { name: t('รับประกันแบตเตอรี่ 10 ปี', '10-year battery warranty'), included: true },
            { name: t('รับประกันแผง 25 ปี', '25-year panel warranty'), included: true },
            { name: t('รับประกันงานติดตั้ง 3 ปี', '3-year installation warranty'), included: true },
            { name: t('Full Backup ทั้งบ้าน', 'Full-home backup'), included: true },
          ]
        },
        {
          name: 'Premium',
          size: '8 kW',
          phase: t('1 เฟส', '1-phase'),
          price: '320,000',
          battery: '16 kWh',
          popular: false,
          specs: {
            saving: '3,500 - 5,000',
            panels: t('12 แผง', '12 panels'),
            area: t('30-36 ตร.ม.', '30-36 m²'),
            production: t('~1,100 หน่วย/เดือน', '~1,100 units (kWh)/month'),
            payback: t('5-6 ปี', '5-6 years'),
            backup: t('10-12 ชม.', '10-12 hrs'),
          },
          features: [
            { name: 'Inverter SOLIS Hybrid 8kW', included: true },
            { name: t('รับประกัน Inverter 5 ปี', '5-year inverter warranty'), included: true },
            { name: t('รับประกันแบตเตอรี่ 10 ปี', '10-year battery warranty'), included: true },
            { name: t('รับประกันแผง 25 ปี', '25-year panel warranty'), included: true },
            { name: t('รับประกันงานติดตั้ง 3 ปี', '3-year installation warranty'), included: true },
            { name: t('Full Backup ทั้งบ้าน', 'Full-home backup'), included: true },
          ]
        },
      ]
    },
    offgrid: {
      tagline: 'Off-Grid System',
      description: t('ระบบอิสระ 100% ไม่ต้องพึ่งการไฟฟ้า เหมาะสำหรับพื้นที่ห่างไกล', 'A 100% independent system with no reliance on the grid, ideal for remote areas.'),
      plans: [
        {
          name: 'Cabin',
          size: '3 kW',
          phase: t('1 เฟส', '1-phase'),
          price: '145,000',
          battery: '10 kWh',
          popular: false,
          specs: {
            saving: t('~2,000/เดือน', '~2,000/month'),
            panels: t('6 แผง', '6 panels'),
            area: t('15-18 ตร.ม.', '15-18 m²'),
            production: t('~550 หน่วย/เดือน', '~550 units (kWh)/month'),
            payback: t('เน้นความมั่นคง', 'Built for reliability'),
            backup: t('8-10 ชม.', '8-10 hrs'),
          },
          features: [
            { name: t('ไม่ต้องขออนุญาตการไฟฟ้า', 'No utility permit required'), included: true },
            { name: t('รับประกัน Inverter 5 ปี', '5-year inverter warranty'), included: true },
            { name: t('รับประกันแบตเตอรี่ 10 ปี', '10-year battery warranty'), included: true },
            { name: t('รับประกันแผง 25 ปี', '25-year panel warranty'), included: true },
            { name: t('รับประกันงานติดตั้ง 3 ปี', '3-year installation warranty'), included: true },
            { name: t('รองรับเครื่องปั่นไฟ', 'Generator support'), included: false },
          ]
        },
        {
          name: 'Farm',
          size: '5 kW',
          phase: t('1 เฟส', '1-phase'),
          price: '220,000',
          battery: '16 kWh',
          popular: true,
          popularLabel: t('นิยมที่สุด', 'Most popular'),
          specs: {
            saving: t('~3,500/เดือน', '~3,500/month'),
            panels: t('10 แผง', '10 panels'),
            area: t('25-30 ตร.ม.', '25-30 m²'),
            production: t('~900 หน่วย/เดือน', '~900 units (kWh)/month'),
            payback: t('เน้นความมั่นคง', 'Built for reliability'),
            backup: t('12-16 ชม.', '12-16 hrs'),
          },
          features: [
            { name: t('ไม่ต้องขออนุญาตการไฟฟ้า', 'No utility permit required'), included: true },
            { name: t('รับประกัน Inverter 5 ปี', '5-year inverter warranty'), included: true },
            { name: t('รับประกันแบตเตอรี่ 10 ปี', '10-year battery warranty'), included: true },
            { name: t('รับประกันแผง 25 ปี', '25-year panel warranty'), included: true },
            { name: t('รับประกันงานติดตั้ง 3 ปี', '3-year installation warranty'), included: true },
            { name: t('รองรับเครื่องปั่นไฟ', 'Generator support'), included: true },
          ]
        },
        {
          name: 'Estate',
          size: '8 kW',
          phase: t('1 เฟส', '1-phase'),
          price: '350,000',
          battery: '32 kWh',
          popular: false,
          specs: {
            saving: t('~5,000/เดือน', '~5,000/month'),
            panels: t('14 แผง', '14 panels'),
            area: t('35-42 ตร.ม.', '35-42 m²'),
            production: t('~1,200 หน่วย/เดือน', '~1,200 units (kWh)/month'),
            payback: t('เน้นความมั่นคง', 'Built for reliability'),
            backup: t('24+ ชม.', '24+ hrs'),
          },
          features: [
            { name: t('ไม่ต้องขออนุญาตการไฟฟ้า', 'No utility permit required'), included: true },
            { name: t('รับประกัน Inverter 5 ปี', '5-year inverter warranty'), included: true },
            { name: t('รับประกันแบตเตอรี่ 10 ปี', '10-year battery warranty'), included: true },
            { name: t('รับประกันแผง 25 ปี', '25-year panel warranty'), included: true },
            { name: t('รับประกันงานติดตั้ง 3 ปี', '3-year installation warranty'), included: true },
            { name: t('รองรับเครื่องปั่นไฟ', 'Generator support'), included: true },
          ]
        },
      ]
    },
  };

  const currentPackage = packages[activeTab];

  const choosePlan = (plan) => {
    const packageInfo = {
      name: `${activeTab.toUpperCase()} - ${plan.name} (${plan.size})`,
      specs: plan.specs
    };
    // Store package info in sessionStorage
    sessionStorage.setItem('selectedPackage', JSON.stringify(packageInfo));
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Trigger custom event to update Contact form
    window.dispatchEvent(new CustomEvent('packageSelected', { detail: packageInfo }));
  };

  const specRows = (plan) => [
    { label: t('ประหยัด/เดือน', 'Savings/month'), value: `฿${plan.specs.saving}` },
    { label: t('แผงโซลาร์', 'Solar panels'), value: plan.specs.panels },
    { label: t('พื้นที่ติดตั้ง', 'Installation area'), value: plan.specs.area },
    { label: t('ผลิตไฟได้', 'Generation'), value: plan.specs.production },
    { label: t('คืนทุน', 'Payback'), value: plan.specs.payback },
    ...(plan.specs.backup ? [{ label: t('สำรองไฟได้', 'Backup time'), value: plan.specs.backup }] : []),
  ];

  const cardBody = (plan) => (
    <>
      {/* Plan Header */}
      <div className="p-6 pb-4">
        <h4 className="text-xl font-bold text-white">{plan.name}</h4>
        <p className="text-sm mt-1 text-gray-400">{plan.size} • {plan.phase}</p>
        {plan.battery && (
          <div className="inline-flex items-center gap-1 mt-3 px-2.5 py-1 rounded-full text-xs font-medium bg-kb-orange/15 text-orange-300 border border-kb-orange/20">
            <Battery className="w-3 h-3" />
            {t('แบตเตอรี่', 'Battery')} {plan.battery}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="px-6 py-4 border-y border-white/10 bg-white/[0.03]">
        <p className="text-xs mb-1 text-gray-400">{t('เริ่มต้นที่', 'Starting at')}</p>
        <div className="flex items-start gap-1 text-white leading-none">
          <span className="text-xl font-semibold text-gray-300 mt-1">฿</span>
          <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
        </div>
      </div>

      {/* Specs */}
      <div className="px-6 py-4 space-y-2">
        {specRows(plan).map((row) => (
          <div key={row.label} className="flex justify-between gap-3">
            <span className="text-sm text-gray-400">{row.label}</span>
            <span className="text-sm font-semibold text-white text-right">{row.value}</span>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="px-6 py-4 border-t border-white/10 flex-1">
        <ul className="space-y-2">
          {plan.features.map((feature, fIdx) => (
            <li key={fIdx} className="flex items-center gap-2">
              {feature.included ? (
                <Check className="w-4 h-4 flex-shrink-0 text-kb-orange" />
              ) : (
                <X className="w-4 h-4 flex-shrink-0 text-white/25" />
              )}
              <span className={`text-sm ${feature.included ? 'text-gray-200' : 'text-white/35'}`}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="p-6 pt-2">
        <button
          type="button"
          onClick={() => choosePlan(plan)}
          className={`${plan.popular ? 'btn-kb' : 'btn-kb-ghost'} w-full`}
        >
          {t('เลือกแพ็คเกจนี้', 'Choose this package')}
        </button>
      </div>
    </>
  );

  return (
    <section id="packages" className="section-dark on-dark py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow={t('แพ็คเกจ', 'Packages')}
          title={t('เลือกแพ็คเกจ', 'Choose the package')}
          highlight={t('ที่เหมาะกับคุณ', 'that fits you')}
          subtitle={t('แพ็คเกจโซลาร์เซลล์ครบชุด พร้อมติดตั้งและรับประกัน', 'Complete solar packages, with installation and warranty included')}
        />

        {/* Tabs */}
        <FadeUp delay={0.1}>
          <div className="flex justify-center mb-14">
            <div role="tablist" className="inline-flex max-w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-full p-1.5 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-kb-orange to-amber-500 text-white shadow-[0_8px_24px_-8px_rgba(249,115,22,.8)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.name}
                </button>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch"
          >
            {currentPackage.plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`h-full ${plan.popular ? 'relative z-10' : ''}`}
              >
                {plan.popular ? (
                  <div className="relative h-full lg:scale-105 transition-transform duration-300 hover:-translate-y-1.5">
                    {/* Popular Badge */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-1 whitespace-nowrap px-4 py-1.5 rounded-full bg-gradient-to-r from-kb-orange to-amber-400 text-white text-xs sm:text-sm font-bold shadow-[0_8px_20px_-6px_rgba(249,115,22,.8)]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {plan.popularLabel}
                    </div>
                    <div className="h-full p-[1.5px] rounded-[1.35rem] bg-gradient-to-b from-kb-orange to-amber-400 shadow-[0_30px_80px_-30px_rgba(249,115,22,.7)]">
                      <div className="h-full flex flex-col rounded-[1.25rem] bg-[#111827] overflow-hidden pt-3">
                        {cardBody(plan)}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="card-kb-dark h-full flex flex-col overflow-hidden">
                    {cardBody(plan)}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer Note */}
        <FadeUp delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-sm text-gray-400 mb-4">
              {t('* ราคาอาจเปลี่ยนแปลงตามสภาพหน้างานจริง', '* Prices may vary depending on actual site conditions')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-orange-300 hover:text-amber-300 font-medium transition-colors"
            >
              {t('ต้องการแพ็คเกจพิเศษ? ติดต่อเรา', 'Need a custom package? Contact us')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Packages;
