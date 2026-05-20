import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';

const ServicesCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-cta');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services-cta" className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-3xl p-8 sm:p-12 md:p-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h2
              className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.2] mb-4"
              style={{
                fontFamily: 'Inter',
                color: '#1f2937',
              }}
            >
              Ready To Build Your Next Digital Product?
            </h2>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] mb-8"
              style={{
                fontFamily: 'Inter',
                color: '#6b7280',
              }}
            >
              Let's transform your ideas into reality. Our team is ready to help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                text="Start Your Project"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="600"
                text_line_height="20px"
                text_text_align="center"
                text_color="#ffffff"
                fill_background_color="#6366f1"
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
                text="Contact Sales"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="600"
                text_line_height="20px"
                text_text_align="center"
                text_color="#6366f1"
                fill_background_color="transparent"
                border_border="2px solid #6366f1"
                border_border_radius="12px"
                padding="16px 40px"
                layout_width="auto"
                position="relative"
                margin="0"
                layout_gap="0"
                variant="outline"
                size="medium"
                onClick={() => {}}
                className="hover:bg-[#6366f1]/10 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className={`flex-1 w-full flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full max-w-[400px] aspect-square bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center">
              <img
                src="/images/img_img.svg"
                alt="CTA"
                className="w-3/4 h-3/4 object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
