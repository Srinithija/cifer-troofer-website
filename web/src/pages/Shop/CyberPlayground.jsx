import React from 'react';
import Button from '../../components/ui/Button';

const CyberPlayground = () => {
  const tools = [
    {
      id: 1,
      icon: '/images/img_background.svg',
      title: 'IP Locator',
      description: 'Instantly identify geographic locations, ISP details, and network type for any IPv4 or IPv6 address worldwide.',
      buttonText: 'START TRACKING',
      buttonStyle: {
        text_color: '#000000',
        fill_background_color: 'transparent',
        border_border: '2px solid #000000'
      }
    },
    {
      id: 2,
      icon: '/images/img_background_black_900.svg',
      title: 'IP Grabber',
      description: 'Generate unique tracking links to log visitor IP addresses, browser agents, and device information for security audits.',
      buttonText: 'GENERATE LINK',
      buttonStyle: {
        text_color: '#000000',
        fill_background_color: 'transparent',
        border_border: '2px solid #000000'
      }
    }
  ];

  return (
    <section className="w-full border border-solid border-[#948a8a] py-[32px] sm:py-[48px] md:py-[64px] mt-[32px] sm:py-[48px] md:mt-[64px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-[24px] sm:mb-[32px] md:mb-[40px]">
          <div className="flex flex-col gap-2">
            <h2
              className="text-[24px] sm:text-[28px] md:text-[30px] font-bold leading-[1.23] text-[#000000]"
              style={{ fontFamily: 'Inter' }}
            >
              Cyber Playground
            </h2>
            <p
              className="text-sm sm:text-base text-[#6b7280]"
              style={{
                fontFamily: 'Inter',
                lineHeight: '20px'
              }}
            >
              Try our internal web tools for testing.
            </p>
          </div>
          <p
            className="text-sm font-bold uppercase text-[#000000] cursor-pointer hover:underline"
            style={{
              fontFamily: 'Inter',
              lineHeight: '17px'
            }}
          >
            EXPLORE ALL TOOLS
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {tools?.map((tool) => (
            <div
              key={tool?.id}
              className="bg-[#ffffff] border border-solid border-[#e5e7eb] rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 md:gap-10 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Tool Content */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                {/* Icon */}
                <div className="bg-[#f3f4f6] rounded-xl p-4 sm:p-5 w-fit">
                  <img
                    src={tool?.icon}
                    alt={tool?.title}
                    className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px]"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-[1.25] text-[#000000]"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {tool?.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base text-[#4b5563] leading-[1.62]"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {tool?.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <Button
                text={tool?.buttonText}
                text_font_size="14"
                text_font_weight="700"
                text_color={tool?.buttonStyle?.text_color}
                fill_background_color={tool?.buttonStyle?.fill_background_color}
                border_border={tool?.buttonStyle?.border_border}
                border_border_radius="8px"
                padding="12px 32px"
                layout_width="auto"
                position="relative"
                margin="0"
                layout_gap="0"
                variant="outline"
                size="md"
                onClick={() => {}}
                className="self-start hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberPlayground;