import React from 'react';
import Button from './Button';

const ServiceCard = ({ icon, title, description, onReadMore }) => {
  return (
    <div className="bg-white border border-solid border-[#e5e7eb] rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 hover:border-[#6366f1] group">
      {/* Icon */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon && (
          <img
            src={icon}
            alt={title}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        )}
      </div>

      {/* Title */}
      <h3
        className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold leading-[1.3] mb-3"
        style={{
          fontFamily: 'Inter',
          color: '#1f2937',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.6] mb-4"
        style={{
          fontFamily: 'Inter',
          color: '#6b7280',
        }}
      >
        {description}
      </p>

      {/* Read More Button */}
      <Button
        text="Read More →"
        text_font_size="14"
        text_font_family="Inter"
        text_font_weight="500"
        text_line_height="20px"
        text_text_align="left"
        text_color="#6366f1"
        fill_background_color="transparent"
        border_border="none"
        border_border_radius="4px"
        padding="0"
        layout_width="auto"
        position="relative"
        margin="0"
        layout_gap="0"
        variant="outline"
        size="sm"
        onClick={onReadMore}
        className="hover:text-[#4f46e5] transition-colors duration-200"
      />
    </div>
  );
};

export default ServiceCard;
