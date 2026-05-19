import React from 'react';

const HowWeWork = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and goals to understand your requirements.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive roadmap tailored to your objectives.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Our designers create intuitive and engaging user experiences.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'We build robust solutions using cutting-edge technologies.',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures quality and performance standards.',
    },
    {
      number: '06',
      title: 'Deployment',
      description: 'We launch your solution and provide ongoing support.',
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
            How We Work
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] max-w-[700px] mx-auto"
            style={{
              fontFamily: 'Inter',
              color: '#6b7280',
            }}
          >
            Our proven process ensures successful project delivery
          </p>
        </div>

        {/* Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="text-[40px] sm:text-[48px] font-bold leading-[1] mb-4"
                style={{
                  fontFamily: 'Inter',
                  color: '#6366f1',
                }}
              >
                {step.number}
              </div>
              <h3
                className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-[1.3] mb-3"
                style={{
                  fontFamily: 'Inter',
                  color: '#1f2937',
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.6]"
                style={{
                  fontFamily: 'Inter',
                  color: '#6b7280',
                }}
              >
                {step.description}
              </p>
              {/* Connector Line (hidden on last items) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#6366f1] to-transparent transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
