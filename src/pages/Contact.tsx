import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs? Ready to start your learning journey?
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of these channels. Our team is ready to answer your questions and help you choose the right learning path.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 87908 47755</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-5PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@nexfernacademy.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      D.no- 40-1-173A, Second floor,<br />
                      Hussain street, Manyavar Showroom beside road,
                      Bundar Road, Vijayawada,
                      Andhra Pradesh-520010
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday & Sunday : Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                <form action="/contact.php" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="Your full name"
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
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="cohort-inquiry">Offline Cohort Inquiry</option>
                      <option value="online-course">Online Course Question</option>
                      <option value="admission">Admission Process</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical"
                      placeholder="Tell us about your goals, questions, or how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-900 mb-1">Quick Response Guarantee</h4>
                      <p className="text-green-800 text-sm">
                        We typically respond to all inquiries within 24 hours during business days.
                        For urgent matters, please call us directly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left Side FAQs */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How do I apply for an offline cohort?</h3>
                <p className="text-gray-600 text-sm">
                  Simply click "Apply Now" on any cohort page, fill out the application form, complete the skills assessment, and schedule your interview. The process takes about 1-2 weeks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What's included in online courses?</h3>
                <p className="text-gray-600 text-sm">
                  All courses include recorded lectures, downloadable resources, quizzes, hands-on projects, lifetime access, and a completion certificate.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do you offer payment plans?</h3>
                <p className="text-gray-600 text-sm">
                No—at the moment we don’t offer payment plans. All fees are due in full at enrollment. we’re happy to provide invoices and receipts. If you need extra time before a cohort starts, contact us and we’ll try to suggest a suitable upcoming batch.
                </p>
              </div>
            </div>

            {/* Right Side FAQs */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What if I can't attend the full 90-day cohort?</h3>
                <p className="text-gray-600 text-sm">
                  Our cohorts require full commitment for the best results. However, if you have concerns about scheduling, please contact us to discuss potential accommodations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do you provide career support?</h3>
                <p className="text-gray-600 text-sm">
                  Absolutely! We offer resume reviews, interview preparation, portfolio development, and connections to our partner companies for job placement assistance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I switch between tracks during the cohort?</h3>
                <p className="text-gray-600 text-sm">
                  Track switching is generally not recommended due to the intensive nature of our programs. However, we can discuss options if you contact us early in the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Campus</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of the tech district with easy access to public transportation
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Embedded Google Map */}
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4907966934484!2d80.6430196!3d16.5013018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fba7954b7eed%3A0xedf2a56f55789d1a!2sNEXFERN%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1756336106545!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Public Transportation</h3>
                  <p className="text-sm text-gray-600">RTC Bus Stop within 2-minute walk</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Parking</h3>
                  <p className="text-sm text-gray-600">Free student parking available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
