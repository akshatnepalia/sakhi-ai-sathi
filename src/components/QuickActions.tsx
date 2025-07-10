import React from 'react';
import { Sparkles, MessageSquare, FilePlus, Calculator, Coins, Store, Send } from 'lucide-react';

interface QuickActionsProps {
  language: 'hi' | 'en';
  onStartChat: () => void;
  onOpenBusinessPlan: () => void;
  onOpenPoster: () => void;
  onOpenFinancialCalc: () => void;
  onOpenGovSchemes: () => void;
  onOpenMarketplace: () => void;
  onOpenMarketing: () => void;
}

const QuickActions = ({ 
  language, 
  onStartChat, 
  onOpenBusinessPlan, 
  onOpenPoster, 
  onOpenFinancialCalc, 
  onOpenGovSchemes,
  onOpenMarketplace,
  onOpenMarketing
}: QuickActionsProps) => {
  const content = {
    title: {
      hi: 'त्वरित क्रियाएँ',
      en: 'Quick Actions'
    },
    subtitle: {
      hi: 'अपने लक्ष्यों को तेज़ी से प्राप्त करें',
      en: 'Achieve your goals faster'
    },
    actions: {
      hi: [
        {
          icon: '✨',
          title: 'AI चैट शुरू करें',
          description: 'अपने सवालों के जवाब पाएं',
          action: onStartChat,
          color: 'from-blue-400 to-purple-500'
        },
        {
          icon: '📝',
          title: 'बिजनेस प्लान बनाएं',
          description: 'अपने व्यवसाय के लिए योजना बनाएं',
          action: onOpenBusinessPlan,
          color: 'from-green-400 to-blue-500'
        },
        {
          icon: '🖼️',
          title: 'पोस्टर बनाएं',
          description: 'अपने व्यवसाय के लिए विज्ञापन बनाएं',
          action: onOpenPoster,
          color: 'from-red-400 to-yellow-500'
        },
        {
          icon: '🧮',
          title: 'कैलकुलेटर का उपयोग करें',
          description: 'अपने वित्त का प्रबंधन करें',
          action: onOpenFinancialCalc,
          color: 'from-yellow-400 to-green-500'
        },
        {
          icon: '🏛️',
          title: 'सरकारी योजनाएं',
          description: 'सरकारी योजनाओं के बारे में जानें',
          action: onOpenGovSchemes,
          color: 'from-orange-400 to-red-500'
        },
        {
          icon: '🛍️',
          title: 'SHG मार्केटप्लेस',
          description: 'महिला उद्यमियों के उत्पादों की खरीदारी करें',
          action: onOpenMarketplace,
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: '📱',
          title: 'WhatsApp मार्केटिंग',
          description: 'AI की मदद से मार्केटिंग मैसेज बनाएं',
          action: onOpenMarketing,
          color: 'from-green-500 to-teal-500'
        }
      ],
      en: [
        {
          icon: '✨',
          title: 'Start AI Chat',
          description: 'Get answers to your questions',
          action: onStartChat,
          color: 'from-blue-400 to-purple-500'
        },
        {
          icon: '📝',
          title: 'Create Business Plan',
          description: 'Plan for your business',
          action: onOpenBusinessPlan,
          color: 'from-green-400 to-blue-500'
        },
        {
          icon: '🖼️',
          title: 'Create Poster',
          description: 'Create ads for your business',
          action: onOpenPoster,
          color: 'from-red-400 to-yellow-500'
        },
        {
          icon: '🧮',
          title: 'Use Calculator',
          description: 'Manage your finances',
          action: onOpenFinancialCalc,
          color: 'from-yellow-400 to-green-500'
        },
        {
          icon: '🏛️',
          title: 'Government Schemes',
          description: 'Learn about government schemes',
          action: onOpenGovSchemes,
          color: 'from-orange-400 to-red-500'
        },
        {
          icon: '🛍️',
          title: 'SHG Marketplace',
          description: 'Shop products from women entrepreneurs',
          action: onOpenMarketplace,
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: '📱',
          title: 'WhatsApp Marketing',
          description: 'Generate AI-powered marketing messages',
          action: onOpenMarketing,
          color: 'from-green-500 to-teal-500'
        }
      ]
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4">
          {content.title[language]}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
          {content.subtitle[language]}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {content.actions[language].map((action, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <button
                onClick={action.action}
                className="flex flex-col items-center justify-center p-6 w-full h-full"
              >
                <div className={`text-5xl mb-2 bg-clip-text text-transparent bg-gradient-to-r ${action.color}`}>
                  {action.icon === '✨' && <Sparkles />}
                  {action.icon === '📝' && <FilePlus />}
                  {action.icon === '🖼️' && <Sparkles />}
                  {action.icon === '🧮' && <Calculator />}
                  {action.icon === '🏛️' && <Coins />}
                  {action.icon === '🛍️' && <Store />}
                  {action.icon === '📱' && <Send />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {action.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {action.description}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
