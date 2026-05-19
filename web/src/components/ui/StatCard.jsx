import React from 'react';

const StatCard = ({ number, label, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 text-center">
      {icon && (
        <img
          src={icon}
          alt=""
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4"
        />
      )}
      <h3
        className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.2]"
        style={{
          fontFamily: 'Inter',
          color: '#6366f1',
        }}
      >
        {number}
      </h3>
      <p
        className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.5] mt-2"
        style={{
          fontFamily: 'Inter',
          color: '#4b5563',
        }}
      >
        {label}
      </p>
    </div>
  );
};

export default StatCard;
