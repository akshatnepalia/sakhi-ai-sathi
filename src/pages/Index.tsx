
import React from 'react';
import SakhiCopilotApp from "@/components/SakhiCopilotApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Background Image */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">SakhiCopilot</h1>
            <p className="text-xl mb-2">महिला उद्यमिता सशक्तिकरण</p>
            <p className="text-lg">Empowering Women Entrepreneurs</p>
          </div>
        </div>
      </div>

      {/* Feature Images Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">सशक्तिकरण की कहानी | Empowerment Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop" 
                alt="Women entrepreneurs collaborating"
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">सहयोग और नेटवर्किंग</h3>
              <p className="text-gray-600">Building connections and collaborative networks</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop" 
                alt="Woman using technology for business"
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">डिजिटल सशक्तिकरण</h3>
              <p className="text-gray-600">Digital empowerment through technology</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop" 
                alt="Business growth and success"
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">व्यापारिक विकास</h3>
              <p className="text-gray-600">Business growth and development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">तकनीकी नवाचार | Technology Innovation</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                alt="Coding and development"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Solutions</h3>
              <p className="text-gray-600 mb-4">
                Leveraging artificial intelligence to provide personalized business guidance, 
                financial planning, and marketing solutions tailored for women entrepreneurs.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop" 
                alt="Technology infrastructure"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">प्रभाव और परिणाम | Impact & Results</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" 
                alt="Digital tools"
                className="w-full h-32 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-blue-600">10,000+</h3>
              <p className="text-gray-600">Women Empowered</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop" 
                alt="Business planning"
                className="w-full h-32 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-green-600">5,000+</h3>
              <p className="text-gray-600">Business Plans Created</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop" 
                alt="Community support"
                className="w-full h-32 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-purple-600">50+</h3>
              <p className="text-gray-600">Cities Covered</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop" 
                alt="Success stories"
                className="w-full h-32 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-orange-600">₹10 Cr+</h3>
              <p className="text-gray-600">Revenue Generated</p>
            </div>
          </div>
        </div>
      </div>

      <SakhiCopilotApp />
    </div>
  );
};

export default Index;
