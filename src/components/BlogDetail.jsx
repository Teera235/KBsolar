import { useParams, useNavigate } from 'react-router-dom';
import { Battery, Grid, Zap, CheckCircle2, AlertCircle, ArrowLeft, Home, Phone, Calculator as CalcIcon, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  const blogContent = {
    'hybrid-solar-system': {
      title: 'ระบบโซลาร์เซลล์แบบไฮบริด (Hybrid Solar System)',
      subtitle: 'ใช้ไฟโซลาร์ได้ทั้งกลางวัน-กลางคืน พร้อมแบตเตอรี่สำรองไฟเมื่อไฟดับ',
      icon: Battery,
      color: 'orange',
      badge: 'Hybrid',
      image: '/Blog/hrbrid.webp',
      sections: [
        {
          title: 'บทนำ',
          content: [
            'ระบบโซลาร์เซลล์แบบไฮบริด (Hybrid Solar System) คือทางเลือกสำหรับผู้ที่ต้องการ "ลดค่าไฟ" ควบคู่กับ "ความมั่นคงด้านไฟฟ้า" เพราะระบบนี้ผสานการทำงานของโซลาร์เซลล์ + โครงข่ายการไฟฟ้า (Grid) + แบตเตอรี่ (Battery Storage) เข้าด้วยกัน ทำให้สามารถใช้พลังงานที่ผลิตได้ในเวลากลางวัน และเก็บพลังงานไว้ใช้ในเวลากลางคืนหรือช่วงไฟดับได้',
            'บทความนี้จะอธิบายหลักการทำงาน ส่วนประกอบ ข้อดี-ข้อควรพิจารณา และแนวทางเลือกขนาดแบตเตอรี่/ขนาดระบบให้เหมาะกับการใช้งานจริง'
          ]
        },
        {
          title: 'ระบบโซลาร์เซลล์แบบไฮบริดคืออะไร',
          content: [
            'Hybrid Solar System คือระบบผลิตไฟฟ้าจากพลังงานแสงอาทิตย์ที่เชื่อมต่อกับทั้ง Grid และ Battery โดยมี Hybrid Inverter เป็นหัวใจหลักในการแปลงไฟและบริหารจัดการพลังงาน (Energy Flow) แบบอัตโนมัติ',
            'หลักการทั่วไป: กลางวัน Solar จ่ายโหลดก่อน → ส่วนเกินชาร์จแบต → ถ้าแบตเต็มอาจส่งเข้ากริด (ขึ้นกับนโยบาย/การตั้งค่า) ส่วนกลางคืน ใช้ไฟจากแบตก่อน → ถ้าแบตต่ำกว่าค่าที่ตั้งไว้ ระบบจึงดึงไฟจากกริด'
          ]
        },
        {
          title: 'ส่วนประกอบหลักของระบบ',
          isList: true,
          content: [
            'แผงโซลาร์เซลล์ (Solar Panels) - ผลิตไฟฟ้ากระแสตรง (DC) จากแสงอาทิตย์ โดยทั่วไปนิยมใช้แผง Monocrystalline ประสิทธิภาพ 18-23%',
            'อินเวอร์เตอร์แบบไฮบริด (Hybrid Inverter) - แปลงไฟ DC เป็น AC และควบคุมการชาร์จ/คายประจุแบตเตอรี่ รวมถึงกำหนดโหมดการทำงาน เช่น Self-consumption, Backup, Time-of-Use (TOU)',
            'แบตเตอรี่สำรองไฟ (Battery Storage) - กักเก็บพลังงานไฟฟ้าไว้ใช้ตอนกลางคืน/ไฟดับ มักพบในรูปแบบ Lithium (LFP/NMC) ความจุเป็น kWh',
            'Smart Energy Management / CT / Meter - อุปกรณ์วัดกระแสและพลังงาน (เช่น CT Clamp / Smart Meter) เพื่อให้ระบบทราบว่าโหลดใช้งานเท่าไร และบริหารพลังงานได้ถูกต้อง',
            'ระบบป้องกันและความปลอดภัย (Protection System) - เช่น Surge protection, Breaker/Isolator, และมาตรการความปลอดภัยด้านแบตเตอรี่'
          ]
        },
        {
          title: 'หลักการทำงานของระบบ',
          content: [
            '1. โหมดกลางวัน (Daytime Mode): Solar → Load (จ่ายโหลดก่อน) → Solar ส่วนเกิน → Battery (ชาร์จ) → ถ้า Battery เต็ม → ส่งเข้ากริดได้ (ขึ้นกับการตั้งค่า/เงื่อนไข)',
            '2. โหมดกลางคืน (Night Mode): Battery → Load (จ่ายโหลดก่อน) → เมื่อแบตต่ำกว่า SOC ที่ตั้งไว้ → Grid → Load',
            '3. โหมดไฟดับ (Backup Mode): เมื่อกริดดับ ระบบสามารถจ่ายไฟให้ "วงจรสำคัญ" ผ่าน Backup/Essential Loads (ตามการออกแบบ) โดยสลับไปใช้แบตเตอรี่แทน ทั้งนี้ขึ้นกับรุ่นอินเวอร์เตอร์และการเดินวงจร',
            '4. โหมดอัจฉริยะ (Energy Optimization): ระบบสามารถตั้งค่าตามพฤติกรรมการใช้ไฟ เช่น ชาร์จแบตจากโซลาร์ไว้ใช้ช่วงค่าไฟแพง, จำกัดการคายประจุเพื่อยืดอายุแบตเตอรี่, Prioritize self-consumption ลดการซื้อไฟจากกริด'
          ],
          image: '/diagrams/Blog Diagrams/3.webp'
        },
        {
          title: 'ข้อดีของระบบไฮบริด',
          isAdvantages: true,
          content: [
            'มีไฟสำรองเมื่อไฟดับ เหมาะกับบ้าน/ธุรกิจที่ต้องการความต่อเนื่อง',
            'ลดค่าไฟได้ทั้งกลางวันและกลางคืน เพราะใช้แบตเตอรี่ช่วยลดการซื้อไฟช่วงไม่มีแดด',
            'ควบคุมพลังงานได้ยืดหยุ่น ตั้งค่าโหมดได้หลายแบบ (Self-consumption / Backup / TOU)',
            'เพิ่มความมั่นคงด้านพลังงาน ลดผลกระทบจากไฟตก/ไฟกระชาก (ตามการออกแบบระบบ)',
            'รองรับการขยายระบบในอนาคต เพิ่มแบต/เพิ่มแผงได้ (ตามสเปกอินเวอร์เตอร์)'
          ]
        },
        {
          title: 'ข้อควรพิจารณา',
          isWarnings: true,
          content: [
            'ต้นทุนสูงกว่า On-Grid เพราะมีแบตเตอรี่และอุปกรณ์จัดการพลังงาน',
            'แบตเตอรี่มีอายุการใช้งาน โดยทั่วไปต้องประเมินตามรอบชาร์จ (cycle) และเงื่อนไขการใช้งาน',
            'ต้องออกแบบวงจร Backup ให้ถูกต้อง วงจรไหนสำรอง/ไม่สำรอง ต้องแยกโหลดชัดเจน',
            'ต้องมีพื้นที่ติดตั้งแบต และคำนึงเรื่องความร้อน/การระบายอากาศ/ความปลอดภัย'
          ]
        },
        {
          title: 'เหมาะสำหรับใคร',
          content: [
            '✓ บ้านที่ไฟดับบ่อยหรือมีอุปกรณ์สำคัญ (อินเทอร์เน็ต, กล้อง, ตู้เย็น, ปั๊มน้ำ)',
            '✓ ธุรกิจที่หยุดไม่ได้ เช่น ร้านค้า, โฮมออฟฟิศ, คลินิกขนาดเล็ก',
            '✓ ผู้ที่ต้องการใช้ไฟโซลาร์ให้คุ้ม "หลังพระอาทิตย์ตก"',
            '✓ พื้นที่ที่ต้องการความเสถียรไฟฟ้าสูง'
          ]
        },
        {
          title: 'ขนาดระบบที่แนะนำ',
          content: [
            'หมายเหตุ: ขนาดจริงต้องดูโหลดสำรอง (Essential Loads), ชั่วโมงสำรองที่ต้องการ, และรูปแบบการใช้ไฟ',
            '• บ้านขนาดเล็ก (ค่าไฟ 2,000-3,000 บาท/เดือน): ระบบ 3-5 kW + Battery 5-10 kWh (ถ้าต้องการสำรองโหลดสำคัญ)',
            '• บ้านขนาดกลาง (ค่าไฟ 4,000-6,000 บาท/เดือน): ระบบ 5-8 kW + Battery 10-15 kWh',
            '• บ้านขนาดใหญ่ (ค่าไฟ 7,000+ บาท/เดือน): ระบบ 8-15 kW + Battery 15-30 kWh'
          ]
        },
        {
          title: 'เปรียบเทียบ On-Grid, Hybrid และ Off-Grid',
          content: [
            'เพื่อช่วยให้คุณตัดสินใจเลือกระบบที่เหมาะสมกับความต้องการ ตารางด้านล่างแสดงการเปรียบเทียบระบบทั้ง 3 แบบ:',
            '| คุณสมบัติ | On-Grid | Hybrid | Off-Grid |',
            '|----------|---------|--------|----------|',
            '| เชื่อมต่อการไฟฟ้า | ✓ | ✓ | ✗ |',
            '| มีแบตเตอรี่ | ✗ | ✓ | ✓ |',
            '| ไฟสำรองเมื่อไฟดับ | ✗ | ✓* | ✓ |',
            '| ต้นทุนเริ่มต้น | ต่ำสุด | สูง | สูงสุด |',
            '| ความซับซ้อนระบบ | ต่ำ | กลาง-สูง | สูง |',
            '| เหมาะสำหรับ | ลดค่าไฟ | ลดค่าไฟ + สำรองไฟ | ไม่มีไฟฟ้าเข้าถึง |',
            '* ขึ้นกับรุ่นอินเวอร์เตอร์และการออกแบบวงจร Backup'
          ]
        },
        {
          title: 'คำถามที่พบบ่อย (FAQ)',
          content: [
            'Q: Hybrid กับ On-Grid ต่างกันยังไง?',
            'A: Hybrid มีแบตเตอรี่และสามารถสำรองไฟได้ (ตามการออกแบบ) ส่วน On-Grid ไม่มีแบตเตอรี่และหยุดทำงานเมื่อกริดดับ',
            'Q: ควรเลือกแบตเตอรี่กี่ kWh?',
            'A: ดูจาก "โหลดสำคัญ (kW)" และ "ชั่วโมงที่ต้องการสำรอง" เช่น 1 kW สำรอง 5 ชม. ต้องใช้ประมาณ 5 kWh (ยังไม่รวมเผื่อการสูญเสียและ DoD)',
            'Q: Hybrid คืนทุนช้ากว่า On-Grid ไหม?',
            'A: โดยทั่วไปคืนทุนช้ากว่า เพราะมีต้นทุนแบตเตอรี่ แต่แลกกับความมั่นคงด้านไฟฟ้าและการใช้พลังงานช่วงกลางคืน'
          ]
        },
        {
          title: 'สรุป',
          content: [
            'Hybrid Solar System เหมาะกับผู้ที่ต้องการ "ลดค่าไฟ" และ "มีไฟสำรอง" ในระบบเดียว โดยเฉพาะพื้นที่ไฟดับบ่อยหรือมีโหลดสำคัญ อย่างไรก็ตามต้องประเมินงบประมาณและออกแบบวงจรสำรองให้ถูกต้อง เพื่อให้ระบบมีประสิทธิภาพและคุ้มค่าจริง'
          ]
        }
      ]
    },
    'on-grid-solar-system': {
      title: 'ระบบโซลาร์เซลล์แบบออนกริด (On-Grid Solar System)',
      subtitle: 'ทำไมถึงเป็นตัวเลือกอันดับ 1 ของคนไทย - ประหยัดสูงสุด คืนทุนเร็วที่สุด',
      icon: Grid,
      color: 'blue',
      badge: 'On-Grid',
      image: '/Blog/0n-grid.webp',
      sections: [
        {
          title: 'ระบบโซล่าเซลล์แบบออนกริด (On-Grid Solar System)',
          content: [
            'ระบบโซล่าเซลล์แบบออนกริด (On-Grid Solar System) คือระบบผลิตไฟฟ้าจากพลังงานแสงอาทิตย์ที่เชื่อมต่อกับโครงข่ายไฟฟ้าของการไฟฟ้าโดยตรง โดยไม่มีการติดตั้งแบตเตอรี่สำหรับกักเก็บพลังงาน ระบบนี้ทำงานโดยแปลงพลังงานแสงอาทิตย์เป็นไฟฟ้ากระแสตรง (DC) ผ่านแผงโซลาร์เซลล์ จากนั้นจะถูกแปลงเป็นไฟฟ้ากระแสสลับ (AC) ผ่านอินเวอร์เตอร์เพื่อใช้งานในบ้านหรืออาคาร',
            'หลักการทำงานของระบบออนกริดเริ่มต้นในช่วงเวลากลางวันที่มีแสงแดด แผงโซลาร์เซลล์จะผลิตไฟฟ้าเพื่อจ่ายให้กับเครื่องใช้ไฟฟ้าภายในอาคารเป็นอันดับแรก หากไฟฟ้าที่ผลิตได้มีมากกว่าความต้องการใช้งาน ไฟฟ้าส่วนเกินจะถูกส่งกลับไปยังโครงข่ายการไฟฟ้า (Feed-in) ตามระบบ Net Metering ซึ่งจะช่วยลดค่าไฟฟ้าในบิลประจำเดือน',
            'ในกรณีที่ไฟฟ้าที่ผลิตได้ไม่เพียงพอต่อความต้องการใช้งาน หรือในช่วงเวลากลางคืนที่ไม่มีแสงแดด ระบบจะดึงไฟฟ้าจากการไฟฟ้ามาใช้งานตามปกติโดยอัตโนมัติ ทำให้มั่นใจได้ว่าจะมีไฟฟ้าใช้งานอย่างต่อเนื่องตลอดเวลา',
            'ระบบออนกริดเป็นรูปแบบที่ได้รับความนิยมสูงสุดในปัจจุบัน เนื่องจากมีข้อดีหลายประการ ได้แก่ ต้นทุนการติดตั้งที่ต่ำกว่าระบบอื่นเพราะไม่ต้องลงทุนในแบตเตอรี่ที่มีราคาแพง การบำรุงรักษาที่ง่ายและมีค่าใช้จ่ายน้อย มีประสิทธิภาพในการผลิตไฟฟ้าสูง และสามารถขายไฟฟ้าส่วนเกินคืนให้กับการไฟฟ้าได้ ซึ่งช่วยให้ผู้ใช้งานสามารถลดค่าใช้จ่ายด้านไฟฟ้าได้อย่างมีประสิทธิภาพและคุ้มค่า โดยระยะเวลาคืนทุนโดยเฉลี่ยอยู่ที่ประมาณ 3-5 ปี ขึ้นอยู่กับขนาดของระบบและปริมาณการใช้ไฟฟ้า'
          ]
        },
        {
          title: 'ส่วนประกอบหลักของระบบ',
          isList: true,
          content: [
            'แผงโซลาร์เซลล์ (Solar Panels) - แปลงพลังงานแสงอาทิตย์เป็นไฟฟ้ากระแสตรง',
            'อินเวอร์เตอร์แบบออนกริด (Grid-Tie Inverter) - แปลงไฟ DC เป็น AC และซิงโครไนซ์กับโครงข่ายการไฟฟ้า',
            'มิเตอร์ไฟฟ้าแบบสองทาง (Bi-directional Meter) - วัดและบันทึกการใช้และส่งคืนไฟฟ้า',
            'ระบบป้องกันและความปลอดภัย (Protection System) - ป้องกันไฟกระชากและระบบไฟฟ้าผิดปกติ',
            'โครงสร้างติดตั้งมาตรฐาน (Mounting Structure) - รองรับและยึดแผงโซลาร์เซลล์อย่างมั่นคง'
          ]
        },
        {
          title: 'หลักการทำงานของระบบ',
          content: [
            '1. โหมดกลางวัน: แผงโซลาร์เซลล์ผลิตไฟฟ้าจ่ายให้เครื่องใช้ไฟฟ้าภายในอาคารเป็นอันดับแรก พลังงานส่วนเกินจะส่งคืนโครงข่ายการไฟฟ้าโดยอัตโนมัติ',
            '2. โหมดกลางคืน: ระบบดึงไฟฟ้าจากโครงข่ายการไฟฟ้ามาใช้งานตามปกติ',
            '3. โหมดไฟดับ: ระบบจะหยุดทำงานทันทีเพื่อความปลอดภัยของช่างซ่อมบำรุงสายไฟ (Anti-Islanding Protection)',
            '4. ระบบ Net Metering: คำนวณหักลบระหว่างพลังงานที่ใช้และพลังงานที่ผลิตได้ เพื่อลดค่าไฟฟ้าในบิลรายเดือน'
          ],
          image: '/diagrams/Blog Diagrams/2.webp'
        },
        {
          title: 'ข้อดีของระบบออนกริด',
          isAdvantages: true,
          content: [
            'ประหยัดค่าไฟฟ้าสูงสุดถึง 80-95% ลดค่าใช้จ่ายได้อย่างมีประสิทธิภาพ',
            'ต้นทุนการลงทุนเริ่มต้นต่ำที่สุด เนื่องจากไม่ต้องติดตั้งแบตเตอรี่',
            'สามารถขายไฟฟ้าคืนการไฟฟ้าได้ตามระบบ Net Metering สร้างรายได้เสริม',
            'การบำรุงรักษาง่าย มีอุปกรณ์น้อย ค่าใช้จ่ายในการดูแลต่ำ',
            'ระยะเวลาคืนทุนเร็วที่สุด เพียง 3-5 ปี',
            'ประสิทธิภาพการผลิตไฟฟ้าสูง ไม่มีการสูญเสียพลังงานจากการชาร์จแบตเตอรี่',
            'อายุการใช้งานยาวนาน 25-30 ปี พร้อมรับประกันจากผู้ผลิต'
          ]
        },
        {
          title: 'ข้อควรพิจารณา',
          isWarnings: true,
          content: [
            'ไม่มีระบบสำรองไฟฟ้าเมื่อเกิดไฟดับ ระบบจะหยุดทำงานทันทีเพื่อความปลอดภัย',
            'ต้องมีโครงข่ายการไฟฟ้าที่เสถียรและมีคุณภาพในพื้นที่ติดตั้ง',
            'ต้องขอใบอนุญาตและผ่านการตรวจสอบจากการไฟฟ้าก่อนเริ่มใช้งาน',
            'ประสิทธิภาพการผลิตไฟฟ้าขึ้นอยู่กับปริมาณและคุณภาพของแสงแดดในแต่ละวัน'
          ]
        },
        {
          title: 'เหมาะสำหรับใคร?',
          content: [
            '✓ บ้านพักอาศัยที่มีค่าไฟฟ้าสูงและต้องการลดค่าใช้จ่าย',
            '✓ โรงงานอุตสาหกรรมที่มีการใช้ไฟฟ้าในช่วงเวลากลางวันเป็นหลัก',
            '✓ อาคารพาณิชย์ ร้านค้า สำนักงาน ที่เปิดทำการในเวลากลางวัน',
            '✓ สถานศึกษา โรงพยาบาล หน่วยงานราชการ',
            '✓ ผู้ที่ต้องการลดค่าไฟฟ้าและคืนทุนเร็วที่สุด โดยไม่จำเป็นต้องมีระบบสำรองไฟ'
          ]
        },
        {
          title: 'ขนาดระบบที่แนะนำ',
          content: [
            'บ้านขนาดเล็ก (ค่าไฟ 2,000-3,000 บาท/เดือน): ระบบ 3-5 kW',
            'บ้านขนาดกลาง (ค่าไฟ 4,000-6,000 บาท/เดือน): ระบบ 5-8 kW',
            'บ้านขนาดใหญ่ (ค่าไฟ 7,000+ บาท/เดือน): ระบบ 8-15 kW',
            'โรงงานขนาดเล็ก-กลาง: ระบบ 30-100 kW',
            '* ขนาดระบบที่เหมาะสมควรได้รับการประเมินโดยผู้เชี่ยวชาญตามการใช้ไฟฟ้าจริงของแต่ละสถานที่'
          ]
        }
      ]
    },
    'off-grid-solar-system': {
      title: 'Off-Grid คือคำตอบสำหรับความเป็นอิสระ',
      subtitle: 'อิสระเต็มที่ ไม่ต้องพึ่งการไฟฟ้า',
      icon: Zap,
      color: 'green',
      badge: 'Off-Grid',
      image: '/Blog/off-grid.webp',
      sections: [
        {
          title: 'ระบบโซล่าเซลล์แบบออฟกริด (Off-Grid Solar System)',
          content: [
            'ระบบโซล่าเซลล์แบบออฟกริด (Off-Grid Solar System) คือระบบผลิตไฟฟ้าจากพลังงานแสงอาทิตย์ที่ทำงานแบบอิสระโดยสมบูรณ์ โดยไม่มีการเชื่อมต่อกับโครงข่ายไฟฟ้าของการไฟฟ้าแต่อย่างใด ระบบนี้ถูกออกแบบมาเพื่อให้สามารถผลิต กักเก็บ และจ่ายไฟฟ้าได้ด้วยตัวเองตลอด 24 ชั่วโมง โดยอาศัยแบตเตอรี่เป็นตัวกักเก็บพลังงานไฟฟ้าที่ผลิตได้ในช่วงกลางวันไว้ใช้งานในช่วงเวลากลางคืนหรือเมื่อไม่มีแสงแดด',
            'หลักการทำงานของระบบออฟกริดเริ่มต้นจากแผงโซลาร์เซลล์ที่รับพลังงานจากแสงอาทิตย์และแปลงเป็นไฟฟ้ากระแสตรง (DC) จากนั้นไฟฟ้าจะผ่านเข้าสู่ชาร์จคอนโทรลเลอร์ (Charge Controller) ซึ่งทำหน้าที่ควบคุมการชาร์จไฟเข้าแบตเตอรี่ให้เหมาะสม ป้องกันการชาร์จเกินหรือคายประจุมากเกินไป เพื่อยืดอายุการใช้งานของแบตเตอรี่',
            'ไฟฟ้าที่เก็บไว้ในแบตเตอรี่จะถูกแปลงเป็นไฟฟ้ากระแสสลับ (AC) ผ่านอินเวอร์เตอร์เพื่อจ่ายให้กับเครื่องใช้ไฟฟ้าต่างๆ ภายในบ้านหรืออาคาร ระบบจะทำงานอย่างต่อเนื่องตลอด 24 ชั่วโมง โดยใช้พลังงานจากแสงอาทิตย์ในเวลากลางวัน และใช้พลังงานสำรองจากแบตเตอรี่ในเวลากลางคืน',
            'ระบบออฟกริดเหมาะสำหรับพื้นที่ห่างไกลที่ไม่สามารถเข้าถึงระบบไฟฟ้าของการไฟฟ้าได้ เช่น บ้านในชนบท บ้านสวน กระท่อมบนภูเขา เกาะในทะเล หรือสถานีสูบน้ำในไร่นา นอกจากนี้ยังเหมาะสำหรับผู้ที่ต้องการความเป็นอิสระทางพลังงานและไม่ต้องการพึ่งพาการไฟฟ้า',
            'แม้ว่าระบบนี้จะมีต้นทุนเริ่มต้นที่สูงกว่าระบบออนกริดเนื่องจากต้องลงทุนในแบตเตอรี่ขนาดใหญ่ แต่ในระยะยาวจะช่วยประหยัดค่าใช้จ่ายด้านไฟฟ้าได้อย่างมาก เพราะไม่ต้องจ่ายค่าไฟฟ้ารายเดือนเลย และยังเป็นมิตรกับสิ่งแวดล้อม ลดการปล่อยก๊าซเรือนกระจก ช่วยรักษาโลกของเราให้ยั่งยืนต่อไป'
          ]
        },
        {
          title: 'ส่วนประกอบหลักของระบบ',
          isList: true,
          content: [
            'แผงโซลาร์เซลล์ (Solar Panels) - แปลงพลังงานแสงอาทิตย์เป็นไฟฟ้ากระแสตรง',
            'อินเวอร์เตอร์แบบออฟกริด (Off-Grid Inverter) - แปลงไฟ DC จากแบตเตอรี่เป็น AC สำหรับเครื่องใช้ไฟฟ้า',
            'แบตเตอรี่ขนาดใหญ่ (Battery Bank) - กักเก็บพลังงานไฟฟ้าสำหรับใช้งานตลอด 24 ชั่วโมง',
            'ชาร์จคอนโทรลเลอร์ (Charge Controller) - ควบคุมการชาร์จและคายประจุแบตเตอรี่อย่างมีประสิทธิภาพ',
            'ระบบป้องกันและความปลอดภัย - ป้องกันแบตเตอรี่จากการชาร์จเกินและคายประจุมากเกินไป'
          ]
        },
        {
          title: 'หลักการทำงานของระบบ',
          content: [
            '1. โหมดกลางวัน: แผงโซลาร์เซลล์ผลิตไฟฟ้าจ่ายให้เครื่องใช้ไฟฟ้าภายในอาคาร และชาร์จแบตเตอรี่เพื่อเก็บสำรองไว้ใช้ในเวลากลางคืน',
            '2. โหมดกลางคืน: ระบบดึงพลังงานจากแบตเตอรี่ที่กักเก็บไว้มาใช้งานอย่างต่อเนื่อง',
            '3. โหมดวันฝน: ระบบใช้พลังงานสำรองจากแบตเตอรี่ที่ชาร์จไว้ในวันที่มีแสงแดดดี',
            '4. ระบบบริหารจัดการอัจฉริยะ: ควบคุมการชาร์จและคายประจุแบตเตอรี่อัตโนมัติเพื่อยืดอายุการใช้งาน'
          ],
          image: '/diagrams/Blog Diagrams/1.webp'
        },
        {
          title: 'ข้อดีของระบบออฟกริด',
          isAdvantages: true,
          content: [
            'ความเป็นอิสระทางพลังงาน 100% ไม่ต้องพึ่งพาโครงข่ายการไฟฟ้า',
            'เหมาะสำหรับพื้นที่ห่างไกลที่ระบบไฟฟ้าไม่สามารถเข้าถึงได้',
            'ไม่มีค่าไฟฟ้ารายเดือน ประหยัดค่าใช้จ่ายในระยะยาว',
            'ไม่ได้รับผลกระทบจากปัญหาไฟดับของโครงข่ายการไฟฟ้า',
            'เป็นมิตรกับสิ่งแวดล้อม ลดการปล่อยก๊าซเรือนกระจก',
            'สามารถขยายขนาดระบบได้ตามความต้องการในอนาคต'
          ]
        },
        {
          title: 'ข้อควรพิจารณา',
          isWarnings: true,
          content: [
            'ต้นทุนการลงทุนเริ่มต้นสูง เนื่องจากต้องใช้แบตเตอรี่ขนาดใหญ่และมีราคาแพง',
            'ต้องคำนวณและวางแผนการใช้ไฟฟ้าให้สอดคล้องกับขนาดระบบที่ติดตั้ง',
            'แบตเตอรี่มีอายุการใช้งาน 5-10 ปี ต้องมีการเปลี่ยนทดแทนเมื่อครบอายุการใช้งาน',
            'ในช่วงฤดูฝนที่มีแสงแดดน้อย อาจต้องจำกัดการใช้ไฟฟ้าหรือมีเครื่องกำเนิดไฟฟ้าสำรอง'
          ]
        },
        {
          title: 'เหมาะสำหรับใคร?',
          content: [
            '✓ บ้านพักอาศัยในพื้นที่ห่างไกลที่ระบบไฟฟ้าไม่สามารถเข้าถึงได้',
            '✓ บ้านสวน กระท่อม รีสอร์ท ที่ต้องการความเป็นอิสระทางพลังงาน',
            '✓ สถานีสูบน้ำ สถานีโทรคมนาคม ในพื้นที่ห่างไกล',
            '✓ ผู้ที่ต้องการความเป็นอิสระทางพลังงานและไม่ต้องการพึ่งพาโครงข่ายการไฟฟ้า',
            '✓ โครงการพัฒนาพลังงานทดแทนในพื้นที่ชนบทหรือเกาะแก่ง'
          ]
        },
        {
          title: 'ขนาดระบบที่แนะนำ',
          content: [
            'บ้านขนาดเล็ก (ใช้ไฟ 5-10 หน่วย/วัน): ระบบ 3-5 kW + แบตเตอรี่ 15-20 kWh',
            'บ้านขนาดกลาง (ใช้ไฟ 10-20 หน่วย/วัน): ระบบ 5-8 kW + แบตเตอรี่ 20-30 kWh',
            'บ้านขนาดใหญ่ (ใช้ไฟ 20+ หน่วย/วัน): ระบบ 8-15 kW + แบตเตอรี่ 30-50 kWh',
            '* ขนาดระบบและแบตเตอรี่ควรได้รับการออกแบบโดยผู้เชี่ยวชาญตามรูปแบบการใช้ไฟฟ้าจริง'
          ]
        }
      ]
    }
  };

  const blog = blogContent[slug];

  // Extract section titles for TOC (must be before conditional return)
  const tocItems = blog ? blog.sections.map((section, index) => ({
    id: `section-${index}`,
    title: section.title
  })) : [];

  // Track active section on scroll (must be before conditional return)
  useEffect(() => {
    if (!blog) return;

    const handleScroll = () => {
      const sections = blog.sections.map((_, index) => document.getElementById(`section-${index}`));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`section-${i}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [blog]);

  // Scroll to section handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
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
  const colorClasses = {
    orange: 'from-orange-500 to-red-500',
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Orange Header with Blog Title */}
      <div className="bg-gradient-to-r from-kb-orange via-orange-500 to-kb-orange mt-20 border-b border-orange-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Blog</h1>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/90">
              <button onClick={() => navigate('/')} className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                หน้าหลัก
              </button>
              <span>/</span>
              <button onClick={() => navigate('/#blog')} className="hover:text-white transition-colors">
                Blog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content - Editorial Layout */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Article Header */}
        <div className="max-w-[820px] mx-auto mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-kb-orange font-semibold text-sm uppercase tracking-wide">
              <Icon className="w-4 h-4" />
              {blog.badge} SYSTEM
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-kb-dark mb-6 leading-tight">
            {blog.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-6">
            {blog.subtitle}
          </p>
          
          {/* Author Credit */}
          <div className="flex flex-col gap-2 text-gray-500 text-sm border-t border-gray-200 pt-6 mt-6">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700">โดย Anuson Patthaisong</span>
            </div>
            <div className="text-gray-500">
              Solar Energy Specialist – KB Solar Energy
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-xs mt-1">
              <span>เผยแพร่ 12 มีนาคม 2025</span>
              <span>•</span>
              <span>อ่าน 5 นาที</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr_260px] gap-12">
          
          {/* Left Column - Table of Contents (220px, Sticky, Minimal) */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="py-4">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">สารบัญ</h3>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 text-sm transition-all border-l-2 ${
                        activeSection === item.id
                          ? 'border-kb-orange text-kb-orange font-medium'
                          : 'border-transparent text-gray-600 hover:text-kb-orange hover:border-gray-300'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Center Column - Main Article Content (1fr, max 820px) */}
          <div>
            <article className="max-w-[820px]">
              {blog.sections.map((section, index) => (
                <section
                  key={index}
                  id={`section-${index}`}
                  className={index > 0 ? 'mt-16 pt-16 border-t border-gray-200' : ''}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-kb-dark mb-8 leading-tight">
                    {section.title}
                  </h2>

                  {section.isList ? (
                    <div className="space-y-6">
                      {section.content.map((item, idx) => {
                        const parts = item.split(' - ');
                        const title = parts[0];
                        const description = parts[1] || '';
                        
                        return (
                          <div key={idx} className="space-y-2">
                            <h3 className="text-xl font-bold text-kb-dark">{title}</h3>
                            {description && (
                              <p className="text-gray-700 leading-relaxed text-lg">
                                {description}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : section.isAdvantages ? (
                    <div className="space-y-4">
                      {section.content.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-kb-orange flex-shrink-0 mt-2.5"></div>
                          <p className="text-gray-700 leading-relaxed text-lg flex-1">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : section.isWarnings ? (
                    <div className="space-y-4">
                      {section.content.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-600 flex-shrink-0 mt-2.5"></div>
                          <p className="text-gray-700 leading-relaxed text-lg flex-1">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {(() => {
                        const renderedIndices = new Set();
                        return section.content.map((paragraph, idx) => {
                          // Skip if already rendered as part of a table
                          if (renderedIndices.has(idx)) {
                            return null;
                          }

                          const isNote = typeof paragraph === 'string' && paragraph.startsWith('*');
                          const displayText = isNote ? paragraph.substring(1).trim() : paragraph;
                          
                          // Check if it's a table row (starts with |)
                          if (typeof paragraph === 'string' && paragraph.trim().startsWith('|')) {
                            // Skip the separator row (contains only dashes)
                            if (paragraph.includes('---')) {
                              renderedIndices.add(idx);
                              return null;
                            }
                            
                            // Check if this is the start of a table (not preceded by another table row)
                            const isTableStart = idx === 0 || 
                                                 !section.content[idx - 1] || 
                                                 typeof section.content[idx - 1] !== 'string' ||
                                                 !section.content[idx - 1].trim().startsWith('|');
                            
                            // Only render table if this is the start
                            if (isTableStart) {
                              // Collect all table rows
                              const tableRows = [];
                              let currentIdx = idx;
                              while (currentIdx < section.content.length && 
                                     typeof section.content[currentIdx] === 'string' && 
                                     section.content[currentIdx].trim().startsWith('|')) {
                                if (!section.content[currentIdx].includes('---')) {
                                  const rowCells = section.content[currentIdx].split('|').filter(cell => cell.trim() !== '');
                                  tableRows.push(rowCells);
                                }
                                renderedIndices.add(currentIdx);
                                currentIdx++;
                              }
                              
                              if (tableRows.length === 0) {
                                return null;
                              }
                              
                              return (
                                <div key={idx} className="my-8 overflow-x-auto">
                                  <table className="min-w-full border-collapse border border-gray-300">
                                    <thead className="bg-orange-50">
                                      <tr>
                                        {tableRows[0].map((cell, cellIdx) => (
                                          <th key={cellIdx} className="border border-gray-300 px-4 py-3 text-left font-bold text-kb-dark">
                                            {cell.trim()}
                                          </th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {tableRows.slice(1).map((row, rowIdx) => (
                                        <tr key={rowIdx} className="hover:bg-gray-50">
                                          {row.map((cell, cellIdx) => (
                                            <td key={cellIdx} className="border border-gray-300 px-4 py-3 text-gray-700">
                                              {cell.trim()}
                                            </td>
                                          ))}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              );
                            }
                            // Skip subsequent table rows as they're already rendered
                            return null;
                          }
                        
                        // Check if it's a list item (starts with ✓ or number)
                        if (typeof paragraph === 'string' && (paragraph.startsWith('✓') || /^\d+\./.test(paragraph))) {
                          return (
                            <p key={idx} className="text-gray-700 leading-relaxed text-lg pl-6">
                              {paragraph}
                            </p>
                          );
                        }
                        
                        return isNote ? (
                          <div key={idx} className="my-8 pl-6 border-l-4 border-blue-500 py-2">
                            <p className="text-gray-700 leading-relaxed text-base italic">
                              <strong className="text-blue-600">หมายเหตุ:</strong> {displayText}
                            </p>
                          </div>
                        ) : (
                          <p 
                            key={idx} 
                            className="text-gray-700 leading-relaxed text-lg"
                          >
                            {paragraph}
                          </p>
                        );
                      });
                      })()}
                      {section.image && (
                        <figure className="my-12">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-auto rounded-lg"
                          />
                        </figure>
                      )}
                    </div>
                  )}
                </section>
              ))}

              {/* Summary Section */}
              <section className="mt-16 pt-16 border-t border-gray-200">
                <div className="bg-orange-50 border-l-4 border-kb-orange p-8 rounded-r-lg">
                  <h3 className="text-2xl font-bold text-kb-dark mb-4">
                    สรุป
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    ระบบ {blog.badge} เหมาะสำหรับผู้ที่มีความต้องการดังต่อไปนี้:
                  </p>
                  <div className="space-y-2 text-gray-700 text-base">
                    {blog.sections.find(s => s.title.includes('เหมาะสำหรับ'))?.content.map((item, idx) => (
                      <p key={idx} className="leading-relaxed">{item}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* Bottom CTA */}
              <div className="mt-16 pt-16 border-t border-gray-200 text-center">
                <h3 className="text-2xl font-bold text-kb-dark mb-4">
                  พร้อมเริ่มต้นแล้วหรือยัง?
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  ปรึกษาฟรีกับทีมผู้เชี่ยวชาญของเรา เราพร้อมช่วยคุณออกแบบระบบที่เหมาะสมที่สุด
                </p>
                <button
                  onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                  className="bg-kb-orange text-white px-10 py-4 rounded-lg font-bold hover:bg-orange-600 transition-all inline-flex items-center gap-2 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  ติดต่อเราเลย
                </button>
              </div>
            </article>
          </div>

          {/* Right Column - CTA Sidebar (260px, Sticky, Minimal) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              {/* Main CTA */}
              <div className="border-l-4 border-kb-orange pl-6 py-4">
                <h3 className="text-lg font-bold text-kb-dark mb-3">สนใจติดตั้งระบบ?</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  ปรึกษาฟรี! ทีมงานมืออาชีพพร้อมให้คำแนะนำและประเมินราคา
                </p>
                <button
                  onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                  className="w-full bg-kb-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 mb-3"
                >
                  <Phone className="w-5 h-5" />
                  ติดต่อเรา
                </button>
                <button
                  onClick={() => navigate('/', { state: { scrollTo: 'calculator' } })}
                  className="w-full border-2 border-kb-orange text-kb-orange px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all flex items-center justify-center gap-2"
                >
                  <CalcIcon className="w-5 h-5" />
                  คำนวณค่าไฟ
                </button>
              </div>

              {/* Related Articles */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                  บทความอื่นๆ
                </h3>
                <div className="space-y-4">
                  {Object.entries(blogContent)
                    .filter(([key]) => key !== slug)
                    .map(([key, content]) => {
                      const RelatedIcon = content.icon;
                      return (
                        <button
                          key={key}
                          onClick={() => navigate(`/blog/${key}`)}
                          className="w-full text-left group"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses[content.color]} flex items-center justify-center flex-shrink-0`}>
                              <RelatedIcon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm text-kb-dark group-hover:text-kb-orange transition-colors line-clamp-2 leading-snug">
                                {content.title}
                              </h4>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* Back to Blog */}
              <div className="pt-8 border-t border-gray-200">
                <button
                  onClick={() => navigate('/#blog')}
                  className="w-full text-left text-kb-orange font-semibold text-sm hover:text-orange-600 transition-colors flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  กลับไปดูบทความอื่น
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
