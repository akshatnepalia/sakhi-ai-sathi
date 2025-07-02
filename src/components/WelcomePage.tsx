
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Users, TrendingUp, Heart, FileText, Calculator, PiggyBank, Award, Trophy, Palette, Star, Sparkles, Crown, Target } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 via-yellow-50 to-emerald-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 -left-8 w-64 h-64 bg-gradient-to-br from-orange-200 to-yellow-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-8 right-1/3 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          {/* Hero Image */}
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-rose-400 via-orange-400 to-yellow-400 rounded-3xl rotate-6 flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Crown className="w-16 h-16 text-white transform -rotate-6" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-rose-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-6 leading-tight">
            SakhiCopilot
          </h1>
          
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            आपकी सफलता की सहेली 💫
          </p>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            महिला उद्यमियों के लिए संपूर्ण व्यापारिक मार्गदर्शन, समुदायिक सहयोग, और उपलब्धि ट्रैकिंग
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Button
              onClick={onStartChat}
              className="bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-500 hover:from-rose-600 hover:via-orange-600 hover:to-yellow-600 text-white px-10 py-4 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              सखी से बात करें
            </Button>
            
            <Button
              onClick={onOpenBusinessPlan}
              variant="outline"
              className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Target className="w-6 h-6 mr-3" />
              बिजनेस प्लान बनाएं
            </Button>
          </div>

          {/* Success Stories Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 mb-16 shadow-2xl">
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=120&h=120&fit=crop&crop=face" 
                  alt="Successful woman entrepreneur" 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg mr-2"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&h=120&fit=crop&crop=face" 
                  alt="Woman using laptop" 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg mx-2"
                />
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=120&h=120&fit=crop&crop=face" 
                  alt="Business woman" 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg ml-2"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">2,847+ सफल महिला उद्यमी</h3>
              <p className="text-purple-100 text-lg">हमारे साथ अपना बिजनेस बढ़ा चुकी हैं! 🚀</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20"></div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          <Card className="group border-0 bg-gradient-to-br from-rose-50 to-pink-100 hover:from-rose-100 hover:to-pink-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1" onClick={onStartChat}>
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full opacity-30"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                स्मार्ट AI चैट 🗣️
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                हिंदी या अंग्रेजी में तुरंत जवाब पाएं, आवाज़ की सुविधा के साथ
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:rotate-1" onClick={onOpenBusinessPlan}>
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-30"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                बिजनेस प्लान जेनेरेटर 📊
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                वित्तीय अनुमानों के साथ प्रोफेशनल बिजनेस प्लान बनाएं
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-gradient-to-br from-emerald-50 to-teal-100 hover:from-emerald-100 hover:to-teal-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1" onClick={onOpenFinancialCalc}>
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-30"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                <Calculator className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                वित्तीय कैलकुलेटर 💰
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                मुनाफा, ROI, लोन EMI, और ब्रेक-ईवन पॉइंट कैलकुलेट करें
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-gradient-to-br from-purple-50 to-pink-100 hover:from-purple-100 hover:to-pink-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:rotate-1" onClick={onOpenGovSchemes}>
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-30"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                <PiggyBank className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                सरकारी योजनाएं 🏛️
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                महिला उद्यमियों के लिए लोन और योजनाएं खोजें
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-gradient-to-br from-orange-50 to-red-100 hover:from-orange-100 hover:to-red-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1" onClick={onOpenCommunity}>
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-200 to-red-300 rounded-full opacity-30"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                कम्युनिटी फोरम 👥
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                साथी उद्यमियों से जुड़ें और अनुभव साझा करें
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-gradient-to-br from-yellow-50 to-orange-100 hover:from-yellow-100 hover:to-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:rotate-1" onClick={onOpenAchievements}>
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-30"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                उपलब्धि सिस्टम 🏆
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                प्रगति ट्रैक करें और बढ़ने के साथ रिवार्ड अनलॉक करें
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-gradient-to-br from-indigo-50 to-blue-100 hover:from-indigo-100 hover:to-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1" onClick={onOpenPoster}>
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-full opacity-30"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                पोस्टर जेनेरेटर 🎨
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                अपने बिजनेस के लिए सुंदर प्रमोशनल पोस्टर बनाएं
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-gradient-to-br from-teal-50 to-cyan-100 hover:from-teal-100 hover:to-cyan-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:rotate-1">
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-full opacity-30"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                मेंटरशिप प्रोग्राम 🌟
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                अनुभवी उद्यमियों से सीधे सलाह और मार्गदर्शन पाएं
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 mb-16 border border-white/20">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              सफलता की कहानियां 📈
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face" 
                  alt="Priya Sharma - Pickle Business Success" 
                  className="w-24 h-24 rounded-full mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">प्रिया शर्मा</h4>
              <p className="text-gray-600 text-sm mb-3">अचार बिजनेस</p>
              <p className="text-2xl font-bold text-green-600 mb-2">₹50,000/महीना</p>
              <p className="text-gray-600 text-sm">"₹5000 से शुरू करके आज मैं एक सफल बिजनेसवुमन हूं!"</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face" 
                  alt="Sunita Devi - Handicraft Export Success" 
                  className="w-24 h-24 rounded-full mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Crown className="w-4 h-4 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">सुनीता देवी</h4>
              <p className="text-gray-600 text-sm mb-3">हस्तशिल्प निर्यात</p>
              <p className="text-2xl font-bold text-blue-600 mb-2">₹1,20,000/महीना</p>
              <p className="text-gray-600 text-sm">"घर से शुरू करके अब मैं अंतर्राष्ट्रीय बाजार में हूं!"</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=200&fit=crop&crop=face" 
                  alt="Meera Patel - Fashion Boutique Success" 
                  className="w-24 h-24 rounded-full mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">मीरा पटेल</h4>
              <p className="text-gray-600 text-sm mb-3">फैशन बुटीक</p>
              <p className="text-2xl font-bold text-purple-600 mb-2">₹80,000/महीना</p>
              <p className="text-gray-600 text-sm">"सखी की मदद से मैंने अपना सपनों का बुटीक खोला!"</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-500 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              आज ही शुरू करें अपना बिजनेस जर्नी! 🚀
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
              हज़ारों महिलाओं की तरह आप भी बनें एक सफल उद्यमी। सखी आपके साथ है हर कदम पर!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                onClick={onStartChat}
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-4 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-6 h-6 mr-3" />
                अभी शुरू करें
              </Button>
              
              <ShareButton 
                type="invite" 
                variant="outline"
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
