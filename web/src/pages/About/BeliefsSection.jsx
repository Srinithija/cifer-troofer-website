import React, { useState, useEffect } from 'react';

const BeliefsSection = () => {
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

    const element = document.getElementById('beliefs-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const beliefs = [
    {
      number: '01',
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
    },
    {
      number: '02',
      title: 'Quality',
      description: 'We maintain the highest standards in everything we do, ensuring excellence in every project.',
    },
    {
      number: '03',
      title: 'Partnership',
      description: 'We believe in building long-term relationships with our clients based on trust and mutual success.',
    },
  ];

  return (
    <section id="beliefs-section" className="w-full bg-gradient-to-br from-white to-[#f8fafc] py-[60px] sm:py-[80px] md:py-[100px]">
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
            WE BELIEVE IN
          </h2>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className={`bg-white border border-[#e5e7eb] rounded-2xl p-8 sm:p-10 hover:shadow-2xl hover:border-[#6366f1] transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className="text-[48px] sm:text-[56px] md:text-[64px] font-bold leading-[1] mb-4"
                style={{
                  fontFamily: 'Inter',
                  color: '#6366f1',
                }}
              >
                {belief.number}
              </div>
              <h3
                className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-[1.3] mb-4 transition-colors duration-300 group-hover:text-[#6366f1]"
                style={{
                  fontFamily: 'Inter',
                  color: '#1f2937',
                }}
              >
                {belief.title}
              </h3>
              <p
                className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6]"
                style={{
                  fontFamily: 'Inter',
                  color: '#6b7280',
                }}
              >
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeliefsSection;
