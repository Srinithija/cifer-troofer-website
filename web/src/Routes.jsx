import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import CoursesPage from './pages/Courses';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import TeamPage from './pages/Team';
import ContactPage from './pages/Contact';

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
        
        {/* Courses Page */}
        <Route path="/courses" element={<CoursesPage />} />
        
        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />
        
        {/* Services Page */}
        <Route path="/services" element={<ServicesPage />} />
        
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