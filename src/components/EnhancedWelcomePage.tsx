
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
  Heart,
  Star,
  Rocket
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/15 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-purple-500/5 via-blue-500/5 to-pink-500/5 rounded-full animate-spin animation-duration-[60s]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative w-28 h-28 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                <Sparkles className="w-14 h-14 text-white animate-pulse" />
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <Star className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
              SakhiCopilot
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 blur-2xl -z-10"></div>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
            <span className="text-orange-300">आपकी व्यापारिक सफलता का साथी</span> | Your Business Success Partner
          </p>
          
          <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering rural women entrepreneurs with AI-powered business intelligence, financial planning, and comprehensive support ecosystem designed for the modern digital age.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <MicrosoftButton 
              onClick={onStartChat}
              variant="microsoft"
              size="xl"
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">Start Smart Chat</span>
              <Sparkles className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity relative z-10" />
            </MicrosoftButton>
            
            <MicrosoftButton 
              onClick={onOpenBusinessPlan}
              variant="outline"
              size="xl"
              className="group border-2 border-purple-400/50 hover:border-purple-400 bg-black/20 backdrop-blur-sm"
            >
              <FileText className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Create Business Plan
              <Rocket className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </MicrosoftButton>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Shield, label: "100% Secure", value: "Privacy First", gradient: "from-green-500 to-emerald-600" },
            { icon: Globe, label: "12+ Languages", value: "Multi-lingual", gradient: "from-blue-500 to-cyan-600" },
            { icon: TrendingUp, label: "Smart Analytics", value: "AI Powered", gradient: "from-purple-500 to-pink-600" },
            { icon: Heart, label: "Women Focused", value: "Empowerment", gradient: "from-red-500 to-rose-600" }
          ].map((stat, index) => (
            <MicrosoftCard key={index} className="text-center p-8 group hover:scale-105 transition-all duration-300 bg-black/30 backdrop-blur-xl border-white/10">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/95 font-bold text-xl mb-2">{stat.value}</p>
              <p className="text-white/60 text-sm font-medium">{stat.label}</p>
            </MicrosoftCard>
          ))}
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: MessageCircle,
              title: "AI Business Assistant",
              description: "Get instant answers to your business questions in Hindi and English with our advanced AI companion powered by cutting-edge technology.",
              action: onStartChat,
              gradient: "from-blue-600 to-cyan-600",
              accentColor: "blue"
            },
            {
              icon: FileText,
              title: "Business Plan Generator",
              description: "Create comprehensive, professional business plans tailored for Indian markets and government schemes with AI assistance.",
              action: onOpenBusinessPlan,
              gradient: "from-green-600 to-emerald-600",
              accentColor: "green"
            },
            {
              icon: Calculator,
              title: "Financial Calculator Suite",
              description: "Calculate loans, investments, GST, ROI, and business metrics with precision, accuracy, and real-time market data.",
              action: onOpenFinancialCalc,
              gradient: "from-purple-600 to-pink-600",
              accentColor: "purple"
            },
            {
              icon: Building2,
              title: "Government Schemes",
              description: "Discover, explore, and apply for government schemes designed specifically for women entrepreneurs across India.",
              action: onOpenGovSchemes,
              gradient: "from-orange-600 to-red-600",
              accentColor: "orange"
            },
            {
              icon: Users,
              title: "Community Forum",
              description: "Connect with fellow women entrepreneurs, share experiences, collaborate, and grow together in our supportive community.",
              action: onOpenCommunity,
              gradient: "from-indigo-600 to-purple-600",
              accentColor: "indigo"
            },
            {
              icon: BookOpen,
              title: "Education Resources",
              description: "Access comprehensive learning materials, interactive tutorials, and skill development content curated by experts.",
              action: onOpenEducation,
              gradient: "from-teal-600 to-green-600",
              accentColor: "teal"
            }
          ].map((feature, index) => (
            <MicrosoftCard 
              key={index} 
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 bg-black/40 backdrop-blur-xl border-white/10 hover:border-white/20 hover:bg-black/50"
              onClick={feature.action}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <MicrosoftCardHeader className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl relative`}>
                  <feature.icon className="w-8 h-8 text-white" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <MicrosoftCardTitle className="group-hover:text-white transition-colors text-xl font-bold mb-3">
                  {feature.title}
                </MicrosoftCardTitle>
                <MicrosoftCardDescription className="group-hover:text-white/90 transition-colors text-base leading-relaxed">
                  {feature.description}
                </MicrosoftCardDescription>
              </MicrosoftCardHeader>
            </MicrosoftCard>
          ))}

          {/* Additional Enhanced Features */}
          <MicrosoftCard 
            className="group cursor-pointer transform hover:scale-105 transition-all duration-300 bg-black/40 backdrop-blur-xl border-white/10 hover:border-white/20 hover:bg-black/50"
            onClick={onOpenAchievements}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <MicrosoftCardHeader className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl relative">
                <Trophy className="w-8 h-8 text-white" />
                <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <MicrosoftCardTitle className="group-hover:text-white transition-colors text-xl font-bold mb-3">
                Achievement System
              </MicrosoftCardTitle>
              <MicrosoftCardDescription className="group-hover:text-white/90 transition-colors text-base leading-relaxed">
                Track your entrepreneurial journey, unlock achievements, and celebrate milestones as you build and grow your business empire.
              </MicrosoftCardDescription>
            </MicrosoftCardHeader>
          </MicrosoftCard>

          <MicrosoftCard 
            className="group cursor-pointer transform hover:scale-105 transition-all duration-300 bg-black/40 backdrop-blur-xl border-white/10 hover:border-white/20 hover:bg-black/50"
            onClick={onOpenPoster}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <MicrosoftCardHeader className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl relative">
                <Palette className="w-8 h-8 text-white" />
                <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <MicrosoftCardTitle className="group-hover:text-white transition-colors text-xl font-bold mb-3">
                Marketing Poster Generator
              </MicrosoftCardTitle>
              <MicrosoftCardDescription className="group-hover:text-white/90 transition-colors text-base leading-relaxed">
                Create stunning marketing materials, promotional content, and brand assets for your business with AI-powered design tools.
              </MicrosoftCardDescription>
            </MicrosoftCardHeader>
          </MicrosoftCard>
        </div>

        {/* Enhanced Footer CTA */}
        <div className="text-center mt-24">
          <MicrosoftCard className="max-w-5xl mx-auto p-16 bg-black/50 backdrop-blur-xl border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-600/10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-white/80 text-xl leading-relaxed mb-4">
                  Join thousands of women entrepreneurs who are already building their success story with SakhiCopilot.
                </p>
                <p className="text-white/60 text-lg">
                  Start your journey today and unlock your business potential.
                </p>
              </div>
              <div className="shrink-0">
                <MicrosoftButton 
                  onClick={onStartChat}
                  variant="microsoft"
                  size="xl"
                  className="relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Sparkles className="w-6 h-6 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
                  <span className="relative z-10 text-lg font-semibold">Get Started Now</span>
                  <Rocket className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </MicrosoftButton>
              </div>
            </div>
          </MicrosoftCard>
        </div>
      </div>
    </div>
  );
};

export default EnhancedWelcomePage;
