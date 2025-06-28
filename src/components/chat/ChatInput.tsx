
import React from 'react';
import { Send, Mic, MicOff, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { aiService } from '@/utils/aiService';

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  isListening: boolean;
  isSpeaking: boolean;
  currentLanguage: 'hi' | 'en';
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
            placeholder={currentLanguage === 'hi' 
              ? "अपना सवाल टाइप करें या 🎤 दबाएं..."
              : "Type your question or press 🎤..."}
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
          {currentLanguage === 'hi' ? 'पूछें' : 'Ask'}
        </Button>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-500">
          🎤 Voice: {currentLanguage === 'hi' ? 'Hindi' : 'English'} | 
          🔊 Speaker: {isSpeaking ? 'Playing...' : 'Ready'} |
          🤖 Mode: {aiService.hasApiKey() ? 'Enhanced' : 'Database'}
        </div>
        
        {messagesLength > 0 && (
          <Button
            onClick={onClearChat}
            variant="outline"
            size="sm"
            className="border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            {currentLanguage === 'hi' ? 'साफ़ करें' : 'Clear'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
