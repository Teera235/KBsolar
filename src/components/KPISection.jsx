import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Percent, Clock, Leaf } from 'lucide-react';

const AnimatedNumber = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numValue = parseInt(value.toString().replace(/[^0-9]/g, ''));
          const duration = 2000;
          const steps = 60;
          const increment = numValue / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numValue) {
              setCount(numValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const KPISection = () => {
  const kpis = [
    { icon: Zap, value: 150000, suffix: '+', unit: 'kWh/year', label: 'พลังงานที่ผลิตได้ต่อปี', description: 'Total Energy Generated' },
    { icon: Percent, value: 70, suffix: '', unit: '%', label: 'ลดค่าไฟฟ้า', description: 'Electricity Cost Reduction' },
    { icon: Clock, value: '4-6', suffix: '', unit: 'ปี', label: 'ระยะเวลาคืนทุน', description: 'Payback Period', isText: true },
    { icon: Leaf, value: 85, suffix: '', unit: 'Tons', label: 'ลด CO₂ ต่อปี', description: 'Carbon Reduction' }
  ];

  return (
    <section className="py-16 bg-kb-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-6 shadow-sm cursor-default"
            >
              <motion.div 
                className="w-12 h-12 bg-kb-orange/10 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <kpi.icon className="w-6 h-6 text-kb-orange" />
              </motion.div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl lg:text-4xl font-bold text-kb-dark">
                  {kpi.isText ? kpi.value : <AnimatedNumber value={kpi.value} suffix={kpi.suffix} />}
                </span>
                <span className="text-lg text-kb-gray">{kpi.unit}</span>
              </div>
              <p className="text-kb-dark font-medium">{kpi.label}</p>
              <p className="text-sm text-kb-gray">{kpi.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPISection;
