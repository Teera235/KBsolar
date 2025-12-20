import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'SOLIS', logo: '/solis-logo.webp', hasLogo: true },
    { name: 'AIKO SOLAR', logo: null, hasLogo: false },
    { name: 'LVtopsun', logo: null, hasLogo: false },
    { name: 'Trina Solar', logo: '/partners/trina.png', hasLogo: true },
    { name: 'JA Solar', logo: null, hasLogo: false },
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider">
          อุปกรณ์คุณภาพจากแบรนด์ชั้นนำระดับโลก
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              {partner.hasLogo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              ) : (
                <span className="text-gray-600 font-bold text-lg md:text-xl tracking-wide">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
