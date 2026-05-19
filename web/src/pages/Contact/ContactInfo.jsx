import React from 'react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: '/images/img_material_symbols_mail_outline.svg',
      label: 'Email',
      value: 'cifertroofer@gmail.com',
      href: 'mailto:cifertroofer@gmail.com',
    },
    {
      icon: '/images/img_ic_baseline_phone.svg',
      label: 'Phone',
      value: '+91 -7339071575',
      href: 'tel:+917339071575',
    },
    {
      icon: '/images/img_mdi_location.svg',
      label: 'Address',
      value: 'No:04, Kathir IT Park, Wisdom Tree, Avinashi Rd, Near Bye Pass, Neelambur, Coimbatore -641048',
      href: '#',
    },
  ];

  return (
    <section className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h2
              className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.2] mb-6"
              style={{
                fontFamily: 'Inter',
                color: '#1f2937',
              }}
            >
              Get in Touch
            </h2>
            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] mb-8"
              style={{
                fontFamily: 'Inter',
                color: '#6b7280',
              }}
            >
              Have a question or want to work together? We'd love to hear from you. Fill out the form or reach out directly.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <img
                      src={detail.icon}
                      alt={detail.label}
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h4
                      className="text-[16px] sm:text-[18px] font-semibold leading-[1.3] mb-1"
                      style={{
                        fontFamily: 'Inter',
                        color: '#1f2937',
                      }}
                    >
                      {detail.label}
                    </h4>
                    <a
                      href={detail.href}
                      className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.5] hover:text-[#6366f1] transition-colors duration-200"
                      style={{
                        fontFamily: 'Inter',
                        color: '#6b7280',
                      }}
                    >
                      {detail.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="flex-1 w-full">
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-2xl p-6 sm:p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-[14px] sm:text-[16px] font-semibold leading-[1.3] mb-2"
                      style={{
                        fontFamily: 'Inter',
                        color: '#1f2937',
                      }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-white border border-solid border-[#e5e7eb] rounded-xl focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all duration-200"
                      style={{
                        fontFamily: 'Inter',
                        color: '#1f2937',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[14px] sm:text-[16px] font-semibold leading-[1.3] mb-2"
                      style={{
                        fontFamily: 'Inter',
                        color: '#1f2937',
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-white border border-solid border-[#e5e7eb] rounded-xl focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all duration-200"
                      style={{
                        fontFamily: 'Inter',
                        color: '#1f2937',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-[14px] sm:text-[16px] font-semibold leading-[1.3] mb-2"
                    style={{
                      fontFamily: 'Inter',
                      color: '#1f2937',
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white border border-solid border-[#e5e7eb] rounded-xl focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all duration-200"
                    style={{
                      fontFamily: 'Inter',
                      color: '#1f2937',
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-[14px] sm:text-[16px] font-semibold leading-[1.3] mb-2"
                    style={{
                      fontFamily: 'Inter',
                      color: '#1f2937',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-white border border-solid border-[#e5e7eb] rounded-xl focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all duration-200 resize-none"
                    style={{
                      fontFamily: 'Inter',
                      color: '#1f2937',
                    }}
                  />
                </div>

                <Button
                  text="Send Message"
                  text_font_size="16"
                  text_font_family="Inter"
                  text_font_weight="600"
                  text_line_height="20px"
                  text_text_align="center"
                  text_color="#ffffff"
                  fill_background_color="#6366f1"
                  border_border_radius="8px"
                  border_border="none"
                  padding="14px 32px"
                  layout_width="full"
                  position="relative"
                  margin="0"
                  layout_gap="0"
                  variant="primary"
                  size="medium"
                  onClick={() => {}}
                  className="hover:shadow-lg hover:scale-105 transition-all duration-300"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
