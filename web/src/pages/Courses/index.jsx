import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import CoursesGrid from './CoursesGrid';
import TestimonialsSection from './TestimonialsSection';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity & Programming Courses | Ethical Hacking, Hardware Hacking & Full-Stack Development</title>
        <meta
          name="description"
          content="Master cybersecurity with expert-led courses in Ethical Hacking, Advanced Hacking, Hardware Hacking, PCB Design, Arduino, Python, Java, C Programming, Data Structures, Bash Scripting, and Full-Stack Development. Building your knowledge more quickly with hands-on training."
        />
        <meta property="og:title" content="Cybersecurity & Programming Courses | Ethical Hacking, Hardware Hacking & Full-Stack Development" />
        <meta property="og:description" content="Master cybersecurity with expert-led courses in Ethical Hacking, Advanced Hacking, Hardware Hacking, PCB Design, Arduino, Python, Java, C Programming, Data Structures, Bash Scripting, and Full-Stack Development. Building your knowledge more quickly with hands-on training." />
      </Helmet>
     <Header />
      <main className="w-full bg-white">
        <HeroSection />
        <CoursesGrid />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
};

export default Courses;