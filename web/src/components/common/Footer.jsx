import React from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#4f46e5] via-[#7c3aed] to-[#9333ea] text-white mt-[80px]">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cifer Trooper
            </h2>

            <p className="text-white/80 leading-7 text-[16px]">
              We create innovative AI-powered digital solutions that help
              businesses grow smarter and faster.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="https://api.whatsapp.com/send?phone=917339071575"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp size={22} />
              </a>

              <a
                href="https://www.instagram.com/cifertrooper?igsh=OGQ5ZDc2ODk2ZA%3D%3D"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://www.youtube.com/@cifertrooper?si=4eEjLK3zPD-ljX9X"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-red-500 transition-all duration-300 hover:scale-110"
              >
                <FaYoutube size={22} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/80">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>

              <li>
                <a href="/courses" className="hover:text-white transition">
                  Courses
                </a>
              </li>

              <li>
                <a href="/shop" className="hover:text-white transition">
                  Shop
                </a>
              </li>

              <li>
                <a href="/team" className="hover:text-white transition">
                  Team
                </a>
              </li>

                <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-white/80">
              <li>AI Automation</li>
              <li>Chatbot Solutions</li>
              <li>E-Commerce</li>
              <li>Branding Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-white/80 leading-7">

              <p>
                No:04, Kathir IT Park,
                Avinashi Rd, Coimbatore
              </p>

              <a
                href="mailto:cifertroofer@gmail.com"
                className="block hover:text-white transition"
              >
                cifertroofer@gmail.com
              </a>

              <a
                href="tel:+917339071575"
                className="block hover:text-white transition"
              >
                +91 7339071575
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/20 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/70 text-sm">

          <p>
            © 2026 Cifer Trooper. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;