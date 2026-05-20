import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesContent = {
    'clone-app-development': {
      title: 'Clone App Development',
      description: 'Build your own version of popular apps',
      metaDescription: 'Expert clone app development for Uber, Netflix, Tinder, Zomato, and more. Customized, scalable solutions for startups and enterprises.',
      hero: {
        title: 'Clone App Development Services',
        subtitle: 'Build scalable, customized versions of popular apps',
        image: '/images/img_img.svg',
      },
      sections: [
        {
          title: 'Cifer Trooper – Clone App Development Company',
          content: 'At Cifer Trooper, we specialize in mobile app clone development for startups, enterprises, and mid-level businesses. With over a decade of experience, our team has delivered Uber clone apps, Netflix clone platforms, Amazon clone marketplaces, and Gojek-style super apps that help brands launch quickly and scale efficiently.\n\nWe combine UI/UX design, branding, and digital marketing to create customizable, secure, and scalable clone apps for industries like ride-hailing, food delivery, OTT streaming, dating, e-learning, gaming, and e-commerce.',
        },
        {
          title: 'Ride-Hailing & Taxi App Clone Development',
          content: 'Looking to build your own Uber-like taxi booking app? Our ride-hailing app clone solutions are designed with advanced features such as real-time GPS tracking, driver earnings dashboard, multiple payment gateways, and customer support integration.\n\nWe develop:\n• Uber Clone App Development for global ride-hailing businesses\n• Ola Clone App with regional language and wallet integration\n• Lyft Clone App focusing on affordable ride-sharing\n• Bolt Clone App with eco-friendly transportation solutions\n• InDriver Clone App featuring rider-driven fare bidding\n\nWith Cifer Trooper, you can launch your taxi booking app clone quickly, reduce time-to-market, and stay ahead of competitors.',
        },
        {
          title: 'Dating & Social Media App Clones',
          content: 'Build engaging social media clone apps and dating app clones to connect users worldwide. Our Tinder clone app comes with swipe features, AI-driven matching, chat, and monetization tools.\n\nWe also create:\n• Bumble Clone App with women-first engagement\n• Hinge Clone App for long-term relationship matching\n• OnlyFans Clone App for creator monetization\n• Instagram Clone App with reels, stories, and live streaming\n\nOur social networking clone apps are customizable, secure, and scalable.',
        },
        {
          title: 'E-Commerce App Clone Development',
          content: 'Our Amazon clone app development allows you to launch a scalable e-commerce marketplace clone with multiple vendor management, secure payment integration, and logistics support.\n\nWe also provide:\n• Flipkart Clone App for large-scale e-commerce in emerging markets\n• Shopify Clone App for quick online store creation\n\nWith e-commerce app clone development, you can start selling online within weeks.',
        },
        {
          title: 'Why Cifer Trooper for Clone App Development?',
          content: '• 10+ Years of App Development Expertise\n• Fully Customizable & Scalable Codebase\n• Complete Branding, UI/UX & Marketing Support\n• Fast Time-to-Market\n• Secure & Compliant Solutions',
        },
      ],
      cta: 'Get Your Clone App Built Today',
    },
    'branding-design': {
      title: 'Logo & Branding Design',
      description: 'Create a strong brand identity',
      metaDescription: 'Professional logo and branding design services. Create a memorable brand identity with our expert designers.',
      hero: {
        title: 'Logo & Branding Design Services',
        subtitle: 'Build a powerful brand identity that stands out',
        image: '/images/img_img.svg',
      },
      sections: [
        {
          title: 'Professional Branding Solutions',
          content: 'Your brand is the face of your business. We create compelling logos and complete brand kits that resonate with your target audience and establish a strong market presence.\n\nOur branding services include:\n• Logo Design & Variations\n• Brand Guidelines & Style Sheets\n• Color Palette & Typography Selection\n• Brand Messaging & Positioning\n• Visual Identity Systems',
        },
        {
          title: 'Complete Brand Kit',
          content: 'We deliver comprehensive brand kits that ensure consistency across all platforms:\n• Primary & Secondary Logos\n• Color Specifications (HEX, RGB, CMYK)\n• Font Families & Usage Rules\n• Logo Spacing & Protection\n• Application Examples\n• Brand Voice Guidelines',
        },
        {
          title: 'Why Strong Branding Matters',
          content: 'A professional brand identity:\n• Builds Trust & Credibility\n• Increases Brand Recognition\n• Attracts Target Customers\n• Differentiates You From Competitors\n• Creates Emotional Connection\n• Supports Long-Term Growth',
        },
      ],
      cta: 'Start Your Branding Journey',
    },
    'ui-ux-design': {
      title: 'UI / UX Designing',
      description: 'Modern, user-friendly interface design',
      metaDescription: 'Expert UI/UX design for mobile apps and websites. User-centered design that drives engagement and conversions.',
      hero: {
        title: 'UI / UX Designing Services',
        subtitle: 'Create beautiful, intuitive user experiences',
        image: '/images/img_img.svg',
      },
      sections: [
        {
          title: 'User-Centered Design Approach',
          content: 'We create interfaces that are not just beautiful, but highly functional and intuitive. Our UI/UX designers focus on understanding user behavior, pain points, and goals to deliver designs that truly resonate.\n\nOur Design Process:\n• User Research & Analysis\n• Wireframing & Prototyping\n• Visual Design & Branding\n• Interactive Prototypes\n• User Testing & Iteration\n• Development Handoff',
        },
        {
          title: 'Services We Offer',
          content: '• Mobile App UI/UX Design\n• Web Application Design\n• Responsive & Adaptive Design\n• Design Systems & Component Libraries\n• Interaction Design & Animations\n• Accessibility Compliance (WCAG)\n• User Testing & Research',
        },
        {
          title: 'Design Excellence Leads to Results',
          content: 'Great UI/UX design:\n• Increases User Engagement\n• Reduces Support Costs\n• Improves Conversion Rates\n• Builds Brand Loyalty\n• Decreases User Bounce Rate\n• Enhances Overall Product Quality',
        },
      ],
      cta: 'Design Your Perfect Interface',
    },
    'website-development': {
      title: 'Website Development',
      description: 'SEO-friendly, responsive websites',
      metaDescription: 'Professional website development with SEO optimization and responsive design. Build your online presence today.',
      hero: {
        title: 'Website Development Services',
        subtitle: 'Build fast, secure, and SEO-optimized websites',
        image: '/images/img_img.svg',
      },
      sections: [
        {
          title: 'Modern Website Development',
          content: 'We develop high-performance websites that combine beautiful design with powerful functionality. Every website is optimized for speed, SEO, and user experience.\n\nTechnologies We Use:\n• React, Next.js, Vue.js\n• Node.js, Python, PHP\n• Tailwind CSS, Bootstrap\n• SQL & NoSQL Databases\n• Cloud Hosting Solutions',
        },
        {
          title: 'Key Features',
          content: '• Fully Responsive Design\n• Mobile-First Development\n• SEO Optimization\n• Fast Loading Speeds (Lighthouse Grade A)\n• Secure SSL Certificates\n• CMS Integration\n• Analytics & Tracking\n• Contact Forms & Lead Capture',
        },
        {
          title: 'Website Types We Develop',
          content: '• Business & Corporate Websites\n• E-Commerce Platforms\n• Blog & Content Sites\n• SaaS Platforms\n• Portfolio & Agency Sites\n• Membership Websites\n• Community Platforms',
        },
      ],
      cta: 'Build Your Website Today',
    },
    'ecommerce-development': {
      title: 'E-Commerce Development',
      description: 'Scalable online stores with payment integration',
      metaDescription: 'Professional e-commerce development. Launch your online store with secure payments, inventory management, and mobile optimization.',
      hero: {
        title: 'E-Commerce Development Services',
        subtitle: 'Launch your online store and start selling today',
        image: '/images/img_img.svg',
      },
      sections: [
        {
          title: 'Complete E-Commerce Solutions',
          content: 'We build feature-rich e-commerce platforms that drive sales and streamline operations. From product catalogs to payment processing, we handle everything.\n\nPlatforms We Build:\n• Custom E-Commerce Platforms\n• Shopify Integration & Customization\n• WooCommerce Stores\n• Magento Solutions\n• Multi-Vendor Marketplaces',
        },
        {
          title: 'Essential Features Included',
          content: '• Product Management System\n• Shopping Cart & Checkout\n• Multiple Payment Gateways\n• Inventory Management\n• Order Tracking System\n• Customer Accounts & Reviews\n• Email Notifications\n• Abandoned Cart Recovery\n• Mobile App Integration',
        },
        {
          title: 'Payment Integration',
          content: 'We integrate all major payment gateways:\n• Stripe, PayPal, Square\n• Apple Pay, Google Pay\n• Cryptocurrency Payments\n• Bank Transfers\n• COD (Cash on Delivery)\n• Subscription Billing\n• International Payments',
        },
      ],
      cta: 'Launch Your Online Store',
    },
    'custom-app-development': {
      title: 'Custom App Development',
      description: 'Fully custom apps for your unique vision',
      metaDescription: 'Custom mobile app development for iOS, Android, and web. Turn your idea into a powerful, scalable application.',
      hero: {
        title: 'Custom App Development Services',
        subtitle: 'Build powerful apps tailored to your vision',
        image: '/images/img_img.svg',
      },
      sections: [
        {
          title: 'Your Unique App Deserves Custom Development',
          content: 'Turn your unique ideas into powerful apps for iOS, Android, or web — fully custom-built to match your vision, brand, and business goals from start to finish.\n\nWe specialize in:\n• Native iOS & Android Development\n• Cross-Platform Solutions (React Native, Flutter)\n• Progressive Web Apps (PWA)\n• Backend API Development\n• Cloud Integration & DevOps',
        },
        {
          title: 'Development Process',
          content: '• Discovery & Strategy\n• UI/UX Design\n• Full-Stack Development\n• QA & Testing\n• Beta Launch\n• App Store Deployment\n• Ongoing Support & Maintenance\n• Performance Monitoring',
        },
        {
          title: 'Industries We Serve',
          content: '• HealthTech & Telemedicine\n• FinTech & Banking\n• E-Commerce & Retail\n• EdTech & Learning\n• Travel & Hospitality\n• Real Estate & Property\n• Entertainment & Media\n• IoT & Smart Devices',
        },
      ],
      cta: 'Start Your App Project',
    },
    'online-marketing': {
      title: 'Online Marketing',
      description: 'SEO, social media, and digital campaigns',
      metaDescription: 'Digital marketing services including SEO, social media marketing, and targeted ad campaigns to grow your business.',
      hero: {
        title: 'Online Marketing Services',
        subtitle: 'Grow your business with data-driven marketing',
        image: '/images/img_img.svg',
      },
      sections: [
        {
          title: 'Comprehensive Digital Marketing Strategy',
          content: 'We combine multiple digital channels to create a cohesive marketing strategy that drives traffic, leads, and conversions. Our data-driven approach ensures every dollar is optimized.\n\nServices Include:\n• Search Engine Optimization (SEO)\n• Pay-Per-Click Advertising (PPC)\n• Social Media Marketing\n• Content Marketing\n• Email Marketing\n• Conversion Rate Optimization',
        },
        {
          title: 'SEO & Organic Growth',
          content: '• On-Page & Off-Page SEO\n• Keyword Research & Analysis\n• Technical SEO Audits\n• Link Building & Authority\n• Local SEO Optimization\n• SEO Reporting & Analytics\n• Continuous Optimization',
        },
        {
          title: 'Paid Advertising Campaigns',
          content: '• Google Ads (Search, Display, Shopping)\n• Facebook & Instagram Ads\n• LinkedIn Advertising\n• TikTok & YouTube Ads\n• Retargeting Campaigns\n• Budget Optimization\n• A/B Testing & Analysis',
        },
      ],
      cta: 'Grow Your Online Presence',
    },
    'ai-automation': {
      title: 'AI Automation & Chatbot Solutions',
      description: 'Intelligent automation and AI chatbots',
      metaDescription: 'AI automation and intelligent chatbot solutions. Reduce manual tasks and create exceptional customer experiences.',
      hero: {
        title: 'AI Automation & Chatbot Solutions',
        subtitle: 'Work smarter with artificial intelligence',
        image: '/images/img_img.svg',
      },
      sections: [
        {
          title: 'Transform Your Business with AI',
          content: 'AI automation and intelligent chatbots help you work smarter, reduce manual tasks, and create exceptional customer experiences. From customer service to data analysis, AI revolutionizes how you operate.\n\nOur AI Solutions:\n• Intelligent Chatbots\n• Process Automation\n• Predictive Analytics\n• Machine Learning Models\n• Natural Language Processing\n• Computer Vision Solutions',
        },
        {
          title: 'AI Chatbot Features',
          content: '• 24/7 Customer Support\n• Natural Language Understanding\n• Multi-Language Support\n• Sentiment Analysis\n• Context Awareness\n• Learning & Improvement Over Time\n• Integration with Existing Systems\n• Analytics & Reporting',
        },
        {
          title: 'Automation Use Cases',
          content: '• Customer Service Automation\n• Lead Qualification & Scoring\n• Invoice & Document Processing\n• Appointment Scheduling\n• Email & Message Responses\n• Data Entry & Validation\n• Report Generation\n• Social Media Management',
        },
      ],
      cta: 'Automate Your Business Today',
    },
  };

  const service = servicesContent[serviceId];

  if (!service) {
    return (
      <>
        <Header />
        <div className="w-full max-w-[1440px] mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-8">The service you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/services')}
            className="px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg hover:shadow-lg transition"
          >
            Back to Services
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Cifer Trooper</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={`${service.title} | Cifer Trooper`} />
        <meta property="og:description" content={service.metaDescription} />
      </Helmet>

      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] text-white py-[60px] sm:py-[80px] md:py-[100px] lg:py-[140px] relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 text-sm font-semibold">
                    ✨ Our Service
                  </div>
                  <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] mb-6">
                    {service.hero.title}
                  </h1>
                </div>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.8] opacity-95 max-w-[600px]">
                  {service.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-white text-[#6366f1] font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                  >
                    {service.cta}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => navigate('/services')}
                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    View All Services
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex justify-center items-center h-full">
                <div className="w-full max-w-[450px] aspect-square bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-3xl p-12 flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300">
                  <img src={service.hero.image} alt={service.title} className="w-4/5 h-4/5 object-contain drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="w-full bg-white py-[80px] sm:py-[100px] md:py-[140px]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {service.sections.map((section, index) => (
              <div
                key={index}
                className="mb-12 sm:mb-16 md:mb-24 last:mb-0 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Text Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.2]" style={{ color: '#1f2937' }}>
                          {section.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-[16px] sm:text-[18px] leading-[1.8] whitespace-pre-line" style={{ color: '#4b5563' }}>
                      {section.content}
                    </p>
                    {index === 0 && (
                      <button
                        onClick={() => navigate('/contact')}
                        className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                      >
                        Explore This Service
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Visual Element - Card */}
                  <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative h-[400px] bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-3xl p-12 flex items-center justify-center overflow-hidden group hover:shadow-2xl transition-all duration-300">
                      {/* Animated Background */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-white blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white blur-3xl rounded-full translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center space-y-6">
                        <div className="text-7xl group-hover:scale-125 transition-transform duration-300">
                          {index === 0 ? '🎯' : index === 1 ? '🚀' : index === 2 ? '💡' : index === 3 ? '✨' : index === 4 ? '🔥' : index === 5 ? '⚡' : '⭐'}
                        </div>
                        <div className="text-white space-y-2">
                          <p className="text-sm font-semibold opacity-90">Part {index + 1}</p>
                          <p className="text-2xl font-bold line-clamp-2">{section.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index !== service.sections.length - 1 && (
                  <div className="mt-16 md:mt-24 flex items-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-[#6366f1] to-transparent" />
                    <div className="text-[#6366f1] opacity-50">✦</div>
                    <div className="flex-1 h-px bg-gradient-to-l from-[#6366f1] to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] py-[80px] sm:py-[100px] md:py-[140px] relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white blur-3xl rounded-full translate-x-1/2 translate-y-1/2 animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Main CTA Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 sm:p-16 md:p-20 border border-white/30 hover:border-white/50 transition-all duration-300 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-8 text-white">
                  <div className="space-y-6">
                    <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold leading-[1.1]">
                      Ready to Get Started?
                    </h2>
                    <p className="text-[16px] sm:text-[18px] leading-[1.8] opacity-95 max-w-[600px]">
                      Transform your vision into reality with our expert team. Let's discuss how we can deliver exceptional results tailored to your specific needs.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-4 py-6">
                    {[
                      { num: '500+', label: 'Happy Clients' },
                      { num: '10+', label: 'Years Experience' },
                      { num: '100%', label: 'Satisfaction' },
                      { num: '24/7', label: 'Support' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all">
                        <p className="text-2xl sm:text-3xl font-bold">{item.num}</p>
                        <p className="text-xs sm:text-sm opacity-90 mt-1">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={() => navigate('/contact')}
                      className="px-8 py-4 bg-white text-[#6366f1] font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                    >
                      {service.cta}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <button
                      onClick={() => navigate('/services')}
                      className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to Services
                    </button>
                  </div>
                </div>

                {/* Right Visual - Floating Card */}
                <div className="hidden lg:flex justify-center items-center">
                  <div className="relative w-full aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl border border-white/30 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center space-y-6">
                        <div className="text-7xl animate-bounce">🎉</div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-white">Let's Create Something Amazing</h3>
                          <p className="text-white/80 text-sm">Your success is our priority</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: '⭐', label: 'Industry Leading' },
                { icon: '🏆', label: 'Award Winning' },
                { icon: '✓', label: 'Certified' },
                { icon: '🚀', label: 'Innovative' },
              ].map((badge, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 group cursor-default">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{badge.icon}</div>
                  <p className="text-white font-semibold text-sm">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServiceDetail;
