import React from 'react';
import TeamCard from '../../components/ui/TeamCard';

const TeamGrid = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      socialLinks: [
        { icon: '/images/img_mdi_linkedin.svg', href: '#', label: 'LinkedIn' },
        { icon: '/images/img_material_symbols_mail_outline.svg', href: '#', label: 'Email' },
        { icon: '/images/img_ic_baseline_phone.svg', href: '#', label: 'Phone' },
      ],
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      socialLinks: [
        { icon: '/images/img_mdi_linkedin.svg', href: '#', label: 'LinkedIn' },
        { icon: '/images/img_material_symbols_mail_outline.svg', href: '#', label: 'Email' },
        { icon: '/images/img_ic_baseline_phone.svg', href: '#', label: 'Phone' },
      ],
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      socialLinks: [
        { icon: '/images/img_mdi_linkedin.svg', href: '#', label: 'LinkedIn' },
        { icon: '/images/img_material_symbols_mail_outline.svg', href: '#', label: 'Email' },
        { icon: '/images/img_ic_baseline_phone.svg', href: '#', label: 'Phone' },
      ],
    },
    {
      name: 'Emily Rodriguez',
      role: 'UI/UX Designer',
      socialLinks: [
        { icon: '/images/img_mdi_linkedin.svg', href: '#', label: 'LinkedIn' },
        { icon: '/images/img_material_symbols_mail_outline.svg', href: '#', label: 'Email' },
        { icon: '/images/img_ic_baseline_phone.svg', href: '#', label: 'Phone' },
      ],
    },
    {
      name: 'David Wilson',
      role: 'Project Manager',
      socialLinks: [
        { icon: '/images/img_mdi_linkedin.svg', href: '#', label: 'LinkedIn' },
        { icon: '/images/img_material_symbols_mail_outline.svg', href: '#', label: 'Email' },
        { icon: '/images/img_ic_baseline_phone.svg', href: '#', label: 'Phone' },
      ],
    },
    {
      name: 'Lisa Anderson',
      role: 'Marketing Lead',
      socialLinks: [
        { icon: '/images/img_mdi_linkedin.svg', href: '#', label: 'LinkedIn' },
        { icon: '/images/img_material_symbols_mail_outline.svg', href: '#', label: 'Email' },
        { icon: '/images/img_ic_baseline_phone.svg', href: '#', label: 'Phone' },
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.2] mb-4"
            style={{
              fontFamily: 'Inter',
              color: '#1f2937',
            }}
          >
            Meet Our Team
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.6] max-w-[700px] mx-auto"
            style={{
              fontFamily: 'Inter',
              color: '#6b7280',
            }}
          >
            The talented individuals who make it all happen
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
