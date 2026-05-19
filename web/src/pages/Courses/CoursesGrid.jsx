import React from 'react';
import Button from '../../components/ui/Button';

const CoursesGrid = () => {
  const courses = [
    {
      id: 1,
      title: 'Ethical Hacking',
      description: 'Ethical Hacking, is known as penetration testing or white-hat Hacking, is the practice of intentionally probing computer systems,networks',
      bgColor: '#e8f5e9',
      cardBg: '#e5e5e5',
    },
    {
      id: 2,
      title: 'Adv.Ethical Hacking',
      description: 'Advanced ethical Hacking, is known as advanced penetration testing or red teaming, takes the principles and techniques of ethical Hacking to the complexity',
      bgColor: '#fce4ec',
      cardBg: '#e5e5e5',
    },
    {
      id: 3,
      title: 'Hardware Hacking',
      description: 'Hardware Hacking, is known as hardware security research or hardware reverse engineering, is the process of exploring and manipulating electronic devices',
      bgColor: '#fce4ec',
      cardBg: '#e5e5e5',
    },
    {
      id: 4,
      title: 'PCB Design',
      description: 'PCB  design is the process of creating a physical layout of an electronic circuit on a board that provides a platform for connecting components',
      bgColor: '#fce4ec',
      cardBg: '#e5e5e5',
    },
    {
      id: 5,
      title: 'Arduino',
      description: 'Arduino is an open-source electronics platform that consists of both hardware and software components, designed to make it easy for anyone to create interactive and programmablepro',
      bgColor: '#e8f5e9',
      cardBg: '#e5e5e5',
    },
    {
      id: 6,
      title: 'Python',
      description: 'Python is a popular computer programming language used to create software and websites, automate processes, and analyse data. Python is a general language,',
      bgColor: '#e8f5e9',
      cardBg: '#e5e5e5',
    },
    {
      id: 7,
      title: 'Java',
      description: 'Java is a high-level, object-oriented programming language that is designed to be platform-independent and can run on various operating systems without the need for ecompilation.',
      bgColor: '#e8f5e9',
      cardBg: '#e5e5e5',
    },
    {
      id: 8,
      title: 'C Programming',
      description: 'C programming is a versatile and influential programming language that is widely used in system-level programming, software development, and embedded devices..',
      bgColor: '#e8f5e9',
      cardBg: '#e5e5e5',
    },
    {
      id: 9,
      title: 'Data Structures',
      description: 'Data structures, which act as ordered containers or arrangements for effectively storing and organizing data, are important elements of computer science and programming.',
      bgColor: '#e8f5e9',
      cardBg: '#e5e5e5',
    },
    {
      id: 10,
      title: 'Bash Scripting',
      description: 'Bash scripting is the process of writing and running scripts using the Bash command-line interpreter, a sophisticated and commonly used Unix shell.',
      bgColor: '#e8f5e9',
      cardBg: '#e5e5e5',
    },
    {
      id: 11,
      title: 'FULLSTACK DEVELOPMENT',
      description: 'Full-stack website development is the process of designing, constructing, and maintaining a website or online platforms',
      bgColor: '#e8f5e9',
      cardBg: '#e5e5e5',
    },
    {
      id: 12,
      title: 'RED TEAM FIELD BUNDLE',
      description: "Red Team Field Course at Cifer Trooper, From Ethical Hacking and Advanced Hacking Techniques to Hardware Hacking, Arduino Mastery, and PCB Designing, this all-in-one course equips",
      bgColor: '#e8f5e9',
      cardBg: '#e5e5e5',
    },
  ];

  return (
    <section className="w-full py-[28px] sm:py-[36px] md:py-[42px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          className="text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-[1.22] text-center mb-[30px] sm:mb-[40px] md:mb-[50px]"
          style={{
            fontFamily: 'Inter',
            color: '#000000',
          }}
        >
          What We Offer
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 ml-0 sm:ml-[26px] md:ml-[52px]">
          {courses?.map((course) => (
            <div
              key={course?.id}
              className="flex flex-col gap-2 border border-[#000000] border-none rounded-xl p-[10px] sm:p-[15px] md:p-[20px]"
              style={{ backgroundColor: course?.cardBg }}
            >
              {/* Icon */}
              <div
                className="w-[44px] h-[44px] rounded-xl"
                style={{ backgroundColor: course?.bgColor }}
              />

              {/* Title */}
              <h3
                className="text-[16px] sm:text-[17px] md:text-[18px] font-semibold leading-[1.22] mt-[4px]"
                style={{
                  fontFamily: 'Inter',
                  color: '#111111',
                }}
              >
                {course?.title}
              </h3>

              {/* Description */}
              <p
                className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.19] w-[92%] sm:w-[96%] md:w-[100%] mb-[4px] sm:mb-[8px] md:mb-[12px]"
                style={{
                  fontFamily: 'Inter',
                  color: '#000000',
                }}
              >
                {course?.description}
              </p>

              {/* Button */}
              <Button
                text="Learn more →"
                text_font_size="16"
                text_font_family="Inter"
                text_font_weight="400"
                text_line_height="20px"
                text_text_align="left"
                text_color="#ffffff"
                fill_background_color="#ff5722ab"
                border_border_radius="4px"
                border_border="none"
                layout_width="auto"
                position="relative"
                margin="0px"
                layout_gap="0px"
                variant="primary"
                size="medium"
                padding="2px 12px 2px 22px"
                className="mb-[4px]"
                onClick={() => {}}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;