
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Camera, Mountain } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "Abbey Falls",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Cascading waterfall surrounded by lush coffee plantations",
    rating: 4.8,
    duration: "Half Day",
    price: "₹1,500",
    badge: "Popular"
  },
  {
    id: 2,
    name: "Raja's Seat",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Breathtaking sunset views from the hill station",
    rating: 4.9,
    duration: "2 Hours",
    price: "₹800",
    badge: "Scenic"
  },
  {
    id: 3,
    name: "Dubare Elephant Camp",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Interactive elephant experiences and river rafting",
    rating: 4.7,
    duration: "Full Day",
    price: "₹2,800",
    badge: "Adventure"
  },
  {
    id: 4,
    name: "Talacauvery",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sacred source of River Cauvery with mountain views",
    rating: 4.6,
    duration: "Half Day",
    price: "₹1,200",
    badge: "Spiritual"
  },
  {
    id: 5,
    name: "Coffee Plantation Tour",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Aromatic journey through working coffee estates",
    rating: 4.9,
    duration: "3 Hours",
    price: "₹1,800",
    badge: "Experience"
  },
  {
    id: 6,
    name: "Nagarhole National Park",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Wildlife safari in pristine forest reserve",
    rating: 4.8,
    duration: "Full Day",
    price: "₹3,500",
    badge: "Wildlife"
  }
];

const FeaturedDestinations = () => {
  return (
    <section id="destinations" className="py-20 bg-mist-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-coorg-green/10 text-coorg-green border-coorg-green/20">
            <Mountain className="w-4 h-4 mr-2" />
            Explore Destinations
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coorg-green mb-6">
            Discover Coorg's Hidden Gems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From misty mountains to aromatic coffee plantations, experience the diverse beauty 
            of Karnataka's Scotland through our carefully curated destinations.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <Badge className="absolute top-4 left-4 bg-white/90 text-coorg-green border-0 font-medium">
                  {destination.badge}
                </Badge>
                
                {/* Floating Action */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="rounded-full bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-coorg-green">
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-playfair text-xl font-semibold text-coorg-green group-hover:text-coorg-forest transition-colors">
                    {destination.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-700">{destination.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-coorg-green">{destination.price}</p>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-coorg-gradient hover:bg-coorg-forest text-white rounded-2xl py-3 font-medium transition-all duration-300 hover:shadow-lg">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-2 border-coorg-green text-coorg-green hover:bg-coorg-green hover:text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300">
            View All Destinations
            <MapPin className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
