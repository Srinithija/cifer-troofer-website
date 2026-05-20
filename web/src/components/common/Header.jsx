import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { Link, useLocation } from 'react-router-dom';
import { courseList } from '../../data/courses';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Courses', href: '/courses' },
    { label: 'Shop', href: '/shop' },
    { label: 'Team', href: '/team' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const serviceItems = [
    { label: 'Clone App Development', href: '/services/clone-app-development' },
    { label: 'Logo & Branding Design', href: '/services/branding-design' },
    { label: 'UI / UX Designing', href: '/services/ui-ux-design' },
    { label: 'Website Development', href: '/services/website-development' },
    { label: 'E-Commerce Development', href: '/services/ecommerce-development' },
    { label: 'Custom App Development', href: '/services/custom-app-development' },
    { label: 'Online Marketing', href: '/services/online-marketing' },
    { label: 'AI Automation & Chatbot Solutions', href: '/services/ai-automation' },
  ];

  const courseItems = courseList.map((c) => ({ label: c.title, href: `/courses/${c.slug}` }));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={twMerge(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-white border-b border-gray-200'
      )}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity">
            <img
              src="/images/img_cropped_logo_1.png"
              alt="Cifer Troofer Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            />
            <h1
              className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
              style={{
                fontFamily: 'Inter',
                color: '#1f2937',
              }}
            >
              Cifer Troofer
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 sm:gap-8">
              {menuItems?.map((item, index) => (
                <li key={index} className={item?.href === '/services' ? 'relative group' : undefined}>
                  {item?.href === '/services' ? (
                    <>
                      <Link
                        to={item?.href}
                        onClick={handleMenuClick}
                        className={twMerge(
                          'text-base sm:text-lg font-medium transition-colors duration-200 hover:text-[#6366f1]',
                          (location.pathname === item?.href || location.pathname.startsWith('/services'))
                            ? 'text-[#6366f1]'
                            : 'text-gray-700'
                        )}
                        style={{
                          fontFamily: 'Inter',
                        }}
                      >
                        {item?.label}
                      </Link>

                      <div className="absolute left-0 top-full z-20 mt-3 w-[260px] rounded-3xl border border-gray-200 bg-white shadow-2xl opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 translate-y-2">
                        <div className="p-4 space-y-2">
                          {serviceItems.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.href}
                              onClick={() => {
                                handleMenuClick();
                                setIsServicesOpen(false);
                              }}
                              className="block rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#eef2ff] hover:text-[#4338ca] transition-colors"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item?.href}
                      onClick={handleMenuClick}
                      className={twMerge(
                        'text-base sm:text-lg font-medium transition-colors duration-200 hover:text-[#6366f1]',
                        location.pathname === item?.href
                          ? 'text-[#6366f1]'
                          : 'text-gray-700',
                        item?.label === 'Contact Us' && 'px-5 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300'
                      )}
                      style={{
                        fontFamily: 'Inter',
                      }}
                    >
                      {item?.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-[#6366f1] rounded-lg"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav
          className={twMerge(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-[840px] pb-4' : 'max-h-0'
          )}
        >
          <ul className="flex flex-col gap-2 pt-2">
            {menuItems?.map((item, index) => {
              if (item?.href === '/services') {
                return (
                  <li key={index} className="space-y-1">
                    <div className="flex items-center justify-between rounded-lg bg-[#f8fafc] px-4 py-3 text-base font-medium text-gray-800">
                      <Link
                        to={item.href}
                        onClick={() => {
                          handleMenuClick();
                          setIsServicesOpen(false);
                        }}
                        className="flex-1"
                        style={{ fontFamily: 'Inter' }}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setIsServicesOpen((prev) => !prev)}
                        className="text-gray-600 hover:text-[#6366f1] transition-colors"
                        aria-label="Toggle service submenu"
                      >
                        {isServicesOpen ? '−' : '+'}
                      </button>
                    </div>
                    {isServicesOpen && (
                      <ul className="space-y-1 rounded-2xl border border-gray-200 bg-white p-2">
                        {serviceItems.map((service, serviceIndex) => (
                          <li key={serviceIndex}>
                            <Link
                              to={service.href}
                              onClick={() => {
                                handleMenuClick();
                                setIsServicesOpen(false);
                              }}
                              className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#eef2ff] hover:text-[#4338ca] transition-colors"
                              style={{ fontFamily: 'Inter' }}
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={index}>
                  <Link
                    to={item?.href}
                    onClick={handleMenuClick}
                    className={twMerge(
                      'block py-3 px-4 rounded-lg text-base font-medium transition-colors duration-200',
                      location.pathname === item?.href
                        ? 'bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white'
                        : 'text-gray-700 hover:bg-gray-100',
                      item?.label === 'Contact Us' && 'bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white'
                    )}
                    style={{
                      fontFamily: 'Inter',
                    }}
                  >
                    {item?.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;