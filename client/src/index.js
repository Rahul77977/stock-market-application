  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import Homepage from './landing_page/home/Homepage';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Signup from './landing_page/signup/Signup';
  import Pricing from './landing_page/home/Pricing';
  import SupportPage from './landing_page/support/SupportPage';
  import ProductPage from './landing_page/products/ProductPage';
  import AboutPage from './landing_page/about/AboutPage';
  import Footer from './landing_page/Footer';
  import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound';
import PricingPage from './landing_page/pricing/PricingPage';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/product" element={<ProductPage />} />  {/* Fixed path */}
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
