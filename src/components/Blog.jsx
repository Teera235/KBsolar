import { FadeUp } from './AnimatedSection';

const Blog = () => {
  return (
    <section id="blog" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 mobile-full-width bg-section-mobile">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 mobile-container-fix">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="inline-block bg-kb-orange/10 text-kb-orange font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              BLOG
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-kb-dark mt-2 mb-4">
              บทความและข่าวสาร
            </h2>
            <p className="text-kb-gray max-w-2xl mx-auto text-lg">
              อัพเดทข่าวสารและความรู้เกี่ยวกับพลังงานแสงอาทิตย์
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-24 h-24 bg-kb-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-kb-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-kb-dark mb-3">
                เนื้อหากำลังจะมาเร็วๆ นี้
              </h3>
              <p className="text-kb-gray max-w-md mx-auto">
                เรากำลังเตรียมบทความและข่าวสารที่น่าสนใจเกี่ยวกับพลังงานแสงอาทิตย์ให้กับคุณ
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Blog;
