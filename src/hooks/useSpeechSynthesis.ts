
import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useSpeechSynthesis = (currentLanguage: 'hi' | 'en') => {
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
