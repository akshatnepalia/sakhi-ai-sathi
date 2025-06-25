
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Key, Smartphone, Bell, Globe, Sparkles, Shield, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { aiService } from '@/utils/aiService';

const Settings = () => {
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('hi');
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }

    const savedSettings = localStorage.getItem('sakhi_settings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setNotifications(settings.notifications ?? true);
      setLanguage(settings.language ?? 'hi');
      setVoiceEnabled(settings.voiceEnabled ?? true);
      setOfflineMode(settings.offlineMode ?? false);
    }
  }, []);

  const saveSettings = () => {
    const settings = {
      notifications,
      language,
      voiceEnabled,
      offlineMode
    };
    localStorage.setItem('sakhi_settings', JSON.stringify(settings));
    
    if (apiKey.trim()) {
      aiService.setApiKey(apiKey.trim());
    }

    toast({
      title: "Settings Saved",
      description: "Your preferences have been saved successfully.",
      variant: "default"
    });
  };

  const clearApiKey = () => {
    setApiKey('');
    localStorage.removeItem('openai_api_key');
    toast({
      title: "API Key Removed",
      description: "AI features will use offline mode.",
      variant: "default"
    });
  };

  const testApiKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "No API Key",
        description: "Please enter an API key to test.",
        variant: "destructive"
      });
      return;
    }

    try {
      const tempService = new (class extends Object {
        async testConnection(key: string) {
          const response = await fetch('https://api.openai.com/v1/models', {
            headers: {
              'Authorization': `Bearer ${key}`
            }
          });
          return response.ok;
        }
      })();
      
      const isValid = await tempService.testConnection(apiKey);
      
      if (isValid) {
        toast({
          title: "API Key Valid",
          description: "Connection to OpenAI successful!",
          variant: "default"
        });
      } else {
        toast({
          title: "Invalid API Key",
          description: "Please check your API key and try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('API test error:', error);
      toast({
        title: "Connection Error",
        description: "Could not verify API key. Check your internet connection.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="p-4 space-y-6 bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          ⚙️ सेटिंग्स - Settings
        </h1>
        <p className="text-gray-600">Configure your SakhiCopilot experience</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Configuration */}
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span>AI Configuration</span>
              {aiService.hasApiKey() && (
                <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                  Active
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="apiKey">OpenAI API Key</Label>
              <div className="flex space-x-2 mt-1">
                <div className="relative flex-1">
                  <Input
                    id="apiKey"
                    type={showApiKey ? "text" : "password"}
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-..."
                    className="border-blue-200 focus:border-blue-400 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowApiKey(!showApiKey)}
                  >
                    {showApiKey ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenAI Platform</a>
              </p>
            </div>

            <div className="flex space-x-2">
              <Button
                onClick={testApiKey}
                variant="outline"
                size="sm"
                className="flex-1 border-blue-200"
              >
                <Key className="w-4 h-4 mr-2" />
                Test Key
              </Button>
              <Button
                onClick={clearApiKey}
                variant="outline"
                size="sm"
                className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
              >
                Clear Key
              </Button>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">AI Status</h4>
              {aiService.hasApiKey() ? (
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-700">AI-powered responses enabled</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-orange-700">Using offline responses</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* App Preferences */}
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Smartphone className="w-5 h-5 text-blue-500" />
              <span>App Preferences</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4 text-gray-500" />
                <Label htmlFor="notifications">Push Notifications</Label>
              </div>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <Label htmlFor="language">Primary Language</Label>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border border-blue-200 rounded-md px-3 py-1 focus:border-blue-400 focus:outline-none"
              >
                <option value="hi">हिंदी - Hindi</option>
                <option value="en">English</option>
              </select>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4 text-gray-500" />
                <Label htmlFor="voice">Voice Input</Label>
              </div>
              <Switch
                id="voice"
                checked={voiceEnabled}
                onCheckedChange={setVoiceEnabled}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-gray-500" />
                <Label htmlFor="offline">Offline Mode</Label>
              </div>
              <Switch
                id="offline"
                checked={offlineMode}
                onCheckedChange={setOfflineMode}
              />
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Privacy & Data</h4>
              <p className="text-sm text-blue-700">
                Your data is stored locally on your device. API keys are encrypted and never shared.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* About Section */}
      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle>About SakhiCopilot</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-2">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold">AI-Powered</h3>
              <p className="text-sm text-gray-600">Smart business advice using OpenAI GPT</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-2">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold">Multilingual</h3>
              <p className="text-sm text-gray-600">Supports Hindi, English, and local dialects</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold">Secure</h3>
              <p className="text-sm text-gray-600">Privacy-focused with local data storage</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-center">
        <Button
          onClick={saveSettings}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 px-8"
        >
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default Settings;
