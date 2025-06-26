
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, Camera } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Coorg landscape with mountains and mist"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">Premium Travel Experience</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the 
            <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text block md:inline md:ml-4">
              Magic of Coorg
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            Experience Karnataka's crown jewel through premium packages featuring misty mountains, 
            aromatic coffee plantations, and unforgettable adventures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button className="bg-sunset-gradient hover:bg-coorg-earth text-white rounded-full px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-coorg-green/25 hover:scale-105 transition-all duration-300">
              Explore Packages
              <MapPin className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-2 border-white/50 text-white hover:bg-white hover:text-coorg-green rounded-full px-8 py-4 text-lg font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <Camera className="mr-2 w-5 h-5" />
              View Gallery
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-green-400" />
              <span>5000+ Happy Travelers</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>15+ Destinations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
