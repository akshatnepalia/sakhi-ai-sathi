
import React, { useState } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { MicrosoftButton } from './ui/microsoft-button';

interface NavigationProps {
  currentLanguage: 'hi' | 'en';
  onLanguageChange: (lang: 'hi' | 'en') => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const Navigation = ({ currentLanguage, onLanguageChange, isDarkMode, onThemeToggle }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = {
    en: [
      { label: 'Home', href: '#home' },
      { label: 'Use Cases', href: '#use-cases' },
      { label: 'Demo', href: '#demo' },
      { label: 'Poster Tool', href: '#poster' },
      { label: 'About', href: '#about' }
    ],
    hi: [
      { label: 'मुख्य पृष्ठ', href: '#home' },
      { label: 'उपयोग', href: '#use-cases' },
      { label: 'डेमो', href: '#demo' },
      { label: 'पोस्टर टूल', href: '#poster' },
      { label: 'हमारे बारे में', href: '#about' }
    ]
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              SakhiCopilot
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[currentLanguage].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <MicrosoftButton
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(currentLanguage === 'en' ? 'hi' : 'en')}
              className="hidden sm:flex"
            >
              <Globe className="w-4 h-4 mr-2" />
              {currentLanguage === 'en' ? 'हिंदी' : 'EN'}
            </MicrosoftButton>

            {/* Theme Toggle */}
            <MicrosoftButton
              variant="ghost"
              size="sm"
              onClick={onThemeToggle}
              className="hidden sm:flex"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </MicrosoftButton>

            {/* Mobile Menu Button */}
            <MicrosoftButton
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </MicrosoftButton>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-3">
              {navItems[currentLanguage].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200 dark:border-gray-800">
                <MicrosoftButton
                  variant="ghost"
                  size="sm"
                  onClick={() => onLanguageChange(currentLanguage === 'en' ? 'hi' : 'en')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {currentLanguage === 'en' ? 'हिंदी' : 'EN'}
                </MicrosoftButton>
                <MicrosoftButton
                  variant="ghost"
                  size="sm"
                  onClick={onThemeToggle}
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </MicrosoftButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
