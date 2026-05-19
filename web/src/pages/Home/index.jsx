import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HomeHero from './HomeHero';
import AboutPreview from './AboutPreview';
import HomeServices from './HomeServices';
import HomeStats from './HomeStats';
import CoursesPreview from './CoursesPreview';
import TestimonialsSection from './TestimonialsSection';
import ContactCTA from './ContactCTA';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Cifer Troofer | Innovative Digital Solutions</title>
        <meta
          name="description"
          content="Transform your ideas into digital reality with Cifer Troofer. We provide AI solutions, cybersecurity tools, web development, and cutting-edge digital experiences."
        />
        <meta property="og:title" content="Cifer Troofer | Innovative Digital Solutions" />
        <meta property="og:description" content="Transform your ideas into digital reality with Cifer Troofer." />
      </Helmet>

      <Header />
      
      <main>
        <HomeHero />
        <AboutPreview />
        <HomeServices />
        <HomeStats />
        <CoursesPreview />
        <TestimonialsSection />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
