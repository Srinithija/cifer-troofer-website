import React, { useState, useEffect } from 'react';

const WhoWeAre = () => {
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

    const element = document.getElementById('who-we-are');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const keywords = ['Collaborative', 'Innovative', 'Result Driven'];

  return (
    <section id="who-we-are" className="w-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col items-center text-center max-w-[900px] mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.2] mb-6"
            style={{
              fontFamily: 'Inter',
              color: '#1f2937',
            }}
          >
            A Team of Creators, Thinkers & Doers
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.7] mb-8"
            style={{
              fontFamily: 'Inter',
              color: '#4b5563',
            }}
          >
            At Cifer Troofer, our strength lies in our people. We collaborate, innovate, and push boundaries to help businesses grow and succeed in the digital world.
          </p>

          {/* Keywords */}
          <div className="flex flex-wrap justify-center gap-4">
            {keywords.map((keyword, index) => (
              <div
                key={index}
                className={`px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-full font-semibold text-[16px] sm:text-[18px] hover:shadow-lg hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  fontFamily: 'Inter',
                  transitionDelay: `${(index + 1) * 100}ms`,
                }}
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
