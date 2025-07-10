
import React from 'react';
import { Send, Mic, MicOff, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { businessService } from '@/utils/aiService';

const getLanguagePlaceholder = (langCode: string) => {
  const placeholders = {
    'hi': "अपना सवाल टाइप करें या 🎤 दबाएं...",
    'en': "Type your question or press 🎤...",
    'bn': "আপনার প্রশ্ন টাইপ করুন বা 🎤 চাপুন...",
    'te': "మీ ప్రశ్నను టైప్ చేయండి లేదా 🎤 నొక్కండి...",
    'mr': "तुमचा प्रश्न टाइप करा किंवा 🎤 दाबा...",
    'ta': "உங்கள் கேள்வியை தட்டச்சு செய்யுங்கள் அல்லது 🎤 அழுத்தவும்...",
    'gu': "તમારો પ્રશ્ન ટાઇપ કરો અથવા 🎤 દબાવો...",
    'kn': "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ 🎤 ಒತ್ತಿ...",
    'ml': "നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക അല്ലെങ്കിൽ 🎤 അമർത്തുക...",
    'pa': "ਆਪਣਾ ਸਵਾਲ ਟਾਈਪ ਕਰੋ ਜਾਂ 🎤 ਦਬਾਓ...",
    'or': "ଆପଣଙ୍କ ପ୍ରଶ୍ନ ଟାଇପ୍ କରନ୍ତୁ କିମ୍ବା 🎤 ଦବାନ୍ତୁ...",
    'as': "আপোনাৰ প্ৰশ্ন টাইপ কৰক বা 🎤 টিপক..."
  };
  return placeholders[langCode as keyof typeof placeholders] || placeholders['en'];
};

const getAskButtonText = (langCode: string) => {
  const texts = {
    'hi': 'पूछें',
    'en': 'Ask',
    'bn': 'জিজ্ঞাসা',
    'te': 'అడుగు',
    'mr': 'विचारा',
    'ta': 'கேள்',
    'gu': 'પૂછો',
    'kn': 'ಕೇಳು',
    'ml': 'ചോദിക്കുക',
    'pa': 'ਪੁੱਛੋ',
    'or': 'ପଚାର',
    'as': 'সোধক'
  };
  return texts[langCode as keyof typeof texts] || texts['en'];
};

const getClearButtonText = (langCode: string) => {
  const texts = {
    'hi': 'साफ़ करें',
    'en': 'Clear',
    'bn': 'পরিষ্কার',
    'te': 'క్లియర్',
    'mr': 'साफ करा',
    'ta': 'அழிக்கவும்',
    'gu': 'સાફ કરો',
    'kn': 'ಅಳಿಸು',
    'ml': 'മായ്ക്കുക',
    'pa': 'ਸਾਫ਼ ਕਰੋ',
    'or': 'ସଫା କର',
    'as': 'চাফা কৰক'
  };
  return texts[langCode as keyof typeof texts] || texts['en'];
};

const getLanguageName = (langCode: string) => {
  const names = {
    'hi': 'Hindi',
    'en': 'English',
    'bn': 'Bengali',
    'te': 'Telugu',
    'mr': 'Marathi',
    'ta': 'Tamil',
    'gu': 'Gujarati',
    'kn': 'Kannada',
    'ml': 'Malayalam',
    'pa': 'Punjabi',
    'or': 'Odia',
    'as': 'Assamese'
  };
  return names[langCode as keyof typeof names] || names['en'];
};

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  isListening: boolean;
  isSpeaking: boolean;
  currentLanguage: string;
  messagesLength: number;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onVoiceInput: () => void;
  onClearChat: () => void;
}

const ChatInput = ({
  input,
  isLoading,
  isListening,
  isSpeaking,
  currentLanguage,
  messagesLength,
  onInputChange,
  onSend,
  onVoiceInput,
  onClearChat
}: ChatInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSend();
    }
  };

  return (
    <div className="bg-white border-t border-orange-200 p-4">
      <div className="flex items-center space-x-2 mb-3">
        <div className="flex-1 relative">
          <Input
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder={getLanguagePlaceholder(currentLanguage)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="border-orange-200 focus:border-orange-400 pr-14"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
            <Button
              onClick={onVoiceInput}
              disabled={isLoading}
              variant="ghost"
              size="sm"
              className={`p-1 ${isListening ? 'text-red-500 animate-pulse' : 'text-orange-500'}`}
            >
              {isListening ? (
                <MicOff className="w-4 h-4" />
              ) : (
                <Mic className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
        <Button
          onClick={onSend}
          disabled={!input.trim() || isLoading}
          className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white px-6"
        >
          <Send className="w-4 h-4 mr-2" />
          {getAskButtonText(currentLanguage)}
        </Button>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-500">
          🎤 Voice: {getLanguageName(currentLanguage)} | 
          🔊 Speaker: {isSpeaking ? 'Playing...' : 'Ready'} |
          🤖 Mode: {businessService.hasLocalDatabase() ? 'Enhanced' : 'Database'}
        </div>
        
        {messagesLength > 0 && (
          <Button
            onClick={onClearChat}
            variant="outline"
            size="sm"
            className="border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            {getClearButtonText(currentLanguage)}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
