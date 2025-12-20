import React from 'react';
import { ClipboardList, BarChart2, Cpu, HardHat, Activity, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      step: '01',
      title: 'Survey',
      titleTh: 'สำรวจพื้นที่',
      description: 'สำรวจหน้างานจริง วัดขนาดหลังคา ตรวจสอบโครงสร้าง และประเมินทิศทางแสงอาทิตย์'
    },
    {
      icon: BarChart2,
      step: '02',
      title: 'Load Analysis',
      titleTh: 'วิเคราะห์โหลด',
      description: 'วิเคราะห์พฤติกรรมการใช้ไฟฟ้า ศึกษาบิลค่าไฟย้อนหลัง เพื่อออกแบบระบบที่เหมาะสม'
    },
    {
      icon: Cpu,
      step: '03',
      title: 'System Simulation',
      titleTh: 'จำลองระบบ',
      description: 'จำลองการผลิตไฟฟ้าด้วยซอฟต์แวร์ PVsyst คำนวณผลตอบแทน ROI และระยะเวลาคืนทุน'
    },
    {
      icon: HardHat,
      step: '04',
      title: 'Installation',
      titleTh: 'ติดตั้งระบบ',
      description: 'ติดตั้งโดยทีมช่างมืออาชีพ ตามมาตรฐานความปลอดภัย พร้อมทดสอบระบบ'
    },
    {
      icon: Activity,
      step: '05',
      title: 'Monitoring',
      titleTh: 'ติดตามผล',
      description: 'ระบบ Monitoring ติดตามการผลิตไฟฟ้าแบบ Real-time พร้อมรายงานประจำเดือน'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-kb-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-kb-orange font-semibold text-sm uppercase tracking-wider">Process</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            กระบวนการทำงานแบบวิศวกรรม ทุกขั้นตอนมีข้อมูลรองรับ
          </p>
        </div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-[10%] right-[10%] h-0.5 bg-kb-orange/30">
              <div className="absolute inset-0 bg-gradient-to-r from-kb-orange via-kb-orange to-kb-orange/30" />
            </div>
            
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Icon Box */}
                  <div className="w-40 h-40 bg-gray-800/80 rounded-3xl flex flex-col items-center justify-center mb-6 border border-kb-orange/20 hover:border-kb-orange/50 transition-all group">
                    <step.icon className="w-16 h-16 text-kb-orange mb-2" />
                  </div>
                  
                  {/* Step Number */}
                  <span className="text-kb-orange font-bold text-lg mb-1">{step.step}</span>
                  
                  {/* Title */}
                  <h3 className="text-white font-bold text-xl mb-1">{step.title}</h3>
                  <p className="text-kb-orange/60 text-sm mb-4">{step.titleTh}</p>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed px-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center border border-kb-orange/30">
                  <step.icon className="w-8 h-8 text-kb-orange" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-kb-orange/30 mt-2" />
                )}
              </div>
              <div className="flex-1 pb-6">
                <span className="text-kb-orange font-bold text-sm">{step.step}</span>
                <h3 className="text-white font-bold text-lg">{step.title}</h3>
                <p className="text-kb-orange/60 text-sm">{step.titleTh}</p>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-kb-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all group"
          >
            เริ่มต้นกับเรา
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
