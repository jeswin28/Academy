import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  CreditCard,
  Shield,
  Lock,
  CheckCircle,
  Calendar,
  Users,
  Clock,
  MapPin
} from 'lucide-react';

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState('full-payment');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    agreeTerms: false,
    marketingEmails: true
  });

  const pricingPlans = [
    {
      id: 'full-payment',
      name: 'Full Payment',
      price: 12999,
      originalPrice: 14999,
      savings: 2000,
      description: 'Pay in full and save $2,000',
      features: [
        'Complete 90-day program',
        'All materials included',
        'Lifetime LMS access',
        'Career support',
        '1-on-1 mentorship'
      ]
    },
    {
      id: 'installment-3',
      name: '3-Month Plan',
      price: 4999,
      totalPrice: 14997,
      description: 'Split into 3 monthly payments',
      features: [
        'Complete 90-day program',
        'All materials included',
        'Lifetime LMS access',
        'Career support',
        '1-on-1 mentorship'
      ]
    },
    {
      id: 'installment-6',
      name: '6-Month Plan',
      price: 2699,
      totalPrice: 16194,
      description: 'Split into 6 monthly payments',
      features: [
        'Complete 90-day program',
        'All materials included',
        'Lifetime LMS access',
        'Career support',
        '1-on-1 mentorship'
      ]
    }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Processing payment...', { selectedPlan, formData });
    window.location.href = '/payment/success';
  };

  const selectedPlanData = pricingPlans.find(
    (plan) => plan.id === selectedPlan
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/cohorts"
              className="flex items-center text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Course Details
            </Link>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-600">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              {/* Course Info */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  MERN Stack Development Bootcamp
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Starts August 1, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>90 Days Intensive</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Limited to 25 Students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>On-site at Nexfern Campus</span>
                  </div>
                </div>
              </div>

              {/* Plan Selection */}
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-900">Choose Payment Plan</h4>
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPlan === plan.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="pricing-plan"
                          value={plan.id}
                          checked={selectedPlan === plan.id}
                          onChange={() => setSelectedPlan(plan.id)}
                          className="text-green-600 focus:ring-green-500"
                        />
                        <div>
                          <h5 className="font-medium text-gray-900">{plan.name}</h5>
                          <p className="text-sm text-gray-600">{plan.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">
                          ${plan.price.toLocaleString()}
                          {plan.id !== 'full-payment' && (
                            <span className="text-sm font-normal">/month</span>
                          )}
                        </div>
                        {plan.savings && (
                          <div className="text-sm text-green-600">
                            Save ${plan.savings.toLocaleString()}
                          </div>
                        )}
                        {plan.totalPrice && (
                          <div className="text-sm text-gray-500">
                            Total: ${plan.totalPrice.toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">
                    ${selectedPlanData?.price.toLocaleString()}
                    {selectedPlan !== 'full-payment' && '/month'}
                  </span>
                </div>
                {selectedPlan === 'full-payment' &&
                  selectedPlanData?.savings && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-600">Savings</span>
                      <span className="font-semibold text-green-600">
                        -${selectedPlanData.savings.toLocaleString()}
                      </span>
                    </div>
                  )}
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span>
                    ${selectedPlanData?.price.toLocaleString()}
                    {selectedPlan !== 'full-payment' && '/month'}
                  </span>
                </div>
                {selectedPlanData?.totalPrice && (
                  <p className="text-sm text-gray-500 mt-1">
                    Total program cost: ${selectedPlanData.totalPrice.toLocaleString()}
                  </p>
                )}
              </div>

              {/* What's Included */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
                <ul className="space-y-2">
                  {selectedPlanData?.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Personal Info & Address — Skipping unchanged for brevity */}

              {/* Payment Info */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <CreditCard className="h-6 w-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Payment Information</h2>
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>

                {/* Card fields — Skipping unchanged for brevity */}

                {/* Alternative Payment Methods */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Or pay with</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>PayPal</span>
                    </button>
                    <button
                      type="button"
                      className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Apple Pay</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* ✅ Fixed Terms and Conditions */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      required
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="mt-1 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                      I agree to the{' '}
                      <Link to="/terms" className="text-green-600 hover:text-green-700">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-green-600 hover:text-green-700">
                        Privacy Policy
                      </Link>{' '}
                      *
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="marketingEmails"
                      name="marketingEmails"
                      checked={formData.marketingEmails}
                      onChange={handleInputChange}
                      className="mt-1 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="marketingEmails" className="text-sm text-gray-700">
                      I would like to receive updates about new courses and special offers
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Lock className="h-5 w-5" />
                  <span>Complete Secure Payment</span>
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Your payment information is encrypted and secure. You will receive a confirmation email after successful payment.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
