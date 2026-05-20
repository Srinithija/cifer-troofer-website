import React, { useState, useEffect } from 'react';

const CoursesGrid = () => {
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

    const element = document.getElementById('courses-grid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      id: 1,
      title: 'Ethical Hacking',
      description: 'Ethical Hacking, is known as penetration testing or white-hat Hacking, is the practice of intentionally probing computer systems and networks.',
      bgColor: '#e8f5e9',
    },
    {
      id: 2,
      title: 'Adv. Ethical Hacking',
      description: 'Advanced ethical Hacking, is known as advanced penetration testing or red teaming, takes the principles and techniques to the next level.',
      bgColor: '#fce4ec',
    },
    {
      id: 3,
      title: 'Hardware Hacking',
      description: 'Hardware Hacking, is known as hardware security research or hardware reverse engineering, is the process of exploring electronic devices.',
      bgColor: '#fce4ec',
    },
    {
      id: 4,
      title: 'PCB Design',
      description: 'PCB design is the process of creating a physical layout of an electronic circuit on a board that provides a platform.',
      bgColor: '#fce4ec',
    },
    {
      id: 5,
      title: 'Arduino',
      description: 'Arduino is an open-source electronics platform that consists of both hardware and software components, designed for everyone.',
      bgColor: '#e8f5e9',
    },
    {
      id: 6,
      title: 'Python',
      description: 'Python is a popular computer programming language used to create software and websites, automate processes, and analyse data.',
      bgColor: '#e8f5e9',
    },
    {
      id: 7,
      title: 'Java',
      description: 'Java is a high-level, object-oriented programming language that is designed to be platform-independent.',
      bgColor: '#e8f5e9',
    },
    {
      id: 8,
      title: 'C Programming',
      description: 'C programming is a versatile and influential programming language that is widely used in system-level programming.',
      bgColor: '#e8f5e9',
    },
    {
      id: 9,
      title: 'Data Structures',
      description: 'Data structures, which act as ordered containers, are important elements of computer science and programming.',
      bgColor: '#e8f5e9',
    },
    {
      id: 10,
      title: 'Bash Scripting',
      description: 'Bash scripting is the process of writing and running scripts using the Bash command-line interpreter.',
      bgColor: '#e8f5e9',
    },
    {
      id: 11,
      title: 'Full-Stack Development',
      description: 'Full-stack website development is the process of designing, constructing, and maintaining websites.',
      bgColor: '#e8f5e9',
    },
    {
      id: 12,
      title: 'Red Team Field Bundle',
      description: 'From Ethical Hacking and Advanced Hacking Techniques to Hardware Hacking and PCB Designing.',
      bgColor: '#e8f5e9',
    },
  ];

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
              {/* Icon Container */}
              <div
                className="w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: course?.bgColor }}
              />

              {/* Title */}
              <h3
                className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold leading-[1.3] mb-3 transition-colors duration-300"
                style={{
                  fontFamily: 'Inter',
                  color: '#1f2937',
                }}
              >
                {course?.title}
              </h3>

              {/* Description */}
              <p
                className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.6] mb-6"
                style={{
                  fontFamily: 'Inter',
                  color: '#6b7280',
                }}
              >
                {course?.description}
              </p>

              {/* Learn More Button */}
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                style={{ fontFamily: 'Inter', fontSize: '14px' }}
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;