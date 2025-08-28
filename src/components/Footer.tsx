import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin as LinkedIn, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://facebook.com/nexfernacademy', 
      label: 'Facebook',
      Icon: Facebook,
    },
    {
      href: 'https://twitter.com/nexfernacademy', 
      label: 'Twitter',
      Icon: Twitter,
    },
    {
      href: 'https://www.instagram.com/nexfern.academy/',
      label: 'Instagram',
      Icon: Instagram,
    },
    {
      href: 'https://www.linkedin.com/company/107547152/', 
      label: 'LinkedIn',
      Icon: LinkedIn,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            {/* MODIFIED: Replaced GraduationCap icon with the image logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="images/footer-logo.png" 
                alt="Nexfern Logo" 
                className="h-20 w-auto"
              />
              <span className="font-bold text-xl">Academy</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Transform your career through our intensive 90-day offline cohorts and flexible online courses in Tech, Marketing, and Design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/cohorts" className="text-gray-300 hover:text-white transition-colors">Offline Cohorts</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-300">MERN Stack Development</span></li>
              <li><span className="text-gray-300">MongoDB Database</span></li>
              <li><span className="text-gray-300">Express.js Backend</span></li>
              <li><span className="text-gray-300">React Frontend</span></li>
              <li><span className="text-gray-300">Node.js Runtime</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">info@nexfernacademy.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">+91 87908 47755</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-8 w-8 text-green-400 mt-0.5" />
                <span className="text-gray-300">
                    D.No- 40-1-173A, Second floor,<br />
                    Hussain street, Manyavar Showroom beside road,
                    Bundar Road, Vijayawada,
                    Andhra Pradesh-520010
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nexfern Academy. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;