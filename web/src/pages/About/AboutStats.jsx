import React from 'react';
import StatCard from '../../components/ui/StatCard';

const AboutStats = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '100+', label: 'Happy Clients' },
    { number: '250+', label: 'Projects Completed' },
  ];

  return (
    <section className="w-full bg-white py-[40px] sm:py-[60px] md:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
