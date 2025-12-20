import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { name: 'SOLIS', logo: '/partners/Solis.webp' },
    { name: 'AIKO SOLAR', logo: '/partners/AIKO SOLAR.png' },
    { name: 'LVtopsun', logo: '/partners/LVtopsun.webp' },
    { name: 'JA Solar', logo: '/partners/JA Solar.png' },
  ];

  return (
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
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-kb-orange/30"
            >
              <img
                src={process.env.PUBLIC_URL + partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
              />
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
  );
};

export default Partners;
