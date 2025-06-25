
import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import ChatBot from './ChatBot';
import Settings from './Settings';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Settings as SettingsIcon } from 'lucide-react';

const SakhiCopilotApp = () => {
  const [currentView, setCurrentView] = useState<'welcome' | 'chat' | 'settings'>('welcome');

  const handleStartChat = () => {
    setCurrentView('chat');
  };

  const handleBackToWelcome = () => {
    setCurrentView('welcome');
  };

  const handleOpenSettings = () => {
    setCurrentView('settings');
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
          
          {currentView === 'chat' && (
            <Button
              onClick={handleOpenSettings}
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-800"
            >
              <SettingsIcon className="w-4 h-4 mr-2" />
              Settings
            </Button>
          )}
        </div>
      )}

      {/* Main Content */}
      <div className={currentView !== 'welcome' ? 'h-[calc(100vh-64px)]' : ''}>
        {currentView === 'welcome' && (
          <WelcomePage onStartChat={handleStartChat} />
        )}
        
        {currentView === 'chat' && (
          <ChatBot />
        )}
        
        {currentView === 'settings' && (
          <Settings />
        )}
      </div>
    </div>
  );
};

export default SakhiCopilotApp;
