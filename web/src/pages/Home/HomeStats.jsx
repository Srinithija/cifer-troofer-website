import React, { useState, useEffect } from 'react';

const HomeStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    support: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('home-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = { years: 3, clients: 100, projects: 50, support: 24 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        projects: Math.floor(targets.projects * progress),
        support: Math.floor(targets.support * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    { number: `${counts.years}+`, label: 'Years Experience', icon: '📅' },
    { number: `${counts.clients}+`, label: 'Happy Clients', icon: '😊' },
    { number: `${counts.projects}+`, label: 'Projects Completed', icon: '🎯' },
    { number: `${counts.support}/7`, label: 'Support Available', icon: '💬' },
  ];

  return (
    <section id="home-stats" className="w-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] py-[80px] sm:py-[100px] md:py-[120px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.2] mb-4"
            style={{
              fontFamily: 'Inter',
              color: '#ffffff',
            }}
          >
            Our Impact in Numbers
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] max-w-[700px] mx-auto"
            style={{
              fontFamily: 'Inter',
              color: '#e0e7ff',
            }}
          >
            We measure our success by the results we deliver to our clients
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3
                className="text-[40px] sm:text-[48px] md:text-[56px] font-bold leading-[1] mb-2"
                style={{
                  fontFamily: 'Inter',
                  color: '#ffffff',
                }}
              >
                {stat.number}
              </h3>
              <p
                className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.5]"
                style={{
                  fontFamily: 'Inter',
                  color: '#e0e7ff',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
