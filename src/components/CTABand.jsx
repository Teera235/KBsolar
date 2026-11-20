import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { useLang } from '../i18n';

/** Dark closing band that leads into the contact form. */
const CTABand = () => {
  const { t } = useLang();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="section-dark on-dark overflow-hidden py-20 lg:py-28">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
          {t('พร้อม', 'Ready to ')}
          <span className="text-kb-accent">{t('ลดค่าไฟ', 'cut your power bill')}</span>
          {t('แล้วหรือยัง?', '?')}
        </h2>
        <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          {t(
            'ปรึกษาและสำรวจหน้างานฟรี ออกแบบระบบให้ตามการใช้ไฟจริง',
            'Free consultation and site survey, with a system designed around how you actually use power.'
          )}
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <button type="button" onClick={scrollToContact} className="btn-kb">
            {t('ขอใบเสนอราคาฟรี', 'Get a free quote')}
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="https://line.me/R/ti/p/@kbsolar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-kb-ghost"
          >
            <MessageCircle className="w-5 h-5" />
            {t('แชทผ่าน LINE', 'Chat on LINE')}
          </a>
        </div>

        <a
          href="tel:0872500566"
          className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-300 transition-colors"
        >
          <Phone className="w-4 h-4" />
          {t('หรือโทร', 'Or call')} <span className="font-semibold text-gray-200">087-250-0566</span>
        </a>
      </motion.div>
    </section>
  );
};

export default CTABand;
