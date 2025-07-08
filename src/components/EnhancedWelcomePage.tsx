
import React from 'react';
import { 
  MessageCircle, 
  FileText, 
  Calculator, 
  Building2, 
  Users, 
  Trophy, 
  Palette, 
  BookOpen,
  Sparkles,
  Zap,
  Globe,
  TrendingUp,
  Shield,
  Heart
} from 'lucide-react';
import { MicrosoftCard, MicrosoftCardContent, MicrosoftCardDescription, MicrosoftCardHeader, MicrosoftCardTitle } from './ui/microsoft-card';
import { MicrosoftButton } from './ui/microsoft-button';

interface EnhancedWelcomePageProps {
  onStartChat: () => void;
  onOpenBusinessPlan: () => void;
  onOpenFinancialCalc: () => void;
  onOpenGovSchemes: () => void;
  onOpenCommunity: () => void;
  onOpenAchievements: () => void;
  onOpenPoster: () => void;
  onOpenEducation: () => void;
}

const EnhancedWelcomePage = ({
  onStartChat,
  onOpenBusinessPlan,
  onOpenFinancialCalc,
  onOpenGovSchemes,
  onOpenCommunity,
  onOpenAchievements,
  onOpenPoster,
  onOpenEducation
}: EnhancedWelcomePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
              SakhiCopilot
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            आपकी व्यापारिक सफलता का साथी | Your Business Success Partner
          </p>
          
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Empowering rural women entrepreneurs with AI-powered business intelligence, financial planning, and comprehensive support ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <MicrosoftButton 
              onClick={onStartChat}
              variant="microsoft"
              size="xl"
              className="group"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Start Smart Chat
              <Sparkles className="w-5 h-5 opacity-70" />
            </MicrosoftButton>
            
            <MicrosoftButton 
              onClick={onOpenBusinessPlan}
              variant="outline"
              size="xl"
            >
              <FileText className="w-6 h-6" />
              Create Business Plan
            </MicrosoftButton>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Shield, label: "100% Secure", value: "Privacy First" },
            { icon: Globe, label: "12+ Languages", value: "Multi-lingual" },
            { icon: TrendingUp, label: "Smart Analytics", value: "AI Powered" },
            { icon: Heart, label: "Women Focused", value: "Empowerment" }
          ].map((stat, index) => (
            <MicrosoftCard key={index} className="text-center p-6 hover:scale-105 transition-all duration-300">
              <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <p className="text-white/90 font-semibold text-lg">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </MicrosoftCard>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: MessageCircle,
              title: "AI Business Assistant",
              description: "Get instant answers to your business questions in Hindi and English with our smart AI companion.",
              action: onStartChat,
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: FileText,
              title: "Business Plan Generator",
              description: "Create comprehensive business plans tailored for Indian markets and government schemes.",
              action: onOpenBusinessPlan,
              gradient: "from-green-500 to-emerald-500"
            },
            {
              icon: Calculator,
              title: "Financial Calculator Suite",
              description: "Calculate loans, investments, GST, and business metrics with precision and ease.",
              action: onOpenFinancialCalc,
              gradient: "from-purple-500 to-pink-500"
            },
            {
              icon: Building2,
              title: "Government Schemes",
              description: "Discover and apply for government schemes designed for women entrepreneurs.",
              action: onOpenGovSchemes,
              gradient: "from-orange-500 to-red-500"
            },
            {
              icon: Users,
              title: "Community Forum",
              description: "Connect with fellow women entrepreneurs, share experiences and grow together.",
              action: onOpenCommunity,
              gradient: "from-indigo-500 to-purple-500"
            },
            {
              icon: BookOpen,
              title: "Education Resources",
              description: "Access comprehensive learning materials, tutorials, and skill development content.",
              action: onOpenEducation,
              gradient: "from-teal-500 to-green-500"
            }
          ].map((feature, index) => (
            <MicrosoftCard 
              key={index} 
              className="group cursor-pointer"
              onClick={feature.action}
            >
              <MicrosoftCardHeader>
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <MicrosoftCardTitle className="group-hover:text-white transition-colors">
                  {feature.title}
                </MicrosoftCardTitle>
                <MicrosoftCardDescription className="group-hover:text-white/80 transition-colors">
                  {feature.description}
                </MicrosoftCardDescription>
              </MicrosoftCardHeader>
            </MicrosoftCard>
          ))}

          {/* Additional Features */}
          <MicrosoftCard 
            className="group cursor-pointer"
            onClick={onOpenAchievements}
          >
            <MicrosoftCardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <MicrosoftCardTitle className="group-hover:text-white transition-colors">
                Achievement System
              </MicrosoftCardTitle>
              <MicrosoftCardDescription className="group-hover:text-white/80 transition-colors">
                Track your entrepreneurial journey and unlock achievements as you grow your business.
              </MicrosoftCardDescription>
            </MicrosoftCardHeader>
          </MicrosoftCard>

          <MicrosoftCard 
            className="group cursor-pointer"
            onClick={onOpenPoster}
          >
            <MicrosoftCardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <MicrosoftCardTitle className="group-hover:text-white transition-colors">
                Marketing Poster Generator
              </MicrosoftCardTitle>
              <MicrosoftCardDescription className="group-hover:text-white/80 transition-colors">
                Create beautiful marketing materials and promotional content for your business.
              </MicrosoftCardDescription>
            </MicrosoftCardHeader>
          </MicrosoftCard>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-20">
          <MicrosoftCard className="max-w-4xl mx-auto p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-white/70 text-lg">
                  Join thousands of women entrepreneurs who are already building their success story with SakhiCopilot.
                </p>
              </div>
              <MicrosoftButton 
                onClick={onStartChat}
                variant="microsoft"
                size="xl"
                className="shrink-0"
              >
                <Sparkles className="w-6 h-6" />
                Get Started Now
              </MicrosoftButton>
            </div>
          </MicrosoftCard>
        </div>
      </div>
    </div>
  );
};

export default EnhancedWelcomePage;
