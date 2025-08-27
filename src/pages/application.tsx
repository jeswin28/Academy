import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    CreditCard,
    Shield,
    Lock,
    Calendar,
    Users,
    Clock,
    MapPin,
    CheckCircle
} from 'lucide-react';

const Application = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would typically send the form data to a backend API
        // and then handle the response. For this example, we'll simulate
        // a successful payment and redirect.
        console.log('Application submitted with data:', formData);
        window.location.href = '/payment/success';
    };

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
                            <span className="text-sm text-gray-600">Secure Application</span>
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Summary</h2>
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
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2 text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span>Complete 90-day program</span>
                                    </li>
                                    <li className="flex items-center space-x-2 text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span>All materials included</span>
                                    </li>
                                    <li className="flex items-center space-x-2 text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span>Lifetime LMS access</span>
                                    </li>
                                    <li className="flex items-center space-x-2 text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span>Career support</span>
                                    </li>
                                    <li className="flex items-center space-x-2 text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span>1-on-1 mentorship</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Personal Info */}
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <div className="flex items-center space-x-2 mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Info */}
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <div className="flex items-center space-x-2 mb-6">
                                    <CreditCard className="h-6 w-6 text-green-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">Payment Information</h2>
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Name on Card *
                                        </label>
                                        <input
                                            type="text"
                                            id="cardName"
                                            name="cardName"
                                            required
                                            value={formData.cardName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                            Card Number *
                                        </label>
                                        <input
                                            type="text"
                                            id="cardNumber"
                                            name="cardNumber"
                                            required
                                            value={formData.cardNumber}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                            placeholder="0000 0000 0000 0000"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">
                                                Expiry Date (MM/YY) *
                                            </label>
                                            <input
                                                type="text"
                                                id="expiryDate"
                                                name="expiryDate"
                                                required
                                                value={formData.expiryDate}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                                placeholder="MM/YY"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                                                CVV *
                                            </label>
                                            <input
                                                type="text"
                                                id="cvv"
                                                name="cvv"
                                                required
                                                value={formData.cvv}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                                placeholder="123"
                                            />
                                        </div>
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
                                    Your payment information is encrypted and secure.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application;
