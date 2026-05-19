import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import TeamHero from './TeamHero';
import TeamStats from './TeamStats';
import WhoWeAre from './WhoWeAre';
import TeamGrid from './TeamGrid';

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | Cifer Troofer - Meet the Experts</title>
        <meta
          name="description"
          content="Meet the talented team at Cifer Troofer - passionate innovators, designers, and problem-solvers committed to delivering exceptional digital solutions."
        />
        <meta property="og:title" content="Our Team | Cifer Troofer - Meet the Experts" />
        <meta property="og:description" content="Meet the talented team at Cifer Troofer - passionate innovators and problem-solvers." />
      </Helmet>

      <Header />
      
      <main>
        <TeamHero />
        <TeamStats />
        <WhoWeAre />
        <TeamGrid />
      </main>

      <Footer />
    </>
  );
};

export default TeamPage;
