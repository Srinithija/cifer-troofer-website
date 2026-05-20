import React, { useState, useEffect } from 'react';

const TeamCard = ({ image, name, role, socialLinks, isVisible = true, delay = 0 }) => {
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
    <div className={`bg-white border border-solid border-[#e5e7eb] rounded-xl p-6 sm:p-8 hover:shadow-2xl hover:border-[#6366f1] transition-all duration-500 hover:-translate-y-2 group ${animationState}`}>
      {/* Image */}
      <div className="w-full aspect-square bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] rounded-xl mb-4 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 bg-[#d1d5db] rounded-full" />
          </div>
        )}
      </div>

      {/* Name */}
      <h3
        className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold leading-[1.3] mb-1 transition-colors duration-300 group-hover:text-[#6366f1]"
        style={{
          fontFamily: 'Inter',
          color: '#1f2937',
        }}
      >
        {name}
      </h3>

      {/* Role */}
      <p
        className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5] mb-4"
        style={{
          fontFamily: 'Inter',
          color: '#6366f1',
        }}
      >
        {role}
      </p>

      {/* Social Links */}
      {socialLinks && socialLinks.length > 0 && (
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 bg-[#f3f4f6] rounded-full flex items-center justify-center hover:bg-[#6366f1] hover:text-white transition-all duration-200 group/social hover:scale-110"
            >
              <img
                src={social.icon}
                alt={social.label}
                className="w-5 h-5 group-hover/social:filter brightness-0 invert"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamCard;
