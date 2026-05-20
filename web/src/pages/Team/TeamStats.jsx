import React, { useState, useEffect } from 'react';
import StatCard from '../../components/ui/StatCard';

const TeamStats = () => {
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

    const element = document.getElementById('team-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '100+', label: 'Happy Clients' },
    { number: '250+', label: 'Projects Completed' },
  ];

  return (
    <section id="team-stats" className="w-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamStats;
