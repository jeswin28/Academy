import React from 'react';
import { Calendar, Users, Clock, MapPin, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cohorts = () => {
  const tracks = [
    {
      title: 'Tech Development Mastery',
      duration: '90 Days',
      nextStart: 'March 15, 2025',
      spots: '18/50',
      color: 'blue',
      description: 'Master full-stack development, mobile apps, and modern software engineering practices.',
      skills: [
        'React, Node.js, Python',
        'Database Design & Management',
        'Cloud Deployment (AWS/Azure)',
        'API Development & Testing',
        'DevOps & CI/CD Pipelines',
        'Mobile App Development'
      ],
      outcomes: [
        'Full-Stack Developer',
        'Software Engineer',
        'DevOps Engineer',
        'Mobile App Developer'
      ],
      projects: [
        'E-commerce Platform Build',
        'Mobile App from Scratch',
        'Microservices Architecture',
        'Portfolio Website & Deployment'
      ]
    },
    {
      title: 'Digital Marketing Excellence',
      duration: '90 Days',
      nextStart: 'March 15, 2025',
      spots: '25/50',
      color: 'green',
      description: 'Build expertise in modern digital marketing strategies that drive measurable results.',
      skills: [
        'SEO & Content Strategy',
        'Google Ads & Facebook Advertising',
        'Email Marketing Automation',
        'Analytics & Data Interpretation',
        'Social Media Management',
        'Conversion Rate Optimization'
      ],
      outcomes: [
        'Digital Marketing Manager',
        'Growth Marketing Specialist',
        'SEO Specialist',
        'Marketing Agency Owner'
      ],
      projects: [
        'Complete Marketing Campaign',
        'SEO Strategy Implementation',
        'Social Media Brand Building',
        'Analytics Dashboard Creation'
      ]
    },
    {
      title: 'UI/UX Design Innovation',
      duration: '90 Days',
      nextStart: 'March 15, 2025',
      spots: '32/50',
      color: 'purple',
      description: 'Create beautiful, user-centered designs with modern tools and proven methodologies.',
      skills: [
        'User Research & Testing',
        'Figma & Design Systems',
        'Prototyping & Animation',
        'Information Architecture',
        'Visual Design Principles',
        'Accessibility & Inclusive Design'
      ],
      outcomes: [
        'UX Designer',
        'Product Designer',
        'Design System Specialist',
        'Freelance Designer'
      ],
      projects: [
        'Mobile App Design',
        'Website Redesign Project',
        'Design System Creation',
        'User Research Study'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              90-Day Intensive
              <span className="text-green-600 block">MERN Stack Bootcamp</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Master MongoDB, Express.js, React, and Node.js in our intensive 90-day hands-on bootcamp. Limited to 25 students for personalized attention and mentorship.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Next Start: September 1, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">Limited Spots Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Tracks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              MERN Stack Curriculum
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive curriculum is designed by industry experts and covers the complete MERN Stack development cycle.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-1">
                  <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-green-100 text-green-800">
                    90 Days Intensive
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    MERN Stack Development Bootcamp
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Master the complete MERN Stack through hands-on projects, real-world applications, and expert mentorship. Build a professional portfolio while learning industry best practices.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">Starts August 1, 2025</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">Spots Remaining: 18/25</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">On-site at Nexfern Campus</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">9 AM - 5 PM, Mon-Fri</span>
                    </div>
                  </div>

                  <button className="mt-8 w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center group">
                    <Link to="/application" className="flex items-center justify-center w-full">
                      Apply for August 2025 Cohort
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </button>
                </div>

                {/* Technologies and Outcomes */}
                <div className="lg:col-span-2">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies You'll Master</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">MongoDB - NoSQL Database Design</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Express.js - Backend API Development</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">React - Modern Frontend Development</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Node.js - Server-side JavaScript</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Git & GitHub - Version Control</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Deployment & DevOps Basics</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Career Outcomes</h4>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center space-x-3">
                          <Star className="h-4 w-4 text-yellow-500 fill-current flex-shrink-0" />
                          <span className="text-gray-700">Full-Stack Developer</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <Star className="h-4 w-4 text-yellow-500 fill-current flex-shrink-0" />
                          <span className="text-gray-700">MERN Stack Specialist</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <Star className="h-4 w-4 text-yellow-500 fill-current flex-shrink-0" />
                          <span className="text-gray-700">Frontend React Developer</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <Star className="h-4 w-4 text-yellow-500 fill-current flex-shrink-0" />
                          <span className="text-gray-700">Backend Node.js Developer</span>
                        </li>
                      </ul>

                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Portfolio Projects</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full flex-shrink-0 bg-green-500" />
                          <span className="text-gray-700">E-commerce Platform with Payment Integration</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full flex-shrink-0 bg-green-500" />
                          <span className="text-gray-700">Social Media Application</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full flex-shrink-0 bg-green-500" />
                          <span className="text-gray-700">Task Management System</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full flex-shrink-0 bg-green-500" />
                          <span className="text-gray-700">Real-time Chat Application</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              90-Day Curriculum Breakdown
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive journey from beginner to full-stack developer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Month 1: Foundations</h3>
                <p className="text-gray-600">Days 1-30</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>JavaScript Fundamentals & ES6+</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Node.js & NPM Ecosystem</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>MongoDB Database Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Express.js Server Setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>RESTful API Development</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Month 2: Frontend Mastery</h3>
                <p className="text-gray-600">Days 31-60</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>React Components & JSX</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>State Management & Hooks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>React Router & Navigation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>API Integration & Axios</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Responsive Design & CSS</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Month 3: Full-Stack Projects</h3>
                <p className="text-gray-600">Days 61-90</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Authentication & Security</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Payment Integration (Stripe)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Real-time Features (Socket.io)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Deployment & DevOps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Portfolio Development</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/application"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center group"
            >
              Start Your MERN Stack Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive look at your 90-day journey with us
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Daily Collaborative Learning</h3>
                  <p className="text-gray-600">Work alongside 24 other motivated students in our state-of-the-art learning facility. Daily stand-ups, pair programming, and group projects.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Structured Daily Schedule</h3>
                  <p className="text-gray-600">9 AM - 12 PM: Core lectures and concept building. 1 PM - 5 PM: Hands-on projects and mentorship. Evening: Optional study groups and networking.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Mentorship</h3>
                  <p className="text-gray-600">One-on-one weekly sessions with industry professionals. Portfolio reviews, career guidance, and interview preparation included.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-World Projects</h3>
                  <p className="text-gray-600">Build 4-6 portfolio pieces working with actual client briefs. All projects are reviewed by industry professionals and become part of your portfolio.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students working in our modern campus"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Job Placement Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Campus Life & Community
            </h2>
            <p className="text-xl text-gray-600">
              Experience learning in our modern, collaborative environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Collaborative workspace"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Learning Spaces</h3>
              <p className="text-gray-600">Open collaboration areas, quiet study zones, and high-tech presentation rooms.</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Networking events"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Networking Events</h3>
              <p className="text-gray-600">Weekly industry meetups, guest speaker sessions, and alumni networking events.</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Mentorship sessions"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1-on-1 Mentorship</h3>
              <p className="text-gray-600">Personalized guidance from industry experts to accelerate your learning journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-green-100">
              A straightforward path to secure your spot in our next cohort
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
              <p className="text-green-100">Submit your application with basic information and motivation statement.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Skills Assessment</h3>
              <p className="text-green-100">Complete a brief skills evaluation to help us tailor your learning experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Interview</h3>
              <p className="text-green-100">30-minute conversation with our admissions team about your goals and commitment.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">Acceptance</h3>
              <p className="text-green-100">Receive your acceptance letter and secure your spot with enrollment deposit.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/application"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors inline-flex items-center group"
            >
              Apply for September 2025 Cohort
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-green-100 mt-4">
              Application deadline: August 30, 2025 | Rolling admissions until spots are filled
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cohorts;