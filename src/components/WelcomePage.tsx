
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Users, TrendingUp, Heart, FileText, Calculator, PiggyBank, Award } from 'lucide-react';

interface WelcomePageProps {
  onStartChat: () => void;
  onOpenBusinessPlan?: () => void;
  onOpenFinancialCalc?: () => void;
  onOpenGovSchemes?: () => void;
}

const WelcomePage = ({ onStartChat, onOpenBusinessPlan, onOpenFinancialCalc, onOpenGovSchemes }: WelcomePageProps) => {
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
            Your Complete Business Companion
          </p>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Empowering rural women entrepreneurs with AI-powered guidance, business planning tools, and financial calculators
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={onStartChat}
              className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask Sakhi
            </Button>
            
            {onOpenBusinessPlan && (
              <Button
                onClick={onOpenBusinessPlan}
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FileText className="w-5 h-5 mr-2" />
                Create Business Plan
              </Button>
            )}
            
            {onOpenFinancialCalc && (
              <Button
                onClick={onOpenFinancialCalc}
                variant="outline"
                className="border-green-300 text-green-600 hover:bg-green-50 px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Financial Calculator
              </Button>
            )}
          </div>

          {/* Achievement Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Award className="w-4 h-4 mr-2" />
            Featured in Microsoft Hackathon 2025 - Empowering Women in Business
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-orange-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={onStartChat}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Smart AI Chat
              </h3>
              <p className="text-gray-600 text-sm">
                Get instant answers in Hindi or English with voice support
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={onOpenBusinessPlan}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Business Plan Generator
              </h3>
              <p className="text-gray-600 text-sm">
                Create professional business plans with financial projections
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={onOpenFinancialCalc}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Financial Tools
              </h3>
              <p className="text-gray-600 text-sm">
                Calculate profits, ROI, loan EMI, and break-even points
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={onOpenGovSchemes}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Government Schemes
              </h3>
              <p className="text-gray-600 text-sm">
                Find loans and schemes for women entrepreneurs
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Why Choose SakhiCopilot?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Complete Business Suite</h4>
              <p className="text-gray-600 text-sm">Chat, plan, calculate, and grow - all in one platform</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <PiggyBank className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Financial Planning</h4>
              <p className="text-gray-600 text-sm">Professional tools for loan planning and profit calculation</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Built for Women</h4>
              <p className="text-gray-600 text-sm">Understanding the unique challenges of women entrepreneurs</p>
            </div>
          </div>
        </div>

        {/* Sample Questions */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            What Can You Do Here?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Card className="border-l-4 border-l-orange-400 bg-white">
              <CardContent className="p-4">
                <p className="text-gray-700 font-medium">
                  💬 "मुझे अचार बेचने का सही दाम कैसे तय करना चाहिए?"
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Get pricing strategies through AI chat
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-400 bg-white">
              <CardContent className="p-4">
                <p className="text-gray-700 font-medium">
                  📊 Create a complete business plan with financial projections
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Professional business plan generator
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-400 bg-white">
              <CardContent className="p-4">
                <p className="text-gray-700 font-medium">
                  🧮 Calculate loan EMI, profit margins, and break-even points
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Comprehensive financial calculators
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-400 bg-white">
              <CardContent className="p-4">
                <p className="text-gray-700 font-medium">
                  📱 Voice support in Hindi and English for easy interaction
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Speak naturally, get answers instantly
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              onClick={onStartChat}
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold rounded-full"
            >
              <Heart className="w-5 h-5 mr-2" />
              Start Your Business Journey Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
