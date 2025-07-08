
import React, { useState } from 'react';
import EnhancedWelcomePage from './EnhancedWelcomePage';
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
import { MicrosoftButton } from '@/components/ui/microsoft-button';
import { ArrowLeft, Settings as SettingsIcon, FileText, Calculator, Building2, Users, Trophy, Palette, BookOpen, Timer, Sparkles } from 'lucide-react';

const SakhiCopilotApp = () => {
  const [currentView, setCurrentView] = useState<'welcome' | 'chat' | 'settings' | 'business-plan' | 'financial-calc' | 'gov-schemes' | 'community' | 'achievements' | 'poster' | 'education' | 'instant-select'>('welcome');

  const handleStartChat = () => {
    setCurrentView('chat');
  };

  const handleBackToWelcome = () => {
    setCurrentView('welcome');
  };

  const handleOpenSettings = () => {
    setCurrentView('settings');
  };

  const handleOpenBusinessPlan = () => {
    setCurrentView('business-plan');
  };

  const handleOpenFinancialCalc = () => {
    setCurrentView('financial-calc');
  };

  const handleOpenGovSchemes = () => {
    setCurrentView('gov-schemes');
  };

  const handleOpenCommunity = () => {
    setCurrentView('community');
  };

  const handleOpenAchievements = () => {
    setCurrentView('achievements');
  };

  const handleOpenPoster = () => {
    setCurrentView('poster');
  };

  const handleOpenEducation = () => {
    setCurrentView('education');
  };

  const handleOpenInstantSelect = () => {
    setCurrentView('instant-select');
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
        // Handle help command
        break;
      default:
        console.log('Unknown voice command:', command);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Navigation Header with Microsoft Design */}
      {currentView !== 'welcome' && (
        <div className="relative bg-black/30 backdrop-blur-2xl border-b border-white/10 px-6 py-4">
          {/* Background Effects */}
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
              Back to Home
            </MicrosoftButton>
            
            <div className="flex items-center space-x-2">
              {currentView === 'chat' && (
                <>
                  <MicrosoftButton
                    onClick={() => setCurrentView('business-plan')}
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Business Plan
                  </MicrosoftButton>
                  <MicrosoftButton
                    onClick={() => setCurrentView('financial-calc')}
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculator
                  </MicrosoftButton>
                  <MicrosoftButton
                    onClick={() => setCurrentView('gov-schemes')}
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <Building2 className="w-4 h-4 mr-2" />
                    Schemes
                  </MicrosoftButton>
                  <MicrosoftButton
                    onClick={() => setCurrentView('community')}
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Community
                  </MicrosoftButton>
                  <MicrosoftButton
                    onClick={() => setCurrentView('achievements')}
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <Trophy className="w-4 h-4 mr-2" />
                    Achievements
                  </MicrosoftButton>
                  <MicrosoftButton
                    onClick={() => setCurrentView('poster')}
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <Palette className="w-4 h-4 mr-2" />
                    Poster
                  </MicrosoftButton>
                  <MicrosoftButton
                    onClick={() => setCurrentView('education')}
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Education
                  </MicrosoftButton>
                  <MicrosoftButton
                    onClick={() => setCurrentView('instant-select')}
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <Timer className="w-4 h-4 mr-2" />
                    Quick Select
                  </MicrosoftButton>
                  <MicrosoftButton
                    onClick={() => setCurrentView('settings')}
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white/90 hover:text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
                  >
                    <SettingsIcon className="w-4 h-4 mr-2" />
                    Settings
                  </MicrosoftButton>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content with Microsoft Design */}
      <div className={currentView !== 'welcome' ? 'h-[calc(100vh-80px)]' : ''}>
        {currentView === 'welcome' && (
          <EnhancedWelcomePage 
            onStartChat={() => setCurrentView('chat')}
            onOpenBusinessPlan={() => setCurrentView('business-plan')}
            onOpenFinancialCalc={() => setCurrentView('financial-calc')}
            onOpenGovSchemes={() => setCurrentView('gov-schemes')}
            onOpenCommunity={() => setCurrentView('community')}
            onOpenAchievements={() => setCurrentView('achievements')}
            onOpenPoster={() => setCurrentView('poster')}
            onOpenEducation={() => setCurrentView('education')}
          />
        )}
        
        {/* Enhanced Content Wrapper */}
        {currentView !== 'welcome' && (
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
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Voice Commands */}
      {(currentView === 'welcome' || currentView === 'chat') && (
        <VoiceCommands onCommand={handleVoiceCommand} />
      )}
    </div>
  );
};

export default SakhiCopilotApp;
