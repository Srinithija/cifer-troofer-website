import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Dropdown from '../../components/ui/Dropdown';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Gadgets/kits', value: 'gadgets' }
  ];

  const sortOptions = [
    { label: 'Sort by: Newest', value: 'newest' },
    { label: 'Sort by: Price Low', value: 'price_low' },
    { label: 'Sort by: Price High', value: 'price_high' }
  ];

  const products = [
    {
      id: 1,
      name: 'Bluetooth Rubber Ducky',
      description: 'Advanced HID injector',
      price: '$79.99',
      image: '/images/img_margin.svg',
      imageSize: '36*44'
    },
    {
      id: 2,
      name: 'Wifi Deauther OLED',
      description: 'Handheld network tool',
      price: '$54.00',
      image: '/images/img_margin_blue_gray_300.svg',
      imageSize: '44*44'
    },
    {
      id: 3,
      name: 'M Tool Pro',
      description: 'RFID Emulation Device',
      price: '$169.00',
      image: '/images/img_margin_blue_gray_300_44x36.svg',
      imageSize: '36*44'
    },
    {
      id: 4,
      name: 'Wifi Analyzer Pro',
      description: 'Spectrum analysis kit',
      price: '$120.00',
      image: '/images/img_margin_blue_gray_300_44x44.svg',
      imageSize: '44*44'
    },
    {
      id: 5,
      name: 'G Ducky Keyboard',
      description: 'Custom injection keyboard',
      price: '$95.00',
      image: '/images/img_margin_blue_gray_300_44x40.svg',
      imageSize: '40*44'
    },
    {
      id: 6,
      name: 'Lazy Pad v2',
      description: 'NFC reading station',
      price: '$45.00',
      image: '/images/img_margin_44x44.svg',
      imageSize: '44*44'
    },
    {
      id: 7,
      name: 'Cyber Bundle',
      description: 'Hardware + Software',
      price: '$299.99',
      image: '/images/img_margin_blue_gray_300_44x30.svg',
      imageSize: '30*44'
    },
    {
      id: 8,
      name: 'Python Exploits',
      description: 'Pre-built scripts pack',
      price: '$29.00',
      image: '/images/img_margin_44x40.svg',
      imageSize: '40*44'
    }
  ];

  return (
    <section className="w-full border border-solid border-[#8e8e93] py-[24px] sm:py-[36px] md:py-[48px] mt-[32px] sm:mt-[48px] md:mt-[56px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter and Sort Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-[24px] sm:mb-[32px] md:mb-[40px]">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <Button
              text="All"
              text_font_size="14"
              text_color="#ffffff"
              fill_background_color="#000000"
              border_border_radius="6px"
              border_border="1px solid #000000"
              padding="8px 24px"
              className="hover:opacity-90"
              layout_width="auto"
              position="relative"
              margin="0"
              layout_gap="0"
              variant="primary"
              size="md"
              onClick={() => {}}
            />
            <Button
              text="Gadgets/kits"
              text_font_size="14"
              text_color="#4b5563"
              fill_background_color="#f3f4f6"
              border_border_radius="6px"
              border_border="1px solid #f3f4f6"
              padding="8px 24px"
              className="hover:bg-gray-200"
              layout_width="auto"
              position="relative"
              margin="0"
              layout_gap="0"
              variant="secondary"
              size="md"
              onClick={() => {}}
            />
          </div>

          {/* Sort and Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
            <Dropdown
              placeholder="Sort by: Newest"
              options={sortOptions}
              text_font_size="14"
              layout_width="100%"
              padding="8px 14px 8px 24px"
              className="sm:w-[200px] md:w-[220px]"
              layout_gap="0"
              position="relative"
              value=""
              onChange={() => {}}
              size="md"
              dropdownClassName=""
            />
            <Button
              text="Filter"
              text_font_size="14"
              text_font_weight="500"
              text_color="#000000"
              fill_background_color="transparent"
              border_border="1px solid #e5e7eb"
              border_border_radius="6px"
              padding="8px 16px 8px 38px"
              className="hover:bg-gray-50"
              layout_width="auto"
              position="relative"
              margin="0"
              layout_gap="0"
              variant="outline"
              size="md"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products?.map((product) => {
            const [width, height] = product?.imageSize?.split('*');
            
            return (
              <div
                key={product?.id}
                className="border border-solid border-[#f3f4f6] rounded-xl p-4 flex flex-col hover:shadow-md transition-shadow duration-200"
              >
                {/* Product Image Container */}
                <div className="bg-[#e5e7eb] rounded-lg p-[48px] sm:p-[60px] md:p-[98px] flex flex-col items-center justify-center mb-4">
                  <img
                    src={product?.image}
                    alt={product?.name}
                    className="object-contain"
                    style={{ width: `${width}px`, height: `${height}px` }}
                  />
                  <p
                    className="text-xs text-[#9ca3af] mt-2 text-center"
                    style={{
                      fontFamily: 'Inter',
                      lineHeight: '15px'
                    }}
                  >
                    {product?.name}
                  </p>
                </div>
                {/* Product Info */}
                <div className="flex flex-col gap-1 flex-grow">
                  <h3
                    className="text-[16px] sm:text-[18px] font-semibold leading-[1.22] text-[#000000]"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {product?.name}
                  </h3>
                  <p
                    className="text-sm text-[#6b7280] leading-[1.21]"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {product?.description}
                  </p>
                </div>
                {/* Price and Add to Cart */}
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-[#f3f4f6]">
                  <span
                    className="text-[18px] sm:text-[20px] font-bold text-[#000000]"
                    style={{
                      fontFamily: 'Inter',
                      lineHeight: '25px'
                    }}
                  >
                    {product?.price}
                  </span>
                  <Button
                    text="Add to Cart"
                    text_font_size="12"
                    text_font_weight="500"
                    text_color="#ffffff"
                    fill_background_color="#000000"
                    border_border_radius="4px"
                    border_border="1px solid #000000"
                    padding="8px 16px"
                    className="hover:opacity-90"
                    layout_width="auto"
                    position="relative"
                    margin="0"
                    layout_gap="0"
                    variant="primary"
                    size="sm"
                    onClick={() => {}}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;