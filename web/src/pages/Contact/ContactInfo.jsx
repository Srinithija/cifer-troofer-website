import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import supabase from '../../utils/supabaseClient';

const ContactInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact-info');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

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
    <section id="contact-info" className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Content */}
          <div className={`flex-1 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
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
          <div className={`flex-1 w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-lg transition-all duration-300">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const name = `${firstName} ${lastName}`.trim();
      const { error: supaError } = await supabase.from('contacts').insert([{ name, email, message }]);
      if (supaError) throw supaError;
      setSuccess('Message sent — thank you!');
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Contact insert error:', err);
      setError(err?.message || JSON.stringify(err) || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Message</label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Tell us about your project..."
        />
      </div>

      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#6366f1] text-white py-3 rounded-lg font-semibold"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

