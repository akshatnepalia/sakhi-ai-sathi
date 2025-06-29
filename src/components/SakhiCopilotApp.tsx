import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import ChatBot from './ChatBot';
import Settings from './Settings';
import BusinessPlanGenerator from './BusinessPlanGenerator';
import FinancialCalculator from './FinancialCalculator';
import GovernmentSchemes from './GovernmentSchemes';
import VoiceCommands from './VoiceCommands';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Settings as SettingsIcon, FileText, Calculator, Building2 } from 'lucide-react';

const SakhiCopilotApp = () => {
  const [currentView, setCurrentView] = useState<'welcome' | 'chat' | 'settings' | 'business-plan' | 'financial-calc' | 'gov-schemes'>('welcome');

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
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <Button
            onClick={handleBackToWelcome}
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center space-x-2">
            {currentView === 'chat' && (
              <>
                <Button
                  onClick={handleOpenBusinessPlan}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Business Plan
                </Button>
                <Button
                  onClick={handleOpenFinancialCalc}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculator
                </Button>
                <Button
                  onClick={handleOpenGovSchemes}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  Schemes
                </Button>
                <Button
                  onClick={handleOpenSettings}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-800"
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
          <WelcomePage 
            onStartChat={handleStartChat}
            onOpenBusinessPlan={handleOpenBusinessPlan}
            onOpenFinancialCalc={handleOpenFinancialCalc}
            onOpenGovSchemes={handleOpenGovSchemes}
          />
        )}
        
        {currentView === 'chat' && (
          <ChatBot />
        )}
        
        {currentView === 'settings' && (
          <Settings />
        )}

        {currentView === 'business-plan' && (
          <BusinessPlanGenerator />
        )}

        {currentView === 'financial-calc' && (
          <FinancialCalculator />
        )}

        {currentView === 'gov-schemes' && (
          <GovernmentSchemes />
        )}
      </div>

      {/* Voice Commands - Only show on welcome and chat pages */}
      {(currentView === 'welcome' || currentView === 'chat') && (
        <VoiceCommands onCommand={handleVoiceCommand} />
      )}
    </div>
  );
};

export default SakhiCopilotApp;
