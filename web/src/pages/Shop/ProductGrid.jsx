import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import Dropdown from '../../components/ui/Dropdown';
import { addProductToCart } from '../../utils/cartUtils';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const handleAddToCart = (product) => {
    addProductToCart(product);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('product-grid-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

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
    <section id="product-grid-section" className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px] mt-[32px] sm:mt-[48px] md:mt-[56px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter and Sort Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-[24px] sm:mb-[32px] md:mb-[40px]">
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {products?.map((product, index) => {
            const [width, height] = product?.imageSize?.split('*');

            return (
              <div
                key={product?.id}
                className={`bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 flex flex-col hover:shadow-2xl hover:border-[#6366f1] transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Product Image Container */}
                <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-xl p-[48px] sm:p-[60px] md:p-[72px] flex flex-col items-center justify-center mb-6">
                  <img
                    src={product?.image}
                    alt={product?.name}
                    className="object-contain"
                    style={{ width: `${width}px`, height: `${height}px` }}
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-2 flex-grow">
                  <h3
                    className="text-[16px] sm:text-[18px] font-semibold leading-[1.3]"
                    style={{
                      fontFamily: 'Inter',
                      color: '#1f2937',
                    }}
                  >
                    {product?.name}
                  </h3>
                  <p
                    className="text-[14px] sm:text-[15px] font-normal leading-[1.5]"
                    style={{
                      fontFamily: 'Inter',
                      color: '#6b7280',
                    }}
                  >
                    {product?.description}
                  </p>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-[#e5e7eb]">
                  <span
                    className="text-[18px] sm:text-[20px] font-bold"
                    style={{
                      fontFamily: 'Inter',
                      color: '#6366f1',
                    }}
                  >
                    {product?.price}
                  </span>
                  <Button
                    text="Add to Cart"
                    text_font_size="13"
                    text_font_weight="600"
                    text_color="#ffffff"
                    fill_background_color="#6366f1"
                    border_border_radius="8px"
                    border_border="none"
                    className="hover:shadow-lg hover:scale-105 transition-all duration-300"
                    layout_width="auto"
                    position="relative"
                    margin="0"
                    layout_gap="0"
                    variant="primary"
                    onClick={() => handleAddToCart(product)}
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