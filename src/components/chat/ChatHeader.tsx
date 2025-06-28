
import React from 'react';
import { MessageCircle, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { aiService } from '@/utils/aiService';

interface ChatHeaderProps {
  currentLanguage: 'hi' | 'en';
  isSpeaking: boolean;
  onLanguageChange: (lang: 'hi' | 'en') => void;
  onStopSpeaking: () => void;
}

const ChatHeader = ({ currentLanguage, isSpeaking, onLanguageChange, onStopSpeaking }: ChatHeaderProps) => {
  return (
    <div className="bg-white border-b border-orange-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">SakhiCopilot</h1>
            <p className="text-sm text-gray-600 flex items-center space-x-2">
              <span>Your Business Companion</span>
              {aiService.hasApiKey() ? (
                <Badge className="bg-green-100 text-green-700 text-xs">Enhanced Active</Badge>
              ) : (
                <Badge variant="outline" className="bg-yellow-100 text-yellow-700 text-xs">Database Mode</Badge>
              )}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={isSpeaking ? onStopSpeaking : undefined}
            className={`${isSpeaking ? 'text-red-500 animate-pulse' : 'text-gray-500'}`}
            disabled={!isSpeaking}
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
          
          <Button
            variant={currentLanguage === 'hi' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onLanguageChange('hi')}
            className="text-xs"
          >
            हिं
          </Button>
          <Button
            variant={currentLanguage === 'en' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onLanguageChange('en')}
            className="text-xs"
          >
            EN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
