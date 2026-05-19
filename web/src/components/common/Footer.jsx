import React from 'react';


const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/', icon: '/images/img_material_symbol.svg' },
    { label: 'About', href: '/about', icon: '/images/img_material_symbol.svg' },
    { label: 'Services', href: '/services', icon: '/images/img_material_symbol.svg' },
    { label: 'AI products', href: '/products', icon: '/images/img_material_symbol.svg' },
    { label: 'Case Studies', href: '/case-studies', icon: '/images/img_material_symbol.svg' },
    { label: 'Blog', href: '/blog', icon: '/images/img_material_symbol.svg' },
  ];

  const services = [
    { label: 'AI Automation & Chatbot Solutions', href: '/services/ai-automation' },
    { label: 'Clone App development', href: '/services/clone-app' },
    { label: 'E-Commerce Development', href: '/services/ecommerce' },
    { label: 'Logo & Branding Design', href: '/services/branding' },
  ];

  const company = [
    { label: 'Careers', href: '/careers' },
    { label: 'Our Team', href: '/team' },
    { label: 'Partners', href: '/partners' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ];

  const socialLinks = [
    { icon: '/images/img_flowbite_facebook_solid.svg', href: '#', label: 'Facebook', size: '42*34' },
    { icon: '/images/img_mdi_instagram.svg', href: '#', label: 'Instagram', size: '40*40' },
    { icon: '/images/img_mdi_twitter.svg', href: '#', label: 'Twitter', size: '34*34' },
    { icon: '/images/img_mdi_linkedin.svg', href: '#', label: 'LinkedIn', size: '34*34' },
  ];

  return (
    <footer className="w-full mt-[50px] md:mt-[80px] lg:mt-[102px] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
          {/* Company Info Section */}
          <div className="w-full lg:w-[28%]">
            <h2
              className="text-[28px] sm:text-[32px] md:text-[40px] font-normal leading-[1.5]"
              style={{
                fontFamily: 'Hanuman',
                color: '#000000',
              }}
            >
              Cifer Troofer
            </h2>
            <p
              className="mt-4 sm:mt-5 md:mt-[22px] text-[20px] sm:text-[24px] md:text-[28px] font-normal leading-[1.5]"
              style={{
                fontFamily: 'Hanuman',
                color: '#000000',
              }}
            >
              We build AI solutions that drive innovation and help businesses achieve more.
            </p>
            
            {/* Social Links */}
            <div className="flex items-end gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 ml-[10px]">
              {socialLinks?.map((social, index) => {
                const [width, height] = social?.size?.split('*');
                return (
                  <a
                    key={index}
                    href={social?.href}
                    aria-label={social?.label}
                    className="hover:opacity-80 transition-opacity duration-200"
                  >
                    <img
                      src={social?.icon}
                      alt={social?.label}
                      className={`w-[${width}px] h-[${height}px]`}
                      style={{ width: `${width}px`, height: `${height}px` }}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-[72%] lg:ml-6">
            <div className="flex flex-col md:flex-row gap-8 md:gap-[30px]">
              {/* Quick Links */}
              <div className="w-full md:w-1/3">
                <h3
                  className="text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[1.44] mb-4"
                  style={{
                    fontFamily: 'Hanuman',
                    color: '#000000',
                  }}
                >
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {quickLinks?.map((link, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <img
                        src={link?.icon}
                        alt=""
                        className="w-[52px] h-[52px]"
                      />
                      <a
                        href={link?.href}
                        className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.5] hover:underline transition-all duration-200"
                        style={{
                          fontFamily: 'Hanuman',
                          color: '#000000',
                          marginLeft: '-14px',
                        }}
                      >
                        {link?.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="w-full md:w-1/3">
                <h3
                  className="text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[1.44] mb-4"
                  style={{
                    fontFamily: 'Hanuman',
                    color: '#000000',
                  }}
                >
                  Services
                </h3>
                <ul className="space-y-4 ml-[14px]">
                  {services?.map((service, index) => (
                    <li key={index} className="flex items-start gap-[6px]">
                      <img
                        src="/images/img_material_symbol.svg"
                        alt=""
                        className="w-[6px] h-[14px] mt-[6px]"
                      />
                      <a
                        href={service?.href}
                        className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.45] hover:underline transition-all duration-200"
                        style={{
                          fontFamily: 'Hanuman',
                          color: '#000000',
                        }}
                      >
                        {service?.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="w-full md:w-1/3">
                <h3
                  className="text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[1.44] mb-4"
                  style={{
                    fontFamily: 'Hanuman',
                    color: '#000000',
                  }}
                >
                  Company
                </h3>
                <ul className="space-y-2 ml-[14px]">
                  {company?.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item?.href}
                        className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.5] hover:underline transition-all duration-200"
                        style={{
                          fontFamily: 'Hanuman',
                          color: '#000000',
                        }}
                      >
                        {item?.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-full lg:w-[18%] lg:ml-[10px] mt-8 lg:mt-0">
            <h3
              className="text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[1.44] mb-4 text-center lg:text-left"
              style={{
                fontFamily: 'Hanuman',
                color: '#000000',
              }}
            >
              Contacts
            </h3>
            
            {/* Address */}
            <div className="flex gap-1 items-start mb-4">
              <img
                src="/images/img_mdi_location.svg"
                alt="Location"
                className="w-[22px] h-[22px] mt-1"
              />
              <p
                className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.45]"
                style={{
                  fontFamily: 'Hanuman',
                  color: '#000000',
                }}
              >
                No:04, Kathir IT Park, Wisdom Tree, Avinashi Rd, Near Bye Pass, Neelambur, Coimbatore -641048
              </p>
            </div>

            {/* Email */}
            <div className="flex gap-1 items-center mb-2">
              <img
                src="/images/img_material_symbols_mail_outline.svg"
                alt="Email"
                className="w-[22px] h-[22px]"
              />
              <a
                href="mailto:cifertroofer@gmail.com"
                className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.5] hover:underline"
                style={{
                  fontFamily: 'Hanuman',
                  color: '#000000',
                }}
              >
                cifertroofer@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex gap-[6px] items-center">
              <img
                src="/images/img_ic_baseline_phone.svg"
                alt="Phone"
                className="w-[22px] h-[22px]"
              />
              <a
                href="tel:+917339071575"
                className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.5] hover:underline"
                style={{
                  fontFamily: 'Hanuman',
                  color: '#000000',
                }}
              >
                +91 -7339071575
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 lg:mt-16 text-center pb-6">
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.5]"
            style={{
              fontFamily: 'Hanuman',
              color: '#0000007f',
            }}
          >
            Copyrightclaim@2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;