import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Cifer Troofer transformed our digital presence. Their team delivered exceptional results on time and within budget. Highly recommended!',
      avatar: 'SJ',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      content: 'The expertise and professionalism of the team is outstanding. They truly understand modern technology needs and deliver beyond expectations.',
      avatar: 'MC',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, GrowthHub',
      content: 'Working with Cifer Troofer was a game-changer for our business. Their innovative solutions helped us scale rapidly.',
      avatar: 'ER',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials-section" className="w-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-[80px] sm:py-[100px] md:py-[120px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-full mb-6">
            <span className="font-medium text-sm">Testimonials</span>
          </div>
          <h2
            className="text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.2] mb-4"
            style={{
              fontFamily: 'Inter',
              color: '#1f2937',
            }}
          >
            What Our Clients Say
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] max-w-[700px] mx-auto"
            style={{
              fontFamily: 'Inter',
              color: '#6b7280',
            }}
          >
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>

              {/* Content */}
              <p
                className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.7] mb-6 italic"
                style={{
                  fontFamily: 'Inter',
                  color: '#4b5563',
                }}
              >
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
