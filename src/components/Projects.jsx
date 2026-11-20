import { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, MapPin, Sun, X, Building2, Home, Factory, Hotel, Eye, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './AnimatedSection';
import ThailandMap, { placeName } from './ThailandMap';
import { useLang } from '../i18n';
import { SectionHeading, CountUp } from './ui';

// Tiles shown before "View all": two full bento groups (big tile + 4 small, alternating sides)
const PAGE_SIZE = 10;

const Projects = () => {
  const { t } = useLang();
  // Data fields are either a plain string (same in both languages) or a { th, en } object
  const tx = (v) => (v && typeof v === 'object' ? t(v) : v);
  const equipmentName = (name) =>
    ({ Battery: t('แบตเตอรี่', 'Battery'), 'Solar Panel': t('แผงโซลาร์เซลล์', 'Solar Panel') })[name] || name;

  const categories = [
    { id: 'all', name: { th: 'ทั้งหมด', en: 'All' }, icon: Eye },
    { id: 'residential', name: { th: 'บ้านพักอาศัย', en: 'Residential' }, icon: Home },
    { id: 'commercial', name: { th: 'อาคารพาณิชย์', en: 'Commercial' }, icon: Building2 },
    { id: 'hotel', name: { th: 'โรงแรม', en: 'Hotels' }, icon: Hotel },
    { id: 'industrial', name: { th: 'โรงงาน', en: 'Factories' }, icon: Factory },
    { id: 'international', name: { th: 'ต่างประเทศ', en: 'International' }, icon: Globe },
  ];

  const rawProjects = [
    {
      id: 1, category: 'residential', date: '21-02-2025',
      title: 'Hybrid 5kW + Smart Optimizer', location: 'อุตรดิตถ์',
      description: { th: 'ระบบ Hybrid 5kW On-Off Grid พร้อม Smart Optimizer ดูการทำงานรายแผงได้ มีระบบ Rapid Shutdown และสำรองไฟขณะไฟดับ', en: 'Hybrid 5kW On-Off Grid system with Smart Optimizers for panel-level monitoring, Rapid Shutdown, and backup power during outages.' },
      systemSize: '7', annualEnergy: '10,500', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/21-02-2025/1.webp', '/projects/21-02-2025/2.webp', '/projects/21-02-2025/3.webp', '/projects/21-02-2025/4.webp', '/projects/21-02-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid 5kW' },
        { name: 'Battery', detail: 'LFP 15 kWh' },
        { name: 'Optimizer', detail: { th: 'Smart Optimizer 700W x 10 ตัว', en: 'Smart Optimizer 700W x 10 units' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 2, category: 'residential', date: '26-4-2025',
      title: 'On-Grid 5kW Huawei', location: 'นนทบุรี',
      description: { th: 'ระบบ On-Grid 5kW ติดตั้งบนหลังคาบ้าน ลดค่าไฟกลางวันได้ 3,000-3,500 บาท/เดือน', en: 'On-Grid 5kW rooftop system for a home, cutting daytime electricity bills by 3,000-3,500 THB/month.' },
      systemSize: '5', annualEnergy: '7,500', costSaving: '3,000 - 3,500', payback: '4',
      images: ['/projects/26-4-2025/1.webp', '/projects/26-4-2025/2.webp', '/projects/26-4-2025/3.webp', '/projects/26-4-2025/4.webp', '/projects/26-4-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Huawei 5kW' },
        { name: 'Solar Panel', detail: 'Longi 580W' }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แผง 10-30 ปี', en: 'Panels 10-30 years' },
      ]
    },
    {
      id: 3, category: 'residential', date: '28-4-2025',
      title: 'Hybrid 10kW 3 Phase + Optimizer', location: 'นครราชสีมา',
      description: { th: 'ระบบ Hybrid 10kW 3 Phase พร้อม Optimizer และแบตเตอรี่ 16kWh ลดค่าไฟได้ 7,000-7,500 บาท/เดือน', en: 'Hybrid 10kW 3 Phase system with Optimizers and a 16kWh battery, cutting electricity bills by 7,000-7,500 THB/month.' },
      systemSize: '10', annualEnergy: '15,000', costSaving: '7,000 - 7,500', payback: '4-5',
      images: ['/projects/28-4-2025/1.webp', '/projects/28-4-2025/2.webp', '/projects/28-4-2025/3.webp', '/projects/28-4-2025/4.webp', '/projects/28-4-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 10kW 3 Phase' },
        { name: 'Battery', detail: 'KB Energy Storage 16kWh' },
        { name: 'Optimizer', detail: 'Deye Optimizer' },
        { name: 'Solar Panel', detail: 'Longi 625W' }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 5 ปี', en: 'Battery 5 years' },
        { th: 'แผง 10-30 ปี', en: 'Panels 10-30 years' },
      ]
    },
    {
      id: 4, category: 'residential', date: '30-04-2025',
      title: 'On-Grid 5kW Deye', location: 'นครราชสีมา',
      description: { th: 'ระบบ On-Grid 5kW สำหรับบ้านพักอาศัย ลดค่าไฟกลางวันได้ 3,000-3,500 บาท/เดือน', en: 'On-Grid 5kW system for a home, cutting daytime electricity bills by 3,000-3,500 THB/month.' },
      systemSize: '5', annualEnergy: '7,500', costSaving: '3,000 - 3,500', payback: '4',
      images: ['/projects/30-04-2025/1.webp', '/projects/30-04-2025/2.webp', '/projects/30-04-2025/3.webp', '/projects/30-04-2025/4.webp', '/projects/30-04-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Solar Panel', detail: 'Longi 625W' }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แผง 10-30 ปี', en: 'Panels 10-30 years' },
      ]
    },
    {
      id: 5, category: 'residential', date: '2-05-2025',
      title: 'Hybrid 5kW + Battery 16kWh', location: 'ขอนแก่น',
      description: { th: 'ระบบ Hybrid 5kW พร้อมแบตเตอรี่ 16kWh สำหรับบ้านพักอาศัย ลดค่าไฟได้ 3,000-3,500 บาท/เดือน', en: 'Hybrid 5kW system with a 16kWh battery for a home, cutting electricity bills by 3,000-3,500 THB/month.' },
      systemSize: '5', annualEnergy: '7,500', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/2-05-2025/1.webp', '/projects/2-05-2025/2.webp', '/projects/2-05-2025/3.webp', '/projects/2-05-2025/4.webp', '/projects/2-05-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'KB Energy Storage 16kWh' },
        { name: 'Solar Panel', detail: 'Longi Hi-MO X10 645W' }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 5 ปี', en: 'Battery 5 years' },
        { th: 'แผง 10-30 ปี', en: 'Panels 10-30 years' },
      ]
    },
    {
      id: 6, category: 'industrial', date: '5-05-2025',
      title: { th: 'Hybrid 100kW โรงงาน', en: 'Hybrid 100kW Factory' }, location: 'สมุทรปราการ',
      description: { th: 'ระบบ Hybrid 100kW สำหรับโรงงาน พร้อมระบบ Peak Shaving ลดค่าไฟได้ 90,000-100,000 บาท/เดือน', en: 'Hybrid 100kW system for a factory with Peak Shaving, cutting electricity bills by 90,000-100,000 THB/month.' },
      systemSize: '100', annualEnergy: '150,000', costSaving: '90,000 - 100,000', payback: '4-5',
      images: ['/projects/5-05-2025/1.webp', '/projects/5-05-2025/2.webp', '/projects/5-05-2025/3.webp', '/projects/5-05-2025/4.webp', '/projects/5-05-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: { th: 'Deye 20kW 3 Phase x 5 เครื่อง', en: 'Deye 20kW 3 Phase x 5 units' } },
        { name: 'Battery', detail: { th: 'KB Energy Storage 16kWh x 16 ลูก', en: 'KB Energy Storage 16kWh x 16 units' } },
        { name: 'Solar Panel', detail: 'JA Solar 630W' }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 5 ปี', en: 'Battery 5 years' },
        { th: 'แผง 10-30 ปี', en: 'Panels 10-30 years' },
      ]
    },
    {
      id: 7, category: 'commercial', date: '7-05-2025',
      title: { th: 'Hybrid 5kW วัด', en: 'Hybrid 5kW Temple' }, location: 'นครราชสีมา',
      description: { th: 'ระบบ Hybrid 5kW สำหรับวัด พร้อมแบตเตอรี่ 16kWh ลดค่าไฟได้ 3,000-3,500 บาท/เดือน', en: 'Hybrid 5kW system for a temple with a 16kWh battery, cutting electricity bills by 3,000-3,500 THB/month.' },
      systemSize: '5', annualEnergy: '7,500', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/7-05-2025/1.webp', '/projects/7-05-2025/2.webp', '/projects/7-05-2025/3.webp', '/projects/7-05-2025/4.webp', '/projects/7-05-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'KB Energy Storage 16kWh' },
        { name: 'Solar Panel', detail: 'Longi Hi-MO X10 645W' }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 5 ปี', en: 'Battery 5 years' },
        { th: 'แผง 10-30 ปี', en: 'Panels 10-30 years' },
      ]
    },
    {
      id: 8, category: 'residential', date: '9-05-2025',
      title: 'Hybrid 10kW + Battery 20kWh', location: 'นครราชสีมา',
      description: { th: 'ระบบ Hybrid 10kW พร้อมแบตเตอรี่ 20kWh และระบบ Backup ลดค่าไฟได้ 7,000-7,500 บาท/เดือน', en: 'Hybrid 10kW system with a 20kWh battery and backup power, cutting electricity bills by 7,000-7,500 THB/month.' },
      systemSize: '11.25', annualEnergy: '16,875', costSaving: '7,000 - 7,500', payback: '4-5',
      images: ['/projects/9-05-2025/1.webp', '/projects/9-05-2025/2.webp', '/projects/9-05-2025/3.webp', '/projects/9-05-2025/4.webp', '/projects/9-05-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 10kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 20kWh' },
        { name: 'Solar Panel', detail: { th: 'Longi 625W x 18 แผง', en: 'Longi 625W x 18 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 10-30 ปี', en: 'Panels 10-30 years' },
      ]
    },
    {
      id: 9, category: 'residential', date: '12-05-2025',
      title: 'Hybrid 8kW + Battery 20kWh', location: 'กรุงเทพมหานคร',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 20kWh และระบบ Full Backup', en: 'Hybrid 8kW system with a 20kWh battery and Full Backup.' },
      systemSize: '8', annualEnergy: '12,000', costSaving: '4,000 - 5,000', payback: '4-5',
      images: ['/projects/12-05-2025/1.webp', '/projects/12-05-2025/2.webp', '/projects/12-05-2025/3.webp', '/projects/12-05-2025/4.webp', '/projects/12-05-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: { th: 'LVtopsun 10kWh x 2 ลูก', en: 'LVtopsun 10kWh x 2 units' } },
        { name: 'Solar Panel', detail: 'Longi 615W' }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 10, category: 'residential', date: '14-05-2025',
      title: 'Hybrid 6kW + Battery 15kWh', location: 'นนทบุรี',
      description: { th: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 15kWh และระบบ Full Backup', en: 'Hybrid 6kW system with a 15kWh battery and Full Backup.' },
      systemSize: '6', annualEnergy: '9,000', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/14-05-2025/1.webp', '/projects/14-05-2025/2.webp', '/projects/14-05-2025/3.webp', '/projects/14-05-2025/4.webp', '/projects/14-05-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: 'Longi 615W' }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 11, category: 'residential', date: '2-06-2025',
      title: 'Hybrid 8kW + Battery 20kWh', location: 'นครปฐม',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 20kWh และระบบสำรองไฟทั้งระบบ', en: 'Hybrid 8kW system with a 20kWh battery and whole-system backup power.' },
      systemSize: '8.82', annualEnergy: '13,230', costSaving: '4,000 - 4,500', payback: '4-5',
      images: ['/projects/2-06-2025/1.webp', '/projects/2-06-2025/2.webp', '/projects/2-06-2025/3.webp', '/projects/2-06-2025/4.webp', '/projects/2-06-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: { th: 'LVtopsun 10kWh x 2 ลูก', en: 'LVtopsun 10kWh x 2 units' } },
        { name: 'Solar Panel', detail: { th: 'Jinko 630W x 14 แผง', en: 'Jinko 630W x 14 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 12, category: 'residential', date: '9-06-2025',
      title: 'Hybrid 6kW + Battery 15kWh', location: 'สิงห์บุรี',
      description: { th: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 15kWh และระบบ Backup ลดค่าไฟได้ 3,500-4,000 บาท/เดือน', en: 'Hybrid 6kW system with a 15kWh battery and backup power, cutting electricity bills by 3,500-4,000 THB/month.' },
      systemSize: '6.765', annualEnergy: '10,148', costSaving: '3,500 - 4,000', payback: '4-5',
      images: ['/projects/9-06-2025/1.webp', '/projects/9-06-2025/2.webp', '/projects/9-06-2025/3.webp', '/projects/9-06-2025/4.webp', '/projects/9-06-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 11 แผง', en: 'Longi 615W x 11 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 13, category: 'residential', date: '23-06-2025',
      title: 'Hybrid 5kW Deye', location: 'ลพบุรี',
      description: { th: 'ระบบ Hybrid 5kW พร้อมแบตเตอรี่ 10kWh และระบบสำรองไฟ ลดค่าไฟได้ 3,000-3,500 บาท/เดือน', en: 'Hybrid 5kW system with a 10kWh battery and backup power, cutting electricity bills by 3,000-3,500 THB/month.' },
      systemSize: '6.25', annualEnergy: '9,375', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/23-06-2025/1.webp', '/projects/23-06-2025/2.webp', '/projects/23-06-2025/3.webp', '/projects/23-06-2025/4.webp', '/projects/23-06-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 10kWh' },
        { name: 'Solar Panel', detail: { th: 'Longi 625W x 10 แผง', en: 'Longi 625W x 10 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 14, category: 'residential', date: '25-06-2025',
      title: { th: 'Hybrid 5kW บ้านสวน', en: 'Hybrid 5kW Farmhouse' }, location: 'มหาสารคาม',
      description: { th: 'ระบบ Hybrid 5kW สำหรับบ้านสวน ใช้ไฟได้ทั้งกลางวันและกลางคืน เปิดแอร์ได้ 2-3 เครื่อง', en: 'Hybrid 5kW system for a farmhouse, supplying power day and night and running 2-3 air conditioners.' },
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/25-06-2025/1.webp', '/projects/25-06-2025/2.webp', '/projects/25-06-2025/3.webp', '/projects/25-06-2025/4.webp', '/projects/25-06-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 10 แผง', en: 'Longi 615W x 10 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 10-30 ปี', en: 'Panels 10-30 years' },
      ]
    },
    {
      id: 15, category: 'residential', date: '30-06-2025',
      title: 'Hybrid 6kW Solis', location: 'ขอนแก่น',
      description: { th: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 15kWh และระบบ Backup ลดค่าไฟได้ 3,500-4,000 บาท/เดือน', en: 'Hybrid 6kW system with a 15kWh battery and backup power, cutting electricity bills by 3,500-4,000 THB/month.' },
      systemSize: '6.765', annualEnergy: '10,148', costSaving: '3,500 - 4,000', payback: '4-5',
      images: ['/projects/30-06-2025/1.webp', '/projects/30-06-2025/2.webp', '/projects/30-06-2025/3.webp', '/projects/30-06-2025/4.webp', '/projects/30-06-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 11 แผง', en: 'Longi 615W x 11 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 16, category: 'residential', date: '2-07-2025',
      title: 'Hybrid 10kW + Battery 30kWh', location: 'นครปฐม',
      description: { th: 'ระบบ Hybrid 10kW พร้อมแบตเตอรี่ 30kWh ลดค่าไฟทั้งกลางวันและกลางคืนได้ 5,500-6,500 บาท/เดือน', en: 'Hybrid 10kW system with a 30kWh battery, cutting day and night electricity bills by 5,500-6,500 THB/month.' },
      systemSize: '11.07', annualEnergy: '16,605', costSaving: '5,500 - 6,500', payback: '4-5',
      images: ['/projects/2-07-2025/1.webp', '/projects/2-07-2025/2.webp', '/projects/2-07-2025/3.webp', '/projects/2-07-2025/4.webp', '/projects/2-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 10kW 1 Phase' },
        { name: 'Battery', detail: { th: 'LVtopsun 15kWh x 2 ลูก', en: 'LVtopsun 15kWh x 2 units' } },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 18 แผง', en: 'Longi 615W x 18 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 10-30 ปี', en: 'Panels 10-30 years' },
      ]
    },
    {
      id: 17, category: 'residential', date: '7-07-2025',
      title: 'Hybrid 6kW Luxpower', location: 'ขอนแก่น',
      description: { th: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 10kWh ใช้ไฟได้ทั้งกลางวันและกลางคืน', en: 'Hybrid 6kW system with a 10kWh battery, supplying power day and night.' },
      systemSize: '3.075', annualEnergy: '4,613', costSaving: '2,000 - 2,500', payback: '4-5',
      images: ['/projects/7-07-2025/1.webp', '/projects/7-07-2025/2.webp', '/projects/7-07-2025/3.webp', '/projects/7-07-2025/4.webp', '/projects/7-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Luxpower 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 10kWh' },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 5 แผง', en: 'Longi 615W x 5 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 2 ปี', en: 'Inverter 2 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 10-30 ปี', en: 'Panels 10-30 years' },
      ]
    },
    {
      id: 18, category: 'residential', date: '9-07-2025',
      title: 'Hybrid 5kW Deye', location: 'นนทบุรี',
      description: { th: 'ระบบ Hybrid 5kW พร้อมแบตเตอรี่ 15kWh ลดค่าไฟได้ 3,000-3,500 บาท/เดือน', en: 'Hybrid 5kW system with a 15kWh battery, cutting electricity bills by 3,000-3,500 THB/month.' },
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/9-07-2025/1.webp', '/projects/9-07-2025/2.webp', '/projects/9-07-2025/3.webp', '/projects/9-07-2025/4.webp', '/projects/9-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 10 แผง', en: 'Longi 615W x 10 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 19, category: 'residential', date: '14-07-2025',
      title: 'Off-Grid 5kW Deye', location: 'ขอนแก่น',
      description: { th: 'ระบบ Off-Grid 5kW สำหรับบ้านที่ไฟไม่ถึง ใช้แอร์ได้ 3-4 ตัวกลางวัน 2 ตัวกลางคืน', en: 'Off-Grid 5kW system for a home without grid power, running 3-4 air conditioners by day and 2 at night.' },
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/14-07-2025/1.webp', '/projects/14-07-2025/2.webp', '/projects/14-07-2025/3.webp', '/projects/14-07-2025/4.webp', '/projects/14-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 10 แผง', en: 'Longi 615W x 10 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 20, category: 'residential', date: '16-07-2025',
      title: 'Hybrid 5kW + Battery 20kWh', location: 'สมุทรปราการ',
      description: { th: 'ระบบ Hybrid 5kW พร้อมแบตเตอรี่ 20kWh ลดค่าไฟได้ 3,000-3,500 บาท/เดือน', en: 'Hybrid 5kW system with a 20kWh battery, cutting electricity bills by 3,000-3,500 THB/month.' },
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/16-07-2025/1.webp', '/projects/16-07-2025/2.webp', '/projects/16-07-2025/3.webp', '/projects/16-07-2025/4.webp', '/projects/16-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: { th: 'LVtopsun 10kWh x 2 ลูก', en: 'LVtopsun 10kWh x 2 units' } },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 10 แผง', en: 'Longi 615W x 10 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 21, category: 'residential', date: '18-07-2025',
      title: 'Hybrid 8kW + Battery 30kWh + AVR', location: 'ลพบุรี',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 30kWh และ AVR ป้องกันไฟตก ลดค่าไฟได้ 4,500-5,500 บาท/เดือน', en: 'Hybrid 8kW system with a 30kWh battery and an AVR to protect against voltage drops, cutting electricity bills by 4,500-5,500 THB/month.' },
      systemSize: '9.84', annualEnergy: '14,760', costSaving: '4,500 - 5,500', payback: '4-5',
      images: ['/projects/18-07-2025/1.webp', '/projects/18-07-2025/2.webp', '/projects/18-07-2025/3.webp', '/projects/18-07-2025/4.webp', '/projects/18-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: { th: 'LVtopsun 15kWh x 2 ลูก', en: 'LVtopsun 15kWh x 2 units' } },
        { name: 'AVR', detail: { th: 'ป้องกันไฟตก ไฟปลายสาย', en: 'Protects against voltage drops at the end of the supply line' } },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 16 แผง', en: 'Longi 615W x 16 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 22, category: 'residential', date: '25-07-2025',
      title: 'Hybrid 8kW + Battery 20kWh', location: 'สมุทรปราการ',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 20kWh สำหรับบ้านสวน ลดค่าไฟได้ 4,500-5,500 บาท/เดือน', en: 'Hybrid 8kW system with a 20kWh battery for a farmhouse, cutting electricity bills by 4,500-5,500 THB/month.' },
      systemSize: '8.61', annualEnergy: '12,915', costSaving: '4,500 - 5,500', payback: '4-5',
      images: ['/projects/25-07-2025/1.webp', '/projects/25-07-2025/2.webp', '/projects/25-07-2025/3.webp', '/projects/25-07-2025/4.webp', '/projects/25-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: { th: 'LVtopsun 10kWh x 2 ลูก', en: 'LVtopsun 10kWh x 2 units' } },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 14 แผง', en: 'Longi 615W x 14 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 23, category: 'residential', date: '28-07-2025',
      title: 'Micro Inverter + AC Couple Battery', location: 'กรุงเทพมหานคร',
      description: { th: 'ระบบ Micro Inverter 6kW พร้อม Battery AC Couple 14kWh ลดค่าไฟได้ 3,500-4,000 บาท/เดือน', en: 'Micro Inverter 6kW system with a 14kWh AC Couple battery, cutting electricity bills by 3,500-4,000 THB/month.' },
      systemSize: '7.38', annualEnergy: '11,070', costSaving: '3,500 - 4,000', payback: '4-5',
      images: ['/projects/28-07-2025/1.webp', '/projects/28-07-2025/2.webp', '/projects/28-07-2025/3.webp', '/projects/28-07-2025/4.webp', '/projects/28-07-2025/5.webp'],
      equipment: [
        { name: 'Micro Inverter', detail: { th: 'Atmoce MI-500W x 12 ตัว', en: 'Atmoce MI-500W x 12 units' } },
        { name: 'M-Combiner', detail: 'MC100-T' },
        { name: 'Battery', detail: { th: 'Atmoce MS-7K-U 7kWh x 2 ลูก', en: 'Atmoce MS-7K-U 7kWh x 2 units' } },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 12 แผง', en: 'Longi 615W x 12 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Micro Inverter 25 ปี', en: 'Micro Inverter 25 years' },
        { th: 'แบตเตอรี่ 10 ปี', en: 'Battery 10 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 24, category: 'residential', date: '1-08-2025',
      title: 'Hybrid 6kW Solis', location: 'นครพนม',
      description: { th: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 15kWh และระบบ Full Backup', en: 'Hybrid 6kW system with a 15kWh battery and Full Backup.' },
      systemSize: '6.5', annualEnergy: '9,750', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/1-08-2025/1.webp', '/projects/1-08-2025/2.webp', '/projects/1-08-2025/3.webp', '/projects/1-08-2025/4.webp', '/projects/1-08-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 10 แผง', en: 'AIKO 650W x 10 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 25, category: 'residential', date: '6-08-2025',
      title: 'Hybrid 8kW + Battery 30kWh', location: 'ราชบุรี',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 30kWh และระบบ Full Backup ลดค่าไฟได้ 4,500-5,500 บาท/เดือน', en: 'Hybrid 8kW system with a 30kWh battery and Full Backup, cutting electricity bills by 4,500-5,500 THB/month.' },
      systemSize: '8.61', annualEnergy: '12,915', costSaving: '4,500 - 5,500', payback: '5-6',
      images: ['/projects/6-08-2025/1.webp', '/projects/6-08-2025/2.webp', '/projects/6-08-2025/3.webp', '/projects/6-08-2025/4.webp', '/projects/6-08-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: { th: 'LVtopsun 15kWh x 2 ลูก', en: 'LVtopsun 15kWh x 2 units' } },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 14 แผง', en: 'Longi 615W x 14 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 26, category: 'residential', date: '13-08-2025',
      title: 'Hybrid 8kW + Battery 16kWh', location: 'ปทุมธานี',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 16kWh และระบบ Full Backup ลดค่าไฟได้ 4,500-5,500 บาท/เดือน', en: 'Hybrid 8kW system with a 16kWh battery and Full Backup, cutting electricity bills by 4,500-5,500 THB/month.' },
      systemSize: '8.61', annualEnergy: '12,915', costSaving: '4,500 - 5,500', payback: '4-5',
      images: ['/projects/13-08-2025/1.webp', '/projects/13-08-2025/2.webp', '/projects/13-08-2025/3.webp', '/projects/13-08-2025/4.webp', '/projects/13-08-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 16kWh' },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 14 แผง', en: 'Longi 615W x 14 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 27, category: 'residential', date: '22-08-2025',
      title: 'Hybrid 6kW + Battery 45kWh', location: 'ตรัง',
      description: { th: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 45kWh และระบบ Full Backup ลดค่าไฟได้ 9,000-10,500 บาท/เดือน', en: 'Hybrid 6kW system with a 45kWh battery and Full Backup, cutting electricity bills by 9,000-10,500 THB/month.' },
      systemSize: '18.4', annualEnergy: '27,600', costSaving: '9,000 - 10,500', payback: '4-5',
      images: ['/projects/22-08-2025/1.webp', '/projects/22-08-2025/2.webp', '/projects/22-08-2025/3.webp', '/projects/22-08-2025/4.webp', '/projects/22-08-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: { th: 'LVtopsun 15kWh x 3 ลูก', en: 'LVtopsun 15kWh x 3 units' } },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 30 แผง', en: 'Longi 615W x 30 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 28, category: 'residential', date: '27-08-2025',
      title: 'Micro Inverter 5kW', location: 'กรุงเทพมหานคร',
      description: { th: 'ระบบ Micro Inverter 5kW เปลี่ยนหลังคาให้เป็นแหล่งพลังงานสะอาด ลดค่าไฟได้ 3,000-3,500 บาท/เดือน', en: 'Micro Inverter 5kW system that turns the roof into a clean energy source, cutting electricity bills by 3,000-3,500 THB/month.' },
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/27-08-2025/1.webp', '/projects/27-08-2025/2.webp', '/projects/27-08-2025/3.webp', '/projects/27-08-2025/4.webp', '/projects/27-08-2025/5.webp'],
      equipment: [
        { name: 'Micro Inverter', detail: 'Atmoce MI-500' },
        { name: 'M-Combiner', detail: 'MC100L' },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 10 แผง', en: 'Longi 615W x 10 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Micro Inverter 25 ปี', en: 'Micro Inverter 25 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 29, category: 'residential', date: '9-09-2025',
      title: 'Smart Solution Sigenergy + EV Charger', location: 'นนทบุรี',
      description: { th: 'Smart Solution ครบวงจรจาก Sigenergy พร้อม DC EV Charger 25kW รองรับ V2H สลับไฟ 0ms', en: 'All-in-one Smart Solution from Sigenergy with a 25kW DC EV Charger, V2H support, and 0ms switchover.' },
      systemSize: '29.9', annualEnergy: '44,850', costSaving: '10,000 - 15,000', payback: '4-5',
      images: ['/projects/9-09-2025/1.webp', '/projects/9-09-2025/2.webp', '/projects/9-09-2025/3.webp', '/projects/9-09-2025/4.webp', '/projects/9-09-2025/5.webp'],
      equipment: [
        { name: 'Controller', detail: 'Sigen EC 25kW' },
        { name: 'EV Charger', detail: 'Sigen DC EV Charger 25kW (V2H)' },
        { name: 'Battery', detail: 'Sigen Battery 36kWh' },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 46 แผง', en: 'AIKO 650W x 46 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Controller 10 ปี', en: 'Controller 10 years' },
        { th: 'แบตเตอรี่ 10 ปี', en: 'Battery 10 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 30, category: 'residential', date: '26-09-2025',
      title: 'Hybrid 6kW + Battery 15kWh', location: 'นครปฐม',
      description: { th: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 15kWh และระบบ Full Backup ลดค่าไฟได้ 3,000-3,500 บาท/เดือน', en: 'Hybrid 6kW system with a 15kWh battery and Full Backup, cutting electricity bills by 3,000-3,500 THB/month.' },
      systemSize: '6.5', annualEnergy: '9,750', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/26-09-2025/1.webp', '/projects/26-09-2025/2.webp', '/projects/26-09-2025/3.webp', '/projects/26-09-2025/4.webp', '/projects/26-09-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 10 แผง', en: 'AIKO 650W x 10 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 31, category: 'residential', date: '29-09-2025',
      title: 'Hybrid 8kW + Battery 15kWh', location: 'นครราชสีมา',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 15kWh และระบบ Full Backup ลดค่าไฟได้ 4,000-5,000 บาท/เดือน', en: 'Hybrid 8kW system with a 15kWh battery and Full Backup, cutting electricity bills by 4,000-5,000 THB/month.' },
      systemSize: '7.5', annualEnergy: '11,250', costSaving: '4,000 - 5,000', payback: '4-5',
      images: ['/projects/29-09-2025/1.webp', '/projects/29-09-2025/2.webp', '/projects/29-09-2025/3.webp', '/projects/29-09-2025/4.webp', '/projects/29-09-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 12 แผง', en: 'AIKO 650W x 12 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 32, category: 'residential', date: '10-10-2025',
      title: 'Hybrid 8kW + Battery 32kWh', location: 'กรุงเทพมหานคร',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 32kWh และระบบ Full Backup ลดค่าไฟได้ 4,000-5,000 บาท/เดือน', en: 'Hybrid 8kW system with a 32kWh battery and Full Backup, cutting electricity bills by 4,000-5,000 THB/month.' },
      systemSize: '9.1', annualEnergy: '13,650', costSaving: '4,000 - 5,000', payback: '4-5',
      images: ['/projects/10-10-2025/1.webp', '/projects/10-10-2025/2.webp', '/projects/10-10-2025/3.webp', '/projects/10-10-2025/4.webp', '/projects/10-10-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: { th: 'LVtopsun 16kWh x 2 ลูก', en: 'LVtopsun 16kWh x 2 units' } },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 14 แผง', en: 'AIKO 650W x 14 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 10 ปี', en: 'Battery 10 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 33, category: 'residential', date: '15-10-2025',
      title: 'Hybrid 8kW + Battery 30kWh', location: 'กรุงเทพมหานคร',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 30kWh และระบบ Full Backup ลดค่าไฟได้ 4,500-5,500 บาท/เดือน', en: 'Hybrid 8kW system with a 30kWh battery and Full Backup, cutting electricity bills by 4,500-5,500 THB/month.' },
      systemSize: '13', annualEnergy: '19,500', costSaving: '4,500 - 5,500', payback: '4-5',
      images: ['/projects/15-10-2025/1.webp', '/projects/15-10-2025/2.webp', '/projects/15-10-2025/3.webp', '/projects/15-10-2025/4.webp', '/projects/15-10-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: { th: 'LVtopsun 15kWh x 2 ลูก', en: 'LVtopsun 15kWh x 2 units' } },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 20 แผง', en: 'AIKO 650W x 20 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 34, category: 'residential', date: '20-10-2025',
      title: 'Hybrid 6kW + Battery 16kWh', location: 'กรุงเทพมหานคร',
      description: { th: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 16kWh และระบบ Full Backup ลดค่าไฟได้ 3,500-4,000 บาท/เดือน', en: 'Hybrid 6kW system with a 16kWh battery and Full Backup, cutting electricity bills by 3,500-4,000 THB/month.' },
      systemSize: '7.8', annualEnergy: '11,700', costSaving: '3,500 - 4,000', payback: '4-5',
      images: ['/projects/20-10-2025/1.webp', '/projects/20-10-2025/2.webp', '/projects/20-10-2025/3.webp', '/projects/20-10-2025/4.webp', '/projects/20-10-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 16kWh' },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 12 แผง', en: 'AIKO 650W x 12 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 10 ปี', en: 'Battery 10 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 35, category: 'residential', date: '27-10-2025',
      title: 'Hybrid 8kW + Battery 15kWh', location: 'ชลบุรี',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 15kWh และระบบ Full Backup ลดค่าไฟได้ 4,500-5,500 บาท/เดือน', en: 'Hybrid 8kW system with a 15kWh battery and Full Backup, cutting electricity bills by 4,500-5,500 THB/month.' },
      systemSize: '9.1', annualEnergy: '13,650', costSaving: '4,500 - 5,500', payback: '4-5',
      images: ['/projects/27-10-2025/1.webp', '/projects/27-10-2025/2.webp', '/projects/27-10-2025/3.webp', '/projects/27-10-2025/4.webp', '/projects/27-10-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: { th: 'LVtopsun 5kWh x 3 ลูก', en: 'LVtopsun 5kWh x 3 units' } },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 14 แผง', en: 'AIKO 650W x 14 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 36, category: 'residential', date: '3-11-2025',
      title: 'Hybrid 8kW + Battery 20kWh + Optimizer', location: 'นครราชสีมา',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ BYD 20kWh และ Optimizer สำหรับบ้านสวน', en: 'Hybrid 8kW system with a BYD 20kWh battery and Optimizers for a farmhouse.' },
      systemSize: '8.61', annualEnergy: '12,915', costSaving: '4,000 - 5,000', payback: '4-5',
      images: ['/projects/3-11-2025/1.webp', '/projects/3-11-2025/2.webp', '/projects/3-11-2025/3.webp', '/projects/3-11-2025/4.webp', '/projects/3-11-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: { th: 'BYD 5kWh x 4 ลูก', en: 'BYD 5kWh x 4 units' } },
        { name: 'Optimizer', detail: { th: 'Solar Optimizer 1200-1500V x 7 ตัว', en: 'Solar Optimizer 1200-1500V x 7 units' } },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 14 แผง', en: 'Longi 615W x 14 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'Optimizer 25 ปี', en: 'Optimizer 25 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 37, category: 'hotel', date: '10-11-2025',
      title: { th: 'Hybrid 50kW 3 Phase โรงแรม', en: 'Hybrid 50kW 3 Phase Hotel' }, location: 'สมุทรปราการ',
      description: { th: 'ระบบ Hybrid 50kW 3 Phase สำหรับโรงแรมทับทิมสยาม พร้อมแบตเตอรี่ 52.2kWh และระบบ Backup ชั้น 1', en: 'Hybrid 50kW 3 Phase system for the Tubtim Siam hotel, with a 52.2kWh battery and backup power for the first floor.' },
      systemSize: '42.9', annualEnergy: '64,350', costSaving: '20,000 - 25,000', payback: '4-5',
      images: ['/projects/10-11-2025/1.webp', '/projects/10-11-2025/2.webp', '/projects/10-11-2025/3.webp', '/projects/10-11-2025/4.webp', '/projects/10-11-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis High Volt 50kW 3 Phase' },
        { name: 'Battery', detail: { th: 'LVTOPSUN High Volt 5kWh x 10 ลูก', en: 'LVTOPSUN High Volt 5kWh x 10 units' } },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 66 แผง', en: 'AIKO 650W x 66 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'Mounting 10 ปี', en: 'Mounting 10 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 38, category: 'international', date: '24-11-2025',
      title: 'Micro Inverter 39kW 7-Eleven Laos', location: 'ประเทศลาว',
      description: { th: 'ระบบ Micro Inverter 39kW สำหรับ 7-Eleven ที่ประเทศลาว ตรวจสอบการทำงานรายแผงได้', en: 'Micro Inverter 39kW system for a 7-Eleven store in Laos, with panel-level monitoring.' },
      systemSize: '39', annualEnergy: '58,500', costSaving: '15,000 - 20,000', payback: '4-5',
      images: ['/projects/24-11-2025/1.webp', '/projects/24-11-2025/2.webp', '/projects/24-11-2025/3.webp', '/projects/24-11-2025/4.webp', '/projects/24-11-2025/5.webp'],
      equipment: [
        { name: 'Micro Inverter', detail: { th: 'Atmoce MI-500 x 60 ตัว', en: 'Atmoce MI-500 x 60 units' } },
        { name: 'M-Combiner', detail: 'MC100-T' },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 60 แผง', en: 'AIKO 650W x 60 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Micro Inverter 25 ปี', en: 'Micro Inverter 25 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 39, category: 'residential', date: '27-11-2025',
      title: 'Hybrid 8kW + Battery 32kWh', location: 'อุดรธานี',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 32kWh และระบบ Backup ทั้งหลัง ลดค่าไฟได้ 4,000-5,000 บาท/เดือน', en: 'Hybrid 8kW system with a 32kWh battery and whole-house backup, cutting electricity bills by 4,000-5,000 THB/month.' },
      systemSize: '10.4', annualEnergy: '15,600', costSaving: '4,000 - 5,000', payback: '5-6',
      images: ['/projects/27-11-2025/1.webp', '/projects/27-11-2025/2.webp', '/projects/27-11-2025/3.webp', '/projects/27-11-2025/4.webp', '/projects/27-11-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: { th: 'LVTOPSUN 16kWh x 2 ลูก', en: 'LVTOPSUN 16kWh x 2 units' } },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 16 แผง', en: 'AIKO 650W x 16 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 7 ปี', en: 'Battery 7 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 40, category: 'residential', date: '12-12-2025',
      title: 'Hybrid 8kW + Battery 16kWh', location: 'นนทบุรี',
      description: { th: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 16kWh และระบบ Full Backup ลดค่าไฟได้ 3,800-4,200 บาท/เดือน', en: 'Hybrid 8kW system with a 16kWh battery and Full Backup, cutting electricity bills by 3,800-4,200 THB/month.' },
      systemSize: '7.8', annualEnergy: '11,700', costSaving: '3,800 - 4,200', payback: '4-5',
      images: ['/projects/12-12-2025/1.webp', '/projects/12-12-2025/2.webp', '/projects/12-12-2025/3.webp', '/projects/12-12-2025/4.webp', '/projects/12-12-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 16kWh' },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 12 แผง', en: 'AIKO 650W x 12 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Inverter 5 ปี', en: 'Inverter 5 years' },
        { th: 'แบตเตอรี่ 10 ปี', en: 'Battery 10 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 41, category: 'residential', date: '17-12-2025',
      title: 'Sigenergy 5kW + Battery 18kWh', location: 'ปทุมธานี',
      description: { th: 'ระบบ Sigenergy 5kW พร้อมแบตเตอรี่ 18kWh ระบบ Full Backup สลับไฟ 0ms', en: 'Sigenergy 5kW system with an 18kWh battery and Full Backup with 0ms switchover.' },
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,200 - 3,800', payback: '4-5',
      images: ['/projects/17-12-2025/1.webp', '/projects/17-12-2025/2.webp', '/projects/17-12-2025/3.webp', '/projects/17-12-2025/4.webp', '/projects/17-12-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Sigenstor 5kW 1 Phase' },
        { name: 'Gateway', detail: 'Sigen Energy Gateway 1 Phase' },
        { name: 'Battery', detail: { th: 'Sigenstor Battery 9kWh x 2 ลูก', en: 'Sigenstor Battery 9kWh x 2 units' } },
        { name: 'Solar Panel', detail: { th: 'Longi 615W x 10 แผง', en: 'Longi 615W x 10 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Gateway 2 ปี', en: 'Gateway 2 years' },
        { th: 'Inverter 10 ปี', en: 'Inverter 10 years' },
        { th: 'แบตเตอรี่ 10 ปี', en: 'Battery 10 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 42, category: 'industrial', date: '24-12-2025',
      title: 'SIGENERGY 25kW 3 Phase + EV Charger', location: 'ชลบุรี',
      description: { th: 'ระบบ Hybrid SIGENERGY 25kW 3 Phase พร้อม EV Charger DC 25kW และ AC 11kW ลดค่าไฟได้ 6,000-10,000 บาท/เดือน', en: 'Hybrid SIGENERGY 25kW 3 Phase system with 25kW DC and 11kW AC EV Chargers, cutting electricity bills by 6,000-10,000 THB/month.' },
      systemSize: '14.3', annualEnergy: '21,450', costSaving: '6,000 - 10,000', payback: '4-5',
      images: ['/projects/24-12-2025/1.webp', '/projects/24-12-2025/2.webp', '/projects/24-12-2025/3.webp', '/projects/24-12-2025/4.webp', '/projects/24-12-2025/5.webp'],
      equipment: [
        { name: 'Controller', detail: 'SIGEN 25kW 3 Phase' },
        { name: 'Gateway', detail: 'C60-2' },
        { name: 'EV DC Charger', detail: '25kW 10m Cable' },
        { name: 'EV AC Charger', detail: '11kW 3 Phase' },
        { name: 'Battery', detail: { th: 'SIGEN 9kWh x 2 ลูก', en: 'SIGEN 9kWh x 2 units' } },
        { name: 'Solar Panel', detail: { th: 'AIKO 650W x 22 แผง', en: 'AIKO 650W x 22 panels' } }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Controller 10 ปี', en: 'Controller 10 years' },
        { th: 'แบตเตอรี่ 10 ปี', en: 'Battery 10 years' },
        { th: 'Gateway 2 ปี', en: 'Gateway 2 years' },
        { th: 'EV Charger 2 ปี', en: 'EV Charger 2 years' },
        { th: 'แผง 12-30 ปี', en: 'Panels 12-30 years' },
      ]
    },
    {
      id: 43, category: 'residential', date: '30-12-2025',
      title: 'SIGENERGY 10kW + EV Charger', location: 'นครราชสีมา',
      description: { th: 'ระบบ Hybrid SIGENERGY 10kW พร้อม EV DC Charger 25kW รองรับทั้งการใช้ไฟในบ้านและชาร์จรถยนต์ไฟฟ้า', en: 'Hybrid SIGENERGY 10kW system with a 25kW EV DC Charger, powering the home and charging an electric car.' },
      systemSize: '10', annualEnergy: '15,000', costSaving: '4,000 - 6,000', payback: '5-6',
      images: ['/projects/30-12-2025/1.webp', '/projects/30-12-2025/2.webp', '/projects/30-12-2025/3.webp', '/projects/30-12-2025/4.webp', '/projects/30-12-2025/5.webp'],
      equipment: [
        { name: 'Controller', detail: 'SIGEN 10kW Single Phase' },
        { name: 'Gateway', detail: 'Home Single Phase 12k sp' },
        { name: 'Battery', detail: { th: 'SIGENERGY 9kWh x 2 ลูก', en: 'SIGENERGY 9kWh x 2 units' } },
        { name: 'EV DC Charger', detail: '25kW 10m Cable CCS2' }
      ],
      warranty: [
        { th: 'งานติดตั้ง 3 ปี', en: 'Installation 3 years' },
        { th: 'Controller 10 ปี', en: 'Controller 10 years' },
        { th: 'แบตเตอรี่ 10 ปี', en: 'Battery 10 years' },
        { th: 'Gateway 2 ปี', en: 'Gateway 2 years' },
        { th: 'EV Charger 2 ปี', en: 'EV Charger 2 years' },
      ]
    },
  ];

  // Each post's first image is its promo poster and the rest carry a contact strip along the
  // bottom; show the job's own photographs instead, with the strip cropped off
  // (public/media/work, built by `npm run media`).
  const projects = rawProjects.map((p) => ({
    ...p,
    images: p.images.slice(1).map((_, i) => `/media/work/${p.date}-${i + 2}.webp`),
  }));

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(p => p.category === activeCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, PAGE_SIZE);

  const handleLocationClick = (locationName, pathData) => {
    setSelectedProvince({ name: locationName, pathData });
  };

  const provinceProjects = selectedProvince 
    ? projects.filter(p => p.location === selectedProvince.name)
    : [];

  const closeProvinceModal = () => {
    setSelectedProvince(null);
  };

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Home;
  };

  const getCategoryName = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? t(cat.name) : t('อื่นๆ', 'Other');
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject || selectedProvince) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [selectedProject, selectedProvince]);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white mobile-full-width bg-section-mobile relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-kb-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container-fix relative z-10">
        <SectionHeading
          eyebrow={t('ผลงาน', 'PORTFOLIO')}
          title={t('ผลงานและ', 'Projects &')}
          highlight={t('กรณีศึกษา', 'Case Studies')}
          subtitle={
            <>
              {t('ผลงานติดตั้งจริงจากลูกค้าที่ไว้วางใจ พร้อมข้อมูลประสิทธิภาพระบบ', 'Real installations for customers who trusted us, with system performance data')}
              <br />
              <span className="text-kb-orange font-semibold">
                <CountUp value={t('43+ โปรเจกต์ทั่วประเทศไทยและต่างประเทศ', '43+ projects across Thailand and abroad')} />
              </span>
            </>
          }
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setShowAllProjects(false); }}
                className={`inline-flex items-center gap-1.5 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 ${
                  active
                    ? 'bg-gradient-to-br from-kb-orange to-kb-orange-dark text-white shadow-[0_10px_30px_-10px_rgba(249,115,22,0.65)]'
                    : 'bg-white text-kb-gray border border-gray-200 hover:border-kb-orange hover:text-kb-orange-dark'
                }`}
              >
                <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                <span className="whitespace-nowrap">{t(cat.name)}</span>
              </button>
            );
          })}
        </div>

        {/* Bento grid: every 5-tile group has one big tile, alternating left / right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[240px] gap-3 sm:gap-4 lg:grid-flow-dense">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => {
              const big = idx % 5 === 0;
              const bigRight = big && Math.floor(idx / 5) % 2 === 1;
              return (
                <motion.button
                  type="button"
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: (idx % 10) * 0.04 }}
                  onClick={() => openProject(project)}
                  className={`group relative block w-full h-full text-left rounded-[1.25rem] overflow-hidden ring-1 ring-black/5 bg-gray-100 transition-shadow duration-500 hover:ring-2 hover:ring-kb-orange/70 hover:shadow-[0_24px_48px_-20px_rgba(249,115,22,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kb-orange ${
                    big ? `lg:col-span-2 lg:row-span-2 ${bigRight ? 'lg:col-start-3' : ''}` : ''
                  }`}
                >
                  <div className="card-kb-img absolute inset-0">
                    <img
                      src={project.images[0]}
                      alt={tx(project.title)}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>

                  <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5 transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                    <h4 className={`font-bold text-white leading-snug line-clamp-2 mb-2.5 drop-shadow ${big ? 'text-lg lg:text-2xl' : 'text-sm lg:text-base'}`}>
                      {tx(project.title)}
                    </h4>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 bg-gradient-to-br from-kb-orange to-kb-orange-dark text-white text-[11px] lg:text-xs px-2.5 py-1 rounded-full font-bold shadow-md">
                        <Zap className="w-3 h-3" />
                        {project.systemSize} kW
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[11px] lg:text-xs px-2.5 py-1 rounded-full font-medium min-w-0">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{t(placeName(project.location))}</span>
                      </span>
                      {big && (
                        <span className="hidden sm:inline-flex items-center bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[11px] lg:text-xs px-2.5 py-1 rounded-full font-medium">
                          {getCategoryName(project.category)}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredProjects.length > PAGE_SIZE && (
          <div className="flex justify-center mt-8 lg:mt-10">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="btn-kb text-sm lg:text-base"
            >
              {showAllProjects ? (
                <>
                  <ChevronDown className="w-5 h-5 rotate-180" />
                  {t('แสดงน้อยลง', 'Show less')}
                </>
              ) : (
                <>
                  {t(`ดูผลงานทั้งหมด (${filteredProjects.length} โปรเจกต์)`, `View all projects (${filteredProjects.length})`)}
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Map */}
        <FadeUp delay={0.1} className="mt-14 lg:mt-20 max-w-xl mx-auto">
          <div className="bg-white rounded-[1.25rem] shadow-[0_8px_24px_-12px_rgba(17,24,39,0.12)] ring-1 ring-black/5 overflow-hidden">
            <div className="bg-gradient-to-r from-kb-orange via-orange-500 to-orange-400 px-4 lg:px-6 py-4 lg:py-5 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
              <div className="relative">
                <h3 className="text-white font-bold text-base lg:text-xl flex items-center gap-2 mb-1">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6" />
                  {t('พื้นที่ติดตั้งทั่วประเทศ', 'Installations nationwide')}
                </h3>
                <p className="text-white/90 text-xs lg:text-sm">{t('คลิกที่จังหวัดเพื่อดูโปรเจกต์ในพื้นที่', 'Click a province to see the projects there')}</p>
              </div>
            </div>
            <ThailandMap projects={projects} onProvinceClick={handleLocationClick} />
          </div>
        </FadeUp>

        {/* Province Modal */}
        <AnimatePresence>
          {selectedProvince && provinceProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
              onClick={closeProvinceModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-[1.25rem] shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-kb-orange via-orange-500 to-orange-400 px-6 py-4 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">{t(placeName(selectedProvince.name))}</h3>
                        <p className="text-white/80 text-sm">{t(`${provinceProjects.length} โปรเจกต์ในพื้นที่นี้`, `${provinceProjects.length} ${provinceProjects.length === 1 ? 'project' : 'projects'} in this area`)}</p>
                      </div>
                    </div>
                    <button 
                      onClick={closeProvinceModal} 
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full flex items-center justify-center transition-all"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Content - Two Columns */}
                <div className="flex flex-col lg:flex-row h-[70vh]">
                  {/* Left - Projects List */}
                  <div className="lg:w-1/2 p-5 overflow-y-auto modal-scrollbar border-r border-gray-100">
                    <div className="space-y-3">
                      {provinceProjects.map((project, idx) => {
                        const CategoryIcon = getCategoryIcon(project.category);
                        return (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => { closeProvinceModal(); openProject(project); }}
                            onMouseEnter={() => setHoveredProjectId(project.id)}
                            onMouseLeave={() => setHoveredProjectId(null)}
                            className={`group bg-gray-50 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white rounded-2xl p-3 cursor-pointer transition-all duration-300 border-2 ${hoveredProjectId === project.id ? 'border-kb-orange shadow-lg shadow-orange-100' : 'border-transparent hover:border-kb-orange/30'}`}
                          >
                            <div className="flex gap-3">
                              {/* Thumbnail */}
                              <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden relative">
                                <img
                                  src={project.images[0]}
                                  alt={tx(project.title)}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-1 left-1 bg-kb-orange text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                                  #{idx + 1}
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="inline-flex items-center gap-1 bg-kb-orange/10 text-kb-orange px-2 py-0.5 rounded-full text-[10px] font-medium">
                                    <CategoryIcon className="w-2.5 h-2.5" />
                                    {getCategoryName(project.category)}
                                  </span>
                                </div>
                                
                                <h4 className="font-bold text-kb-dark text-sm group-hover:text-kb-orange transition-colors line-clamp-1 mb-1">
                                  {tx(project.title)}
                                </h4>

                                {/* Stats */}
                                <div className="flex flex-wrap items-center gap-1.5">
                                  <span className="bg-kb-orange text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                                    {project.systemSize} kWp
                                  </span>
                                  <span className="text-[10px] text-green-600 font-medium">
                                    ฿{project.costSaving.split(' - ')[0]}{t('/เดือน', '/month')}
                                  </span>
                                </div>
                              </div>

                              {/* Arrow */}
                              <div className="flex items-center">
                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-kb-orange transition-colors" />
                              </div>
                            </div>
                          </motion.div>
                      );
                    })}
                  </div>
                </div>

                  {/* Right - Province Shape with Project Dots */}
                  <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 p-6 flex-col items-center justify-center relative">
                    {selectedProvince.pathData ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Province Shape SVG */}
                        <svg 
                          viewBox={selectedProvince.pathData.viewBox} 
                          className="w-full h-full max-h-[55vh]"
                          style={{ filter: 'drop-shadow(0 4px 20px rgba(251, 146, 60, 0.15))' }}
                        >
                          <defs>
                            <linearGradient id="provinceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FED7AA" />
                              <stop offset="50%" stopColor="#FDBA74" />
                              <stop offset="100%" stopColor="#FB923C" />
                            </linearGradient>
                          </defs>
                          <path 
                            d={selectedProvince.pathData.d} 
                            fill="url(#provinceGradient)"
                            stroke="#F97316"
                            strokeWidth="1.5"
                          />
                          
                          {/* Project Dots - distributed within the province center */}
                          {provinceProjects.map((project, idx) => {
                            // Parse viewBox to get bounds
                            const vb = selectedProvince.pathData.viewBox.split(' ').map(Number);
                            const [minX, minY, width, height] = vb;
                            
                            // Calculate center of the province
                            const centerX = minX + width / 2;
                            const centerY = minY + height / 2;
                            
                            // Distribute dots in a circular/spiral pattern around center
                            const total = provinceProjects.length;
                            const maxRadius = Math.min(width, height) * 0.25; // Keep dots closer to center
                            
                            let cx, cy;
                            if (total === 1) {
                              cx = centerX;
                              cy = centerY;
                            } else if (total <= 6) {
                              // Circular pattern for small numbers
                              const angle = (idx / total) * 2 * Math.PI - Math.PI / 2;
                              const radius = maxRadius * 0.6;
                              cx = centerX + Math.cos(angle) * radius;
                              cy = centerY + Math.sin(angle) * radius;
                            } else {
                              // Spiral pattern for larger numbers
                              const spiralAngle = idx * 0.8;
                              const spiralRadius = maxRadius * 0.3 + (idx / total) * maxRadius * 0.5;
                              cx = centerX + Math.cos(spiralAngle) * spiralRadius;
                              cy = centerY + Math.sin(spiralAngle) * spiralRadius;
                            }
                            
                            const isHovered = hoveredProjectId === project.id;
                            const dotRadius = Math.min(width, height) * 0.035;
                            
                            return (
                              <g key={project.id}>
                                {/* Pulse animation for hovered */}
                                {isHovered && (
                                  <circle
                                    cx={cx}
                                    cy={cy}
                                    r={dotRadius * 2.5}
                                    fill="#F97316"
                                    opacity="0.3"
                                    className="animate-ping"
                                  />
                                )}
                                {/* Outer ring */}
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r={isHovered ? dotRadius * 1.6 : dotRadius * 1.3}
                                  fill="white"
                                  className="transition-all duration-300"
                                  style={{ 
                                    filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.15))',
                                  }}
                                />
                                {/* Main dot */}
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r={isHovered ? dotRadius * 1.3 : dotRadius}
                                  fill={isHovered ? "#EA580C" : "#F97316"}
                                  className="cursor-pointer transition-all duration-300"
                                  onClick={() => { closeProvinceModal(); openProject(project); }}
                                  onMouseEnter={() => setHoveredProjectId(project.id)}
                                  onMouseLeave={() => setHoveredProjectId(null)}
                                />
                                {/* Number label */}
                                <text
                                  x={cx}
                                  y={cy}
                                  textAnchor="middle"
                                  dominantBaseline="central"
                                  fill="white"
                                  fontSize={dotRadius * 1}
                                  fontWeight="bold"
                                  className="pointer-events-none"
                                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                                >
                                  {idx + 1}
                                </text>
                              </g>
                            );
                          })}
                        </svg>
                        
                        {/* Hover Info Card */}
                        {hoveredProjectId && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-3 shadow-xl border border-orange-200"
                          >
                            {(() => {
                              const project = provinceProjects.find(p => p.id === hoveredProjectId);
                              if (!project) return null;
                              const CategoryIcon = getCategoryIcon(project.category);
                              return (
                                <div className="flex items-center gap-3">
                                  <img
                                    src={project.images[0]}
                                    alt={tx(project.title)}
                                    className="w-14 h-14 rounded-lg object-cover"
                                  />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1 mb-0.5">
                                      <CategoryIcon className="w-3 h-3 text-kb-orange" />
                                      <span className="text-[10px] text-kb-gray">{getCategoryName(project.category)}</span>
                                    </div>
                                    <p className="font-bold text-sm text-kb-dark truncate">{tx(project.title)}</p>
                                    <p className="text-xs text-green-600 font-medium">฿{project.costSaving.split(' - ')[0]}{t('/เดือน', '/month')}</p>
                                  </div>
                                </div>
                              );
                            })()}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-kb-gray">
                        <MapPin className="w-16 h-16 mx-auto mb-4 text-kb-orange/30" />
                        <p>{t('ไม่พบข้อมูลรูปร่างจังหวัด', 'Province shape not available')}</p>
                      </div>
                    )}
                    
                    {/* Legend */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg px-3 py-2 shadow-md">
                      <p className="text-xs font-bold text-kb-dark mb-1">{t('คำแนะนำ', 'Tip')}</p>
                      <p className="text-[10px] text-kb-gray">{t('คลิกที่จุดเพื่อดูโปรเจกต์', 'Click a dot to view a project')}</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-kb-gray">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>{t('คลิกเพื่อดูรายละเอียดโปรเจกต์', 'Click a project to see its details')}</span>
                    </div>
                    <button
                      onClick={closeProvinceModal}
                      className="btn-kb-ghost !px-5 !py-2 text-sm"
                    >
                      {t('ปิด', 'Close')}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
              onClick={closeProject}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[1.25rem] shadow-2xl w-full max-w-6xl max-h-[90vh] mobile-project-modal overflow-hidden flex flex-col lg:flex-row relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile Close Button - Top Right */}
                <button
                  onClick={closeProject}
                  className="block sm:hidden w-12 h-12 rounded-full flex items-center justify-center transition-all mobile-close-button-top bg-white shadow-lg border border-gray-200 hover:bg-gray-50"
                >
                  <X className="w-6 h-6 text-kb-dark" />
                </button>
                <div className="lg:w-1/2 bg-gray-100 flex flex-col">
                  <div className="flex-1 relative flex items-center justify-center p-4 min-h-[300px] lg:min-h-0">
                    <motion.img
                      key={currentImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      src={selectedProject.images[currentImage]}
                      alt={tx(selectedProject.title)}
                      className="max-w-full max-h-[50vh] lg:max-h-[70vh] w-auto h-auto object-contain rounded-2xl shadow-lg"
                    />
                    
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

                    <div className="absolute bottom-6 right-6 bg-black/70 text-white text-sm px-3 py-1.5 rounded-full font-medium">
                      {currentImage + 1} / {selectedProject.images.length}
                    </div>
                  </div>

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
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col max-h-[90vh] overflow-y-auto">
                  <div className="flex items-start justify-between p-6 pb-0 flex-shrink-0 mobile-project-header sticky top-0 bg-white z-10">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 bg-kb-orange text-white px-3 py-1.5 rounded-full text-sm font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        {t(placeName(selectedProject.location))}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-xs text-kb-gray uppercase tracking-wide">{t('โปรเจกต์', 'Project')}</p>
                        <p className="text-2xl font-bold text-kb-orange">#{selectedProject.id}</p>
                      </div>
                      {/* Desktop Close Button - Hidden on Mobile */}
                      <button
                        onClick={closeProject}
                        className="hidden sm:flex w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full items-center justify-center transition-all"
                      >
                        <X className="w-5 h-5 text-kb-dark" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-visible p-6 pt-4 mobile-project-content">
                    <h3 className="text-2xl lg:text-3xl font-bold text-kb-dark mb-3">{tx(selectedProject.title)}</h3>
                    <p className="text-kb-gray leading-relaxed mb-6">{t(selectedProject.description)}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                        <div className="flex items-center gap-2 text-kb-orange mb-1">
                          <Sun className="w-4 h-4" />
                          <span className="text-xs font-semibold uppercase tracking-wide">{t('ขนาดระบบ', 'SYSTEM SIZE')}</span>
                        </div>
                        <p className="text-2xl font-bold text-kb-dark">{selectedProject.systemSize} <span className="text-sm font-normal text-kb-gray">kWp</span></p>
                      </div>
                      <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                        <div className="flex items-center gap-2 text-kb-orange mb-1">
                          <Zap className="w-4 h-4" />
                          <span className="text-xs font-semibold uppercase tracking-wide">{t('พลังงานต่อปี', 'ANNUAL ENERGY')}</span>
                        </div>
                        <p className="text-2xl font-bold text-kb-dark">{selectedProject.annualEnergy} <span className="text-sm font-normal text-kb-gray">{t('kWh/ปี', 'kWh/yr')}</span></p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
                        <div className="flex items-center gap-2 text-green-600 mb-1">
                          <span className="text-sm font-bold">฿</span>
                          <span className="text-xs font-semibold uppercase tracking-wide">{t('ประหยัดต่อเดือน', 'MONTHLY SAVING')}</span>
                        </div>
                        <p className="text-2xl font-bold text-kb-dark">{selectedProject.costSaving.split(' - ')[0]} <span className="text-sm font-normal text-kb-gray">{t('บาท/เดือน', 'THB/month')}</span></p>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                        <div className="flex items-center gap-2 text-blue-600 mb-1">
                          <span className="text-xs font-semibold uppercase tracking-wide">{t('คืนทุน', 'PAYBACK')}</span>
                        </div>
                        <p className="text-2xl font-bold text-kb-dark">{selectedProject.payback} <span className="text-sm font-normal text-kb-gray">{t('ปี', 'years')}</span></p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-kb-dark mb-3">{t('อุปกรณ์ที่ติดตั้ง', 'Installed equipment')}</h4>
                      <div className="space-y-2">
                        {selectedProject.equipment.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                            <span className="text-kb-orange font-semibold text-sm min-w-[80px]">{equipmentName(item.name)}</span>
                            <span className="text-kb-gray text-sm">{tx(item.detail)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pb-4">
                      <h4 className="font-bold text-kb-dark mb-3">{t('การรับประกัน', 'Warranty')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.warranty.map((item, idx) => (
                          <span key={idx} className="bg-green-100 text-green-700 text-xs px-3 py-1.5 rounded-full font-medium">
                            {t(item)}
                          </span>
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
