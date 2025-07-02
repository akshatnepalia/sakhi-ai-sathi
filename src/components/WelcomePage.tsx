
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Users, TrendingUp, FileText, Calculator, PiggyBank, Award, Trophy, Palette, Target, Building2, BookOpen, Heart } from 'lucide-react';
import ShareButton from './ShareButton';

interface WelcomePageProps {
  onStartChat: () => void;
  onOpenBusinessPlan?: () => void;
  onOpenFinancialCalc?: () => void;
  onOpenGovSchemes?: () => void;
  onOpenCommunity?: () => void;
  onOpenAchievements?: () => void;
  onOpenPoster?: () => void;
}

const WelcomePage = ({ 
  onStartChat, 
  onOpenBusinessPlan, 
  onOpenFinancialCalc, 
  onOpenGovSchemes,
  onOpenCommunity,
  onOpenAchievements,
  onOpenPoster
}: WelcomePageProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Government Header Bar */}
      <div className="bg-blue-900 text-white px-4 py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <span>Government of India Initiative</span>
          <span>महिला उद्यमिता विकास मंच</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b-4 border-orange-500 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">SakhiCopilot</h1>
                <p className="text-gray-600">Women Entrepreneurship Development Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded">
                <div className="w-full h-4 bg-white"></div>
                <div className="w-full h-4 bg-green-500"></div>
                <div className="w-full h-4 bg-orange-500"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-3">
            <a href="#" className="hover:text-orange-300 transition-colors">Home</a>
            <a href="#" className="hover:text-orange-300 transition-colors">Services</a>
            <a href="#" className="hover:text-orange-300 transition-colors">Schemes</a>
            <a href="#" className="hover:text-orange-300 transition-colors">Resources</a>
            <a href="#" className="hover:text-orange-300 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Empowering Women Entrepreneurs
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Complete digital platform for women entrepreneurs providing business guidance, 
            financial tools, government scheme information, and community support
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={onStartChat}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start AI Assistant
            </Button>
            <Button
              onClick={onOpenBusinessPlan}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              <FileText className="w-5 h-5 mr-2" />
              Create Business Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Digital Services for Women Entrepreneurs
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={onStartChat}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  AI Business Assistant
                </h4>
                <p className="text-gray-600 text-sm">
                  Get instant guidance and answers for your business queries
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={onOpenBusinessPlan}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Business Plan Generator
                </h4>
                <p className="text-gray-600 text-sm">
                  Create professional business plans with financial projections
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={onOpenFinancialCalc}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Financial Calculator
                </h4>
                <p className="text-gray-600 text-sm">
                  Calculate ROI, EMI, break-even points and profit margins
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={onOpenGovSchemes}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <PiggyBank className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Government Schemes
                </h4>
                <p className="text-gray-600 text-sm">
                  Find loans and schemes for women entrepreneurs
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={onOpenCommunity}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Community Forum
                </h4>
                <p className="text-gray-600 text-sm">
                  Connect with fellow women entrepreneurs
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={onOpenAchievements}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Progress Tracking
                </h4>
                <p className="text-gray-600 text-sm">
                  Track your entrepreneurial journey and achievements
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={onOpenPoster}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Marketing Materials
                </h4>
                <p className="text-gray-600 text-sm">
                  Create promotional posters for your business
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-teal-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Learning Resources
                </h4>
                <p className="text-gray-600 text-sm">
                  Access training materials and educational content
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Platform Features
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Comprehensive Guidance</h4>
              <p className="text-gray-600">
                End-to-end support for starting and scaling your business with AI-powered assistance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Financial Tools</h4>
              <p className="text-gray-600">
                Professional financial calculators and business planning tools for informed decisions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Community Support</h4>
              <p className="text-gray-600">
                Connect with mentors and fellow entrepreneurs for networking and collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Start Your Entrepreneurial Journey Today
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the digital platform designed specifically for women entrepreneurs in India
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={onStartChat}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Started Now
            </Button>
            
            <ShareButton 
              type="invite" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-semibold mb-4">About Platform</h5>
              <p className="text-gray-300 text-sm">
                Government initiative to support women entrepreneurs with digital tools and resources
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Government Schemes</a></li>
                <li><a href="#" className="hover:text-white">Resources</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <p className="text-gray-300 text-sm">
                Email: support@sakhicopilot.gov.in<br />
                Phone: 1800-XXX-XXXX
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>© 2024 Government of India. All rights reserved. | Developed for Women Entrepreneurship Development</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
