import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Zap, Clock, MapPin, Battery, Sun, Package, X, Building2, Home, Factory, Hotel, Eye, ChevronDown } from 'lucide-react';
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
  ];

  const projects = [
    {
      id: 1, category: 'residential', tags: ['Hybrid', 'Battery', 'Solis', 'BYD', 'AIKO'],
      title: 'บ้านอุ่นใจ - Hybrid Solar System', location: 'ปทุมธานี',
      description: 'ระบบโซลาร์เซลล์พร้อมแบตเตอรี่ ใช้ไฟได้ตลอด 24 ชม.',
      systemSize: '7.8', annualEnergy: '11,700', costSaving: '3,500 - 4,500', payback: '4-5',
      images: ['/projects/1/1.jpg', '/projects/1/2.jpg', '/projects/1/3.jpg', '/projects/1/4.jpg', '/projects/1/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'BYD Battery 16 kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 12 แผง (7.8 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 2, category: 'residential', tags: ['Hybrid', 'Battery', 'Solis', 'BYD', 'AIKO'],
      title: 'บ้านประหยัด - Hybrid On-Off Grid', location: 'นนทบุรี',
      description: 'ระบบพลังงานแสงอาทิตย์รุ่นใหม่ Hybrid On-Off Grid ที่ทั้งประหยัด ทั้งมั่นใจ',
      systemSize: '9.1', annualEnergy: '13,650', costSaving: '3,800 - 4,200', payback: '4-5',
      images: ['/projects/2/1.jpg', '/projects/2/2.jpg', '/projects/2/3.jpg', '/projects/2/4.jpg', '/projects/2/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'BYD Battery 5 kWh x 2 ลูก (10 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 14 แผง (9.1 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 3, category: 'residential', tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'Full Backup'],
      title: 'บ้านมีไฟตลอดเวลา - Hybrid + Backup', location: 'อุดรธานี',
      description: 'ระบบ Hybrid On-Off Grid พร้อมแบตเตอรี่ 32 kWh และระบบ Backup ทั้งหลัง',
      systemSize: '10.4', annualEnergy: '15,600', costSaving: '4,000 - 5,000', payback: '5-6',
      images: ['/projects/3/1.jpg', '/projects/3/2.jpg', '/projects/3/3.jpg', '/projects/3/4.jpg', '/projects/3/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'LVTOPSUN Battery 16 kWh x 2 ลูก (32 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 16 แผง (10.4 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 4, category: 'commercial', tags: ['Micro Inverter', 'On-Grid', 'Atmoce', 'TAIKO', 'ต่างประเทศ'],
      title: '7-Eleven Laos - Micro Inverter System', location: 'ประเทศลาว',
      description: 'งานติดตั้งระบบโซลาร์เซลล์ให้เซเว่นที่ประเทศลาว ด้วยเทคโนโลยี Micro Inverter',
      systemSize: '39', annualEnergy: '58,500', costSaving: '15,000 - 20,000', payback: '4-5',
      images: ['/projects/4/1.jpg', '/projects/4/2.jpg', '/projects/4/3.jpg', '/projects/4/4.jpg', '/projects/4/5.jpg'],
      equipment: [
        { name: 'Micro Inverter', detail: 'Atmoce MI-500 x 60 ตัว' },
        { name: 'M-Combiner', detail: 'MC100' },
        { name: 'Solar Panel', detail: 'TAIKO 650W x 60 แผง (39 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Micro Inverter 25 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 5, category: 'hotel', tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'High Volt', '3 Phase'],
      title: 'โรงแรมทับทิมสยามสุวรรณภูมิ', location: 'สมุทรปราการ',
      description: 'ระบบ Hybrid On-Off Grid Solis High Volt 50kW พร้อมแบตเตอรี่ 52.2 kWh',
      systemSize: '42.9', annualEnergy: '64,350', costSaving: '16,000 - 21,000', payback: '4-5',
      images: ['/projects/5/1.jpg', '/projects/5/2.jpg', '/projects/5/3.jpg', '/projects/5/4.jpg', '/projects/5/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis High Volt 50kW 3 phase' },
        { name: 'Battery', detail: 'LVTOPSUN Battery High Volt 5kWh x 10 ลูก (52.2 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 66 แผง (42.9 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'แบตเตอรี่ 7 ปี', 'Inverter 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 6, category: 'residential', tags: ['Hybrid', 'Battery', 'Solis', 'BYD', 'Longi', 'Optimizer'],
      title: 'บ้านสวนพลังงานสะอาด', location: 'นครราชสีมา',
      description: 'ระบบ Hybrid On-Off Grid พร้อม Optimizer สำหรับบ้านสวนที่ไม่มีไฟฟ้าเข้าถึง',
      systemSize: '8.61', annualEnergy: '12,915', costSaving: '3,200 - 4,300', payback: '4-5',
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
      id: 7, category: 'residential', tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'Full Backup'],
      title: 'บ้านมั่นคงพลังงาน - Full Backup', location: 'ชลบุรี',
      description: 'ระบบ Hybrid On-Off Grid Solis 8kW กับแบตเตอรี่ 15kWh พร้อมระบบ Full Backup',
      systemSize: '9.1', annualEnergy: '13,650', costSaving: '4,500 - 5,500', payback: '5-6',
      images: ['/projects/7/1.jpg', '/projects/7/2.jpg', '/projects/7/3.jpg', '/projects/7/4.jpg', '/projects/7/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 5 kWh x 3 ลูก (15 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 14 แผง (9.1 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 8, category: 'residential', tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'Full Backup'],
      title: 'บ้านพลังงานอัจฉริยะ', location: 'กรุงเทพมหานคร',
      description: 'ระบบ Hybrid On-Off Grid ช่วยให้คุณใช้พลังงานจากแสงอาทิตย์ พร้อม Full Backup',
      systemSize: '7.8', annualEnergy: '11,700', costSaving: '3,800 - 4,200', payback: '4-5',
      images: ['/projects/8/1.jpg', '/projects/8/2.jpg', '/projects/8/3.jpg', '/projects/8/4.jpg', '/projects/8/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 6kW 1 Phase' },
        { name: 'Battery', detail: 'LVtopsun 16 kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 12 แผง (7.8 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 9, category: 'residential', tags: ['Hybrid', 'Battery', 'Sigenergy', 'Longi', 'Full Backup', '0ms'],
      title: 'บ้านพลังงานอัจฉริยะ Sigenergy', location: 'นนทบุรี',
      description: 'ระบบ Hybrid On-Off Grid Sigenergy 5kW พร้อมแบตเตอรี่ 18 kWh ระบบ Full Backup สลับไฟ 0ms',
      systemSize: '6.15', annualEnergy: '9,225', costSaving: '3,200 - 3,800', payback: '4-5',
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
      id: 10, category: 'residential', tags: ['Hybrid', 'Battery', 'Sigenergy', 'AIKO', 'EV Charger', 'V2H', '0ms'],
      title: 'Smart Solution - Sigenergy + EV Charger', location: 'กรุงเทพมหานคร',
      description: 'Smart Solution ครบวงจรจาก Sigenergy พร้อม DC EV Charger 25kW รองรับ V2H',
      systemSize: '29.9', annualEnergy: '44,850', costSaving: '10,000 - 15,000', payback: '4-5',
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
      id: 11, category: 'residential', tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'Full Backup'],
      title: 'บ้านโรงไฟฟ้าส่วนตัว', location: 'นครปฐม',
      description: 'ระบบ Hybrid On-Off Grid Solis 6kW พร้อมแบตเตอรี่ 15 kWh ระบบ Full Backup',
      systemSize: '6.5', annualEnergy: '9,750', costSaving: '3,200 - 3,800', payback: '4-5',
      images: ['/projects/11/1.jpg', '/projects/11/2.jpg', '/projects/11/3.jpg', '/projects/11/4.jpg', '/projects/11/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 6kW 1 phase' },
        { name: 'Battery', detail: 'LVtopsun 15 kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 10 แผง (6.5 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 12, category: 'residential', tags: ['Hybrid', 'Battery', 'Solis', 'LVTOPSUN', 'AIKO', 'Full Backup'],
      title: 'บ้านหมดปัญหาค่าไฟพุ่ง', location: 'นครราชสีมา',
      description: 'ระบบ Hybrid On-Off Grid Solis 8kW พร้อมแบตเตอรี่ 15 kWh ระบบ Full Backup ครบวงจร',
      systemSize: '7.5', annualEnergy: '11,250', costSaving: '4,000 - 5,000', payback: '5-6',
      images: ['/projects/12/1.jpg', '/projects/12/2.jpg', '/projects/12/3.jpg', '/projects/12/4.jpg', '/projects/12/5.jpg'],
      equipment: [
        { name: 'Inverter', detail: 'Hybrid On-Off Grid Solis 8kW 1 phase' },
        { name: 'Battery', detail: 'LVtopsun 15 kWh' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 12 แผง (7.5 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Inverter 5 ปี', 'แบตเตอรี่ 7 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 13, category: 'industrial', tags: ['Hybrid', 'Battery', 'Sigenergy', 'AIKO', 'EV Charger', '3 Phase'],
      title: 'โรงงานพลังงานอัจฉริยะ - SIGEN ENERGY', location: 'ชลบุรี',
      description: 'ระบบ Hybrid SIGEN ENERGY Three Phase สำหรับโรงงาน พร้อม EV Charger DC 25kW',
      systemSize: '14.3', annualEnergy: '21,450', costSaving: '6,000 - 10,000', payback: '4-5',
      images: ['/projects/18/1.JPG', '/projects/18/2.JPG', '/projects/18/3.JPG', '/projects/18/4.JPG', '/projects/18/5.JPG'],
      equipment: [
        { name: 'Controller', detail: 'SIGEN 25kW Three Phase' },
        { name: 'Gateway', detail: 'C60-2' },
        { name: 'EV DC Charger', detail: '25kW 10m Cable' },
        { name: 'Battery', detail: 'SIGEN 9 kWh x 2 ลูก (18 kWh)' },
        { name: 'Solar Panel', detail: 'AIKO 650W x 22 แผง (14.3 kWp)' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Controller 10 ปี', 'แบตเตอรี่ 10 ปี', 'แผง 12-30 ปี']
    },
    {
      id: 14, category: 'residential', tags: ['Hybrid', 'Battery', 'Sigenergy', 'EV Charger', 'Full Backup'],
      title: 'บ้านศูนย์กลางพลังงาน - SIGENERGY + EV', location: 'นครราชสีมา',
      description: 'ระบบ Hybrid Solar จาก SIGENERGY รองรับทั้งการใช้ไฟภายในบ้านและชาร์จรถยนต์ไฟฟ้า',
      systemSize: '10', annualEnergy: '15,000', costSaving: '4,000 - 6,000', payback: '5-6',
      images: ['/projects/19/1.JPG', '/projects/19/2.JPG', '/projects/19/3.JPG', '/projects/19/4.JPG', '/projects/19/5.JPG'],
      equipment: [
        { name: 'Controller', detail: 'SIGEN 10kW Single Phase' },
        { name: 'Gateway', detail: 'Home Single Phase 12k sp' },
        { name: 'Battery', detail: 'SIGENERGY 9 kWh x 2 ลูก (18 kWh)' },
        { name: 'EV DC Charger', detail: '25kW 10m Cable CCS2' }
      ],
      warranty: ['งานติดตั้ง 3 ปี', 'Controller 10 ปี', 'แบตเตอรี่ 10 ปี', 'EV DC Charging 2 ปี']
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProvince, setSelectedProvince] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(p => p.category === activeCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  // Handle location click on map - show projects of that province
  const handleLocationClick = (locationName, provincePath) => {
    setSelectedProvince({ name: locationName, path: provincePath });
  };

  // Get projects for selected province
  const provinceProjects = selectedProvince 
    ? projects.filter(p => p.location === selectedProvince.name)
    : [];

  // Close province modal
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

        {/* Main Content - Map + Projects */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Left Side - Thailand Map - 3 columns */}
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

          {/* Right Side - Project Cards - 2 columns */}
          <div className="lg:col-span-2 space-y-3 lg:space-y-4 order-1 lg:order-2">
            {/* Category Filter - Compact */}
            <FadeUp delay={0.15}>
              <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-3 lg:mb-4">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveCategory(cat.id); setShowAllProjects(false); }}
                      className={`flex items-center gap-1 lg:gap-1.5 px-2.5 lg:px-3 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-all ${
                        activeCategory === cat.id
                          ? 'bg-kb-orange text-white shadow-md'
                          : 'bg-white text-kb-gray hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </FadeUp>

            {/* Project Cards - Compact Grid */}
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
                        {/* Thumbnail */}
                        <div className="w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0 relative overflow-hidden">
                          <img
                            src={process.env.PUBLIC_URL + project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 p-2.5 lg:p-3 flex flex-col justify-between min-w-0">
                          <div>
                            <div className="flex items-center gap-1 lg:gap-1.5 text-[10px] lg:text-xs text-kb-gray mb-1">
                              <CategoryIcon className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-kb-orange flex-shrink-0" />
                              <span className="truncate">{getCategoryName(project.category)}</span>
                              <span>•</span>
                              <MapPin className="w-2.5 h-2.5 lg:w-3 lg:h-3 flex-shrink-0" />
                              <span className="truncate">{project.location}</span>
                            </div>
                            {/* Title */}
                            <h4 className="font-bold text-kb-dark text-xs lg:text-sm line-clamp-2 group-hover:text-kb-orange transition-colors">
                              {project.title}
                            </h4>
                          </div>
                          
                          {/* Quick Stats */}
                          <div className="flex items-center gap-1.5 lg:gap-2 mt-1.5 lg:mt-2 flex-wrap">
                            <span className="bg-kb-orange text-white text-[9px] lg:text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap">
                              {project.systemSize} kWp
                            </span>
                            <span className="text-[9px] lg:text-[10px] text-kb-gray whitespace-nowrap">
                              {project.annualEnergy} kWh/ปี
                            </span>
                            <span className="text-[9px] lg:text-[10px] text-green-600 font-medium whitespace-nowrap">
                              ฿ {project.costSaving.split(' - ')[0]}/เดือน
                            </span>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex items-center pr-2 lg:pr-4">
                          <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-300 group-hover:text-kb-orange group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Show More Button */}
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
                className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* LEFT SIDE - Image Gallery */}
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

                {/* RIGHT SIDE - Details */}
                <div className="lg:w-1/2 flex flex-col max-h-[90vh] lg:max-h-none">
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

                  <div className="flex-1 overflow-y-auto p-6 pt-4">
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

        {/* Province Popup - แสดงรูปร่างจังหวัดบนแผนที่ */}
        <AnimatePresence>
          {selectedProvince && selectedProvince.path && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 lg:p-4"
              onClick={closeProvinceModal}
            >
              {/* Dark overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              />
              
              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] lg:max-h-[85vh] overflow-hidden flex flex-col lg:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button - Mobile */}
                <button
                  onClick={closeProvinceModal}
                  className="absolute top-3 right-3 z-10 w-8 h-8 lg:hidden bg-white/90 rounded-full shadow-lg flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-kb-dark" />
                </button>

                {/* Left Side - Project List */}
                <div className="w-full lg:w-[380px] bg-gradient-to-br from-kb-orange via-orange-500 to-orange-600 flex flex-col max-h-[50vh] lg:max-h-none">
                  {/* Header */}
                  <div className="p-3 lg:p-5 border-b border-white/10">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <button
                        onClick={closeProvinceModal}
                        className="hidden lg:flex w-9 h-9 bg-white/20 hover:bg-white/30 rounded-xl items-center justify-center transition-all"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-base lg:text-xl">{selectedProvince.name}</h3>
                        <p className="text-white/70 text-xs lg:text-sm">{provinceProjects.length} โปรเจกต์ในพื้นที่นี้</p>
                      </div>
                      {/* Province mini shape */}
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-xl p-1.5 lg:p-2">
                        <svg viewBox={selectedProvince.path.viewBox} className="w-full h-full">
                          <path d={selectedProvince.path.d} fill="white" fillOpacity="0.8" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Project List */}
                  <div className="flex-1 overflow-y-auto px-3 lg:px-4 py-2 lg:pb-4 space-y-2">
                    {provinceProjects.map((project, idx) => {
                      const CategoryIcon = getCategoryIcon(project.category);
                      return (
                        <motion.button
                          key={project.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          onClick={() => {
                            closeProvinceModal();
                            openProject(project);
                          }}
                          className="w-full flex items-start gap-2 lg:gap-3 p-2 lg:p-3 bg-white/10 hover:bg-white/20 rounded-xl lg:rounded-2xl transition-all group text-left backdrop-blur-sm"
                        >
                          {/* Number Badge */}
                          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-kb-dark text-white rounded-lg flex items-center justify-center font-bold text-xs lg:text-sm flex-shrink-0 shadow-lg">
                            {idx + 1}
                          </div>
                          
                          {/* Thumbnail */}
                          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg lg:rounded-xl overflow-hidden flex-shrink-0 shadow-lg ring-2 ring-white/20">
                            <img
                              src={process.env.PUBLIC_URL + project.images[0]}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          
                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 lg:gap-1.5 mb-0.5 lg:mb-1">
                              <CategoryIcon className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white/60" />
                              <span className="text-white/60 text-[10px] lg:text-xs">{getCategoryName(project.category)}</span>
                            </div>
                            <p className="text-white font-semibold text-xs lg:text-sm leading-tight group-hover:text-yellow-200 transition-colors line-clamp-2">
                              {project.title}
                            </p>
                            <div className="flex items-center gap-1.5 lg:gap-2 mt-1 lg:mt-1.5">
                              <span className="bg-white/20 text-white text-[10px] lg:text-xs px-1.5 lg:px-2 py-0.5 rounded-full">
                                {project.systemSize} kWp
                              </span>
                            </div>
                          </div>
                          
                          {/* Arrow */}
                          <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 mt-3 lg:mt-5" />
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Side - Province Map */}
                <div className="flex-1 bg-gradient-to-br from-orange-50 to-amber-50 p-4 lg:p-8 flex flex-col items-center justify-center relative min-h-[200px] lg:min-h-0">
                  {/* Close button - Desktop */}
                  <button
                    onClick={closeProvinceModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-xl shadow-lg hidden lg:flex items-center justify-center hover:bg-gray-50 transition-colors group"
                  >
                    <X className="w-5 h-5 text-kb-gray group-hover:text-kb-dark transition-colors" />
                  </button>

                  {/* Province Shape with Pins */}
                  <div className="relative w-full max-w-[200px] lg:max-w-md h-[180px] lg:h-[400px]">
                    <svg viewBox={selectedProvince.path.viewBox} className="w-full h-full drop-shadow-lg">
                      <defs>
                        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FED7AA" />
                          <stop offset="100%" stopColor="#FDBA74" />
                        </linearGradient>
                      </defs>
                      <path 
                        d={selectedProvince.path.d} 
                        fill="url(#mapGradient)" 
                        stroke="#FB923C"
                        strokeWidth="2"
                      />
                    </svg>
                    
                    {/* Project Pins on Province */}
                    {provinceProjects.map((project, idx) => {
                      // Grid-like positions for pins
                      const cols = 3;
                      const row = Math.floor(idx / cols);
                      const col = idx % cols;
                      const positions = {
                        top: `${32 + row * 18}%`,
                        left: `${28 + col * 22}%`
                      };
                      
                      return (
                        <motion.button
                          key={project.id}
                          initial={{ scale: 0, y: -10 }}
                          animate={{ scale: 1, y: 0 }}
                          transition={{ delay: 0.15 + idx * 0.06, type: "spring", stiffness: 400 }}
                          onClick={() => {
                            closeProvinceModal();
                            openProject(project);
                          }}
                          style={{ top: positions.top, left: positions.left }}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                        >
                          <div className="relative">
                            <div className="w-8 h-8 lg:w-11 lg:h-11 bg-kb-dark text-white rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-kb-orange transition-all cursor-pointer font-bold text-sm lg:text-lg ring-2 lg:ring-4 ring-white">
                              {idx + 1}
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Bottom info */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-3 lg:mt-6 text-center"
                  >
                    <p className="text-kb-gray text-xs lg:text-sm">คลิกที่จุดหรือรายการเพื่อดูรายละเอียด</p>
                  </motion.div>
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
