import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Briefcase, Mail, Lock } from 'lucide-react';
import { toast } from 'sonner';

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await login(formData.email, formData.password);
    setIsLoading(false);

    if (result.success) {
      toast.success(result.message);
      // The user object will be set in AuthContext, and we'll navigate based on role
      const users = JSON.parse(localStorage.getItem('uniworks_users') || '[]');
      const user = users.find((u: any) => u.email === formData.email);
      navigate(`/dashboard/${user.role}`);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            UniWorks
          </span>
        </Link>
        <CardTitle className="text-2xl">Welcome Back</CardTitle>
        <CardDescription>Log in to your UniWorks account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="you@university.edu"
                className="pl-10"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Logging In...' : 'Log In'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Don't have an account?</span>{' '}
          <Link to="/auth/signup" className="text-blue-600 hover:underline font-medium">
            Sign Up
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center mb-4">Demo Accounts (for testing):</p>
          <div className="space-y-2 text-xs text-gray-600">
            <div className="p-2 bg-gray-50 rounded">
              <strong>Student:</strong> student@demo.com
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <strong>Employer:</strong> employer@demo.com
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <strong>Admin:</strong> admin@demo.com
            </div>
            <p className="text-center text-gray-500 italic">Password: demo123 (for all)</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
