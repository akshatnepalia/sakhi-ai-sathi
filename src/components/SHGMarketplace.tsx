
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, MapPin, Star, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const mockSHGs = [
  {
    id: 1,
    name: "Rani's Pickle Paradise",
    location: "Udaipur, Rajasthan",
    product: "Homemade Pickles",
    price: "₹99 - ₹299",
    rating: 4.8,
    contact: "9876543210",
    image: "🥒",
    description: "Traditional Rajasthani pickles made with love and authentic spices",
    speciality: "Mango, Lemon, Mixed Vegetable",
    orders: 150
  },
  {
    id: 2,
    name: "Maya's Stitch Studio",
    location: "Jaipur, Rajasthan",
    product: "Tailoring Services",
    price: "₹200 - ₹2000",
    rating: 4.9,
    contact: "8765432109",
    image: "✂️",
    description: "Professional stitching and alteration services",
    speciality: "Blouses, Sarees, Party Wear",
    orders: 200
  },
  {
    id: 3,
    name: "Sunita's Sweet Delights",
    location: "Jodhpur, Rajasthan",
    product: "Sweets & Snacks",
    price: "₹150 - ₹500",
    rating: 4.7,
    contact: "7654321098",
    image: "🍬",
    description: "Fresh homemade sweets and traditional snacks",
    speciality: "Laddu, Barfi, Namkeen",
    orders: 120
  },
  {
    id: 4,
    name: "Geeta's Craft Corner",
    location: "Ajmer, Rajasthan",
    product: "Handicrafts",
    price: "₹99 - ₹999",
    rating: 4.6,
    contact: "6543210987",
    image: "🎨",
    description: "Beautiful handmade crafts and decorative items",
    speciality: "Wall Hangings, Bags, Jewelry",
    orders: 80
  },
  {
    id: 5,
    name: "Priya's Beauty Blends",
    location: "Kota, Rajasthan",
    product: "Natural Beauty Products",
    price: "₹120 - ₹400",
    rating: 4.8,
    contact: "5432109876",
    image: "🌸",
    description: "Chemical-free beauty products made from natural ingredients",
    speciality: "Face Packs, Hair Oil, Soaps",
    orders: 95
  },
  {
    id: 6,
    name: "Kavita's Kitchen Magic",
    location: "Bikaner, Rajasthan",
    product: "Ready-to-Eat Meals",
    price: "₹80 - ₹250",
    rating: 4.5,
    contact: "4321098765",
    image: "🍛",
    description: "Healthy homemade meals delivered fresh",
    speciality: "Dal Bati, Rajasthani Thali, Parathas",
    orders: 110
  }
];

const categories = ["All", "Food", "Clothing", "Handicrafts", "Beauty", "Services"];

const SHGMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredSHGs, setFilteredSHGs] = useState(mockSHGs);
  const { toast } = useToast();

  const handleSearch = (query: string, category: string) => {
    let filtered = mockSHGs;
    
    if (query) {
      filtered = filtered.filter(shg =>
        shg.name.toLowerCase().includes(query.toLowerCase()) ||
        shg.product.toLowerCase().includes(query.toLowerCase()) ||
        shg.location.toLowerCase().includes(query.toLowerCase()) ||
        shg.speciality.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    if (category !== 'All') {
      const categoryMap = {
        'Food': ['Pickles', 'Sweets', 'Meals'],
        'Clothing': ['Tailoring'],
        'Handicrafts': ['Handicrafts'],
        'Beauty': ['Beauty Products'],
        'Services': ['Tailoring', 'Services']
      };
      
      filtered = filtered.filter(shg =>
        categoryMap[category]?.some(cat => shg.product.includes(cat))
      );
    }
    
    setFilteredSHGs(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    handleSearch(searchQuery, category);
  };

  const contactSHG = (shg: any) => {
    const message = `Hello ${shg.name}! मुझे आपके ${shg.product} के बारे में जानकारी चाहिए। क्या आप अभी उपलब्ध हैं?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/91${shg.contact}?text=${encodedMessage}`, '_blank');
    
    toast({
      title: "📱 WhatsApp Opened",
      description: `Connecting you with ${shg.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🛍️ SHG Marketplace
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover amazing products from women entrepreneurs across India
          </p>
          
          <div className="flex max-w-2xl mx-auto space-x-2 mb-6">
            <div className="flex-1 relative">
              <Input
                placeholder="Search for products, locations, or SHG names..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch(e.target.value, selectedCategory);
                }}
                className="pr-12"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryChange(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={selectedCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSHGs.map((shg) => (
            <Card key={shg.id} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{shg.image}</div>
                    <div>
                      <CardTitle className="text-lg text-purple-900">{shg.name}</CardTitle>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {shg.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-semibold">{shg.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">{shg.orders} orders</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{shg.product}</h3>
                    <p className="text-sm text-gray-600 mt-1">{shg.description}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {shg.price}
                    </Badge>
                    <div className="text-sm text-gray-600">
                      <strong>Speciality:</strong> {shg.speciality}
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => contactSHG(shg)}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSHGs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No SHGs found</h3>
            <p className="text-gray-600">Try searching with different keywords or select a different category</p>
          </div>
        )}

        <Card className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to List Your SHG?</h2>
            <p className="mb-6">Join our marketplace and reach thousands of customers across India!</p>
            <Button 
              className="bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => toast({
                title: "🚀 Coming Soon!",
                description: "SHG registration feature will be available soon.",
              })}
            >
              Register Your SHG
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SHGMarketplace;
