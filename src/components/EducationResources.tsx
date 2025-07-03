
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  Video, 
  Download, 
  Search, 
  Star, 
  Clock, 
  Users, 
  Award,
  FileText,
  Play,
  Bookmark,
  Filter,
  ChevronRight,
  Globe,
  Calendar
} from 'lucide-react';

const EducationResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'व्यापार शुरू करने की मूल बातें',
      englishTitle: 'Business Basics for Beginners',
      description: 'व्यापार शुरू करने के लिए आवश्यक जानकारी और कौशल',
      duration: '4 सप्ताह',
      level: 'Beginner',
      students: 2500,
      rating: 4.8,
      category: 'business',
      language: 'hindi',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=200&fit=crop',
      modules: 8,
      certificate: true,
      free: true
    },
    {
      id: 2,
      title: 'Digital Marketing Mastery',
      englishTitle: 'Complete Digital Marketing Course',
      description: 'सोशल मीडिया, SEO, और ऑनलाइन मार्केटिंग की संपूर्ण जानकारी',
      duration: '6 सप्ताह',
      level: 'Intermediate',
      students: 1800,
      rating: 4.9,
      category: 'marketing',
      language: 'bilingual',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
      modules: 12,
      certificate: true,
      free: false
    },
    {
      id: 3,
      title: 'Financial Planning & Management',
      englishTitle: 'Money Management for Entrepreneurs',
      description: 'व्यापारिक वित्त प्रबंधन और निवेश की रणनीतियां',
      duration: '5 सप्ताह',
      level: 'Intermediate',
      students: 2100,
      rating: 4.7,
      category: 'finance',
      language: 'english',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
      modules: 10,
      certificate: true,
      free: true
    },
    {
      id: 4,
      title: 'खाद्य व्यापार प्रशिक्षण',
      englishTitle: 'Food Business Training Program',
      description: 'खाद्य उत्पादन, पैकेजिंग और बिक्री की संपूर्ण गाइड',
      duration: '8 सप्ताह',
      level: 'Advanced',
      students: 1500,
      rating: 4.9,
      category: 'food',
      language: 'hindi',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop',
      modules: 15,
      certificate: true,
      free: false
    },
    {
      id: 5,
      title: 'हस्तशिल्प व्यापार गाइड',
      englishTitle: 'Handicrafts Business Guide',
      description: 'पारंपरिक शिल्प से आधुनिक व्यापार तक का सफर',
      duration: '6 सप्ताह',
      level: 'Beginner',
      students: 1200,
      rating: 4.6,
      category: 'handicrafts',
      language: 'bilingual',
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=200&fit=crop',
      modules: 9,
      certificate: true,
      free: true
    },
    {
      id: 6,
      title: 'Export Business Fundamentals',
      englishTitle: 'International Trade & Export',
      description: 'अंतर्राष्ट्रीय व्यापार और निर्यात की बुनियादी बातें',
      duration: '7 सप्ताह',
      level: 'Advanced',
      students: 900,
      rating: 4.8,
      category: 'export',
      language: 'english',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop',
      modules: 13,
      certificate: true,
      free: false
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'व्यापारिक योजना टेम्प्लेट',
      type: 'template',
      format: 'PDF',
      size: '2.5 MB',
      downloads: 5400,
      category: 'business',
      free: true,
      description: 'पूर्ण व्यापारिक योजना बनाने के लिए तैयार टेम्प्लेट'
    },
    {
      id: 2,
      title: 'Financial Calculator Spreadsheet',
      type: 'tool',
      format: 'Excel',
      size: '1.8 MB',
      downloads: 3200,
      category: 'finance',
      free: true,
      description: 'ROI, EMI और लाभ-हानि की गणना के लिए'
    },
    {
      id: 3,
      title: 'सरकारी योजनाओं की सूची 2024',
      type: 'guide',
      format: 'PDF',
      size: '4.2 MB',
      downloads: 7800,
      category: 'government',
      free: true,
      description: 'महिला उद्यमियों के लिए सभी सरकारी योजनाएं'
    },
    {
      id: 4,
      title: 'Marketing Strategy Workbook',
      type: 'workbook',
      format: 'PDF',
      size: '3.1 MB',
      downloads: 2900,
      category: 'marketing',
      free: false,
      description: 'Step-by-step marketing plan development'
    },
    {
      id: 5,
      title: 'Export Documentation Checklist',
      type: 'checklist',
      format: 'PDF',
      size: '800 KB',
      downloads: 1500,
      category: 'export',
      free: true,
      description: 'निर्यात के लिए आवश्यक दस्तावेजों की सूची'
    }
  ];

  const webinars = [
    {
      id: 1,
      title: 'महिला उद्यमिता: सफलता की कहानियां',
      date: '15 दिसंबर 2024',
      time: '11:00 AM - 12:30 PM',
      speaker: 'प्रिया शर्मा, सफल उद्यमी',
      registered: 450,
      category: 'success-stories',
      live: false
    },
    {
      id: 2,
      title: 'Digital Payment Solutions for Small Business',
      date: '18 दिसंबर 2024',
      time: '2:00 PM - 3:30 PM',
      speaker: 'राहुल गुप्ता, फिनटेक एक्सपर्ट',
      registered: 320,
      category: 'technology',
      live: true
    },
    {
      id: 3,
      title: 'Food Safety & FSSAI Compliance',
      date: '22 दिसंबर 2024',
      time: '10:00 AM - 11:30 AM',
      speaker: 'डॉ. अनिता पाल, फूड सेफ्टी एक्सपर्ट',
      registered: 280,
      category: 'food-business',
      live: false
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.englishTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || course.language === selectedLanguage;
    
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  const categories = [
    { id: 'all', name: 'सभी कोर्सेस', count: courses.length },
    { id: 'business', name: 'व्यापार', count: courses.filter(c => c.category === 'business').length },
    { id: 'marketing', name: 'मार्केटिंग', count: courses.filter(c => c.category === 'marketing').length },
    { id: 'finance', name: 'वित्त', count: courses.filter(c => c.category === 'finance').length },
    { id: 'food', name: 'खाद्य व्यापार', count: courses.filter(c => c.category === 'food').length },
    { id: 'handicrafts', name: 'हस्तशिल्प', count: courses.filter(c => c.category === 'handicrafts').length },
    { id: 'export', name: 'निर्यात', count: courses.filter(c => c.category === 'export').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center">
            <BookOpen className="w-10 h-10 mr-3 text-blue-600" />
            शिक्षा संसाधन | Education Resources
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            व्यापारिक प्रशिक्षण सामग्री और शैक्षणिक संसाधन पुस्तकालय
          </p>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="कोर्स खोजें..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">सभी श्रेणियां</option>
              <option value="business">व्यापार</option>
              <option value="marketing">मार्केटिंग</option>
              <option value="finance">वित्त</option>
              <option value="food">खाद्य व्यापार</option>
              <option value="handicrafts">हस्तशिल्प</option>
              <option value="export">निर्यात</option>
            </select>
            
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">सभी भाषाएं</option>
              <option value="hindi">हिंदी</option>
              <option value="english">English</option>
              <option value="bilingual">द्विभाषी</option>
            </select>
          </div>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="courses" className="flex items-center">
              <Video className="w-4 h-4 mr-2" />
              कोर्सेस
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              संसाधन
            </TabsTrigger>
            <TabsTrigger value="webinars" className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              वेबिनार
            </TabsTrigger>
            <TabsTrigger value="certificates" className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              प्रमाणपत्र
            </TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Categories Sidebar */}
              <div className="md:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">श्रेणियां</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${
                          selectedCategory === category.id 
                            ? 'bg-blue-100 text-blue-700 font-medium' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <span>{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Courses Grid */}
              <div className="md:col-span-3">
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredCourses.map(course => (
                    <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 flex gap-2">
                          {course.free && (
                            <Badge className="bg-green-500 text-white">FREE</Badge>
                          )}
                          {course.certificate && (
                            <Badge className="bg-blue-500 text-white">
                              <Award className="w-3 h-3 mr-1" />
                              Certificate
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{course.level}</Badge>
                          <div className="flex items-center text-yellow-500">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="ml-1 text-sm font-medium text-gray-600">
                              {course.rating}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-1">
                          {course.englishTitle}
                        </p>
                        <p className="text-gray-600 text-sm mb-4">
                          {course.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {course.students.toLocaleString()} students
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {course.modules} मॉड्यूल
                          </span>
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            <Play className="w-4 h-4 mr-2" />
                            शुरू करें
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources">
            <div className="grid md:grid-cols-3 gap-6">
              {resources.map(resource => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      {resource.free ? (
                        <Badge className="bg-green-500 text-white">FREE</Badge>
                      ) : (
                        <Badge variant="outline">Premium</Badge>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{resource.format} • {resource.size}</span>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {resource.downloads.toLocaleString()}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                      <Download className="w-4 h-4 mr-2" />
                      डाउनलोड करें
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Webinars Tab */}
          <TabsContent value="webinars">
            <div className="space-y-6">
              {webinars.map(webinar => (
                <Card key={webinar.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-semibold text-gray-800 mr-3">
                            {webinar.title}
                          </h3>
                          {webinar.live && (
                            <Badge className="bg-red-500 text-white animate-pulse">
                              LIVE
                            </Badge>
                          )}
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {webinar.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {webinar.time}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {webinar.registered} registered
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4">
                          स्पीकर: {webinar.speaker}
                        </p>
                      </div>
                      
                      <div className="ml-6">
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          {webinar.live ? 'Join Live' : 'Register'}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates">
            <div className="text-center py-12">
              <Award className="w-24 h-24 mx-auto text-yellow-500 mb-6" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                प्रमाणपत्र अर्जित करें
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                कोर्स पूरा करने पर सरकारी मान्यता प्राप्त प्रमाणपत्र प्राप्त करें
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="text-center p-6">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">सरकारी मान्यता</h3>
                  <p className="text-gray-600 text-sm">
                    भारत सरकार द्वारा मान्यता प्राप्त प्रमाणपत्र
                  </p>
                </Card>
                
                <Card className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">विश्वव्यापी मान्यता</h3>
                  <p className="text-gray-600 text-sm">
                    अंतर्राष्ट्रीय स्तर पर मान्य प्रमाणपत्र
                  </p>
                </Card>
                
                <Card className="text-center p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bookmark className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">आजीवन वैधता</h3>
                  <p className="text-gray-600 text-sm">
                    प्रमाणपत्र की आजीवन वैधता
                  </p>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EducationResources;
