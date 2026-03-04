import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Briefcase, CheckCircle, Mail, X } from 'lucide-react';

export const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Mock email verification - in real app, this would be automatic
    // For demo purposes, we'll auto-verify after 5 seconds
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-verify the email
          const users = JSON.parse(localStorage.getItem('uniworks_users') || '[]');
          const userIndex = users.findIndex((u: any) => u.email === email);
          if (userIndex !== -1) {
            users[userIndex].isVerified = true;
            localStorage.setItem('uniworks_users', JSON.stringify(users));
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [email]);

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
        {countdown === 0 ? (
          <>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-600">Email Verified!</CardTitle>
            <CardDescription>Your account has been successfully verified</CardDescription>
          </>
        ) : (
          <>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-10 h-10 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">Check Your Email</CardTitle>
            <CardDescription>We've sent a verification link to {email}</CardDescription>
          </>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {countdown === 0 ? (
          <>
            <p className="text-center text-gray-600">
              You can now log in to your account and start exploring opportunities!
            </p>
            <Link to="/auth/login">
              <Button className="w-full">
                Log In to Your Account
              </Button>
            </Link>
          </>
        ) : (
          <>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Demo Mode:</strong> For testing purposes, your email will be automatically verified in:
              </p>
              <div className="text-3xl font-bold text-blue-600 text-center">
                {countdown}
              </div>
            </div>
            
            <div className="space-y-3 text-sm text-gray-600">
              <p className="font-medium text-gray-900">Next steps:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Check your inbox for the verification email</li>
                <li>Click the verification link in the email</li>
                <li>Return here to log in to your account</li>
              </ol>
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-2 text-sm text-center">
              <p className="text-gray-600">Didn't receive the email?</p>
              <Button variant="outline" className="w-full">
                Resend Verification Email
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};
