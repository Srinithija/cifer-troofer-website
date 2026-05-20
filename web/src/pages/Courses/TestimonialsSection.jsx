import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
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

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Karthick',
      role: 'Student',
      message: 'The ethical hacking course was comprehensive and hands-on. The instructors made complex concepts easy to understand.',
      avatar: '👨‍💻'
    },
    {
      id: 2,
      name: 'Priya',
      role: 'Student',
      message: 'Excellent learning experience! The course material is up-to-date and the practical labs are incredibly valuable.',
      avatar: '👩‍💻'
    },
    {
      id: 3,
      name: 'Rajesh',
      role: 'Student',
      message: 'Best decision I made for my career. The skills I learned helped me land a great job in cybersecurity.',
      avatar: '👨‍💼'
    },
    {
      id: 4,
      name: 'Sarah',
      role: 'Student',
      message: 'Outstanding course quality! The instructors are experts in their field and very supportive throughout the learning journey.',
      avatar: '👩‍🎓'
    },
  ];

  return (
    <section id="testimonials-section" className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.2] mb-4"
            style={{
              fontFamily: 'Inter',
              color: '#1f2937',
            }}
          >
            What Our Students Say
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] max-w-[700px] mx-auto"
            style={{
              fontFamily: 'Inter',
              color: '#6b7280',
            }}
          >
            Join thousands of satisfied students who have transformed their careers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial?.id}
              className={`bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-[#6366f1] transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>

              {/* Testimonial Message */}
              <p
                className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.6] mb-6"
                style={{
                  fontFamily: 'Inter',
                  color: '#6b7280',
                }}
              >
                "{testimonial?.message}"
              </p>

              {/* Student Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#e5e7eb]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  {testimonial?.avatar}
                </div>
                <div>
                  <h4
                    className="text-[16px] sm:text-[17px] font-semibold leading-[1.3]"
                    style={{
                      fontFamily: 'Inter',
                      color: '#1f2937',
                    }}
                  >
                    {testimonial?.name}
                  </h4>
                  <p
                    className="text-[13px] sm:text-[14px] font-normal leading-[1.3]"
                    style={{
                      fontFamily: 'Inter',
                      color: '#9ca3af',
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
    </section>
  );
};

export default TestimonialsSection;