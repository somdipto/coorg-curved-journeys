
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="font-playfair font-bold text-xl text-coorg-green">Nava Durga Travels</h1>
              <p className="text-xs text-gray-500">Discover Coorg</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-coorg-green transition-colors font-medium">Destinations</a>
            <a href="#packages" className="text-gray-700 hover:text-coorg-green transition-colors font-medium">Packages</a>
            <a href="#experiences" className="text-gray-700 hover:text-coorg-green transition-colors font-medium">Experiences</a>
            <a href="#about" className="text-gray-700 hover:text-coorg-green transition-colors font-medium">About</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">4.9/5</span>
            </div>
            <Button className="bg-coorg-gradient hover:bg-coorg-forest text-white rounded-3xl px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-2xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#destinations" className="text-gray-700 hover:text-coorg-green transition-colors font-medium">Destinations</a>
              <a href="#packages" className="text-gray-700 hover:text-coorg-green transition-colors font-medium">Packages</a>
              <a href="#experiences" className="text-gray-700 hover:text-coorg-green transition-colors font-medium">Experiences</a>
              <a href="#about" className="text-gray-700 hover:text-coorg-green transition-colors font-medium">About</a>
              <Button className="bg-coorg-gradient text-white rounded-3xl px-6 py-3 font-medium w-full">
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
