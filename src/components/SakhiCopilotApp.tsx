import React, { useState, useEffect } from 'react';
import GovernmentWelcomePage from './GovernmentWelcomePage';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import QuickActions from './QuickActions';
import ChatBot from './ChatBot';
import Settings from './Settings';
import BusinessPlanGenerator from './BusinessPlanGenerator';
import FinancialCalculator from './FinancialCalculator';
import GovernmentSchemes from './GovernmentSchemes';
import CommunityForum from './CommunityForum';
import AchievementSystem from './AchievementSystem';
import VoiceCommands from './VoiceCommands';
import PosterGenerator from './PosterGenerator';
import EducationResources from './EducationResources';
import InstantSelectDemo from './InstantSelectDemo';
import SHGMarketplace from './SHGMarketplace';
import MarketingGenerator from './MarketingGenerator';
import { ArrowLeft } from 'lucide-react';
import { MicrosoftButton } from '@/components/ui/microsoft-button';

interface SakhiCopilotAppProps {
  initialView?: 'welcome' | 'chat' | 'settings' | 'business-plan' | 'financial-calc' | 'gov-schemes' | 'community' | 'achievements' | 'poster' | 'education' | 'instant-select' | 'marketplace' | 'marketing';
}

const SakhiCopilotApp = ({ initialView = 'welcome' }: SakhiCopilotAppProps) => {
  const [currentView, setCurrentView] = useState<'welcome' | 'chat' | 'settings' | 'business-plan' | 'financial-calc' | 'gov-schemes' | 'community' | 'achievements' | 'poster' | 'education' | 'instant-select' | 'marketplace' | 'marketing'>(initialView);
  const [language, setLanguage] = useState<'hi' | 'en'>('en');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language') as 'hi' | 'en';
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLanguageChange = (newLanguage: 'hi' | 'en') => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const handleVoiceCommand = (command: string, params?: any) => {
    switch (command) {
      case 'create_business_plan':
        setCurrentView('business-plan');
        break;
      case 'open_business_plan':
        setCurrentView('business-plan');
        break;
      case 'open_calculator':
        setCurrentView('financial-calc');
        break;
      case 'open_schemes':
        setCurrentView('gov-schemes');
        break;
      case 'open_chat':
        setCurrentView('chat');
        break;
      case 'open_community':
        setCurrentView('community');
        break;
      case 'open_achievements':
        setCurrentView('achievements');
        break;
      case 'open_poster':
        setCurrentView('poster');
        break;
      case 'create_poster':
        setCurrentView('poster');
        break;
      case 'open_education':
        setCurrentView('education');
        break;
      case 'open_instant_select':
        setCurrentView('instant-select');
        break;
      case 'show_help':
        break;
      case 'open_marketplace':
        setCurrentView('marketplace');
        break;
      case 'open_marketing':
        setCurrentView('marketing');
        break;
      case 'create_marketing':
        setCurrentView('marketing');
        break;
      default:
        console.log('Unknown voice command:', command);
    }
  };

  if (currentView === 'welcome') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navigation
          currentLanguage={language}
          onLanguageChange={handleLanguageChange}
          isDarkMode={isDarkMode}
          onThemeToggle={handleThemeToggle}
        />
        
        <HeroSection
          language={language}
          onStartChat={() => setCurrentView('chat')}
          onOpenBusinessPlan={() => setCurrentView('business-plan')}
          onOpenPoster={() => setCurrentView('poster')}
        />
        
        <QuickActions
          language={language}
          onStartChat={() => setCurrentView('chat')}
          onOpenBusinessPlan={() => setCurrentView('business-plan')}
          onOpenPoster={() => setCurrentView('poster')}
          onOpenFinancialCalc={() => setCurrentView('financial-calc')}
          onOpenGovSchemes={() => setCurrentView('gov-schemes')}
          onOpenMarketplace={() => setCurrentView('marketplace')}
          onOpenMarketing={() => setCurrentView('marketing')}
        />

        {/* Enhanced Voice Commands */}
        <VoiceCommands onCommand={handleVoiceCommand} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-colors">
      {/* Navigation Header */}
      <div className="relative bg-black/30 backdrop-blur-2xl border-b border-white/10 px-6 py-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-orange-600/5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        
        <div className="relative z-10 flex items-center justify-between">
          <MicrosoftButton
            onClick={() => setCurrentView('welcome')}
            variant="ghost"
            size="default"
            className="text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {language === 'hi' ? 'होम पर वापस' : 'Back to Home'}
          </MicrosoftButton>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-[calc(100vh-80px)]">
        <div className="h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-purple-500/3 via-blue-500/3 to-pink-500/3 rounded-full animate-spin animation-duration-[60s]"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full">
            {currentView === 'chat' && <ChatBot />}
            {currentView === 'settings' && <Settings />}
            {currentView === 'business-plan' && <BusinessPlanGenerator />}
            {currentView === 'financial-calc' && <FinancialCalculator />}
            {currentView === 'gov-schemes' && <GovernmentSchemes />}
            {currentView === 'community' && <CommunityForum />}
            {currentView === 'achievements' && <AchievementSystem />}
            {currentView === 'poster' && <PosterGenerator />}
            {currentView === 'education' && <EducationResources />}
            {currentView === 'instant-select' && <InstantSelectDemo />}
            {currentView === 'marketplace' && <SHGMarketplace />}
            {currentView === 'marketing' && <MarketingGenerator />}
          </div>
        </div>
      </div>

      {/* Enhanced Voice Commands for specific views */}
      {(currentView === 'chat') && (
        <VoiceCommands onCommand={handleVoiceCommand} />
      )}
    </div>
  );
};

export default SakhiCopilotApp;
