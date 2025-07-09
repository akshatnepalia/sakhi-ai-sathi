
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Settings, MessageCircle, Phone, Mail } from 'lucide-react';

interface GovernmentWelcomePageProps {
  onStartChat: () => void;
}

const GovernmentWelcomePage = ({ onStartChat }: GovernmentWelcomePageProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Government Header */}
      <div className="bg-blue-800 text-white px-4 py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <span>भारत सरकार | Government of India</span>
          <span>महिला एवं बाल विकास मंत्रालय</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-8 h-10 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-6 bg-blue-600 rounded-sm"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">SakhiCopilot</h1>
                <p className="text-gray-700 text-base">महिला उद्यमिता विकास मंच</p>
                <p className="text-gray-600 text-sm">Women Entrepreneurship Development Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="flex items-center space-x-2">
                      <Settings className="w-5 h-5" />
                      <span>Platform Settings</span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Language Preferences</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm" className="justify-start">
                            हिंदी
                          </Button>
                          <Button variant="outline" size="sm" className="justify-start">
                            English
                          </Button>
                          <Button variant="outline" size="sm" className="justify-start">
                            বাংলা
                          </Button>
                          <Button variant="outline" size="sm" className="justify-start">
                            தமிழ்
                          </Button>
                        </div>
                      </div>

                      <div className="border-b pb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Accessibility</h4>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">High Contrast Mode</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">Large Text</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">Voice Navigation</span>
                          </label>
                        </div>
                      </div>

                      <div className="border-b pb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Notifications</h4>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" defaultChecked className="rounded" />
                            <span className="text-sm">Government Scheme Updates</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" defaultChecked className="rounded" />
                            <span className="text-sm">Training Notifications</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">Community Messages</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
                        <div className="space-y-2">
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Phone className="w-4 h-4 mr-2" />
                            Contact Support: 1800-XXX-XXXX
                          </Button>
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Mail className="w-4 h-4 mr-2" />
                            Email: support@sakhicopilot.gov.in
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2 pt-4">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsDialogOpen(false)}>
                        Save Settings
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-700 text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-3">
            <a href="#" className="hover:text-blue-200 transition-colors font-medium">मुख्य पृष्ठ</a>
            <a href="#" className="hover:text-blue-200 transition-colors font-medium">सेवाएं</a>
            <a href="#" className="hover:text-blue-200 transition-colors font-medium">योजनाएं</a>
            <a href="#" className="hover:text-blue-200 transition-colors font-medium">संसाधन</a>
            <a href="#" className="hover:text-blue-200 transition-colors font-medium">संपर्क</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section 
        className="relative py-20 bg-cover bg-center min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.7), rgba(249, 115, 22, 0.7)), url('https://images.unsplash.com/photo-1577995851048-b91aa2a9b5b9?w=1200&h=600&fit=crop')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            महिला उद्यमियों का सशक्तिकरण
          </h2>
          <p className="text-2xl md:text-3xl mb-4 font-medium">Empowering Women Entrepreneurs</p>
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
            भारत सरकार की डिजिटल पहल - महिला उद्यमियों के लिए व्यापारिक मार्गदर्शन, 
            वित्तीय उपकरण और सामुदायिक सहायता प्रदान करने वाला एकीकृत मंच
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button
              onClick={onStartChat}
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 text-lg font-semibold shadow-lg rounded-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              AI सहायक शुरू करें
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-800 px-10 py-4 text-lg font-semibold rounded-lg"
            >
              व्यापारिक योजना बनाएं
            </Button>
          </div>
        </div>
        
        {/* Floating Voice Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700 shadow-2xl animate-pulse"
            onClick={onStartChat}
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GovernmentWelcomePage;
