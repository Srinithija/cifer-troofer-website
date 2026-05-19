import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const PagerIndicator = ({
  // Optional parameters (no defaults)
  layout_width,
  margin,
  position,
  
  // Functional props
  totalPages = 5,
  currentPage = 1,
  onPageChange,
  className,
  dotSize = "w-2 h-2",
  activeDotSize = "w-3 h-3",
  dotColor = "bg-gray-300",
  activeDotColor = "bg-orange-500",
  ...props
}) => {
  const [activePage, setActivePage] = useState(currentPage);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  const handlePageClick = (pageIndex) => {
    setActivePage(pageIndex);
    if (typeof onPageChange === 'function') {
      onPageChange(pageIndex);
    }
  };

  return (
    <div
      className={twMerge(
        'flex items-center justify-center gap-2',
        optionalClasses,
        className
      )}
      role="navigation"
      aria-label="Pagination indicators"
      {...props}
    >
      {Array.from({ length: totalPages }, (_, index) => {
        const pageIndex = index + 1;
        const isActive = pageIndex === activePage;
        
        return (
          <button
            key={pageIndex}
            onClick={() => handlePageClick(pageIndex)}
            className={twMerge(
              'rounded-full transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
              isActive ? `${activeDotSize} ${activeDotColor}` : `${dotSize} ${dotColor}`
            )}
            aria-label={`Go to page ${pageIndex}`}
            aria-current={isActive ? 'page' : undefined}
          />
        );
      })}
    </div>
  );
};

export default PagerIndicator;