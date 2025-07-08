
import React from 'react';
import InstantSelect from './InstantSelect';

const InstantSelectDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Instant Select UI Demo
          </h1>
          <p className="text-gray-600">
            Experience lightning-fast selection with hover timing
          </p>
        </div>
        <InstantSelect />
      </div>
    </div>
  );
};

export default InstantSelectDemo;
