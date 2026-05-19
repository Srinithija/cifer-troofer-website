import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import AboutHero from './AboutHero';
import AboutStats from './AboutStats';
import AboutSection from './AboutSection';
import ServicesPreview from './ServicesPreview';
import MissionSection from './MissionSection';
import BeliefsSection from './BeliefsSection';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Cifer Troofer | Innovative Digital Solutions</title>
        <meta
          name="description"
          content="Learn about Cifer Troofer - a team of passionate innovators delivering exceptional digital solutions including app development, website design, UI/UX, and branding."
        />
        <meta property="og:title" content="About Cifer Troofer | Innovative Digital Solutions" />
        <meta property="og:description" content="Learn about Cifer Troofer - a team of passionate innovators delivering exceptional digital solutions." />
      </Helmet>

      <Header />
      
      <main>
        <AboutHero />
        <AboutStats />
        <AboutSection />
        <ServicesPreview />
        <MissionSection />
        <BeliefsSection />
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
