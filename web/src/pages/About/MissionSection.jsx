import React, { useState, useEffect } from 'react';

const MissionSection = () => {
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

    const element = document.getElementById('mission-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission-section" className="w-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.2] mb-6"
            style={{
              fontFamily: 'Inter',
              color: '#ffffff',
            }}
          >
            OUR MISSION
          </h2>
          <p
            className="text-[20px] sm:text-[24px] md:text-[28px] font-normal leading-[1.6] max-w-[900px]"
            style={{
              fontFamily: 'Inter',
              color: '#e0e7ff',
            }}
          >
            Turning ideas into scalable digital solutions that drive innovation and help businesses achieve more in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
