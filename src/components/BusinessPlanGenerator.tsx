
import React, { useState } from 'react';
import { MicrosoftCard, MicrosoftCardContent, MicrosoftCardHeader, MicrosoftCardTitle } from './ui/microsoft-card';
import { MicrosoftButton } from './ui/microsoft-button';
import { SubTabs } from './ui/sub-tabs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { FileText, Download, Lightbulb, Calculator, TrendingUp, Users, MapPin, Target, Zap, Sparkles } from 'lucide-react';

const BusinessPlanGenerator = () => {
  const [businessType, setBusinessType] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [investment, setInvestment] = useState('');

  const businessPlanTabs = [
    {
      id: 'overview',
      label: 'व्यापार सिंहावलोकन',
      icon: <Lightbulb className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop" 
                alt="Business planning"
                className="w-full h-32 object-cover rounded-lg shadow-sm mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">व्यापारिक योजना क्यों जरूरी है?</h3>
              <p className="text-gray-600 text-sm">
                एक अच्छी व्यापारिक योजना आपके सपनों को साकार करने का रोडमैप है। यह आपको स्पष्ट दिशा देती है।
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop" 
                alt="Success planning"
                className="w-full h-32 object-cover rounded-lg shadow-sm mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">सफलता के लिए रणनीति</h3>
              <p className="text-gray-600 text-sm">
                AI की मदद से बनाई गई योजना आपको बाजार में प्रतिस्पर्धा में आगे रखती है।
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'financials',
      label: 'वित्तीय योजना',
      icon: <Calculator className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop" 
                alt="Financial planning"
                className="w-full h-32 object-cover rounded-lg shadow-sm mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">वित्तीय पूर्वानुमान</h3>
              <p className="text-gray-600 text-sm">
                निवेश, लागत, और मुनाफे का विस्तृत विश्लेषण करें।
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop" 
                alt="Investment planning"
                className="w-full h-32 object-cover rounded-lg shadow-sm mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">निवेश रणनीति</h3>
              <p className="text-gray-600 text-sm">
                शुरुआती निवेश से लेकर भविष्य की वृद्धि तक की योजना।
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'marketing',
      label: 'मार्केटिंग रणनीति',
      icon: <TrendingUp className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop" 
                alt="Marketing strategy"
                className="w-full h-32 object-cover rounded-lg shadow-sm mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">डिजिटल मार्केटिंग</h3>
              <p className="text-gray-600 text-sm">
                सोशल मीडिया और ऑनलाइन प्लेटफॉर्म का सदुपयोग करें।
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop" 
                alt="Customer reach"
                className="w-full h-32 object-cover rounded-lg shadow-sm mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">ग्राहक पहुंच</h3>
              <p className="text-gray-600 text-sm">
                स्थानीय और राष्ट्रीय स्तर पर ग्राहकों तक पहुंचने की रणनीति।
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'operations',
      label: 'संचालन योजना',
      icon: <Target className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=200&fit=crop" 
                alt="Operations planning"
                className="w-full h-32 object-cover rounded-lg shadow-sm mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">दैनिक संचालन</h3>
              <p className="text-gray-600 text-sm">
                व्यापार के दैनिक कार्यों की व्यवस्थित योजना।
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop" 
                alt="Workflow optimization"
                className="w-full h-32 object-cover rounded-lg shadow-sm mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">कार्यप्रवाह अनुकूलन</h3>
              <p className="text-gray-600 text-sm">
                कुशलता और गुणवत्ता के लिए प्रक्रिया सुधार।
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            व्यापारिक योजना जेनरेटर
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI की मदद से अपनी व्यापारिक योजना बनाएं। हमारा स्मार्ट सिस्टम आपकी जरूरतों के अनुसार व्यापक योजना तैयार करता है।
          </p>
        </div>

        <Tabs defaultValue="create" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="create" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              नई योजना बनाएं
            </TabsTrigger>
            <TabsTrigger value="templates" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              टेम्प्लेट्स
            </TabsTrigger>
            <TabsTrigger value="guide" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              गाइड
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-6">
            <MicrosoftCard>
              <MicrosoftCardHeader>
                <MicrosoftCardTitle>व्यापार की जानकारी दें</MicrosoftCardTitle>
              </MicrosoftCardHeader>
              <MicrosoftCardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      व्यापार का नाम
                    </label>
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="जैसे: रानी की साड़ी दुकान"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      व्यापार का प्रकार
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">व्यापार का प्रकार चुनें</option>
                      <option value="tailoring">सिलाई-कढ़ाई</option>
                      <option value="food">खाद्य उत्पादन</option>
                      <option value="handicrafts">हस्तशिल्प</option>
                      <option value="beauty">सौंदर्य सेवाएं</option>
                      <option value="retail">खुदरा व्यापार</option>
                      <option value="agriculture">कृषि उत्पाद</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      स्थान
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="जैसे: जयपुर, राजस्थान"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      प्रारंभिक निवेश
                    </label>
                    <input
                      type="text"
                      value={investment}
                      onChange={(e) => setInvestment(e.target.value)}
                      placeholder="जैसे: ₹50,000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <MicrosoftButton 
                  variant="microsoft" 
                  size="lg"
                  className="w-full"
                  disabled={!businessName || !businessType}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  AI से व्यापारिक योजना बनाएं
                </MicrosoftButton>
              </MicrosoftCardContent>
            </MicrosoftCard>

            {businessName && businessType && (
              <MicrosoftCard>
                <MicrosoftCardHeader>
                  <MicrosoftCardTitle>आपकी व्यापारिक योजना</MicrosoftCardTitle>
                </MicrosoftCardHeader>
                <MicrosoftCardContent>
                  <SubTabs tabs={businessPlanTabs} defaultTab="overview" />
                  
                  <div className="mt-8 flex flex-wrap gap-4 justify-center">
                    <MicrosoftButton variant="outline" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      PDF डाउनलोड करें
                    </MicrosoftButton>
                    <MicrosoftButton variant="outline" className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Word में सेव करें
                    </MicrosoftButton>
                  </div>
                </MicrosoftCardContent>
              </MicrosoftCard>
            )}
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "सिलाई-कढ़ाई व्यापार",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
                  description: "महिलाओं के लिए सिलाई-कढ़ाई व्यापार की संपूर्ण योजना"
                },
                {
                  title: "खाद्य उत्पादन व्यापार",
                  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
                  description: "घर से शुरू करें खाद्य उत्पादन का व्यापार"
                },
                {
                  title: "हस्तशिल्प व्यापार",
                  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop",
                  description: "पारंपरिक हस्तशिल्प को आधुनिक बाजार में बेचें"
                }
              ].map((template, index) => (
                <MicrosoftCard key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img 
                      src={template.image} 
                      alt={template.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <MicrosoftCardContent className="p-4">
                    <h3 className="font-semibold mb-2">{template.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                    <MicrosoftButton variant="outline" size="sm" className="w-full">
                      टेम्प्लेट का उपयोग करें
                    </MicrosoftButton>
                  </MicrosoftCardContent>
                </MicrosoftCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guide" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop" 
                  alt="Business planning guide"
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">व्यापारिक योजना कैसे बनाएं?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• अपने व्यापार का विचार स्पष्ट करें</li>
                  <li>• बाजार अनुसंधान करें</li>
                  <li>• वित्तीय योजना तैयार करें</li>
                  <li>• मार्केटिंग रणनीति बनाएं</li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop" 
                  alt="Success tips"
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">सफलता के लिए टिप्स</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• छोटे से शुरुआत करें</li>
                  <li>• ग्राहकों की प्रतिक्रिया सुनें</li>
                  <li>• निरंतर सीखते रहें</li>
                  <li>• नेटवर्किंग करें</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BusinessPlanGenerator;
