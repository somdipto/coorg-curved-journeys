
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Star, Users, MapPin, Camera, Bed } from 'lucide-react';

const packages = [
  {
    id: 1,
    name: "Coorg Explorer",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹8,999",
    originalPrice: "₹12,999",
    rating: 4.8,
    reviews: 156,
    badge: "Best Seller",
    highlights: [
      "Abbey Falls visit",
      "Coffee plantation tour",
      "Raja's Seat sunset",
      "Local cuisine experience",
      "Comfortable accommodation"
    ],
    includes: ["Transport", "Accommodation", "Meals", "Guide"]
  },
  {
    id: 2,
    name: "Coorg Adventure",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹16,999",
    originalPrice: "₹22,999",
    rating: 4.9,
    reviews: 89,
    badge: "Premium",
    highlights: [
      "River rafting adventure",
      "Dubare elephant camp",
      "Nagarhole wildlife safari",
      "Trekking expeditions",
      "Luxury resort stay"
    ],
    includes: ["Transport", "Luxury Stay", "All Meals", "Activities", "Guide"]
  },
  {
    id: 3,
    name: "Coorg Getaway",
    duration: "2 Days / 1 Night",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹5,999",
    originalPrice: "₹7,999",
    rating: 4.7,
    reviews: 234,
    badge: "Quick Escape",
    highlights: [
      "Abbey Falls excursion",
      "Coffee tasting session",
      "Local market visit",
      "Traditional dinner",
      "Comfortable hotel"
    ],
    includes: ["Transport", "Hotel", "Breakfast", "Guide"]
  }
];

const TravelPackages = () => {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-sunset-gradient/10 text-coorg-earth border-coorg-earth/20">
            <Bed className="w-4 h-4 mr-2" />
            Travel Packages
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coorg-green mb-6">
            Curated Coorg Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our thoughtfully designed packages that blend adventure, relaxation, 
            and cultural immersion for the perfect Coorg getaway.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id}
              className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 ${
                index === 1 ? 'lg:scale-105 lg:z-10' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Package Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <Badge className="absolute top-4 left-4 bg-white/90 text-coorg-green border-0 font-medium">
                  {pkg.badge}
                </Badge>
                
                {/* Duration */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-90">Duration</p>
                  <p className="font-semibold">{pkg.duration}</p>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-coorg-green mb-2">
                      {pkg.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{pkg.rating}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{pkg.reviews} reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 line-through">{pkg.originalPrice}</p>
                    <p className="text-2xl font-bold text-coorg-green">{pkg.price}</p>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Package Highlights</h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Includes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">What's Included</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.includes.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-coorg-green/10 text-coorg-green">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button className="w-full bg-coorg-gradient hover:bg-coorg-forest text-white rounded-2xl py-3 font-medium transition-all duration-300 hover:shadow-lg">
                    Book This Package
                  </Button>
                  <Button variant="outline" className="w-full border-coorg-green text-coorg-green hover:bg-coorg-green hover:text-white rounded-2xl py-3 font-medium transition-all duration-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    View Itinerary
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-coorg-gradient text-white rounded-3xl border-0 overflow-hidden">
            <CardContent className="p-8">
              <Camera className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Need a Custom Package?
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Let us create a personalized Coorg experience tailored to your preferences, 
                budget, and travel dates.
              </p>
              <Button className="bg-white text-coorg-green hover:bg-gray-100 rounded-full px-8 py-3 font-semibold transition-all duration-300">
                Create Custom Package
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;
