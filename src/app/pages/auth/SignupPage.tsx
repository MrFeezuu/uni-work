import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth, UserRole } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Briefcase, Mail, Lock, User, Building, GraduationCap } from 'lucide-react';
import { toast } from 'sonner';

export const SignupPage = () => {
  const [role, setRole] = useState<UserRole>('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    company: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    const result = await signup({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      role,
      university: role === 'student' ? formData.university : undefined,
      company: role === 'employer' ? formData.company : undefined,
    });

    setIsLoading(false);

    if (result.success) {
      toast.success(result.message);
      navigate('/auth/verify-email?email=' + encodeURIComponent(formData.email));
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="text-center">
        <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            UniWorks
          </span>
        </Link>
        <CardTitle className="text-2xl">Create Your Account</CardTitle>
        <CardDescription>Join thousands of students and employers on UniWorks</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={role} onValueChange={(value) => setRole(value as UserRole)} className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student">I'm a Student</TabsTrigger>
            <TabsTrigger value="employer">I'm an Employer</TabsTrigger>
          </TabsList>
        </Tabs>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="pl-10"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
          </div>

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

          {role === 'student' && (
            <div className="space-y-2">
              <Label htmlFor="university">University</Label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="university"
                  type="text"
                  placeholder="Your University Name"
                  className="pl-10"
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  required
                />
              </div>
            </div>
          )}

          {role === 'employer' && (
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Company Name"
                  className="pl-10"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
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

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="pl-10"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Already have an account?</span>{' '}
          <Link to="/auth/login" className="text-blue-600 hover:underline font-medium">
            Log In
          </Link>
        </div>

        <div className="mt-4 text-center text-xs text-gray-500">
          By signing up, you agree to our{' '}
          <a href="#" className="underline hover:text-gray-700">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-gray-700">
            Privacy Policy
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
