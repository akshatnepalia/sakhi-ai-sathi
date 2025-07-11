
import React, { useState } from 'react';
import SakhiCopilotApp from "@/components/SakhiCopilotApp";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [showApp, setShowApp] = useState(false);
  const [initialView, setInitialView] = useState<'welcome' | 'chat' | 'business-plan' | 'poster' | 'financial-calc' | 'gov-schemes' | 'marketplace' | 'marketing'>('welcome');
  const [language, setLanguage] = useState<'hi' | 'en'>('en');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleQuickStart = (view: 'chat' | 'business-plan' | 'poster' | 'financial-calc' | 'gov-schemes' | 'marketplace' | 'marketing') => {
    setInitialView(view);
    setShowApp(true);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLanguageChange = (newLanguage: 'hi' | 'en') => {
    setLanguage(newLanguage);
  };

  if (showApp) {
    return <SakhiCopilotApp initialView={initialView} />;
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />

      {/* Hero Banner with Indian Background */}
      <div 
        id="home"
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=1200&h=600&fit=crop')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">SakhiCopilot</h1>
            <p className="text-xl mb-2">महिला उद्यमिता सशक्तिकरण</p>
            <p className="text-lg">Empowering Women Entrepreneurs</p>
          </div>
        </div>
      </div>

      {/* Indian Cultural Showcase */}
      <div id="use-cases" className="py-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">भारतीय संस्कृति में महिला सशक्तिकरण | Women Empowerment in Indian Culture</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" 
                alt="Indian women in traditional dress"
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-orange-700">पारंपरिक कारीगरी</h3>
              <p className="text-gray-600">Traditional Craftsmanship</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop" 
                alt="Indian spices and herbs"
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-green-700">मसाला व्यापार</h3>
              <p className="text-gray-600">Spice Business</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1610432763119-135abb7ad5c4?w=400&h=300&fit=crop" 
                alt="Indian textiles and fabrics"
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-purple-700">वस्त्र उद्योग</h3>
              <p className="text-gray-600">Textile Industry</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" 
                alt="Indian handicrafts"
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-red-700">हस्तशिल्प</h3>
              <p className="text-gray-600">Handicrafts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Options with Enhanced Theme */}
      <div id="demo" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">त्वरित शुरुआत | Quick Start</h2>
          <p className="text-lg text-gray-600 text-center mb-12">अपने व्यापारिक सफर की शुरुआत करें | Begin Your Business Journey</p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* AI Chat */}
            <div className="group cursor-pointer" onClick={() => handleQuickStart('chat')}>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="relative mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop" 
                    alt="AI Chat Assistant"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ✨ AI सहायक
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">AI Chat शुरू करें</h3>
                <p className="text-gray-600 text-sm mb-4">अपने सवालों के तुरंत जवाब पाएं</p>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium inline-block">
                  Start AI Chat
                </div>
              </div>
            </div>

            {/* Business Plan */}
            <div className="group cursor-pointer" onClick={() => handleQuickStart('business-plan')}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="relative mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop" 
                    alt="Business Planning"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    📊 व्यापार योजना
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">बिजनेस प्लान बनाएं</h3>
                <p className="text-gray-600 text-sm mb-4">अपने व्यवसाय के लिए पूरी योजना तैयार करें</p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium inline-block">
                  Create Plan
                </div>
              </div>
            </div>

            {/* Poster Generator */}
            <div className="group cursor-pointer" onClick={() => handleQuickStart('poster')}>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="relative mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop" 
                    alt="Design and Creative"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-2 left-2 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    🎨 डिज़ाइन टूल
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">पोस्टर बनाएं</h3>
                <p className="text-gray-600 text-sm mb-4">आकर्षक विज्ञापन और पोस्टर डिज़ाइन करें</p>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium inline-block">
                  Design Now
                </div>
              </div>
            </div>

            {/* Financial Calculator */}
            <div className="group cursor-pointer" onClick={() => handleQuickStart('financial-calc')}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="relative mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop" 
                    alt="Financial Planning"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-2 left-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    💰 वित्त कैलकुलेटर
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">वित्तीय गणना</h3>
                <p className="text-gray-600 text-sm mb-4">लोन, ब्याज और लाभ की गणना करें</p>
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium inline-block">
                  Calculate
                </div>
              </div>
            </div>

            {/* Government Schemes */}
            <div className="group cursor-pointer" onClick={() => handleQuickStart('gov-schemes')}>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="relative mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop" 
                    alt="Government Building"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-2 left-2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    🏛️ सरकारी योजना
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">सरकारी योजनाएं</h3>
                <p className="text-gray-600 text-sm mb-4">महिला उद्यमियों के लिए सरकारी सहायता</p>
                <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium inline-block">
                  Explore Schemes
                </div>
              </div>
            </div>

            {/* SHG Marketplace */}
            <div className="group cursor-pointer" onClick={() => handleQuickStart('marketplace')}>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="relative mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&h=200&fit=crop" 
                    alt="Indian Marketplace"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-2 left-2 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    🛍️ SHG मार्केट
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">SHG मार्केटप्लेस</h3>
                <p className="text-gray-600 text-sm mb-4">महिला उद्यमियों के उत्पाद खरीदें</p>
                <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium inline-block">
                  Shop Now
                </div>
              </div>
            </div>

            {/* WhatsApp Marketing */}
            <div className="group cursor-pointer" onClick={() => handleQuickStart('marketing')}>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="relative mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop" 
                    alt="Mobile Marketing"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    📱 व्हाट्सऐप मार्केटिंग
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp मार्केटिंग</h3>
                <p className="text-gray-600 text-sm mb-4">AI से मार्केटिंग मैसेज बनाएं</p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium inline-block">
                  Create Messages
                </div>
              </div>
            </div>

            {/* Voice Assistant */}
            <div className="group cursor-pointer" onClick={() => handleQuickStart('chat')}>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="relative mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1589254065878-42c9da997008?w=300&h=200&fit=crop" 
                    alt="Voice Technology"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-2 left-2 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    🎤 आवाज़ सहायक
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">आवाज़ से बात करें</h3>
                <p className="text-gray-600 text-sm mb-4">हिंदी में बोलकर मदद लें</p>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium inline-block">
                  Speak Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Showcase with Indian Context */}
      <div id="poster" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">तकनीकी नवाचार | Technology Innovation</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Indian women using technology"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-700">AI-Powered Solutions for Rural India</h3>
              <p className="text-gray-600 mb-4">
                Leveraging artificial intelligence to provide personalized business guidance, 
                financial planning, and marketing solutions tailored specifically for Indian women entrepreneurs and SHGs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop" 
                  alt="Technology dashboard"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop" 
                  alt="Data visualization"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics with Indian Visuals */}
      <div className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">प्रभाव और परिणाम | Impact & Results</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=300&h=200&fit=crop" 
                alt="Indian women entrepreneurs"
                className="w-full h-32 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-orange-600">10,000+</h3>
              <p className="text-gray-600">महिलाएं सशक्त | Women Empowered</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" 
                alt="Business documents"
                className="w-full h-32 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-green-600">5,000+</h3>
              <p className="text-gray-600">व्यापारिक योजनाएं | Business Plans Created</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=200&fit=crop" 
                alt="Indian cities"
                className="w-full h-32 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-purple-600">50+</h3>
              <p className="text-gray-600">शहर कवर किए गए | Cities Covered</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=300&h=200&fit=crop" 
                alt="Indian currency and business growth"
                className="w-full h-32 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-indigo-600">₹10 Cr+</h3>
              <p className="text-gray-600">राजस्व उत्पन्न | Revenue Generated</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured SHG Stories */}
      <div id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">सफलता की कहानियां | Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616c0763264?w=400&h=250&fit=crop" 
                alt="Indian woman entrepreneur"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">रानी देवी - राजस्थान</h3>
              <p className="text-gray-600 text-sm">साड़ी बुनाई के व्यापार में SakhiCopilot की मदद से मासिक आय ₹25,000 तक बढ़ाई।</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop" 
                alt="Indian woman with laptop"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">सुनीता शर्मा - उत्तर प्रदेश</h3>
              <p className="text-gray-600 text-sm">अचार बनाने के व्यापार को डिजिटल मार्केटिंग से ऑनलाइन विस्तार किया।</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop" 
                alt="Indian woman entrepreneur with products"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">प्रिया पटेल - गुजरात</h3>
              <p className="text-gray-600 text-sm">हस्तशिल्प उत्पादों की SHG मार्केटप्लेस पर बिक्री से आर्थिक स्वतंत्रता पाई।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
