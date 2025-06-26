
import React from 'react';
import { MapPin, Phone, Mail, Star, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Footer = () => {
  return (
    <footer className="bg-coorg-green text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-2xl">Nava Durga Travels</h3>
                <p className="text-white/80 text-sm">Discover Coorg's Beauty</p>
              </div>
            </div>
            
            <p className="text-white/90 mb-6 leading-relaxed max-w-md">
              Experience the magic of Coorg with our premium travel packages. From misty mountains 
              to aromatic coffee plantations, we create unforgettable journeys through Karnataka's Scotland.
            </p>
            
            <div className="flex items-center space-x-4 mb-6">
              <Badge className="bg-white/10 text-white border-white/20">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                4.9/5 Rating
              </Badge>
              <Badge className="bg-white/10 text-white border-white/20">
                5000+ Happy Travelers
              </Badge>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 border-0">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 border-0">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 border-0">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#destinations" className="text-white/80 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#packages" className="text-white/80 hover:text-white transition-colors">Travel Packages</a></li>
              <li><a href="#experiences" className="text-white/80 hover:text-white transition-colors">Experiences</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-white transition-colors">Photo Gallery</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/80 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">123 Coffee Estate Road</p>
                  <p className="text-white/90 text-sm">Madikeri, Coorg - 571201</p>
                  <p className="text-white/90 text-sm">Karnataka, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">+91 9876543210</p>
                  <p className="text-white/90 text-sm">+91 8765432109</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                <p className="text-white/90 text-sm">info@navadurgatravels.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="font-semibold text-lg mb-2">Stay Updated</h4>
              <p className="text-white/80 text-sm">Get travel tips and exclusive offers delivered to your inbox</p>
            </div>
            <div className="flex space-x-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button className="bg-sunset-gradient hover:bg-coorg-earth text-white rounded-full px-6 py-3 font-medium whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-white/80">
            <p>&copy; 2024 Nava Durga Travels. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#cancellation" className="hover:text-white transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
