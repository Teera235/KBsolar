import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Battery, Grid, Zap, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blogContent = {
    'hybrid-solar-system': {
      title: 'Hybrid Solar System',
      subtitle: 'ระบบโซล่าเซลล์ผสม (โซลาร์ + แบต + การไฟฟ้า)',
      icon: Battery,
      color: 'from-orange-500 to-red-500',
      badge: 'Hybrid',
      image: '/Blog/hrbrid.png',
      sections: [
        {
          title: 'ภาพรวมระบบ (System Overview)',
          content: [
            'Hybrid Solar System เป็นระบบที่รวมคุณสมบัติของ On-Grid และ Off-Grid เข้าไว้ด้วยกัน โดยสามารถใช้พลังงานจากโซลาร์เซลล์ แบตเตอรี่ และโครงข่ายการไฟฟ้าร่วมกันได้อย่างยืดหยุ่น',
            'ระบบนี้ถูกออกแบบมาเพื่อเพิ่มความมั่นคงด้านพลังงาน และลดผลกระทบจากปัญหาไฟฟ้าดับ'
          ]
        },
        {
          title: 'ส่วนประกอบหลักของระบบ',
          isList: true,
          content: [
            'แผงโซลาร์เซลล์ (Solar Panels) - รับพลังงานจากแสงอาทิตย์',
            'อินเวอร์เตอร์แบบ Hybrid (Hybrid Inverter) - แปลงไฟ DC เป็น AC และจัดการพลังงาน',
            'แบตเตอรี่สำรองไฟ (Battery Storage) - เก็บพลังงานไว้ใช้ยามค่ำคืนหรือไฟดับ',
            'ระบบควบคุมอัจฉริยะ (Smart Controller) - บริหารจัดการพลังงานอัตโนมัติ',
            'มิเตอร์วัดพลังงาน (Energy Meter) - ติดตามการใช้และผลิตพลังงาน'
          ]
        },
        {
          title: 'การทำงานของระบบ',
          content: [
            '1. กลางวัน: แผงโซลาร์ผลิตไฟฟ้าใช้ในบ้าน ส่วนเกินชาร์จแบตเตอรี่ และขายคืนการไฟฟ้า',
            '2. กลางคืน: ใช้ไฟจากแบตเตอรี่ก่อน เมื่อแบตหมดจึงดึงไฟจากการไฟฟ้า',
            '3. ไฟดับ: ระบบสลับไปใช้แบตเตอรี่อัตโนมัติภายใน 10-20 มิลลิวินาที',
            '4. โหมดประหยัด: ระบบจัดการใช้พลังงานจากแหล่งที่ประหยัดที่สุดก่อนเสมอ'
          ]
        },
        {
          title: 'ข้อดีของระบบ Hybrid',
          isAdvantages: true,
          content: [
            'ประหยัดค่าไฟได้สูงสุด 80-90%',
            'มีไฟสำรองใช้ตลอดเวลา ไม่กลัวไฟดับ',
            'ขายไฟคืนการไฟฟ้าได้ (Net Metering)',
            'ระบบอัจฉริยะบริหารจัดการพลังงานอัตโนมัติ',
            'ลดการปล่อย CO2 ช่วยรักษาสิ่งแวดล้อม',
            'เพิ่มมูลค่าให้กับอสังหาริมทรัพย์',
            'คืนทุนเร็ว 4-6 ปี'
          ]
        },
        {
          title: 'ข้อควรพิจารณา',
          isWarnings: true,
          content: [
            'ต้นทุนเริ่มต้นสูงกว่าระบบ On-Grid ธรรมดา',
            'ต้องมีพื้นที่สำหรับติดตั้งแบตเตอรี่',
            'แบตเตอรี่มีอายุการใช้งาน 5-10 ปี ต้องเปลี่ยนใหม่',
            'ต้องบำรุงรักษาและตรวจสอบระบบเป็นประจำ'
          ]
        },
        {
          title: 'เหมาะสำหรับใคร?',
          content: [
            '✓ บ้านพักอาศัยที่ต้องการความมั่นคงด้านไฟฟ้า',
            '✓ พื้นที่ที่มีปัญหาไฟดับบ่อย',
            '✓ ธุรกิจที่ไม่สามารถหยุดการทำงานได้',
            '✓ โรงพยาบาล คลินิก ที่ต้องการไฟสำรอง',
            '✓ ผู้ที่ต้องการลดค่าไฟและมีไฟสำรองพร้อมกัน'
          ]
        },
        {
          title: 'ขนาดระบบที่แนะนำ',
          content: [
            'บ้านขนาดเล็ก (ค่าไฟ 2,000-3,000 บาท/เดือน): ระบบ 3-5 kW + แบต 10-15 kWh',
            'บ้านขนาดกลาง (ค่าไฟ 4,000-6,000 บาท/เดือน): ระบบ 5-8 kW + แบต 15-20 kWh',
            'บ้านขนาดใหญ่ (ค่าไฟ 7,000+ บาท/เดือน): ระบบ 8-15 kW + แบต 20-30 kWh'
          ]
        }
      ]
    },
    'on-grid-solar-system': {
      title: 'On-Grid Solar System',
      subtitle: 'ระบบโซล่าเซลล์เชื่อมต่อโครงข่ายการไฟฟ้า',
      icon: Grid,
      color: 'from-blue-500 to-cyan-500',
      badge: 'On-Grid',
      image: '/Blog/0n-grid.png',
      sections: [
        {
          title: 'ภาพรวมระบบ (System Overview)',
          content: [
            'On-Grid Solar System คือระบบผลิตไฟฟ้าจากพลังงานแสงอาทิตย์ที่ทำงานร่วมกับโครงข่ายการไฟฟ้าของการไฟฟ้าโดยตรง ระบบนี้ไม่มีการติดตั้งแบตเตอรี่สำหรับกักเก็บพลังงาน ไฟฟ้าที่ผลิตได้จากแผงโซลาร์เซลล์จะถูกนำมาใช้งานกับกิจกรรมในอาคาร และหากผลิตได้มากกว่าความต้องการใช้งาน พลังงานส่วนเกินจะถูกส่งกลับเข้าสู่ระบบการไฟฟ้า',
            'ระบบ On-Grid เป็นรูปแบบที่ได้รับความนิยมมากที่สุด เนื่องจากมีโครงสร้างไม่ซับซ้อน ต้นทุนเริ่มต้นต่ำ และมีประสิทธิภาพสูง เหมาะสำหรับพื้นที่ที่มีไฟฟ้าเสถียร'
          ]
        },
        {
          title: 'ส่วนประกอบหลักของระบบ',
          isList: true,
          content: [
            'แผงโซลาร์เซลล์ (Solar Panels) - รับพลังงานจากแสงอาทิตย์',
            'อินเวอร์เตอร์แบบ On-Grid (Grid-Tie Inverter) - แปลงไฟ DC เป็น AC และซิงค์กับการไฟฟ้า',
            'มิเตอร์ไฟฟ้าแบบสองทาง (Bi-directional Meter) - วัดการใช้และส่งคืนไฟฟ้า',
            'ระบบป้องกัน (Protection System) - ป้องกันไฟกระชาก และตัดการเชื่อมต่ออัตโนมัติเมื่อไฟดับ',
            'โครงสร้างติดตั้ง (Mounting Structure) - รองรับแผงโซลาร์บนหลังคาหรือพื้นดิน'
          ]
        },
        {
          title: 'การทำงานของระบบ',
          content: [
            '1. กลางวัน: แผงโซลาร์ผลิตไฟฟ้าใช้ในบ้าน ส่วนเกินส่งคืนการไฟฟ้า (ได้เครดิต)',
            '2. กลางคืน: ใช้ไฟจากการไฟฟ้าตามปกติ (หักเครดิตที่ได้จากกลางวัน)',
            '3. ไฟดับ: ระบบจะหยุดทำงานอัตโนมัติเพื่อความปลอดภัยของช่างการไฟฟ้า',
            '4. Net Metering: ระบบคำนวณหักลบระหว่างไฟที่ใช้และไฟที่ผลิตได้ ทำให้ค่าไฟลดลงอย่างมาก'
          ]
        },
        {
          title: 'ข้อดีของระบบ On-Grid',
          isAdvantages: true,
          content: [
            'ประหยัดค่าไฟได้สูงสุด 80-95% ขึ้นอยู่กับขนาดระบบ',
            'ต้นทุนเริ่มต้นต่ำที่สุด ไม่ต้องซื้อแบตเตอรี่',
            'ขายไฟคืนการไฟฟ้าได้ (Net Metering)',
            'บำรุงรักษาง่าย อุปกรณ์น้อย',
            'คืนทุนเร็วที่สุด 3-5 ปี',
            'ประสิทธิภาพสูง ไม่สูญเสียพลังงานจากการชาร์จแบต',
            'อายุการใช้งานยาวนาน 25-30 ปี',
            'เป็นมิตรกับสิ่งแวดล้อม ลด CO2'
          ]
        },
        {
          title: 'ข้อควรพิจารณา',
          isWarnings: true,
          content: [
            'ไม่มีไฟสำรองเมื่อไฟดับ (ต้องติดตั้ง Hybrid ถ้าต้องการไฟสำรอง)',
            'ต้องมีโครงข่ายการไฟฟ้าที่เสถียร',
            'ต้องขอใบอนุญาตจากการไฟฟ้าก่อนติดตั้ง',
            'ประสิทธิภาพขึ้นอยู่กับปริมาณแสงแดด',
            'ต้องทำความสะอาดแผงโซลาร์เป็นประจำ'
          ]
        },
        {
          title: 'เหมาะสำหรับใคร?',
          content: [
            '✓ บ้านพักอาศัยที่มีค่าไฟสูง (3,000 บาท/เดือนขึ้นไป)',
            '✓ โรงงานอุตสาหกรรมที่ใช้ไฟกลางวันมาก',
            '✓ อาคารพาณิชย์ ร้านค้า ออฟฟิศ',
            '✓ โรงเรียน โรงพยาบาล หน่วยงานราชการ',
            '✓ ผู้ที่ต้องการลดค่าไฟและคืนทุนเร็ว',
            '✓ พื้นที่ที่มีการไฟฟ้าเสถียร ไม่ดับบ่อย'
          ]
        },
        {
          title: 'ขนาดระบบที่แนะนำ',
          content: [
            'บ้านขนาดเล็ก (ค่าไฟ 2,000-3,000 บาท/เดือน): ระบบ 3-5 kW',
            'บ้านขนาดกลาง (ค่าไฟ 4,000-6,000 บาท/เดือน): ระบบ 5-8 kW',
            'บ้านขนาดใหญ่ (ค่าไฟ 7,000-10,000 บาท/เดือน): ระบบ 8-15 kW',
            'โรงงานขนาดเล็ก (ค่าไฟ 20,000-50,000 บาท/เดือน): ระบบ 30-100 kW',
            'โรงงานขนาดใหญ่ (ค่าไฟ 100,000+ บาท/เดือน): ระบบ 100-500 kW+'
          ]
        },
        {
          title: 'Net Metering คืออะไร?',
          content: [
            'Net Metering คือระบบที่การไฟฟ้าอนุญาตให้ผู้ใช้ไฟฟ้าที่ติดตั้งโซลาร์เซลล์สามารถส่งไฟฟ้าส่วนเกินกลับเข้าสู่ระบบได้',
            'การไฟฟ้าจะคำนวณหักลบระหว่างไฟที่คุณใช้และไฟที่คุณผลิตได้ในแต่ละเดือน',
            'ถ้าผลิตได้มากกว่าที่ใช้ จะได้เครดิตไว้ใช้ในเดือนถัดไป (สูงสุด 12 เดือน)',
            'ช่วยให้คุณประหยัดค่าไฟได้สูงสุด และคุ้มค่าที่สุดสำหรับการลงทุน'
          ]
        },
        {
          title: 'ขั้นตอนการติดตั้ง',
          content: [
            '1. สำรวจพื้นที่และออกแบบระบบ (1-2 วัน)',
            '2. ยื่นขออนุญาตกับการไฟฟ้า (2-4 สัปดาห์)',
            '3. ติดตั้งอุปกรณ์และระบบ (2-5 วัน)',
            '4. ตรวจสอบและทดสอบระบบ (1 วัน)',
            '5. การไฟฟ้าตรวจรับและเปลี่ยนมิเตอร์ (1-2 สัปดาห์)',
            '6. เริ่มใช้งานและประหยัดค่าไฟได้ทันที'
          ]
        },
        {
          title: 'ความแตกต่างระหว่าง On-Grid กับระบบอื่น',
          content: [
            'On-Grid: ไม่มีแบต ต้นทุนต่ำ ประหยัดสูงสุด ไม่มีไฟสำรอง',
            'Hybrid: มีแบต มีไฟสำรอง ต้นทุนสูงกว่า ขายไฟคืนได้',
            'Off-Grid: มีแบตขนาดใหญ่ ไม่ต้องพึ่งการไฟฟ้า ต้นทุนสูงสุด',
            'On-Grid เหมาะที่สุดสำหรับผู้ที่ต้องการประหยัดค่าไฟและคืนทุนเร็ว'
          ]
        }
      ]
    },
    'off-grid-solar-system': {
      title: 'Off-Grid Solar System',
      subtitle: 'ระบบโซล่าเซลล์อิสระ ไม่พึ่งพาการไฟฟ้า',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      badge: 'Off-Grid',
      image: '/Blog/off-grid.png',
      sections: [
        {
          title: 'ภาพรวมระบบ (System Overview)',
          content: [
            'Off-Grid Solar System คือระบบโซลาร์เซลล์ที่ไม่เชื่อมต่อกับโครงข่ายการไฟฟ้าใด ๆ ระบบนี้ถูกออกแบบมาเพื่อสามารถผลิตและจ่ายไฟฟ้าได้ด้วยตัวเองโดยสมบูรณ์ โดยใช้แบตเตอรี่เป็นแหล่งกักเก็บพลังงานหลัก',
            'ระบบ Off-Grid มักถูกใช้งานในพื้นที่ห่างไกล หรือพื้นที่ที่ไม่สามารถเข้าถึงระบบไฟฟ้าของการไฟฟ้าได้'
          ]
        },
        {
          title: 'ส่วนประกอบหลักของระบบ',
          isList: true,
          content: [
            'แผงโซลาร์เซลล์ (Solar Panels) - รับพลังงานจากแสงอาทิตย์',
            'อินเวอร์เตอร์แบบ Off-Grid (Off-Grid Inverter) - แปลงไฟ DC จากแบตเป็น AC',
            'แบตเตอรี่ขนาดใหญ่ (Battery Bank) - เก็บพลังงานไว้ใช้ตลอด 24 ชั่วโมง',
            'ชาร์จคอนโทรลเลอร์ (Charge Controller) - ควบคุมการชาร์จแบตเตอรี่',
            'ระบบป้องกัน (Protection System) - ป้องกันแบตเตอรี่จากการชาร์จเกินหรือคายประจุเกิน'
          ]
        },
        {
          title: 'การทำงานของระบบ',
          content: [
            '1. กลางวัน: แผงโซลาร์ผลิตไฟฟ้าใช้ในบ้านและชาร์จแบตเตอรี่พร้อมกัน',
            '2. กลางคืน: ใช้ไฟจากแบตเตอรี่ที่เก็บไว้ตลอดทั้งคืน',
            '3. วันฝนหรือแดดน้อย: ใช้พลังงานสำรองจากแบตเตอรี่',
            '4. ระบบอัจฉริยะ: ชาร์จคอนโทรลเลอร์จัดการการชาร์จและคายประจุอัตโนมัติเพื่อยืดอายุแบตเตอรี่'
          ]
        },
        {
          title: 'ข้อดีของระบบ Off-Grid',
          isAdvantages: true,
          content: [
            'ไม่ต้องพึ่งพาการไฟฟ้า เป็นอิสระทางพลังงาน 100%',
            'เหมาะกับพื้นที่ห่างไกลที่ไฟฟ้าไม่ถึง',
            'ไม่มีค่าไฟฟ้ารายเดือน ประหยัดในระยะยาว',
            'ไม่ได้รับผลกระทบจากไฟดับ',
            'เป็นมิตรกับสิ่งแวดล้อม ไม่ปล่อย CO2',
            'สามารถขยายระบบได้ตามความต้องการ',
            'เหมาะกับบ้านสวน รีสอร์ท หรือพื้นที่ห่างไกล'
          ]
        },
        {
          title: 'ข้อควรพิจารณา',
          isWarnings: true,
          content: [
            'ต้นทุนเริ่มต้นสูง เนื่องจากต้องใช้แบตเตอรี่ขนาดใหญ่',
            'ต้องคำนวณการใช้ไฟให้พอดีกับขนาดระบบ',
            'แบตเตอรี่มีอายุการใช้งาน 5-10 ปี ต้องเปลี่ยนใหม่',
            'ต้องมีพื้นที่สำหรับติดตั้งแบตเตอรี่และอุปกรณ์',
            'ในช่วงฤดูฝนอาจต้องจำกัดการใช้ไฟ',
            'ต้องบำรุงรักษาและตรวจสอบระบบเป็นประจำ'
          ]
        },
        {
          title: 'เหมาะสำหรับใคร?',
          content: [
            '✓ บ้านในพื้นที่ห่างไกลที่ไฟฟ้าไม่ถึง',
            '✓ บ้านสวน กระท่อม รีสอร์ท',
            '✓ สถานีสูบน้ำ สถานีโทรคมนาคม',
            '✓ ผู้ที่ต้องการความเป็นอิสระทางพลังงาน',
            '✓ พื้นที่ที่ค่าเดินสายไฟฟ้าสูงกว่าติดตั้งโซลาร์',
            '✓ ผู้ที่ต้องการลดผลกระทบต่อสิ่งแวดล้อม'
          ]
        },
        {
          title: 'ขนาดระบบที่แนะนำ',
          content: [
            'บ้านขนาดเล็ก (ใช้ไฟน้อย 50-100 หน่วย/เดือน): ระบบ 3-5 kW + แบต 15-20 kWh',
            'บ้านขนาดกลาง (ใช้ไฟปานกลาง 100-200 หน่วย/เดือน): ระบบ 5-8 kW + แบต 20-30 kWh',
            'บ้านขนาดใหญ่ (ใช้ไฟมาก 200+ หน่วย/เดือน): ระบบ 8-15 kW + แบต 30-50 kWh',
            'หมายเหตุ: ขนาดแบตเตอรี่ควรเพียงพอสำหรับใช้งาน 2-3 วันโดยไม่มีแสงอาทิตย์'
          ]
        },
        {
          title: 'เทคนิคการใช้งานระบบ Off-Grid',
          content: [
            '• วางแผนการใช้ไฟฟ้าให้เหมาะสม หลีกเลี่ยงการใช้เครื่องใช้ไฟฟ้าพร้อมกันหลายเครื่อง',
            '• ใช้เครื่องใช้ไฟฟ้าที่ประหยัดพลังงาน เช่น แอร์ Inverter, หลอดไฟ LED',
            '• ใช้เครื่องใช้ไฟฟ้าที่กินไฟมากในช่วงกลางวันที่มีแสงแดด',
            '• ตรวจสอบระดับแบตเตอรี่เป็นประจำ',
            '• ทำความสะอาดแผงโซลาร์เป็นประจำเพื่อประสิทธิภาพสูงสุด'
          ]
        },
        {
          title: 'ความแตกต่างระหว่าง Off-Grid กับ Hybrid',
          content: [
            'Off-Grid: ไม่เชื่อมต่อการไฟฟ้า ใช้แบตเตอรี่เป็นหลัก เหมาะกับพื้นที่ห่างไกล',
            'Hybrid: เชื่อมต่อการไฟฟ้า มีแบตสำรอง สามารถขายไฟคืนได้ เหมาะกับบ้านในเมือง',
            'Off-Grid ต้องใช้แบตเตอรี่ขนาดใหญ่กว่า Hybrid เพราะต้องพึ่งพาแบตเตอรี่เพียงอย่างเดียว'
          ]
        }
      ]
    }
  };

  const blog = blogContent[slug];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-kb-dark mb-4">ไม่พบบทความ</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-kb-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-kb-orange-dark transition-all"
          >
            กลับหน้าหลัก
          </button>
        </div>
      </div>
    );
  }

  const Icon = blog.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Image */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
          <div className="max-w-5xl mx-auto">
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${blog.color} text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base shadow-lg mb-4`}>
              <Icon className="w-5 h-5" />
              {blog.badge}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3">
              {blog.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 font-medium">
              {blog.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {blog.sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-kb-dark mb-6 flex items-center gap-3">
              <span className={`w-2 h-8 bg-gradient-to-b ${blog.color} rounded-full`}></span>
              {section.title}
            </h2>

            {section.isList ? (
              <ul className="space-y-4">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-kb-gray text-lg leading-relaxed">
                    <CheckCircle2 className="w-6 h-6 text-kb-orange flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : section.isAdvantages ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {section.content.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-green-50 p-4 rounded-xl border border-green-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-kb-dark font-medium">{item}</span>
                  </div>
                ))}
              </div>
            ) : section.isWarnings ? (
              <div className="space-y-3">
                {section.content.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-orange-50 p-4 rounded-xl border border-orange-200">
                    <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-kb-dark">{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className="text-kb-gray text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`mt-16 bg-gradient-to-r ${blog.color} rounded-3xl p-8 sm:p-12 text-center text-white`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            สนใจติดตั้งระบบ {blog.title}?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            ปรึกษาฟรี! ทีมงานมืออาชีพพร้อมให้คำแนะนำและออกแบบระบบที่เหมาะกับคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/#contact')}
              className="bg-white text-kb-orange px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              ติดต่อเรา
            </button>
            <button
              onClick={() => navigate('/#calculator')}
              className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all border-2 border-white"
            >
              คำนวณค่าไฟ
            </button>
          </div>
        </motion.div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/#blog')}
            className="inline-flex items-center gap-2 text-kb-orange hover:text-kb-orange-dark font-semibold text-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            กลับไปดูบทความอื่น
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
