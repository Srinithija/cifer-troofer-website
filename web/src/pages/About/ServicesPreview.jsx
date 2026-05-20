import React, { useState, useEffect } from 'react';
import ServiceCard from '../../components/ui/ServiceCard';

const ServicesPreview = () => {
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

    const element = document.getElementById('services-preview');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: '/images/img_margin.svg',
      title: 'App Development',
      description: 'Custom mobile and web applications built with cutting-edge technologies',
    },
    {
      icon: '/images/img_margin_blue_gray_300.svg',
      title: 'Website Design',
      description: 'Beautiful, responsive websites that convert visitors into customers',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x36.svg',
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging experiences',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x44.svg',
      title: 'Branding & Marketing',
      description: 'Strategic branding and digital marketing to grow your business',
    },
  ];

  return (
    <section id="services-preview" className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.2] mb-4"
            style={{
              fontFamily: 'Inter',
              color: '#1f2937',
            }}
          >
            We blend creativity with technology
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] max-w-[700px] mx-auto"
            style={{
              fontFamily: 'Inter',
              color: '#6b7280',
            }}
          >
            Our comprehensive suite of services is designed to help your business succeed in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onReadMore={() => {}}
              isVisible={isVisible}
              delay={index * 100}
              showReadMore={false}
            />
          ))}
        </div>
               <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{ fontFamily: 'Inter' }}
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
