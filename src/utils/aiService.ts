
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface BusinessResponse {
  response: string;
  confidence: number;
  suggestions: string[];
  isLocal: boolean;
}

class BusinessKnowledgeService {
  constructor() {
    // Local business knowledge database - no external dependencies
  }

  hasLocalDatabase(): boolean {
    return true;
  }

  async generateResponse(message: string, context: ChatMessage[] = []): Promise<BusinessResponse> {
    return this.getBusinessResponse(message);
  }

  private getBusinessResponse(message: string): BusinessResponse {
    const lowerMessage = message.toLowerCase();
    
    // Comprehensive business knowledge database
    const businessDatabase = {
      // Business starting - Global best practices
      business: {
        keywords: ['business', 'व्यापार', 'व्यवसाय', 'start', 'शुरू', 'कारोबार', 'enterprise', 'startup', 'company'],
        response: `🚀 व्यापार शुरू करने की संपूर्ण गाइड | Complete Business Starting Guide:

💰 BUDGET PLANNING (बजट योजना):
• शुरुआती पूंजी: ₹5,000-₹2,00,000 (Start with what you have)
• 70% Production + 20% Marketing + 10% Emergency fund
• तीन महीने का खर्च अलग रखें

📊 MARKET RESEARCH (बाज़ार अनुसंधान):
• अपने इलाके की ज़रूरत पहचानें - What does your community need?
• Competitors की कीमतें चेक करें
• Target customers से बात करें
• Online trends भी देखें (Google Trends)

🎯 BUSINESS MODEL OPTIONS:
• B2C: Direct selling to customers (सीधे ग्राहकों को)
• B2B: Wholesale to shops (दुकानों को थोक)
• Online: E-commerce platforms
• Hybrid: Both online + offline

📋 LEGAL REQUIREMENTS:
• Business registration (₹500-5000)
• GST if turnover >₹20 lakh/year
• Trade license from local authority
• Bank account for business

🌍 SUCCESS STORIES:
• Sarah (Kenya): Started soap making with $50, now employs 20 women
• Maya (Bangladesh): Handicrafts export, ₹50,000/month
• Priya (India): Pickle business, ₹2 lakh/month

Start small, think global! छोटे से शुरू करें, बड़ा सोचें!`,
        suggestions: ['Business plan template', 'Market research tips', 'Legal requirements', 'Success stories']
      },

      // Comprehensive loan and funding information
      loan: {
        keywords: ['loan', 'लोन', 'पैसा', 'funding', 'capital', 'mudra', 'मुद्रा', 'finance', 'credit', 'investment'],
        response: `💰 पूर्ण फंडिंग गाइड | COMPREHENSIVE FUNDING GUIDE:

🏦 INDIAN GOVERNMENT SCHEMES:
• MUDRA LOAN:
  - Shishu: Up to ₹50,000 (8-10% interest)
  - Kishore: ₹50,001 to ₹5 lakh (9-11% interest)
  - Tarun: ₹5,00,001 to ₹10 lakh (10-12% interest)
  - No collateral required

• STAND-UP INDIA: ₹10 lakh to ₹1 crore
• PMEGP: 15-35% subsidy (up to ₹25 lakh project)
• SHG BANK LINKAGE: Through self-help groups
• WOMEN ENTREPRENEUR LOANS: Special rates

🌍 INTERNATIONAL MICROFINANCE:
• Grameen Bank Model (Bangladesh origin)
• Kiva.org - Global crowdfunding
• Accion International microloans
• Women's World Banking initiatives

💡 ALTERNATIVE FUNDING:
• CROWDFUNDING: Ketto, Milaap, GoFundMe
• ANGEL INVESTORS: For scalable ideas
• GOVERNMENT GRANTS: NITI Aayog, state schemes
• FAMILY & FRIENDS: Start with trusted circle
• REVENUE-BASED FINANCING: Pay from earnings

📊 LOAN APPROVAL TIPS:
• Maintain good credit score (750+)
• Keep business records clean
• Show steady income proof
• Join SHG for better rates
• Prepare solid business plan

🔍 RED FLAGS TO AVOID:
• Loans with >18% interest
• Advance fee frauds
• Unregistered lenders
• Hidden charges

Success Rate: SHG members get 90% higher loan approval!`,
        suggestions: ['Mudra loan application', 'Microfinance options', 'Crowdfunding tips', 'Credit score improvement']
      },

      // Advanced marketing strategies
      marketing: {
        keywords: ['marketing', 'बिक्री', 'sale', 'customer', 'ग्राहक', 'promotion', 'advertisement', 'branding', 'social media'],
        response: `📈 विश्वस्तरीय मार्केटिंग रणनीतियां | WORLD-CLASS MARKETING STRATEGIES:

📱 DIGITAL MARKETING MASTERY:
• SOCIAL MEDIA STRATEGY:
  - Instagram: Visual products (food, crafts)
  - Facebook: Community building + ads
  - WhatsApp Business: Direct customer chat
  - YouTube: Tutorial videos (cooking, crafts)
  - Pinterest: Home decor, fashion ideas

• CONTENT MARKETING:
  - Behind-the-scenes videos
  - Customer testimonials
  - How-to tutorials
  - Before/after transformations

🎯 LOCAL MARKETING TACTICS:
• WORD-OF-MOUTH CAMPAIGNS:
  - Referral rewards (10% discount)
  - Customer reviews collection
  - Community events participation
  - Local newspaper features

• GUERRILLA MARKETING:
  - Free samples at bus stops
  - Chalk advertising (where legal)
  - Local festival stalls
  - School/college partnerships

💰 PRICING PSYCHOLOGY:
• Bundle pricing (3 items for ₹100)
• Charm pricing (₹99 instead of ₹100)
• Premium positioning vs volume sales
• Seasonal pricing strategies
• Early bird discounts

🌍 GLOBAL SUCCESS EXAMPLES:
• FENTY BEAUTY: Inclusive marketing
• WARBY PARKER: Try-at-home model
• PATAGONIA: Purpose-driven branding
• LOCAL SUCCESS: Lijjat Papad's women empowerment story

📊 MARKETING METRICS TO TRACK:
• Customer acquisition cost
• Lifetime value
• Conversion rates
• Social media engagement
• Return on ad spend (ROAS)

🎨 BRANDING BASICS:
• Unique value proposition
• Consistent visual identity
• Emotional connection
• Authentic storytelling

Marketing Budget: 10-20% of revenue for growth phase`,
        suggestions: ['Social media calendar', 'Content ideas', 'Branding tips', 'Customer retention']
      },

      // Comprehensive food business guide
      food: {
        keywords: ['food', 'खाना', 'pickle', 'अचार', 'papad', 'पापड़', 'sweets', 'मिठाई', 'snacks', 'catering', 'restaurant', 'bakery'],
        response: `🍽️ संपूर्ण खाद्य व्यापार विश्वकोश | COMPLETE FOOD BUSINESS ENCYCLOPEDIA:

📋 LICENSING & COMPLIANCE:
• FSSAI LICENSE (Food Safety):
  - Basic: ₹100 (up to ₹12 lakh turnover)
  - State: ₹7,500 (up to ₹20 crore)
  - Central: ₹7,500 (above ₹20 crore)
• GST Registration (if >₹20 lakh)
• Trade License from municipality
• Water testing certificate
• Pest control certificate

💰 PRODUCT-WISE PRICING GUIDE:
• PICKLES & PRESERVES:
  - Mango pickle: ₹300-600/kg
  - Mixed veg: ₹250-400/kg
  - Premium variants: ₹800-1200/kg
  
• SNACKS & NAMKEENS:
  - Papad: ₹100-300/kg
  - Bhujia: ₹200-400/kg
  - Chips: ₹300-500/kg
  
• SWEETS & DESSERTS:
  - Traditional sweets: ₹400-800/kg
  - Dry fruits sweets: ₹800-1500/kg
  - Festival specials: 20-30% premium

📦 PACKAGING INNOVATIONS:
• Vacuum sealing for longer shelf life
• Transparent containers for visibility
• QR codes for product information
• Eco-friendly packaging trend
• Portion control packaging

🌍 GLOBAL FOOD TRENDS:
• HEALTH CONSCIOUS: Organic, sugar-free, gluten-free
• CONVENIENCE: Ready-to-eat, meal kits
• AUTHENTIC: Regional specialties
• ARTISANAL: Handmade, small-batch
• SUSTAINABLE: Zero waste, local sourcing

🏭 SCALING STRATEGIES:
• Start with 2-3 core products
• Perfect recipes before expanding
• Build supplier relationships
• Invest in quality equipment gradually
• Consider co-packing for growth

🔬 QUALITY CONTROL:
• Standard operating procedures (SOPs)
• Regular taste testing
• Temperature monitoring
• Expiry date management
• Customer feedback integration

📊 FOOD BUSINESS METRICS:
• Food cost percentage (25-35%)
• Gross profit margin (65-75%)
• Inventory turnover
• Customer repeat rate
• Seasonal sales patterns

🚚 DISTRIBUTION CHANNELS:
• Direct sales (highest margin)
• Local grocery stores
• Online marketplaces
• Wholesale to restaurants
• Subscription boxes

REMEMBER: Food safety is non-negotiable!`,
        suggestions: ['FSSAI license process', 'Recipe standardization', 'Packaging solutions', 'Distribution strategies']
      },

      handicrafts: {
        keywords: ['handicraft', 'हस्तशिल्प', 'craft', 'textile', 'कपड़ा', 'embroidery', 'कढ़ाई', 'bags', 'बैग', 'jewelry', 'art'],
        response: `🎨 GLOBAL HANDICRAFTS BUSINESS MASTERY:

🌍 INTERNATIONAL MARKET OPPORTUNITIES:
• USA: Home decor market $200+ billion
• EUROPE: Sustainable fashion growing 20% yearly
• MIDDLE EAST: Luxury handicrafts demand
• Online platforms: Etsy, Amazon Handmade

💎 PRODUCT CATEGORIES & PRICING:
• Handwoven scarves: ₹800-3000
• Embroidered kurtas: ₹1500-8000
• Designer jewelry: ₹200-10000
• Handbags: ₹500-8000

Global handicrafts market: $718 billion - Your opportunity awaits!`,
        suggestions: ['Export procedures', 'Design trends', 'Skill development', 'Global marketing']
      },

      digital: {
        keywords: ['digital', 'payment', 'upi', 'online', 'website', 'app', 'computer', 'mobile', 'technology', 'internet', 'ecommerce'],
        response: `💻 COMPLETE DIGITAL TRANSFORMATION GUIDE:

📱 DIGITAL PAYMENT ECOSYSTEM:
• UPI setup with QR codes
• Online payment gateways
• International payments via PayPal

🌐 ONLINE PRESENCE BUILDING:
• Website creation and hosting
• E-commerce platform setup
• Social media marketing

Remember: Digital is essential for growth!`,
        suggestions: ['Website setup', 'Payment integration', 'Social media marketing', 'Digital security']
      },

      government: {
        keywords: ['government', 'सरकार', 'scheme', 'योजना', 'subsidy', 'सब्सिडी', 'pradhan mantri', 'support', 'grant'],
        response: `🏛️ COMPREHENSIVE GOVERNMENT SUPPORT:

💰 FINANCIAL SUPPORT SCHEMES:
• MUDRA YOJANA: Up to ₹10 lakh loans
• STAND-UP INDIA: ₹10 lakh to ₹1 crore
• PMEGP: 15-35% subsidy

👩‍💼 WOMEN-SPECIFIC SCHEMES:
• MAHILA E-HAAT: Online marketing platform
• DENA SHAKTI: Women entrepreneur loans

Remember: Government support is your right!`,
        suggestions: ['Scheme eligibility', 'Application process', 'Required documents', 'Success stories']
      },

      agriculture: {
        keywords: ['agriculture', 'कृषि', 'farming', 'खेती', 'crop', 'फसल', 'organic', 'rural'],
        response: `🌾 COMPREHENSIVE AGRI-BUSINESS GUIDE:

🚜 MODERN FARMING TECHNIQUES:
• Precision agriculture with GPS
• Organic farming benefits
• Dairy and poultry opportunities

💰 FINANCING OPTIONS:
• KISAN CREDIT CARD: Up to ₹3 lakh
• NABARD schemes for rural development

Agriculture is agri-business!`,
        suggestions: ['Crop selection', 'Modern techniques', 'Government schemes', 'Market linkages']
      },

      export: {
        keywords: ['export', 'निर्यात', 'international', 'foreign', 'global', 'trade'],
        response: `🌍 COMPLETE EXPORT BUSINESS MASTERY:

🚢 EXPORT FUNDAMENTALS:
• 3-5x higher profit margins
• Government incentives available
• Global market access

📋 ESSENTIAL DOCUMENTATION:
• IEC Code: ₹500 online
• Export licenses and certificates

Global trade is your gateway to prosperity!`,
        suggestions: ['Export documentation', 'Target markets', 'Quality standards', 'Government schemes']
      },

      legal: {
        keywords: ['legal', 'कानूनी', 'license', 'लाइसेंस', 'registration', 'compliance', 'tax', 'gst'],
        response: `⚖️ COMPLETE LEGAL & COMPLIANCE GUIDE:

📋 BUSINESS REGISTRATION OPTIONS:
• Sole Proprietorship: Simplest form
• Partnership Firm: 2-20 partners
• LLP: Limited liability protection
• Private Limited: Separate legal entity

💰 TAX COMPLIANCE:
• GST registration if turnover >₹20 lakh
• Income tax filing requirements

Legal compliance is business necessity!`,
        suggestions: ['Business registration', 'License requirements', 'Tax compliance', 'Legal documentation']
      }
    };

    // Check which category the message belongs to
    for (const [category, data] of Object.entries(businessDatabase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return {
          response: data.response,
          confidence: 0.95,
          suggestions: data.suggestions,
          isLocal: true
        };
      }
    }

    // Default welcome response for unmatched queries
    return {
      response: `🌟 नमस्ते! मैं सखी हूं - आपकी व्यापारिक सफलता की साथी! 
Hello! I'm Sakhi - Your Business Success Partner! 🌟

🚀 मैं आपकी इन सभी बातों में मदद कर सकती हूं:
I can help you with all these topics:

💰 **व्यापार और फंडिंग | Business & Funding:**
• व्यापार कैसे शुरू करें | How to start business
• लोन और सरकारी योजनाएं | Loans & government schemes  
• बजट प्लानिंग | Budget planning

📈 **मार्केटिंग और बिक्री | Marketing & Sales:**
• डिजिटल मार्केटिंग | Digital marketing
• प्राइसिंग रणनीति | Pricing strategies
• ग्राहक संबंध | Customer relationships

🏭 **प्रोडक्ट कैटेगरी | Product Categories:**
• खाद्य व्यापार | Food business (अचार, पापड़, मिठाई)
• हस्तशिल्प | Handicrafts (कढ़ाई, बैग्स, ज्वेलरी)
• कृषि व्यापार | Agriculture business
• निर्यात अवसर | Export opportunities

💻 **टेक्नोलॉजी | Technology:**
• डिजिटल पेमेंट सेटअप | Digital payment setup
• ऑनलाइन बिजनेस | Online business
• सोशल मीडिया मार्केटिंग | Social media marketing

⚖️ **कानूनी मामले | Legal Matters:**
• लाइसेंस और रजिस्ट्रेशन | Licenses & registration
• GST और टैक्स | GST & tax compliance
• बिजनेस रजिस्ट्रेशन | Business registration

💡 **आपके सवाल का इंतजार है! Ready for your questions!**
अपना सवाल टाइप करें या 🎤 बटन दबाकर बोलें!
Type your question or press 🎤 to speak!`,
      confidence: 0.9,
      suggestions: [
        'व्यापार कैसे शुरू करें?',
        'How to get business loan?', 
        'मार्केटिंग टिप्स',
        'Export opportunities',
        'सरकारी योजनाएं',
        'Digital payment setup',
        'FSSAI license process',
        'Handicraft business ideas'
      ],
      isLocal: true
    };
  }

  async generatePosterContent(businessType: string, businessName: string): Promise<string> {
    return this.getLocalPosterContent(businessType, businessName);
  }

  private getLocalPosterContent(businessType: string, businessName: string): string {
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

export const businessService = new BusinessKnowledgeService();
export type { ChatMessage, BusinessResponse };
