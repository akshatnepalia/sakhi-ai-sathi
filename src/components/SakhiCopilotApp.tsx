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
import { Button } from '@/components/ui/button';
import { ArrowLeft, Settings as SettingsIcon, FileText, Calculator, Building2, Users, Trophy, Palette, BookOpen, Timer } from 'lucide-react';

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
    <div className="min-h-screen">
      {/* Navigation Header */}
      {currentView !== 'welcome' && (
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border-b border-white/20 px-4 py-3 flex items-center justify-between backdrop-blur-sm">
          <Button
            onClick={() => setCurrentView('welcome')}
            variant="ghost"
            size="sm"
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center space-x-2">
            {currentView === 'chat' && (
              <>
                <Button
                  onClick={() => setCurrentView('business-plan')}
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Business Plan
                </Button>
                <Button
                  onClick={() => setCurrentView('financial-calc')}
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculator
                </Button>
                <Button
                  onClick={() => setCurrentView('gov-schemes')}
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  Schemes
                </Button>
                <Button
                  onClick={() => setCurrentView('community')}
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Community
                </Button>
                <Button
                  onClick={() => setCurrentView('achievements')}
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  Achievements
                </Button>
                <Button
                  onClick={() => setCurrentView('poster')}
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Palette className="w-4 h-4 mr-2" />
                  Poster
                </Button>
                <Button
                  onClick={() => setCurrentView('education')}
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Education
                </Button>
                <Button
                  onClick={() => setCurrentView('instant-select')}
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Timer className="w-4 h-4 mr-2" />
                  Quick Select
                </Button>
                <Button
                  onClick={() => setCurrentView('settings')}
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <SettingsIcon className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={currentView !== 'welcome' ? 'h-[calc(100vh-64px)]' : ''}>
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

      {/* Voice Commands - Only show on welcome and chat pages */}
      {(currentView === 'welcome' || currentView === 'chat') && (
        <VoiceCommands onCommand={handleVoiceCommand} />
      )}
    </div>
  );
};

export default SakhiCopilotApp;
