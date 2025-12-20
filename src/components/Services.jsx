import React from 'react';
import { Home, Building2, Factory, BarChart3, Wrench, Monitor } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Solar Rooftop - Residential',
      description: 'ระบบโซลาร์เซลล์สำหรับบ้านพักอาศัย ออกแบบให้เหมาะกับการใช้งานของครอบครัว ประหยัดค่าไฟได้ทั้งกลางวันและกลางคืน',
      features: ['On-Grid / Hybrid System', 'Battery Storage Option', '3-5 kWp Typical Size']
    },
    {
      icon: Building2,
      title: 'Solar Rooftop - Commercial',
      description: 'ระบบโซลาร์เซลล์สำหรับอาคารพาณิชย์ ร้านค้า สำนักงาน ลดต้นทุนค่าไฟฟ้าอย่างมีประสิทธิภาพ',
      features: ['Peak Shaving', 'Demand Charge Reduction', '10-100 kWp Systems']
    },
    {
      icon: Factory,
      title: 'Solar Rooftop - Industrial',
      description: 'ระบบโซลาร์เซลล์ขนาดใหญ่สำหรับโรงงานอุตสาหกรรม ออกแบบตามโหลดการใช้งานจริง',
      features: ['Large Scale Systems', 'Grid-Tied Solutions', '100+ kWp Capacity']
    },
    {
      icon: BarChart3,
      title: 'Energy Analysis & System Design',
      description: 'วิเคราะห์การใช้พลังงานและออกแบบระบบที่เหมาะสมที่สุด โดยใช้ข้อมูลจริงในการคำนวณ',
      features: ['Load Profile Analysis', 'ROI Calculation', 'System Simulation']
    },
    {
      icon: Wrench,
      title: 'Installation & Commissioning',
      description: 'ติดตั้งโดยทีมช่างมืออาชีพ พร้อมทดสอบระบบให้ทำงานได้เต็มประสิทธิภาพ',
      features: ['Professional Team', 'Safety Standards', 'Quality Assurance']
    },
    {
      icon: Monitor,
      title: 'Monitoring & Maintenance',
      description: 'ระบบติดตามการผลิตไฟฟ้าแบบ Real-time พร้อมบริการดูแลรักษาตลอดอายุการใช้งาน',
      features: ['24/7 Monitoring', 'Preventive Maintenance', 'Performance Reports']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-kb-orange font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-kb-dark mt-2 mb-4">
            บริการครบวงจรด้านโซลาร์เซลล์
          </h2>
          <p className="text-kb-gray max-w-2xl mx-auto">
            เราให้บริการออกแบบ ติดตั้ง และดูแลระบบโซลาร์เซลล์แบบครบวงจร 
            ตั้งแต่บ้านพักอาศัยไปจนถึงโรงงานอุตสาหกรรม
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-kb-light hover:bg-kb-dark rounded-2xl p-8 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-kb-orange/10 group-hover:bg-kb-orange rounded-xl flex items-center justify-center mb-6 transition-colors">
                <service.icon className="w-7 h-7 text-kb-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-kb-dark group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-kb-gray group-hover:text-gray-300 mb-4 transition-colors">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-kb-gray group-hover:text-gray-400 transition-colors">
                    <span className="w-1.5 h-1.5 bg-kb-orange rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
