import React, { useState, useEffect } from 'react';

const AboutPreview = () => {
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

    const element = document.getElementById('about-preview');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies to deliver solutions that push boundaries.',
    },
    {
      icon: '🎨',
      title: 'Creative Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience and engagement.',
    },
    {
      icon: '🔒',
      title: 'Security Focused',
      description: 'Built-in security measures to protect your data and ensure compliance.',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless user experiences across all devices.',
    },
  ];

  return (
    <section id="about-preview" className="w-full bg-white py-[80px] sm:py-[100px] md:py-[120px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className={`flex-1 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-full mb-6">
              <span className="font-medium text-sm">About Cifer Troofer</span>
            </div>
            <h2
              className="text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.2] mb-6"
              style={{
                fontFamily: 'Inter',
                color: '#1f2937',
              }}
            >
              Building the Future of
              <span className="block bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h2>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.7] mb-6"
              style={{
                fontFamily: 'Inter',
                color: '#6b7280',
              }}
            >
              We are a team of passionate innovators, designers, and problem-solvers committed to delivering exceptional digital solutions. Our mission is to help businesses thrive in the digital age by providing cutting-edge technology solutions that drive growth and innovation.
            </p>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.7] mb-8"
              style={{
                fontFamily: 'Inter',
                color: '#6b7280',
              }}
            >
              With years of experience in the industry, we have helped numerous clients achieve their digital transformation goals. Our approach combines creativity, technical expertise, and a deep understanding of business needs to deliver solutions that exceed expectations.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ fontFamily: 'Inter' }}
            >
              Learn More About Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Features Grid */}
          <div className={`flex-1 w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-6 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3
                    className="text-[18px] sm:text-[20px] font-semibold leading-[1.3] mb-2"
                    style={{
                      fontFamily: 'Inter',
                      color: '#1f2937',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-[14px] sm:text-[15px] font-normal leading-[1.6]"
                    style={{
                      fontFamily: 'Inter',
                      color: '#6b7280',
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
