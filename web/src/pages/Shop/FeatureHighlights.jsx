import React, { useState, useEffect } from 'react';

const FeatureHighlights = () => {
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

    const element = document.getElementById('feature-highlights');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      icon: '/images/img_background_black_900_48x48.svg',
      title: 'Fast Delivery',
      description: 'Global shipping within 48 hours'
    },
    {
      id: 2,
      icon: '/images/img_background_48x48.svg',
      title: 'Secure Payment',
      description: '100% encrypted checkout'
    },
    {
      id: 3,
      icon: '/images/img_background_1.svg',
      title: 'Quality Guarantee',
      description: 'Tested by professionals'
    },
    {
      id: 4,
      icon: '/images/img_background_2.svg',
      title: '24/7 Support',
      description: 'Always here to help you'
    }
  ];

  return (
    <section id="feature-highlights" className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px] mt-[16px] sm:mt-[20px] md:mt-[28px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features?.map((feature, index) => (
            <div
              key={feature?.id}
              className={`bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center gap-4 hover:shadow-2xl hover:border-[#6366f1] transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-2xl flex items-center justify-center flex-shrink-0">
                <img
                  src={feature?.icon}
                  alt={feature?.title}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.3]"
                  style={{
                    fontFamily: 'Inter',
                    color: '#1f2937',
                  }}
                >
                  {feature?.title}
                </h3>
                <p
                  className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5]"
                  style={{
                    fontFamily: 'Inter',
                    color: '#6b7280',
                  }}
                >
                  {feature?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;