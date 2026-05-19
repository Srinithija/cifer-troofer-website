import React from 'react';

const MissionSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
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
