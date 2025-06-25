
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Users, TrendingUp, Heart } from 'lucide-react';

interface WelcomePageProps {
  onStartChat: () => void;
}

const WelcomePage = ({ onStartChat }: WelcomePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            SakhiCopilot
          </h1>
          
          <p className="text-xl text-gray-600 mb-2">
            Your AI Business Friend
          </p>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Empowering rural women to grow smarter businesses through AI-powered guidance in simple language
          </p>
          
          <Button
            onClick={onStartChat}
            className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Ask Sakhi
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-orange-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Smart Answers
              </h3>
              <p className="text-gray-600 text-sm">
                Get instant answers to your business questions in Hindi or English
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                SHG Focused
              </h3>
              <p className="text-gray-600 text-sm">
                Specially designed for Self-Help Group women entrepreneurs
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Business Growth
              </h3>
              <p className="text-gray-600 text-sm">
                Learn pricing, marketing, loans, and business strategies
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sample Questions */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sample Questions You Can Ask
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Card className="border-l-4 border-l-orange-400 bg-white">
              <CardContent className="p-4">
                <p className="text-gray-700 font-medium">
                  "मुझे अचार बेचने का सही दाम कैसे तय करना चाहिए?"
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Pricing strategy in Hindi
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-400 bg-white">
              <CardContent className="p-4">
                <p className="text-gray-700 font-medium">
                  "How to market my handmade sarees online?"
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Digital marketing advice
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-400 bg-white">
              <CardContent className="p-4">
                <p className="text-gray-700 font-medium">
                  "Can I get a loan for my SHG business?"
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Loan guidance
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-400 bg-white">
              <CardContent className="p-4">
                <p className="text-gray-700 font-medium">
                  "What license do I need to sell food?"
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Legal requirements
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              onClick={onStartChat}
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50 px-6 py-2"
            >
              <Heart className="w-4 h-4 mr-2" />
              Start Your Business Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
