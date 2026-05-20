import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import CoursesPage from './pages/Courses';
import CourseDetail from './pages/Courses/CourseDetail';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ServiceDetail from './pages/Services/ServiceDetail';
import TeamPage from './pages/Team';
import ContactPage from './pages/Contact';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';
import ToolsPage from './pages/Tools';
import IpLocator from './pages/IpLocator';
import IpGrabber from './pages/IpGrabber';
import DnsLookup from './pages/DnsLookup';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Default route - Home Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Home Page */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Shop Page */}
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tools/ip-locator" element={<IpLocator />} />
        <Route path="/tools/ip-grabber" element={<IpGrabber />} />
        <Route path="/tools/dns-lookup" element={<DnsLookup />} />
        
        {/* Courses Page */}
        <Route path="/courses" element={<CoursesPage />} />
        
        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />
        
        {/* Services Page */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Service Detail Page */}
        <Route path="/services/:serviceId" element={<ServiceDetail />} />

        {/* Course Detail Page */}
        <Route path="/courses/:courseId" element={<CourseDetail />} />

        {/* Team Page */}
        <Route path="/team" element={<TeamPage />} />
        
        {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;