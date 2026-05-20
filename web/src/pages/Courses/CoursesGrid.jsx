import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { courseList } from '../../data/courses';

const CoursesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('courses-grid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const courses = courseList;

  return (
    <section id="courses-grid" className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
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
            What We Offer
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {courses?.map((course, index) => (
            <div
              key={course?.id}
              className={`bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-[#6366f1] transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 mb-6">
                <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
              </div>

              <h3
                className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold leading-[1.3] mb-3 transition-colors duration-300"
                style={{
                  fontFamily: 'Inter',
                  color: '#1f2937',
                }}
              >
                {course.title}
              </h3>

              <p
                className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.8] mb-6"
                style={{
                  fontFamily: 'Inter',
                  color: '#4b5563',
                }}
              >
                {course.description}
              </p>

              <button
                type="button"
                onClick={() => navigate(`/courses/${course.slug}`)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ fontFamily: 'Inter', fontSize: '14px' }}
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;