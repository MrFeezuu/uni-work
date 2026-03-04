import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Link } from 'react-router';
import { Briefcase } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

export const ForgotPasswordPage = () => {
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
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Enter your email to receive a reset link</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="you@university.edu" />
          </div>
          <Button className="w-full">Send Reset Link</Button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/auth/login" className="text-sm text-blue-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
