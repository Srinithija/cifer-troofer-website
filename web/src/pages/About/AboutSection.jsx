import React, { useState, useEffect } from 'react';

const AboutSection = () => {
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

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="w-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image */}
          <div className={`flex-1 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-3xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 border border-white/20">
              <img
                src="/images/img_img.svg"
                alt="About Cifer Troofer"
                className="w-3/4 h-3/4 object-contain animate-float"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className={`flex-1 w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2
              className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.2] mb-6"
              style={{
                fontFamily: 'Inter',
                color: '#1f2937',
              }}
            >
              About Cifer Troofer
            </h2>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.7] mb-6"
              style={{
                fontFamily: 'Inter',
                color: '#4b5563',
              }}
            >
              We are a team of passionate innovators, designers, and problem-solvers committed to delivering exceptional digital solutions. Our mission is to help businesses thrive in the digital age by providing cutting-edge technology solutions that drive growth and innovation.
            </p>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.7]"
              style={{
                fontFamily: 'Inter',
                color: '#4b5563',
              }}
            >
              With years of experience in the industry, we have helped numerous clients achieve their digital transformation goals. Our approach combines creativity, technical expertise, and a deep understanding of business needs to deliver solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
