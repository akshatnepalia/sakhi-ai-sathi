
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIResponse {
  response: string;
  confidence: number;
  suggestions: string[];
  isAI: boolean;
}

class AIService {
  private apiKey: string | null = null;
  private baseURL = 'https://api.openai.com/v1/chat/completions';
  
  constructor() {
    this.apiKey = localStorage.getItem('openai_api_key');
  }

  setApiKey(key: string) {
    this.apiKey = key;
    localStorage.setItem('openai_api_key', key);
  }

  hasApiKey(): boolean {
    return !!this.apiKey;
  }

  async generateResponse(message: string, context: ChatMessage[] = []): Promise<AIResponse> {
    if (!this.hasApiKey()) {
      return this.getFallbackResponse(message);
    }

    try {
      const systemPrompt = `You are Sakhi, an AI business advisor for rural women entrepreneurs in India. You help with:
- Business planning and strategy
- Marketing and sales advice
- Financial planning and budgeting
- Government schemes and subsidies
- Product pricing and market analysis
- Digital marketing basics

Always respond with practical, actionable advice in simple language. Be culturally sensitive and understand the context of rural Indian business environment. Provide responses in both Hindi and English when helpful.`;

      const messages = [
        { role: 'system', content: systemPrompt },
        ...context.slice(-5).map(msg => ({ role: msg.role, content: msg.content })),
        { role: 'user', content: message }
      ];

      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages,
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      return {
        response: aiResponse,
        confidence: 0.9,
        suggestions: this.generateSuggestions(message),
        isAI: true
      };
    } catch (error) {
      console.error('AI API Error:', error);
      return this.getFallbackResponse(message);
    }
  }

  private getFallbackResponse(message: string): AIResponse {
    const lowerMessage = message.toLowerCase();
    
    // Expanded business database with more Q&A
    const businessDatabase = {
      // Business starting questions
      business: {
        keywords: ['business', 'व्यापार', 'व्यवसाय', 'start', 'शुरू', 'कारोबार'],
        response: `व्यापार शुरू करने के मुख्य चरण:
• सबसे पहले अपना बजट तय करें (₹5,000-₹50,000 से शुरुआत)
• बाजार रिसर्च करें - आपके इलाके में क्या चीज़ की ज़रूरत है?
• छोटे स्तर पर शुरुआत करें
• अपने प्रोडक्ट की गुणवत्ता बनाए रखें
• ग्राहकों की प्रतिक्रिया सुनें

Key steps to start business:
• First decide your budget (start with ₹5,000-₹50,000)
• Do market research - what's needed in your area?
• Start small scale
• Maintain product quality
• Listen to customer feedback`,
        suggestions: ['Business plan kaise banaye?', 'कम पैसे में व्यापार', 'License requirements']
      },

      // Loan and funding
      loan: {
        keywords: ['loan', 'लोन', 'पैसा', 'funding', 'capital', 'mudra', 'मुद्रा'],
        response: `महिला उद्यमियों के लिए लोन स्कीमें:

🏦 मुद्रा लोन:
• शिशु: ₹50,000 तक
• किशोर: ₹50,000 से ₹5 लाख
• तरुण: ₹5 लाख से ₹10 लाख
• ब्याज दर: 8-12%

🏦 महिला उद्यमी योजना:
• ₹10 लाख तक का लोन
• कम ब्याज दर
• 20% सब्सिडी

🏦 SHG आधारित लोन:
• समूह के माध्यम से
• बिना गारंटी
• आसान प्रक्रिया

Loan schemes for women entrepreneurs:
• Mudra Loan: Up to ₹10 lakh
• Women Entrepreneur Scheme: Low interest
• SHG-based loans: Through groups`,
        suggestions: ['Mudra loan documents', 'SHG loan process', 'Interest rates']
      },

      // Marketing and sales
      marketing: {
        keywords: ['marketing', 'बिक्री', 'sale', 'customer', 'ग्राहक', 'promotion', 'advertisement'],
        response: `बिक्री बढ़ाने के तरीके:

📱 डिजिटल मार्केटिंग:
• WhatsApp Business का इस्तेमाल करें
• Facebook/Instagram पर प्रोडक्ट की फोटो डालें
• Google My Business बनाएं
• ऑनलाइन पेमेंट स्वीकार करें

🎯 स्थानीय मार्केटिंग:
• पड़ोसियों से शुरू करें
• मुंह से मुंह प्रचार करें
• स्थानीय मेलों में भाग लें
• फ्री सैम्पल बांटें

💡 प्राइसिंग टिप्स:
• कम्पटीटर की कीमत चेक करें
• मटेरियल कॉस्ट + लेबर + 30-40% प्रॉफिट
• फेस्टिवल सीजन में प्राइस बढ़ाएं

Sales strategies:
• Use WhatsApp Business
• Social media presence
• Local market participation
• Word-of-mouth marketing`,
        suggestions: ['Social media tips', 'Pricing strategy', 'Customer retention']
      },

      // Product specific - Food business
      food: {
        keywords: ['food', 'खाना', 'pickle', 'अचार', 'papad', 'पापड़', 'sweets', 'मिठाई', 'snacks'],
        response: `खाद्य व्यापार के लिए गाइड:

📋 लाइसेंस ज़रूरी:
• FSSAI लाइसेंस (₹100-7500)
• GST रजिस्ट्रेशन (अगर टर्नओवर ₹20 लाख+)
• Trade License

💰 प्राइसिंग फॉर्मूला:
• Raw Material Cost × 2-3 = Selling Price
• अचार: ₹200-400 per kg
• पापड़: ₹100-200 per kg
• स्नैक्स: ₹150-300 per kg

📦 पैकेजिंग टिप्स:
• एयर टाइट कंटेनर इस्तेमाल करें
• एक्सपायरी डेट लिखें
• अपना नाम और फोन नंबर डालें
• आकर्षक लेबल लगाएं

Food business guide:
• FSSAI license mandatory
• Proper packaging essential
• Price 2-3x raw material cost
• Focus on hygiene and quality`,
        suggestions: ['FSSAI license process', 'Food packaging tips', 'Shelf life tips']
      },

      // Handicrafts and textiles
      handicrafts: {
        keywords: ['handicraft', 'हस्तशिल्प', 'craft', 'textile', 'कपड़ा', 'embroidery', 'कढ़ाई', 'bags', 'बैग'],
        response: `हस्तशिल्प व्यापार गाइड:

🎨 प्रोडक्ट आइडियाज:
• कढ़ाई के कपड़े और सूट
• हैंडमेड बैग्स
• होम डेकोर आइटम्स
• ज्वेलरी और एक्सेसरीज
• फेस्टिवल डेकोरेशन

💵 प्राइसिंग:
• Material Cost + Labor (₹50-200/hour) + 40% profit
• हैंडमेड बैग: ₹300-2000
• कढ़ाई सूट: ₹1500-8000
• होम डेकोर: ₹200-3000

🛒 सेलिंग चैनल्स:
• लोकल मार्केट और मेले
• ऑनलाइन - Etsy, Amazon, Flipkart
• व्होलसेल बायर्स को
• एक्सपोर्ट (GeM portal के जरिए)

Handicraft business guide:
• Focus on unique designs
• Quality materials important
• Price includes labor value
• Multiple selling channels`,
        suggestions: ['Design ideas', 'Online selling tips', 'Export opportunities']
      },

      // Digital payments and technology
      digital: {
        keywords: ['digital', 'payment', 'upi', 'online', 'website', 'app', 'computer', 'mobile'],
        response: `डिजिटल पेमेंट सेटअप:

📱 UPI सेटअप:
• PhonePe, GPay, Paytm इंस्टॉल करें
• बैंक अकाउंट से लिंक करें
• QR Code प्रिंट कराएं
• पेमेंट का रिकॉर्ड रखें

💻 ऑनलाइन प्रेजेंस:
• WhatsApp Business Profile बनाएं
• Facebook Page बनाएं
• इंस्टाग्राम पर प्रोडक्ट फोटो डालें
• Google Maps पर अपनी दुकान रजिस्टर करें

📊 रिकॉर्ड कीपिंग:
• दैनिक बिक्री का हिसाब रखें
• खर्च और आमदनी अलग लिखें
• GST बिल सेव करें
• बैंक स्टेटमेंट चेक करें

Digital setup for business:
• UPI payments essential
• Social media presence
• Record keeping important
• Online visibility helps growth`,
        suggestions: ['UPI setup guide', 'Social media marketing', 'Record keeping tips']
      },

      // Government schemes
      government: {
        keywords: ['government', 'सरकार', 'scheme', 'योजना', 'subsidy', 'सब्सिडी', 'pradhan mantri'],
        response: `सरकारी योजनाएं महिला उद्यमियों के लिए:

🏛️ प्रधानमंत्री मुद्रा योजना:
• ₹10 लाख तक का लोन
• कोई गारंटी नहीं चाहिए
• 8-12% ब्याज दर

🏛️ स्टैंड अप इंडिया:
• SC/ST/महिलाओं के लिए
• ₹10 लाख से ₹1 करोड़ तक
• मैन्युफैक्चरिंग/सर्विसेज के लिए

🏛️ महिला उद्यमिता प्लेटफॉर्म:
• ट्रेनिंग और मेंटरशिप
• नेटवर्किंग अवसर
• मार्केट लिंकेज

🏛️ PMEGP (Prime Minister's Employment Generation Programme):
• ₹25 लाख तक की प्रोजेक्ट फंडिंग
• 15-35% सब्सिडी
• रूरल एरिया में ज्यादा सब्सिडी

Government schemes:
• Mudra Yojana: Up to ₹10 lakh
• Stand Up India: For women/SC/ST
• Training and mentorship available
• Subsidy up to 35%`,
        suggestions: ['Application process', 'Required documents', 'Eligibility criteria']
      }
    };

    // Check which category the message belongs to
    for (const [category, data] of Object.entries(businessDatabase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return {
          response: data.response,
          confidence: 0.8,
          suggestions: data.suggestions,
          isAI: false
        };
      }
    }

    // Default response for unmatched queries
    return {
      response: `मैं सखी हूं, आपकी व्यापारिक सफलता के लिए यहाँ हूँ! 🌟

आप मुझसे पूछ सकते हैं:
• व्यापार कैसे शुरू करें? 🚀
• लोन और फंडिंग कैसे मिलेगा? 💰
• मार्केटिंग और बिक्री के तरीके 📈
• सरकारी योजनाओं के बारे में 🏛️
• प्रोडक्ट प्राइसिंग 💵
• डिजिटल पेमेंट सेटअप 📱

I'm Sakhi, here to help with your business success! 🌟

You can ask me about:
• How to start a business
• Loans and funding options
• Marketing and sales strategies
• Government schemes
• Product pricing
• Digital payment setup`,
      confidence: 0.6,
      suggestions: ['व्यापार कैसे शुरू करें?', 'लोन कैसे मिलेगा?', 'Marketing tips', 'Government schemes'],
      isAI: false
    };
  }

  private generateSuggestions(message: string): string[] {
    const suggestions = [
      'व्यापार कैसे शुरू करें?',
      'Mudra loan के लिए documents?',
      'Marketing strategies for small business',
      'सरकारी योजनाएं महिलाओं के लिए',
      'Pricing strategy कैसे बनाएं?',
      'Customer retention के तरीके',
      'Digital payment setup',
      'FSSAI license कैसे लें?',
      'Social media marketing tips',
      'Export opportunities',
      'GST registration process',
      'Quality control tips'
    ];
    
    return suggestions.sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  async generatePosterContent(businessType: string, businessName: string): Promise<string> {
    if (!this.hasApiKey()) {
      return this.getFallbackPosterContent(businessType, businessName);
    }

    try {
      const prompt = `Generate compelling poster content for a ${businessType} business named "${businessName}" run by a rural woman entrepreneur. Include:
- Catchy headline in Hindi and English
- Key selling points
- Contact call-to-action
Keep it simple and culturally appropriate.`;

      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 300,
          temperature: 0.8
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Poster generation error:', error);
      return this.getFallbackPosterContent(businessType, businessName);
    }
  }

  private getFallbackPosterContent(businessType: string, businessName: string): string {
    const templates = {
      'handicrafts': `🎨 ${businessName} 🎨
हस्तशिल्प की दुनिया में आपका स्वागत है!
Welcome to the world of handicrafts!

✨ हाथ से बने खूबसूरत सामान
✨ किफायती दामों में उच्च गुणवत्ता  
✨ Hand-made beautiful items
✨ High quality at affordable prices

📞 संपर्क करें - Contact Us Today!`,
      
      'food': `🍽️ ${businessName} 🍽️
घर का स्वाद, मां का प्यार!
Home taste, Mother's love!

🌟 ताज़ा और स्वादिष्ट खाना
🌟 स्वच्छता का पूरा ध्यान
🌟 Fresh and delicious food
🌟 Complete hygiene maintained

📞 ऑर्डर के लिए कॉल करें - Call to Order!`,
      
      'textiles': `👗 ${businessName} 👗
फैशन की नई दुनिया!
New world of fashion!

💫 ट्रेंडी डिज़ाइन्स
💫 सभी साइज़ उपलब्ध
💫 Trendy designs
💫 All sizes available

📞 आज ही संपर्क करें - Contact Today!`
    };

    return templates[businessType as keyof typeof templates] || 
           `🌟 ${businessName} 🌟
गुणवत्ता और विश्वसनीयता का नाम!
Name of quality and reliability!

✅ बेहतरीन सेवा - Excellent service
✅ उचित दाम - Fair prices
✅ संतुष्ट ग्राहक - Satisfied customers

📞 संपर्क करें - Contact Us!`;
  }
}

export const aiService = new AIService();
export type { ChatMessage, AIResponse };
