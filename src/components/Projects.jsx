import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Clock, MapPin, Battery, Sun, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem, HoverScale } from './AnimatedSection';

const Projects = () => {
  // Province colors mapping
  const provinceColors = {
    'ปทุมธานี': '#FF6B6B',
    'นนทบุรี': '#4ECDC4', 
    'อุดรธานี': '#45B7D1',
    'ประเทศลาว': '#96CEB4',
    'สมุทรปราการ': '#FFEAA7',
    'นครราชสีมา': '#DDA0DD',
    'ชลบุรี': '#98D8C8',
    'กรุงเทพมหานคร': '#F7DC6F'
  };

  const projects = [
    {
      id: 1,
      title: 'บ้านอุ่นใจ - Hybrid Solar System',
      location: 'ปทุมธานี',
      description: 'ระบบโซลาร์เซลล์พร้อมแบตเตอรี่ ใช้ไฟได้ตลอด 24 ชม. แม้ไฟดับก็ไม่สะดุด รองรับเครื่องใช้ไฟฟ้าหนักอย่างแอร์ อุปกรณ์ครัว และระบบแสงสว่างภายในบ้านได้อย่างสบายใจ',
      systemSize: '7.8',
      annualEnergy: '11,700',
      costSaving: '3,000 - 4,500',
      payback: '5-6',
      images: ['/projects/1/1.jpg', '/projects/1/2.jpg', '/projects/1/3.jpg', '/projects/1/4.jpg', '/projects/1/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'BYD Battery 16 kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 12 แผง (7.8 kWp)' }
      ],
      warranty: [
        'รับประกันงานติดตั้ง 3 ปี',
        'รับประกัน Inverter 5 ปี',
        'รับประกันแบตเตอรี่ 7 ปี',
        'รับประกันแผง 12-30 ปี'
      ]
    },
    {
      id: 2,
      title: 'บ้านประหยัด - Hybrid On-Off Grid',
      location: 'นนทบุรี',
      description: 'เปิดบ้านให้ประหยัดกว่าเดิม ด้วยระบบพลังงานแสงอาทิตย์รุ่นใหม่ Hybrid On-Off Grid ที่ทั้งประหยัด ทั้งมั่นใจ ไม่ต้องกลัวไฟดับ! ระบบนี้เหมาะมากสำหรับบ้านที่ใช้ไฟต่อเนื่อง และต้องการความเสถียรแบบไม่สะดุดแม้เกิดเหตุฉุกเฉิน',
      systemSize: '9.1',
      annualEnergy: '13,650',
      costSaving: '3,500 - 4,000',
      payback: '5-6',
      images: ['/projects/2/1.jpg', '/projects/2/2.jpg', '/projects/2/3.jpg', '/projects/2/4.jpg', '/projects/2/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'BYD Battery 5 kWh x 2 ลูก (10 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 14 แผง (9.1 kWp)' }
      ],
      warranty: [
        'รับประกันงานติดตั้ง 3 ปี',
        'รับประกัน Inverter 5 ปี',
        'รับประกันแบตเตอรี่ 7 ปี',
        'รับประกันแผง 12-30 ปี'
      ]
    },
    {
      id: 3,
      title: 'บ้านมีไฟตลอดเวลา - Hybrid + Backup ทั้งหลัง',
      location: 'อุดรธานี',
      description: 'ยุคนี้พลังงานแสงอาทิตย์ไม่ได้มีไว้แค่ประหยัดค่าไฟ แต่ยังช่วยให้บ้านคุณมีไฟใช้ตลอดเวลา ไม่ว่าฝนตก ไฟดับ หรือค่าไฟพุ่งแค่ไหนก็ไม่หวั่น ระบบ Hybrid On-Off Grid พร้อมแบตเตอรี่ 32 kWh และระบบ Backup ทั้งหลัง จัดการพลังงานอย่างชาญฉลาด ทั้งเก็บ ทั้งใช้ ทั้งสำรองไว้ให้ครบ',
      systemSize: '10.4',
      annualEnergy: '15,600',
      costSaving: '4,000 - 5,000',
      payback: '5-6',
      images: ['/projects/3/1.jpg', '/projects/3/2.jpg', '/projects/3/3.jpg', '/projects/3/4.jpg', '/projects/3/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'LVTOPSUN Battery 16 kWh x 2 ลูก (32 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 16 แผง (10.4 kWp)' }
      ],
      warranty: [
        'รับประกันงานติดตั้ง 3 ปี',
        'รับประกัน Inverter 5 ปี',
        'รับประกันแบตเตอรี่ 7 ปี',
        'รับประกันแผง 12-30 ปี'
      ]
    },
    {
      id: 4,
      title: '7-Eleven Laos - Micro Inverter System',
      location: 'ประเทศลาว',
      description: 'งานติดตั้งระบบโซลาร์เซลล์ให้เซเว่นที่ประเทศลาว อีกหนึ่งความภาคภูมิใจในการส่งมอบโซลูชันพลังงานสะอาด เพื่อช่วยลดต้นทุนพลังงานและส่งเสริมความยั่งยืนทางธุรกิจ ระบบนี้ออกแบบและติดตั้งด้วยเทคโนโลยี Micro Inverter เพื่อให้การผลิตไฟฟ้ามีประสิทธิภาพสูง ปลอดภัย และสามารถตรวจสอบการทำงานของแต่ละแผงได้แบบเรียลไทม์ เหมาะสำหรับอาคารพาณิชย์ที่ต้องการความเสถียรของระบบไฟฟ้าในทุกช่วงเวลา',
      systemSize: '39',
      annualEnergy: '58,500',
      costSaving: '15,000 - 20,000',
      payback: '4-5',
      images: ['/projects/4/1.jpg', '/projects/4/2.jpg', '/projects/4/3.jpg', '/projects/4/4.jpg', '/projects/4/5.jpg', '/projects/4/6.jpg', '/projects/4/7.jpg', '/projects/4/8.jpg'],
      equipment: [
        { name: 'Micro Inverter', detail: 'Atmoce MI-500 x 60 ตัว' },
        { name: 'M-Combiner', detail: 'MC100' },
        { name: 'Solar Panel', detail: 'TAIKO 650W x 60 แผง (39 kWp)' }
      ],
      warranty: [
        'รับประกันงานติดตั้ง 3 ปี',
        'รับประกัน Micro Inverter 25 ปี',
        'รับประกันแผง 12-30 ปี',
        'บริการหลังการขายครบวงจร'
      ]
    },
    {
      id: 5,
      title: 'โรงแรมทับทิมสยามสุวรรณภูมิ - Hybrid On-Off Grid',
      location: 'สมุทรปราการ',
      description: 'พลังงานไม่เคยหลับ เพื่อการบริการที่ไม่หยุดนิ่ง เพราะ "ไฟฟ้า" คือหัวใจของธุรกิจโรงแรม โรงแรมทับทิมสยามสุวรรณภูมิ โดย บริษัท นพเก้า แอสเซ็ท จำกัด ให้ทาง KB SOLAR ENERGY ติดตั้งระบบ Hybrid On-Off Grid Solis High Volt 50kW พร้อมแบตเตอรี่ 52.2 kWh เพื่อรองรับการใช้งานไฟฟ้าอย่างต่อเนื่องในทุกช่วงเวลา แม้ไฟฟ้าดับก็ยังสามารถต้อนรับลูกค้าเช็คอินได้ด้วยระบบ Backup ชั้น 1 ที่ออกแบบมาเฉพาะเพื่อธุรกิจบริการโดยเฉพาะ',
      systemSize: '42.9',
      annualEnergy: '64,350',
      costSaving: '16,000 - 21,000',
      payback: '4-5',
      images: ['/projects/5/1.jpg', '/projects/5/2.jpg', '/projects/5/3.jpg', '/projects/5/4.jpg', '/projects/5/5.jpg', '/projects/5/6.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis High Volt 50kW 3 phase' },
        { name: 'Battery', detail: 'LVTOPSUN Battery High Volt 5kWh x 10 ลูก (52.2 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 66 แผง (42.9 kWp)' }
      ],
      warranty: [
        'รับประกันงานติดตั้ง 3 ปี',
        'รับประกันแบตเตอรี่ 7 ปี',
        'รับประกัน Inverter 10 ปี',
        'รับประกัน Mounting 10 ปี',
        'รับประกันแผง 12-30 ปี'
      ]
    },
    {
      id: 6,
      title: 'บ้านสวนพลังงานสะอาด - Hybrid On-Off Grid + Optimizer',
      location: 'นครราชสีมา',
      description: 'พลังงานสะอาดที่ดูแลบ้านสวนได้ทั้งกลางวันและกลางคืน สำหรับบ้านสวนที่ไม่มีไฟฟ้าเข้าถึงอีกต่อไป ไม่ต้องพึ่งเครื่องปั่นไฟ ไม่ต้องกังวลเวลาไฟดับ เพราะระบบ Hybrid On-Off Grid Solis 8kW พร้อมแบตเตอรี่ BYD 20 kWh และชุด Optimizer ที่ช่วยจัดการพลังงานอย่างชาญฉลาด จะช่วยให้คุณใช้ไฟได้ทุกเวลา',
      systemSize: '8.61',
      annualEnergy: '12,915',
      costSaving: '3,200 - 4,300',
      payback: '5-6',
      images: ['/projects/6/1.jpg', '/projects/6/2.jpg', '/projects/6/3.jpg', '/projects/6/4.jpg', '/projects/6/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'BYD 5 kWh x 4 ลูก (20 kWh)' },
        { name: 'Solar Optimizer', detail: '1200-1500V x 7 ตัว' },
        { name: 'Solar Panel', detail: 'Longi 615W x 14 แผง (8.61 kWp)' }
      ],
      warranty: [
        'รับประกันงานติดตั้ง 3 ปี',
        'รับประกัน Inverter 5 ปี',
        'รับประกันแบตเตอรี่ 7 ปี',
        'รับประกัน Optimizer 25 ปี',
        'รับประกันแผง 12-30 ปี'
      ]
    },
    {
      id: 7,
      title: 'บ้านมั่นคงพลังงาน - Hybrid On-Off Grid + Full Backup',
      location: 'ชลบุรี',
      description: 'พลังงานแสงอาทิตย์เทคโนโลยีที่เปลี่ยนหลังคาให้กลายเป็นแหล่งพลังงานของบ้าน ทุกวันนี้เจ้าของบ้านจำนวนมากเริ่มหันมาใช้พลังงานสะอาด ไม่ใช่แค่เพื่อลดค่าไฟ แต่เพื่อสร้าง "ความมั่นคงด้านพลังงาน" ให้บ้านของตัวเองในระยะยาว ระบบ Hybrid On-Off Grid Solis 8kW กับแบตเตอรี่ 15kWh พร้อมระบบ Full Backup รับประกันมีไฟใช้ตอนไฟดับแบบไม่ต้องง้อไฟฉาย!',
      systemSize: '9.1',
      annualEnergy: '13,650',
      costSaving: '4,500 - 5,500',
      payback: '5-6',
      images: ['/projects/7/1.jpg', '/projects/7/2.jpg', '/projects/7/3.jpg', '/projects/7/4.jpg', '/projects/7/5.jpg', '/projects/7/6.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 5 kWh x 3 ลูก (15 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 14 แผง (9.1 kWp)' }
      ],
      warranty: [
        'รับประกันงานติดตั้ง 3 ปี',
        'รับประกัน Inverter 5 ปี',
        'รับประกันแบตเตอรี่ 7 ปี',
        'รับประกันแผง 12-30 ปี'
      ]
    },
    {
      id: 8,
      title: 'บ้านพลังงานอัจฉริยะ - Hybrid On-Off Grid + Full Backup',
      location: 'กรุงเทพมหานคร',
      description: 'เปลี่ยนหลังคาบ้านให้เป็นแหล่งพลังงานอัจฉริยะที่คุ้มค่าและมั่นใจได้ ระบบ Hybrid On-Off Grid ช่วยให้คุณใช้พลังงานจากแสงอาทิตย์ในช่วงกลางวัน ลดค่าไฟฟ้าจากการไฟฟ้าได้ทันที และเมื่อมีแบตเตอรี่รองรับยังเก็บพลังงานไว้ใช้ในตอนกลางคืนหรือเมื่อไฟฟ้าดับ ทำให้บ้านของคุณมีไฟใช้ต่อเนื่องแบบ Full Backup ไม่ต้องกังวลเมื่อต้องเผชิญกับไฟตกหรือไฟดับ',
      systemSize: '7.8',
      annualEnergy: '11,700',
      costSaving: '3,500 - 4,000',
      payback: '5-6',
      images: ['/projects/8/1.jpg', '/projects/8/2.jpg', '/projects/8/3.jpg', '/projects/8/4.jpg', '/projects/8/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 16 kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 12 แผง (7.8 kWp)' }
      ],
      warranty: [
        'รับประกันงานติดตั้ง 3 ปี',
        'รับประกัน Inverter 5 ปี',
        'รับประกันแบตเตอรี่ 10 ปี',
        'รับประกันแผง 12-30 ปี'
      ]
    },
    {
      id: 9,
      title: 'บ้านอัจฉริยะ - Smart Energy Storage System',
      location: 'นนทบุรี',
      description: 'ระบบจัดเก็บพลังงานอัจฉริยะ SigEnergy พร้อมระบบควบคุมผ่านแอปพลิเคชันที่ทันสมัย ไม่ต้องกังวลเรื่องไฟดับ เพราะแบตเตอรี่ 9kWh จะสำรองไฟให้อย่างต่อเนื่อง ระบบนี้เหมาะสำหรับบ้านที่ต้องการความมั่นใจในการใช้ไฟฟ้าและต้องการประหยัดค่าไฟในระยะยาว พร้อมระบบ Smart Control ที่ควบคุมได้ผ่านมือถือ',
      systemSize: '6.5',
      annualEnergy: '9,750',
      costSaving: '3,500',
      payback: '5-6',
      images: ['/projects/9/cover.jpg', '/projects/9/1.jpg', '/projects/9/2.jpg', '/projects/9/3.jpg', '/projects/9/4.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Sigenstor 6kW 1 phase' },
        { name: 'Battery', detail: 'Sigenstor Battery 9kWh' },
        { name: 'Gateway', detail: 'Sigen Energy Gateway 1 phase' },
        { name: 'Solar Panel', detail: 'High Efficiency 650W x 10 แผง (6.5 kWp)' }
      ],
      warranty: [
        'รับประกันงานติดตั้ง 3 ปี',
        'รับประกัน Inverter 10 ปี',
        'รับประกันแบตเตอรี่ 10 ปี',
        'รับประกันแผง 12-30 ปี',
        'รับประกัน Gateway 2 ปี'
      ]
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const project = projects[currentProject];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const selectProject = (index) => {
    setCurrentProject(index);
    setCurrentImage(0);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-kb-orange font-semibold text-sm uppercase tracking-wider">PORTFOLIO</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-kb-dark mt-2 mb-4">
              Projects & Case Studies
            </h2>
            <p className="text-kb-gray max-w-2xl mx-auto">
              ผลงานติดตั้งจริงจากลูกค้าที่ไว้วางใจ พร้อมข้อมูลประสิทธิภาพระบบ
            </p>
          </div>
        </FadeUp>

        {/* Project Selector - Horizontal Scroll */}
        {projects.length > 1 && (
          <FadeUp delay={0.1}>
            <div className="relative mb-12">
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                {projects.map((proj, idx) => (
                  <motion.button
                    key={proj.id}
                    onClick={() => selectProject(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group flex-shrink-0 w-36 snap-start transition-all duration-300 ${
                      idx === currentProject ? 'scale-105' : ''
                    }`}
                  >
                  {/* Card */}
                  <div className={`relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 ${
                    idx === currentProject 
                      ? 'ring-4 shadow-xl' 
                      : 'hover:shadow-lg'
                  }`}
                       style={{
                         ringColor: idx === currentProject ? provinceColors[proj.location] : 'transparent',
                         boxShadow: idx === currentProject 
                           ? `0 20px 40px ${provinceColors[proj.location]}30` 
                           : undefined
                       }}>
                    {/* Image */}
                    <div className="aspect-square bg-gray-100">
                      <img
                        src={process.env.PUBLIC_URL + proj.images[0]}
                        alt={proj.title}
                        className={`w-full h-full object-cover transition-all duration-300 ${
                          idx === currentProject ? '' : 'group-hover:scale-110'
                        }`}
                      />
                    </div>
                    {/* Overlay */}
                    <div className={`absolute inset-0 transition-all duration-300`}
                         style={{
                           background: idx === currentProject
                             ? `linear-gradient(to top, ${provinceColors[proj.location]}, ${provinceColors[proj.location]}66, transparent)`
                             : `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)`
                         }} />
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full" 
                             style={{ backgroundColor: idx === currentProject ? 'white' : provinceColors[proj.location] }}></div>
                        <p className="text-white font-bold text-sm leading-tight truncate">{proj.location}</p>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Sun className="w-3 h-3 text-white/80" />
                        <span className="text-white/90 text-xs font-medium">{proj.systemSize} kWp</span>
                      </div>
                    </div>
                    {/* Active Indicator */}
                    {idx === currentProject && (
                      <div className="absolute top-2 right-2">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                      </div>
                    )}
                  </div>
                    {/* Project Number */}
                    <div className={`mt-2 text-center text-xs font-semibold transition-colors`}
                         style={{ 
                           color: idx === currentProject ? provinceColors[proj.location] : '#9CA3AF'
                         }}>
                      #{idx + 1}
                    </div>
                  </motion.button>
                ))}
              </div>
              {/* Scroll Hint */}
              <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none hidden sm:block" />
            </div>
          </FadeUp>
        )}

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Image Gallery */}
          <motion.div
            key={currentProject + '-gallery'}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <img
                src={process.env.PUBLIC_URL + project.images[currentImage]}
                alt={`${project.title} - ${currentImage + 1}`}
                className="w-full h-auto"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600/F97316/FFFFFF?text=KB+Solar+Project';
                }}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-kb-dark" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <ChevronRight className="w-5 h-5 text-kb-dark" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                {currentImage + 1} / {project.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2 mt-3">
              {project.images.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentImage ? 'border-kb-orange ring-2 ring-kb-orange/30' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={process.env.PUBLIC_URL + img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/100x75/F97316/FFFFFF?text=' + (idx + 1);
                    }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            key={currentProject + '-details'}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Location Badge with Province Color */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-3 shadow-sm" 
                 style={{ 
                   backgroundColor: provinceColors[project.location] + '20',
                   border: `2px solid ${provinceColors[project.location]}40`
                 }}>
              <div className="w-3 h-3 rounded-full shadow-sm" 
                   style={{ backgroundColor: provinceColors[project.location] }}></div>
              <MapPin className="w-4 h-4" style={{ color: provinceColors[project.location] }} />
              <span className="font-semibold" style={{ color: provinceColors[project.location] }}>
                {project.location}
              </span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-kb-dark mb-3">{project.title}</h3>
            
            {/* Province Map Visualization */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 mb-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {/* Thailand Map Icon */}
                    <svg width="40" height="50" viewBox="0 0 40 50" className="text-gray-300">
                      <path d="M20 5 C25 5, 35 10, 35 20 C35 25, 30 30, 25 35 L20 45 L15 35 C10 30, 5 25, 5 20 C5 10, 15 5, 20 5 Z" 
                            fill="currentColor" stroke="#E5E7EB" strokeWidth="1"/>
                    </svg>
                    {/* Province Dot */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full animate-pulse"
                         style={{ backgroundColor: provinceColors[project.location] }}></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ตำแหน่งติดตั้ง</p>
                    <p className="font-bold text-lg" style={{ color: provinceColors[project.location] }}>
                      {project.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Project</p>
                  <p className="text-2xl font-bold" style={{ color: provinceColors[project.location] }}>
                    #{currentProject + 1}
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-kb-gray leading-relaxed mb-6">{project.description}</p>

            {/* KPIs Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
                <div className="flex items-center gap-2 text-kb-orange mb-1">
                  <Sun className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase">System Size</span>
                </div>
                <p className="text-2xl font-bold text-kb-dark">{project.systemSize} <span className="text-sm font-normal text-kb-gray">kWp</span></p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
                <div className="flex items-center gap-2 text-kb-orange mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase">Annual Energy</span>
                </div>
                <p className="text-2xl font-bold text-kb-dark">{project.annualEnergy} <span className="text-sm font-normal text-kb-gray">kWh/yr</span></p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                <div className="flex items-center gap-2 text-green-600 mb-1">
                  <span className="text-xs">฿</span>
                  <span className="text-xs font-semibold uppercase">Monthly Saving</span>
                </div>
                <p className="text-2xl font-bold text-kb-dark">{project.costSaving} <span className="text-sm font-normal text-kb-gray">บาท</span></p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase">Payback</span>
                </div>
                <p className="text-2xl font-bold text-kb-dark">{project.payback} <span className="text-sm font-normal text-kb-gray">ปี</span></p>
              </div>
            </div>

            {/* Equipment */}
            <div className="mb-6">
              <h4 className="font-bold text-kb-dark mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-kb-orange" />
                รายละเอียดอุปกรณ์
              </h4>
              <div className="bg-kb-light rounded-xl p-4">
                <table className="w-full">
                  <tbody>
                    {project.equipment.map((item, idx) => (
                      <tr key={idx} className={idx !== project.equipment.length - 1 ? 'border-b border-gray-200' : ''}>
                        <td className="py-2.5 text-kb-gray text-sm">{item.name}</td>
                        <td className="py-2.5 text-kb-dark font-medium text-sm text-right">{item.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Warranty */}
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <Battery className="w-5 h-5" />
                การรับประกัน
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {project.warranty.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-green-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
