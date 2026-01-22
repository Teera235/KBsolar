import React from 'react';
import { Phone, MessageCircle, Youtube, MapPin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/kruBall1993',
      icon: Facebook,
      color: 'hover:bg-blue-600',
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@iamteacher7803',
      icon: Youtube,
      color: 'hover:bg-red-600',
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@iamteacher1?_r=1&_t=ZS-92qZRA8xJCi&fbclid=IwY2xjawPKEuNicmlkETF1NExEM2FrRnBsVTB0bFBnc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHomrX3LwrNhoqZ3IbQMvoaqTaPbi5sG-Evwjwcd7SKgi2NsXJqd9dQUvrAL-&brid=I8tqsrS62Aj11zfTOnsuzw',
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: 'hover:bg-gray-900',
    },
    {
      name: 'LINE',
      href: 'https://line.me/R/ti/p/@kbsolar',
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
        </svg>
      ),
      color: 'hover:bg-[#00B900]',
    },
  ];

  return (
    <footer className="bg-kb-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.webp" 
                alt="KB Solar Logo" 
                className="h-12 w-auto rounded-lg"
              />
              <span className="font-bold text-xl">KB Solar Energy</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              <span className="hidden sm:inline">Solar Energy Solutions Designed by Data, Not Assumptions. </span>
              <span className="block sm:hidden">Solar Energy Solutions Designed by Data, Not Assumptions. </span>
              ออกแบบ ติดตั้ง และให้คำปรึกษาระบบโซลาร์เซลล์แบบครบวงจร โดยทีมวิศวกรมืออาชีพ
            </p>
            <p className="text-gray-500 text-sm italic mb-6">
              "Study, Learn, and Build with Understanding"
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">เมนูลัด</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-kb-orange transition-colors">หน้าแรก</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-kb-orange transition-colors">บริการ</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-kb-orange transition-colors">แพ็คเกจ</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-kb-orange transition-colors">ผลงาน</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-kb-orange transition-colors">คำถามที่พบบ่อย</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-kb-orange transition-colors">ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">ติดต่อเรา</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0872500566" className="flex items-center gap-2 text-gray-400 hover:text-kb-orange transition-colors">
                  <Phone className="w-4 h-4" />
                  087-250-0566
                </a>
              </li>
              <li>
                <a href="https://line.me/R/ti/p/@kbsolar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-kb-orange transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  LINE: @KBSOLAR
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@iamteacher7803" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-kb-orange transition-colors">
                  <Youtube className="w-4 h-4" />
                  YouTube: iamteacher7803
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=14.863002790983064,102.0466041207901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-400 hover:text-kb-orange transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">555/270 หมู่ 3 ต.หนองจะบก<br/>อ.เมือง จ.นครราชสีมา 30000</span>
                </a>
              </li>
            </ul>
            
            {/* CTA */}
            <a
              href="#contact"
              className="inline-block mt-6 bg-kb-orange hover:bg-kb-orange-dark text-white px-5 py-2.5 rounded-full font-medium text-sm transition-colors"
            >
              ขอใบเสนอราคา
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} KB Solar Energy. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>#KBSOLAR</span>
            <span>#โซลาร์เซลล์</span>
            <span>#ติดตั้งโซล่าร์เซลล์</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
