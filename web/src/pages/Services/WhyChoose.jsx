import React, { useState, useEffect } from 'react';

const WhyChoose = () => {
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

    const element = document.getElementById('why-choose');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: '/images/img_margin.svg',
      title: 'Scalable Architecture',
      description: 'Build solutions that grow with your business needs and handle increased demand seamlessly.',
    },
    {
      icon: '/images/img_margin_blue_gray_300.svg',
      title: 'Native App Development',
      description: 'High-performance native applications optimized for specific platforms and devices.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x36.svg',
      title: 'Modern APIs',
      description: 'RESTful and GraphQL APIs that enable seamless integration and data exchange.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x44.svg',
      title: 'Cloud-Native Solutions',
      description: 'Leverage cloud technologies for flexibility, scalability, and cost-efficiency.',
    },
    {
      icon: '/images/img_margin_blue_gray_300_44x40.svg',
      title: 'Security First',
      description: 'Built-in security measures to protect your data and ensure compliance.',
    },
    {
      icon: '/images/img_margin_44x44.svg',
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly.',
    },
  ];

  return (
    <section id="why-choose" className="w-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.2] mb-4"
            style={{
              fontFamily: 'Inter',
              color: '#ffffff',
            }}
          >
            Why Choose Cifer Troofer
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] max-w-[700px] mx-auto"
            style={{
              fontFamily: 'Inter',
              color: '#e0e7ff',
            }}
          >
            What sets us apart from the competition
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-[#fbbf24] transition-all duration-500 hover:-translate-y-2 border border-transparent ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="w-8 h-8"
                />
              </div>
              <h3
                className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold leading-[1.3] mb-3"
                style={{
                  fontFamily: 'Inter',
                  color: '#1f2937',
                }}
              >
                {reason.title}
              </h3>
              <p
                className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.6]"
                style={{
                  fontFamily: 'Inter',
                  color: '#6b7280',
                }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
