import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';


const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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
        <div className={`flex flex-col items-center justify-center py-[60px] sm:py-[80px] md:py-[100px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1
            className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-bold leading-[1.2] mb-6 text-center"
            style={{
              fontFamily: 'Inter',
              color: '#ffffff',
            }}
          >
            Elevate Your Professional Journey
          </h1>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] mb-8 max-w-[700px] text-center"
            style={{
              fontFamily: 'Inter',
              color: '#e0e7ff',
            }}
          >
            Get in touch with us to discuss how we can help transform your business with innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              text="Browse Courses"
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
              onClick={() => navigate('/courses')}
              className="hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
            <Button
              text="View Services"
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
              onClick={() => navigate('/services')}
              className="hover:bg-white/10 transition-all duration-300"
            />
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

export default ContactHero;
