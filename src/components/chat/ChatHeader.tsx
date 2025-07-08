
import React from 'react';
import { MessageCircle, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { businessService } from '@/utils/aiService';

interface ChatHeaderProps {
  currentLanguage: string;
  isSpeaking: boolean;
  onLanguageChange: (lang: string) => void;
  onStopSpeaking: () => void;
}

const languages = [
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'or', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  { code: 'as', name: 'অসমীয়া', flag: '🇮🇳' }
];

const ChatHeader = ({ currentLanguage, isSpeaking, onLanguageChange, onStopSpeaking }: ChatHeaderProps) => {
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

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
              {businessService.hasLocalDatabase() ? (
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
          
          <Select value={currentLanguage} onValueChange={onLanguageChange}>
            <SelectTrigger className="w-32">
              <SelectValue>
                <div className="flex items-center space-x-2">
                  <span>{currentLang.flag}</span>
                  <span className="text-xs">{currentLang.name}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  <div className="flex items-center space-x-2">
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
