import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Zap, MapPin, Sun, X, Building2, Home, Factory, Hotel, Eye, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './AnimatedSection';
import ThailandMap from './ThailandMap';

const Projects = () => {
  const categories = [
    { id: 'all', name: 'ทั้งหมด', icon: Eye },
    { id: 'residential', name: 'บ้านพักอาศัย', icon: Home },
    { id: 'commercial', name: 'อาคารพาณิชย์', icon: Building2 },
    { id: 'hotel', name: 'โรงแรม', icon: Hotel },
    { id: 'industrial', name: 'โรงงาน', icon: Factory },
    { id: 'international', name: 'ต่างประเทศ', icon: Globe },
  ];

  const projects = [
    {
      id: 1, category: 'residential', date: '21-02-2025',
      title: 'Hybrid 5kW + Smart Optimizer', location: 'อุตรดิตถ์',
      description: 'ระบบ Hybrid 5kW On-Off Grid พร้อม Smart Optimizer ดูการทำงานรายแผงได้ มีระบบ Rapid Shutdown และสำรองไฟขณะไฟดับ',
      systemSize: '7', annualEnergy: '10,500', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/21-02-2025/1.webp', '/projects/21-02-2025/2.webp', '/projects/21-02-2025/3.webp', '/projects/21-02-2025/4.webp', '/projects/21-02-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid 5kW' },
        { name: 'Battery', detail: 'LFP 15 kWh' },
        { name: 'Optimizer', detail: 'Smart Optimizer 700W x 10 ตัว' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 2, category: 'residential', date: '26-4-2025',
      title: 'On-Grid 5kW Huawei', location: 'นนทบุรี',
      description: 'ระบบ On-Grid 5kW ติดตั้งบนหลังคาบ้าน ลดค่าไฟกลางวันได้ 3,000-3,500 บาท/เดือน',
      systemSize: '5', annualEnergy: '7,500', costSaving: '3,000 - 3,500', payback: '4',
      images: ['/projects/26-4-2025/1.webp', '/projects/26-4-2025/2.webp', '/projects/26-4-2025/3.webp', '/projects/26-4-2025/4.webp', '/projects/26-4-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Huawei 5kW' },
        { name: 'Solar Panel', detail: 'Longi 580W' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แผง 10-30 ปี']
    },
    {
      id: 3, category: 'residential', date: '28-4-2025',
      title: 'Hybrid 10kW 3 Phase + Optimizer', location: 'นครราชสีมา',
      description: 'ระบบ Hybrid 10kW 3 Phase พร้อม Optimizer และแบตเตอรี่ 16kWh ลดค่าไฟได้ 7,000-7,500 บาท/เดือน',
      systemSize: '10', annualEnergy: '15,000', costSaving: '7,000 - 7,500', payback: '4-5',
      images: ['/projects/28-4-2025/1.webp', '/projects/28-4-2025/2.webp', '/projects/28-4-2025/3.webp', '/projects/28-4-2025/4.webp', '/projects/28-4-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 10kW 3 Phase' },
        { name: 'Battery', detail: 'KB Energy Storage 16kWh' },
        { name: 'Optimizer', detail: 'Deye Optimizer' },
        { name: 'Solar Panel', detail: 'Longi 625W' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 5 ปี', 'แผง 10-30 ปี']
    },
    {
      id: 4, category: 'residential', date: '30-04-2025',
      title: 'On-Grid 5kW Deye', location: 'นครราชสีมา',
      description: 'ระบบ On-Grid 5kW สำหรับบ้านพักอาศัย ลดค่าไฟกลางวันได้ 3,000-3,500 บาท/เดือน',
      systemSize: '5', annualEnergy: '7,500', costSaving: '3,000 - 3,500', payback: '4',
      images: ['/projects/30-04-2025/1.webp', '/projects/30-04-2025/2.webp', '/projects/30-04-2025/3.webp', '/projects/30-04-2025/4.webp', '/projects/30-04-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Solar Panel', detail: 'Longi 625W' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แผง 10-30 ปี']
    },
    {
      id: 5, category: 'residential', date: '2-05-2025',
      title: 'Hybrid 5kW + Battery 16kWh', location: 'ขอนแก่น',
      description: 'ระบบ Hybrid 5kW พร้อมแบตเตอรี่ 16kWh สำหรับบ้านพักอาศัย ลดค่าไฟได้ 3,000-3,500 บาท/เดือน',
      systemSize: '5', annualEnergy: '7,500', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/2-05-2025/1.webp', '/projects/2-05-2025/2.webp', '/projects/2-05-2025/3.webp', '/projects/2-05-2025/4.webp', '/projects/2-05-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'KB Energy Storage 16kWh' },
        { name: 'Solar Panel', detail: 'Longi Hi-MO X10 645W' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 5 ปี', 'แผง 10-30 ปี']
    },
    {
      id: 6, category: 'industrial', date: '5-05-2025',
      title: 'Hybrid 100kW โรงงาน', location: 'สมุทรปราการ',
      description: 'ระบบ Hybrid 100kW สำหรับโรงงาน พร้อมระบบ Peak Shaving ลดค่าไฟได้ 90,000-100,000 บาท/เดือน',
      systemSize: '100', annualEnergy: '150,000', costSaving: '90,000 - 100,000', payback: '4-5',
      images: ['/projects/5-05-2025/1.webp', '/projects/5-05-2025/2.webp', '/projects/5-05-2025/3.webp', '/projects/5-05-2025/4.webp', '/projects/5-05-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 20kW 3 Phase x 5 เครื่อง' },
        { name: 'Battery', detail: 'KB Energy Storage 16kWh x 16 ลูก' },
        { name: 'Solar Panel', detail: 'JA Solar 630W' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 5 ปี', 'แผง 10-30 ปี']
    },
    {
      id: 7, category: 'commercial', date: '7-05-2025',
      title: 'Hybrid 5kW วัด', location: 'นครราชสีมา',
      description: 'ระบบ Hybrid 5kW สำหรับวัด พร้อมแบตเตอรี่ 16kWh ลดค่าไฟได้ 3,000-3,500 บาท/เดือน',
      systemSize: '5', annualEnergy: '7,500', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/7-05-2025/1.webp', '/projects/7-05-2025/2.webp', '/projects/7-05-2025/3.webp', '/projects/7-05-2025/4.webp', '/projects/7-05-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'KB Energy Storage 16kWh' },
        { name: 'Solar Panel', detail: 'Longi Hi-MO X10 645W' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 5 ปี', 'แผง 10-30 ปี']
    },
    {
      id: 8, category: 'residential', date: '9-05-2025',
      title: 'Hybrid 10kW + Battery 20kWh', location: 'นครราชสีมา',
      description: 'ระบบ Hybrid 10kW พร้อมแบตเตอรี่ 20kWh และระบบ Backup ลดค่าไฟได้ 7,000-7,500 บาท/เดือน',
      systemSize: '11.25', annualEnergy: '16,875', costSaving: '7,000 - 7,500', payback: '4-5',
      images: ['/projects/9-05-2025/1.webp', '/projects/9-05-2025/2.webp', '/projects/9-05-2025/3.webp', '/projects/9-05-2025/4.webp', '/projects/9-05-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 10kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 20kWh' },
        { name: 'Solar Panel', detail: 'Longi 625W x 18 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 10-30 ปี']
    },
    {
      id: 9, category: 'residential', date: '12-05-2025',
      title: 'Hybrid 8kW + Battery 20kWh', location: 'กรุงเทพมหานคร',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 20kWh และระบบ Full Backup',
      systemSize: '8', annualEnergy: '12,000', costSaving: '4,000 - 5,000', payback: '4-5',
      images: ['/projects/12-05-2025/1.webp', '/projects/12-05-2025/2.webp', '/projects/12-05-2025/3.webp', '/projects/12-05-2025/4.webp', '/projects/12-05-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 10kWh x 2 ลูก' },
        { name: 'Solar Panel', detail: 'Longi 615W' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 10, category: 'residential', date: '14-05-2025',
      title: 'Hybrid 6kW + Battery 15kWh', location: 'นนทบุรี',
      description: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 15kWh และระบบ Full Backup',
      systemSize: '6', annualEnergy: '9,000', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/14-05-2025/1.webp', '/projects/14-05-2025/2.webp', '/projects/14-05-2025/3.webp', '/projects/14-05-2025/4.webp', '/projects/14-05-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: 'Longi 615W' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 11, category: 'residential', date: '2-06-2025',
      title: 'Hybrid 8kW + Battery 20kWh', location: 'นครปฐม',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 20kWh และระบบสำรองไฟทั้งระบบ',
      systemSize: '8.82', annualEnergy: '13,230', costSaving: '4,000 - 4,500', payback: '4-5',
      images: ['/projects/2-06-2025/1.webp', '/projects/2-06-2025/2.webp', '/projects/2-06-2025/3.webp', '/projects/2-06-2025/4.webp', '/projects/2-06-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 10kWh x 2 ลูก' },
        { name: 'Solar Panel', detail: 'Jinko 630W x 14 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 12, category: 'residential', date: '9-06-2025',
      title: 'Hybrid 6kW + Battery 15kWh', location: 'สิงห์บุรี',
      description: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 15kWh และระบบ Backup ลดค่าไฟได้ 3,500-4,000 บาท/เดือน',
      systemSize: '6.765', annualEnergy: '10,148', costSaving: '3,500 - 4,000', payback: '4-5',
      images: ['/projects/9-06-2025/1.webp', '/projects/9-06-2025/2.webp', '/projects/9-06-2025/3.webp', '/projects/9-06-2025/4.webp', '/projects/9-06-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: 'Longi 615W x 11 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 13, category: 'residential', date: '23-06-2025',
      title: 'Hybrid 5kW Deye', location: 'ลพบุรี',
      description: 'ระบบ Hybrid 5kW พร้อมแบตเตอรี่ 10kWh และระบบสำรองไฟ ลดค่าไฟได้ 3,000-3,500 บาท/เดือน',
      systemSize: '6.25', annualEnergy: '9,375', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/23-06-2025/1.webp', '/projects/23-06-2025/2.webp', '/projects/23-06-2025/3.webp', '/projects/23-06-2025/4.webp', '/projects/23-06-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 10kWh' },
        { name: 'Solar Panel', detail: 'Longi 625W x 10 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 14, category: 'residential', date: '25-06-2025',
      title: 'Hybrid 5kW บ้านสวน', location: 'มหาสารคาม',
      description: 'ระบบ Hybrid 5kW สำหรับบ้านสวน ใช้ไฟได้ทั้งกลางวันและกลางคืน เปิดแอร์ได้ 2-3 เครื่อง',
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/25-06-2025/1.webp', '/projects/25-06-2025/2.webp', '/projects/25-06-2025/3.webp', '/projects/25-06-2025/4.webp', '/projects/25-06-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: 'Longi 615W x 10 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 10-30 ปี']
    },
    {
      id: 15, category: 'residential', date: '30-06-2025',
      title: 'Hybrid 6kW Solis', location: 'ขอนแก่น',
      description: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 15kWh และระบบ Backup ลดค่าไฟได้ 3,500-4,000 บาท/เดือน',
      systemSize: '6.765', annualEnergy: '10,148', costSaving: '3,500 - 4,000', payback: '4-5',
      images: ['/projects/30-06-2025/1.webp', '/projects/30-06-2025/2.webp', '/projects/30-06-2025/3.webp', '/projects/30-06-2025/4.webp', '/projects/30-06-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: 'Longi 615W x 11 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 16, category: 'residential', date: '2-07-2025',
      title: 'Hybrid 10kW + Battery 30kWh', location: 'นครปฐม',
      description: 'ระบบ Hybrid 10kW พร้อมแบตเตอรี่ 30kWh ลดค่าไฟทั้งกลางวันและกลางคืนได้ 5,500-6,500 บาท/เดือน',
      systemSize: '11.07', annualEnergy: '16,605', costSaving: '5,500 - 6,500', payback: '4-5',
      images: ['/projects/2-07-2025/1.webp', '/projects/2-07-2025/2.webp', '/projects/2-07-2025/3.webp', '/projects/2-07-2025/4.webp', '/projects/2-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 10kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh x 2 ลูก' },
        { name: 'Solar Panel', detail: 'Longi 615W x 18 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 10-30 ปี']
    },
    {
      id: 17, category: 'residential', date: '7-07-2025',
      title: 'Hybrid 6kW Luxpower', location: 'ขอนแก่น',
      description: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 10kWh ใช้ไฟได้ทั้งกลางวันและกลางคืน',
      systemSize: '3.075', annualEnergy: '4,613', costSaving: '2,000 - 2,500', payback: '4-5',
      images: ['/projects/7-07-2025/1.webp', '/projects/7-07-2025/2.webp', '/projects/7-07-2025/3.webp', '/projects/7-07-2025/4.webp', '/projects/7-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Luxpower 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 10kWh' },
        { name: 'Solar Panel', detail: 'Longi 615W x 5 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 2 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 10-30 ปี']
    },
    {
      id: 18, category: 'residential', date: '9-07-2025',
      title: 'Hybrid 5kW Deye', location: 'นนทบุรี',
      description: 'ระบบ Hybrid 5kW พร้อมแบตเตอรี่ 15kWh ลดค่าไฟได้ 3,000-3,500 บาท/เดือน',
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/9-07-2025/1.webp', '/projects/9-07-2025/2.webp', '/projects/9-07-2025/3.webp', '/projects/9-07-2025/4.webp', '/projects/9-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: 'Longi 615W x 10 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 19, category: 'residential', date: '14-07-2025',
      title: 'Off-Grid 5kW Deye', location: 'ขอนแก่น',
      description: 'ระบบ Off-Grid 5kW สำหรับบ้านที่ไฟไม่ถึง ใช้แอร์ได้ 3-4 ตัวกลางวัน 2 ตัวกลางคืน',
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/14-07-2025/1.webp', '/projects/14-07-2025/2.webp', '/projects/14-07-2025/3.webp', '/projects/14-07-2025/4.webp', '/projects/14-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: 'Longi 615W x 10 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 20, category: 'residential', date: '16-07-2025',
      title: 'Hybrid 5kW + Battery 20kWh', location: 'สมุทรปราการ',
      description: 'ระบบ Hybrid 5kW พร้อมแบตเตอรี่ 20kWh ลดค่าไฟได้ 3,000-3,500 บาท/เดือน',
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/16-07-2025/1.webp', '/projects/16-07-2025/2.webp', '/projects/16-07-2025/3.webp', '/projects/16-07-2025/4.webp', '/projects/16-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Deye 5kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 10kWh x 2 ลูก' },
        { name: 'Solar Panel', detail: 'Longi 615W x 10 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 21, category: 'residential', date: '18-07-2025',
      title: 'Hybrid 8kW + Battery 30kWh + AVR', location: 'ลพบุรี',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 30kWh และ AVR ป้องกันไฟตก ลดค่าไฟได้ 4,500-5,500 บาท/เดือน',
      systemSize: '9.84', annualEnergy: '14,760', costSaving: '4,500 - 5,500', payback: '4-5',
      images: ['/projects/18-07-2025/1.webp', '/projects/18-07-2025/2.webp', '/projects/18-07-2025/3.webp', '/projects/18-07-2025/4.webp', '/projects/18-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh x 2 ลูก' },
        { name: 'AVR', detail: 'ป้องกันไฟตก ไฟปลายสาย' },
        { name: 'Solar Panel', detail: 'Longi 615W x 16 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 22, category: 'residential', date: '25-07-2025',
      title: 'Hybrid 8kW + Battery 20kWh', location: 'สมุทรปราการ',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 20kWh สำหรับบ้านสวน ลดค่าไฟได้ 4,500-5,500 บาท/เดือน',
      systemSize: '8.61', annualEnergy: '12,915', costSaving: '4,500 - 5,500', payback: '4-5',
      images: ['/projects/25-07-2025/1.webp', '/projects/25-07-2025/2.webp', '/projects/25-07-2025/3.webp', '/projects/25-07-2025/4.webp', '/projects/25-07-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 10kWh x 2 ลูก' },
        { name: 'Solar Panel', detail: 'Longi 615W x 14 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 23, category: 'residential', date: '28-07-2025',
      title: 'Micro Inverter + AC Couple Battery', location: 'กรุงเทพมหานคร',
      description: 'ระบบ Micro Inverter 6kW พร้อม Battery AC Couple 14kWh ลดค่าไฟได้ 3,500-4,000 บาท/เดือน',
      systemSize: '7.38', annualEnergy: '11,070', costSaving: '3,500 - 4,000', payback: '4-5',
      images: ['/projects/28-07-2025/1.webp', '/projects/28-07-2025/2.webp', '/projects/28-07-2025/3.webp', '/projects/28-07-2025/4.webp', '/projects/28-07-2025/5.webp'],
      equipment: [
        { name: 'Micro Inverter', detail: 'Atmoce MI-500W x 12 ตัว' },
        { name: 'M-Combiner', detail: 'MC100-T' },
        { name: 'Battery', detail: 'Atmoce MS-7K-U 7kWh x 2 ลูก' },
        { name: 'Solar Panel', detail: 'Longi 615W x 12 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Micro Inverter 25 ปี', 'แบตเตอรี่ 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 24, category: 'residential', date: '1-08-2025',
      title: 'Hybrid 6kW Solis', location: 'นครพนม',
      description: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 15kWh และระบบ Full Backup',
      systemSize: '6.5', annualEnergy: '9,750', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/1-08-2025/1.webp', '/projects/1-08-2025/2.webp', '/projects/1-08-2025/3.webp', '/projects/1-08-2025/4.webp', '/projects/1-08-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 10 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 25, category: 'residential', date: '6-08-2025',
      title: 'Hybrid 8kW + Battery 30kWh', location: 'ราชบุรี',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 30kWh และระบบ Full Backup ลดค่าไฟได้ 4,500-5,500 บาท/เดือน',
      systemSize: '8.61', annualEnergy: '12,915', costSaving: '4,500 - 5,500', payback: '5-6',
      images: ['/projects/6-08-2025/1.webp', '/projects/6-08-2025/2.webp', '/projects/6-08-2025/3.webp', '/projects/6-08-2025/4.webp', '/projects/6-08-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh x 2 ลูก' },
        { name: 'Solar Panel', detail: 'Longi 615W x 14 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 26, category: 'residential', date: '13-08-2025',
      title: 'Hybrid 8kW + Battery 16kWh', location: 'ปทุมธานี',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 16kWh และระบบ Full Backup ลดค่าไฟได้ 4,500-5,500 บาท/เดือน',
      systemSize: '8.61', annualEnergy: '12,915', costSaving: '4,500 - 5,500', payback: '4-5',
      images: ['/projects/13-08-2025/1.webp', '/projects/13-08-2025/2.webp', '/projects/13-08-2025/3.webp', '/projects/13-08-2025/4.webp', '/projects/13-08-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 16kWh' },
        { name: 'Solar Panel', detail: 'Longi 615W x 14 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 27, category: 'residential', date: '22-08-2025',
      title: 'Hybrid 6kW + Battery 45kWh', location: 'ตรัง',
      description: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 45kWh และระบบ Full Backup ลดค่าไฟได้ 9,000-10,500 บาท/เดือน',
      systemSize: '18.4', annualEnergy: '27,600', costSaving: '9,000 - 10,500', payback: '4-5',
      images: ['/projects/22-08-2025/1.webp', '/projects/22-08-2025/2.webp', '/projects/22-08-2025/3.webp', '/projects/22-08-2025/4.webp', '/projects/22-08-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh x 3 ลูก' },
        { name: 'Solar Panel', detail: 'Longi 615W x 30 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 28, category: 'residential', date: '27-08-2025',
      title: 'Micro Inverter 5kW', location: 'กรุงเทพมหานคร',
      description: 'ระบบ Micro Inverter 5kW เปลี่ยนหลังคาให้เป็นแหล่งพลังงานสะอาด ลดค่าไฟได้ 3,000-3,500 บาท/เดือน',
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/27-08-2025/1.webp', '/projects/27-08-2025/2.webp', '/projects/27-08-2025/3.webp', '/projects/27-08-2025/4.webp', '/projects/27-08-2025/5.webp'],
      equipment: [
        { name: 'Micro Inverter', detail: 'Atmoce MI-500' },
        { name: 'M-Combiner', detail: 'MC100L' },
        { name: 'Solar Panel', detail: 'Longi 615W x 10 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Micro Inverter 25 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 29, category: 'residential', date: '9-09-2025',
      title: 'Smart Solution Sigenergy + EV Charger', location: 'นนทบุรี',
      description: 'Smart Solution ครบวงจรจาก Sigenergy พร้อม DC EV Charger 25kW รองรับ V2H สลับไฟ 0ms',
      systemSize: '29.9', annualEnergy: '44,850', costSaving: '10,000 - 15,000', payback: '4-5',
      images: ['/projects/9-09-2025/1.webp', '/projects/9-09-2025/2.webp', '/projects/9-09-2025/3.webp', '/projects/9-09-2025/4.webp', '/projects/9-09-2025/5.webp'],
      equipment: [
        { name: 'Controller', detail: 'Sigen EC 25kW' },
        { name: 'EV Charger', detail: 'Sigen DC EV Charger 25kW (V2H)' },
        { name: 'Battery', detail: 'Sigen Battery 36kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 46 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Controller 10 ปี', 'แบตเตอรี่ 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 30, category: 'residential', date: '26-09-2025',
      title: 'Hybrid 6kW + Battery 15kWh', location: 'นครปฐม',
      description: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 15kWh และระบบ Full Backup ลดค่าไฟได้ 3,000-3,500 บาท/เดือน',
      systemSize: '6.5', annualEnergy: '9,750', costSaving: '3,000 - 3,500', payback: '4-5',
      images: ['/projects/26-09-2025/1.webp', '/projects/26-09-2025/2.webp', '/projects/26-09-2025/3.webp', '/projects/26-09-2025/4.webp', '/projects/26-09-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 10 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 31, category: 'residential', date: '29-09-2025',
      title: 'Hybrid 8kW + Battery 15kWh', location: 'นครราชสีมา',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 15kWh และระบบ Full Backup ลดค่าไฟได้ 4,000-5,000 บาท/เดือน',
      systemSize: '7.5', annualEnergy: '11,250', costSaving: '4,000 - 5,000', payback: '4-5',
      images: ['/projects/29-09-2025/1.webp', '/projects/29-09-2025/2.webp', '/projects/29-09-2025/3.webp', '/projects/29-09-2025/4.webp', '/projects/29-09-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 12 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 32, category: 'residential', date: '10-10-2025',
      title: 'Hybrid 8kW + Battery 32kWh', location: 'กรุงเทพมหานคร',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 32kWh และระบบ Full Backup ลดค่าไฟได้ 4,000-5,000 บาท/เดือน',
      systemSize: '9.1', annualEnergy: '13,650', costSaving: '4,000 - 5,000', payback: '4-5',
      images: ['/projects/10-10-2025/1.webp', '/projects/10-10-2025/2.webp', '/projects/10-10-2025/3.webp', '/projects/10-10-2025/4.webp', '/projects/10-10-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 16kWh x 2 ลูก' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 14 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 33, category: 'residential', date: '15-10-2025',
      title: 'Hybrid 8kW + Battery 30kWh', location: 'กรุงเทพมหานคร',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 30kWh และระบบ Full Backup ลดค่าไฟได้ 4,500-5,500 บาท/เดือน',
      systemSize: '13', annualEnergy: '19,500', costSaving: '4,500 - 5,500', payback: '4-5',
      images: ['/projects/15-10-2025/1.webp', '/projects/15-10-2025/2.webp', '/projects/15-10-2025/3.webp', '/projects/15-10-2025/4.webp', '/projects/15-10-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 15kWh x 2 ลูก' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 20 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 34, category: 'residential', date: '20-10-2025',
      title: 'Hybrid 6kW + Battery 16kWh', location: 'กรุงเทพมหานคร',
      description: 'ระบบ Hybrid 6kW พร้อมแบตเตอรี่ 16kWh และระบบ Full Backup ลดค่าไฟได้ 3,500-4,000 บาท/เดือน',
      systemSize: '7.8', annualEnergy: '11,700', costSaving: '3,500 - 4,000', payback: '4-5',
      images: ['/projects/20-10-2025/1.webp', '/projects/20-10-2025/2.webp', '/projects/20-10-2025/3.webp', '/projects/20-10-2025/4.webp', '/projects/20-10-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 16kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 12 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 35, category: 'residential', date: '27-10-2025',
      title: 'Hybrid 8kW + Battery 15kWh', location: 'ชลบุรี',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 15kWh และระบบ Full Backup ลดค่าไฟได้ 4,500-5,500 บาท/เดือน',
      systemSize: '9.1', annualEnergy: '13,650', costSaving: '4,500 - 5,500', payback: '4-5',
      images: ['/projects/27-10-2025/1.webp', '/projects/27-10-2025/2.webp', '/projects/27-10-2025/3.webp', '/projects/27-10-2025/4.webp', '/projects/27-10-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 5kWh x 3 ลูก' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 14 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 36, category: 'residential', date: '3-11-2025',
      title: 'Hybrid 8kW + Battery 20kWh + Optimizer', location: 'นครราชสีมา',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ BYD 20kWh และ Optimizer สำหรับบ้านสวน',
      systemSize: '8.61', annualEnergy: '12,915', costSaving: '4,000 - 5,000', payback: '4-5',
      images: ['/projects/3-11-2025/1.webp', '/projects/3-11-2025/2.webp', '/projects/3-11-2025/3.webp', '/projects/3-11-2025/4.webp', '/projects/3-11-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'BYD 5kWh x 4 ลูก' },
        { name: 'Optimizer', detail: 'Solar Optimizer 1200-1500V x 7 ตัว' },
        { name: 'Solar Panel', detail: 'Longi 615W x 14 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'Optimizer 25 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 37, category: 'hotel', date: '10-11-2025',
      title: 'Hybrid 50kW 3 Phase โรงแรม', location: 'สมุทรปราการ',
      description: 'ระบบ Hybrid 50kW 3 Phase สำหรับโรงแรมทับทิมสยาม พร้อมแบตเตอรี่ 52.2kWh และระบบ Backup ชั้น 1',
      systemSize: '42.9', annualEnergy: '64,350', costSaving: '20,000 - 25,000', payback: '4-5',
      images: ['/projects/10-11-2025/1.webp', '/projects/10-11-2025/2.webp', '/projects/10-11-2025/3.webp', '/projects/10-11-2025/4.webp', '/projects/10-11-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis High Volt 50kW 3 Phase' },
        { name: 'Battery', detail: 'LVTOPSUN High Volt 5kWh x 10 ลูก' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 66 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 7 ปี', 'Mounting 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 38, category: 'international', date: '24-11-2025',
      title: 'Micro Inverter 39kW 7-Eleven Laos', location: 'ประเทศลาว',
      description: 'ระบบ Micro Inverter 39kW สำหรับ 7-Eleven ที่ประเทศลาว ตรวจสอบการทำงานรายแผงได้',
      systemSize: '39', annualEnergy: '58,500', costSaving: '15,000 - 20,000', payback: '4-5',
      images: ['/projects/24-11-2025/1.webp', '/projects/24-11-2025/2.webp', '/projects/24-11-2025/3.webp', '/projects/24-11-2025/4.webp', '/projects/24-11-2025/5.webp'],
      equipment: [
        { name: 'Micro Inverter', detail: 'Atmoce MI-500 x 60 ตัว' },
        { name: 'M-Combiner', detail: 'MC100-T' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 60 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Micro Inverter 25 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 39, category: 'residential', date: '27-11-2025',
      title: 'Hybrid 8kW + Battery 32kWh', location: 'อุดรธานี',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 32kWh และระบบ Backup ทั้งหลัง ลดค่าไฟได้ 4,000-5,000 บาท/เดือน',
      systemSize: '10.4', annualEnergy: '15,600', costSaving: '4,000 - 5,000', payback: '5-6',
      images: ['/projects/27-11-2025/1.webp', '/projects/27-11-2025/2.webp', '/projects/27-11-2025/3.webp', '/projects/27-11-2025/4.webp', '/projects/27-11-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVTOPSUN 16kWh x 2 ลูก' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 16 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 40, category: 'residential', date: '12-12-2025',
      title: 'Hybrid 8kW + Battery 16kWh', location: 'นนทบุรี',
      description: 'ระบบ Hybrid 8kW พร้อมแบตเตอรี่ 16kWh และระบบ Full Backup ลดค่าไฟได้ 3,800-4,200 บาท/เดือน',
      systemSize: '7.8', annualEnergy: '11,700', costSaving: '3,800 - 4,200', payback: '4-5',
      images: ['/projects/12-12-2025/1.webp', '/projects/12-12-2025/2.webp', '/projects/12-12-2025/3.webp', '/projects/12-12-2025/4.webp', '/projects/12-12-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 16kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 12 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 41, category: 'residential', date: '17-12-2025',
      title: 'Sigenergy 5kW + Battery 18kWh', location: 'ปทุมธานี',
      description: 'ระบบ Sigenergy 5kW พร้อมแบตเตอรี่ 18kWh ระบบ Full Backup สลับไฟ 0ms',
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,200 - 3,800', payback: '4-5',
      images: ['/projects/17-12-2025/1.webp', '/projects/17-12-2025/2.webp', '/projects/17-12-2025/3.webp', '/projects/17-12-2025/4.webp', '/projects/17-12-2025/5.webp'],
      equipment: [
        { name: 'Inverter', detail: 'Sigenstor 5kW 1 Phase' },
        { name: 'Gateway', detail: 'Sigen Energy Gateway 1 Phase' },
        { name: 'Battery', detail: 'Sigenstor Battery 9kWh x 2 ลูก' },
        { name: 'Solar Panel', detail: 'Longi 615W x 10 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Gateway 2 ปี', 'Inverter 10 ปี', 'แบตเตอรี่ 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 42, category: 'industrial', date: '24-12-2025',
      title: 'SIGENERGY 25kW 3 Phase + EV Charger', location: 'ชลบุรี',
      description: 'ระบบ Hybrid SIGENERGY 25kW 3 Phase พร้อม EV Charger DC 25kW และ AC 11kW ลดค่าไฟได้ 6,000-10,000 บาท/เดือน',
      systemSize: '14.3', annualEnergy: '21,450', costSaving: '6,000 - 10,000', payback: '4-5',
      images: ['/projects/24-12-2025/1.webp', '/projects/24-12-2025/2.webp', '/projects/24-12-2025/3.webp', '/projects/24-12-2025/4.webp', '/projects/24-12-2025/5.webp'],
      equipment: [
        { name: 'Controller', detail: 'SIGEN 25kW 3 Phase' },
        { name: 'Gateway', detail: 'C60-2' },
        { name: 'EV DC Charger', detail: '25kW 10m Cable' },
        { name: 'EV AC Charger', detail: '11kW 3 Phase' },
        { name: 'Battery', detail: 'SIGEN 9kWh x 2 ลูก' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 22 แผง' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Controller 10 ปี', 'แบตเตอรี่ 10 ปี', 'Gateway 2 ปี', 'EV Charger 2 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 43, category: 'residential', date: '30-12-2025',
      title: 'SIGENERGY 10kW + EV Charger', location: 'นครราชสีมา',
      description: 'ระบบ Hybrid SIGENERGY 10kW พร้อม EV DC Charger 25kW รองรับทั้งการใช้ไฟในบ้านและชาร์จรถยนต์ไฟฟ้า',
      systemSize: '10', annualEnergy: '15,000', costSaving: '4,000 - 6,000', payback: '5-6',
      images: ['/projects/30-12-2025/1.webp', '/projects/30-12-2025/2.webp', '/projects/30-12-2025/3.webp', '/projects/30-12-2025/4.webp', '/projects/30-12-2025/5.webp'],
      equipment: [
        { name: 'Controller', detail: 'SIGEN 10kW Single Phase' },
        { name: 'Gateway', detail: 'Home Single Phase 12k sp' },
        { name: 'Battery', detail: 'SIGENERGY 9kWh x 2 ลูก' },
        { name: 'EV DC Charger', detail: '25kW 10m Cable CCS2' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Controller 10 ปี', 'แบตเตอรี่ 10 ปี', 'Gateway 2 ปี', 'EV Charger 2 ปี']
    },
  ];

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

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

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
    <section id="projects" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white mobile-full-width bg-section-mobile">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 mobile-container-fix">
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

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          <FadeUp delay={0.1} className="lg:col-span-3 order-2 lg:order-1">
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-kb-orange to-orange-500 px-4 lg:px-6 py-3 lg:py-4">
                <h3 className="text-white font-bold text-base lg:text-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
                  พื้นที่ติดตั้งทั่วประเทศ
                </h3>
                <p className="text-white/80 text-xs lg:text-sm">คลิกที่จังหวัดเพื่อดูโปรเจกต์</p>
              </div>
              <ThailandMap projects={projects} onProvinceClick={handleLocationClick} />
            </div>
          </FadeUp>

          <div className="lg:col-span-2 space-y-3 lg:space-y-4 order-1 lg:order-2">
            <FadeUp delay={0.15}>
              <div className="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2 mb-3 lg:mb-4">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveCategory(cat.id); setShowAllProjects(false); }}
                      className={`flex items-center gap-1 lg:gap-1.5 px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-medium transition-all ${
                        activeCategory === cat.id
                          ? 'bg-kb-orange text-white shadow-md'
                          : 'bg-white text-kb-gray hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
                      <span className="whitespace-nowrap">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </FadeUp>

            <div className="grid gap-3 lg:gap-4">
              <AnimatePresence mode="popLayout">
                {displayedProjects.map((project, idx) => {
                  const CategoryIcon = getCategoryIcon(project.category);
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      onClick={() => openProject(project)}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex-shrink-0 relative overflow-hidden">
                          <img
                            src={process.env.PUBLIC_URL + project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        
                        <div className="flex-1 p-2 sm:p-2.5 lg:p-3 flex flex-col justify-between min-w-0">
                          <div>
                            <div className="flex items-center gap-1 lg:gap-1.5 text-[9px] sm:text-[10px] lg:text-xs text-kb-gray mb-1">
                              <CategoryIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-kb-orange flex-shrink-0" />
                              <span className="truncate">{getCategoryName(project.category)}</span>
                              <span>•</span>
                              <MapPin className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 flex-shrink-0" />
                              <span className="truncate">{project.location}</span>
                            </div>
                            <h4 className="font-bold text-kb-dark text-xs sm:text-sm line-clamp-2 group-hover:text-kb-orange transition-colors leading-tight">
                              {project.title}
                            </h4>
                          </div>
                          
                          <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 mt-1.5 lg:mt-2 flex-wrap">
                            <span className="bg-kb-orange text-white text-[8px] sm:text-[9px] lg:text-[10px] px-1 sm:px-1.5 py-0.5 rounded font-bold whitespace-nowrap">
                              {project.systemSize} kWp
                            </span>
                            <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-kb-gray whitespace-nowrap">
                              {project.annualEnergy} kWh/ปี
                            </span>
                            <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-green-600 font-medium whitespace-nowrap">
                              ฿ {project.costSaving.split(' - ')[0]}/เดือน
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center pr-1 sm:pr-2 lg:pr-4">
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-300 group-hover:text-kb-orange group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {filteredProjects.length > 6 && (
              <FadeUp delay={0.3}>
                <motion.button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 lg:py-4 bg-gradient-to-r from-kb-orange to-orange-500 text-white rounded-xl lg:rounded-2xl font-semibold shadow-lg shadow-kb-orange/30 hover:shadow-xl hover:shadow-kb-orange/40 transition-all flex items-center justify-center gap-2 text-sm lg:text-base"
                >
                  {showAllProjects ? (
                    <>แสดงน้อยลง</>
                  ) : (
                    <>
                      ดูผลงานทั้งหมด ({filteredProjects.length} โปรเจกต์)
                      <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5" />
                    </>
                  )}
                </motion.button>
              </FadeUp>
            )}
          </div>
        </div>

        {/* Province Modal */}
        <AnimatePresence>
          {selectedProvince && provinceProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeProvinceModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
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
                        <h3 className="text-white font-bold text-xl">{selectedProvince.name}</h3>
                        <p className="text-white/80 text-sm">{provinceProjects.length} โปรเจกต์ในพื้นที่นี้</p>
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
                                  src={process.env.PUBLIC_URL + project.images[0]}
                                  alt={project.title}
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
                                  {project.title}
                                </h4>

                                {/* Stats */}
                                <div className="flex flex-wrap items-center gap-1.5">
                                  <span className="bg-kb-orange text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                                    {project.systemSize} kWp
                                  </span>
                                  <span className="text-[10px] text-green-600 font-medium">
                                    ฿{project.costSaving.split(' - ')[0]}/เดือน
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
                                    src={process.env.PUBLIC_URL + project.images[0]}
                                    alt={project.title}
                                    className="w-14 h-14 rounded-lg object-cover"
                                  />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1 mb-0.5">
                                      <CategoryIcon className="w-3 h-3 text-kb-orange" />
                                      <span className="text-[10px] text-kb-gray">{getCategoryName(project.category)}</span>
                                    </div>
                                    <p className="font-bold text-sm text-kb-dark truncate">{project.title}</p>
                                    <p className="text-xs text-green-600 font-medium">฿{project.costSaving.split(' - ')[0]}/เดือน</p>
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
                        <p>ไม่พบข้อมูลรูปร่างจังหวัด</p>
                      </div>
                    )}
                    
                    {/* Legend */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg px-3 py-2 shadow-md">
                      <p className="text-xs font-bold text-kb-dark mb-1">คำแนะนำ</p>
                      <p className="text-[10px] text-kb-gray">คลิกที่จุดเพื่อดูโปรเจกต์</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-kb-gray">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>คลิกเพื่อดูรายละเอียดโปรเจกต์</span>
                    </div>
                    <button
                      onClick={closeProvinceModal}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-kb-dark rounded-xl text-sm font-medium transition-colors"
                    >
                      ปิด
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeProject}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] mobile-project-modal overflow-hidden flex flex-col lg:flex-row relative"
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
                      src={process.env.PUBLIC_URL + selectedProject.images[currentImage]}
                      alt={selectedProject.title}
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
                          <img src={process.env.PUBLIC_URL + img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col max-h-[90vh] lg:max-h-none overflow-y-visible">
                  <div className="flex items-start justify-between p-6 pb-0 flex-shrink-0 mobile-project-header">
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
                    <h3 className="text-2xl lg:text-3xl font-bold text-kb-dark mb-3">{selectedProject.title}</h3>
                    <p className="text-kb-gray leading-relaxed mb-6">{selectedProject.description}</p>

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
                        <p className="text-2xl font-bold text-kb-dark">{selectedProject.costSaving.split(' - ')[0]} <span className="text-sm font-normal text-kb-gray">บาท/เดือน</span></p>
                      </div>
                      <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                        <div className="flex items-center gap-2 text-blue-600 mb-1">
                          <span className="text-xs font-semibold uppercase tracking-wide">PAYBACK</span>
                        </div>
                        <p className="text-2xl font-bold text-kb-dark">{selectedProject.payback} <span className="text-sm font-normal text-kb-gray">ปี</span></p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-kb-dark mb-3">อุปกรณ์ที่ติดตั้ง</h4>
                      <div className="space-y-2">
                        {selectedProject.equipment.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                            <span className="text-kb-orange font-semibold text-sm min-w-[80px]">{item.name}</span>
                            <span className="text-kb-gray text-sm">{item.detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pb-4">
                      <h4 className="font-bold text-kb-dark mb-3">การรับประกัน</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.warranty.map((item, idx) => (
                          <span key={idx} className="bg-green-100 text-green-700 text-xs px-3 py-1.5 rounded-full font-medium">
                            {item}
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
