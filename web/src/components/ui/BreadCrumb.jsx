import React from 'react';
import { twMerge } from 'tailwind-merge';

const BreadCrumb = ({
  // Optional parameters (no defaults)
  layout_gap,
  layout_justify_content,
  layout_align_items,
  layout_width,
  margin,
  position,
  
  // Functional props
  items = [],
  separator = '/',
  className,
  linkClassName,
  activeClassName,
  separatorClassName,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidJustify = layout_justify_content && typeof layout_justify_content === 'string' && layout_justify_content?.trim() !== '';
  const hasValidAlign = layout_align_items && typeof layout_align_items === 'string' && layout_align_items?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Map justify-content values
  const justifyMap = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    spaceBetween: 'justify-between',
    spaceAround: 'justify-around',
    spaceEvenly: 'justify-evenly',
  };

  // Map align-items values
  const alignMap = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : 'gap-2',
    hasValidJustify ? justifyMap?.[layout_justify_content] || 'justify-start' : 'justify-start',
    hasValidAlign ? alignMap?.[layout_align_items] || 'items-center' : 'items-center',
    hasValidWidth ? `w-[${layout_width}]` : 'w-auto',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  if (!items || items?.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={twMerge(
        'flex flex-wrap',
        optionalClasses,
        className
      )}
      {...props}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {items?.map((item, index) => {
          const isLast = index === items?.length - 1;
          const itemHref = item?.href || item?.path || '#';
          const itemLabel = item?.label || item?.name || item;

          return (
            <li key={index} className="flex items-center gap-2">
              {isLast ? (
                <span
                  className={twMerge(
                    'text-gray-900 font-medium',
                    activeClassName
                  )}
                  aria-current="page"
                >
                  {itemLabel}
                </span>
              ) : (
                <>
                  <a
                    href={itemHref}
                    className={twMerge(
                      'text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-150',
                      linkClassName
                    )}
                  >
                    {itemLabel}
                  </a>
                  <span
                    className={twMerge(
                      'text-gray-400 select-none',
                      separatorClassName
                    )}
                    aria-hidden="true"
                  >
                    {separator}
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;