import React from 'react';
import { Zap, Percent, Clock, Leaf } from 'lucide-react';

const KPISection = () => {
  const kpis = [
    {
      icon: Zap,
      value: '150,000+',
      unit: 'kWh/year',
      label: 'พลังงานที่ผลิตได้ต่อปี',
      description: 'Total Energy Generated'
    },
    {
      icon: Percent,
      value: '70',
      unit: '%',
      label: 'ลดค่าไฟฟ้า',
      description: 'Electricity Cost Reduction'
    },
    {
      icon: Clock,
      value: '4-6',
      unit: 'ปี',
      label: 'ระยะเวลาคืนทุน',
      description: 'Payback Period'
    },
    {
      icon: Leaf,
      value: '85',
      unit: 'Tons',
      label: 'ลด CO₂ ต่อปี',
      description: 'Carbon Reduction'
    }
  ];

  return (
    <section className="py-16 bg-kb-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-kb-orange/10 rounded-xl flex items-center justify-center mb-4">
                <kpi.icon className="w-6 h-6 text-kb-orange" />
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl lg:text-4xl font-bold text-kb-dark">{kpi.value}</span>
                <span className="text-lg text-kb-gray">{kpi.unit}</span>
              </div>
              <p className="text-kb-dark font-medium">{kpi.label}</p>
              <p className="text-sm text-kb-gray">{kpi.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPISection;
