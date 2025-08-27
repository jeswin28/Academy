import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl text-gray-900">Nexfern Academy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/about')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
            >
              About
            </Link>
            <Link
              to="/cohorts"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/cohorts')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
            >
              Offline Cohorts
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/contact')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
            >
              Contact
            </Link>
            <Link
              to="/application.php"
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/')
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/about')
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/cohorts"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/cohorts')
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Offline Cohorts
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/contact')
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/application.php"
                className="block bg-green-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;