
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Download, Palette, Image, Type, Star } from 'lucide-react';
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
    color: 'purple'
  });
  const [generatedPoster, setGeneratedPoster] = useState<any>(null);
  const { toast } = useToast();

  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and professional' },
    { id: 'traditional', name: 'Traditional', description: 'Classic Indian design' },
    { id: 'colorful', name: 'Colorful', description: 'Vibrant and eye-catching' },
    { id: 'minimal', name: 'Minimal', description: 'Simple and elegant' }
  ];

  const colors = [
    { id: 'purple', name: 'Purple', hex: '#8B5CF6' },
    { id: 'pink', name: 'Pink', hex: '#EC4899' },
    { id: 'orange', name: 'Orange', hex: '#F97316' },
    { id: 'green', name: 'Green', hex: '#10B981' },
    { id: 'blue', name: 'Blue', hex: '#3B82F6' }
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
      title: "🎨 Poster Generated!",
      description: "Your promotional poster is ready for download and sharing",
    });
  };

  const downloadPoster = () => {
    // In a real app, this would generate and download an actual image
    toast({
      title: "📥 Download Started",
      description: "Poster image will be saved to your device",
    });
  };

  const selectedColor = colors.find(c => c.id === posterData.color);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🎨 Poster Generator
          </h1>
          <p className="text-gray-600">
            Create beautiful promotional posters for your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Poster Designer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Design Your Poster
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  value={posterData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="Enter your business name"
                />
              </div>

              <div>
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  value={posterData.tagline}
                  onChange={(e) => handleInputChange('tagline', e.target.value)}
                  placeholder="e.g., 'Fresh homemade pickles'"
                />
              </div>

              <div>
                <Label htmlFor="services">Services/Products</Label>
                <Textarea
                  id="services"
                  value={posterData.services}
                  onChange={(e) => handleInputChange('services', e.target.value)}
                  placeholder="List your main products or services"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="contactNumber">Contact Number *</Label>
                <Input
                  id="contactNumber"
                  value={posterData.contactNumber}
                  onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={posterData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Your business address"
                  rows={2}
                />
              </div>

              <div>
                <Label>Template Style</Label>
                <Select value={posterData.template} onValueChange={(value) => handleInputChange('template', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map(template => (
                      <SelectItem key={template.id} value={template.id}>
                        <div>
                          <div className="font-medium">{template.name}</div>
                          <div className="text-sm text-gray-500">{template.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Color Theme</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {colors.map(color => (
                    <button
                      key={color.id}
                      onClick={() => handleInputChange('color', color.id)}
                      className={`w-12 h-12 rounded-full border-4 ${
                        posterData.color === color.id ? 'border-gray-800' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <Button onClick={generatePoster} className="w-full" size="lg">
                <Image className="w-5 h-5 mr-2" />
                Generate Poster
              </Button>
            </CardContent>
          </Card>

          {/* Poster Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Poster Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              {generatedPoster ? (
                <div className="space-y-6">
                  {/* Poster Mockup */}
                  <div 
                    className="aspect-[3/4] border-8 border-white shadow-2xl rounded-lg p-6 text-white relative"
                    style={{ 
                      backgroundColor: selectedColor?.hex,
                      backgroundImage: `linear-gradient(135deg, ${selectedColor?.hex}cc, ${selectedColor?.hex})`
                    }}
                  >
                    <div className="text-center space-y-4">
                      <h2 className="text-2xl font-bold">{generatedPoster.businessName}</h2>
                      {generatedPoster.tagline && (
                        <p className="text-lg opacity-90">{generatedPoster.tagline}</p>
                      )}
                      
                      <div className="my-8">
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                          <Type className="w-10 h-10" />
                        </div>
                      </div>

                      {generatedPoster.services && (
                        <div className="bg-white/10 rounded-lg p-4">
                          <p className="text-sm">{generatedPoster.services}</p>
                        </div>
                      )}

                      <div className="absolute bottom-6 left-6 right-6 space-y-2">
                        <div className="flex items-center justify-center">
                          <Badge className="bg-white text-gray-800">
                            📞 {generatedPoster.contactNumber}
                          </Badge>
                        </div>
                        {generatedPoster.address && (
                          <p className="text-xs opacity-80 text-center">
                            📍 {generatedPoster.address}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={downloadPoster} className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <ShareButton 
                      type="business-plan" 
                      data={generatedPoster}
                      variant="outline"
                    />
                  </div>

                  <div className="text-center">
                    <Badge variant="secondary">
                      Template: {templates.find(t => t.id === generatedPoster.template)?.name}
                    </Badge>
                  </div>
                </div>
              ) : (
                <div className="aspect-[3/4] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Image className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Fill in the details and generate your poster</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>💡 Poster Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Keep it Simple</h4>
                <p>Use clear, readable fonts and avoid cluttering</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">High Contrast</h4>
                <p>Ensure text is easily readable against the background</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">Include Contact</h4>
                <p>Always add your phone number or WhatsApp</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600 mb-2">Local Language</h4>
                <p>Consider adding Hindi text for local customers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PosterGenerator;
