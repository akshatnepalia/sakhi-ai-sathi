import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MessageCircle, Users, TrendingUp, FileText, Calculator, PiggyBank, Award, Trophy, Palette, Target, Building2, BookOpen, Heart, Phone, Mail, Settings } from 'lucide-react';
import ShareButton from './ShareButton';

interface WelcomePageProps {
  onStartChat: () => void;
  onOpenBusinessPlan?: () => void;
  onOpenFinancialCalc?: () => void;
  onOpenGovSchemes?: () => void;
  onOpenCommunity?: () => void;
  onOpenAchievements?: () => void;
  onOpenPoster?: () => void;
  onOpenEducation?: () => void;
}

const WelcomePage = ({ 
  onStartChat, 
  onOpenBusinessPlan, 
  onOpenFinancialCalc, 
  onOpenGovSchemes,
  onOpenCommunity,
  onOpenAchievements,
  onOpenPoster,
  onOpenEducation
}: WelcomePageProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Official Header Bar */}
      <div className="bg-blue-900 text-white px-4 py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <span>भारत सरकार | Government of India</span>
          <span>महिला एवं बाल विकास मंत्रालय</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b-4 border-orange-500 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-blue-900">SakhiCopilot</h1>
                <p className="text-gray-700 text-lg">महिला उद्यमिता विकास मंच</p>
                <p className="text-gray-600">Women Entrepreneurship Development Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="flex items-center space-x-2">
                      <Settings className="w-5 h-5" />
                      <span>Platform Settings</span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Language Preferences</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm" className="justify-start">
                            हिंदी
                          </Button>
                          <Button variant="outline" size="sm" className="justify-start">
                            English
                          </Button>
                          <Button variant="outline" size="sm" className="justify-start">
                            বাংলা
                          </Button>
                          <Button variant="outline" size="sm" className="justify-start">
                            தமிழ்
                          </Button>
                        </div>
                      </div>

                      <div className="border-b pb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Accessibility</h4>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">High Contrast Mode</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">Large Text</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">Voice Navigation</span>
                          </label>
                        </div>
                      </div>

                      <div className="border-b pb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Notifications</h4>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" defaultChecked className="rounded" />
                            <span className="text-sm">Government Scheme Updates</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" defaultChecked className="rounded" />
                            <span className="text-sm">Training Notifications</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">Community Messages</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
                        <div className="space-y-2">
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Phone className="w-4 h-4 mr-2" />
                            Contact Support: 1800-XXX-XXXX
                          </Button>
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Mail className="w-4 h-4 mr-2" />
                            Email: support@sakhicopilot.gov.in
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2 pt-4">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsDialogOpen(false)}>
                        Save Settings
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-4">
            <a href="#" className="hover:text-orange-300 transition-colors font-medium">मुख्य पृष्ठ</a>
            <a href="#" className="hover:text-orange-300 transition-colors font-medium">सेवाएं</a>
            <a href="#" className="hover:text-orange-300 transition-colors font-medium">योजनाएं</a>
            <a href="#" className="hover:text-orange-300 transition-colors font-medium">संसाधन</a>
            <a href="#" className="hover:text-orange-300 transition-colors font-medium">संपर्क</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section 
        className="relative py-20 bg-gradient-to-r from-blue-50 to-orange-50"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(249, 115, 22, 0.8)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            महिला उद्यमियों का सशक्तिकरण
          </h2>
          <p className="text-2xl mb-4">Empowering Women Entrepreneurs</p>
          <p className="text-xl mb-10 max-w-4xl mx-auto opacity-90">
            भारत सरकार की डिजिटल पहल - महिला उद्यमियों के लिए व्यापारिक मार्गदर्शन, 
            वित्तीय उपकरण और सामुदायिक सहायता प्रदान करने वाला एकीकृत मंच
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              onClick={onStartChat}
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 text-lg font-semibold shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              AI सहायक शुरू करें
            </Button>
            <Button
              onClick={onOpenBusinessPlan}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-10 py-4 text-lg font-semibold"
            >
              <FileText className="w-6 h-6 mr-3" />
              व्यापारिक योजना बनाएं
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-blue-900 mb-12">
            सफलता की कहानियां | Success Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop" 
                  alt="Women entrepreneurs working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  डिजिटल सशक्तिकरण
                </h4>
                <p className="text-gray-600">
                  Technology empowering women entrepreneurs across rural and urban India
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop" 
                  alt="Woman using laptop for business"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  व्यापारिक नवाचार
                </h4>
                <p className="text-gray-600">
                  Innovative business solutions through digital platforms and assistance
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop" 
                  alt="Digital technology display"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  तकनीकी प्रगति
                </h4>
                <p className="text-gray-600">
                  Advanced digital tools and resources for modern entrepreneurship
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-blue-900 mb-12">
            डिजिटल सेवाएं | Digital Services
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card className="border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer" onClick={onStartChat}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  व्यापारिक सहायक
                </h4>
                <p className="text-gray-600 text-sm">
                  Instant business guidance and query resolution
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all cursor-pointer" onClick={onOpenBusinessPlan}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  व्यापारिक योजना जेनरेटर
                </h4>
                <p className="text-gray-600 text-sm">
                  Professional business plan creation with financial projections
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer" onClick={onOpenFinancialCalc}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  वित्तीय कैलकुलेटर
                </h4>
                <p className="text-gray-600 text-sm">
                  Calculate ROI, EMI, break-even analysis and profit margins
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all cursor-pointer" onClick={onOpenGovSchemes}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <PiggyBank className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  सरकारी योजनाएं
                </h4>
                <p className="text-gray-600 text-sm">
                  Government schemes and funding opportunities for women
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-500 hover:shadow-lg transition-all cursor-pointer" onClick={onOpenCommunity}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  सामुदायिक मंच
                </h4>
                <p className="text-gray-600 text-sm">
                  Connect and collaborate with fellow women entrepreneurs
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-yellow-500 hover:shadow-lg transition-all cursor-pointer" onClick={onOpenAchievements}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  प्रगति ट्रैकिंग
                </h4>
                <p className="text-gray-600 text-sm">
                  Track entrepreneurial journey and milestone achievements
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all cursor-pointer" onClick={onOpenPoster}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  मार्केटिंग सामग्री
                </h4>
                <p className="text-gray-600 text-sm">
                  Create promotional materials and business posters
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-teal-500 hover:shadow-lg transition-all cursor-pointer" onClick={onOpenEducation}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-teal-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  शिक्षा संसाधन
                </h4>
                <p className="text-gray-600 text-sm">
                  Training materials and educational content library
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features with Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-blue-900 mb-12">
            मंच की विशेषताएं | Platform Features
          </h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop" 
                  alt="Comprehensive guidance through technology"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">व्यापक मार्गदर्शन</h4>
              <p className="text-gray-600">
                End-to-end business support through digital assistance and government resources
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=300&h=200&fit=crop" 
                  alt="Financial tools and calculations"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">वित्तीय उपकरण</h4>
              <p className="text-gray-600">
                Professional financial calculators and business planning tools for informed decision making
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop" 
                  alt="Community support and collaboration"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">सामुदायिक सहायता</h4>
              <p className="text-gray-600">
                Connect with mentors, government officials, and fellow entrepreneurs for networking and growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">
            आज ही अपनी उद्यमिता यात्रा शुरू करें
          </h3>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            भारत की महिला उद्यमियों के लिए विशेष रूप से डिज़ाइन किए गए इस डिजिटल मंच से जुड़ें
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              onClick={onStartChat}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              अभी शुरू करें
            </Button>
            
            <ShareButton 
              type="invite" 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 text-lg font-semibold"
            />
          </div>
        </div>
      </section>

      {/* Official Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-semibold mb-4 text-lg">मंच के बारे में</h5>
              <p className="text-gray-300 text-sm mb-4">
                भारत सरकार की पहल - महिला उद्यमियों को डिजिटल उपकरण और संसाधन प्रदान करने हेतु
              </p>
              <p className="text-gray-400 text-xs">
                महिला एवं बाल विकास मंत्रालय, भारत सरकार
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-lg">त्वरित लिंक</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">सेवाएं</a></li>
                <li><a href="#" className="hover:text-white transition-colors">सरकारी योजनाएं</a></li>
                <li><a href="#" className="hover:text-white transition-colors">संसाधन</a></li>
                <li><a href="#" className="hover:text-white transition-colors">प्रशिक्षण</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-lg">सहायता</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">सहायता केंद्र</a></li>
                <li><a href="#" className="hover:text-white transition-colors">संपर्क करें</a></li>
                <li><a href="#" className="hover:text-white transition-colors">गोपनीयता नीति</a></li>
                <li><a href="#" className="hover:text-white transition-colors">नियम व शर्तें</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-lg">संपर्क विवरण</h5>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>support@sakhicopilot.gov.in</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>1800-XXX-XXXX (टॉल फ्री)</span>
                </div>
                <p className="text-gray-400 text-xs mt-4">
                  सोमवार से शुक्रवार: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-300">
            <p>© 2024 भारत सरकार। सभी अधिकार सुरक्षित। | महिला उद्यमिता विकास हेतु विकसित</p>
            <p className="mt-2 text-xs text-gray-400">
              यह वेबसाइट भारत सरकार के दिशा-निर्देशों के अनुसार डिज़ाइन की गई है
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
