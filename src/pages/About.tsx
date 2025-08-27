import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Founder & Chief Academic Officer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former VP of Engineering at Google with 15 years of experience in tech education and curriculum development.'
    },
    {
      name: 'Marcus Thompson',
      role: 'Head of Marketing Programs',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ex-Marketing Director at HubSpot, specialized in digital strategy and growth marketing for startups and enterprises.'
    },
    {
      name: 'Lisa Chen',
      role: 'Lead Design Instructor',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Senior UX Designer at Airbnb with expertise in design systems, user research, and product strategy.'
    },
    {
      name: 'David Rodriguez',
      role: 'Head of Career Services',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former HR Director at Microsoft, specializing in tech talent acquisition and career development programs.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <Globe className="h-10 w-10 text-blue-600" />
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing professional education through our unique blended learning model, combining intensive offline experiences with lifetime online access.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020 by a team of industry veterans from Google, Microsoft, and leading design agencies, Nexfern Academy was born from a simple observation: traditional education wasn't preparing students for the rapidly evolving demands of the modern workplace.
                </p>
                <p>
                  We created a revolutionary 90-day intensive model that combines the best of both worlds: the focused, collaborative energy of in-person learning with the flexibility and accessibility of online education.
                </p>
                <p>
                  Today, we've graduated over 500 students who've gone on to launch successful careers at top companies and start their own ventures. Our unique approach has been recognized by industry leaders and education experts alike.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration at Nexfern Academy"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between traditional education and industry needs by providing intensive, practical training that launches successful careers in tech, marketing, and design.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the global leader in blended professional education, empowering individuals worldwide to transform their careers and achieve their full potential.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellence in education, practical hands-on learning, inclusive community building, and unwavering commitment to student success and career advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry veterans who've worked at top companies and are passionate about sharing their knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Learning Philosophy
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Hands-On Learning</h3>
                    <p className="text-blue-100">We believe in learning by doing. Every concept is reinforced through practical projects and real-world applications.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Industry Relevance</h3>
                    <p className="text-blue-100">Our curriculum is constantly updated to reflect the latest industry trends and employer demands.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Personalized Mentorship</h3>
                    <p className="text-blue-100">Small cohort sizes ensure every student receives individual attention and personalized career guidance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning together"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Successful Graduates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Job Placement Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$75K</div>
              <p className="text-gray-600">Average Starting Salary</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
              <p className="text-gray-600">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;