import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const CyberPlayground = () => {
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

    const element = document.getElementById('cyber-playground');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const tools = [
    {
      id: 1,
      icon: '/images/img_background.svg',
      title: 'IP Locator',
      description: 'Instantly identify geographic locations, ISP details, and network type for any IPv4 or IPv6 address worldwide.',
      buttonText: 'START TRACKING',
      to: '/tools/ip-locator',
    },
    {
      id: 2,
      icon: '/images/img_background_black_900.svg',
      title: 'IP Grabber',
      description: 'Generate unique tracking links to log visitor IP addresses, browser agents, and device information for security audits.',
      buttonText: 'GENERATE LINK',
      to: '/tools/ip-grabber',
    }
  ];

  return (
    <section id="cyber-playground" className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px] mt-[32px] sm:mt-[48px] md:mt-[64px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-[32px] sm:mb-[40px] md:mb-[48px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col gap-2">
            <h2
              className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.2]"
              style={{
                fontFamily: 'Inter',
                color: '#1f2937',
              }}
            >
              Cyber Playground
            </h2>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] max-w-[500px]"
              style={{
                fontFamily: 'Inter',
                color: '#6b7280',
              }}
            >
              Try our internal web tools for testing and exploration.
            </p>
          </div>
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6366f1] hover:text-[#8b5cf6] transition-colors duration-300 whitespace-nowrap"
            style={{ fontFamily: 'Inter' }}
          >
            EXPLORE ALL TOOLS
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {tools?.map((tool, index) => (
            <div
              key={tool?.id}
              className={`bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 md:gap-10 hover:shadow-2xl hover:border-[#6366f1] transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Tool Content */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-xl p-4 flex items-center justify-center flex-shrink-0">
                  <img
                    src={tool?.icon}
                    alt={tool?.title}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[1.3]"
                    style={{
                      fontFamily: 'Inter',
                      color: '#1f2937',
                    }}
                  >
                    {tool?.title}
                  </h3>
                  <p
                    className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.6]"
                    style={{
                      fontFamily: 'Inter',
                      color: '#6b7280',
                    }}
                  >
                    {tool?.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <Link to={tool?.to} className="self-start">
                <Button
                  text={tool?.buttonText}
                  text_font_size="14"
                  text_font_weight="600"
                  text_color="#ffffff"
                  fill_background_color="#6366f1"
                  border_border="none"
                  border_border_radius="8px"
                  padding="12px 32px"
                  layout_width="auto"
                  position="relative"
                  margin="0"
                  layout_gap="0"
                  variant="primary"
                  size="md"
                  className="self-start hover:shadow-lg hover:scale-105 transition-all duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberPlayground;