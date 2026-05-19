import React, { useState, useEffect } from 'react';
import ServiceCard from '../../components/ui/ServiceCard';

const HomeServices = () => {
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

    const element = document.getElementById('home-services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: '/images/img_margin.svg',
      title: 'AI Solutions',
      description: 'Leverage artificial intelligence to automate processes and drive innovation.',
    },
    {
      icon: '/images/img_margin_blue_gray_300.svg',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks for optimal performance.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x36.svg',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for seamless experiences.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x44.svg',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x40.svg',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    },
    {
      icon: '/images/img_margin_44x44.svg',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics.',
    },
  ];

  return (
    <section id="home-services" className="w-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-[80px] sm:py-[100px] md:py-[120px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-full mb-6">
            <span className="font-medium text-sm">Our Services</span>
          </div>
          <h2
            className="text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.2] mb-4"
            style={{
              fontFamily: 'Inter',
              color: '#1f2937',
            }}
          >
            What We Offer
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] max-w-[700px] mx-auto"
            style={{
              fontFamily: 'Inter',
              color: '#6b7280',
            }}
          >
            Comprehensive solutions tailored to your business needs, delivered with excellence and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                onReadMore={() => {}}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
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

export default HomeServices;
