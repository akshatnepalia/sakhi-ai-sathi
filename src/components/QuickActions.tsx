
import React from 'react';
import { Users, FileText, Palette, MessageCircle, Calculator, Building2 } from 'lucide-react';
import { MicrosoftCard, MicrosoftCardContent } from './ui/microsoft-card';

interface QuickActionsProps {
  language: 'hi' | 'en';
  onStartChat: () => void;
  onOpenBusinessPlan: () => void;
  onOpenPoster: () => void;
  onOpenFinancialCalc: () => void;
  onOpenGovSchemes: () => void;
}

const QuickActions = ({ 
  language, 
  onStartChat, 
  onOpenBusinessPlan, 
  onOpenPoster, 
  onOpenFinancialCalc,
  onOpenGovSchemes
}: QuickActionsProps) => {
  const content = {
    en: {
      title: "Quick Actions",
      subtitle: "Get started with common tasks",
      actions: [
        { 
          icon: Users, 
          title: "Start SHG", 
          description: "Begin your Self Help Group journey",
          action: onStartChat,
          color: "from-blue-500 to-cyan-500"
        },
        { 
          icon: FileText, 
          title: "Create Business Plan", 
          description: "Generate professional business plan",
          action: onOpenBusinessPlan,
          color: "from-green-500 to-emerald-500"
        },
        { 
          icon: Palette, 
          title: "Make Poster", 
          description: "Design marketing materials",
          action: onOpenPoster,
          color: "from-pink-500 to-rose-500"
        },
        { 
          icon: Calculator, 
          title: "Financial Calculator", 
          description: "Calculate loans and investments",
          action: onOpenFinancialCalc,
          color: "from-purple-500 to-violet-500"
        },
        { 
          icon: Building2, 
          title: "Government Schemes", 
          description: "Find relevant funding options",
          action: onOpenGovSchemes,
          color: "from-orange-500 to-amber-500"
        },
        { 
          icon: MessageCircle, 
          title: "Ask AI", 
          description: "Get instant business guidance",
          action: onStartChat,
          color: "from-indigo-500 to-blue-500"
        }
      ]
    },
    hi: {
      title: "त्वरित कार्य",
      subtitle: "सामान्य कार्यों के साथ शुरुआत करें",
      actions: [
        { 
          icon: Users, 
          title: "SHG शुरू करें", 
          description: "अपनी स्वयं सहायता समूह यात्रा शुरू करें",
          action: onStartChat,
          color: "from-blue-500 to-cyan-500"
        },
        { 
          icon: FileText, 
          title: "व्यापारिक योजना बनाएं", 
          description: "पेशेवर व्यापारिक योजना तैयार करें",
          action: onOpenBusinessPlan,
          color: "from-green-500 to-emerald-500"
        },
        { 
          icon: Palette, 
          title: "पोस्टर बनाएं", 
          description: "मार्केटिंग सामग्री डिज़ाइन करें",
          action: onOpenPoster,
          color: "from-pink-500 to-rose-500"
        },
        { 
          icon: Calculator, 
          title: "वित्तीय कैलकुलेटर", 
          description: "ऋण और निवेश की गणना करें",
          action: onOpenFinancialCalc,
          color: "from-purple-500 to-violet-500"
        },
        { 
          icon: Building2, 
          title: "सरकारी योजनाएं", 
          description: "प्रासंगिक फंडिंग विकल्प खोजें",
          action: onOpenGovSchemes,
          color: "from-orange-500 to-amber-500"
        },
        { 
          icon: MessageCircle, 
          title: "AI से पूछें", 
          description: "तत्काल व्यापारिक मार्गदर्शन प्राप्त करें",
          action: onStartChat,
          color: "from-indigo-500 to-blue-500"
        }
      ]
    }
  };

  return (
    <section id="use-cases" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[language].actions.map((action, index) => (
            <MicrosoftCard 
              key={index}
              className="cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              onClick={action.action}
            >
              <MicrosoftCardContent className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {action.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {action.description}
                </p>
              </MicrosoftCardContent>
            </MicrosoftCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
