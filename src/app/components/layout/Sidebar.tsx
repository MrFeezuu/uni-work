import { Link, useLocation } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  FileText, 
  GraduationCap, 
  MessageSquare, 
  DollarSign, 
  Users, 
  Settings,
  X,
  Mail,
  Home
} from 'lucide-react';
import { cn } from '../ui/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { user } = useAuth();
  const location = useLocation();

  const studentLinks = [
    { href: '/dashboard/student', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/student/profile', label: 'My Profile', icon: User },
    { href: '/dashboard/student/applications', label: 'Applications', icon: FileText },
    { href: '/dashboard/student/services', label: 'My Services', icon: Briefcase },
    { href: '/dashboard/student/tutoring', label: 'Tutoring', icon: GraduationCap },
    { href: '/dashboard/student/messages', label: 'Messages', icon: MessageSquare },
    { href: '/dashboard/student/earnings', label: 'Earnings', icon: DollarSign },
  ];

  const employerLinks = [
    { href: '/dashboard/employer', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/employer/post-job', label: 'Post a Job', icon: Briefcase },
    { href: '/dashboard/employer/jobs', label: 'Manage Jobs', icon: FileText },
    { href: '/dashboard/employer/applicants', label: 'Applicants', icon: Users },
    { href: '/dashboard/employer/payments', label: 'Payments', icon: DollarSign },
  ];

  const adminLinks = [
    { href: '/dashboard/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/admin/users', label: 'Manage Users', icon: Users },
    { href: '/dashboard/admin/jobs', label: 'Manage Jobs', icon: Briefcase },
    { href: '/dashboard/admin/payments', label: 'Manage Payments', icon: DollarSign },
    { href: '/dashboard/admin/emails', label: 'Email Management', icon: Mail },
  ];

  const links = user?.role === 'student' 
    ? studentLinks 
    : user?.role === 'employer' 
    ? employerLinks 
    : adminLinks;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UniWorks
              </span>
            </Link>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <Link
              to="/"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            
            <div className="pt-4 space-y-1">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.href;
                
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-medium">
                {user?.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.name}</p>
                <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
