
export const whatsappService = {
  shareBusinessPlan: (businessPlan: any) => {
    const message = `🚀 *My Business Plan - ${businessPlan.businessName}*\n\n` +
      `📋 *Business Type:* ${businessPlan.businessType}\n` +
      `💰 *Investment:* ₹${businessPlan.investment?.toLocaleString()}\n` +
      `📈 *Monthly Revenue:* ₹${businessPlan.monthlyRevenue?.toLocaleString()}\n` +
      `⏰ *Break-even:* ${businessPlan.breakEvenMonths} months\n\n` +
      `✨ Created with SakhiCopilot - Your Business Companion\n` +
      `🌐 Join the community: https://sakhicopilot.com`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  },

  shareCalculation: (calculation: any) => {
    const message = `🧮 *Financial Calculation Results*\n\n` +
      `📊 *Type:* ${calculation.type}\n` +
      `💵 *Amount:* ₹${calculation.amount?.toLocaleString()}\n` +
      `📈 *Result:* ₹${calculation.result?.toLocaleString()}\n\n` +
      `✨ Calculated with SakhiCopilot\n` +
      `🌐 Get your business insights: https://sakhicopilot.com`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  },

  shareScheme: (scheme: any) => {
    const message = `🏛️ *Government Scheme Information*\n\n` +
      `📋 *Scheme:* ${scheme.name}\n` +
      `💰 *Loan Amount:* ${scheme.loanAmount}\n` +
      `📊 *Interest Rate:* ${scheme.interestRate}\n` +
      `🏢 *Department:* ${scheme.department}\n\n` +
      `✨ Found on SakhiCopilot\n` +
      `🌐 Discover more schemes: https://sakhicopilot.com`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  },

  inviteFriend: () => {
    const message = `🌟 *SakhiCopilot - Your Business Companion*\n\n` +
      `मैंने एक बहुत अच्छा ऐप खोजा है जो महिला उद्यमिता के लिए है!\n\n` +
      `✅ व्यापारिक सलाह और मार्गदर्शन\n` +
      `✅ बिजनेस प्लान बनाना\n` +
      `✅ फाइनेंशियल कैलकुलेटर\n` +
      `✅ सरकारी योजनाएं\n` +
      `✅ कम्युनिटी फोरम\n` +
      `✅ हिंदी और अंग्रेजी में\n\n` +
      `🔗 Join now: https://sakhicopilot.com`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  }
};
