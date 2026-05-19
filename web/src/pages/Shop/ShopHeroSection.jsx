import React from 'react';
import BreadCrumb from '../../components/ui/BreadCrumb';

const ShopHeroSection = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' }
  ];

  return (
    <section className="w-full bg-[#eaeafa] shadow-[0px_4px_4px_#0000003f]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-[40px] sm:py-[60px] md:py-[80px]">
          <h1 
            className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.23] mb-2"
            style={{
              fontFamily: 'Inter',
              color: '#000000'
            }}
          >
            Shop
          </h1>
          <BreadCrumb 
            items={breadcrumbItems}
            layout_gap="22px"
            layout_justify_content="center"
            layout_align_items="center"
            layout_width="auto"
            margin="0"
            position="relative"
            className="mt-2 sm:mt-3 md:mt-4"
            linkClassName="text-sm md:text-base text-[#6b7280]"
            activeClassName="text-sm md:text-base text-[#000000] font-medium"
            separatorClassName="text-[#000000]"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopHeroSection;