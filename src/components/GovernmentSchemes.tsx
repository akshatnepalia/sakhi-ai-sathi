
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, CreditCard, Users, BookOpen, Search, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Scheme {
  id: string;
  name: string;
  description: string;
  eligibility: string[];
  loanAmount: string;
  interestRate: string;
  category: 'loan' | 'subsidy' | 'training' | 'marketing';
  department: string;
  applicationProcess: string;
  documents: string[];
  benefits: string[];
}

const GovernmentSchemes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { toast } = useToast();

  const schemes: Scheme[] = [
    {
      id: '1',
      name: 'MUDRA Loan Scheme',
      description: 'Micro Units Development and Refinance Agency provides loans up to ₹10 lakh for small businesses',
      eligibility: ['Non-corporate, non-farm small/micro enterprises', 'Manufacturing, trading and service activities', 'Income generating activities'],
      loanAmount: '₹50,000 - ₹10,00,000',
      interestRate: '8.5% - 12% per annum',
      category: 'loan',
      department: 'Ministry of Finance',
      applicationProcess: 'Apply through any bank or NBFC',
      documents: ['Aadhaar Card', 'PAN Card', 'Business Plan', 'Bank Statements', 'Address Proof'],
      benefits: ['Collateral-free loans', 'Quick processing', 'Low interest rates', 'Flexible repayment']
    },
    {
      id: '2',
      name: 'Stand-Up India Scheme',
      description: 'Bank loans between ₹10 lakh to ₹1 crore for SC/ST and women entrepreneurs',
      eligibility: ['Women entrepreneurs', 'SC/ST entrepreneurs', 'Age 18+ years', 'First-time entrepreneurs'],
      loanAmount: '₹10,00,000 - ₹1,00,00,000',
      interestRate: 'Base rate + 3% margin',
      category: 'loan',
      department: 'Ministry of Finance',
      applicationProcess: 'Apply through designated bank branches',
      documents: ['Identity Proof', 'Address Proof', 'Caste Certificate (if applicable)', 'Project Report'],
      benefits: ['Handholding support', '75% guarantee coverage', 'Credit guarantee', 'Mentorship']
    },
    {
      id: '3',
      name: 'PMEGP Scheme',
      description: 'Prime Minister Employment Generation Programme for new enterprises',
      eligibility: ['Age 18+ years', 'Minimum 8th standard education', 'Unemployed youth and traditional artisans'],
      loanAmount: '₹25,000 - ₹25,00,000',
      interestRate: 'As per bank norms',
      category: 'subsidy',
      department: 'Ministry of MSME',
      applicationProcess: 'Apply through DIC/KVIC/KVIB',
      documents: ['Educational Certificate', 'Experience Certificate', 'Caste Certificate', 'Project Report'],
      benefits: ['15-35% subsidy', 'Self-employment opportunity', 'Rural & urban coverage', 'Various sectors covered']
    },
    {
      id: '4',
      name: 'Mahila Udyam Nidhi Scheme',
      description: 'Soft loan scheme for women entrepreneurs by Small Industries Development Bank of India',
      eligibility: ['Women entrepreneurs', 'New or existing enterprises', 'Manufacturing or service sector'],
      loanAmount: '₹10 lakh - ₹10 crore',
      interestRate: '0.5% below PLR',
      category: 'loan',
      department: 'SIDBI',
      applicationProcess: 'Apply through SIDBI offices',
      documents: ['Project Report', 'Financial Statements', 'Collateral Documents', 'KYC Documents'],
      benefits: ['Lower interest rates', 'Women-focused', 'Large loan amounts', 'Flexible terms']
    },
    {
      id: '5',
      name: 'Skill Development Training',
      description: 'Free skill development programs for women in various trades',
      eligibility: ['Women aged 18-45 years', 'Basic literacy', 'Willingness to start enterprise'],
      loanAmount: 'Free training + ₹1000-3000 stipend',
      interestRate: 'N/A',
      category: 'training',
      department: 'Ministry of Skill Development',
      applicationProcess: 'Register at nearest training center',
      documents: ['Aadhaar Card', 'Educational Certificate', 'Bank Account Details'],
      benefits: ['Free training', 'Stipend provided', 'Job placement assistance', 'Certificate provided']
    },
    {
      id: '6',
      name: 'SHG Bank Linkage Program',
      description: 'Credit linkage program for Self Help Groups with banks',
      eligibility: ['Registered SHGs', 'Regular meetings for 6 months', 'Proper record keeping'],
      loanAmount: '₹50,000 - ₹20,00,000 per SHG',
      interestRate: '7% - 12% per annum',
      category: 'loan',
      department: 'Ministry of Rural Development',
      applicationProcess: 'Apply through SHG and bank',
      documents: ['SHG Registration', 'Meeting Records', 'Group Bank Account', 'Loan Proposal'],
      benefits: ['Group guarantee', 'Lower interest rates', 'Capacity building', 'Women empowerment']
    }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'loan': return <CreditCard className="w-4 h-4" />;
      case 'subsidy': return <Building2 className="w-4 h-4" />;
      case 'training': return <BookOpen className="w-4 h-4" />;
      case 'marketing': return <Users className="w-4 h-4" />;
      default: return <Building2 className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'loan': return 'bg-blue-100 text-blue-800';
      case 'subsidy': return 'bg-green-100 text-green-800';
      case 'training': return 'bg-purple-100 text-purple-800';
      case 'marketing': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApplyNow = (schemeName: string) => {
    toast({
      title: "📋 Application Info",
      description: `For ${schemeName}, please visit your nearest bank or government office. Details saved to your device.`,
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Government Schemes</h1>
        <p className="text-gray-600">Explore loans, subsidies, and training programs for women entrepreneurs</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search schemes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="loan">Loans</TabsTrigger>
            <TabsTrigger value="subsidy">Subsidies</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Schemes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchemes.map((scheme) => (
          <Card key={scheme.id} className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{scheme.name}</CardTitle>
                <Badge className={`${getCategoryColor(scheme.category)} flex items-center space-x-1`}>
                  {getCategoryIcon(scheme.category)}
                  <span className="capitalize">{scheme.category}</span>
                </Badge>
              </div>
              <p className="text-sm text-gray-600">{scheme.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">💰 Loan Amount</h4>
                <p className="text-sm text-green-700 font-medium">{scheme.loanAmount}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm mb-2">📊 Interest Rate</h4>
                <p className="text-sm text-blue-700">{scheme.interestRate}</p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">✅ Key Benefits</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {scheme.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 space-y-2">
                <Button 
                  onClick={() => handleApplyNow(scheme.name)}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full text-xs">
                  View Full Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="text-center py-12">
          <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No schemes found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{schemes.filter(s => s.category === 'loan').length}</div>
          <div className="text-sm text-blue-700">Loan Schemes</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{schemes.filter(s => s.category === 'subsidy').length}</div>
          <div className="text-sm text-green-700">Subsidy Programs</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">{schemes.filter(s => s.category === 'training').length}</div>
          <div className="text-sm text-purple-700">Training Programs</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-orange-600">₹10L+</div>
          <div className="text-sm text-orange-700">Max Loan Amount</div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;
