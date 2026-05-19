import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="w-full bg-[#0d111711] mt-[74px] sm:mt-[100px] md:mt-[120px] lg:mt-[148px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-start gap-[28px] py-[24px] sm:py-[30px] md:py-[36px]">
          {/* Heading */}
          <div className="flex items-center justify-center p-1">
            <h1
              className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold leading-[1.23] text-center"
              style={{
                fontFamily: 'Inter',
                color: '#000000',
              }}
            >
              Courses
            </h1>
          </div>

          {/* Subtitle and Description */}
          <div className="flex flex-col items-center gap-1 w-full">
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.25] text-center"
              style={{
                fontFamily: 'Inter',
                color: '#a0a0a0',
              }}
            >
              Building Your Knowledge More Quickly
            </p>
            <p
              className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.25] text-center max-w-[90%] sm:max-w-[600px]"
              style={{
                fontFamily: 'Inter',
                color: '#888888',
              }}
            >
              We make you knowledgeable about Cyber Security, IoT, Arduino, PCB Design…
            </p>
          </div>

          {/* CTA Button */}
          <Button
            text="Explore Now"
            text_font_size="16"
            text_font_family="Inter"
            text_font_weight="400"
            text_line_height="20px"
            text_text_align="left"
            text_color="#ffffff"
            fill_background_color="#ff5722ab"
            border_border_radius="4px"
            border_border="none"
            padding="10px 26px"
            layout_width="auto"
            position="relative"
            margin="0"
            layout_gap="0"
            variant="primary"
            size="md"
            onClick={() => {}}
            className="mt-[12px] sm:mt-[20px] md:mt-[28px] mb-[8px] sm:mb-[12px] md:mb-[16px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;