import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, MessageCircle, Trash2, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { aiService } from '@/utils/aiService';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'hi' | 'en'>('hi');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const savedSettings = localStorage.getItem('sakhi_settings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setCurrentLanguage(settings.language || 'hi');
    }

    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

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

      if (synthRef.current && !isSpeaking) {
        speakResponse(response.response);
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
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    
    if (!SpeechRecognition) {
      toast({
        title: "❌ Voice Not Supported",
        description: "Speech recognition is not supported on this browser. Try Chrome or Edge.",
        variant: "destructive"
      });
      return;
    }

    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      
      recognition.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        toast({
          title: `🎤 Listening...`,
          description: `Speak in ${currentLanguage === 'hi' ? 'Hindi (हिंदी)' : 'English'}`,
          variant: "default"
        });
      };

      recognition.onresult = (event) => {
        if (event.results.length > 0) {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          toast({
            title: "✅ Voice Recognized",
            description: `Heard: "${transcript}"`,
            variant: "default"
          });
        }
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        
        let errorMessage = "Voice recognition failed. Please try again.";
        switch (event.error) {
          case 'no-speech':
            errorMessage = "No speech detected. Please try speaking again.";
            break;
          case 'audio-capture':
            errorMessage = "Microphone not accessible. Please check permissions.";
            break;
          case 'not-allowed':
            errorMessage = "Microphone permission denied. Please allow microphone access.";
            break;
          case 'network':
            errorMessage = "Network error. Please check your internet connection.";
            break;
        }
        
        toast({
          title: "🎤 Voice Error",
          description: errorMessage,
          variant: "destructive"
        });
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (error) {
      console.error('Speech recognition setup error:', error);
      setIsListening(false);
      toast({
        title: "❌ Voice Setup Failed",
        description: "Could not initialize voice recognition. Please try again.",
        variant: "destructive"
      });
    }
  };

  const speakResponse = (text: string) => {
    if (!synthRef.current) {
      toast({
        title: "🔊 Speaker Not Available",
        description: "Text-to-speech is not supported on this browser.",
        variant: "destructive"
      });
      return;
    }

    synthRef.current.cancel();

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      
      utterance.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.9;

      const voices = synthRef.current.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.lang.startsWith(currentLanguage === 'hi' ? 'hi' : 'en')
      );
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        toast({
          title: "🔊 Speaking...",
          description: "Tap the speaker icon to stop",
          variant: "default"
        });
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = (error) => {
        console.error('Speech synthesis error:', error);
        setIsSpeaking(false);
        toast({
          title: "🔊 Speaker Error",
          description: "Could not play the response. Please try again.",
          variant: "destructive"
        });
      };

      synthRef.current.speak(utterance);
    } catch (error) {
      console.error('Speech synthesis setup error:', error);
      toast({
        title: "🔊 Speaker Setup Failed",
        description: "Could not initialize text-to-speech. Please try again.",
        variant: "destructive"
      });
    }
  };

  const stopSpeaking = () => {
    if (synthRef.current && isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      toast({
        title: "🔇 Speech Stopped",
        description: "Playback has been stopped.",
        variant: "default"
      });
    }
  };

  const clearChat = () => {
    setMessages([]);
    setInput('');
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
    toast({
      title: "🗑️ Chat Cleared",
      description: "All messages have been removed.",
      variant: "default"
    });
  };

  const quickSuggestions = currentLanguage === 'hi' 
    ? ['व्यापार कैसे शुरू करें?', 'लोन कैसे मिलेगा?', 'मार्केटिंग टिप्स', 'सरकारी योजनाएं']
    : ['How to start business?', 'Get business loan?', 'Marketing tips', 'Government schemes'];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      {/* Header */}
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
              onClick={isSpeaking ? stopSpeaking : undefined}
              className={`${isSpeaking ? 'text-red-500 animate-pulse' : 'text-gray-500'}`}
              disabled={!isSpeaking}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            
            <Button
              variant={currentLanguage === 'hi' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentLanguage('hi')}
              className="text-xs"
            >
              हिं
            </Button>
            <Button
              variant={currentLanguage === 'en' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentLanguage('en')}
              className="text-xs"
            >
              EN
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
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
                  onClick={() => setInput(suggestion)}
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
                        onClick={() => speakResponse(message.content)}
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

      {/* Input Area */}
      <div className="bg-white border-t border-orange-200 p-4">
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex-1 relative">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={currentLanguage === 'hi' 
                ? "अपना सवाल टाइप करें या 🎤 दबाएं..."
                : "Type your question or press 🎤..."}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              disabled={isLoading}
              className="border-orange-200 focus:border-orange-400 pr-14"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
              <Button
                onClick={handleVoiceInput}
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
            onClick={handleSend}
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
          
          {messages.length > 0 && (
            <Button
              onClick={clearChat}
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
    </div>
  );
};

export default ChatBot;
