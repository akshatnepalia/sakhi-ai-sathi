
import React, { useState, useEffect } from 'react';
import { Check, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SelectOption {
  id: string;
  label: string;
  value: string;
  color: string;
}

const options: SelectOption[] = [
  { id: '1', label: 'Business Plan', value: 'business-plan', color: 'bg-blue-500' },
  { id: '2', label: 'Financial Calculator', value: 'calculator', color: 'bg-green-500' },
  { id: '3', label: 'Government Schemes', value: 'schemes', color: 'bg-purple-500' },
  { id: '4', label: 'Education Resources', value: 'education', color: 'bg-orange-500' },
  { id: '5', label: 'Community Forum', value: 'community', color: 'bg-pink-500' },
];

const InstantSelect = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null);
  const [countdown, setCountdown] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            // Auto-select the hovered option when countdown reaches 0
            if (hoveredOption) {
              const option = options.find(opt => opt.id === hoveredOption);
              if (option) {
                setSelectedOption(option);
              }
            }
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isActive, countdown, hoveredOption]);

  const handleMouseEnter = (optionId: string) => {
    setHoveredOption(optionId);
    if (!isActive) {
      setIsActive(true);
      setCountdown(10); // 1 second = 10 * 100ms
    }
  };

  const handleMouseLeave = () => {
    setHoveredOption(null);
    setIsActive(false);
    setCountdown(0);
  };

  const handleManualSelect = (option: SelectOption) => {
    setSelectedOption(option);
    setIsActive(false);
    setCountdown(0);
  };

  const resetSelection = () => {
    setSelectedOption(null);
    setIsActive(false);
    setCountdown(0);
    setHoveredOption(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Timer className="w-5 h-5 text-blue-500" />
            <span>Instant Select UI</span>
          </CardTitle>
          <p className="text-sm text-gray-600">
            Hover over an option for 1 second to auto-select, or click to select instantly
          </p>
        </CardHeader>
        <CardContent>
          {/* Selection Status */}
          <div className="mb-6">
            {selectedOption ? (
              <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${selectedOption.color}`}></div>
                  <span className="font-medium text-green-800">
                    Selected: {selectedOption.label}
                  </span>
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <Button onClick={resetSelection} variant="outline" size="sm">
                  Reset
                </Button>
              </div>
            ) : (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center text-gray-600">
                No option selected
              </div>
            )}
          </div>

          {/* Timer Display */}
          {isActive && (
            <div className="mb-4 text-center">
              <Badge variant="secondary" className="animate-pulse">
                Auto-selecting in: {(countdown / 10).toFixed(1)}s
              </Badge>
            </div>
          )}

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {options.map((option) => (
              <div
                key={option.id}
                className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedOption?.id === option.id
                    ? 'border-green-500 bg-green-50'
                    : hoveredOption === option.id
                    ? 'border-blue-500 bg-blue-50 scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onMouseEnter={() => handleMouseEnter(option.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleManualSelect(option)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full ${option.color}`}></div>
                  <span className="font-medium">{option.label}</span>
                </div>
                
                {/* Progress bar for countdown */}
                {hoveredOption === option.id && isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-lg overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-100 ease-linear"
                      style={{ width: `${100 - (countdown / 10 * 100)}%` }}
                    ></div>
                  </div>
                )}

                {/* Selected indicator */}
                {selectedOption?.id === option.id && (
                  <div className="absolute top-2 right-2">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">How it works:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Hover over any option to start the 1-second countdown</li>
              <li>• The option will be auto-selected when the timer reaches zero</li>
              <li>• Click any option to select it instantly</li>
              <li>• Move your mouse away to cancel the countdown</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstantSelect;
