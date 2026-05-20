import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] mt-[74px] sm:mt-[100px] md:mt-[120px] lg:mt-[148px] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-[60px] sm:py-[80px] md:py-[100px]">
          {/* Left Content */}
          <div className={`flex-1 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium text-sm">🎯 About Our Journey</span>
            </div>
            <h1
              className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-bold leading-[1.2] mb-6"
              style={{
                fontFamily: 'Inter',
                color: '#ffffff',
              }}
            >
              Technology moves fast. You need a team that moves faster.
            </h1>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] mb-8 max-w-[600px]"
              style={{
                fontFamily: 'Inter',
                color: '#e0e7ff',
              }}
            >
              We are a group of passionate innovators, designers, and problem-solvers committed to delivering exceptional digital solutions.
            </p>
            <Button
              text="Let's Start +"
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
          </div>

          {/* Right Image */}
          <div className={`flex-1 w-full flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full max-w-[500px] aspect-square bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                <img
                  src="/images/img_img.svg"
                  alt="About Hero"
                  className="w-4/5 h-4/5 object-contain animate-float"
                />
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

export default AboutHero;
