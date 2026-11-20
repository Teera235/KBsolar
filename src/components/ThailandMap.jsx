import { useState, useEffect, useRef, useCallback } from 'react';
import { CountUp } from './ui';

import { useLang } from '../i18n';

// Provinces we have worked in, by SVG id. Project `location` fields use the Thai name as the key.
const provinces = {
  TH13: { th: 'ปทุมธานี', en: 'Pathum Thani' },
  TH12: { th: 'นนทบุรี', en: 'Nonthaburi' },
  TH41: { th: 'อุดรธานี', en: 'Udon Thani' },
  TH11: { th: 'สมุทรปราการ', en: 'Samut Prakan' },
  TH30: { th: 'นครราชสีมา', en: 'Nakhon Ratchasima' },
  TH20: { th: 'ชลบุรี', en: 'Chonburi' },
  TH10: { th: 'กรุงเทพมหานคร', en: 'Bangkok' },
  TH73: { th: 'นครปฐม', en: 'Nakhon Pathom' },
  TH40: { th: 'ขอนแก่น', en: 'Khon Kaen' },
  TH16: { th: 'ลพบุรี', en: 'Lopburi' },
  TH44: { th: 'มหาสารคาม', en: 'Maha Sarakham' },
  TH17: { th: 'สิงห์บุรี', en: 'Sing Buri' },
  TH70: { th: 'ราชบุรี', en: 'Ratchaburi' },
  TH92: { th: 'ตรัง', en: 'Trang' },
  TH48: { th: 'นครพนม', en: 'Nakhon Phanom' },
  TH53: { th: 'อุตรดิตถ์', en: 'Uttaradit' },
};

// Thai name -> SVG id
const provinceIdMap = Object.fromEntries(Object.entries(provinces).map(([id, n]) => [n.th, id]));

// Thai location key -> { th, en } display name (also covers locations outside Thailand)
const placeNames = {
  ...Object.fromEntries(Object.values(provinces).map((n) => [n.th, n])),
  'ประเทศลาว': { th: 'ประเทศลาว', en: 'Laos' },
};
export const placeName = (location) => placeNames[location] || { th: location, en: location };

// SVG English names that read oddly on their own
const englishFixes = { 'Bangkok Metropolis': 'Bangkok', Phatthaya: 'Pattaya', Phangnga: 'Phang Nga' };

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
  const { t, lang } = useLang();
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

  // Display name for a map path, in the current language
  const getProvinceName = (id, englishName) => {
    if (provinces[id]) return t(provinces[id]);
    if (lang === 'en') return englishFixes[englishName] || englishName;
    return englishToThaiMap[englishName] || englishName;
  };

  // Load SVG content
  useEffect(() => {
    fetch('/thailand-map.svg')
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
      const thaiName = provinces[id]?.th;
      const hasProjects = provinceIdsWithProjects.includes(id);

      // Set initial styles: provinces with projects in brand orange, the rest a pale peach
      path.style.fill = hasProjects ? '#F97316' : '#FFEDD5';
      path.style.stroke = '#FFFFFF';
      path.style.strokeWidth = '1';
      path.style.transition = 'fill 0.2s ease';
      if (hasProjects) path.style.cursor = 'pointer';

      const handleMouseEnter = () => {
        path.style.fill = hasProjects ? '#EA580C' : '#FED7AA';
        setHoveredProvince({
          id,
          englishName: path.getAttribute('name'),
          hasProjects,
          count: hasProjects ? getProjectCount(thaiName) : 0
        });
      };

      const handleMouseLeave = () => {
        path.style.fill = hasProjects ? '#F97316' : '#FFEDD5';
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

  // Pulsing orange markers at the centre of each province with projects.
  // Drawn straight into the loaded SVG so they share its coordinates; clicks pass through to the path.
  const markerKey = provinceIdsWithProjects.join(',');
  useEffect(() => {
    const svg = svgContainerRef.current?.querySelector('svg');
    if (!svgContent || !svg) return;
    const NS = 'http://www.w3.org/2000/svg';
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const layer = document.createElementNS(NS, 'g');
    layer.setAttribute('pointer-events', 'none');
    const make = (tag, attrs) => {
      const el = document.createElementNS(NS, tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      return el;
    };
    markerKey.split(',').filter(Boolean).forEach((id) => {
      const path = svg.querySelector(`path[id="${id}"]`);
      if (!path) return;
      const b = path.getBBox();
      const cx = b.x + b.width / 2;
      const cy = b.y + b.height / 2;
      if (!reduce) {
        const ring = make('circle', { cx, cy, r: 6, fill: 'none', stroke: '#F97316', 'stroke-width': 2 });
        ring.appendChild(make('animate', { attributeName: 'r', from: 6, to: 18, dur: '2s', repeatCount: 'indefinite' }));
        ring.appendChild(make('animate', { attributeName: 'opacity', from: 0.8, to: 0, dur: '2s', repeatCount: 'indefinite' }));
        layer.appendChild(ring);
      }
      layer.appendChild(make('circle', { cx, cy, r: 6, fill: '#F97316', stroke: '#FFFFFF', 'stroke-width': 2 }));
    });
    svg.appendChild(layer);
    return () => layer.remove();
  }, [svgContent, markerKey]);

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
        <div className="card-kb hidden lg:block absolute top-4 left-4 px-5 py-4 pointer-events-none">
          <p className="font-bold text-kb-dark text-lg">{getProvinceName(hoveredProvince.id, hoveredProvince.englishName)}</p>
          {hoveredProvince.hasProjects ? (
            <>
              <p className="text-kb-orange font-semibold">{hoveredProvince.count} {t('โปรเจกต์', hoveredProvince.count === 1 ? 'project' : 'projects')}</p>
              <p className="text-kb-gray text-sm mt-1">{t('คลิกเพื่อดูรายละเอียด', 'Click for details')}</p>
            </>
          ) : (
            <p className="text-kb-gray text-sm">{t('ยังไม่มีโปรเจกต์ในพื้นที่นี้', 'No projects in this area yet')}</p>
          )}
        </div>
      )}

      {/* Legend - Compact on mobile */}
      <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4 bg-white/95 rounded-xl lg:rounded-[1.25rem] p-2 lg:p-4 shadow-lg ring-1 ring-black/5">
        <p className="text-xs lg:text-sm font-bold text-kb-dark mb-1.5 lg:mb-3">{t('พื้นที่ให้บริการ', 'Service area')}</p>
        <div className="flex items-center gap-1.5 lg:gap-2 text-[10px] lg:text-sm text-kb-gray mb-1 lg:mb-2">
          <span className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-kb-orange ring-2 ring-white shadow"></span>
          <span>{t('มีโปรเจกต์', 'Has projects')}</span>
        </div>
        <div className="flex items-center gap-1.5 lg:gap-2 text-[10px] lg:text-sm text-kb-gray">
          <span className="w-3 h-3 lg:w-4 lg:h-4 rounded bg-orange-100 border border-orange-200"></span>
          <span>{t('พื้นที่อื่นๆ', 'Other areas')}</span>
        </div>
      </div>

      {/* Stats - Compact on mobile */}
      <div className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-white/95 rounded-xl lg:rounded-[1.25rem] p-2 lg:p-4 shadow-lg ring-1 ring-black/5">
        <div className="text-center">
          <p className="text-xl lg:text-3xl font-bold"><CountUp value={`${projects.length}+`} className="text-kb-accent" /></p>
          <p className="text-[10px] lg:text-sm text-kb-gray">{t('โปรเจกต์', 'Projects')}</p>
        </div>
        <div className="border-t border-gray-200 mt-1.5 lg:mt-3 pt-1.5 lg:pt-3 text-center">
          <p className="text-lg lg:text-2xl font-bold"><CountUp value={provincesWithProjects.length} className="text-kb-accent" /></p>
          <p className="text-[10px] lg:text-sm text-kb-gray">{t('จังหวัด', 'Provinces')}</p>
        </div>
      </div>
    </div>
  );
};

export default ThailandMap;
