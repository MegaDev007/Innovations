import React from 'react';
import Banner from './Banner';
import ProductDisplay from './ProductDisplay';
import Marketing from './Marketing';
import HowItWorks from '../HowItWorks';
import ServicesInfo from '../ServicesInfo';
import ServicesPricing from '../ServicesPricing';
import Contact from '../Contact';

export default function HomePage() {
  return (
    <div>
      <Banner />
      <ProductDisplay />
      <Marketing />
      <HowItWorks />
      <ServicesInfo />
      <ServicesPricing />
      <Contact />
    </div>
  );
}