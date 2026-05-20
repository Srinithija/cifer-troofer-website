import React, { useState, useEffect } from 'react';

const StatCard = ({ number, label, icon, isVisible = true, delay = 0 }) => {
  const [animationState, setAnimationState] = useState('opacity-0 translate-y-10');

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimationState('opacity-100 translate-y-0');
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div className={`flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 text-center transition-all duration-700 ${animationState}`}>
      {icon && (
        <img
          src={icon}
          alt=""
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 transition-transform duration-300 hover:scale-110"
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
