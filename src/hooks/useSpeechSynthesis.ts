
import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const getLanguageConfig = (langCode: string) => {
  const configs = {
    'hi': { lang: 'hi-IN', name: 'Hindi' },
    'en': { lang: 'en-US', name: 'English' },
    'bn': { lang: 'bn-IN', name: 'Bengali' },
    'te': { lang: 'te-IN', name: 'Telugu' },
    'mr': { lang: 'mr-IN', name: 'Marathi' },
    'ta': { lang: 'ta-IN', name: 'Tamil' },
    'gu': { lang: 'gu-IN', name: 'Gujarati' },
    'kn': { lang: 'kn-IN', name: 'Kannada' },
    'ml': { lang: 'ml-IN', name: 'Malayalam' },
    'pa': { lang: 'pa-IN', name: 'Punjabi' },
    'or': { lang: 'or-IN', name: 'Odia' },
    'as': { lang: 'as-IN', name: 'Assamese' }
  };
  return configs[langCode as keyof typeof configs] || configs['en'];
};

export const useSpeechSynthesis = (currentLanguage: string) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const speak = (text: string) => {
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
      const langConfig = getLanguageConfig(currentLanguage);
      
      utterance.lang = langConfig.lang;
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.9;

      const voices = synthRef.current.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.lang.startsWith(currentLanguage === 'en' ? 'en' : currentLanguage)
      );
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        toast({
          title: "🔊 Speaking...",
          description: `Playing in ${langConfig.name}. Tap speaker to stop.`,
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

  const stop = () => {
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

  return { isSpeaking, speak, stop };
};
