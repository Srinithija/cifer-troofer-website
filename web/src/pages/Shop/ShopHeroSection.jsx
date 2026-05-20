import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../components/ui/BreadCrumb';

const ShopHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] mt-[74px] sm:mt-[100px] md:mt-[120px] lg:mt-[148px] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-[60px] sm:py-[80px] md:py-[100px]">
          {/* Left Content */}
          <div className={`flex-1 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium text-sm">🛍️ Explore Our Products</span>
            </div>
            <h1
              className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-bold leading-[1.2] mb-6"
              style={{ fontFamily: 'Inter', color: '#ffffff' }}
            >
              Discover the Best
              <span className="block bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
                Digital Assets
              </span>
            </h1>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.7] mb-8 max-w-[600px]"
              style={{ fontFamily: 'Inter', color: '#e0e7ff' }}
            >
              Browse our collection of premium software, AI tools, and cutting-edge resources designed to accelerate your workflow.
            </p>
            
            <BreadCrumb 
              items={breadcrumbItems}
              layout_gap="22px"
              layout_justify_content="flex-start"
              layout_align_items="center"
              layout_width="auto"
              margin="0"
              position="relative"
              className="mt-2 sm:mt-3 md:mt-4"
              linkClassName="text-sm md:text-base text-white/80 hover:text-white transition-colors"
              activeClassName="text-sm md:text-base text-white font-medium"
              separatorClassName="text-white/60"
            />
          </div>

          {/* Right Image */}
          <div className={`flex-1 w-full flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="w-full max-w-[480px] aspect-square bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <img
                    src="/images/img_img.svg"
                    alt="Shop Hero"
                    className="w-4/5 h-4/5 object-contain animate-float"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
                <span className="text-white text-2xl">🔥</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center shadow-2xl animate-bounce delay-500">
                <span className="text-white text-xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default ShopHeroSection;