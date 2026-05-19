import React from 'react';
import StatCard from '../../components/ui/StatCard';

const ServicesStats = () => {
  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '2+', label: 'Years Experience' },
    { number: '24/7', label: 'Fast Support' },
    { number: '30+', label: 'Projects Delivered' },
  ];

  return (
    <section className="w-full bg-white py-[40px] sm:py-[60px] md:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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

export default ServicesStats;
