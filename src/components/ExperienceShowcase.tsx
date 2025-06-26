
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Star, MapPin, Camera, Mountain, Trees, Sun } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Coffee Plantation Walk",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Walk through aromatic coffee estates and learn about the bean-to-cup journey",
    duration: "2-3 hours",
    difficulty: "Easy",
    icon: Trees,
    rating: 4.9,
    price: "₹1,200"
  },
  {
    id: 2,
    title: "Sunrise at Raja's Seat",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Witness breathtaking sunrise views over the Western Ghats",
    duration: "2 hours",
    difficulty: "Easy",
    icon: Sun,
    rating: 4.8,
    price: "₹800"
  },
  {
    id: 3,
    title: "Trekking Adventure",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Explore hidden trails through dense forests and rolling hills",
    duration: "4-6 hours",
    difficulty: "Moderate",
    icon: Mountain,
    rating: 4.7,
    price: "₹2,500"
  },
  {
    id: 4,
    title: "Waterfall Photography",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Capture stunning waterfall shots with professional guidance",
    duration: "3-4 hours",
    difficulty: "Easy",
    icon: Camera,
    rating: 4.9,
    price: "₹1,800"
  }
];

const ExperienceShowcase = () => {
  return (
    <section id="experiences" className="py-20 bg-gradient-to-br from-coorg-mist to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-coorg-green/10 text-coorg-green border-coorg-green/20">
            <Camera className="w-4 h-4 mr-2" />
            Unique Experiences
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coorg-green mb-6">
            Create Lasting Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in authentic Coorg experiences that go beyond typical tourism. 
            From coffee plantation walks to sunrise viewings, create moments you'll treasure forever.
          </p>
        </div>

        {/* Large Featured Experience */}
        <div className="mb-16">
          <Card className="relative overflow-hidden rounded-3xl shadow-2xl border-0 group">
            <div className="relative h-96 md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Misty mountains of Coorg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6">
                  <div className="max-w-2xl text-white">
                    <Badge className="mb-4 bg-white/20 backdrop-blur-md text-white border-white/30">
                      Featured Experience
                    </Badge>
                    <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                      Misty Mountain Expedition
                    </h3>
                    <p className="text-xl mb-6 text-white/90 leading-relaxed">
                      Embark on a magical journey through Coorg's mist-covered peaks, 
                      where every turn reveals a new breathtaking vista.
                    </p>
                    <div className="flex items-center space-x-6 mb-8">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">4.9/5 Rating</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span>Full Day Experience</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                      <Button className="bg-sunset-gradient hover:bg-coorg-earth text-white rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        Book Experience - ₹3,500
                      </Button>
                      <Button variant="outline" className="border-2 border-white/50 text-white hover:bg-white hover:text-coorg-green rounded-full px-6 py-4 font-semibold backdrop-blur-sm">
                        <Play className="w-5 h-5 mr-2" />
                        Watch Video
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card 
                key={experience.id}
                className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Difficulty Badge */}
                  <Badge className="absolute top-3 right-3 bg-white/90 text-coorg-green border-0 text-xs">
                    {experience.difficulty}
                  </Badge>
                  
                  {/* Icon */}
                  <div className="absolute top-3 left-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-coorg-green">{experience.title}</h3>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-700">{experience.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{experience.duration}</span>
                    <span className="font-semibold text-coorg-green text-lg">{experience.price}</span>
                  </div>
                  
                  <Button className="w-full bg-coorg-gradient hover:bg-coorg-forest text-white rounded-xl py-2 text-sm font-medium transition-all duration-300">
                    Book Experience
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="font-playfair text-2xl font-bold text-coorg-green mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our travel experts can create custom experiences tailored to your interests, 
            whether it's adventure sports, cultural immersion, or peaceful retreats.
          </p>
          <Button className="bg-white border-2 border-coorg-green text-coorg-green hover:bg-coorg-green hover:text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 shadow-lg">
            <MapPin className="w-5 h-5 mr-2" />
            Plan Custom Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceShowcase;
