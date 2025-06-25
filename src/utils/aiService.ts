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
          model: 'gpt-4',
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
    
    // Expanded world-level business database with comprehensive Q&A
    const businessDatabase = {
      // Business starting - Global best practices
      business: {
        keywords: ['business', 'व्यापार', 'व्यवसाय', 'start', 'शुरू', 'कारोबार', 'enterprise', 'startup', 'company'],
        response: `🚀 व्यापार शुरू करने की विश्वव्यापी गाइड | Global Business Starting Guide:

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
        response: `💰 COMPREHENSIVE FUNDING GUIDE | पूर्ण फंडिंग गाइड:

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
        response: `📈 WORLD-CLASS MARKETING STRATEGIES | विश्वस्तरीय मार्केटिंग रणनीतियां:

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
        response: `🍽️ COMPLETE FOOD BUSINESS ENCYCLOPEDIA | संपूर्ण खाद्य व्यापार विश्वकोश:

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

      // Comprehensive handicrafts and textiles
      handicrafts: {
        keywords: ['handicraft', 'हस्तशिल्प', 'craft', 'textile', 'कपड़ा', 'embroidery', 'कढ़ाई', 'bags', 'बैग', 'jewelry', 'art'],
        response: `🎨 GLOBAL HANDICRAFTS BUSINESS MASTERY | वैश्विक हस्तशिल्प व्यापार निपुणता:

🌍 INTERNATIONAL MARKET OPPORTUNITIES:
• USA: Home decor market $200+ billion
• EUROPE: Sustainable fashion growing 20% yearly
• MIDDLE EAST: Luxury handicrafts demand
• AUSTRALIA: Ethical fashion movement
• ONLINE GLOBAL: Etsy, Amazon Handmade

💎 PRODUCT CATEGORIES & PRICING:
• TEXTILES & CLOTHING:
  - Handwoven scarves: ₹800-3000
  - Embroidered kurtas: ₹1500-8000
  - Block print fabrics: ₹200-800/meter
  - Designer sarees: ₹5000-50000

• HOME DECOR:
  - Wall hangings: ₹500-5000
  - Cushion covers: ₹300-1500
  - Table runners: ₹600-2500
  - Lampshades: ₹800-4000

• JEWELRY & ACCESSORIES:
  - Handmade jewelry: ₹200-10000
  - Handbags: ₹500-8000
  - Phone covers: ₹150-800
  - Key chains: ₹50-300

🛍️ DESIGN INNOVATION TRENDS:
• FUSION STYLES: Traditional + modern
• SUSTAINABLE MATERIALS: Organic cotton, jute, bamboo
• PERSONALIZATION: Custom designs, names, photos
• MINIMALIST AESTHETICS: Clean, simple designs
• CULTURAL STORYTELLING: Heritage narratives

📊 COSTING FORMULA:
SELLING PRICE = (Material Cost + Labor Cost + Overhead) × 2.5-4
• Material Cost: 20-30% of selling price
• Labor: ₹50-300/hour based on skill
• Overhead: Electricity, tools, rent (10-15%)
• Profit Margin: 60-75%

🎯 SKILL DEVELOPMENT AREAS:
• Color theory and combinations
• Pattern development
• Quality finishing techniques
• Product photography
• Brand storytelling

🌐 EXPORT OPPORTUNITIES:
• Government Export Promotion Council support
• Craft exhibitions and trade fairs
• Export houses and buying agents
• Direct export through online platforms
• Participate in international craft fairs

📱 DIGITAL PRESENCE STRATEGY:
• Instagram: Visual storytelling (use hashtags #handmade #sustainable)
• Pinterest: Inspiration boards
• Facebook: Community building
• YouTube: Process videos
• Website: Professional portfolio

🔧 ESSENTIAL TOOLS & EQUIPMENT:
• Good lighting setup
• Quality photography equipment
• Basic design software knowledge
• Packaging materials
• Measuring tools

📈 SCALING STRATEGIES:
• Standardize popular designs
• Train other artisans (franchise model)
• Bulk production for wholesale
• Private labeling for brands
• Craft workshop teaching

🏆 SUCCESS MANTRAS:
• Quality over quantity always
• Build personal brand story
• Network with other artisans
• Continuous skill upgrading
• Customer relationship focus

Global handicrafts market: $718 billion - Your opportunity awaits!`,
        suggestions: ['Export procedures', 'Design trends', 'Skill development', 'Global marketing']
      },

      // Comprehensive digital and technology
      digital: {
        keywords: ['digital', 'payment', 'upi', 'online', 'website', 'app', 'computer', 'mobile', 'technology', 'internet', 'ecommerce'],
        response: `💻 COMPLETE DIGITAL TRANSFORMATION GUIDE | संपूर्ण डिजिटल रूपांतरण गाइड:

📱 DIGITAL PAYMENT ECOSYSTEM:
• UPI SETUP MASTERY:
  - PhonePe, GPay, Paytm (0% fee for P2P)
  - QR code generation and display
  - Payment link creation
  - Settlement tracking
  - Refund management

• INTERNATIONAL PAYMENTS:
  - PayPal for global transactions
  - Stripe for online payments
  - Razorpay for Indian businesses
  - Currency conversion considerations

🌐 ONLINE PRESENCE BUILDING:
• WEBSITE ESSENTIALS:
  - Domain registration (₹500-1500/year)
  - Hosting (₹2000-5000/year)
  - SSL certificate for security
  - Mobile-responsive design
  - Fast loading speed

• E-COMMERCE PLATFORMS:
  - Shopify: ₹2000/month, easy setup
  - WooCommerce: Free with WordPress
  - Amazon/Flipkart seller accounts
  - Instagram/Facebook shops

📊 DIGITAL MARKETING TOOLS:
• FREE TOOLS:
  - Google My Business (local SEO)
  - Canva for graphics
  - Buffer for social scheduling
  - Google Analytics for tracking
  - Mailchimp for email marketing

• PAID TOOLS (WORTH INVESTMENT):
  - Hootsuite for social management
  - SEMrush for keyword research
  - Adobe Creative Suite for design
  - Zoho for CRM

🔐 CYBERSECURITY BASICS:
• Strong passwords (12+ characters)
• Two-factor authentication
• Regular data backups
• Secure Wi-Fi usage
• Fraud detection awareness

📈 DATA ANALYTICS & INSIGHTS:
• Customer behavior tracking
• Sales pattern analysis
• ROI measurement
• A/B testing for improvements
• Inventory management systems

🛍️ OMNICHANNEL STRATEGY:
• Online + Offline integration
• Click and collect services
• Social commerce
• Mobile-first approach
• Voice commerce preparation

🤖 EMERGING TECHNOLOGIES:
• AI CHATBOTS: Customer service automation
• AR/VR: Virtual try-ons
• BLOCKCHAIN: Supply chain transparency
• IoT: Smart inventory management
• VOICE ASSISTANTS: Alexa skills, Google Actions

💡 DIGITAL LITERACY ROADMAP:
BEGINNER:
- Basic smartphone usage
- WhatsApp Business
- Digital payments
- Social media basics

INTERMEDIATE:
- Website management
- Online advertising
- Email marketing
- Basic analytics

ADVANCED:
- E-commerce optimization
- Advanced analytics
- Marketing automation
- API integrations

🌍 GLOBAL DIGITAL TRENDS:
• Video-first content (TikTok, Reels)
• Live commerce streaming
• Subscription business models
• Personalization at scale
• Sustainability messaging

🎯 DIGITAL ROI MEASUREMENT:
• Cost per acquisition (CPA)
• Customer lifetime value (CLV)
• Return on ad spend (ROAS)
• Conversion rates
• Engagement metrics

📚 LEARNING RESOURCES:
• Google Digital Garage (free courses)
• Facebook Blueprint (social media)
• Coursera business courses
• YouTube tutorials
• Local digital literacy programs

Remember: Digital is not optional anymore - it's essential for growth!`,
        suggestions: ['Website setup', 'Payment integration', 'Social media marketing', 'Digital security']
      },

      // Comprehensive government schemes and support
      government: {
        keywords: ['government', 'सरकार', 'scheme', 'योजना', 'subsidy', 'सब्सिडी', 'pradhan mantri', 'support', 'grant'],
        response: `🏛️ COMPREHENSIVE GOVERNMENT SUPPORT ENCYCLOPEDIA | संपूर्ण सरकारी सहायता विश्वकोश:

🇮🇳 CENTRAL GOVERNMENT SCHEMES:

💰 FINANCIAL SUPPORT SCHEMES:
• MUDRA YOJANA:
  - Shishu: Up to ₹50,000
  - Kishore: ₹50,001 to ₹5 lakh
  - Tarun: ₹5,00,001 to ₹10 lakh
  - Interest rates: 8-12% annually
  - No collateral required

• STAND-UP INDIA:
  - For SC/ST/Women entrepreneurs
  - ₹10 lakh to ₹1 crore loans
  - For greenfield enterprises
  - 7-year repayment period

• PMEGP (Prime Minister's Employment Generation Programme):
  - Manufacturing: Up to ₹25 lakh
  - Service: Up to ₹10 lakh
  - Subsidy: 15-35% of project cost
  - Own contribution: 5-10%

🎓 SKILL DEVELOPMENT PROGRAMS:
• PMKVY (Pradhan Mantri Kaushal Vikas Yojana):
  - Free skill training
  - ₹8000 average monetary reward
  - Industry-relevant certification
  - Job placement assistance

• USTTAD (Upgrading Skills & Training in Traditional Arts/Crafts):
  - For traditional artisans
  - Capacity building
  - Design development
  - Market linkage

🏭 MANUFACTURING SUPPORT:
• PLI (Production Linked Incentive):
  - Textile sector incentives
  - Food processing benefits
  - Export promotion
  - Technology upgradation

• MSME SCHEMES:
  - Credit Guarantee Fund
  - Technology upgradation
  - Marketing assistance
  - ISO certification reimbursement

👩‍💼 WOMEN-SPECIFIC SCHEMES:
• MAHILA E-HAAT:
  - Online marketing platform
  - Free registration
  - Direct customer access
  - No commission charges

• DENA SHAKTI SCHEME:
  - For women entrepreneurs
  - ₹20 lakh business loans
  - Interest rate concessions
  - Flexible repayment terms

• STREE SHAKTI PACKAGE:
  - Central Bank of India scheme
  - Lower interest rates
  - Processing fee concessions
  - Collateral-free loans

🌾 AGRICULTURE & RURAL SCHEMES:
• NABARD SCHEMES:
  - Rural infrastructure development
  - Watershed development
  - Livelihood promotion
  - Microfinance support

• STARTUP VILLAGE ENTREPRENEURSHIP PROGRAMME:
  - Rural startup support
  - ₹10 lakh to ₹1 crore funding
  - Incubation facilities
  - Mentorship support

🏢 STATE GOVERNMENT SCHEMES (Examples):
• MAHARASHTRA: Rajiv Gandhi Jeevandayee Scheme
• KARNATAKA: Yuva Nidhi Scheme
• TAMIL NADU: New Entrepreneur Cumberland Scheme
• GUJARAT: Mukhyamantri Yuva Swavalamban Yojana

🌍 INTERNATIONAL SUPPORT:
• WORLD BANK: Women entrepreneurship programs
• UN WOMEN: Economic empowerment initiatives
• USAID: Development partnerships
• British Council: Skills development

📋 APPLICATION PROCESS SIMPLIFIED:
1. IDENTIFY SUITABLE SCHEME
2. GATHER REQUIRED DOCUMENTS:
   - Aadhaar card
   - PAN card
   - Bank statements
   - Business plan
   - Educational certificates
   - Caste certificate (if applicable)

3. ONLINE APPLICATION:
   - Visit official portals
   - Fill forms carefully
   - Upload documents
   - Track application status

4. FOLLOW-UP:
   - Visit regional offices
   - Maintain communication
   - Provide additional documents if needed
   - Attend interviews if required

💡 SUCCESS TIPS:
• Prepare detailed business plan
• Keep all documents ready
• Follow up regularly
• Join SHGs for better access
• Attend government workshops
• Network with other beneficiaries

🔗 IMPORTANT PORTALS:
• www.mudra.org.in
• www.standupmitra.in
• www.kviconline.gov.in
• www.maef.nic.in
• www.msme.gov.in

🎯 EXPECTED TIMELINES:
• Documentation: 1-2 weeks
• Application processing: 15-45 days
• Loan sanction: 30-90 days
• Disbursement: 7-15 days after sanction

Remember: Government support is your right - claim it confidently!`,
        suggestions: ['Scheme eligibility', 'Application process', 'Required documents', 'Success stories']
      },

      // Agriculture and rural business
      agriculture: {
        keywords: ['agriculture', 'कृषि', 'farming', 'खेती', 'crop', 'फसल', 'organic', 'rural', 'ग्रामीण', 'dairy', 'poultry'],
        response: `🌾 COMPREHENSIVE AGRI-BUSINESS GUIDE | संपूर्ण कृषि-व्यापार गाइड:

🚜 MODERN FARMING TECHNIQUES:
• PRECISION AGRICULTURE:
  - GPS-guided farming
  - Soil testing and analysis
  - Drone monitoring
  - Weather-based decisions
  - IoT sensors for monitoring

• ORGANIC FARMING:
  - Premium pricing (20-40% higher)
  - Certification process (₹20,000-50,000)
  - Export opportunities
  - Health-conscious market
  - Government subsidies available

🥛 DAIRY BUSINESS OPPORTUNITIES:
• MILK PRODUCTION:
  - Average yield: 8-15 liters/day per cow
  - Price: ₹25-45/liter
  - Investment: ₹50,000-2 lakh per cow
  - ROI: 25-35% annually

• VALUE-ADDED PRODUCTS:
  - Paneer: ₹200-400/kg
  - Ghee: ₹400-800/kg
  - Lassi/Buttermilk: ₹20-40/glass
  - Ice cream: ₹100-300/liter

🐔 POULTRY FARMING:
• LAYER FARMING:
  - 250-300 eggs/year per hen
  - Egg price: ₹4-7 each
  - Setup cost: ₹200-300 per bird
  - Break-even: 18-24 months

• BROILER FARMING:
  - 45-day growth cycle
  - 2-2.5 kg average weight
  - Price: ₹80-120/kg
  - Profit: ₹20-40 per bird

🌱 AGRI-PROCESSING OPPORTUNITIES:
• FOOD PROCESSING:
  - Fruit pulp and juices
  - Dehydrated vegetables
  - Spice grinding and packing
  - Pickle and preserve making
  - Flour milling

• VALUE ADDITION:
  - Fresh to processed (3x value increase)
  - Packaging and branding
  - Direct-to-consumer selling
  - Export potential

🌐 GLOBAL AGRI-TRENDS:
• SUSTAINABLE FARMING: Reduced chemical usage
• VERTICAL FARMING: Urban agriculture
• HYDROPONICS: Soilless cultivation
• AQUAPONICS: Fish + plant farming
• SMART FARMING: AI and ML integration

💰 FINANCING OPTIONS:
• KISAN CREDIT CARD:
  - Up to ₹3 lakh without collateral
  - 4% interest rate (with subsidy)
  - Flexible repayment
  - Crop insurance linked

• NABARD SCHEMES:
  - Rural infrastructure development
  - Warehouse financing
  - Cold storage loans
  - Processing unit loans

📊 AGRI-BUSINESS PLANNING:
• CROP SELECTION CRITERIA:
  - Local climate suitability
  - Market demand analysis
  - Water requirement
  - Investment capacity
  - Risk assessment

• MARKET LINKAGES:
  - FPOs (Farmer Producer Organizations)
  - Direct procurement by companies
  - Online platforms (BigBasket, Grofers)
  - Export houses
  - Local mandis

🔬 TECHNOLOGY ADOPTION:
• MOBILE APPS:
  - Weather forecasting
  - Crop advisory
  - Market prices
  - Government schemes
  - Disease identification

• EQUIPMENT FINANCING:
  - Tractor loans at 9-12%
  - Custom hiring centers
  - Cooperative farming equipment
  - Lease options available

🌍 EXPORT OPPORTUNITIES:
• ORGANIC PRODUCTS: USA, Europe demand
• SPICES: Global market leader
• BASMATI RICE: Premium international demand
• FRUITS & VEGETABLES: Middle East, SE Asia
• PROCESSED FOODS: Growing global demand

📈 SUCCESS FACTORS:
• Quality focus over quantity
• Market research before planting
• Risk management (insurance)
• Continuous learning
• Technology adoption
• Collective marketing

Agriculture is not just farming - it's agri-business! कृषि केवल खेती नहीं, कृषि-व्यापार है!`,
        suggestions: ['Crop selection', 'Modern techniques', 'Government schemes', 'Market linkages']
      },

      // Export and international trade
      export: {
        keywords: ['export', 'निर्यात', 'international', 'foreign', 'global', 'trade', 'व्यापार', 'overseas', 'shipping'],
        response: `🌍 COMPLETE EXPORT BUSINESS MASTERY | संपूर्ण निर्यात व्यापार निपुणता:

🚢 EXPORT FUNDAMENTALS:
• WHY EXPORT?
  - 3-5x higher profit margins
  - Currency advantages
  - Business scalability
  - Global market access
  - Government incentives

• INDIA'S EXPORT STRENGTHS:
  - Textiles & garments
  - Handicrafts & jewelry
  - Food products & spices
  - Pharmaceuticals
  - IT services

📋 EXPORT DOCUMENTATION:
• ESSENTIAL LICENSES:
  - IEC (Import Export Code): ₹500 online
  - RCMC (Registration cum Membership Certificate)
  - AD Code from authorized dealer bank
  - GSTIN registration
  - Digital signature certificate

• SHIPPING DOCUMENTS:
  - Commercial invoice
  - Packing list
  - Bill of lading/Airway bill
  - Certificate of origin
  - Insurance policy

🎯 TARGET MARKETS ANALYSIS:
• HIGH-DEMAND COUNTRIES:
  - USA: Home decor, textiles, food
  - Germany: Organic products, crafts
  - UK: Fashion, jewelry, tea
  - UAE: Food products, textiles
  - Japan: High-quality handicrafts

• MARKET ENTRY STRATEGIES:
  - Trade fairs participation
  - B2B platforms (Alibaba, IndiaMART)
  - Export houses partnership
  - Direct buyer contact
  - E-commerce platforms (Amazon Global)

💰 FINANCIAL ASPECTS:
• PRICING STRATEGY:
  - FOB (Free on Board) pricing
  - CIF (Cost, Insurance, Freight) pricing
  - Factor in all costs: product + packaging + shipping + insurance
  - Currency fluctuation buffer (5-10%)
  - Payment terms: L/C, T/T, D/P, D/A

• PAYMENT SECURITY:
  - Letter of Credit (safest)
  - Bank guarantees
  - Export credit insurance
  - ECGC (Export Credit Guarantee Corporation) support
  - Trade finance options

🏭 EXPORT PROMOTION SCHEMES:
• MERCHANDISE EXPORTS FROM INDIA SCHEME (MEIS):
  - 2-5% duty credit scrips
  - Transferable and sellable
  - Product and country specific

• EXPORT PROMOTION CAPITAL GOODS (EPCG):
  - Duty-free import for export production
  - Export obligation: 6x CIF value in 6 years
  - Technology upgradation

• ADVANCE AUTHORIZATION:
  - Duty-free import of raw materials
  - For export production only
  - Brand rate or standard input output norms

📦 PACKAGING & LOGISTICS:
• EXPORT PACKAGING REQUIREMENTS:
  - Climate-resistant materials
  - International shipping standards
  - Country-specific regulations
  - Eco-friendly options preferred
  - Proper labeling and marking

• SHIPPING OPTIONS:
  - Sea freight: Cost-effective for bulk
  - Air freight: Fast but expensive
  - Courier: Small consignments
  - Container shipping: FCL vs LCL

🔍 QUALITY STANDARDS:
• INTERNATIONAL CERTIFICATIONS:
  - ISO standards
  - CE marking (Europe)
  - FDA approval (USA)
  - Organic certifications
  - Fair trade certifications

• TESTING & INSPECTION:
  - Pre-shipment inspection
  - Third-party quality certificates
  - Lab testing reports
  - Compliance certificates

🌐 DIGITAL EXPORT STRATEGIES:
• ONLINE PLATFORMS:
  - Amazon Global Selling
  - eBay International
  - Etsy Worldwide
  - IndiaMART Export
  - Tradeindia.com

• DIGITAL MARKETING:
  - SEO for global keywords
  - Social media in target countries
  - Email marketing campaigns
  - Trade portal listings
  - Virtual trade fair participation

📈 SCALING EXPORT BUSINESS:
• START SMALL:
  - Begin with neighboring countries
  - Test products in small quantities
  - Learn from initial experiences
  - Build relationships gradually

• GROWTH STRATEGIES:
  - Product diversification
  - Market expansion
  - Capacity building
  - Technology upgradation
  - Strategic partnerships

🎓 EXPORT TRAINING & SUPPORT:
• GOVERNMENT SUPPORT:
  - Export promotion councils
  - FIDR (Federation of Indian Export Organizations)
  - State export promotion agencies
  - Export training institutes

• PRACTICAL STEPS:
  - Join export-oriented trade associations
  - Attend export training programs
  - Participate in buyer-seller meets
  - Study successful export case studies

💡 SUCCESS MANTRAS:
• Quality is non-negotiable
• Timely delivery builds trust
• Cultural sensitivity matters
• Long-term relationship focus
• Continuous market research
• Regulatory compliance always

🏆 INDIAN EXPORT SUCCESS STORIES:
• Fabindia: Handicrafts to 20+ countries
• Titan: Jewelry exports to 40+ countries
• Amul: Dairy products global reach
• Tata Tea: International tea brand
• Raymond: Textile exports worldwide

Global trade is your gateway to prosperity! वैश्विक व्यापार आपकी समृद्धि का द्वार है!`,
        suggestions: ['Export documentation', 'Target markets', 'Quality standards', 'Government schemes']
      },

      // Legal and compliance
      legal: {
        keywords: ['legal', 'कानूनी', 'license', 'लाइसेंस', 'registration', 'पंजीकरण', 'compliance', 'tax', 'gst'],
        response: `⚖️ COMPLETE LEGAL & COMPLIANCE GUIDE | संपूर्ण कानूनी और अनुपालन गाइड:

📋 BUSINESS REGISTRATION OPTIONS:
• SOLE PROPRIETORSHIP:
  - Simplest form, no separate registration
  - Personal liability unlimited
  - Income taxed as personal income
  - Suitable for small businesses

• PARTNERSHIP FIRM:
  - 2-20 partners maximum
  - Partnership deed required
  - Joint and several liability
  - Registration optional but recommended

• LLP (Limited Liability Partnership):
  - Limited liability protection
  - Minimum 2 designated partners
  - Annual compliance required
  - Registration cost: ₹7,000-15,000

• PRIVATE LIMITED COMPANY:
  - Separate legal entity
  - Limited liability protection
  - Minimum 2 directors, 2 shareholders
  - Higher compliance requirements
  - Registration cost: ₹10,000-25,000

🏪 ESSENTIAL LICENSES & REGISTRATIONS:
• BASIC REQUIREMENTS:
  - Shop & Establishment License: ₹500-5,000
  - Trade License from local authority: ₹1,000-10,000
  - Fire Safety Certificate (if required)
  - Pollution Control Certificate (manufacturing)
  - Signage License (for outdoor displays)

• SECTOR-SPECIFIC LICENSES:
  - FSSAI (Food): ₹100-7,500
  - BIS (Manufacturing): ₹5,000-50,000
  - Drug License (Pharmaceuticals): ₹2,500-25,000
  - Textile License: State-specific
  - Export-Import License (IEC): ₹500

💰 TAX COMPLIANCE:
• GST (Goods and Services Tax):
  - Registration mandatory if turnover >₹20 lakh (₹10 lakh for NE states)
  - Monthly/Quarterly returns filing
  - Input tax credit benefits
  - Composition scheme for small businesses (1-8% tax)

• INCOME TAX:
  - Business income under "Profits and Gains from Business"
  - Presumptive taxation for eligible businesses
  - Advance tax payment if liability >₹10,000
  - ITR filing by July 31st

• TDS (Tax Deducted at Source):
  - On payments >₹30,000 to contractors
  - On rent >₹2.4 lakh annually
  - Monthly TDS returns
  - TDS certificates to deductees

👥 LABOR LAW COMPLIANCE:
• FACTORIES ACT (if applicable):
  - 10+ workers with power or 20+ without power
  - License from factory inspector
  - Safety measures mandatory
  - Worker welfare provisions

• CONTRACT LABOR ACT:
  - 20+ contract workers
  - License from labor department
  - Contractor registration
  - Welfare measures

• MINIMUM WAGES ACT:
  - State-specific minimum wages
  - Regular revision notifications
  - Proper wage records maintenance
  - Timely payment obligations

🛡️ INTELLECTUAL PROPERTY PROTECTION:
• TRADEMARK REGISTRATION:
  - Brand name and logo protection
  - 10-year validity, renewable
  - Cost: ₹4,500-9,000
  - Online application through IP India

• COPYRIGHT:
  - Automatic protection for creative works
  - Optional registration for stronger protection
  - Cost: ₹500-2,000
  - Lifetime + 60 years protection

• DESIGN REGISTRATION:
  - Product design protection
  - 10-year initial period, extendable to 15 years
  - Cost: ₹1,000-4,000
  - Novelty requirement

📝 CONTRACTS & AGREEMENTS:
• SUPPLIER AGREEMENTS:
  - Quality specifications
  - Delivery terms
  - Payment conditions
  - Penalty clauses

• CUSTOMER CONTRACTS:
  - Service level agreements
  - Terms and conditions
  - Liability limitations
  - Dispute resolution mechanisms

• EMPLOYMENT CONTRACTS:
  - Job descriptions
  - Compensation details
  - Confidentiality clauses
  - Termination conditions

🏦 BANKING & FINANCIAL COMPLIANCE:
• BUSINESS BANK ACCOUNT:
  - Separate account for business transactions
  - Required documents vary by bank
  - KYC compliance
  - Regular monitoring for suspicious transactions

• FINANCIAL RECORD KEEPING:
  - Books of accounts maintenance
  - Receipt and payment records
  - Asset and liability statements
  - Supporting vouchers preservation

🔒 DATA PROTECTION & PRIVACY:
• PERSONAL DATA PROTECTION:
  - Customer data security
  - Consent for data collection
  - Data breach notification
  - Right to data portability

• CYBER SECURITY:
  - Secure payment gateways
  - Regular software updates
  - Employee training on cyber threats
  - Data backup and recovery plans

⚠️ COMMON LEGAL PITFALLS TO AVOID:
• Operating without required licenses
• Ignoring tax compliance deadlines
• Inadequate contract documentation
• Intellectual property infringement
• Non-compliance with labor laws
• Poor record maintenance

📞 PROFESSIONAL SUPPORT:
• CHARTERED ACCOUNTANT: Tax and financial compliance
• COMPANY SECRETARY: Corporate law compliance
• LAWYER: Legal documentation and disputes
• TRADEMARK AGENT: IP protection
• LABOR CONSULTANT: Employment law compliance

💡 COMPLIANCE CALENDAR:
• Monthly: GST returns, TDS returns
• Quarterly: GST annual return, advance tax
• Annually: Income tax return, labor law returns
• As required: License renewals, audit reports

🎯 BEST PRACTICES:
• Maintain proper documentation
• Seek professional advice when needed
• Stay updated with law changes
• Regular compliance audits
• Technology adoption for record keeping

Legal compliance is not a choice - it's a business necessity! कानूनी अनुपालन विकल्प नहीं, व्यापारिक आवश्यकता है!`,
        suggestions: ['Business registration', 'License requirements', 'Tax compliance', 'Legal documentation']
      }
    };

    // Check which category the message belongs to
    for (const [category, data] of Object.entries(businessDatabase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return {
          response: data.response,
          confidence: 0.85,
          suggestions: data.suggestions,
          isAI: false
        };
      }
    }

    // Default response for unmatched queries
    return {
      response: `🌟 नमस्ते! मैं सखी हूं - आपकी व्यापारिक सफलता की साथी! 
Hello! I'm Sakhi - Your AI Business Success Partner! 🌟

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

🎯 **आप यह भी पूछ सकते हैं | You can also ask:**
• "मुझे ₹50,000 में कौन सा बिजनेस शुरू करना चाहिए?"
• "How to export handicrafts to USA?"
• "अचार बनाने के लिए कौन सा लाइसेंस चाहिए?"
• "Digital marketing कैसे करें?"
• "सरकारी योजनाएं महिलाओं के लिए?"

💡 **आपके सवाल का इंतजार है! Ready for your questions!**
अपना सवाल टाइप करें या 🎤 बटन दबाकर बोलें!
Type your question or press 🎤 to speak!`,
      confidence: 0.7,
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
      isAI: false
    };
  }

  private generateSuggestions(message: string): string[] {
    const allSuggestions = [
      // Business Starting
      'व्यापार कैसे शुरू करें?',
      'Business plan template',
      'Investment calculation',
      'Market research tips',
      
      // Funding & Loans
      'Mudra loan application',
      'Government schemes list',
      'Microfinance options',
      'Angel investor pitch',
      
      // Marketing & Sales
      'Digital marketing strategy',
      'Social media tips',
      'Pricing psychology',
      'Customer retention',
      
      // Food Business
      'FSSAI license process',
      'Food packaging ideas',
      'Recipe standardization',
      'Shelf life extension',
      
      // Handicrafts
      'Export procedures',
      'Design innovation',
      'Quality control',
      'Online selling platforms',
      
      // Agriculture
      'Organic farming benefits',
      'Crop selection guide',
      'Modern farming techniques',
      'Agri-processing ideas',
      
      // Export Business
      'Export documentation',
      'International quality standards',
      'Target market analysis',
      'Shipping procedures',
      
      // Technology & Digital
      'Website creation',
      'UPI setup guide',
      'E-commerce platforms',
      'Cybersecurity basics',
      
      // Legal & Compliance
      'Business registration types',
      'GST compliance',
      'Labor law requirements',
      'Trademark registration',
      
      // General Business
      'Scaling strategies',
      'Risk management',
      'Financial planning',
      'Success metrics',
      
      // Hindi Suggestions
      'कम पैसे में व्यापार',
      'घर से बिजनेस आइडिया',
      'महिला उद्यमी योजना',
      'डिजिटल पेमेंट सेटअप'
    ];
    
    return allSuggestions.sort(() => 0.5 - Math.random()).slice(0, 4);
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
          model: 'gpt-4',
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
