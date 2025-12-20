import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube, ExternalLink } from 'lucide-react';

const YouTubeVideos = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 'se8wBI5BoBA',
      title: 'ธุรกิจไม่สะดุด! รีวิว Solis 50kW + แบต High Volt',
      description: 'สำรองไฟโรงแรม อพาร์ทเม้นท์ ชั้น 1 ไฟดับก็ยังรอด',
      tag: 'Commercial',
      tagColor: 'bg-blue-500'
    },
    {
      id: 'qjJBaqn_HtI',
      title: 'รีวิว Solis 8kW จับคู่แบต BYD และแผง Aiko',
      description: 'ชาร์จรถ EV ได้ คืนทุนไวใน 5 ปี',
      tag: 'Residential',
      tagColor: 'bg-green-500'
    },
    {
      id: 'BPPscTnZMig',
      title: 'Sigenergy 10kW 1P สลับไฟ 0 วินาที',
      description: 'ทำงานร่วมกับ On-Grid เดิม ไฟดับ ไฟตก ช่วยได้ 100%',
      tag: 'Hybrid',
      tagColor: 'bg-purple-500'
    },
    {
      id: 'LDH-_5_Przw',
      title: 'Sigenergy เจาะลึก 3 โหมดชาร์จ V2X',
      description: 'ดึงไฟรถมาใช้ในบ้าน ภัยธรรมชาติเข้า ไฟดับก็รอด!',
      tag: 'EV Charger',
      tagColor: 'bg-amber-500'
    },
    {
      id: 'zzCjIS6j8WM',
      title: 'ATMOCE ติดตั้งกับอะไรก็ได้!',
      description: 'ทำ On-Grid เดิมๆ ให้เป็น Hybrid สำรองไฟเวลาไฟดับ',
      tag: 'Upgrade',
      tagColor: 'bg-rose-500'
    },
    {
      id: '__MG42V6lHc',
      title: 'Sigenergy 25kW + DC/AC EV Charger',
      description: 'Bi-directional V2X, V2H, AIKO PV สำรองไฟจัดเต็ม',
      tag: 'Premium',
      tagColor: 'bg-indigo-500'
    },
    {
      id: 'H-w_6PA0WbE',
      title: 'ATMOCE Micro Inverter @ 7-Eleven ลาว',
      description: 'ที่แรกของ สปป.ลาว ลดค่าไฟกลางวัน คืนทุนเร็ว กำไรยาวๆ',
      tag: 'Case Study',
      tagColor: 'bg-teal-500'
    }
  ];

  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <section id="videos" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full mb-4">
            <Youtube className="w-5 h-5" />
            <span className="font-semibold text-sm">YouTube Channel</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
            วิดีโอรีวิวผลงาน
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            รวมวิดีโอรีวิวการติดตั้งจริง พร้อมอธิบายระบบอย่างละเอียด จากช่อง i am teacher
          </p>
        </motion.div>

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
                title="YouTube video"
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button 
                onClick={() => setActiveVideo(null)}
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
            className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => setActiveVideo(videos[0].id)}
          >
            <img 
              src={getYouTubeThumbnail(videos[0].id)}
              alt={videos[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-20 h-20 lg:w-24 lg:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
              >
                <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-white ml-1" />
              </motion.div>
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
              <span className={`inline-block ${videos[0].tagColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                {videos[0].tag}
              </span>
              <h3 className="text-white text-xl lg:text-3xl font-bold mb-2">{videos[0].title}</h3>
              <p className="text-gray-300 lg:text-lg">{videos[0].description}</p>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(1).map((video, index) => (
            <motion.div
              key={video.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <img 
                  src={getYouTubeThumbnail(video.id)}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-14 h-14 bg-red-600/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </motion.div>
                </div>

                {/* Tag */}
                <span className={`absolute top-3 left-3 ${video.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                  {video.tag}
                </span>

                {/* Duration placeholder */}
                <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  รีวิว
                </span>
              </div>

              <h3 className="text-white font-bold group-hover:text-kb-orange transition-colors line-clamp-2">
                {video.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1 line-clamp-1">{video.description}</p>
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
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all group"
          >
            <Youtube className="w-5 h-5" />
            ดูวิดีโอทั้งหมดบน YouTube
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
