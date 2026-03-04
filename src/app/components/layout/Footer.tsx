import { Link } from 'react-router';
import { Briefcase, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">UniWorks</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering students through work-while-learning opportunities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/183Chj4XkR/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.threads.com/@idrishafeez6?xmt=AQF0bkANHhHAouM-tA_ydbf3IjbQRPUNnIEk-1j5dUPALsU" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/idris-muhammed-hafeez" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-blue-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-blue-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-500 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Students</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/browse-jobs" className="hover:text-blue-500 transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/auth/signup" className="hover:text-blue-500 transition-colors">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition-colors">
                  Career Resources
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@uniworks.com" className="hover:text-blue-500 transition-colors">
                  support@uniworks.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1" />
                <div>
                  <a href="tel:+2347038288224" className="hover:text-blue-500 transition-colors block">
                    +234 703 828 8224
                  </a>
                  <a href="tel:+2349035437674" className="hover:text-blue-500 transition-colors block">
                    +234 903 543 7674
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Okene Tech Hub<br />Kogi State, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 UniWorks. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};