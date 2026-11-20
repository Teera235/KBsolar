import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube, ExternalLink } from 'lucide-react';
import { useLang } from '../i18n';
import { SectionHeading } from './ui';

const YouTubeVideos = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const { t } = useLang();

  const videos = [
    {
      id: 'se8wBI5BoBA',
      title: t('ธุรกิจไม่สะดุด! รีวิว Solis 50kW + แบต High Volt', 'Keep your business running! Solis 50kW + High Volt battery review'),
      description: t('สำรองไฟโรงแรม อพาร์ทเม้นท์ ชั้น 1 ไฟดับก็ยังรอด', 'Backup power for a hotel and apartment ground floor that keeps going through outages'),
      tag: t('เชิงพาณิชย์', 'Commercial'),
      tagColor: 'bg-blue-500'
    },
    {
      id: 'qjJBaqn_HtI',
      title: t('รีวิว Solis 8kW จับคู่แบต BYD และแผง Aiko', 'Review: Solis 8kW paired with a BYD battery and Aiko panels'),
      description: t('ชาร์จรถ EV ได้ คืนทุนไวใน 5 ปี', 'Charges an EV, pays back in 5 years'),
      tag: t('บ้านพักอาศัย', 'Residential'),
      tagColor: 'bg-green-500'
    },
    {
      id: 'BPPscTnZMig',
      title: t('Sigenergy 10kW 1P สลับไฟ 0 วินาที', 'Sigenergy 10kW 1P with 0-second switchover'),
      description: t('ทำงานร่วมกับ On-Grid เดิม ไฟดับ ไฟตก ช่วยได้ 100%', 'Works with an existing On-Grid system and fully covers outages and voltage drops'),
      tag: 'Hybrid',
      tagColor: 'bg-purple-500'
    },
    {
      id: 'LDH-_5_Przw',
      title: t('Sigenergy เจาะลึก 3 โหมดชาร์จ V2X', 'Sigenergy deep dive: 3 V2X charging modes'),
      description: t('ดึงไฟรถมาใช้ในบ้าน ภัยธรรมชาติเข้า ไฟดับก็รอด!', 'Power your home from your car and get through outages and natural disasters!'),
      tag: t('ชาร์จ EV', 'EV Charger'),
      tagColor: 'bg-amber-500'
    },
    {
      id: 'zzCjIS6j8WM',
      title: t('ATMOCE ติดตั้งกับอะไรก็ได้!', 'ATMOCE installs with almost anything!'),
      description: t('ทำ On-Grid เดิมๆ ให้เป็น Hybrid สำรองไฟเวลาไฟดับ', 'Turn an existing On-Grid system into a Hybrid with backup power during outages'),
      tag: t('อัปเกรด', 'Upgrade'),
      tagColor: 'bg-rose-500'
    },
    {
      id: '__MG42V6lHc',
      title: 'Sigenergy 25kW + DC/AC EV Charger',
      description: t('Bi-directional V2X, V2H, AIKO PV สำรองไฟจัดเต็ม', 'Bi-directional V2X, V2H, AIKO PV with full backup power'),
      tag: t('พรีเมียม', 'Premium'),
      tagColor: 'bg-indigo-500'
    },
    {
      id: 'H-w_6PA0WbE',
      title: t('ATMOCE Micro Inverter @ 7-Eleven ลาว', 'ATMOCE Micro Inverter @ 7-Eleven Laos'),
      description: t('ที่แรกของ สปป.ลาว ลดค่าไฟกลางวัน คืนทุนเร็ว กำไรยาวๆ', 'The first in Laos (Lao PDR): lower daytime bills, fast payback, long-term returns'),
      tag: t('กรณีศึกษา', 'Case Study'),
      tagColor: 'bg-teal-500'
    }
  ];

  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <section id="videos" className="section-dark on-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          dark
          eyebrow={t('ช่อง YouTube', 'YouTube Channel')}
          title={t('วิดีโอรีวิว', 'Project Review')}
          highlight={t('ผลงาน', 'Videos')}
          subtitle={t('รวมวิดีโอรีวิวการติดตั้งจริง พร้อมอธิบายระบบอย่างละเอียด จากช่อง i am teacher', 'Reviews of real installations with detailed system explanations, from the i am teacher channel')}
        />

        {/* Video Modal */}
        {activeVideo && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              className="w-full max-w-5xl aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title={t('วิดีโอ YouTube', 'YouTube video')}
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button 
                onClick={() => setActiveVideo(null)}
                aria-label={t('ปิดวิดีโอ', 'Close video')}
                className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-2"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Featured Video */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div 
            className="card-kb-img relative aspect-video rounded-[1.25rem] cursor-pointer group ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:ring-kb-orange/50 hover:shadow-[0_32px_64px_-28px_rgba(249,115,22,.6)]"
            onClick={() => setActiveVideo(videos[0].id)}
          >
            <img 
              src={getYouTubeThumbnail(videos[0].id)}
              alt={videos[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-kb-orange to-kb-orange-dark rounded-full flex items-center justify-center ring-1 ring-white/20 shadow-[0_12px_32px_-8px_rgba(249,115,22,.6)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_0_10px_rgba(249,115,22,.18),0_16px_48px_-6px_rgba(249,115,22,.85)] motion-reduce:group-hover:scale-100">
                <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Tag - Only show on desktop */}
            <span className={`absolute top-4 left-4 ${videos[0].tagColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-3 hidden sm:inline-block`}>
              {videos[0].tag}
            </span>

            {/* Info - Desktop only */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 hidden sm:block">
              <h3 className="text-white text-xl lg:text-3xl font-bold mb-2">{videos[0].title}</h3>
              <p className="text-gray-300 lg:text-lg">{videos[0].description}</p>
            </div>
          </div>

          {/* Mobile Info - Below video */}
          <div className="block sm:hidden mt-4 px-2">
            <span className={`inline-block ${videos[0].tagColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
              {videos[0].tag}
            </span>
            <h3 className="text-white text-lg font-bold mb-2 leading-tight">{videos[0].title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{videos[0].description}</p>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(1).map((video, index) => (
            <motion.div
              key={video.id}
              className="group card-kb-dark overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="card-kb-img relative aspect-video">
                <img 
                  src={getYouTubeThumbnail(video.id)}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-500" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-kb-orange to-kb-orange-dark rounded-full flex items-center justify-center ring-1 ring-white/20 opacity-90 shadow-[0_8px_24px_-8px_rgba(249,115,22,.6)] transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-[0_0_0_8px_rgba(249,115,22,.18),0_12px_36px_-4px_rgba(249,115,22,.85)] motion-reduce:group-hover:scale-100">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                </div>

                {/* Tag */}
                <span className={`absolute top-3 left-3 ${video.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                  {video.tag}
                </span>

                {/* Duration placeholder */}
                <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {t('รีวิว', 'Review')}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold group-hover:text-orange-300 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1 line-clamp-1">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.youtube.com/@iamteacher7803"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-kb group"
          >
            <Youtube className="w-5 h-5" />
            {t('ดูวิดีโอทั้งหมดบน YouTube', 'Watch all videos on YouTube')}
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
