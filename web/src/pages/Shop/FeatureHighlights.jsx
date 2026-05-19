import React from 'react';

const FeatureHighlights = () => {
  const features = [
    {
      id: 1,
      icon: '/images/img_background_black_900_48x48.svg',
      title: 'Fast Delivery',
      description: 'Global shipping within 48h'
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
    <section className="w-full bg-[#eeeefa] border-t border-b border-solid border-[#f3f4f6] py-[32px] sm:py-[48px] md:py-[64px] mt-[16px] sm:mt-[20px] md:mt-[28px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {features?.map((feature) => (
            <div
              key={feature?.id}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* Icon Container */}
              <div className="bg-[#f3f4f6] rounded-3xl p-4">
                <img
                  src={feature?.icon}
                  alt={feature?.title}
                  className="w-[48px] h-[48px]"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3
                  className="text-[14px] sm:text-[16px] font-bold leading-[1.25] text-[#000000]"
                  style={{ fontFamily: 'Inter' }}
                >
                  {feature?.title}
                </h3>
                <p
                  className="text-sm text-[#6b7280] leading-[1.21]"
                  style={{ fontFamily: 'Inter' }}
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