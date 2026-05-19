import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';

const ContactCTA = () => {
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

    const element = document.getElementById('contact-cta');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact-cta" className="w-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] py-[80px] sm:py-[100px] md:py-[120px] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-bold leading-[1.2] mb-6"
            style={{
              fontFamily: 'Inter',
              color: '#ffffff',
            }}
          >
            Let's Talk About Your Project
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.7] mb-8 max-w-[700px]"
            style={{
              fontFamily: 'Inter',
              color: '#e0e7ff',
            }}
          >
            Ready to transform your ideas into reality? Get in touch with our team and let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              text="Start Your Project"
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
              text="Contact Us"
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

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-8 items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white text-xl">📧</span>
              </div>
              <a
                href="mailto:cifertroofer@gmail.com"
                className="text-white font-medium hover:underline"
                style={{ fontFamily: 'Inter' }}
              >
                cifertroofer@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white text-xl">📞</span>
              </div>
              <a
                href="tel:+917339071575"
                className="text-white font-medium hover:underline"
                style={{ fontFamily: 'Inter' }}
              >
                +91 -7339071575
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
