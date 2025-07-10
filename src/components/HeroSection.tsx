
import React, { useState } from 'react';
import { Mic, MicOff, MessageCircle, FileText, Palette, Volume2 } from 'lucide-react';
import { MicrosoftButton } from './ui/microsoft-button';
import { MicrosoftCard } from './ui/microsoft-card';

interface HeroSectionProps {
  language: 'hi' | 'en';
  onStartChat: () => void;
  onOpenBusinessPlan: () => void;
  onOpenPoster: () => void;
}

const HeroSection = ({ language, onStartChat, onOpenBusinessPlan, onOpenPoster }: HeroSectionProps) => {
  const [isListening, setIsListening] = useState(false);

  const content = {
    en: {
      tagline: "Empowering Rural Women with AI",
      subtitle: "Your AI-powered business companion for growth and success",
      voiceHint: "Tap to speak your question in Hindi or English",
      ctaVoice: "Try Voice Assistant",
      ctaBusiness: "Create Business Plan",
      ctaPoster: "Make Poster",
      quickStart: "Quick Start Options:",
      startSHG: "Start SHG",
      askAI: "Ask AI",
      stats: [
        { number: "24/7", label: "AI Support" },
        { number: "12+", label: "Indian Languages" },
        { number: "100%", label: "Free to Use" }
      ]
    },
    hi: {
      tagline: "AI के साथ ग्रामीण महिलाओं का सशक्तिकरण",
      subtitle: "आपका AI-संचालित व्यापारिक साथी विकास और सफलता के लिए",
      voiceHint: "अपना प्रश्न हिंदी या अंग्रेजी में बोलने के लिए टैप करें",
      ctaVoice: "वॉइस असिस्टेंट आज़माएं",
      ctaBusiness: "व्यापारिक योजना बनाएं",
      ctaPoster: "पोस्टर बनाएं",
      quickStart: "त्वरित प्रारंभ विकल्प:",
      startSHG: "SHG शुरू करें",
      askAI: "AI से पूछें",
      stats: [
        { number: "24/7", label: "AI सहायता" },
        { number: "12+", label: "भारतीय भाषाएं" },
        { number: "100%", label: "निःशुल्क उपयोग" }
      ]
    }
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Start voice recognition
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = language === 'hi' ? 'hi-IN' : 'en-US';
        recognition.start();
        
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          console.log('Voice input:', transcript);
          setIsListening(false);
          onStartChat();
        };
        
        recognition.onerror = () => {
          setIsListening(false);
        };
      }
    }
  };

  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            {content[language].tagline}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {content[language].subtitle}
          </p>

          {/* Voice Interface */}
          <div className="mb-12">
            <MicrosoftCard className="inline-block p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-800">
              <div className="flex flex-col items-center space-y-4">
                <MicrosoftButton
                  onClick={handleVoiceToggle}
                  className={`w-20 h-20 rounded-full ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                  } shadow-2xl`}
                >
                  {isListening ? (
                    <MicOff className="w-8 h-8 text-white" />
                  ) : (
                    <Mic className="w-8 h-8 text-white" />
                  )}
                </MicrosoftButton>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                  {content[language].voiceHint}
                </p>
                
                {isListening && (
                  <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
                    <Volume2 className="w-4 h-4 animate-pulse" />
                    <span className="text-sm font-medium">
                      {language === 'hi' ? 'सुन रहे हैं...' : 'Listening...'}
                    </span>
                  </div>
                )}
              </div>
            </MicrosoftCard>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <MicrosoftButton
              onClick={onStartChat}
              variant="microsoft"
              size="xl"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              {content[language].ctaVoice}
            </MicrosoftButton>
            
            <MicrosoftButton
              onClick={onOpenBusinessPlan}
              variant="outline"
              size="xl"
              className="w-full sm:w-auto"
            >
              <FileText className="w-6 h-6 mr-3" />
              {content[language].ctaBusiness}
            </MicrosoftButton>
            
            <MicrosoftButton
              onClick={onOpenPoster}
              variant="outline"
              size="xl"
              className="w-full sm:w-auto"
            >
              <Palette className="w-6 h-6 mr-3" />
              {content[language].ctaPoster}
            </MicrosoftButton>
          </div>

          {/* Quick Start Options */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {content[language].quickStart}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <MicrosoftButton variant="outline" size="sm" onClick={onStartChat}>
                {content[language].startSHG}
              </MicrosoftButton>
              <MicrosoftButton variant="outline" size="sm" onClick={onOpenPoster}>
                {content[language].ctaPoster}
              </MicrosoftButton>
              <MicrosoftButton variant="outline" size="sm" onClick={onStartChat}>
                {content[language].askAI}
              </MicrosoftButton>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {content[language].stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
