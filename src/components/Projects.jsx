import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Zap, Clock, MapPin, Battery, Sun, Package, Filter, X, Building2, Home, Factory, Hotel } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './AnimatedSection';

const Projects = () => {
  // Province colors mapping (from friend's code)
  const provinceColors = {
    'ปทุมธานี': '#FF6B6B',
    'นนทบุรี': '#4ECDC4', 
    'อุดรธานี': '#45B7D1',
    'ประเทศลาว': '#96CEB4',
    'สมุทรปราการ': '#FFEAA7',
    'นครราชสีมา': '#DDA0DD',
    'ชลบุรี': '#98D8C8',
    'กรุงเทพมหานคร': '#F7DC6F',
    'นครปฐม': '#87CEEB'
  };

  const categories = [
    { id: 'all', name: 'ทั้งหมด', icon: Filter },
    { id: 'residential', name: 'บ้านพักอาศัย', icon: Home },
    { id: 'commercial', name: 'อาคารพาณิชย์', icon: Building2 },
    { id: 'hotel', name: 'โรงแรม', icon: Hotel },
    { id: 'industrial', name: 'โรงงาน', icon: Factory },
  ];

  const projects = [
    {
      id: 1,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Solis', 'BYD', 'AIKO'],
      title: 'บ้านอุ่นใจ - Hybrid Solar System',
      location: 'ปทุมธานี',
      description: 'ระบบโซลาร์เซลล์พร้อมแบตเตอรี่ ใช้ไฟได้ตลอด 24 ชม. แม้ไฟดับก็ไม่สะดุด',
      systemSize: '7.8',
      annualEnergy: '11,700',
      costSaving: '3,500 - 4,500',
      payback: '4-5',
      images: ['/projects/1/1.jpg', '/projects/1/2.jpg', '/projects/1/3.jpg', '/projects/1/4.jpg', '/projects/1/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'BYD Battery 16 kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 12 แผง (7.8 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 2,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Solis', 'BYD', 'AIKO'],
      title: 'บ้านประหยัด - Hybrid On-Off Grid',
      location: 'นนทบุรี',
      description: 'ระบบพลังงานแสงอาทิตย์รุ่นใหม่ Hybrid On-Off Grid ที่ทั้งประหยัด ทั้งมั่นใจ',
      systemSize: '9.1',
      annualEnergy: '13,650',
      costSaving: '3,800 - 4,200',
      payback: '4-5',
      images: ['/projects/2/1.jpg', '/projects/2/2.jpg', '/projects/2/3.jpg', '/projects/2/4.jpg', '/projects/2/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'BYD Battery 5 kWh x 2 ลูก (10 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 14 แผง (9.1 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 3,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'Full Backup'],
      title: 'บ้านมีไฟตลอดเวลา - Hybrid + Backup ทั้งหลัง',
      location: 'อุดรธานี',
      description: 'ระบบ Hybrid On-Off Grid พร้อมแบตเตอรี่ 32 kWh และระบบ Backup ทั้งหลัง',
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
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 4,
      category: 'commercial',
      tags: ['Micro Inverter', 'On-Grid', 'Atmoce', 'TAIKO', 'ต่างประเทศ'],
      title: '7-Eleven Laos - Micro Inverter System',
      location: 'ประเทศลาว',
      description: 'งานติดตั้งระบบโซลาร์เซลล์ให้เซเว่นที่ประเทศลาว ด้วยเทคโนโลยี Micro Inverter',
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
      warranty: ['งานติดตั้ง 3 ปี', 'Micro Inverter 25 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 5,
      category: 'hotel',
      tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'High Volt', '3 Phase'],
      title: 'โรงแรมทับทิมสยามสุวรรณภูมิ',
      location: 'สมุทรปราการ',
      description: 'ระบบ Hybrid On-Off Grid Solis High Volt 50kW พร้อมแบตเตอรี่ 52.2 kWh สำหรับโรงแรม',
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
      warranty: ['งานติดตั้ง 3 ปี', 'แบตเตอรี่ 7 ปี', 'Inverter 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 6,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Solis', 'BYD', 'Longi', 'Optimizer', 'Off-Grid'],
      title: 'บ้านสวนพลังงานสะอาด',
      location: 'นครราชสีมา',
      description: 'ระบบ Hybrid On-Off Grid พร้อม Optimizer สำหรับบ้านสวนที่ไม่มีไฟฟ้าเข้าถึง',
      systemSize: '8.61',
      annualEnergy: '12,915',
      costSaving: '3,200 - 4,300',
      payback: '4-5',
      images: ['/projects/6/1.jpg', '/projects/6/2.jpg', '/projects/6/3.jpg', '/projects/6/4.jpg', '/projects/6/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'BYD 5 kWh x 4 ลูก (20 kWh)' },
        { name: 'Solar Optimizer', detail: '1200-1500V x 7 ตัว' },
        { name: 'Solar Panel', detail: 'Longi 615W x 14 แผง (8.61 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'Optimizer 25 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 7,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'Full Backup'],
      title: 'บ้านมั่นคงพลังงาน - Full Backup',
      location: 'ชลบุรี',
      description: 'ระบบ Hybrid On-Off Grid Solis 8kW กับแบตเตอรี่ 15kWh พร้อมระบบ Full Backup',
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
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 8,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'Full Backup'],
      title: 'บ้านพลังงานอัจฉริยะ',
      location: 'กรุงเทพมหานคร',
      description: 'ระบบ Hybrid On-Off Grid ช่วยให้คุณใช้พลังงานจากแสงอาทิตย์ พร้อม Full Backup',
      systemSize: '7.8',
      annualEnergy: '11,700',
      costSaving: '3,800 - 4,200',
      payback: '4-5',
      images: ['/projects/8/1.jpg', '/projects/8/2.jpg', '/projects/8/3.jpg', '/projects/8/4.jpg', '/projects/8/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 16 kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 12 แผง (7.8 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 9,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Sigenergy', 'Longi', 'Full Backup', '0ms'],
      title: 'บ้านพลังงานอัจฉริยะ Sigenergy',
      location: 'นนทบุรี',
      description: 'ระบบ Hybrid On-Off Grid Sigenergy 5kW พร้อมแบตเตอรี่ 18 kWh ระบบ Full Backup สลับไฟ 0ms ไม่มีสะดุดแม้ไฟดับ',
      systemSize: '6.15',
      annualEnergy: '9,225',
      costSaving: '3,200 - 3,800',
      payback: '4-5',
      images: ['/projects/9/1.jpg', '/projects/9/2.jpg', '/projects/9/3.jpg', '/projects/9/4.jpg', '/projects/9/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Sigenstor 5kW 1 phase' },
        { name: 'Gateway', detail: 'Sigen Energy Gateway 1 phase' },
        { name: 'Battery', detail: 'Sigenstor Battery 9kWh x 2 ลูก (18 kWh)' },
        { name: 'Solar Panel', detail: 'Longi 615W x 10 แผง (6.15 kWp)' }
      ],
      warranty: ['Gateway 2 ปี', 'งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 10,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Sigenergy', 'AIKO', 'EV Charger', 'V2H', 'Off-Grid', '0ms'],
      title: 'Smart Solution - Sigenergy + EV Charger',
      location: 'กรุงเทพมหานคร',
      description: 'Smart Solution ครบวงจรจาก Sigenergy พร้อม DC EV Charger 25kW รองรับ V2H จ่ายไฟกลับเข้าบ้าน สลับไฟ 0ms',
      systemSize: '29.9',
      annualEnergy: '44,850',
      costSaving: '10,000 - 15,000',
      payback: '4-5',
      images: ['/projects/10/1.jpg', '/projects/10/2.jpg', '/projects/10/3.jpg', '/projects/10/4.jpg', '/projects/10/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Sigen EC 25kW' },
        { name: 'EV Charger', detail: 'Sigen DC EV Charger 25kW (V2H)' },
        { name: 'Battery', detail: 'Sigen Battery 36 kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 46 แผง (29.9 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 11,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'Full Backup'],
      title: 'บ้านโรงไฟฟ้าส่วนตัว',
      location: 'นครปฐม',
      description: 'ระบบ Hybrid On-Off Grid Solis 6kW พร้อมแบตเตอรี่ 15 kWh ระบบ Full Backup ใช้ไฟได้แม้ไฟดับ',
      systemSize: '6.5',
      annualEnergy: '9,750',
      costSaving: '3,200 - 3,800',
      payback: '4-5',
      images: ['/projects/11/1.jpg', '/projects/11/2.jpg', '/projects/11/3.jpg', '/projects/11/4.jpg', '/projects/11/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 6kW 1 phase' },
        { name: 'Battery', detail: 'LVtopsun 15 kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 10 แผง (6.5 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 12,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'Full Backup'],
      title: 'บ้านหมดปัญหาค่าไฟพุ่ง',
      location: 'นครราชสีมา',
      description: 'ระบบ Hybrid On-Off Grid Solis 8kW พร้อมแบตเตอรี่ 15 kWh ระบบ Full Backup ครบวงจร ลดค่าไฟได้ถึง 4,000-5,000 บาท/เดือน',
      systemSize: '7.5',
      annualEnergy: '11,250',
      costSaving: '4,000 - 5,000',
      payback: '5-6',
      images: ['/projects/12/1.jpg', '/projects/12/2.jpg', '/projects/12/3.jpg', '/projects/12/4.jpg', '/projects/12/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'LVtopsun 15 kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 12 แผง (7.5 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 13,
      category: 'hotel',
      tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'High Volt', '3 Phase', 'Backup'],
      title: 'โรงแรมทับทิมสยามสุวรรณภูมิ (เพิ่มเติม)',
      location: 'สมุทรปราการ',
      description: 'ระบบ Hybrid On-Off Grid Solis High Volt 50kW พร้อมแบตเตอรี่ 52.2 kWh รองรับการใช้งานไฟฟ้าต่อเนื่อง แม้ไฟดับก็ยังเช็คอินได้',
      systemSize: '42.9',
      annualEnergy: '64,350',
      costSaving: '16,000 - 21,000',
      payback: '4-5',
      images: ['/projects/13/1.jpg', '/projects/13/2.jpg', '/projects/13/3.jpg', '/projects/13/4.jpg', '/projects/13/5.jpg', '/projects/13/6.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis High Volt 50kW 3 phase' },
        { name: 'Battery', detail: 'LVTOPSUN Battery High Volt 5kWh x 10 ลูก (52.2 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 66 แผง (42.9 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'แบตเตอรี่ 7 ปี', 'Inverter 10 ปี', 'Mounting 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 14,
      category: 'commercial',
      tags: ['Micro Inverter', 'On-Grid', 'Atmoce', 'AIKO', 'ต่างประเทศ'],
      title: '7-Eleven Laos - Micro Inverter (เพิ่มเติม)',
      location: 'ประเทศลาว',
      description: 'งานติดตั้งระบบโซลาร์เซลล์ให้เซเว่นที่ประเทศลาว ด้วยเทคโนโลยี Micro Inverter ตรวจสอบการทำงานแต่ละแผงแบบเรียลไทม์',
      systemSize: '39',
      annualEnergy: '58,500',
      costSaving: '15,000 - 20,000',
      payback: '4-5',
      images: ['/projects/14/1.jpg', '/projects/14/2.jpg', '/projects/14/3.jpg', '/projects/14/4.jpg', '/projects/14/5.jpg', '/projects/14/6.jpg', '/projects/14/7.jpg'],
      equipment: [
        { name: 'Micro Inverter', detail: 'Atmoce MI-500 x 60 ตัว' },
        { name: 'M-Combiner', detail: 'MC100-T' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 60 แผง (39 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Micro Inverter 25 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 15,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'Full Backup'],
      title: 'บ้านมีไฟตลอดเวลา - Backup ทั้งหลัง',
      location: 'อุดรธานี',
      description: 'ระบบ Hybrid On-Off Grid Solis 8kW พร้อมแบตเตอรี่ 32 kWh ระบบ Backup ทั้งหลัง จัดการพลังงานอย่างชาญฉลาด',
      systemSize: '10.4',
      annualEnergy: '15,600',
      costSaving: '4,000 - 5,000',
      payback: '5-6',
      images: ['/projects/15/1.jpg', '/projects/15/2.jpg', '/projects/15/3.jpg', '/projects/15/4.jpg', '/projects/15/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'LVTOPSUN Battery 16 kWh x 2 ลูก (32 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 16 แผง (10.4 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 16,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Solis', 'BYD', 'AIKO'],
      title: 'บ้านประหยัดกว่าเดิม - Hybrid On-Off Grid',
      location: 'นนทบุรี',
      description: 'ระบบ Hybrid On-Off Grid Solis 8kW พร้อมแบตเตอรี่ BYD 10 kWh ประหยัดทั้งกลางวัน-กลางคืน ไม่ต้องกลัวไฟดับ',
      systemSize: '9.1',
      annualEnergy: '13,650',
      costSaving: '3,800 - 4,200',
      payback: '4-5',
      images: ['/projects/16/1.jpg', '/projects/16/2.jpg', '/projects/16/3.jpg', '/projects/16/4.jpg', '/projects/16/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'BYD Battery 5 kWh x 2 ลูก (10 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 14 แผง (9.1 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 17,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Solis', 'BYD', 'AIKO'],
      title: 'บ้านอุ่นใจ - ใช้ไฟได้ 24 ชม.',
      location: 'ปทุมธานี',
      description: 'ระบบโซลาร์เซลล์พร้อมแบตเตอรี่ ใช้ไฟได้ตลอด 24 ชม. แม้ไฟดับก็ไม่สะดุด รองรับแอร์ อุปกรณ์ครัว และระบบแสงสว่าง',
      systemSize: '7.8',
      annualEnergy: '11,700',
      costSaving: '3,500 - 4,500',
      payback: '4-5',
      images: ['/projects/17/1.jpg', '/projects/17/2.jpg', '/projects/17/3.jpg', '/projects/17/4.jpg', '/projects/17/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'BYD Battery 16 kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 12 แผง (7.8 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 18,
      category: 'industrial',
      tags: ['Hybrid', 'Battery', 'Sigenergy', 'AIKO', 'EV Charger', '3 Phase', 'โรงงาน'],
      title: 'โรงงานพลังงานอัจฉริยะ - SIGEN ENERGY',
      location: 'ชลบุรี',
      description: 'ระบบ Hybrid SIGEN ENERGY Three Phase สำหรับโรงงาน รองรับการใช้ไฟฟ้าเต็มประสิทธิภาพ พร้อม EV Charger DC 25kW และ AC 11kW',
      systemSize: '14.3',
      annualEnergy: '21,450',
      costSaving: '6,000 - 10,000',
      payback: '4-5',
      images: ['/projects/18/1.JPG', '/projects/18/2.JPG', '/projects/18/3.JPG', '/projects/18/4.JPG', '/projects/18/5.JPG'],
      equipment: [
        { name: 'Controller', detail: 'SIGEN 25kW Three Phase' },
        { name: 'Gateway', detail: 'C60-2' },
        { name: 'EV DC Charger', detail: '25kW 10m Cable' },
        { name: 'EV AC Charger', detail: '11kW 3 phase' },
        { name: 'Battery', detail: 'SIGEN 9 kWh x 2 ลูก (18 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 22 แผง (14.3 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Controller 10 ปี', 'แบตเตอรี่ 10 ปี', 'Gateway 2 ปี', 'EV DC Charging 2 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 19,
      category: 'residential',
      tags: ['Hybrid', 'Battery', 'Sigenergy', 'EV Charger', 'Off-Grid', 'Full Backup'],
      title: 'บ้านศูนย์กลางพลังงาน - SIGENERGY + EV',
      location: 'นครราชสีมา',
      description: 'ระบบ Hybrid Solar จาก SIGENERGY รองรับทั้งการใช้ไฟภายในบ้านและชาร์จรถยนต์ไฟฟ้า ใช้ไฟได้ทั้งกลางวันและกลางคืนแม้ไฟดับ',
      systemSize: '10',
      annualEnergy: '15,000',
      costSaving: '4,000 - 6,000',
      payback: '5-6',
      images: ['/projects/19/1.JPG', '/projects/19/2.JPG', '/projects/19/3.JPG', '/projects/19/4.JPG', '/projects/19/5.JPG'],
      equipment: [
        { name: 'Controller', detail: 'SIGEN 10kW Single Phase' },
        { name: 'Gateway', detail: 'Home Single Phase 12k sp' },
        { name: 'Battery', detail: 'SIGENERGY 9 kWh x 2 ลูก (18 kWh)' },
        { name: 'EV DC Charger', detail: '25kW 10m Cable CCS2' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Controller 10 ปี', 'แบตเตอรี่ 10 ปี', 'Gateway 2 ปี', 'EV DC Charging 2 ปี']
    },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTag, setActiveTag] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const categoryMatch = activeCategory === 'all' || p.category === activeCategory;
      const tagMatch = !activeTag || p.tags.includes(activeTag);
      return categoryMatch && tagMatch;
    });
  }, [activeCategory, activeTag]);

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Home;
  };

  const getCategoryName = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.name : 'อื่นๆ';
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImage((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImage((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="inline-block bg-kb-orange/10 text-kb-orange font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              PORTFOLIO
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-kb-dark mt-2 mb-4">
              Projects & Case Studies
            </h2>
            <p className="text-kb-gray max-w-2xl mx-auto text-lg">
              ผลงานติดตั้งจริงจากลูกค้าที่ไว้วางใจ พร้อมข้อมูลประสิทธิภาพระบบ
            </p>
          </div>
        </FadeUp>

        {/* Category Filter */}
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setActiveTag(null); }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-kb-orange text-white shadow-lg shadow-kb-orange/30'
                      : 'bg-white text-kb-gray hover:bg-kb-light border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                  {activeCategory === cat.id && (
                    <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
                      {cat.id === 'all' ? projects.length : projects.filter(p => p.category === cat.id).length}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </FadeUp>

        {/* Tags Filter */}
        <FadeUp delay={0.15}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeTag === tag
                    ? 'bg-kb-dark text-white'
                    : 'bg-gray-100 text-kb-gray hover:bg-gray-200'
                }`}
              >
                #{tag}
              </motion.button>
            ))}
            {activeTag && (
              <motion.button
                onClick={() => setActiveTag(null)}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200 flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                ล้าง
              </motion.button>
            )}
          </div>
        </FadeUp>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  onClick={() => openProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    {/* Image */}
                    <div className="relative overflow-hidden bg-gray-100">
                      <img
                        src={process.env.PUBLIC_URL + project.images[0]}
                        alt={project.title}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <CategoryIcon className="w-4 h-4 text-kb-orange" />
                        <span className="text-sm font-medium text-kb-dark">{getCategoryName(project.category)}</span>
                      </div>

                      {/* System Size Badge */}
                      <div className="absolute top-4 right-4 bg-kb-orange text-white px-3 py-1.5 rounded-full text-sm font-bold">
                        {project.systemSize} kWp
                      </div>

                      {/* Location */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-white mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{project.location}</span>
                        </div>
                        <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-kb-gray text-sm line-clamp-2 mb-4">{project.description}</p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="text-center p-2 bg-orange-50 rounded-lg">
                          <Sun className="w-4 h-4 text-kb-orange mx-auto mb-1" />
                          <p className="text-xs text-kb-gray">ผลิตไฟ/ปี</p>
                          <p className="font-bold text-kb-dark text-sm">{project.annualEnergy}</p>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded-lg">
                          <span className="text-green-600 font-bold">฿</span>
                          <p className="text-xs text-kb-gray">ประหยัด/เดือน</p>
                          <p className="font-bold text-kb-dark text-sm">{project.costSaving.split(' - ')[0]}</p>
                        </div>
                        <div className="text-center p-2 bg-blue-50 rounded-lg">
                          <Clock className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                          <p className="text-xs text-kb-gray">คืนทุน</p>
                          <p className="font-bold text-kb-dark text-sm">{project.payback} ปี</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-kb-gray px-2 py-1 rounded-full">
                            #{tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-xs bg-gray-100 text-kb-gray px-2 py-1 rounded-full">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-kb-dark mb-2">ไม่พบโปรเจกต์</h3>
            <p className="text-kb-gray mb-4">ลองเปลี่ยนตัวกรองหรือล้างการค้นหา</p>
            <button
              onClick={() => { setActiveCategory('all'); setActiveTag(null); }}
              className="text-kb-orange font-medium hover:underline"
            >
              ดูโปรเจกต์ทั้งหมด
            </button>
          </div>
        )}

        {/* Project Modal - Professional Side by Side Layout */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeProject}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* LEFT SIDE - Image Gallery */}
                <div className="lg:w-1/2 bg-gray-100 flex flex-col">
                  {/* Main Image */}
                  <div className="flex-1 relative flex items-center justify-center p-4 min-h-[300px] lg:min-h-0">
                    <motion.img
                      key={currentImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      src={process.env.PUBLIC_URL + selectedProject.images[currentImage]}
                      alt={selectedProject.title}
                      className="max-w-full max-h-[50vh] lg:max-h-[70vh] w-auto h-auto object-contain rounded-2xl shadow-lg"
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all"
                    >
                      <ChevronLeft className="w-5 h-5 text-kb-dark" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all"
                    >
                      <ChevronRight className="w-5 h-5 text-kb-dark" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-6 right-6 bg-black/70 text-white text-sm px-3 py-1.5 rounded-full font-medium">
                      {currentImage + 1} / {selectedProject.images.length}
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="bg-white/80 backdrop-blur py-4 px-4 border-t border-gray-200">
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                          className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                            idx === currentImage 
                              ? 'border-kb-orange ring-2 ring-kb-orange/30 scale-105' 
                              : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={process.env.PUBLIC_URL + img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE - Details */}
                <div className="lg:w-1/2 flex flex-col max-h-[90vh] lg:max-h-none">
                  {/* Header with Close Button */}
                  <div className="flex items-start justify-between p-6 pb-0">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 bg-kb-orange text-white px-3 py-1.5 rounded-full text-sm font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        {selectedProject.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-xs text-kb-gray uppercase tracking-wide">Project</p>
                        <p className="text-2xl font-bold text-kb-orange">#{selectedProject.id}</p>
                      </div>
                      <button
                        onClick={closeProject}
                        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all"
                      >
                        <X className="w-5 h-5 text-kb-dark" />
                      </button>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-6 pt-4">
                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-kb-dark mb-3">{selectedProject.title}</h3>
                    <p className="text-kb-gray leading-relaxed mb-6">{selectedProject.description}</p>

                    {/* KPIs Grid - 2x2 */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                        <div className="flex items-center gap-2 text-kb-orange mb-1">
                          <Sun className="w-4 h-4" />
                          <span className="text-xs font-semibold uppercase tracking-wide">SYSTEM SIZE</span>
                        </div>
                        <p className="text-2xl font-bold text-kb-dark">{selectedProject.systemSize} <span className="text-sm font-normal text-kb-gray">kWp</span></p>
                      </div>
                      <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                        <div className="flex items-center gap-2 text-kb-orange mb-1">
                          <Zap className="w-4 h-4" />
                          <span className="text-xs font-semibold uppercase tracking-wide">ANNUAL ENERGY</span>
                        </div>
                        <p className="text-2xl font-bold text-kb-dark">{selectedProject.annualEnergy} <span className="text-sm font-normal text-kb-gray">kWh/yr</span></p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
                        <div className="flex items-center gap-2 text-green-600 mb-1">
                          <span className="text-sm font-bold">฿</span>
                          <span className="text-xs font-semibold uppercase tracking-wide">MONTHLY SAVING</span>
                        </div>
                        <p className="text-2xl font-bold text-kb-dark">{selectedProject.costSaving} <span className="text-sm font-normal text-kb-gray">บาท</span></p>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                        <div className="flex items-center gap-2 text-blue-600 mb-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs font-semibold uppercase tracking-wide">PAYBACK</span>
                        </div>
                        <p className="text-2xl font-bold text-kb-dark">{selectedProject.payback} <span className="text-sm font-normal text-kb-gray">ปี</span></p>
                      </div>
                    </div>

                    {/* Equipment */}
                    <div className="mb-6">
                      <h4 className="font-bold text-kb-dark mb-4 flex items-center gap-2 text-lg">
                        <Package className="w-5 h-5 text-kb-orange" />
                        รายละเอียดอุปกรณ์
                      </h4>
                      <div className="bg-gray-50 rounded-2xl overflow-hidden">
                        {selectedProject.equipment.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center px-4 py-3 border-b border-gray-100 last:border-0">
                            <span className="text-kb-gray">{item.name}</span>
                            <span className="text-kb-dark font-semibold text-right">{item.detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Warranty */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
                      <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                        <Battery className="w-5 h-5" />
                        การรับประกัน
                      </h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {selectedProject.warranty.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-green-700">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
