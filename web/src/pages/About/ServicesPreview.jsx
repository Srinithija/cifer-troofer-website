import React from 'react';
import ServiceCard from '../../components/ui/ServiceCard';

const ServicesPreview = () => {
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
    <section className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
