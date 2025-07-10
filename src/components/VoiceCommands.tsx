import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VoiceCommandsProps {
  onCommand: (command: string, params?: any) => void;
}

const VoiceCommands = ({ onCommand }: VoiceCommandsProps) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'hi-IN';
      
      recognitionInstance.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log('Voice command:', transcript);
        
        handleVoiceCommand(transcript);
      };
      
      recognitionInstance.onend = () => {
        setIsListening(false);
      };
      
      recognitionInstance.onerror = (event: any) => {
        console.error('Voice recognition error:', event.error);
        setIsListening(false);
        toast({
          title: "🎤 Voice Error",
          description: "Could not understand command. Please try again.",
          variant: "destructive"
        });
      };
      
      setRecognition(recognitionInstance);
    }
  }, []);

  const handleVoiceCommand = (transcript: string) => {
    // Business plan commands
    if (transcript.includes('बिजनेस प्लान') || transcript.includes('business plan')) {
      if (transcript.includes('अचार') || transcript.includes('pickle')) {
        onCommand('create_business_plan', { type: 'pickle' });
        toast({
          title: "🎯 Voice Command Executed",
          description: "Creating pickle business plan...",
        });
      } else if (transcript.includes('सिलाई') || transcript.includes('tailoring')) {
        onCommand('create_business_plan', { type: 'tailoring' });
        toast({
          title: "🎯 Voice Command Executed",
          description: "Creating tailoring business plan...",
        });
      } else {
        onCommand('open_business_plan');
        toast({
          title: "🎯 Voice Command Executed",
          description: "Opening business plan generator...",
        });
      }
    }
    
    // Calculator commands
    else if (transcript.includes('कैलकुलेटर') || transcript.includes('calculator') || transcript.includes('हिसाब')) {
      onCommand('open_calculator');
      toast({
        title: "🎯 Voice Command Executed",
        description: "Opening financial calculator...",
      });
    }
    
    // Government schemes commands
    else if (transcript.includes('सरकारी योजना') || transcript.includes('government scheme') || transcript.includes('लोन')) {
      onCommand('open_schemes');
      toast({
        title: "🎯 Voice Command Executed",
        description: "Opening government schemes...",
      });
    }
    
    // Chat commands
    else if (transcript.includes('चैट') || transcript.includes('chat') || transcript.includes('सवाल')) {
      onCommand('open_chat');
      toast({
        title: "🎯 Voice Command Executed",
        description: "Opening AI chat...",
      });
    }
    
    // Community commands
    else if (transcript.includes('कम्युनिटी') || transcript.includes('community') || transcript.includes('फोरम')) {
      onCommand('open_community');
      toast({
        title: "🎯 Voice Command Executed",
        description: "Opening community forum...",
      });
    }
    
    // Achievement commands
    else if (transcript.includes('अचीवमेंट') || transcript.includes('achievement') || transcript.includes('रिवॉर्ड')) {
      onCommand('open_achievements');
      toast({
        title: "🎯 Voice Command Executed",
        description: "Opening achievement system...",
      });
    }
    
    // Poster commands
    else if (transcript.includes('पोस्टर') || transcript.includes('poster') || transcript.includes('विज्ञापन')) {
      onCommand('open_poster');
      toast({
        title: "🎯 Voice Command Executed",
        description: "Opening poster generator...",
      });
    }
    
    // Help commands
    else if (transcript.includes('मदद') || transcript.includes('help')) {
      onCommand('show_help');
      toast({
        title: "🎯 Voice Command Executed",
        description: "Showing voice commands help...",
      });
    }

    // Marketplace commands
    else if (transcript.includes('मार्केटप्लेस') || transcript.includes('marketplace') || transcript.includes('खरीदारी')) {
      onCommand('open_marketplace');
      toast({
        title: "🎯 Voice Command Executed",
        description: "Opening SHG marketplace...",
      });
    }
    
    // Marketing commands
    else if (transcript.includes('मार्केटिंग') || transcript.includes('marketing') || transcript.includes('व्हाट्सएप')) {
      onCommand('open_marketing');
      toast({
        title: "🎯 Voice Command Executed",
        description: "Opening WhatsApp marketing generator...",
      });
    }
    
    else {
      toast({
        title: "❓ Command Not Recognized", 
        description: `Heard: "${transcript}". Try: "बिजनेस प्लान बनाओ", "मार्केटप्लेस खोलो", "मार्केटिंग मैसेज बनाओ"`,
        variant: "destructive"
      });
    }
  };

  const startListening = () => {
    if (recognition && !isListening) {
      setIsListening(true);
      recognition.start();
      toast({
        title: "🎤 Voice Commands Active",
        description: "Say: 'बिजनेस प्लान बनाओ', 'कैलकुलेटर खोलो', 'पोस्टर बनाओ', 'कम्युनिटी खोलो', 'अचीवमेंट देखो'",
      });
    }
  };

  const stopListening = () => {
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }
  };

  if (!recognition) {
    return null;
  }

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <div className="flex flex-col items-end space-y-2">
        {isListening && (
          <Badge className="bg-red-100 text-red-700 animate-pulse">
            🎤 Listening...
          </Badge>
        )}
        
        <Button
          onClick={isListening ? stopListening : startListening}
          className={`rounded-full w-14 h-14 shadow-lg ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
          }`}
        >
          {isListening ? (
            <MicOff className="w-6 h-6 text-white" />
          ) : (
            <div className="relative">
              <Mic className="w-6 h-6 text-white" />
              <Zap className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1" />
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default VoiceCommands;
