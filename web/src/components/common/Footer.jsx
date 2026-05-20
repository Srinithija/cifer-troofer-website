import React from 'react';

const Footer = () => {
  // SVG Icons
  const WhatsAppIcon = () => (
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.15-.23.38-.846.927-1.038 1.118-.193.21-.38.23-.677.05-.297-.18-1.256-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.488c-1.54.92-2.846 2.444-3.297 4.12-.45 1.677-.233 3.495.632 5.064 1.798 3.15 5.747 5.15 9.272 5.15 1.141 0 2.26-.172 3.331-.518l.24-.082c3.02-.955 5.518-3.585 6.44-6.999.52-1.897.52-3.908-.133-5.8-.652-1.892-2.239-3.287-4.193-3.982a9.9 9.9 0 00-3.996-.755zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.63c-.794.306-1.459.717-2.126 1.384S.935 3.325.63 4.117C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.863.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.645.07 4.849 0 3.205-.009 3.585-.07 4.849-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.645.07-4.849.07-3.205 0-3.585-.009-4.849-.07-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.645-.07-4.849 0-3.205.009-3.585.07-4.849.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.645-.07 4.849-.07zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 100-8 4 4 0 000 8zm4.965-10.322a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );

  const YouTubeIcon = () => (
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
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
                <WhatsAppIcon />
              </a>

              <a
                href="https://www.instagram.com/cifertrooper?igsh=OGQ5ZDc2ODk2ZA%3D%3D"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.youtube.com/@cifertrooper?si=4eEjLK3zPD-ljX9X"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-red-500 transition-all duration-300 hover:scale-110"
              >
                <YouTubeIcon />
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

            <ul className="space-y-3 text-white/80">
              <li>Clone App Development</li>
              <li>Logo & Branding Design</li>
              <li>UI / UX Designing</li>
              <li>Website Development</li>
              <li>E-Commerce Development</li>
              <li>Custom App Development</li>
              <li>Online Marketing</li>
              <li>AI Automation & Chatbot Solutions</li>
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