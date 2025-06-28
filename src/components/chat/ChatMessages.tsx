
import React, { useRef, useEffect } from 'react';
import { MessageCircle, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
  currentLanguage: 'hi' | 'en';
  isSpeaking: boolean;
  onSpeak: (text: string) => void;
  onSuggestionClick: (suggestion: string) => void;
}

const ChatMessages = ({ 
  messages, 
  isLoading, 
  currentLanguage, 
  isSpeaking, 
  onSpeak, 
  onSuggestionClick 
}: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickSuggestions = currentLanguage === 'hi' 
    ? ['व्यापार कैसे शुरू करें?', 'लोन कैसे मिलेगा?', 'मार्केटिंग टिप्स', 'सरकारी योजनाएं']
    : ['How to start business?', 'Get business loan?', 'Marketing tips', 'Government schemes'];

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 && (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            {currentLanguage === 'hi' ? 'नमस्ते! मैं सखी हूँ 🙏' : 'Hello! I am Sakhi 👋'}
          </h2>
          <p className="text-gray-600 mb-4">
            {currentLanguage === 'hi' 
              ? 'व्यापार के बारे में कोई भी सवाल पूछें - अब ज्यादा जानकारी के साथ!'
              : 'Ask me any business question - now with enhanced database!'}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {quickSuggestions.map((suggestion, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="cursor-pointer hover:bg-orange-100 text-xs"
                onClick={() => onSuggestionClick(suggestion)}
              >
                {suggestion}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <Card className={`max-w-[85%] ${
            message.role === 'user' 
              ? 'bg-gradient-to-r from-orange-400 to-yellow-400 text-white' 
              : 'bg-white border-orange-200'
          }`}>
            <CardContent className="p-3">
              <div className="flex items-start justify-between">
                <p className="text-sm whitespace-pre-wrap flex-1">{message.content}</p>
                {message.role === 'assistant' && (
                  <div className="flex space-x-1 ml-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-1 h-6 w-6"
                      onClick={() => onSpeak(message.content)}
                      disabled={isSpeaking}
                    >
                      <Volume2 className="w-3 h-3" />
                    </Button>
                  </div>
                )}
              </div>
              <p className={`text-xs mt-2 ${
                message.role === 'user' ? 'text-orange-100' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
      
      {isLoading && (
        <div className="flex justify-start">
          <Card className="bg-white border-orange-200">
            <CardContent className="p-3">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm text-gray-600">
                  {currentLanguage === 'hi' ? 'सखी सोच रही है...' : 'Sakhi is thinking...'}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
