import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Cifer Troofer - Get in Touch</title>
        <meta
          name="description"
          content="Contact Cifer Troofer for innovative digital solutions. Reach out via email, phone, or visit our office in Coimbatore."
        />
        <meta property="og:title" content="Contact Us | Cifer Troofer - Get in Touch" />
        <meta property="og:description" content="Contact Cifer Troofer for innovative digital solutions. Reach out via email, phone, or visit our office." />
      </Helmet>

      <Header />
      
      <main>
        <ContactHero />
        <ContactInfo />
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
