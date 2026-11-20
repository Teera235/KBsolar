import { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Youtube, MapPin, Send, CheckCircle, Loader2, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight, StaggerContainer, StaggerItem } from './AnimatedSection';
import emailjs from '@emailjs/browser';
import { useLang } from '../i18n';
import { SectionHeading } from './ui';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_wq7tzqn';
const EMAILJS_TEMPLATE_ID = 'template_ogtjk99';
const EMAILJS_PUBLIC_KEY = 'y2FtE_VnYEDX04vbG';

// Prefill text for the message box when a package is picked (visitor-editable, so shown in the visitor's language)
const buildPackageMessage = (packageData, tr) => {
  let messageText = `${tr('สนใจแพ็คเกจ:', 'Interested in package:')} ${packageData.name}\n\n`;
  if (packageData.specs) {
    const sp = packageData.specs;
    messageText += `${tr('รายละเอียด:', 'Details:')}\n`;
    messageText += `- ${tr('ประหยัด/เดือน:', 'Savings/month:')} ฿${sp.saving}\n`;
    messageText += `- ${tr('แผงโซลาร์:', 'Solar panels:')} ${sp.panels}\n`;
    messageText += `- ${tr('พื้นที่ติดตั้ง:', 'Installation area:')} ${sp.area}\n`;
    messageText += `- ${tr('ผลิตไฟได้:', 'Generation:')} ${sp.production}\n`;
    messageText += `- ${tr('คืนทุน:', 'Payback:')} ${sp.payback}\n`;
    if (sp.backup) {
      messageText += `- ${tr('สำรองไฟได้:', 'Backup power:')} ${sp.backup}\n`;
    }
    messageText += `\n`;
  }
  return messageText;
};

const Contact = () => {
  const { t, lang } = useLang();
  // The package-prefill effect runs once; read the current language through a ref
  const tRef = useRef(t);
  tRef.current = t;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    selectedPackage: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Listen for package selection event
  useEffect(() => {
    // Check sessionStorage on mount
    const savedPackage = sessionStorage.getItem('selectedPackage');
    if (savedPackage) {
      try {
        const packageData = JSON.parse(savedPackage);
        const messageText = buildPackageMessage(packageData, tRef.current);
        setFormData(prev => ({
          ...prev,
          selectedPackage: packageData,
          message: messageText
        }));
        // Clear after reading
        sessionStorage.removeItem('selectedPackage');
      } catch (e) {
        console.error('Error parsing package data:', e);
      }
    }

    // Listen for custom event
    const handlePackageSelected = (event) => {
      const packageData = event.detail;
      const messageText = buildPackageMessage(packageData, tRef.current);
      setFormData(prev => ({
        ...prev,
        selectedPackage: packageData,
        message: messageText
      }));
    };

    window.addEventListener('packageSelected', handlePackageSelected);
    return () => window.removeEventListener('packageSelected', handlePackageSelected);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email || 'ไม่ได้ระบุ',
          message: formData.selectedPackage 
            ? `แพ็คเกจที่เลือก: ${formData.selectedPackage.name}\n\n${formData.message}`
            : formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', email: '', message: '', selectedPackage: null });
      }, 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('โทรศัพท์', 'Phone'),
      value: '087-250-0566',
      href: 'tel:0872500566',
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      label: 'LINE',
      value: '@KBSOLAR',
      href: 'https://line.me/R/ti/p/@kbsolar',
      color: 'bg-green-500'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: 'iamteacher7803',
      href: 'https://www.youtube.com/@iamteacher7803',
      color: 'bg-red-500'
    },
    {
      icon: MapPin,
      label: t('ที่อยู่', 'Address'),
      isAddress: true,
      value: t('555/270 หมู่ 3 ต.หนองจะบก อ.เมือง จ.นครราชสีมา\u00A030000', '555/270 Moo 3, Nong Chabok, Mueang, Nakhon Ratchasima\u00A030000'),
      href: 'https://maps.google.com/?q=14.863002790983064,102.0466041207901',
      color: 'bg-kb-orange'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white mobile-full-width bg-section-mobile">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container-fix">
        <SectionHeading
          title={t('', 'Get in')}
          highlight={t('ติดต่อเรา', 'Touch')}
          subtitle={t('สนใจติดตั้งระบบโซลาร์เซลล์หรือต้องการคำปรึกษา ติดต่อเราได้เลย', 'Interested in a solar system or need advice? Get in touch with us.')}
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Contact Info & Map */}
          <SlideLeft>
            <div>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8" staggerDelay={0.1}>
                {contactInfo.map((item, index) => (
                  <StaggerItem key={index}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-kb p-4 sm:p-5 group block h-full"
                    >
                      <div
                        className={`w-9 h-9 lg:w-10 lg:h-10 ${item.color} rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-md`}
                      >
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <p className="text-xs sm:text-sm text-kb-gray">{item.label}</p>
                      <p className="text-kb-dark font-semibold text-sm sm:text-base group-hover:text-kb-orange transition-colors break-words leading-snug">
                        {item.isAddress ? (
                          <>
                            {t('555/270 หมู่ 3 ต.หนองจะบก อ.เมือง', '555/270 Moo 3, Nong Chabok, Mueang,')}<br className="sm:hidden" />
                            {t('จ.นครราชสีมา', ' Nakhon Ratchasima')}{'\u00A0'}30000
                          </>
                        ) : (
                          item.value
                        )}
                      </p>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Google Map - Mobile Responsive */}
              <motion.div 
                className="rounded-[1.25rem] overflow-hidden h-48 sm:h-64 lg:h-80 border border-gray-900/[.06] shadow-[0_8px_24px_-12px_rgba(17,24,39,.18)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <iframe
                  src={`https://maps.google.com/maps?q=14.863002790983064,102.0466041207901&hl=${lang}&z=18&t=k&output=embed&markers=14.863002790983064,102.0466041207901`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('ที่ตั้ง KB Solar Energy - 555/270 หมู่ 3 ต.หนองจะบก อ.เมือง จ.นครราชสีมา 30000', 'KB Solar Energy location - 555/270 Moo 3, Nong Chabok, Mueang, Nakhon Ratchasima 30000')}
                />
              </motion.div>
            </div>
          </SlideLeft>

          {/* Contact Form */}
          <SlideRight>
            <div className="card-kb hover:translate-y-0 relative overflow-hidden p-6 sm:p-8 lg:p-10">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-kb-orange" />
              <h3 className="text-xl sm:text-2xl font-bold text-kb-dark mb-5 sm:mb-7">{t('ขอรับการประเมินระบบโซลาร์', 'Request Solar Assessment')}</h3>
              
              {/* Selected Package Display */}
              {formData.selectedPackage && (
                <motion.div 
                  className="mb-4 p-4 bg-gradient-to-r from-kb-orange/10 to-amber-500/10 border-l-4 border-kb-orange rounded-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-kb-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-kb-dark mb-1">{t('คุณได้เลือกแพ็คเกจ:', 'You selected the package:')}</p>
                      <p className="text-lg font-bold text-kb-orange mb-2">{formData.selectedPackage.name}</p>
                      <p className="text-xs text-gray-600">{t('ทีมงานจะติดต่อกลับเพื่อให้คำปรึกษาและประเมินราคาฟรี', 'Our team will contact you for a free consultation and quote.')}</p>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {submitted ? (
                <motion.div 
                  className="flex flex-col items-center justify-center py-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <p className="text-kb-dark font-semibold text-lg">{t('ส่งข้อความสำเร็จ!', 'Message sent!')}</p>
                  <p className="text-kb-gray">{t('เราจะติดต่อกลับโดยเร็วที่สุด', 'We will get back to you as soon as possible.')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-kb-dark mb-1">{t('ชื่อ-นามสกุล', 'Full name')}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-kb-orange focus:ring-2 focus:ring-kb-orange/40 outline-none transition"
                      placeholder={t('กรุณากรอกชื่อ', 'Enter your name')}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="block text-sm font-medium text-kb-dark mb-1">{t('เบอร์โทรศัพท์', 'Phone number')}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-kb-orange focus:ring-2 focus:ring-kb-orange/40 outline-none transition"
                      placeholder="08X-XXX-XXXX"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-kb-dark mb-1">{t('อีเมล (ไม่บังคับ)', 'Email (optional)')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-kb-orange focus:ring-2 focus:ring-kb-orange/40 outline-none transition"
                      placeholder="email@example.com"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                  >
                    <label className="block text-sm font-medium text-kb-dark mb-1">{t('ข้อความ', 'Message')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-kb-orange focus:ring-2 focus:ring-kb-orange/40 outline-none transition resize-none"
                      placeholder={t('สนใจติดตั้งระบบโซลาร์เซลล์ / ต้องการคำปรึกษา...', 'Interested in a solar system / need advice...')}
                    />
                  </motion.div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`btn-kb w-full py-4 ${loading ? 'opacity-70 cursor-not-allowed hover:translate-y-0' : ''}`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t('กำลังส่ง...', 'Sending...')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('ส่งข้อความ', 'Send Message')}
                      </>
                    )}
                  </button>
                  {error && (
                    <p className="text-red-500 text-sm text-center mt-2">{t('ส่งข้อความไม่สำเร็จ กรุณาลองใหม่อีกครั้ง', 'Your message could not be sent. Please try again.')}</p>
                  )}
                </form>
              )}
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
};

export default Contact;
