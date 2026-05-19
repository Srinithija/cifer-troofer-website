import React from 'react';
import Button from '../../components/ui/Button';

const ContactHero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] mt-[74px] sm:mt-[100px] md:mt-[120px] lg:mt-[148px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-[60px] sm:py-[80px] md:py-[100px]">
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
              border_border_radius="8px"
              border_border="none"
              padding="14px 32px"
              layout_width="auto"
              position="relative"
              margin="0"
              layout_gap="0"
              variant="primary"
              size="medium"
              onClick={() => {}}
              className="hover:shadow-lg hover:scale-105 transition-all duration-300"
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
              border_border_radius="8px"
              padding="14px 32px"
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
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
