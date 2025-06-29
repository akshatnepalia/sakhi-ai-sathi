
export interface OfflineData {
  businessPlans: any[];
  calculations: any[];
  chatHistory: any[];
  userPreferences: any;
  lastSyncTime: number;
}

export const offlineService = {
  // Store data locally
  saveData: (key: string, data: any) => {
    try {
      localStorage.setItem(`sakhi_${key}`, JSON.stringify({
        data,
        timestamp: Date.now()
      }));
      console.log(`💾 Saved ${key} offline`);
    } catch (error) {
      console.error('Failed to save offline data:', error);
    }
  },

  // Retrieve data locally
  getData: (key: string) => {
    try {
      const stored = localStorage.getItem(`sakhi_${key}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.data;
      }
      return null;
    } catch (error) {
      console.error('Failed to retrieve offline data:', error);
      return null;
    }
  },

  // Check if app is offline
  isOffline: () => {
    return !navigator.onLine;
  },

  // Get offline business plan templates
  getOfflineBusinessTemplates: () => {
    return [
      {
        id: 'pickle',
        name: 'अचार बिजनेस (Pickle Business)',
        description: 'घर से अचार बनाकर बेचने का व्यापार',
        investment: 15000,
        monthlyRevenue: 8000,
        profitMargin: 45,
        items: ['मसाले', 'तेल', 'कांच के जार', 'लेबल']
      },
      {
        id: 'tailoring',
        name: 'सिलाई का काम (Tailoring)',
        description: 'कपड़े सिलने और अल्टरेशन का व्यापार',
        investment: 25000,
        monthlyRevenue: 12000,
        profitMargin: 60,
        items: ['सिलाई मशीन', 'कपड़ा', 'धागा', 'बटन']
      },
      {
        id: 'beauty',
        name: 'ब्यूटी पार्लर (Beauty Parlor)',
        description: 'महिलाओं के लिए ब्यूटी सेवाएं',
        investment: 40000,
        monthlyRevenue: 18000,
        profitMargin: 70,
        items: ['चेयर', 'मिरर', 'कॉस्मेटिक्स', 'उपकरण']
      }
    ];
  },

  // Get offline financial tips
  getOfflineFinancialTips: () => {
    return [
      {
        title: 'मुनाफा कैसे बढ़ाएं',
        tip: 'अपने प्रोडक्ट की क्वालिटी बनाए रखें और कस्टमर सर्विस पर ध्यान दें।'
      },
      {
        title: 'पैसा कैसे बचाएं',
        tip: 'हर दिन का हिसाब रखें और बिना जरूरत के खर्च न करें।'
      },
      {
        title: 'ग्राहक कैसे बढ़ाएं',
        tip: 'अपने ग्राहकों से अच्छा व्यवहार करें और उन्हें दूसरों को रेफर करने के लिए कहें।'
      }
    ];
  },

  // Cache frequently used data
  cacheForOffline: () => {
    const templates = offlineService.getOfflineBusinessTemplates();
    const tips = offlineService.getOfflineFinancialTips();
    
    offlineService.saveData('business_templates', templates);
    offlineService.saveData('financial_tips', tips);
    offlineService.saveData('last_cache_time', Date.now());
  },

  // Check if cached data is still valid (24 hours)
  isCacheValid: () => {
    const lastCache = offlineService.getData('last_cache_time');
    if (!lastCache) return false;
    
    const oneDayInMs = 24 * 60 * 60 * 1000;
    return (Date.now() - lastCache) < oneDayInMs;
  }
};

// Initialize offline capabilities
if (typeof window !== 'undefined') {
  // Cache data when online
  window.addEventListener('online', () => {
    console.log('📶 Back online - caching data');
    offlineService.cacheForOffline();
  });

  // Handle offline state
  window.addEventListener('offline', () => {
    console.log('📵 Gone offline - using cached data');
  });

  // Initial cache if online
  if (navigator.onLine && !offlineService.isCacheValid()) {
    offlineService.cacheForOffline();
  }
}
