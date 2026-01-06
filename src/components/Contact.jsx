import React, { useState } from 'react';
import { Phone, MessageCircle, Youtube, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem } from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'โทรศัพท์',
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
      label: 'ที่อยู่',
      value: '555/270 หมู่ 3 ต.หนองจะบก อ.เมือง จ.นครราชสีมา 30000',
      href: 'https://maps.google.com/?q=14.863002790983064,102.0466041207901',
      color: 'bg-kb-orange'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="text-kb-orange font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-kb-dark mt-2 mb-4">
              ติดต่อเรา
            </h2>
            <p className="text-kb-gray max-w-2xl mx-auto">
              สนใจติดตั้งระบบโซลาร์เซลล์หรือต้องการคำปรึกษา ติดต่อเราได้เลย
            </p>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <SlideLeft>
            <div>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8" staggerDelay={0.1}>
                {contactInfo.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-kb-light hover:bg-gray-100 rounded-xl p-3 sm:p-4 transition-colors group block"
                      whileHover={{ scale: 1.03, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div 
                        className={`w-9 h-9 sm:w-10 sm:h-10 ${item.color} rounded-lg flex items-center justify-center mb-2 sm:mb-3`}
                        whileHover={{ rotate: 10 }}
                      >
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.div>
                      <p className="text-xs sm:text-sm text-kb-gray">{item.label}</p>
                      <p className="text-kb-dark font-semibold text-sm sm:text-base group-hover:text-kb-orange transition-colors break-all">
                        {item.value}
                      </p>
                    </motion.a>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Google Map */}
              <motion.div 
                className="rounded-2xl overflow-hidden h-64 lg:h-80 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=14.863002790983064,102.0466041207901&hl=th&z=18&t=k&output=embed&markers=14.863002790983064,102.0466041207901"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KB Solar Energy Location - 555/270 หมู่ 3 ต.หนองจะบก อ.เมือง จ.นครราชสีมา 30000"
                />
              </motion.div>
            </div>
          </SlideLeft>

          {/* Contact Form */}
          <SlideRight>
            <motion.div 
              className="bg-kb-light rounded-2xl p-5 sm:p-8"
              whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <h3 className="text-xl font-bold text-kb-dark mb-6">Request Solar Assessment</h3>
              
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
                  <p className="text-kb-dark font-semibold text-lg">ส่งข้อความสำเร็จ!</p>
                  <p className="text-kb-gray">เราจะติดต่อกลับโดยเร็วที่สุด</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-kb-dark mb-1">ชื่อ-นามสกุล</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kb-orange focus:ring-2 focus:ring-kb-orange/20 outline-none transition-all"
                      placeholder="กรุณากรอกชื่อ"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="block text-sm font-medium text-kb-dark mb-1">เบอร์โทรศัพท์</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kb-orange focus:ring-2 focus:ring-kb-orange/20 outline-none transition-all"
                      placeholder="08X-XXX-XXXX"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-kb-dark mb-1">อีเมล (ไม่บังคับ)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kb-orange focus:ring-2 focus:ring-kb-orange/20 outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                  >
                    <label className="block text-sm font-medium text-kb-dark mb-1">ข้อความ</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kb-orange focus:ring-2 focus:ring-kb-orange/20 outline-none transition-all resize-none"
                      placeholder="สนใจติดตั้งระบบโซลาร์เซลล์ / ต้องการคำปรึกษา..."
                    />
                  </motion.div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-kb-orange hover:bg-kb-orange-dark text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-5 h-5" />
                    ส่งข้อความ
                  </motion.button>
                </form>
              )}
            </motion.div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
};

export default Contact;
