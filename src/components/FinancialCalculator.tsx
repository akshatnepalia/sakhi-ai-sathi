
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, TrendingUp, PiggyBank, CreditCard, DollarSign } from 'lucide-react';

const FinancialCalculator = () => {
  // Profit Margin Calculator
  const [profitData, setProfitData] = useState({
    costPrice: 0,
    sellingPrice: 0,
    result: { margin: 0, profit: 0 }
  });

  // ROI Calculator
  const [roiData, setRoiData] = useState({
    initialInvestment: 0,
    finalValue: 0,
    timePeriod: 1,
    result: { roi: 0, annualizedRoi: 0 }
  });

  // Loan EMI Calculator
  const [loanData, setLoanData] = useState({
    principal: 0,
    rate: 0,
    tenure: 0,
    result: { emi: 0, totalAmount: 0, totalInterest: 0 }
  });

  // Break-even Calculator
  const [breakEvenData, setBreakEvenData] = useState({
    fixedCosts: 0,
    variableCostPerUnit: 0,
    sellingPricePerUnit: 0,
    result: { breakEvenUnits: 0, breakEvenRevenue: 0 }
  });

  const calculateProfitMargin = () => {
    const profit = profitData.sellingPrice - profitData.costPrice;
    const margin = profitData.sellingPrice > 0 ? (profit / profitData.sellingPrice) * 100 : 0;
    setProfitData({
      ...profitData,
      result: { margin: parseFloat(margin.toFixed(2)), profit }
    });
  };

  const calculateROI = () => {
    const roi = roiData.initialInvestment > 0 ? 
      ((roiData.finalValue - roiData.initialInvestment) / roiData.initialInvestment) * 100 : 0;
    const annualizedRoi = roiData.timePeriod > 0 ? roi / roiData.timePeriod : roi;
    setRoiData({
      ...roiData,
      result: { 
        roi: parseFloat(roi.toFixed(2)), 
        annualizedRoi: parseFloat(annualizedRoi.toFixed(2)) 
      }
    });
  };

  const calculateEMI = () => {
    if (loanData.principal > 0 && loanData.rate > 0 && loanData.tenure > 0) {
      const monthlyRate = loanData.rate / (12 * 100);
      const numberOfPayments = loanData.tenure * 12;
      
      const emi = (loanData.principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                  (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      const totalAmount = emi * numberOfPayments;
      const totalInterest = totalAmount - loanData.principal;
      
      setLoanData({
        ...loanData,
        result: {
          emi: parseFloat(emi.toFixed(2)),
          totalAmount: parseFloat(totalAmount.toFixed(2)),
          totalInterest: parseFloat(totalInterest.toFixed(2))
        }
      });
    }
  };

  const calculateBreakEven = () => {
    const contributionPerUnit = breakEvenData.sellingPricePerUnit - breakEvenData.variableCostPerUnit;
    const breakEvenUnits = contributionPerUnit > 0 ? 
      Math.ceil(breakEvenData.fixedCosts / contributionPerUnit) : 0;
    const breakEvenRevenue = breakEvenUnits * breakEvenData.sellingPricePerUnit;
    
    setBreakEvenData({
      ...breakEvenData,
      result: { breakEvenUnits, breakEvenRevenue }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Business Financial Calculator</h1>
        <p className="text-gray-600">Calculate profits, ROI, loans, and break-even points</p>
      </div>

      <Tabs defaultValue="profit" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profit">Profit Margin</TabsTrigger>
          <TabsTrigger value="roi">ROI Calculator</TabsTrigger>
          <TabsTrigger value="loan">Loan EMI</TabsTrigger>
          <TabsTrigger value="breakeven">Break-even</TabsTrigger>
        </TabsList>

        {/* Profit Margin Calculator */}
        <TabsContent value="profit">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Profit Margin Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="costPrice">Cost Price (₹)</Label>
                  <Input
                    id="costPrice"
                    type="number"
                    value={profitData.costPrice}
                    onChange={(e) => setProfitData({...profitData, costPrice: Number(e.target.value)})}
                    placeholder="Enter cost price"
                  />
                </div>
                <div>
                  <Label htmlFor="sellingPrice">Selling Price (₹)</Label>
                  <Input
                    id="sellingPrice"
                    type="number"
                    value={profitData.sellingPrice}
                    onChange={(e) => setProfitData({...profitData, sellingPrice: Number(e.target.value)})}
                    placeholder="Enter selling price"
                  />
                </div>
                <Button onClick={calculateProfitMargin} className="w-full">
                  Calculate Profit Margin
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-lg font-semibold text-green-800">
                      Profit: ₹{profitData.result.profit.toLocaleString()}
                    </p>
                    <p className="text-lg font-semibold text-green-800">
                      Margin: {profitData.result.margin}%
                    </p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2"><strong>Formula:</strong></p>
                    <p>Profit = Selling Price - Cost Price</p>
                    <p>Margin = (Profit ÷ Selling Price) × 100</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ROI Calculator */}
        <TabsContent value="roi">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Return on Investment Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="initialInvestment">Initial Investment (₹)</Label>
                  <Input
                    id="initialInvestment"
                    type="number"
                    value={roiData.initialInvestment}
                    onChange={(e) => setRoiData({...roiData, initialInvestment: Number(e.target.value)})}
                    placeholder="Enter initial investment"
                  />
                </div>
                <div>
                  <Label htmlFor="finalValue">Final Value (₹)</Label>
                  <Input
                    id="finalValue"
                    type="number"
                    value={roiData.finalValue}
                    onChange={(e) => setRoiData({...roiData, finalValue: Number(e.target.value)})}
                    placeholder="Enter final value"
                  />
                </div>
                <div>
                  <Label htmlFor="timePeriod">Time Period (Years)</Label>
                  <Input
                    id="timePeriod"
                    type="number"
                    value={roiData.timePeriod}
                    onChange={(e) => setRoiData({...roiData, timePeriod: Number(e.target.value)})}
                    placeholder="Enter time period"
                  />
                </div>
                <Button onClick={calculateROI} className="w-full">
                  Calculate ROI
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-lg font-semibold text-blue-800">
                      Total ROI: {roiData.result.roi}%
                    </p>
                    <p className="text-lg font-semibold text-blue-800">
                      Annual ROI: {roiData.result.annualizedRoi}%
                    </p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2"><strong>Formula:</strong></p>
                    <p>ROI = ((Final Value - Initial Investment) ÷ Initial Investment) × 100</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Loan EMI Calculator */}
        <TabsContent value="loan">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Loan EMI Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="principal">Loan Amount (₹)</Label>
                  <Input
                    id="principal"
                    type="number"
                    value={loanData.principal}
                    onChange={(e) => setLoanData({...loanData, principal: Number(e.target.value)})}
                    placeholder="Enter loan amount"
                  />
                </div>
                <div>
                  <Label htmlFor="rate">Interest Rate (% per annum)</Label>
                  <Input
                    id="rate"
                    type="number"
                    step="0.1"
                    value={loanData.rate}
                    onChange={(e) => setLoanData({...loanData, rate: Number(e.target.value)})}
                    placeholder="Enter interest rate"
                  />
                </div>
                <div>
                  <Label htmlFor="tenure">Loan Tenure (Years)</Label>
                  <Input
                    id="tenure"
                    type="number"
                    value={loanData.tenure}
                    onChange={(e) => setLoanData({...loanData, tenure: Number(e.target.value)})}
                    placeholder="Enter loan tenure"
                  />
                </div>
                <Button onClick={calculateEMI} className="w-full">
                  Calculate EMI
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg space-y-2">
                    <p className="text-lg font-semibold text-purple-800">
                      Monthly EMI: ₹{loanData.result.emi.toLocaleString()}
                    </p>
                    <p className="text-sm text-purple-700">
                      Total Amount: ₹{loanData.result.totalAmount.toLocaleString()}
                    </p>
                    <p className="text-sm text-purple-700">
                      Total Interest: ₹{loanData.result.totalInterest.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2"><strong>Popular Loan Schemes:</strong></p>
                    <p>• MUDRA Loan: Up to ₹10 lakh</p>
                    <p>• SHG Loans: Low interest rates</p>
                    <p>• Stand-up India: For women entrepreneurs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Break-even Calculator */}
        <TabsContent value="breakeven">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PiggyBank className="w-5 h-5 mr-2" />
                  Break-even Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="fixedCosts">Fixed Costs (₹/month)</Label>
                  <Input
                    id="fixedCosts"
                    type="number"
                    value={breakEvenData.fixedCosts}
                    onChange={(e) => setBreakEvenData({...breakEvenData, fixedCosts: Number(e.target.value)})}
                    placeholder="Rent, salary, etc."
                  />
                </div>
                <div>
                  <Label htmlFor="variableCostPerUnit">Variable Cost per Unit (₹)</Label>
                  <Input
                    id="variableCostPerUnit"
                    type="number"
                    value={breakEvenData.variableCostPerUnit}
                    onChange={(e) => setBreakEvenData({...breakEvenData, variableCostPerUnit: Number(e.target.value)})}
                    placeholder="Material cost per product"
                  />
                </div>
                <div>
                  <Label htmlFor="sellingPricePerUnit">Selling Price per Unit (₹)</Label>
                  <Input
                    id="sellingPricePerUnit"
                    type="number"
                    value={breakEvenData.sellingPricePerUnit}
                    onChange={(e) => setBreakEvenData({...breakEvenData, sellingPricePerUnit: Number(e.target.value)})}
                    placeholder="Selling price per product"
                  />
                </div>
                <Button onClick={calculateBreakEven} className="w-full">
                  Calculate Break-even
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-lg font-semibold text-orange-800">
                      Break-even Units: {breakEvenData.result.breakEvenUnits} units/month
                    </p>
                    <p className="text-lg font-semibold text-orange-800">
                      Break-even Revenue: ₹{breakEvenData.result.breakEvenRevenue.toLocaleString()}/month
                    </p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2"><strong>Formula:</strong></p>
                    <p>Break-even Units = Fixed Costs ÷ (Selling Price - Variable Cost)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FinancialCalculator;
