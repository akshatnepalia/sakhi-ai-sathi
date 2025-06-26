import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Key, Smartphone, Bell, Globe, Sparkles, Shield, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { aiService } from '@/utils/aiService';

const Settings = () => {
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('hi');
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isTestingApiKey, setIsTestingApiKey] = useState(false);
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
    }
  }, []);

  const saveSettings = () => {
    const settings = {
      notifications,
      language,
      voiceEnabled
    };
    localStorage.setItem('sakhi_settings', JSON.stringify(settings));
    
    if (apiKey.trim()) {
      aiService.setApiKey(apiKey.trim());
      localStorage.setItem('openai_api_key', apiKey.trim());
    }

    toast({
      title: "✅ Settings Saved",
      description: "Your preferences have been saved successfully.",
      variant: "default"
    });
  };

  const testApiKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "❌ No API Key",
        description: "Please enter your OpenAI API key first.",
        variant: "destructive"
      });
      return;
    }

    setIsTestingApiKey(true);
    try {
      const response = await fetch('https://api.openai.com/v1/models', {
        headers: {
          'Authorization': `Bearer ${apiKey.trim()}`
        }
      });
      
      if (response.ok) {
        aiService.setApiKey(apiKey.trim());
        localStorage.setItem('openai_api_key', apiKey.trim());
        toast({
          title: "✅ API Key Valid!",
          description: "Successfully connected to OpenAI. Enhanced features are now active!",
          variant: "default"
        });
      } else {
        toast({
          title: "❌ Invalid API Key",
          description: "Please check your API key and try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('API test error:', error);
      toast({
        title: "🌐 Connection Error",
        description: "Could not verify API key. Check your internet connection.",
        variant: "destructive"
      });
    } finally {
      setIsTestingApiKey(false);
    }
  };

  const clearApiKey = () => {
    setApiKey('');
    localStorage.removeItem('openai_api_key');
    toast({
      title: "🗑️ API Key Removed",
      description: "Enhanced features will use database mode now.",
      variant: "default"
    });
  };

  return (
    <div className="p-4 space-y-6 bg-gradient-to-b from-orange-50 to-yellow-50 min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          ⚙️ सेटिंग्स - Settings
        </h1>
        <p className="text-gray-600">Configure your SakhiCopilot experience</p>
      </div>

      <div className="space-y-6">
        {/* API Configuration */}
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span>🤖 Enhanced Features Configuration</span>
              {aiService.hasApiKey() ? (
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Active
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Database Mode
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-2">📋 How to get your API Key:</h4>
              <ol className="text-sm text-orange-700 space-y-1 list-decimal list-inside">
                <li>Visit <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">OpenAI Platform</a></li>
                <li>Sign up or login to your account</li>
                <li>Click "Create new secret key"</li>
                <li>Copy the key and paste it below</li>
                <li>Save settings to activate enhanced features</li>
              </ol>
            </div>

            <div>
              <Label htmlFor="apiKey" className="text-base font-medium">🔑 OpenAI API Key</Label>
              <div className="flex space-x-2 mt-2">
                <div className="relative flex-1">
                  <Input
                    id="apiKey"
                    type={showApiKey ? "text" : "password"}
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-proj-..."
                    className="border-orange-200 focus:border-orange-400 pr-10 font-mono text-sm"
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
            </div>

            <div className="flex space-x-2">
              <Button
                onClick={testApiKey}
                disabled={isTestingApiKey}
                variant="outline"
                className="flex-1 border-orange-200 hover:bg-orange-50"
              >
                <Key className="w-4 h-4 mr-2" />
                {isTestingApiKey ? 'Testing...' : 'Test & Save Key'}
              </Button>
              <Button
                onClick={clearApiKey}
                variant="outline"
                className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
              >
                Clear Key
              </Button>
            </div>

            <div className={`p-3 rounded-lg border ${aiService.hasApiKey() ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'}`}>
              <h4 className={`font-medium mb-2 ${aiService.hasApiKey() ? 'text-green-800' : 'text-yellow-800'}`}>
                🤖 System Status
              </h4>
              {aiService.hasApiKey() ? (
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-700 font-medium">Enhanced responses enabled ✨</span>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-yellow-700">Using comprehensive database mode</span>
                  </div>
                  <p className="text-xs text-yellow-600">Add your OpenAI API key above to unlock enhanced capabilities</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Voice & Language Settings */}
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Smartphone className="w-5 h-5 text-orange-500" />
              <span>🗣️ Voice & Language Settings</span>
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
                className="border border-orange-200 rounded-md px-3 py-2 focus:border-orange-400 focus:outline-none bg-white"
              >
                <option value="hi">🇮🇳 हिंदी - Hindi</option>
                <option value="en">🇬🇧 English</option>
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

            <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
              <h4 className="font-medium text-orange-800 mb-2">🎤 Voice Recognition Support</h4>
              <div className="space-y-1 text-sm text-orange-700">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Hindi (हिंदी) - hi-IN</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>English - en-US</span>
                </div>
                <p className="text-xs text-orange-600 mt-2">
                  Microphone access required for voice input
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Data */}
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-orange-500" />
              <span>🔒 Privacy & Data</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">🛡️ Your Data is Safe</h4>
              <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                <li>API keys stored locally on your device only</li>
                <li>No personal data sent to external servers without your consent</li>
                <li>Chat history stays on your device</li>
                <li>Voice data processed locally when possible</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-center pb-8">
        <Button
          onClick={saveSettings}
          className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 px-8 py-3 text-white font-semibold text-lg"
          size="lg"
        >
          💾 Save All Settings
        </Button>
      </div>
    </div>
  );
};

export default Settings;
