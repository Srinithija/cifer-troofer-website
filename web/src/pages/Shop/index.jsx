import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ShopHeroSection from './ShopHeroSection';
import ProductGrid from './ProductGrid';
import CyberPlayground from './CyberPlayground';
import FeatureHighlights from './FeatureHighlights';

const ShopPage = () => {
  return (
    <>
      <Helmet>
        <title>Shop Premium Cybersecurity Tools & Hardware | Cifer Troofer</title>
        <meta 
          name="description" 
          content="Shop cutting-edge cybersecurity hardware including Bluetooth Rubber Ducky $79.99, WiFi Deauther OLED $54, M Tool Pro $169, and more. Fast global delivery, secure payment, quality guarantee." 
        />
        <meta property="og:title" content="Shop Premium Cybersecurity Tools & Hardware | Cifer Troofer" />
        <meta property="og:description" content="Shop cutting-edge cybersecurity hardware including Bluetooth Rubber Ducky $79.99, WiFi Deauther OLED $54, M Tool Pro $169, and more. Fast global delivery, secure payment, quality guarantee." />
      </Helmet>

      <Header />
      
      <main>
        <ShopHeroSection />
        <ProductGrid />
        <CyberPlayground />
        <FeatureHighlights />
      </main>

      <Footer />
    </>
  );
};

export default ShopPage;