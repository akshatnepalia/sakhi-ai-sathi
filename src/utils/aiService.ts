
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
    
    // Business-related responses
    if (lowerMessage.includes('business') || lowerMessage.includes('व्यापार')) {
      return {
        response: `व्यापार शुरू करने के लिए पहले अपना बजट तय करें। छोटे स्तर पर शुरुआत करें और धीरे-धीरे बढ़ाएं। स्थानीय बाजार की जांच करें और ग्राहकों की जरूरतों को समझें।

To start a business, first set your budget. Start small and gradually expand. Research your local market and understand customer needs.`,
        confidence: 0.7,
        suggestions: ['Business plan kaise banaye?', 'Loan kaise apply kare?', 'Market research tips'],
        isAI: false
      };
    }

    if (lowerMessage.includes('loan') || lowerMessage.includes('लोन')) {
      return {
        response: `महिला उद्यमियों के लिए कई लोन स्कीमें हैं:
- मुद्रा लोन (50,000 से 10 लाख तक)
- महिला उद्यमी योजना
- SHG आधारित लोन
- बैंक से बिजनेस लोन

Several loan schemes for women entrepreneurs:
- Mudra Loan (50,000 to 10 lakh)
- Women Entrepreneur Scheme
- SHG-based loans
- Business loans from banks`,
        confidence: 0.8,
        suggestions: ['Mudra loan apply kaise kare?', 'Documents required', 'Interest rates'],
        isAI: false
      };
    }

    if (lowerMessage.includes('marketing') || lowerMessage.includes('बिक्री')) {
      return {
        response: `डिजिटल मार्केटिंग के सरल तरीके:
- WhatsApp Business का उपयोग करें
- Facebook/Instagram पर अपने प्रोडक्ट्स की फोटो डालें
- स्थानीय समुदाय में word-of-mouth marketing करें
- गुणवत्ता बनाए रखें

Simple digital marketing methods:
- Use WhatsApp Business
- Post product photos on Facebook/Instagram
- Build word-of-mouth in local community
- Maintain quality`,
        confidence: 0.7,
        suggestions: ['Social media marketing', 'Customer retention tips', 'Pricing strategy'],
        isAI: false
      };
    }

    // Default response
    return {
      response: `मैं आपकी व्यापारिक सफलता के लिए यहाँ हूँ! आप मुझसे पूछ सकते हैं:
- व्यापार शुरू करने के बारे में
- लोन और फंडिंग के बारे में
- मार्केटिंग और बिक्री के बारे में
- सरकारी योजनाओं के बारे में

I'm here to help with your business success! You can ask me about:
- Starting a business
- Loans and funding
- Marketing and sales
- Government schemes`,
      confidence: 0.6,
      suggestions: ['Business ideas', 'Funding options', 'Marketing tips', 'Government schemes'],
      isAI: false
    };
  }

  private generateSuggestions(message: string): string[] {
    const suggestions = [
      'Business plan kaise banaye?',
      'Loan apply karne ke liye documents?',
      'Marketing strategies for small business',
      'Government schemes for women',
      'Pricing strategy tips',
      'Customer retention ideas'
    ];
    
    return suggestions.slice(0, 3);
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
