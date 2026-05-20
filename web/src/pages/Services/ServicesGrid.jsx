import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../../components/ui/ServiceCard';

const ServicesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Service ID mapping
  const serviceIdMap = {
    'Clone App Development': 'clone-app-development',
    'Logo & Branding Design': 'branding-design',
    'UI / UX Designing': 'ui-ux-design',
    'Website Development': 'website-development',
    'E-Commerce Development': 'ecommerce-development',
    'Custom App Development': 'custom-app-development',
    'Online Marketing': 'online-marketing',
    'AI Automation & Chatbot Solutions': 'ai-automation',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-grid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: '/images/img_margin.svg',
      title: 'Clone App Development',
      description: 'Build your own version of popular apps like Uber, Gojek, Netflix, OnlyFans, Dream11, Tinder, Zomato, and more customized for your brand.',
    },
    {
      icon: '/images/img_margin_blue_gray_300.svg',
      title: 'Logo & Branding Design',
      description: 'Create a strong identity with professional logo design and complete brand kits.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x36.svg',
      title: 'UI / UX Designing',
      description: 'Modern, user-friendly interfaces for mobile apps and websites.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x44.svg',
      title: 'Website Development',
      description: 'SEO-friendly, responsive websites for any business.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x40.svg',
      title: 'E-Commerce Development',
      description: 'Launch an online store with payment gateway integration and mobile optimization.',
    },
    {
      icon: '/images/img_margin_44x44.svg',
      title: 'Custom App Development',
      description: 'Turn your unique ideas into powerful apps for iOS, Android, or web — fully custom-built to match your vision, brand, and business goals from start to finish.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x30.svg',
      title: 'Online Marketing',
      description: 'SEO, social media marketing, and ad campaigns to grow your business.',
    },
    {
      icon: '/images/img_margin_44x40.svg',
      title: 'AI Automation & Chatbot Solutions',
      description: 'AI automation and intelligent chatbots to work smarter, reduce manual tasks, and create exceptional customer experiences.',
    },
  ];

  return (
    <section id="services-grid" className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
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
              onReadMore={() => navigate(`/services/${serviceIdMap[service.title]}`)}
              isVisible={isVisible}
              delay={index * 100}
              showReadMore={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
