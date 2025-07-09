
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MessageCircle, Users, TrendingUp, FileText, Calculator, PiggyBank, Award, Trophy, Palette, Target, Building2, BookOpen, Heart, Phone, Mail, Settings, Timer, Mic, Globe, Bell, Search, User, MapPin, Languages, Accessibility, Volume2, Eye, Download, ExternalLink, Calendar, Clock, Zap, Shield, Star, ChevronRight, Menu, X, Home, Info, HelpCircle, Share2 } from 'lucide-react';
import ShareButton from './ShareButton';

interface GovernmentWelcomePageProps {
  onStartChat: () => void;
  onOpenBusinessPlan?: () => void;
  onOpenFinancialCalc?: () => void;
  onOpenGovSchemes?: () => void;
  onOpenCommunity?: () => void;
  onOpenAchievements?: () => void;
  onOpenPoster?: () => void;
  onOpenEducation?: () => void;
  onOpenInstantSelect?: () => void;
}

const GovernmentWelcomePage = ({ 
  onStartChat, 
  onOpenBusinessPlan, 
  onOpenFinancialCalc, 
  onOpenGovSchemes,
  onOpenCommunity,
  onOpenAchievements,
  onOpenPoster,
  onOpenEducation,
  onOpenInstantSelect
}: GovernmentWelcomePageProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('हिंदी');
  const [notifications, setNotifications] = useState(3);

  const languages = ['हिंदी', 'English', 'বাংলা', 'தமிழ்', 'తెলుగు', 'ಕನ್ನಡ', 'മലയാളം', 'ગુજરાતી', 'ਪੰਜਾਬੀ', 'ଓଡ଼ିଆ', 'اردو', 'मराठी'];

  const quickStats = [
    { label: 'महिला उद्यमी पंजीकृत', value: '2.5 लाख+', icon: Users },
    { label: 'व्यापारिक योजनाएं तैयार', value: '1.2 लाख+', icon: FileText },
    { label: 'सफल व्यापार शुरू', value: '85,000+', icon: TrendingUp },
    { label: 'आर्थिक सहायता दी गई', value: '₹500 करोड़+', icon: PiggyBank }
  ];

  const recentUpdates = [
    { title: 'नई महिला उद्यमिता योजना 2024', date: '5 दिन पहले', important: true },
    { title: 'डिजिटल मार्केटिंग प्रशिक्षण कार्यक्रम', date: '1 सप्ताह पहले', important: false },
    { title: 'वित्तीय सहायता की नई दरें', date: '2 सप्ताह पहले', important: true }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Enhanced Official Header Bar */}
      <div className="bg-blue-950 text-white px-4 py-3 text-sm border-b border-orange-500">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/72px-Emblem_of_India.svg.png" alt="भारत सरकार" className="w-8 h-8" />
            <span>भारत सरकार | Government of India</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:block">महिला एवं बाल विकास मंत्रालय</span>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <select 
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-transparent border-none text-white text-sm focus:outline-none"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang} className="bg-blue-950 text-white">{lang}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Header */}
      <header className="bg-gray-800 border-b-4 border-orange-500 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">SakhiCopilot</h1>
                <p className="text-gray-300 text-sm md:text-lg">महिला उद्यमिता विकास मंच</p>
                <p className="text-gray-400 text-xs md:text-sm">Women Entrepreneurship Development Platform</p>
              </div>
            </div>
            
            {/* Desktop Header Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-700">
                <Search className="w-4 h-4 mr-2" />
                खोजें
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-700 relative">
                <Bell className="w-4 h-4 mr-2" />
                सूचनाएं
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Settings className="w-4 h-4 mr-2" />
                    <span className="hidden lg:inline">Settings</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-gray-800 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white flex items-center space-x-2">
                      <Settings className="w-5 h-5" />
                      <span>Platform Settings</span>
                    </DialogTitle>
                  </DialogHeader>
                  {/* Enhanced Settings Content */}
                  <div className="space-y-6 py-4 max-h-96 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="border-b border-gray-700 pb-4">
                        <h4 className="font-semibold text-gray-200 mb-3">भाषा प्राथमिकताएं | Language Preferences</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {languages.slice(0, 6).map(lang => (
                            <Button 
                              key={lang}
                              variant={selectedLanguage === lang ? "default" : "outline"} 
                              size="sm" 
                              className="justify-start border-gray-600 text-gray-300 hover:bg-gray-700"
                              onClick={() => setSelectedLanguage(lang)}
                            >
                              {lang}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="border-b border-gray-700 pb-4">
                        <h4 className="font-semibold text-gray-200 mb-3">सुगम्यता | Accessibility</h4>
                        <div className="space-y-3">
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-300 flex items-center">
                              <Eye className="w-4 h-4 mr-2" />
                              उच्च कंट्रास्ट मोड
                            </span>
                            <input type="checkbox" className="rounded" />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-300 flex items-center">
                              <Zap className="w-4 h-4 mr-2" />
                              बड़ा फॉन्ट साइज़
                            </span>
                            <input type="checkbox" className="rounded" />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-300 flex items-center">
                              <Volume2 className="w-4 h-4 mr-2" />
                              आवाज़ नेवीगेशन
                            </span>
                            <input type="checkbox" className="rounded" />
                          </label>
                        </div>
                      </div>

                      <div className="border-b border-gray-700 pb-4">
                        <h4 className="font-semibold text-gray-200 mb-3">सूचनाएं | Notifications</h4>
                        <div className="space-y-3">
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">सरकारी योजना अपडेट</span>
                            <input type="checkbox" defaultChecked className="rounded" />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">प्रशिक्षण सूचनाएं</span>
                            <input type="checkbox" defaultChecked className="rounded" />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">सामुदायिक संदेश</span>
                            <input type="checkbox" className="rounded" />
                          </label>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-200 mb-3">सहायता केंद्र | Support Center</h4>
                        <div className="space-y-2">
                          <Button variant="ghost" size="sm" className="w-full justify-start text-gray-300 hover:bg-gray-700">
                            <Phone className="w-4 h-4 mr-2" />
                            हेल्पलाइन: 1800-XXX-XXXX (24x7)
                          </Button>
                          <Button variant="ghost" size="sm" className="w-full justify-start text-gray-300 hover:bg-gray-700">
                            <Mail className="w-4 h-4 mr-2" />
                            ईमेल: support@sakhicopilot.gov.in
                          </Button>
                          <Button variant="ghost" size="sm" className="w-full justify-start text-gray-300 hover:bg-gray-700">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            लाइव चैट सपोर्ट
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2 pt-4 border-t border-gray-700">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="border-gray-600 text-gray-300 hover:bg-gray-700">
                        रद्द करें
                      </Button>
                      <Button onClick={() => setIsDialogOpen(false)} className="bg-blue-600 hover:bg-blue-700">
                        सेटिंग्स सेव करें
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700">
                <Search className="w-4 h-4 mr-2" />
                खोजें
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700">
                <Bell className="w-4 h-4 mr-2" />
                सूचनाएं
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-700" onClick={() => setIsDialogOpen(true)}>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Quick Stats Bar */}
      <section className="bg-gray-800 py-6 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-blue-900 text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-4 overflow-x-auto">
            <a href="#" className="hover:text-orange-300 transition-colors font-medium whitespace-nowrap flex items-center">
              <Home className="w-4 h-4 mr-1" />
              मुख्य पृष्ठ
            </a>
            <a href="#" className="hover:text-orange-300 transition-colors font-medium whitespace-nowrap">सेवाएं</a>
            <a href="#" className="hover:text-orange-300 transition-colors font-medium whitespace-nowrap">योजनाएं</a>
            <a href="#" className="hover:text-orange-300 transition-colors font-medium whitespace-nowrap">संसाधन</a>
            <a href="#" className="hover:text-orange-300 transition-colors font-medium whitespace-nowrap">प्रशिक्षण</a>
            <a href="#" className="hover:text-orange-300 transition-colors font-medium whitespace-nowrap flex items-center">
              <Info className="w-4 h-4 mr-1" />
              संपर्क
            </a>
          </div>
        </div>
      </nav>

      {/* Important Updates Banner */}
      <section className="bg-orange-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 animate-pulse" />
              <span className="font-semibold">महत्वपूर्ण अपडेट:</span>
              <span className="text-sm">नई महिला उद्यमिता योजना 2024 - अभी आवेदन करें!</span>
            </div>
            <Button variant="ghost" size="sm" className="text-white hover:bg-orange-700">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Hero Section */}
      <section 
        className="relative py-20 bg-gradient-to-r from-gray-800 to-gray-900"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              महिला उद्यमियों का सशक्तिकरण
            </h2>
            <p className="text-xl md:text-2xl mb-4">Empowering Women Entrepreneurs</p>
            <p className="text-lg md:text-xl mb-10 opacity-90">
              भारत सरकार की डिजिटल पहल - महिला उद्यमियों के लिए व्यापारिक मार्गदर्शन, 
              वित्तीय उपकरण और सामुदायिक सहायता प्रदान करने वाला एकीकृत मंच
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button
                onClick={onStartChat}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                AI सहायक शुरू करें
              </Button>
              <Button
                onClick={onOpenBusinessPlan}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold"
              >
                <FileText className="w-6 h-6 mr-3" />
                व्यापारिक योजना बनाएं
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4" />
                <span>100% सुरक्षित</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span>4.8★ रेटिंग</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span>24x7 उपलब्ध</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="py-8 bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2" />
            नवीनतम अपडेट | Recent Updates
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {recentUpdates.map((update, index) => (
              <Card key={index} className={`bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors cursor-pointer ${update.important ? 'border-l-4 border-l-orange-500' : ''}`}>
                <CardContent className="p-4">
                  <h4 className="text-white font-semibold mb-2">{update.title}</h4>
                  <p className="text-gray-400 text-sm">{update.date}</p>
                  {update.important && (
                    <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded mt-2">
                      महत्वपूर्ण
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            सफलता की कहानियां | Success Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-700 border-gray-600 group">
              <div className="h-48 bg-gray-600 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop" 
                  alt="Women entrepreneurs working together"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  डिजिटल सशक्तिकरण
                </h4>
                <p className="text-gray-300 mb-4">
                  Technology empowering women entrepreneurs across rural and urban India
                </p>
                <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 p-0">
                  और पढ़ें <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-700 border-gray-600 group">
              <div className="h-48 bg-gray-600 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop" 
                  alt="Woman using laptop for business"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  व्यापारिक नवाचार
                </h4>
                <p className="text-gray-300 mb-4">
                  Innovative business solutions through digital platforms and assistance
                </p>
                <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 p-0">
                  और पढ़ें <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-700 border-gray-600 group">
              <div className="h-48 bg-gray-600 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop" 
                  alt="Digital technology display"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  तकनीकी प्रगति
                </h4>
                <p className="text-gray-300 mb-4">
                  Advanced digital tools and resources for modern entrepreneurship
                </p>
                <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 p-0">
                  और पढ़ें <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-white mb-4">
            डिजिटल सेवाएं | Digital Services
          </h3>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            महिला उद्यमियों के लिए विशेष रूप से डिज़ाइन की गई व्यापक डिजिटल सेवाएं
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card className="border-2 border-gray-700 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer bg-gray-800 group" onClick={onStartChat}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  व्यापारिक सहायक
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Instant business guidance and query resolution
                </p>
                <div className="flex items-center justify-center text-blue-400 text-sm">
                  <Zap className="w-4 h-4 mr-1" />
                  तुरंत उपलब्ध
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-green-500 hover:shadow-lg transition-all cursor-pointer bg-gray-800 group" onClick={onOpenBusinessPlan}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  व्यापारिक योजना जेनरेटर
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Professional business plan creation with financial projections
                </p>
                <div className="flex items-center justify-center text-green-400 text-sm">
                  <Star className="w-4 h-4 mr-1" />
                  AI संचालित
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer bg-gray-800 group" onClick={onOpenFinancialCalc}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calculator className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  वित्तीय कैलकुलेटर
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Calculate ROI, EMI, break-even analysis and profit margins
                </p>
                <div className="flex items-center justify-center text-orange-400 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  सटीक गणना
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-purple-500 hover:shadow-lg transition-all cursor-pointer bg-gray-800 group" onClick={onOpenGovSchemes}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <PiggyBank className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  सरकारी योजनाएं
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Government schemes and funding opportunities for women
                </p>
                <div className="flex items-center justify-center text-purple-400 text-sm">
                  <Shield className="w-4 h-4 mr-1" />
                  सरकारी मान्यता प्राप्त
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-red-500 hover:shadow-lg transition-all cursor-pointer bg-gray-800 group" onClick={onOpenCommunity}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  सामुदायिक मंच
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Connect and collaborate with fellow women entrepreneurs
                </p>
                <div className="flex items-center justify-center text-red-400 text-sm">
                  <Heart className="w-4 h-4 mr-1" />
                  2.5 लाख+ सदस्य
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-yellow-500 hover:shadow-lg transition-all cursor-pointer bg-gray-800 group" onClick={onOpenAchievements}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  प्रगति ट्रैकिंग
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Track entrepreneurial journey and milestone achievements
                </p>
                <div className="flex items-center justify-center text-yellow-400 text-sm">
                  <Award className="w-4 h-4 mr-1" />
                  व्यक्तिगत डैशबोर्ड
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-indigo-500 hover:shadow-lg transition-all cursor-pointer bg-gray-800 group" onClick={onOpenPoster}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  मार्केटिंग सामग्री
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Create promotional materials and business posters
                </p>
                <div className="flex items-center justify-center text-indigo-400 text-sm">
                  <Palette className="w-4 h-4 mr-1" />
                  प्रोफेशनल डिज़ाइन
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-teal-500 hover:shadow-lg transition-all cursor-pointer bg-gray-800 group" onClick={onOpenEducation}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-teal-600" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  शिक्षा संसाधन
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  Training materials and educational content library
                </p>
                <div className="flex items-center justify-center text-teal-400 text-sm">
                  <BookOpen className="w-4 h-4 mr-1" />
                  500+ कोर्स उपलब्ध
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features with Images */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            मंच की विशेषताएं | Platform Features
          </h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop" 
                  alt="Comprehensive guidance through technology"
                  className="w-full h-48 object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4">व्यापक मार्गदर्शन</h4>
              <p className="text-gray-300">
                End-to-end business support through digital assistance and government resources
              </p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=300&h=200&fit=crop" 
                  alt="Financial tools and calculations"
                  className="w-full h-48 object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4">वित्तीय उपकरण</h4>
              <p className="text-gray-300">
                Professional financial calculators and business planning tools for informed decision making
              </p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop" 
                  alt="Community support and collaboration"
                  className="w-full h-48 object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4">सामुदायिक सहायता</h4>
              <p className="text-gray-300">
                Connect with mentors, government officials, and fellow entrepreneurs for networking and growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-purple-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">
            आज ही अपनी उद्यमिता यात्रा शुरू करें
          </h3>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            भारत की महिला उद्यमियों के लिए विशेष रूप से डिज़ाइन किए गए इस डिजिटल मंच से जुड़ें
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <Button
              onClick={onStartChat}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              अभी शुरू करें
            </Button>
            
            <ShareButton 
              type="invite" 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-950 px-10 py-4 text-lg font-semibold"
            />

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-950 px-10 py-4 text-lg font-semibold flex items-center"
            >
              <Download className="w-6 h-6 mr-3" />
              मोबाइल ऐप डाउनलोड करें
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>सरकारी गारंटी</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>24x7 सपोर्ट</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>2.5 लाख+ उपयोगकर्ता</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Voice Command Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <Button
            onClick={() => console.log('Voice command activated')}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <Mic className="w-6 h-6" />
          </Button>
          <div className="absolute -top-12 right-0 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
            आवाज़ कमांड के लिए दबाएं
          </div>
        </div>
      </div>

      {/* Enhanced Official Footer */}
      <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/72px-Emblem_of_India.svg.png" alt="भारत सरकार" className="w-8 h-8" />
                <h5 className="font-semibold text-lg">मंच के बारे में</h5>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                भारत सरकार की पहल - महिला उद्यमियों को डिजिटल उपकरण और संसाधन प्रदान करने हेतु
              </p>
              <p className="text-gray-500 text-xs">
                महिला एवं बाल विकास मंत्रालय, भारत सरकार
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-lg">त्वरित लिंक</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-1" />सेवाएं</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-1" />सरकारी योजनाएं</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-1" />संसाधन</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-1" />प्रशिक्षण</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-lg">सहायता</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><HelpCircle className="w-3 h-3 mr-1" />सहायता केंद्र</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><Mail className="w-3 h-3 mr-1" />संपर्क करें</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><Shield className="w-3 h-3 mr-1" />गोपनीयता नीति</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center"><FileText className="w-3 h-3 mr-1" />नियम व शर्तें</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-lg">संपर्क विवरण</h5>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  <span>support@sakhicopilot.gov.in</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-green-400" />
                  <span>1800-XXX-XXXX (टॉल फ्री)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-red-400" />
                  <span>नई दिल्ली, भारत</span>
                </div>
                <p className="text-gray-500 text-xs mt-4 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  सोमवार से शुक्रवार: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 भारत सरकार। सभी अधिकार सुरक्षित। | महिला उद्यमिता विकास हेतु विकसित</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              यह वेबसाइट भारत सरकार के दिशा-निर्देशों के अनुसार डिज़ाइन की गई है | Last Updated: December 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GovernmentWelcomePage;
