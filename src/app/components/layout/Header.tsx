import { Link } from 'react-router';
import { Button } from '../ui/button';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, X, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              UniWorks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
              How It Works
            </Link>
            <Link to="/browse-jobs" className="text-gray-700 hover:text-blue-600 transition-colors">
              Browse Jobs
            </Link>
            <Link to="/browse-talent" className="text-gray-700 hover:text-blue-600 transition-colors">
              Find Talent
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Link to={`/dashboard/${user.role}`}>
                <Button>Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link to="/auth/login">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link to="/auth/signup">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-gray-200"
            >
              <nav className="flex flex-col space-y-4 py-4">
                <Link
                  to="/how-it-works"
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  to="/browse-jobs"
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Browse Jobs
                </Link>
                <Link
                  to="/browse-talent"
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Find Talent
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  {user ? (
                    <Link to={`/dashboard/${user.role}`} onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full">Dashboard</Button>
                    </Link>
                  ) : (
                    <>
                      <Link to="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full">
                          Log In
                        </Button>
                      </Link>
                      <Link to="/auth/signup" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full">Get Started</Button>
                      </Link>
                    </>
                  )}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};