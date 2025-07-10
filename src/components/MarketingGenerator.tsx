
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Copy, Share2, Mic, MicOff, MessageCircle, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis';

const MarketingGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const { toast } = useToast();
  const { startListening } = useSpeechRecognition('hi');
  const { speak, isSpeaking } = useSpeechSynthesis('hi');

  const templates = [
    { id: 'pickle', name: 'Pickle Business', prompt: 'homemade pickles selling' },
    { id: 'tailoring', name: 'Tailoring Services', prompt: 'stitching and tailoring services' },
    { id: 'food', name: 'Food Products', prompt: 'homemade food items selling' },
    { id: 'handicraft', name: 'Handicrafts', prompt: 'handmade crafts and decorative items' },
    { id: 'beauty', name: 'Beauty Products', prompt: 'homemade beauty and skincare products' },
    { id: 'general', name: 'General SHG', prompt: 'women self help group products' }
  ];

  const generateMessage = async (inputPrompt: string) => {
    setIsGenerating(true);
    
    // Simulate AI generation (replace with actual AI API call)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const messages = {
      'pickle': "🥒 नमस्ते! हम महिला स्वयं सहायता समूह हैं। हमारे घर के बने स्वादिष्ट अचार ₹99 में मिल रहे हैं। आज ही ऑर्डर करें! 📞 9876543210 #SelfMadeWithLove",
      'tailoring': "✂️ प्रोफेशनल सिलाई सेवा! डिज़ाइनर ब्लाउज से लेकर पार्टी ड्रेस तक। घर बैठे सर्विस। केवल ₹200 से शुरू। संपर्क करें: 9876543210 🧵 #WomenEmpowerment",
      'food': "🍛 स्वादिष्ट घर का खाना! ताज़ा बने लड्डू, नमकीन, और मिठाइयां। त्योहारी ऑर्डर बुक कर रहे हैं। फ्री होम डिलीवरी! 📞 9876543210 #HomeMade",
      'handicraft': "🎨 हस्तकला की अनूठी वस्तुएं! हाथ से बने गिफ्ट आइटम्स, दीवार की सजावट। शादी-विवाह के लिए खास डिस्काउंट। कॉल करें: 9876543210 ✨",
      'beauty': "🌸 प्राकृतिक ब्यूटी प्रोडक्ट्स! हर्बल फेस पैक, हेयर ऑयल, साबुन। केमिकल फ्री और सेफ। ₹150 से शुरू। WhatsApp: 9876543210 💚",
      'general': "👩‍🤝‍👩 महिला स्वयं सहायता समूह! हमारे पास विभिन्न प्रकार के घर के बने प्रोडक्ट्स हैं। कॉल करके जानें। हमें सपोर्ट करें! 📞 9876543210 🙏"
    };
    
    const key = templates.find(t => inputPrompt.includes(t.prompt))?.id || 'general';
    setGeneratedMessage(messages[key] || messages['general']);
    setIsGenerating(false);
    
    toast({
      title: "✨ Message Generated!",
      description: "Your WhatsApp marketing message is ready",
    });
  };

  const handleVoiceInput = () => {
    if (isListening) return;
    
    setIsListening(true);
    startListening((transcript: string) => {
      setPrompt(transcript);
      setIsListening(false);
      toast({
        title: "🎤 Voice Input Complete",
        description: `Heard: "${transcript}"`,
      });
    });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      toast({
        title: "📋 Copied!",
        description: "Message copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "❌ Copy Failed",
        description: "Could not copy message",
        variant: "destructive"
      });
    }
  };

  const shareOnWhatsApp = () => {
    const encodedMessage = encodeURIComponent(generatedMessage);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    toast({
      title: "📱 WhatsApp Opened",
      description: "Share your marketing message!",
    });
  };

  const downloadMessage = () => {
    const content = `WhatsApp Marketing Message
Generated by SakhiCopilot

${generatedMessage}

Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

Generated for: ${prompt || selectedTemplate}
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'whatsapp_marketing_message.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "📄 Downloaded!",
      description: "Message saved to your device",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📱 WhatsApp Marketing Messages
          </h1>
          <p className="text-xl text-gray-600">
            AI-powered marketing messages for your SHG business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                🎤 Tell Us About Your Business
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Quick Templates:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {templates.map((template) => (
                      <Button
                        key={template.id}
                        onClick={() => {
                          setSelectedTemplate(template.name);
                          setPrompt(template.prompt);
                        }}
                        variant={selectedTemplate === template.name ? "default" : "outline"}
                        size="sm"
                        className="text-sm"
                      >
                        {template.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Or describe your business:</label>
                  <div className="relative">
                    <Textarea
                      placeholder="बताएं कि आप क्या बेच रहे हैं... (e.g., 'We sell homemade pickles')"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      rows={3}
                    />
                    <Button
                      onClick={handleVoiceInput}
                      disabled={isListening}
                      variant="ghost"
                      size="sm"
                      className={`absolute bottom-2 right-2 ${
                        isListening ? 'text-red-500 animate-pulse' : 'text-green-500'
                      }`}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={() => generateMessage(prompt)}
                  disabled={!prompt || isGenerating}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      ✨ Generate Message
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                📝 Your Marketing Message
                {generatedMessage && (
                  <Badge className="bg-green-100 text-green-800">Ready to Share!</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {generatedMessage ? (
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-gray-800 whitespace-pre-wrap">{generatedMessage}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      size="sm"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    
                    <Button
                      onClick={shareOnWhatsApp}
                      className="bg-green-600 hover:bg-green-700"
                      size="sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Share on WhatsApp
                    </Button>
                    
                    <Button
                      onClick={() => speak(generatedMessage)}
                      disabled={isSpeaking}
                      variant="outline"
                      size="sm"
                    >
                      🔊 {isSpeaking ? 'Speaking...' : 'Listen'}
                    </Button>
                    
                    <Button
                      onClick={downloadMessage}
                      variant="outline"
                      size="sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded">
                    💡 <strong>Pro Tip:</strong> Customize the phone number and prices before sharing!
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">💬</div>
                  <p className="text-gray-600">Your AI-generated marketing message will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>💡 Marketing Tips for SHG Success</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl mb-2">📸</div>
                <h3 className="font-semibold mb-2">Add Photos</h3>
                <p className="text-sm text-gray-600">Include product photos to attract more customers</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">⭐</div>
                <h3 className="font-semibold mb-2">Customer Reviews</h3>
                <p className="text-sm text-gray-600">Share positive feedback from happy customers</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold mb-2">Target Audience</h3>
                <p className="text-sm text-gray-600">Share in relevant WhatsApp groups in your area</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketingGenerator;
