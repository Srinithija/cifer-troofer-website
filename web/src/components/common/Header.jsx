import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
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
                <li key={index}>
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
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <ul className="flex flex-col gap-2 pt-2">
            {menuItems?.map((item, index) => (
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
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;