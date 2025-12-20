import React, { useState } from 'react';
import { Phone, MessageCircle, Youtube, MapPin, Send, CheckCircle } from 'lucide-react';

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
      href: 'https://maps.google.com/?q=555/270+หมู่+3+ตำบลหนองจะบก+นครราชสีมา+30000',
      color: 'bg-kb-orange'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-kb-orange font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-kb-dark mt-2 mb-4">
            ติดต่อเรา
          </h2>
          <p className="text-kb-gray max-w-2xl mx-auto">
            สนใจติดตั้งระบบโซลาร์เซลล์หรือต้องการคำปรึกษา ติดต่อเราได้เลย
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-kb-light hover:bg-gray-100 rounded-xl p-4 transition-colors group"
                >
                  <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mb-3`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm text-kb-gray">{item.label}</p>
                  <p className="text-kb-dark font-semibold group-hover:text-kb-orange transition-colors">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5!2d102.1!3d14.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDU4JzEyLjAiTiAxMDLCsDA2JzAwLjAiRQ!5e0!3m2!1sth!2sth!4v1703088000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KB Solar Location - 555/270 หมู่ 3 ต.หนองจะบก นครราชสีมา"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-kb-light rounded-2xl p-8">
            <h3 className="text-xl font-bold text-kb-dark mb-6">Request Solar Assessment</h3>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-kb-dark font-semibold text-lg">ส่งข้อความสำเร็จ!</p>
                <p className="text-kb-gray">เราจะติดต่อกลับโดยเร็วที่สุด</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
                  <label className="block text-sm font-medium text-kb-dark mb-1">อีเมล (ไม่บังคับ)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kb-orange focus:ring-2 focus:ring-kb-orange/20 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-kb-dark mb-1">ข้อความ</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kb-orange focus:ring-2 focus:ring-kb-orange/20 outline-none transition-all resize-none"
                    placeholder="สนใจติดตั้งระบบโซลาร์เซลล์ / ต้องการคำปรึกษา..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-kb-orange hover:bg-kb-orange-dark text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-5 h-5" />
                  ส่งข้อความ
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
