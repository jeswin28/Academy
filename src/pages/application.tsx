import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    Shield,
    Calendar,
    Users,
    Clock,
    MapPin,
    CheckCircle,
    User,
    BookOpen,
    Briefcase
} from 'lucide-react';

const Application = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        education: '',
        experience: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
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
                                        <span>Starts September 1, 2025</span>
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
                        <form action="/application.php" method="POST" className="space-y-8">
                            {/* Personal Info */}
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <div className="flex items-center space-x-3 mb-6">
                                    <User className="h-6 w-6 text-green-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="col-span-1">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                        <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleInputChange} className="w-full input-style" placeholder="Your first name" />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                        <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleInputChange} className="w-full input-style" placeholder="Your last name" />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full input-style" placeholder="your.email@example.com" />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                        <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full input-style" placeholder="+1 (555) 123-4567" />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                                        <input type="text" id="address" name="address" required value={formData.address} onChange={handleInputChange} className="w-full input-style" placeholder="123 Main St" />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                                        <input type="text" id="city" name="city" required value={formData.city} onChange={handleInputChange} className="w-full input-style" placeholder="Anytown" />
                                    </div>
                                    <div className="col-span-1 grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                                            <input type="text" id="state" name="state" required value={formData.state} onChange={handleInputChange} className="w-full input-style" placeholder="CA" />
                                        </div>
                                        <div>
                                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                                            <input type="text" id="zip" name="zip" required value={formData.zip} onChange={handleInputChange} className="w-full input-style" placeholder="12345" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Qualifications */}
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <div className="flex items-center space-x-3 mb-6">
                                     <BookOpen className="h-6 w-6 text-green-600" />
                                     <h2 className="text-2xl font-bold text-gray-900">Qualifications</h2>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">Highest Level of Education *</label>
                                        <select id="education" name="education" required value={formData.education} onChange={handleInputChange} className="w-full input-style">
                                            <option value="">Please select</option>
                                            <option value="high-school">High School / GED</option>
                                            <option value="associates">Associate's Degree</option>
                                            <option value="bachelors">Bachelor's Degree</option>
                                            <option value="masters">Master's Degree or Higher</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Briefly describe any relevant experience (if any)</label>
                                        <textarea id="experience" name="experience" rows={5} value={formData.experience} onChange={handleInputChange} className="w-full input-style" placeholder="e.g., personal projects, previous coursework, work experience..."></textarea>
                                    </div>
                                </div>
                            </div>


                            {/* Submit */}
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <Shield className="h-5 w-5" />
                                    <span>Submit Application</span>
                                </button>
                                <p className="text-center text-sm text-gray-500 mt-4">
                                    By submitting, you agree to our Terms of Service and Privacy Policy.
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