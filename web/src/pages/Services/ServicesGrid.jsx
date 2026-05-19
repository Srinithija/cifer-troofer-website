import React from 'react';
import ServiceCard from '../../components/ui/ServiceCard';

const ServicesGrid = () => {
  const services = [
    {
      icon: '/images/img_margin.svg',
      title: 'AI & Operational Solutions',
      description: 'Leverage artificial intelligence to automate processes and optimize operations for maximum efficiency.',
    },
    {
      icon: '/images/img_margin_blue_gray_300.svg',
      title: 'Website Development',
      description: 'Custom web applications built with modern frameworks for optimal performance and user experience.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x36.svg',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x44.svg',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your business operations.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x40.svg',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    },
    {
      icon: '/images/img_margin_44x44.svg',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization tools.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x30.svg',
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging digital experiences.',
    },
    {
      icon: '/images/img_margin_44x40.svg',
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that drive traffic, engagement, and conversions.',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-[60px] sm:py-[80px] md:py-[100px]">
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
            OUR SERVICES
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] max-w-[700px] mx-auto"
            style={{
              fontFamily: 'Inter',
              color: '#6b7280',
            }}
          >
            Comprehensive solutions tailored to your business needs
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

export default ServicesGrid;
