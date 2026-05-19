import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';

const HomeHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-[80px] sm:py-[100px] md:py-[120px] lg:py-[140px]">
          {/* Left Content */}
          <div className={`flex-1 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium text-sm">🚀 Welcome to the Future of Digital Innovation</span>
            </div>
            <h1
              className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-bold leading-[1.15] mb-6"
              style={{
                fontFamily: 'Inter',
                color: '#ffffff',
              }}
            >
              Transform Your Ideas Into
              <span className="block bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.7] mb-8 max-w-[600px]"
              style={{
                fontFamily: 'Inter',
                color: '#e0e7ff',
              }}
            >
              We build cutting-edge AI solutions, cybersecurity tools, and digital experiences that drive innovation and help businesses achieve extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                text="Get Started"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="600"
                text_line_height="20px"
                text_text_align="center"
                text_color="#6366f1"
                fill_background_color="#ffffff"
                border_border_radius="12px"
                border_border="none"
                padding="16px 40px"
                layout_width="auto"
                position="relative"
                margin="0"
                layout_gap="0"
                variant="primary"
                size="medium"
                onClick={() => {}}
                className="hover:shadow-2xl hover:scale-105 transition-all duration-300"
              />
              <Button
                text="Learn More"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="600"
                text_line_height="20px"
                text_text_align="center"
                text_color="#ffffff"
                fill_background_color="transparent"
                border_border="2px solid #ffffff"
                border_border_radius="12px"
                padding="16px 40px"
                layout_width="auto"
                position="relative"
                margin="0"
                layout_gap="0"
                variant="outline"
                size="medium"
                onClick={() => {}}
                className="hover:bg-white/10 transition-all duration-300"
              />
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <span className="text-white text-sm font-medium">Trusted by 100+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">⭐</span>
                </div>
                <span className="text-white text-sm font-medium">5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className={`flex-1 w-full flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="w-full max-w-[550px] aspect-square bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <img
                    src="/images/img_img.svg"
                    alt="Hero Illustration"
                    className="w-4/5 h-4/5 object-contain animate-float"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center shadow-2xl animate-bounce delay-500">
                <span className="text-white text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HomeHero;
