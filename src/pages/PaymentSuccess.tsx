import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, Mail, Phone, Download, ArrowRight } from 'lucide-react';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Congratulations! You've successfully enrolled in the MERN Stack Development Bootcamp. 
            Welcome to Nexfern Academy!
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Confirmation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Course Details</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Course:</span>
                  <span className="font-medium">MERN Stack Development Bootcamp</span>
                </div>
                <div className="flex justify-between">
                  <span>Start Date:</span>
                  <span className="font-medium">August 1, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">90 Days Intensive</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-medium">Nexfern Campus</span>
                </div>
                <div className="flex justify-between">
                  <span>Order ID:</span>
                  <span className="font-medium">#NX-2025-001234</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Payment Details</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Payment Method:</span>
                  <span className="font-medium">Credit Card (**** 3456)</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount Paid:</span>
                  <span className="font-medium text-green-600">$12,999</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Date:</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="font-medium text-green-600">Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Confirmation Email</h3>
              <p className="text-gray-600 text-sm">
                You'll receive a detailed confirmation email within 5 minutes with your enrollment details and next steps.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Welcome Call</h3>
              <p className="text-gray-600 text-sm">
                Our admissions team will contact you within 24 hours to welcome you and answer any questions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pre-Course Materials</h3>
              <p className="text-gray-600 text-sm">
                Access to pre-course materials and LMS portal will be provided 2 weeks before the start date.
              </p>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-blue-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Pre-Course Preparation</h3>
                <p className="text-gray-600 text-sm">
                  We'll send you a preparation checklist and recommended resources to help you get ready for the intensive program.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Campus Orientation</h3>
                <p className="text-gray-600 text-sm">
                  Join us for a campus tour and orientation session on July 28, 2025, from 2:00 PM - 4:00 PM.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Equipment Requirements</h3>
                <p className="text-gray-600 text-sm">
                  A detailed list of required equipment and software will be provided. We also offer laptop rental options if needed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center">
            <Download className="h-5 w-5 mr-2" />
            Download Receipt
          </button>
          <Link
            to="/contact"
            className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
          >
            Contact Support
          </Link>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-12 p-6 bg-gray-100 rounded-xl">
          <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            Our support team is here to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4 text-green-600" />
              <span>support@nexfernacademy.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-4 w-4 text-green-600" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
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

export default PaymentSuccess;