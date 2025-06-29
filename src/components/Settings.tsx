
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MessageCircle, Database, Zap, Shield, Globe, Users } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            SakhiCopilot Settings
          </h1>
          <p className="text-gray-600">
            Your Business Companion - Powered by Comprehensive Knowledge Base
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Knowledge Base Status */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-green-600" />
                <span>Knowledge Base Status</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Active
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Business Database</span>
                <Badge className="bg-green-500">Comprehensive</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Language Support</span>
                <Badge className="bg-blue-500">Hindi + English</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Offline Capability</span>
                <Badge className="bg-purple-500">Available</Badge>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                SakhiCopilot uses a comprehensive built-in business knowledge base covering all aspects of entrepreneurship, funding, marketing, and legal compliance.
              </p>
            </CardContent>
          </Card>

          {/* System Features */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span>System Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Smart Chat Assistant</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Voice Recognition (12 Languages)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Offline Mode Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-4 h-4 text-orange-500" />
                <span className="text-sm">WhatsApp Integration</span>
              </div>
            </CardContent>
          </Card>

          {/* Business Tools */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>Business Tools Available</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="outline" className="justify-center p-2">
                  Business Plan Generator
                </Badge>
                <Badge variant="outline" className="justify-center p-2">
                  Financial Calculator
                </Badge>
                <Badge variant="outline" className="justify-center p-2">
                  Government Schemes
                </Badge>
                <Badge variant="outline" className="justify-center p-2">
                  Export Guidance
                </Badge>
                <Badge variant="outline" className="justify-center p-2">
                  Legal Compliance
                </Badge>
                <Badge variant="outline" className="justify-center p-2">
                  Marketing Strategies
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Knowledge Areas */}
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle>Comprehensive Knowledge Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div>🏭 <strong>Business Starting:</strong> Funding, planning, legal setup</div>
                <div>💰 <strong>Financial:</strong> Loans, schemes, calculations</div>
                <div>📈 <strong>Marketing:</strong> Digital, local, pricing strategies</div>
                <div>🍽️ <strong>Food Business:</strong> Licensing, pricing, scaling</div>
                <div>🎨 <strong>Handicrafts:</strong> Export, design, global markets</div>
                <div>🌾 <strong>Agriculture:</strong> Modern techniques, financing</div>
                <div>⚖️ <strong>Legal:</strong> Registration, compliance, IP protection</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        {/* System Information */}
        <Card>
          <CardHeader>
            <CardTitle>About SakhiCopilot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              SakhiCopilot is a comprehensive business companion designed specifically for rural women entrepreneurs and Self-Help Group (SHG) members. Our system uses an extensive built-in knowledge base covering all aspects of business development, from starting up to scaling globally.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <div className="font-bold text-blue-800 text-2xl">1000+</div>
                <div className="text-sm text-blue-600">Business Queries Covered</div>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                <div className="font-bold text-green-800 text-2xl">12</div>
                <div className="text-sm text-green-600">Language Support</div>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                <div className="font-bold text-purple-800 text-2xl">100%</div>
                <div className="text-sm text-purple-600">Offline Capable</div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => window.open('https://docs.lovable.dev/', '_blank')}
              >
                Learn More About Our Technology
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
