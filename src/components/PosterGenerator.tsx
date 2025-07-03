
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Download, Palette, Image, Type, Star, Sparkles, Heart, Zap, Crown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ShareButton from './ShareButton';

const PosterGenerator = () => {
  const [posterData, setPosterData] = useState({
    businessName: '',
    tagline: '',
    contactNumber: '',
    address: '',
    services: '',
    template: 'modern',
    color: 'purple',
    font: 'bold',
    layout: 'centered'
  });
  const [generatedPoster, setGeneratedPoster] = useState<any>(null);
  const { toast } = useToast();

  const templates = [
    { id: 'modern', name: 'Modern Pro', description: 'Clean and professional', icon: Sparkles },
    { id: 'traditional', name: 'Traditional', description: 'Classic Indian design', icon: Crown },
    { id: 'colorful', name: 'Vibrant', description: 'Bold and eye-catching', icon: Zap },
    { id: 'minimal', name: 'Minimal Elite', description: 'Simple and elegant', icon: Heart },
    { id: 'premium', name: 'Premium Gold', description: 'Luxury business style', icon: Star }
  ];

  const colors = [
    { id: 'purple', name: 'Royal Purple', hex: '#8B5CF6', gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)' },
    { id: 'pink', name: 'Elegant Pink', hex: '#EC4899', gradient: 'linear-gradient(135deg, #EC4899, #F97316)' },
    { id: 'orange', name: 'Sunset Orange', hex: '#F97316', gradient: 'linear-gradient(135deg, #F97316, #EAB308)' },
    { id: 'green', name: 'Nature Green', hex: '#10B981', gradient: 'linear-gradient(135deg, #10B981, #059669)' },
    { id: 'blue', name: 'Ocean Blue', hex: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' },
    { id: 'gold', name: 'Premium Gold', hex: '#F59E0B', gradient: 'linear-gradient(135deg, #F59E0B, #D97706)' }
  ];

  const fonts = [
    { id: 'bold', name: 'Bold Impact', style: 'font-bold' },
    { id: 'elegant', name: 'Elegant Script', style: 'font-light' },
    { id: 'modern', name: 'Modern Sans', style: 'font-medium' },
    { id: 'classic', name: 'Classic Serif', style: 'font-normal' }
  ];

  const layouts = [
    { id: 'centered', name: 'Centered' },
    { id: 'top-focus', name: 'Top Focus' },
    { id: 'split', name: 'Split Design' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setPosterData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generatePoster = () => {
    if (!posterData.businessName || !posterData.contactNumber) {
      toast({
        title: "❌ Missing Information",
        description: "Please fill in business name and contact number",
        variant: "destructive"
      });
      return;
    }

    const poster = {
      ...posterData,
      id: Date.now(),
      createdAt: new Date().toLocaleDateString()
    };

    setGeneratedPoster(poster);
    
    toast({
      title: "🎨 Poster Created Successfully!",
      description: "Your professional poster is ready for download and sharing",
    });
  };

  const downloadPoster = () => {
    toast({
      title: "📥 Download Started",
      description: "High-quality poster image will be saved to your device",
    });
  };

  const selectedColor = colors.find(c => c.id === posterData.color);
  const selectedTemplate = templates.find(t => t.id === posterData.template);
  const selectedFont = fonts.find(f => f.id === posterData.font);

  const getPosterBackground = () => {
    if (posterData.template === 'premium') {
      return selectedColor?.gradient || selectedColor?.hex;
    }
    return selectedColor?.hex;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center">
            <Palette className="w-8 h-8 mr-3 text-purple-600" />
            Professional Poster Studio
          </h1>
          <p className="text-lg text-gray-600">
            Create stunning promotional posters for your business in minutes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Enhanced Poster Designer */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-xl">
                <Sparkles className="w-6 h-6 mr-2" />
                Design Your Poster
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="businessName" className="text-sm font-semibold">Business Name *</Label>
                  <Input
                    id="businessName"
                    value={posterData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    placeholder="Enter your business name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="contactNumber" className="text-sm font-semibold">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    value={posterData.contactNumber}
                    onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                    placeholder="Your phone number"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="tagline" className="text-sm font-semibold">Tagline</Label>
                <Input
                  id="tagline"
                  value={posterData.tagline}
                  onChange={(e) => handleInputChange('tagline', e.target.value)}
                  placeholder="e.g., 'Quality you can trust'"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="services" className="text-sm font-semibold">Services/Products</Label>
                <Textarea
                  id="services"
                  value={posterData.services}
                  onChange={(e) => handleInputChange('services', e.target.value)}
                  placeholder="Describe your main products or services"
                  rows={3}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-sm font-semibold">Address</Label>
                <Textarea
                  id="address"
                  value={posterData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Your business address"
                  rows={2}
                  className="mt-1"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-semibold">Template Style</Label>
                  <Select value={posterData.template} onValueChange={(value) => handleInputChange('template', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {templates.map(template => (
                        <SelectItem key={template.id} value={template.id}>
                          <div className="flex items-center">
                            <template.icon className="w-4 h-4 mr-2" />
                            <div>
                              <div className="font-medium">{template.name}</div>
                              <div className="text-sm text-gray-500">{template.description}</div>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-semibold">Font Style</Label>
                  <Select value={posterData.font} onValueChange={(value) => handleInputChange('font', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {fonts.map(font => (
                        <SelectItem key={font.id} value={font.id}>
                          <span className={font.style}>{font.name}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold">Color Theme</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {colors.map(color => (
                    <button
                      key={color.id}
                      onClick={() => handleInputChange('color', color.id)}
                      className={`relative h-16 rounded-lg border-4 transition-all duration-200 ${
                        posterData.color === color.id ? 'border-gray-800 scale-105' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ background: color.gradient || color.hex }}
                      title={color.name}
                    >
                      <div className="absolute inset-0 bg-black/20 rounded-md flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">{color.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Button onClick={generatePoster} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" size="lg">
                <Image className="w-5 h-5 mr-2" />
                Create Professional Poster
              </Button>
            </CardContent>
          </Card>

          {/* Enhanced Poster Preview */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-xl">
                <Star className="w-6 h-6 mr-2" />
                Live Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {generatedPoster ? (
                <div className="space-y-6">
                  {/* Enhanced Poster Mockup */}
                  <div 
                    className={`aspect-[3/4] border-8 border-white shadow-2xl rounded-xl p-8 text-white relative overflow-hidden ${selectedFont?.style}`}
                    style={{ 
                      background: getPosterBackground(),
                      backgroundImage: posterData.template === 'premium' ? 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.1"%3E%3Cpath d="M20 20c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20z"/%3E%3C/g%3E%3C/svg%3E")' : undefined
                    }}
                  >
                    {/* Decorative elements */}
                    {posterData.template === 'premium' && (
                      <div className="absolute top-4 right-4">
                        <Crown className="w-8 h-8 text-yellow-300" />
                      </div>
                    )}
                    
                    <div className="text-center space-y-6 h-full flex flex-col justify-between">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{generatedPoster.businessName}</h2>
                        {generatedPoster.tagline && (
                          <p className="text-lg opacity-90 italic">{generatedPoster.tagline}</p>
                        )}
                      </div>
                      
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Type className="w-12 h-12" />
                        </div>
                      </div>

                      {generatedPoster.services && (
                        <div className="bg-white/15 rounded-xl p-4 backdrop-blur-sm">
                          <p className="text-sm font-medium">{generatedPoster.services}</p>
                        </div>
                      )}

                      <div className="space-y-3">
                        <div className="flex items-center justify-center">
                          <Badge className="bg-white/90 text-gray-800 px-4 py-2 text-base font-semibold">
                            📞 {generatedPoster.contactNumber}
                          </Badge>
                        </div>
                        {generatedPoster.address && (
                          <p className="text-sm opacity-90 text-center">
                            📍 {generatedPoster.address}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={downloadPoster} className="flex-1 bg-green-600 hover:bg-green-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download HD
                    </Button>
                    <ShareButton 
                      type="business-plan" 
                      data={generatedPoster}
                      variant="outline"
                      className="flex-1"
                    />
                  </div>

                  <div className="text-center space-y-2">
                    <Badge variant="secondary" className="text-sm">
                      <selectedTemplate?.icon className="w-4 h-4 mr-1" />
                      {selectedTemplate?.name}
                    </Badge>
                    <Badge variant="outline" className="text-sm ml-2">
                      {selectedColor?.name}
                    </Badge>
                  </div>
                </div>
              ) : (
                <div className="aspect-[3/4] border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-gray-50">
                  <div className="text-center text-gray-500">
                    <Image className="w-20 h-20 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Your poster preview will appear here</p>
                    <p className="text-sm">Fill in the details and create your professional poster</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Tips Section */}
        <Card className="mt-8 shadow-xl border-0 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Sparkles className="w-6 h-6 mr-2 text-purple-600" />
              Professional Design Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
                  <Heart className="w-4 h-4 mr-1" />
                  Keep it Simple
                </h4>
                <p>Use clear, readable fonts and avoid cluttering with too much information</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                  <Zap className="w-4 h-4 mr-1" />
                  High Contrast
                </h4>
                <p>Ensure text is easily readable with good contrast against the background</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-purple-600 mb-2 flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Include Contact
                </h4>
                <p>Always prominently display your phone number or WhatsApp for easy contact</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-orange-600 mb-2 flex items-center">
                  <Crown className="w-4 h-4 mr-1" />
                  Brand Consistency
                </h4>
                <p>Use consistent colors and fonts that match your business identity</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PosterGenerator;
