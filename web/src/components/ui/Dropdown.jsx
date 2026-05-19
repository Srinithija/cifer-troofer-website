import React, { useState, useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const dropdownClasses = cva(
  'relative inline-block w-full transition-all duration-200',
  {
    variants: {
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

const Dropdown = ({
  // Required parameters with defaults
  placeholder = "Sort by: Newest",
  text_font_size = "14",
  text_font_family = "Inter",
  text_font_weight = "400",
  text_line_height = "17px",
  text_text_align = "left",
  text_color = "#000000",
  fill_background_color = "#ffffff",
  border_border = "1 solid #e5e7eb",
  border_border_radius = "6px",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Functional props
  options = [],
  value,
  onChange,
  disabled = false,
  size,
  className,
  dropdownClassName,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef(null);

  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Parse border string
  const parsedBorder = border_border ? border_border?.replace(/(\d+)\s+(solid|dashed|dotted)\s+/, '$1px $2 ') : '1px solid #e5e7eb';

  // Build inline styles for required parameters
  const dropdownStyles = {
    fontSize: text_font_size ? `${text_font_size}px` : '14px',
    fontFamily: text_font_family || 'Inter',
    fontWeight: text_font_weight || '400',
    lineHeight: text_line_height || '17px',
    textAlign: text_text_align || 'left',
    color: text_color || '#000000',
    backgroundColor: fill_background_color || '#ffffff',
    border: parsedBorder,
    borderRadius: border_border_radius || '6px',
    padding: hasValidPadding ? padding : '8px 12px',
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef?.current && !dropdownRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option) => {
    setSelectedValue(option?.value || option);
    setIsOpen(false);
    if (typeof onChange === 'function') {
      onChange(option?.value || option);
    }
  };

  const displayValue = selectedValue 
    ? (options?.find(opt => (opt?.value || opt) === selectedValue)?.label || selectedValue)
    : placeholder;

  return (
    <div
      ref={dropdownRef}
      className={twMerge(
        dropdownClasses({ size }),
        optionalClasses,
        className
      )}
      {...props}
    >
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        style={dropdownStyles}
        className={twMerge(
          'flex items-center justify-between w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200',
          hasValidGap && `gap-[${layout_gap}]`
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate">{displayValue}</span>
        <svg
          className={twMerge(
            'w-4 h-4 transition-transform duration-200',
            isOpen && 'transform rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && options?.length > 0 && (
        <ul
          role="listbox"
          className={twMerge(
            'absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto',
            dropdownClassName
          )}
          style={{
            borderRadius: border_border_radius || '6px',
          }}
        >
          {options?.map((option, index) => {
            const optionValue = option?.value || option;
            const optionLabel = option?.label || option;
            const isSelected = optionValue === selectedValue;

            return (
              <li
                key={index}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option)}
                className={twMerge(
                  'px-3 py-2 cursor-pointer transition-colors duration-150 hover:bg-gray-100',
                  isSelected && 'bg-blue-50 text-blue-600 font-medium'
                )}
                style={{
                  fontSize: text_font_size ? `${text_font_size}px` : '14px',
                  fontFamily: text_font_family || 'Inter',
                }}
              >
                {optionLabel}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;