import { useParams, useNavigate } from 'react-router-dom';
import { Battery, Grid, Zap, CheckCircle2, AlertCircle, ArrowLeft, Home, Phone, Calculator as CalcIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blogContent = {
    'hybrid-solar-system': {
      title: 'Hybrid Solar System ตอบโจทย์ทุกความต้องการ',
      subtitle: 'ระบบที่ให้คุณทั้งประหยัดและมีไฟสำรอง',
      icon: Battery,
      color: 'orange',
      badge: 'Hybrid',
      image: '/Blog/hrbrid.png',
      sections: [
        {
          title: 'ระบบโซล่าเซลล์แบบไฮบริดจ์ (Hybrid Solar System)',
          content: [
            'ระบบโซล่าเซลล์แบบไฮบริดจ์ (Hybrid Solar System) คือการผสมผสานจุดเด่นของระบบออนกริด (On-Grid) และออฟกริด (Off-Grid) เข้าด้วยกัน โดยระบบนี้จะเชื่อมต่อกับทั้งแผงโซลาร์เซลล์ (Solar Panel) โครงข่ายไฟฟ้าจากการไฟฟ้า (Grid) และแบตเตอรี่สำรองไฟ (Battery Storage) ทำงานร่วมกันอย่างลงตัว',
            'หลักการทำงานของระบบไฮบริดจ์เริ่มต้นจากช่วงเวลากลางวัน แผงโซลาร์เซลล์จะผลิตไฟฟ้าเพื่อจ่ายให้กับเครื่องใช้ไฟฟ้าภายในอาคารเป็นอันดับแรก หากมีไฟฟ้าผลิตได้เกินความต้องการใช้งาน ระบบจะนำไฟฟ้าส่วนเกินไปชาร์จแบตเตอรี่เพื่อเก็บสำรองไว้ใช้ในยามค่ำคืน และหากยังมีไฟฟ้าเหลือจากการชาร์จแบตเตอรี่เต็มแล้ว ก็จะส่งคืนให้กับการไฟฟ้าตามระบบ Net Metering',
            'เมื่อถึงช่วงเวลากลางคืนหรือช่วงที่ไม่มีแสงแดด ระบบจะดึงพลังงานจากแบตเตอรี่ที่กักเก็บไว้มาใช้งานก่อนเป็นอันดับแรก เพื่อประหยัดค่าไฟฟ้าสูงสุด และเมื่อพลังงานในแบตเตอรี่หมดลง ระบบจะสลับไปใช้ไฟฟ้าจากการไฟฟ้าโดยอัตโนมัติอย่างไร้รอยต่อ ทำให้มั่นใจได้ว่าจะมีไฟฟ้าใช้งานตลอดเวลา',
            'ระบบไฮบริดจ์เหมาะสำหรับผู้ที่ต้องการลดค่าไฟฟ้าได้สูงสุดทั้งกลางวันและกลางคืน พร้อมทั้งมีไฟสำรองใช้ในกรณีไฟดับ อย่างไรก็ตาม ระบบนี้มีต้นทุนการลงทุนเริ่มต้นที่ค่อนข้างสูงเนื่องจากต้องติดตั้งแบตเตอรี่ ซึ่งมีราคาแพงและมีอายุการใช้งานประมาณ 5-10 ปี จึงต้องมีการเปลี่ยนทดแทนในอนาคต ดังนั้นควรพิจารณาคำนวณผลตอบแทนการลงทุนอย่างรอบคอบก่อนตัดสินใจติดตั้ง'
          ]
        },
        {
          title: 'ส่วนประกอบหลักของระบบ',
          isList: true,
          content: [
            'แผงโซลาร์เซลล์ (Solar Panels) - แปลงพลังงานแสงอาทิตย์เป็นไฟฟ้ากระแสตรง',
            'อินเวอร์เตอร์แบบไฮบริด (Hybrid Inverter) - แปลงไฟ DC เป็น AC และบริหารจัดการพลังงานอัจฉริยะ',
            'แบตเตอรี่สำรองไฟ (Battery Storage) - กักเก็บพลังงานไฟฟ้าสำหรับใช้งานยามค่ำคืนและเมื่อไฟดับ',
            'ระบบควบคุมอัจฉริยะ (Smart Energy Management System) - บริหารจัดการการไหลของพลังงานอัตโนมัติ',
            'มิเตอร์วัดพลังงานแบบสองทาง (Bi-directional Energy Meter) - ติดตามและบันทึกการผลิตและใช้พลังงาน'
          ]
        },
        {
          title: 'หลักการทำงานของระบบ',
          content: [
            '1. โหมดกลางวัน: แผงโซลาร์เซลล์ผลิตไฟฟ้าจ่ายให้เครื่องใช้ไฟฟ้าภายในอาคาร พลังงานส่วนเกินจะชาร์จแบตเตอรี่ และหากยังเหลือจะส่งคืนการไฟฟ้าตามระบบ Net Metering',
            '2. โหมดกลางคืน: ระบบดึงพลังงานจากแบตเตอรี่มาใช้งานก่อนเพื่อประหยัดค่าไฟ เมื่อแบตเตอรี่หมดจึงสลับไปใช้ไฟจากการไฟฟ้าโดยอัตโนมัติ',
            '3. โหมดไฟดับ: ระบบสลับไปใช้พลังงานจากแบตเตอรี่ทันทีภายใน 10-20 มิลลิวินาที รับประกันการจ่ายไฟต่อเนื่องไม่สะดุด',
            '4. โหมดอัจฉริยะ: ระบบบริหารจัดการพลังงานอัตโนมัติ เลือกใช้แหล่งพลังงานที่ประหยัดและมีประสิทธิภาพสูงสุดในแต่ละช่วงเวลา'
          ],
          image: '/diagrams/Blog Diagrams/3.png'
        },
        {
          title: 'ข้อดีของระบบไฮบริด',
          isAdvantages: true,
          content: [
            'ประหยัดค่าไฟฟ้าสูงสุดถึง 80-90% ลดค่าใช้จ่ายได้อย่างมีนัยสำคัญ',
            'มีระบบสำรองไฟฟ้าตลอด 24 ชั่วโมง ไม่ต้องกังวลเรื่องไฟดับ',
            'สามารถขายไฟฟ้าคืนการไฟฟ้าได้ตามระบบ Net Metering สร้างรายได้เสริม',
            'ระบบบริหารจัดการพลังงานอัจฉริยะ ทำงานอัตโนมัติเต็มรูปแบบ',
            'ลดการปล่อยก๊าซคาร์บอนไดออกไซด์ เป็นมิตรต่อสิ่งแวดล้อม',
            'เพิ่มมูลค่าและความน่าสนใจให้กับอสังหาริมทรัพย์',
            'ระยะเวลาคืนทุนเร็ว ประมาณ 4-6 ปี'
          ]
        },
        {
          title: 'ข้อควรพิจารณา',
          isWarnings: true,
          content: [
            'ต้นทุนการลงทุนเริ่มต้นสูงกว่าระบบออนกริดธรรมดา เนื่องจากต้องติดตั้งแบตเตอรี่',
            'ต้องจัดเตรียมพื้นที่เหมาะสมสำหรับติดตั้งแบตเตอรี่ โดยต้องมีการระบายอากาศที่ดี',
            'แบตเตอรี่มีอายุการใช้งาน 5-10 ปี ต้องมีการเปลี่ยนทดแทนเมื่อครบอายุการใช้งาน',
            'ต้องมีการบำรุงรักษาและตรวจสอบสภาพระบบเป็นประจำเพื่อประสิทธิภาพสูงสุด'
          ]
        },
        {
          title: 'เหมาะสำหรับใคร?',
          content: [
            '✓ บ้านพักอาศัยที่ต้องการความมั่นคงและเสถียรภาพด้านไฟฟ้าสูงสุด',
            '✓ พื้นที่ที่มีปัญหาไฟฟ้าขัดข้องหรือไฟดับบ่อยครั้ง',
            '✓ ธุรกิจที่ต้องการความต่อเนื่องในการดำเนินงาน ไม่สามารถหยุดชะงักได้',
            '✓ สถานพยาบาล คลินิก ศูนย์ดูแลสุขภาพ ที่ต้องการระบบสำรองไฟฟ้าที่เชื่อถือได้',
            '✓ ผู้ที่ต้องการลดค่าใช้จ่ายด้านไฟฟ้าและมีระบบสำรองไฟฟ้าพร้อมใช้งานตลอดเวลา'
          ]
        },
        {
          title: 'ขนาดระบบที่แนะนำ',
          content: [
            'บ้านขนาดเล็ก (ค่าไฟ 2,000-3,000 บาท/เดือน): ระบบ 3-5 kW + แบตเตอรี่ 10-15 kWh',
            'บ้านขนาดกลาง (ค่าไฟ 4,000-6,000 บาท/เดือน): ระบบ 5-8 kW + แบตเตอรี่ 15-20 kWh',
            'บ้านขนาดใหญ่ (ค่าไฟ 7,000+ บาท/เดือน): ระบบ 8-15 kW + แบตเตอรี่ 20-30 kWh',
            '* ขนาดระบบที่เหมาะสมควรได้รับการประเมินโดยผู้เชี่ยวชาญตามการใช้ไฟฟ้าจริงของแต่ละครัวเรือน'
          ]
        }
      ]
    },
    'on-grid-solar-system': {
      title: 'ทำไม On-Grid ถึงเป็นตัวเลือกอันดับ 1 ของคนไทย',
      subtitle: 'ประหยัดสูงสุด คืนทุนเร็วที่สุด',
      icon: Grid,
      color: 'blue',
      badge: 'On-Grid',
      image: '/Blog/0n-grid.png',
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
          image: '/diagrams/Blog Diagrams/2.png'
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
      image: '/Blog/off-grid.png',
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
          image: '/diagrams/Blog Diagrams/1.png'
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
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-kb-orange transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              หน้าหลัก
            </button>
            <span>/</span>
            <button onClick={() => navigate('/#blog')} className="hover:text-kb-orange transition-colors">
              Blog
            </button>
            <span>/</span>
            <span className="text-kb-orange font-medium">{blog.title}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className={`bg-gradient-to-br ${colorClasses[blog.color]} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full font-bold text-sm mb-6 border border-white/30">
            <Icon className="w-5 h-5" />
            {blog.badge} SYSTEM
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {blog.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/95 drop-shadow">
            {blog.subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Single Content Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* All Sections in One Card */}
              <div className="p-8 sm:p-10">
                {blog.sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={index > 0 ? 'mt-8' : ''}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-1.5 h-8 bg-gradient-to-b ${colorClasses[blog.color]} rounded-full`}></div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-kb-dark">
                        {section.title}
                      </h2>
                    </div>

                    {section.isList ? (
                      <ul className="space-y-4 ml-6">
                        {section.content.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-4 text-gray-700 leading-relaxed text-base">
                            <CheckCircle2 className="w-6 h-6 text-kb-orange flex-shrink-0 mt-0.5" />
                            <span className="text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : section.isAdvantages ? (
                      <div className="grid sm:grid-cols-2 gap-4 ml-6">
                        {section.content.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors">
                            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-800 text-base leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    ) : section.isWarnings ? (
                      <div className="space-y-4 ml-6">
                        {section.content.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors">
                            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-800 text-base leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {section.content.map((paragraph, idx) => {
                          // Check if paragraph starts with *
                          const isNote = typeof paragraph === 'string' && paragraph.startsWith('*');
                          const displayText = isNote ? paragraph.substring(1).trim() : paragraph;
                          
                          return isNote ? (
                            <div key={idx} className="flex items-start gap-3 mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">i</span>
                              </div>
                              <p className="text-gray-700 leading-loose text-sm sm:text-base flex-1">
                                {displayText}
                              </p>
                            </div>
                          ) : (
                            <p 
                              key={idx} 
                              className="text-gray-700 leading-loose text-base sm:text-lg text-justify mb-4"
                            >
                              {paragraph}
                            </p>
                          );
                        })}
                        {section.image && (
                          <div className="my-8 bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg overflow-hidden">
                            <img
                              src={process.env.PUBLIC_URL + section.image}
                              alt={section.title}
                              className="w-full h-auto rounded-xl"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA Card */}
              <div className={`bg-gradient-to-br ${colorClasses[blog.color]} rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3">สนใจติดตั้งระบบ?</h3>
                  <p className="text-white/95 mb-6 text-sm leading-relaxed">
                    ปรึกษาฟรี! ทีมงานมืออาชีพพร้อมให้คำแนะนำและประเมินราคาให้คุณ
                  </p>
                  <button
                    onClick={() => {
                      navigate('/', { state: { scrollTo: 'contact' } });
                    }}
                    className="w-full bg-white text-kb-orange px-6 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 mb-3 shadow-lg hover:shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    ติดต่อเรา
                  </button>
                  <button
                    onClick={() => {
                      navigate('/', { state: { scrollTo: 'calculator' } });
                    }}
                    className="w-full bg-white/20 backdrop-blur text-white px-6 py-3.5 rounded-xl font-bold hover:bg-white/30 transition-all border-2 border-white/50 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <CalcIcon className="w-5 h-5" />
                    คำนวณค่าไฟ
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border-2 border-gray-200 p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-10 bg-gradient-to-b from-kb-orange to-orange-600 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-kb-dark">
                    บทความอื่นๆ
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 ml-6">
                  เรียนรู้เพิ่มเติมเกี่ยวกับระบบโซล่าเซลล์แต่ละประเภท
                </p>
                <div className="space-y-4">
                  {Object.entries(blogContent)
                    .filter(([key]) => key !== slug)
                    .map(([key, content]) => {
                      const RelatedIcon = content.icon;
                      return (
                        <button
                          key={key}
                          onClick={() => navigate(`/blog/${key}`)}
                          className="w-full text-left p-5 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-white hover:to-gray-50 transition-all border-2 border-gray-200 hover:border-kb-orange hover:shadow-lg group relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-kb-orange/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="flex items-center gap-4 relative z-10">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[content.color]} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                              <RelatedIcon className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${colorClasses[content.color]} text-white`}>
                                  {content.badge}
                                </span>
                              </div>
                              <h4 className="font-bold text-base text-kb-dark group-hover:text-kb-orange transition-colors line-clamp-2 mb-1">
                                {content.title}
                              </h4>
                              <p className="text-xs text-gray-500 line-clamp-1">{content.subtitle}</p>
                            </div>
                            <svg 
                              className="w-6 h-6 text-gray-400 group-hover:text-kb-orange group-hover:translate-x-1 transition-all flex-shrink-0" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* Back to Blog */}
              <button
                onClick={() => navigate('/#blog')}
                className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-4 hover:border-kb-orange transition-all flex items-center justify-center gap-2 text-kb-orange font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                กลับไปดูบทความอื่น
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
