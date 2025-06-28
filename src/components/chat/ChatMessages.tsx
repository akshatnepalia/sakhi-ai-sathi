
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

const getWelcomeMessage = (langCode: string) => {
  const messages = {
    'hi': 'नमस्ते! मैं सखी हूँ 🙏',
    'en': 'Hello! I am Sakhi 👋',
    'bn': 'নমস্কার! আমি সখী 🙏',
    'te': 'నమస్కారం! నేను సఖి 👋',
    'mr': 'नमस्कार! मी सखी आहे 🙏',
    'ta': 'வணக்கம்! நான் சகி 🙏',
    'gu': 'નમસ્તે! હું સખી છું 🙏',
    'kn': 'ನಮಸ್ಕಾರ! ನಾನು ಸಖಿ 👋',
    'ml': 'നമസ്കാരം! ഞാൻ സഖി ആണ് 🙏',
    'pa': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਸਖੀ ਹਾਂ 🙏',
    'or': 'ନମସ୍କାର! ମୁଁ ସଖୀ 🙏',
    'as': 'নমস্কাৰ! মই সখী 🙏'
  };
  return messages[langCode as keyof typeof messages] || messages['en'];
};

const getSubtitle = (langCode: string) => {
  const subtitles = {
    'hi': 'व्यापार के बारे में कोई भी सवाल पूछें - अब ज्यादा जानकारी के साथ!',
    'en': 'Ask me any business question - now with enhanced database!',
    'bn': 'যেকোনো ব্যবসায়িক প্রশ্ন জিজ্ঞাসা করুন - এখন উন্নত ডেটাবেস সহ!',
    'te': 'ఏదైనా వ్యాపార ప్రశ్న అడగండి - ఇప్పుడు మెరుగైన డేటాబేస్‌తో!',
    'mr': 'कोणताही व्यावसायिक प्रश्न विचारा - आता सुधारित डेटाबेससह!',
    'ta': 'எந்த வணிக கேள்வியையும் கேளுங்கள் - இப்போது மேம்பட்ட தரவுத்தளத்துடன்!',
    'gu': 'કોઈપણ વ્યાવસાયિક પ્રશ્ન પૂછો - હવે ઉન્નત ડેટાબેસ સાથે!',
    'kn': 'ಯಾವುದೇ ವ್ಯಾಪಾರ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ - ಈಗ ವರ್ಧಿತ ಡೇಟಾಬೇಸ್‌ನೊಂದಿಗೆ!',
    'ml': 'ഏതെങ്കിലും ബിസിനസ് ചോദ്യം ചോദിക്കുക - ഇപ്പോൾ മെച്ചപ്പെട്ട ഡാറ്റാബേസിനൊപ്പം!',
    'pa': 'ਕੋਈ ਵੀ ਕਾਰੋਬਾਰੀ ਸਵਾਲ ਪੁੱਛੋ - ਹੁਣ ਬੇਹਤਰ ਡੇਟਾਬੇਸ ਨਾਲ!',
    'or': 'କୌଣସି ବ୍ୟବସାୟ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ - ବର୍ତ୍ତମାନ ଉନ୍ନତ ଡାଟାବେସ୍ ସହିତ!',
    'as': 'যিকোনো ব্যৱসায়িক প্ৰশ্ন সোধক - এতিয়া উন্নত ডাটাবেইছৰ সৈতে!'
  };
  return subtitles[langCode as keyof typeof subtitles] || subtitles['en'];
};

const getQuickSuggestions = (langCode: string) => {
  const suggestions = {
    'hi': ['व्यापार कैसे शुरू करें?', 'लोन कैसे मिलेगा?', 'मार्केटिंग टिप्स', 'सरकारी योजनाएं'],
    'en': ['How to start business?', 'Get business loan?', 'Marketing tips', 'Government schemes'],
    'bn': ['ব্যবসা কিভাবে শুরু করবো?', 'ঋণ কিভাবে পাবো?', 'মার্কেটিং টিপস', 'সরকারি স্কিম'],
    'te': ['వ్యాపారం ఎలా ప్రారంభించాలి?', 'లోన్ ఎలా పొందాలి?', 'మార్కెటింగ్ టిప్స్', 'ప్రభుత్వ పథకాలు'],
    'mr': ['व्यवसाय कसा सुरू करावा?', 'कर्ज कसे मिळेल?', 'मार्केटिंग टिप्स', 'सरकारी योजना'],
    'ta': ['வணிகம் எப்படி தொடங்குவது?', 'கடன் எப்படி பெறுவது?', 'மார்க்கெட்டிங் குறிப்புகள்', 'அரசு திட்டங்கள்'],
    'gu': ['ધંધો કેવી રીતે શરૂ કરવો?', 'લોન કેવી રીતે મેળવવી?', 'માર્કેટિંગ ટિપ્સ', 'સરકારી યોજનાઓ'],
    'kn': ['ವ್ಯಾಪಾರ ಹೇಗೆ ಪ್ರಾರಂಭಿಸುವುದು?', 'ಸಾಲ ಹೇಗೆ ಪಡೆಯುವುದು?', 'ಮಾರ್ಕೆಟಿಂಗ್ ಸಲಹೆಗಳು', 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು'],
    'ml': ['ബിസിനസ്സ് എങ്ങനെ തുടങ്ങാം?', 'ലോൺ എങ്ങനെ കിട്ടും?', 'മാർക്കറ്റിംഗ് ടിപ്പുകൾ', 'സർക്കാർ പദ്ധതികൾ'],
    'pa': ['ਕਾਰੋਬਾਰ ਕਿਵੇਂ ਸ਼ੁਰੂ ਕਰੀਏ?', 'ਲੋਨ ਕਿਵੇਂ ਮਿਲੇਗਾ?', 'ਮਾਰਕੀਟਿੰਗ ਟਿਪਸ', 'ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ'],
    'or': ['ବ୍ୟବସାୟ କିପରି ଆରମ୍ଭ କରିବେ?', 'ଲୋନ୍ କିପରି ପାଇବେ?', 'ମାର୍କେଟିଂ ଟିପ୍ସ', 'ସରକାରୀ ଯୋଜନା'],
    'as': ['ব্যৱসায় কেনেকৈ আৰম্ভ কৰিব?', 'ঋণ কেনেকৈ পাম?', 'মাৰ্কেটিং টিপছ', 'চৰকাৰী আঁচনি']
  };
  return suggestions[langCode as keyof typeof suggestions] || suggestions['en'];
};

const getThinkingMessage = (langCode: string) => {
  const messages = {
    'hi': 'सखी सोच रही है...',
    'en': 'Sakhi is thinking...',
    'bn': 'সখী ভাবছে...',
    'te': 'సఖి ఆలోచిస్తోంది...',
    'mr': 'सखी विचार करत आहे...',
    'ta': 'சகி யோசிக்கிறாள்...',
    'gu': 'સખી વિચારી રહી છે...',
    'kn': 'ಸಖಿ ಯೋಚಿಸುತ್ತಿದ್ದಾಳೆ...',
    'ml': 'സഖി ചിന്തിക്കുന്നു...',
    'pa': 'ਸਖੀ ਸੋਚ ਰਹੀ ਹੈ...',
    'or': 'ସଖୀ ଚିନ୍ତା କରୁଛି...',
    'as': 'সখী ভাবিছে...'
  };
  return messages[langCode as keyof typeof messages] || messages['en'];
};

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
  currentLanguage: string;
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

  const quickSuggestions = getQuickSuggestions(currentLanguage);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 && (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            {getWelcomeMessage(currentLanguage)}
          </h2>
          <p className="text-gray-600 mb-4">
            {getSubtitle(currentLanguage)}
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
                  {getThinkingMessage(currentLanguage)}
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
