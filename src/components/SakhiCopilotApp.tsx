
import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import ChatBot from './ChatBot';
import Settings from './Settings';
import BusinessPlanGenerator from './BusinessPlanGenerator';
import FinancialCalculator from './FinancialCalculator';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Settings as SettingsIcon, FileText, Calculator } from 'lucide-react';

const SakhiCopilotApp = () => {
  const [currentView, setCurrentView] = useState<'welcome' | 'chat' | 'settings' | 'business-plan' | 'financial-calc'>('welcome');

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
      </div>
    </div>
  );
};

export default SakhiCopilotApp;
