
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Download, Sparkles, Palette, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { aiService } from '@/utils/aiService';

const PosterGenerator = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    contact: '',
    description: '',
    colors: 'warm'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPoster, setGeneratedPoster] = useState<string | null>(null);
  const { toast } = useToast();

  const businessTypes = [
    { value: 'handicrafts', label: 'हस्तशिल्प - Handicrafts' },
    { value: 'food', label: 'खाना - Food Business' },
    { value: 'textiles', label: 'कपड़े - Textiles' },
    { value: 'beauty', label: 'सौंदर्य - Beauty Products' },
    { value: 'agriculture', label: 'कृषि - Agriculture' },
    { value: 'services', label: 'सेवाएं - Services' }
  ];

  const colorSchemes = [
    { value: 'warm', label: 'गर्म रंग - Warm Colors', colors: ['#FF6B35', '#F7931E', '#FFD23F'] },
    { value: 'traditional', label: 'पारंपरिक - Traditional', colors: ['#8B4513', '#CD853F', '#DAA520'] },
    { value: 'modern', label: 'आधुनिक - Modern', colors: ['#4ECDC4', '#45B7D1', '#96CEB4'] },
    { value: 'vibrant', label: 'चमकीला - Vibrant', colors: ['#FF1744', '#FF9100', '#00E676'] }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generatePoster = async () => {
    if (!formData.businessName || !formData.businessType) {
      toast({
        title: "Missing Information",
        description: "Please fill in business name and type.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    try {
      // Generate AI content if available
      const content = await aiService.generatePosterContent(formData.businessType, formData.businessName);
      
      // Create poster HTML
      const posterHTML = createPosterHTML(content);
      setGeneratedPoster(posterHTML);

      toast({
        title: "Poster Generated!",
        description: "Your business poster is ready to download.",
        variant: "default"
      });
    } catch (error) {
      console.error('Poster generation error:', error);
      toast({
        title: "Generation Error",
        description: "Failed to generate poster. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const createPosterHTML = (content: string) => {
    const selectedColorScheme = colorSchemes.find(scheme => scheme.value === formData.colors);
    const colors = selectedColorScheme?.colors || ['#FF6B35', '#F7931E', '#FFD23F'];

    return `
      <div style="
        width: 400px;
        height: 600px;
        background: linear-gradient(135deg, ${colors[0]}, ${colors[1]});
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        color: white;
        font-family: 'Arial', sans-serif;
        position: relative;
        overflow: hidden;
      ">
        <!-- Decorative elements -->
        <div style="
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
        "></div>
        
        <div style="
          position: absolute;
          bottom: -30px;
          left: -30px;
          width: 150px;
          height: 150px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
        "></div>

        <!-- Content -->
        <div style="position: relative; z-index: 2; text-align: center; height: 100%;">
          <div style="
            background: rgba(255,255,255,0.2);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 20px;
            backdrop-filter: blur(10px);
          ">
            <h1 style="
              font-size: 28px;
              font-weight: bold;
              margin: 0 0 15px 0;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            ">${formData.businessName}</h1>
            <p style="
              font-size: 16px;
              margin: 0;
              opacity: 0.9;
            ">${businessTypes.find(t => t.value === formData.businessType)?.label || formData.businessType}</p>
          </div>

          <div style="
            background: rgba(255,255,255,0.15);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            text-align: left;
            backdrop-filter: blur(5px);
          ">
            <div style="white-space: pre-line; font-size: 14px; line-height: 1.6;">
              ${content}
            </div>
          </div>

          ${formData.description ? `
          <div style="
            background: rgba(255,255,255,0.15);
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 20px;
            backdrop-filter: blur(5px);
          ">
            <p style="margin: 0; font-size: 14px; line-height: 1.5;">
              ${formData.description}
            </p>
          </div>
          ` : ''}

          <div style="
            position: absolute;
            bottom: 20px;
            left: 30px;
            right: 30px;
            background: rgba(255,255,255,0.25);
            border-radius: 12px;
            padding: 15px;
            backdrop-filter: blur(10px);
          ">
            <p style="
              margin: 0;
              font-size: 18px;
              font-weight: bold;
              text-align: center;
            ">📞 ${formData.contact || 'Contact Number'}</p>
          </div>
        </div>
      </div>
    `;
  };

  const downloadPoster = () => {
    if (!generatedPoster) return;

    const blob = new Blob([`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${formData.businessName} Poster</title>
        <style>
          body { margin: 0; padding: 20px; background: #f0f0f0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
        </style>
      </head>
      <body>
        ${generatedPoster}
      </body>
      </html>
    `], { type: 'text/html' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.businessName.replace(/\s+/g, '_')}_poster.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download Started",
      description: "Your poster has been downloaded as an HTML file.",
      variant: "default"
    });
  };

  return (
    <div className="p-4 space-y-6 bg-gradient-to-b from-purple-50 to-pink-50 min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          🎨 पोस्टर जेनरेटर - Poster Generator
        </h1>
        <p className="text-gray-600">Create beautiful business posters with AI assistance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form */}
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="w-5 h-5 text-purple-500" />
              <span>Business Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="businessName">व्यापार का नाम - Business Name</Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => handleInputChange('businessName', e.target.value)}
                placeholder="e.g., सीता की हस्तकला - Seeta's Handicrafts"
                className="border-purple-200 focus:border-purple-400"
              />
            </div>

            <div>
              <Label htmlFor="businessType">व्यापार का प्रकार - Business Type</Label>
              <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                <SelectTrigger className="border-purple-200 focus:border-purple-400">
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="contact">संपर्क नंबर - Contact Number</Label>
              <Input
                id="contact"
                value={formData.contact}
                onChange={(e) => handleInputChange('contact', e.target.value)}
                placeholder="9876543210"
                className="border-purple-200 focus:border-purple-400"
              />
            </div>

            <div>
              <Label htmlFor="description">विवरण - Description (Optional)</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Brief description of your business..."
                className="border-purple-200 focus:border-purple-400"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="colors">रंग योजना - Color Scheme</Label>
              <Select value={formData.colors} onValueChange={(value) => handleInputChange('colors', value)}>
                <SelectTrigger className="border-purple-200 focus:border-purple-400">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {colorSchemes.map((scheme) => (
                    <SelectItem key={scheme.value} value={scheme.value}>
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {scheme.colors.map((color, idx) => (
                            <div
                              key={idx}
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        <span>{scheme.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={generatePoster}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              {isGenerating ? (
                <>
                  <Wand2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Poster
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Preview */}
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Preview</span>
              {generatedPoster && (
                <Button
                  onClick={downloadPoster}
                  variant="outline"
                  size="sm"
                  className="border-purple-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {generatedPoster ? (
              <div className="flex justify-center">
                <div 
                  dangerouslySetInnerHTML={{ __html: generatedPoster }}
                  style={{ transform: 'scale(0.8)', transformOrigin: 'top center' }}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <Palette className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Your poster preview will appear here</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PosterGenerator;
