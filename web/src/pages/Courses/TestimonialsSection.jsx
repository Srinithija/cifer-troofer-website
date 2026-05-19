import React, { useState } from 'react';
import PagerIndicator from '../../components/ui/PagerIndicator';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const testimonials = [
    { id: 1, name: 'Karthick', role: 'Student' },
    { id: 2, name: 'Karthick', role: 'Student' },
    { id: 3, name: 'Karthick', role: 'Student' },
  ];

  return (
    <section className="w-full bg-background-secondary py-[32px] sm:py-[40px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 items-center">
          {/* Section Title */}
          <h2
            className="text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-[1.22] text-center mt-[32px] sm:mt-[40px]"
            style={{
              fontFamily: 'Inter',
              color: '#000000',
            }}
          >
            What Our Students Say
          </h2>

          {/* Testimonials Slider */}
          <div className="w-full max-w-[94%] overflow-x-auto scrollbar-hide">
            <div className="flex gap-[32px] sm:gap-[38px] md:gap-[44px] pb-4">
              {testimonials?.map((testimonial) => (
                <div
                  key={testimonial?.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-22px)] lg:w-[calc(33.333%-30px)] border border-[#000000] rounded-xl p-3 bg-background-gray"
                >
                  <div className="flex items-center gap-[22px] mt-[62px] sm:mt-[72px] md:mt-[82px]">
                    {/* Avatar */}
                    <div className="w-[58px] h-[54px] rounded-[28px] bg-background-gray-light flex-shrink-0" />

                    {/* User Info */}
                    <div className="flex flex-col items-center">
                      <p
                        className="text-[18px] sm:text-[19px] md:text-[20px] font-normal leading-[1.25]"
                        style={{
                          fontFamily: 'Inter',
                          color: '#000000',
                        }}
                      >
                        {testimonial?.name}
                      </p>
                      <p
                        className="text-[18px] sm:text-[19px] md:text-[20px] font-normal leading-[1.25]"
                        style={{
                          fontFamily: 'Inter',
                          color: '#000000',
                        }}
                      >
                        {testimonial?.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pager Indicator */}
          <PagerIndicator
            totalPages={3}
            currentPage={currentSlide}
            onPageChange={(page) => setCurrentSlide(page)}
            position="center"
            layout_width="8%"
            margin="0 0 0 506px"
            className="mt-3"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;