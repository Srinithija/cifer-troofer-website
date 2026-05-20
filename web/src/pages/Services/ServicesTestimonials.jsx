import React, { useState, useEffect } from 'react';

const ServicesTestimonials = () => {
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

    const element = document.getElementById('services-testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Cifer Troofer transformed our digital presence. Their team delivered exceptional results on time and within budget.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      content: 'The expertise and professionalism of the team is outstanding. They truly understand modern technology needs.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, GrowthHub',
      content: 'Working with Cifer Troofer was a game-changer for our business. Highly recommend their services.',
    },
  ];

  return (
    <section id="services-testimonials" className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
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
            What Clients Say About Us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-[#6366f1] transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4
                    className="text-[16px] sm:text-[18px] font-semibold leading-[1.3]"
                    style={{
                      fontFamily: 'Inter',
                      color: '#1f2937',
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-[14px] sm:text-[15px] font-normal leading-[1.5]"
                    style={{
                      fontFamily: 'Inter',
                      color: '#6366f1',
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p
                className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.6] italic"
                style={{
                  fontFamily: 'Inter',
                  color: '#4b5563',
                }}
              >
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonials;
