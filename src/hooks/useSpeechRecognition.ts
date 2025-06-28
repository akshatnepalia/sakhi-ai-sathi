
import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useSpeechRecognition = (currentLanguage: 'hi' | 'en') => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();

  const startListening = (onResult: (transcript: string) => void) => {
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
          onResult(transcript);
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

  return { isListening, startListening };
};
