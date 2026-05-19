import React from 'react';

const BeliefsSection = () => {
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
            WE BELIEVE IN
          </h2>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-2xl p-8 sm:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
                className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-[1.3] mb-4"
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
