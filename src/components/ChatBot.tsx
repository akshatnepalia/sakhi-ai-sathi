
import React, { useState, useEffect } from 'react';
import { aiService } from '@/utils/aiService';
import { useToast } from '@/hooks/use-toast';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis';
import ChatHeader from './chat/ChatHeader';
import ChatMessages from './chat/ChatMessages';
import ChatInput from './chat/ChatInput';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>('hi');
  const { toast } = useToast();

  const { isListening, startListening } = useSpeechRecognition(currentLanguage);
  const { isSpeaking, speak, stop: stopSpeaking } = useSpeechSynthesis(currentLanguage);

  useEffect(() => {
    const savedSettings = localStorage.getItem('sakhi_settings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setCurrentLanguage(settings.language || 'hi');
    }
  }, []);

  useEffect(() => {
    const settings = { language: currentLanguage };
    localStorage.setItem('sakhi_settings', JSON.stringify(settings));
  }, [currentLanguage]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    if (!aiService.hasApiKey()) {
      toast({
        title: "❌ Enhanced Features Unavailable",
        description: "Please add your API key in Settings to get enhanced responses.",
        variant: "destructive"
      });
    }

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await aiService.generateResponse(input, messages.slice(-5));
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: response.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);

      if (!isSpeaking) {
        speak(response.response);
      }

      if (!response.isAI && !aiService.hasApiKey()) {
        toast({
          title: "📱 Database Mode",
          description: "Add your API key in Settings for enhanced responses.",
          variant: "default"
        });
      }
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: "❗ Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceInput = () => {
    startListening(setInput);
  };

  const clearChat = () => {
    setMessages([]);
    setInput('');
    stopSpeaking();
    toast({
      title: "🗑️ Chat Cleared",
      description: "All messages have been removed.",
      variant: "default"
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <ChatHeader
        currentLanguage={currentLanguage}
        isSpeaking={isSpeaking}
        onLanguageChange={setCurrentLanguage}
        onStopSpeaking={stopSpeaking}
      />

      <ChatMessages
        messages={messages}
        isLoading={isLoading}
        currentLanguage={currentLanguage}
        isSpeaking={isSpeaking}
        onSpeak={speak}
        onSuggestionClick={setInput}
      />

      <ChatInput
        input={input}
        isLoading={isLoading}
        isListening={isListening}
        isSpeaking={isSpeaking}
        currentLanguage={currentLanguage}
        messagesLength={messages.length}
        onInputChange={setInput}
        onSend={handleSend}
        onVoiceInput={handleVoiceInput}
        onClearChat={clearChat}
      />
    </div>
  );
};

export default ChatBot;
