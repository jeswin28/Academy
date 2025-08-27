import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowRight, Phone, Mail, RefreshCw } from 'lucide-react';

const PaymentCancel = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="h-12 w-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Cancelled
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your payment was cancelled and no charges were made to your account. 
            Your spot in the MERN Stack Development Bootcamp is still available.
          </p>
        </div>

        {/* What Happened */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happened?</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Your payment process was interrupted or cancelled. This could happen for several reasons:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You clicked the "Cancel" or "Back" button during payment</li>
              <li>Your browser session timed out</li>
              <li>There was a temporary issue with the payment processor</li>
              <li>You decided to review your purchase before completing</li>
            </ul>
            <p className="font-medium text-gray-900">
              Don't worry - no charges were made to your payment method, and your information is secure.
            </p>
          </div>
        </div>

        {/* Course Still Available */}
        <div className="bg-green-50 rounded-xl p-8 mb-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Spot is Still Available!</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">MERN Stack Development Bootcamp</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Start Date:</span>
                  <span className="font-medium">August 1, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">90 Days Intensive</span>
                </div>
                <div className="flex justify-between">
                  <span>Spots Remaining:</span>
                  <span className="font-medium text-orange-600">18/25</span>
                </div>
                <div className="flex justify-between">
                  <span>Full Payment Price:</span>
                  <span className="font-medium text-green-600">$12,999 (Save $2,000)</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 mb-4">
                Limited spots are filling up quickly. Complete your enrollment today to secure your place in this transformative program.
              </p>
              <div className="bg-orange-100 p-4 rounded-lg">
                <p className="text-orange-800 text-sm font-medium">
                  ⏰ Early bird pricing ends in 15 days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Options */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Would You Like to Do?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/checkout"
              className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors group"
            >
              <div className="flex items-center justify-between mb-3">
                <RefreshCw className="h-8 w-8" />
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Try Payment Again</h3>
              <p className="text-green-100 text-sm">
                Return to the secure checkout page and complete your enrollment
              </p>
            </Link>

            <Link
              to="/cohorts"
              className="border-2 border-gray-200 p-6 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-3">
                <ArrowRight className="h-8 w-8 text-gray-600 rotate-180" />
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Review Course Details</h3>
              <p className="text-gray-600 text-sm">
                Learn more about the curriculum, instructors, and what's included
              </p>
            </Link>
          </div>
        </div>

        {/* Alternative Options */}
        <div className="bg-blue-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Different Payment Options?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3x</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3-Month Plan</h3>
              <p className="text-gray-600 text-sm mb-3">
                Split your payment into 3 monthly installments of $4,999
              </p>
              <Link
                to="/checkout"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Choose This Plan →
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">6x</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">6-Month Plan</h3>
              <p className="text-gray-600 text-sm mb-3">
                Split your payment into 6 monthly installments of $2,699
              </p>
              <Link
                to="/checkout"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Choose This Plan →
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Plan</h3>
              <p className="text-gray-600 text-sm mb-3">
                Speak with our team about flexible payment options
              </p>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div className="text-center p-6 bg-gray-100 rounded-xl">
          <h3 className="font-semibold text-gray-900 mb-2">Need Help with Your Purchase?</h3>
          <p className="text-gray-600 mb-4">
            Our enrollment specialists are standing by to assist you with any questions or payment issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4 text-green-600" />
              <span>enrollment@nexfernacademy.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-4 w-4 text-green-600" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Available Monday-Friday, 9 AM - 6 PM EST
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;