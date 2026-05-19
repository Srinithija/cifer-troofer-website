import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ServicesHero from './ServicesHero';
import ServicesStats from './ServicesStats';
import ServicesGrid from './ServicesGrid';
import HowWeWork from './HowWeWork';
import WhyChoose from './WhyChoose';
import ServicesCTA from './ServicesCTA';
import ServicesTestimonials from './ServicesTestimonials';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Cifer Troofer - Digital Solutions</title>
        <meta
          name="description"
          content="Explore our comprehensive services including AI solutions, web development, mobile apps, cloud solutions, cybersecurity, and digital marketing."
        />
        <meta property="og:title" content="Our Services | Cifer Troofer - Digital Solutions" />
        <meta property="og:description" content="Explore our comprehensive services including AI solutions, web development, mobile apps, and more." />
      </Helmet>

      <Header />
      
      <main>
        <ServicesHero />
        <ServicesStats />
        <ServicesGrid />
        <HowWeWork />
        <WhyChoose />
        <ServicesCTA />
        <ServicesTestimonials />
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;
