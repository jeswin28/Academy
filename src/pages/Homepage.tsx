import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Monitor, Globe, Code, TrendingUp, Palette, Star, Play, CheckCircle } from 'lucide-react';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Career:
                <span className="text-green-600 block">MERN Stack Mastery</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Master the complete MERN Stack in our intensive 90-day offline cohort. Build real-world applications with MongoDB, Express.js, React, and Node.js while working alongside passionate developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/cohorts"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center group"
                >
                  View Course Details
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/application" 
                 className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors inline-flex items-center justify-center group"
                  >
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>90-Day Intensive Program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Full-Stack Focus</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students collaborating in a modern learning environment"
                className="rounded-2xl shadow-2xl"
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Our MERN Stack Program Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master full-stack development through our intensive 90-day hands-on program designed for aspiring MERN Stack developers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Intensive 90-Day Offline Cohorts</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a limited cohort of 25 members at our physical office for hands-on, expert-led MERN Stack development training.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Monitor className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Personalized LMS Portal Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Access recorded coding sessions, project walkthroughs, and technical resources through your dedicated learning platform.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Globe className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Career Launch & Portfolio</h3>
              <p className="text-gray-600 leading-relaxed">
                Graduate with a complete portfolio of MERN Stack applications and direct connections to hiring partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Master the MERN Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build modern, scalable web applications using the most popular JavaScript technologies in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* MongoDB */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <div className="text-2xl font-bold text-green-600">M</div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">MongoDB</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master NoSQL database design, data modeling, aggregation pipelines, and performance optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Database Design</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Aggregation Pipelines</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Performance Tuning</li>
              </ul>
            </div>

            {/* Express.js */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <div className="text-2xl font-bold text-green-600">E</div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Express.js</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build robust REST APIs, handle authentication, middleware, and create scalable backend architectures.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> REST API Development</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Authentication & Security</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Middleware & Routing</li>
              </ul>
            </div>

            {/* React */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <div className="text-2xl font-bold text-green-600">R</div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">React</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master component-based architecture, state management, hooks, and modern React patterns for dynamic UIs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Component Architecture</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> State Management</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Modern Hooks</li>
              </ul>
            </div>

            {/* Node.js */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <div className="text-2xl font-bold text-green-600">N</div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Node.js</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build server-side applications, handle asynchronous operations, and integrate with databases and external APIs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Server-side JavaScript</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Asynchronous Programming</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> NPM & Package Management</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/application.php"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center group"
            >
              Enroll in August 2025 Cohort
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Nexfern Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Nexfern Academy?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Industry Instructors</h3>
                    <p className="text-gray-600">Learn from professionals with 10+ years of experience in top tech companies and successful startups.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">100% Practical Curriculum</h3>
                    <p className="text-gray-600">Work on real projects, build your portfolio, and gain hands-on experience that employers value.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Career-Focused Approach</h3>
                    <p className="text-gray-600">Job placement assistance, interview preparation, and networking opportunities with our partner companies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Lifetime Learning Access</h3>
                    <p className="text-gray-600">Continue learning with your personalized LMS portal, updated content, and ongoing community support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office space with students working together"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Star className="h-6 w-6 text-green-600 fill-current" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">4.9/5</p>
                    <p className="text-sm text-gray-600">Student Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Upcoming Cohort CTA */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Next MERN Stack Cohort Starts September 1, 2025
          </h2>
          <p className="text-xl text-black-300 mb-8 max-w-2xl mx-auto">
            Limited to 25 students. Applications are reviewed on a first-come, first-served basis. Secure your spot today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/application"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center group"
            >
              Enroll Now - Limited Spots Available
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-sm text-black-400 mt-6">
            Questions? Call us at +91 87908 47755 or email info@nexfernacademy.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;