import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const toggleMenu = () => setIsOpen(!isOpen);

  // --- All scroll detection logic has been removed for a consistent background ---

  return (
    // MODIFIED: Set a permanent white background with a shadow for visibility
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="images/logo.png" 
                alt="Nexfern Logo" 
                className="max-h-16 sm:max-h-20 object-contain"
              />
              {/* MODIFIED: Set text color to dark gray */}
              <span className="font-bold text-xl text-gray-900">
                Academy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-green-600 bg-green-50'
                  // MODIFIED: Set text to dark gray, with standard hover effects
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              About
            </Link>
            <Link
              to="/cohorts"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/cohorts')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Offline Cohorts
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/application"
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              // MODIFIED: Set icon color to dark gray
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (no changes needed here) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/about')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/cohorts"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/cohorts')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Offline Cohorts
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/application"
              className="block bg-green-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;