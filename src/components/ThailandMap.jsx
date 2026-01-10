import { useState, useEffect, useRef, useCallback } from 'react';

// Province ID mapping (Thai name to SVG ID)
const provinceIdMap = {
  'ปทุมธานี': 'TH13',
  'นนทบุรี': 'TH12', 
  'อุดรธานี': 'TH41',
  'สมุทรปราการ': 'TH11',
  'นครราชสีมา': 'TH30',
  'ชลบุรี': 'TH20',
  'กรุงเทพมหานคร': 'TH10',
  'นครปฐม': 'TH73',
};

// SVG ID to Thai name mapping
const svgIdToThaiMap = {
  'TH13': 'ปทุมธานี',
  'TH12': 'นนทบุรี',
  'TH41': 'อุดรธานี',
  'TH11': 'สมุทรปราการ',
  'TH30': 'นครราชสีมา',
  'TH20': 'ชลบุรี',
  'TH10': 'กรุงเทพมหานคร',
  'TH73': 'นครปฐม',
};

// English to Thai province names
const englishToThaiMap = {
  'Surin': 'สุรินทร์',
  'Si Sa Ket': 'ศรีสะเกษ',
  'Ubon Ratchathani': 'อุบลราชธานี',
  'Sa Kaeo': 'สระแก้ว',
  'Buri Ram': 'บุรีรัมย์',
  'Trat': 'ตราด',
  'Chanthaburi': 'จันทบุรี',
  'Satun': 'สตูล',
  'Songkhla': 'สงขลา',
  'Yala': 'ยะลา',
  'Narathiwat': 'นราธิวาส',
  'Chiang Rai': 'เชียงราย',
  'Chiang Mai': 'เชียงใหม่',
  'Mae Hong Son': 'แม่ฮ่องสอน',
  'Tak': 'ตาก',
  'Kanchanaburi': 'กาญจนบุรี',
  'Prachuap Khiri Khan': 'ประจวบคีรีขันธ์',
  'Phetchaburi': 'เพชรบุรี',
  'Ratchaburi': 'ราชบุรี',
  'Chumphon': 'ชุมพร',
  'Ranong': 'ระนอง',
  'Phayao': 'พะเยา',
  'Nan': 'น่าน',
  'Uttaradit': 'อุตรดิตถ์',
  'Phitsanulok': 'พิษณุโลก',
  'Loei': 'เลย',
  'Bueng Kan': 'บึงกาฬ',
  'Nong Khai': 'หนองคาย',
  'Nakhon Phanom': 'นครพนม',
  'Mukdahan': 'มุกดาหาร',
  'Amnat Charoen': 'อำนาจเจริญ',
  'Phangnga': 'พังงา',
  'Krabi': 'กระบี่',
  'Trang': 'ตรัง',
  'Pattani': 'ปัตตานี',
  'Phatthalung': 'พัทลุง',
  'Nakhon Si Thammarat': 'นครศรีธรรมราช',
  'Surat Thani': 'สุราษฎร์ธานี',
  'Samut Songkhram': 'สมุทรสงคราม',
  'Samut Sakhon': 'สมุทรสาคร',
  'Bangkok Metropolis': 'กรุงเทพมหานคร',
  'Samut Prakan': 'สมุทรปราการ',
  'Chachoengsao': 'ฉะเชิงเทรา',
  'Phatthaya': 'พัทยา',
  'Rayong': 'ระยอง',
  'Phuket': 'ภูเก็ต',
  'Khon Kaen': 'ขอนแก่น',
  'Sakon Nakhon': 'สกลนคร',
  'Suphan Buri': 'สุพรรณบุรี',
  'Sing Buri': 'สิงห์บุรี',
  'Chai Nat': 'ชัยนาท',
  'Nakhon Ratchasima': 'นครราชสีมา',
  'Nakhon Nayok': 'นครนายก',
  'Pathum Thani': 'ปทุมธานี',
  'Lop Buri': 'ลพบุรี',
  'Udon Thani': 'อุดรธานี',
  'Phra Nakhon Si Ayutthaya': 'พระนครศรีอยุธยา',
  'Nonthaburi': 'นนทบุรี',
  'Nakhon Pathom': 'นครปฐม',
  'Kamphaeng Phet': 'กำแพงเพชร',
  'Yasothon': 'ยโสธร',
  'Chon Buri': 'ชลบุรี',
  'Lamphun': 'ลำพูน',
  'Lampang': 'ลำปาง',
  'Phrae': 'แพร่',
  'Sukhothai': 'สุโขทัย',
  'Phichit': 'พิจิตร',
  'Nakhon Sawan': 'นครสวรรค์',
  'Uthai Thani': 'อุทัยธานี',
  'Ang Thong': 'อ่างทอง',
  'Roi Et': 'ร้อยเอ็ด',
  'Kalasin': 'กาฬสินธุ์',
  'Maha Sarakham': 'มหาสารคาม',
  'Chaiyaphum': 'ชัยภูมิ',
  'Nong Bua Lam Phu': 'หนองบัวลำภู',
  'Prachin Buri': 'ปราจีนบุรี',
  'Phetchabun': 'เพชรบูรณ์',
  'Saraburi': 'สระบุรี',
};

const ThailandMap = ({ projects, onProvinceClick }) => {
  const [hoveredProvince, setHoveredProvince] = useState(null);
  const [svgContent, setSvgContent] = useState(null);
  const containerRef = useRef(null);
  const svgContainerRef = useRef(null);

  // Get provinces that have projects
  const provincesWithProjects = [...new Set(projects.map(p => p.location))];
  const provinceIdsWithProjects = provincesWithProjects
    .map(name => provinceIdMap[name])
    .filter(Boolean);

  // Get project count for a province
  const getProjectCount = useCallback((thaiName) => {
    return projects.filter(p => p.location === thaiName).length;
  }, [projects]);

  // Get Thai name from path
  const getThaiName = (path) => {
    const id = path.getAttribute('id');
    const englishName = path.getAttribute('name');
    
    if (svgIdToThaiMap[id]) return svgIdToThaiMap[id];
    if (englishToThaiMap[englishName]) return englishToThaiMap[englishName];
    return englishName;
  };

  // Load SVG content
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/thailand-map.svg')
      .then(response => response.text())
      .then(text => {
        setSvgContent(text);
      })
      .catch(err => console.error('Failed to load SVG:', err));
  }, []);

  // Setup event listeners on SVG paths
  useEffect(() => {
    if (!svgContent || !svgContainerRef.current) return;

    const container = svgContainerRef.current;
    const paths = container.querySelectorAll('path[id^="TH"]');
    const handlers = [];

    paths.forEach(path => {
      const id = path.getAttribute('id');
      const thaiName = svgIdToThaiMap[id];
      const hasProjects = provinceIdsWithProjects.includes(id);

      // Set initial styles
      path.style.fill = hasProjects ? '#EA580C' : '#FB923C';
      path.style.stroke = '#FFFFFF';
      path.style.strokeWidth = '1';
      path.style.transition = 'fill 0.2s ease';
      if (hasProjects) path.style.cursor = 'pointer';

      const handleMouseEnter = () => {
        path.style.fill = hasProjects ? '#C2410C' : '#F97316';
        const displayName = getThaiName(path);
        setHoveredProvince({
          name: displayName,
          hasProjects,
          count: hasProjects ? getProjectCount(thaiName) : 0
        });
      };

      const handleMouseLeave = () => {
        path.style.fill = hasProjects ? '#EA580C' : '#FB923C';
        setHoveredProvince(null);
      };

      const handleClick = () => {
        if (hasProjects && thaiName && onProvinceClick) {
          // Get path data for province shape
          const pathD = path.getAttribute('d');
          const bbox = path.getBBox();
          // Create viewBox that fits the province
          const padding = 5;
          const viewBox = `${bbox.x - padding} ${bbox.y - padding} ${bbox.width + padding * 2} ${bbox.height + padding * 2}`;
          
          onProvinceClick(thaiName, { d: pathD, viewBox });
        }
      };

      path.addEventListener('mouseenter', handleMouseEnter);
      path.addEventListener('mouseleave', handleMouseLeave);
      path.addEventListener('click', handleClick);
      handlers.push({ path, handleMouseEnter, handleMouseLeave, handleClick });
    });

    return () => {
      handlers.forEach(({ path, handleMouseEnter, handleMouseLeave, handleClick }) => {
        path.removeEventListener('mouseenter', handleMouseEnter);
        path.removeEventListener('mouseleave', handleMouseLeave);
        path.removeEventListener('click', handleClick);
      });
    };
  }, [svgContent, provinceIdsWithProjects, onProvinceClick, getProjectCount]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-[450px] sm:min-h-[550px] lg:min-h-[950px] flex items-center justify-center p-2 lg:p-4"
    >
      {/* SVG Map */}
      <div 
        ref={svgContainerRef}
        className="w-full h-auto flex items-center justify-center [&>svg]:w-[110%] sm:[&>svg]:w-[115%] lg:[&>svg]:w-[120%] [&>svg]:h-auto [&>svg]:max-h-[400px] sm:[&>svg]:max-h-[500px] lg:[&>svg]:max-h-[1000px] [&>svg]:scale-105 lg:[&>svg]:scale-110"
        dangerouslySetInnerHTML={{ __html: svgContent || '' }}
      />

      {/* Loading */}
      {!svgContent && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 lg:h-12 lg:w-12 border-4 border-kb-orange border-t-transparent"></div>
        </div>
      )}

      {/* Hover Info - Hidden on mobile (touch devices) */}
      {hoveredProvince && (
        <div className="hidden lg:block absolute top-4 left-4 bg-white rounded-xl px-5 py-4 shadow-xl border-2 border-kb-orange">
          <p className="font-bold text-kb-dark text-lg">{hoveredProvince.name}</p>
          {hoveredProvince.hasProjects ? (
            <>
              <p className="text-kb-orange font-semibold">{hoveredProvince.count} โปรเจกต์</p>
              <p className="text-kb-gray text-sm mt-1">👆 คลิกเพื่อดูรายละเอียด</p>
            </>
          ) : (
            <p className="text-kb-gray text-sm">ยังไม่มีโปรเจกต์ในพื้นที่นี้</p>
          )}
        </div>
      )}

      {/* Legend - Compact on mobile */}
      <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4 bg-white/95 backdrop-blur-sm rounded-lg lg:rounded-xl p-2 lg:p-4 shadow-lg border border-orange-200">
        <p className="text-xs lg:text-sm font-bold text-kb-dark mb-1.5 lg:mb-3">พื้นที่ให้บริการ</p>
        <div className="flex items-center gap-1.5 lg:gap-2 text-[10px] lg:text-sm text-kb-gray mb-1 lg:mb-2">
          <span className="w-3 h-3 lg:w-4 lg:h-4 rounded bg-orange-700"></span>
          <span>มีโปรเจกต์</span>
        </div>
        <div className="flex items-center gap-1.5 lg:gap-2 text-[10px] lg:text-sm text-kb-gray">
          <span className="w-3 h-3 lg:w-4 lg:h-4 rounded bg-orange-400"></span>
          <span>พื้นที่อื่นๆ</span>
        </div>
      </div>

      {/* Stats - Compact on mobile */}
      <div className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-white/95 backdrop-blur-sm rounded-lg lg:rounded-xl p-2 lg:p-4 shadow-lg border border-orange-200">
        <div className="text-center">
          <p className="text-xl lg:text-3xl font-bold text-kb-orange">{projects.length}+</p>
          <p className="text-[10px] lg:text-sm text-kb-gray">โปรเจกต์</p>
        </div>
        <div className="border-t border-gray-200 mt-1.5 lg:mt-3 pt-1.5 lg:pt-3 text-center">
          <p className="text-lg lg:text-2xl font-bold text-kb-dark">{provincesWithProjects.length}</p>
          <p className="text-[10px] lg:text-sm text-kb-gray">จังหวัด</p>
        </div>
      </div>
    </div>
  );
};

export default ThailandMap;
