import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';

const CoursesPreview = () => {
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

    const element = document.getElementById('courses-preview');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      title: 'Ethical Hacking',
      description: 'Master penetration testing and security assessment techniques.',
      students: '2.5k+',
      rating: '4.9',
      price: '$199',
    },
    {
      title: 'Full-Stack Development',
      description: 'Build modern web applications from frontend to backend.',
      students: '3.2k+',
      rating: '4.8',
      price: '$249',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Learn to build intelligent systems with cutting-edge AI.',
      students: '1.8k+',
      rating: '4.9',
      price: '$299',
    },
    {
      title: 'Cybersecurity',
      description: 'Protect systems and networks from cyber threats.',
      students: '2.1k+',
      rating: '4.7',
      price: '$179',
    },
  ];

  return (
    <section id="courses-preview" className="w-full bg-white py-[80px] sm:py-[100px] md:py-[120px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-full mb-6">
            <span className="font-medium text-sm">Popular Courses</span>
          </div>
          <h2
            className="text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.2] mb-4"
            style={{
              fontFamily: 'Inter',
              color: '#1f2937',
            }}
          >
            Expand Your Knowledge
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] max-w-[700px] mx-auto"
            style={{
              fontFamily: 'Inter',
              color: '#6b7280',
            }}
          >
            Industry-leading courses designed to help you master in-demand skills
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3
                className="text-[18px] sm:text-[20px] font-semibold leading-[1.3] mb-2"
                style={{
                  fontFamily: 'Inter',
                  color: '#1f2937',
                }}
              >
                {course.title}
              </h3>
              <p
                className="text-[14px] sm:text-[15px] font-normal leading-[1.6] mb-4"
                style={{
                  fontFamily: 'Inter',
                  color: '#6b7280',
                }}
              >
                {course.description}
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">👥 {course.students}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span
                  className="text-[20px] sm:text-[24px] font-bold text-[#6366f1]"
                  style={{
                    fontFamily: 'Inter',
                  }}
                >  
                  {course.price}
                </span>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            style={{ fontFamily: 'Inter' }}
          >
            View All Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
