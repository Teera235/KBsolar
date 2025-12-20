import React from 'react';
import { ArrowRight, Sun, Check, Zap, Users, Award } from 'lucide-react';

const Hero = () => {
  const features = [
    'ฟรีค่าบริการสำรวจหน้างาน',
    'ฟรีค่าออกแบบระบบ',
    'รับประกันงานติดตั้ง 3 ปี',
    'Inverter รับประกัน 5-10 ปี',
    'รับประกันแบตเตอรี่ 7 ปี',
    'รับประกันแผง 12-30 ปี',
  ];

  const stats = [
    { icon: Zap, value: '50+', label: 'โปรเจกต์' },
    { icon: Users, value: '100%', label: 'พึงพอใจ' },
    { icon: Award, value: '5+', label: 'ปีประสบการณ์' },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={process.env.PUBLIC_URL + '/hero-bg.jpg'} 
          alt="Solar Panel Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay - เพิ่มความเข้มขึ้น */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Teacher Image - Large on right */}
      <div className="absolute right-[5%] bottom-0 hidden lg:block z-10">
        <img
          src={process.env.PUBLIC_URL + '/teacher.png'}
          alt="KB Solar Expert"
          className="h-screen w-auto object-contain object-bottom"
        />
      </div>

      {/* Teacher Info Card */}
      <div className="absolute bottom-[12%] right-[12%] hidden lg:block z-20">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-5 border border-white/20 shadow-2xl">
          <p className="text-kb-orange font-bold text-xl">ครูบอล โซล่าเซลล์</p>
          <p className="text-white/80 text-sm font-medium leading-relaxed mt-2 max-w-[320px]">
            ผู้เชี่ยวชาญตัวจริง เจ้าของเพจ 'i am teacher' ที่เน้นให้ความรู้ควบคู่การลงมือทำจริง จนได้รับความไว้วางใจจากลูกค้าทั่วประเทศ
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center py-20 pt-28">
          <div className="max-w-xl space-y-5">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-kb-orange/20 backdrop-blur-sm px-4 py-2 rounded-full border border-kb-orange/30">
              <Sun className="w-4 h-4 text-kb-orange" />
              <span className="text-kb-orange text-sm font-semibold">KB Energy Solution</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-kb-orange to-amber-400 bg-clip-text text-transparent">
                KB Energy Solution
              </span>
              <br />
              Solar Solution ครบวงจร
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              ออกแบบ ติดตั้ง และให้คำปรึกษาระบบโซลาร์เซลล์แบบครบวงจร 
              ด้วยทีมวิศวกรมืออาชีพ พร้อมบริการหลังการขายที่ใส่ใจ
            </p>

            {/* Stats - แถวแนวนอน */}
            <div className="flex gap-6 py-2">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-kb-orange/20 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-kb-orange" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">{stat.value}</p>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Checklist */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-white text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-lg font-bold text-white">
                  ลงทุนวันนี้ <span className="text-kb-orange">คืนทุนไว 4-6 ปี</span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-kb-orange hover:bg-kb-orange-dark text-white px-7 py-4 rounded-full font-semibold transition-all shadow-lg shadow-kb-orange/30 group"
              >
                ประเมินยอดประหยัดฟรี
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-full font-semibold transition-all border border-white/20"
              >
                ดูผลงานติดตั้ง
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
