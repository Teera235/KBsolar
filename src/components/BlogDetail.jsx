import { useParams, useNavigate } from 'react-router-dom';
import { Battery, Grid, Zap, ArrowLeft, Home, Phone, Calculator as CalcIcon } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { useLang } from '../i18n';

// Each article keeps shared fields (icon, color, badge, image) at the top level
// and its text per language under `th` / `en` with the same structure.
const blogContent = {
    'hybrid-solar-system': {
      icon: Battery,
      color: 'orange',
      badge: 'Hybrid',
      image: '/Blog/hrbrid.webp',
      th: {
      title: 'ระบบโซลาร์เซลล์แบบไฮบริด (Hybrid Solar System)',
      subtitle: 'ใช้ไฟโซลาร์ได้ทั้งกลางวัน-กลางคืน พร้อมแบตเตอรี่สำรองไฟเมื่อไฟดับ',
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
      en: {
      title: 'Hybrid Solar System',
      subtitle: 'Use solar power day and night, with battery backup when the grid goes down',
      sections: [
        {
          title: 'Introduction',
          content: [
            'A Hybrid Solar System is the choice for people who want to "cut their power bill" and also have "reliable electricity". It combines solar panels, the utility grid and battery storage in one system, so you can use the energy produced during the day and store some of it for the evening or for power outages.',
            'This article explains how the system works, its main components, its advantages and trade-offs, and how to choose the right battery and system size for real-world use.'
          ]
        },
        {
          title: 'What Is a Hybrid Solar System?',
          content: [
            'A Hybrid Solar System generates electricity from sunlight and is connected to both the grid and a battery. The Hybrid Inverter is the heart of the system: it converts power and automatically manages the energy flow.',
            'How it works in general: during the day, solar power supplies your loads first → any surplus charges the battery → once the battery is full, power may be exported to the grid (depending on policy and settings). At night, the system draws from the battery first → when the battery drops below the set level, it switches to grid power.'
          ]
        },
        {
          title: 'Main System Components',
          isList: true,
          content: [
            'Solar Panels - Produce direct current (DC) electricity from sunlight. Monocrystalline panels with 18-23% efficiency are the most common choice.',
            'Hybrid Inverter - Converts DC to AC, controls battery charging and discharging, and sets the operating mode, such as Self-consumption, Backup or Time-of-Use (TOU).',
            'Battery Storage - Stores electricity for use at night or during outages. Usually lithium (LFP/NMC), with capacity measured in kWh.',
            'Smart Energy Management / CT / Meter - Current and energy measuring devices (such as a CT Clamp or Smart Meter) that tell the system how much your loads are using, so it can manage energy correctly.',
            'Protection System - Surge protection, breakers/isolators and battery safety measures.'
          ]
        },
        {
          title: 'How the System Works',
          content: [
            '1. Daytime Mode: Solar → Load (supplies loads first) → surplus solar → Battery (charging) → when the battery is full → export to the grid (depending on settings and conditions)',
            '2. Night Mode: Battery → Load (supplies loads first) → when the battery falls below the set SOC → Grid → Load',
            '3. Backup Mode (power outage): when the grid goes down, the system can keep "essential circuits" running through Backup/Essential Loads (as designed) by switching to the battery. This depends on the inverter model and how the circuits are wired.',
            '4. Energy Optimization Mode: the system can be set up around how you use electricity, for example charging the battery from solar for use when power rates are high, limiting discharge to extend battery life, or prioritizing self-consumption to buy less power from the grid.'
          ],
          image: '/diagrams/Blog Diagrams/3.webp'
        },
        {
          title: 'Advantages of a Hybrid System',
          isAdvantages: true,
          content: [
            'Backup power during outages, ideal for homes and businesses that need continuity',
            'Lower power bills day and night, as the battery reduces grid purchases when there is no sun',
            'Flexible energy control with several modes (Self-consumption / Backup / TOU)',
            'Greater energy security, with less impact from voltage drops and surges (depending on system design)',
            'Ready for future expansion: add batteries or panels later (within the inverter specifications)'
          ]
        },
        {
          title: 'Things to Consider',
          isWarnings: true,
          content: [
            'Higher cost than On-Grid because of the battery and energy management equipment',
            'Batteries have a limited lifespan, which should be assessed by charge cycles and operating conditions',
            'The backup circuit must be designed correctly, with a clear split between backed-up and non-backed-up loads',
            'You need space for the battery and must consider heat, ventilation and safety'
          ]
        },
        {
          title: 'Who Is It For?',
          content: [
            '✓ Homes with frequent outages or critical equipment (internet, cameras, refrigerator, water pump)',
            '✓ Businesses that cannot stop, such as shops, home offices and small clinics',
            '✓ People who want to get full value from solar power "after sunset"',
            '✓ Areas that need highly stable electricity'
          ]
        },
        {
          title: 'Recommended System Sizes',
          content: [
            'Note: the actual size depends on your essential loads, the backup hours you need and how you use electricity.',
            '• Small home (power bill 2,000-3,000 THB/month): 3-5 kW system + 5-10 kWh battery (if you want to back up essential loads)',
            '• Medium home (power bill 4,000-6,000 THB/month): 5-8 kW system + 10-15 kWh battery',
            '• Large home (power bill 7,000+ THB/month): 8-15 kW system + 15-30 kWh battery'
          ]
        },
        {
          title: 'On-Grid vs Hybrid vs Off-Grid',
          content: [
            'To help you choose the system that fits your needs, the table below compares all three types:',
            '| Feature | On-Grid | Hybrid | Off-Grid |',
            '|----------|---------|--------|----------|',
            '| Grid connection | ✓ | ✓ | ✗ |',
            '| Battery | ✗ | ✓ | ✓ |',
            '| Backup during outages | ✗ | ✓* | ✓ |',
            '| Upfront cost | Lowest | High | Highest |',
            '| System complexity | Low | Medium-High | High |',
            '| Best for | Lower bills | Lower bills + backup | No grid access |',
            '* Depends on the inverter model and the backup circuit design'
          ]
        },
        {
          title: 'Frequently Asked Questions (FAQ)',
          content: [
            'Q: What is the difference between Hybrid and On-Grid?',
            'A: Hybrid has a battery and can provide backup power (as designed). On-Grid has no battery and stops working when the grid goes down.',
            'Q: How many kWh of battery should I choose?',
            'A: Look at your "essential load (kW)" and the "hours of backup you need". For example, backing up 1 kW for 5 hours needs about 5 kWh (before allowing for losses and DoD).',
            'Q: Does Hybrid take longer to pay back than On-Grid?',
            'A: Generally yes, because of the battery cost, but in return you get more reliable power and can use solar energy at night.'
          ]
        },
        {
          title: 'Summary',
          content: [
            'A Hybrid Solar System suits people who want to "cut their power bill" and "have backup power" in one system, especially in areas with frequent outages or critical loads. You still need to assess your budget and design the backup circuit correctly so the system performs well and is truly worth the investment.'
          ]
        }
      ]
      }
    },
    'on-grid-solar-system': {
      icon: Grid,
      color: 'blue',
      badge: 'On-Grid',
      image: '/Blog/0n-grid.webp',
      th: {
      title: 'ระบบโซลาร์เซลล์แบบออนกริด (On-Grid Solar System)',
      subtitle: 'ทำไมถึงเป็นตัวเลือกอันดับ 1 ของคนไทย - ประหยัดสูงสุด คืนทุนเร็วที่สุด',
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
      en: {
      title: 'On-Grid Solar System',
      subtitle: 'Why it is the No. 1 choice in Thailand - the biggest savings and the fastest payback',
      sections: [
        {
          title: 'On-Grid Solar System',
          content: [
            'An On-Grid Solar System generates electricity from sunlight and connects directly to the utility grid, with no battery for energy storage. Solar panels convert sunlight into direct current (DC), which an inverter then converts into alternating current (AC) for use in your home or building.',
            'During the day, when there is sunlight, the solar panels first supply the electrical appliances in the building. If the system produces more power than you need, the surplus is sent back to the grid (feed-in) under a Net Metering scheme, which helps reduce your monthly electricity bill.',
            'When the system does not produce enough power, or at night when there is no sunlight, it automatically draws electricity from the grid as usual, so you always have a continuous power supply.',
            'On-Grid is the most popular type of system today because it has many advantages: lower installation cost than other systems since there is no expensive battery to buy, simple and low-cost maintenance, high generation efficiency, and the ability to sell surplus electricity back to the utility. This lets users cut their electricity costs effectively, with an average payback period of about 3-5 years, depending on system size and electricity usage.'
          ]
        },
        {
          title: 'Main System Components',
          isList: true,
          content: [
            'Solar Panels - Convert sunlight into direct current electricity',
            'Grid-Tie Inverter - Converts DC to AC and synchronizes with the utility grid',
            'Bi-directional Meter - Measures and records the electricity you use and export',
            'Protection System - Protects against surges and electrical faults',
            'Mounting Structure - Supports and secures the solar panels firmly'
          ]
        },
        {
          title: 'How the System Works',
          content: [
            '1. Daytime mode: the solar panels supply the appliances in the building first, and surplus energy is automatically sent back to the grid.',
            '2. Night mode: the system draws electricity from the grid as usual.',
            '3. Power outage mode: the system shuts down immediately to protect line maintenance workers (Anti-Islanding Protection).',
            '4. Net Metering: offsets the energy you use against the energy you produce to reduce your monthly electricity bill.'
          ],
          image: '/diagrams/Blog Diagrams/2.webp'
        },
        {
          title: 'Advantages of an On-Grid System',
          isAdvantages: true,
          content: [
            'Save up to 80-95% on electricity and cut costs effectively',
            'The lowest upfront investment, since no battery is needed',
            'Sell electricity back to the utility under Net Metering for extra income',
            'Easy maintenance, with few components and low upkeep costs',
            'The fastest payback, in just 3-5 years',
            'High generation efficiency, with no energy lost to battery charging',
            'Long service life of 25-30 years, backed by manufacturer warranties'
          ]
        },
        {
          title: 'Things to Consider',
          isWarnings: true,
          content: [
            'No backup power during outages: the system shuts down immediately for safety',
            'Requires a stable, good-quality grid supply at the installation site',
            'Requires permits and an inspection by the utility before it can be used',
            'Output depends on the amount and quality of sunlight each day'
          ]
        },
        {
          title: 'Who Is It For?',
          content: [
            '✓ Homes with high electricity bills that want to cut costs',
            '✓ Factories that mainly use electricity during the day',
            '✓ Commercial buildings, shops and offices that open during the day',
            '✓ Schools, hospitals and government agencies',
            '✓ Anyone who wants to cut their power bill with the fastest payback and does not need backup power'
          ]
        },
        {
          title: 'Recommended System Sizes',
          content: [
            'Small home (power bill 2,000-3,000 THB/month): 3-5 kW system',
            'Medium home (power bill 4,000-6,000 THB/month): 5-8 kW system',
            'Large home (power bill 7,000+ THB/month): 8-15 kW system',
            'Small to medium factory: 30-100 kW system',
            '* The right system size should be assessed by a specialist based on each site\'s actual electricity use'
          ]
        }
      ]
      }
    },
    'off-grid-solar-system': {
      icon: Zap,
      color: 'green',
      badge: 'Off-Grid',
      image: '/Blog/off-grid.webp',
      th: {
      title: 'Off-Grid คือคำตอบสำหรับความเป็นอิสระ',
      subtitle: 'อิสระเต็มที่ ไม่ต้องพึ่งการไฟฟ้า',
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
      },
      en: {
      title: 'Off-Grid: The Answer for Energy Independence',
      subtitle: 'Fully independent, no need to rely on the utility',
      sections: [
        {
          title: 'Off-Grid Solar System',
          content: [
            'An Off-Grid Solar System generates electricity from sunlight and runs completely independently, with no connection to the utility grid at all. It is designed to produce, store and supply its own electricity 24 hours a day, using batteries to store the power produced during the day for use at night or when there is no sunlight.',
            'Solar panels collect sunlight and convert it into direct current (DC). The power then passes through a Charge Controller, which manages battery charging and prevents overcharging or over-discharging to extend battery life.',
            'The electricity stored in the batteries is converted into alternating current (AC) by an inverter to power the appliances in your home or building. The system runs continuously around the clock, using solar energy during the day and stored battery power at night.',
            'Off-Grid systems are ideal for remote areas without access to the utility grid, such as rural homes, farmhouses, mountain cabins, islands or water pumping stations on farms. They also suit people who want energy independence and do not want to rely on the utility.',
            'Although the upfront cost is higher than an On-Grid system because of the large battery bank, it saves a great deal on electricity in the long run, since there is no monthly power bill at all. It is also environmentally friendly, reducing greenhouse gas emissions and helping keep our planet sustainable.'
          ]
        },
        {
          title: 'Main System Components',
          isList: true,
          content: [
            'Solar Panels - Convert sunlight into direct current electricity',
            'Off-Grid Inverter - Converts DC from the batteries into AC for your appliances',
            'Battery Bank - Stores electricity for use around the clock',
            'Charge Controller - Manages battery charging and discharging efficiently',
            'Protection System - Protects the batteries from overcharging and over-discharging'
          ]
        },
        {
          title: 'How the System Works',
          content: [
            '1. Daytime mode: the solar panels power the appliances in the building and charge the batteries for use at night.',
            '2. Night mode: the system draws on the stored battery energy to keep running.',
            '3. Rainy day mode: the system uses backup energy stored in the batteries on sunny days.',
            '4. Smart management: automatically controls battery charging and discharging to extend battery life.'
          ],
          image: '/diagrams/Blog Diagrams/1.webp'
        },
        {
          title: 'Advantages of an Off-Grid System',
          isAdvantages: true,
          content: [
            '100% energy independence, with no reliance on the utility grid',
            'Ideal for remote areas the grid cannot reach',
            'No monthly electricity bill, saving money in the long run',
            'Unaffected by grid power outages',
            'Environmentally friendly, reducing greenhouse gas emissions',
            'The system can be expanded to meet future needs'
          ]
        },
        {
          title: 'Things to Consider',
          isWarnings: true,
          content: [
            'High upfront investment, since large batteries are needed and they are expensive',
            'Electricity use must be calculated and planned to match the installed system size',
            'Batteries last 5-10 years and must be replaced at the end of their life',
            'In the rainy season with little sunlight, you may need to limit power use or have a backup generator'
          ]
        },
        {
          title: 'Who Is It For?',
          content: [
            '✓ Homes in remote areas the grid cannot reach',
            '✓ Farmhouses, cabins and resorts that want energy independence',
            '✓ Water pumping stations and telecom stations in remote areas',
            '✓ Anyone who wants energy independence without relying on the utility grid',
            '✓ Renewable energy projects in rural areas or on islands'
          ]
        },
        {
          title: 'Recommended System Sizes',
          content: [
            'Small home (uses 5-10 kWh/day): 3-5 kW system + 15-20 kWh battery',
            'Medium home (uses 10-20 kWh/day): 5-8 kW system + 20-30 kWh battery',
            'Large home (uses 20+ kWh/day): 8-15 kW system + 30-50 kWh battery',
            '* System and battery size should be designed by a specialist based on your actual electricity use'
          ]
        }
      ]
      }
    }
  };

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const { t, lang } = useLang();

  const article = blogContent[slug];
  const blog = useMemo(
    () => (article ? { ...article, ...(article[lang] || article.th) } : undefined),
    [article, lang]
  );

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
          <h1 className="text-4xl font-bold text-kb-dark mb-4">{t('ไม่พบบทความ', 'Article not found')}</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-kb-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-kb-orange-dark transition-all"
          >
            {t('กลับหน้าหลัก', 'Back to Home')}
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
            <h1 className="text-2xl sm:text-3xl font-bold text-white">{t('บทความ', 'Blog')}</h1>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/90">
              <button onClick={() => navigate('/')} className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                {t('หน้าหลัก', 'Home')}
              </button>
              <span>/</span>
              <button onClick={() => navigate('/#blog')} className="hover:text-white transition-colors">
                {t('บทความ', 'Blog')}
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
              {t(`ระบบ ${blog.badge}`, `${blog.badge} SYSTEM`)}
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
              <span className="font-medium text-gray-700">{t('โดย Anuson Patthaisong', 'By Anuson Patthaisong')}</span>
            </div>
            <div className="text-gray-500">
              {t('ผู้เชี่ยวชาญด้านพลังงานแสงอาทิตย์ – KB Solar Energy', 'Solar Energy Specialist – KB Solar Energy')}
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-xs mt-1">
              <span>{t('เผยแพร่ 12 มีนาคม 2025', 'Published March 12, 2025')}</span>
              <span>•</span>
              <span>{t('อ่าน 5 นาที', '5 min read')}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr_260px] gap-12">
          
          {/* Left Column - Table of Contents (220px, Sticky, Minimal) */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="py-4">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">{t('สารบัญ', 'Contents')}</h3>
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
                              <strong className="text-blue-600">{t('หมายเหตุ:', 'Note:')}</strong> {displayText}
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
                    {t('สรุป', 'Summary')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    {t(`ระบบ ${blog.badge} เหมาะสำหรับผู้ที่มีความต้องการดังต่อไปนี้:`, `A ${blog.badge} system is a good fit if you are:`)}
                  </p>
                  <div className="space-y-2 text-gray-700 text-base">
                    {blog.sections.find(s => s.title.includes(t('เหมาะสำหรับ', 'Who Is It For')))?.content.map((item, idx) => (
                      <p key={idx} className="leading-relaxed">{item}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* Bottom CTA */}
              <div className="mt-16 pt-16 border-t border-gray-200 text-center">
                <h3 className="text-2xl font-bold text-kb-dark mb-4">
                  {t('พร้อมเริ่มต้นแล้วหรือยัง?', 'Ready to get started?')}
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  {t('ปรึกษาฟรีกับทีมผู้เชี่ยวชาญของเรา เราพร้อมช่วยคุณออกแบบระบบที่เหมาะสมที่สุด', 'Get a free consultation with our specialists. We will help you design the system that suits you best.')}
                </p>
                <button
                  onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                  className="bg-kb-orange text-white px-10 py-4 rounded-lg font-bold hover:bg-orange-600 transition-all inline-flex items-center gap-2 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  {t('ติดต่อเราเลย', 'Contact Us Now')}
                </button>
              </div>
            </article>
          </div>

          {/* Right Column - CTA Sidebar (260px, Sticky, Minimal) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              {/* Main CTA */}
              <div className="border-l-4 border-kb-orange pl-6 py-4">
                <h3 className="text-lg font-bold text-kb-dark mb-3">{t('สนใจติดตั้งระบบ?', 'Interested in a system?')}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {t('ปรึกษาฟรี! ทีมงานมืออาชีพพร้อมให้คำแนะนำและประเมินราคา', 'Free consultation! Our professional team is ready to advise you and give you a quote.')}
                </p>
                <button
                  onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                  className="w-full bg-kb-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 mb-3"
                >
                  <Phone className="w-5 h-5" />
                  {t('ติดต่อเรา', 'Contact Us')}
                </button>
                <button
                  onClick={() => navigate('/', { state: { scrollTo: 'calculator' } })}
                  className="w-full border-2 border-kb-orange text-kb-orange px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all flex items-center justify-center gap-2"
                >
                  <CalcIcon className="w-5 h-5" />
                  {t('คำนวณค่าไฟ', 'Electricity Calculator')}
                </button>
              </div>

              {/* Related Articles */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                  {t('บทความอื่นๆ', 'Other Articles')}
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
                                {(content[lang] || content.th).title}
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
                  {t('กลับไปดูบทความอื่น', 'Back to all articles')}
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
