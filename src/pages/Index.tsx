
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import TravelPackages from '@/components/TravelPackages';
import ExperienceShowcase from '@/components/ExperienceShowcase';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedDestinations />
        <TravelPackages />
        <ExperienceShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
