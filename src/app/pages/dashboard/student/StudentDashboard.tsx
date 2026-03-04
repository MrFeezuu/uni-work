import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { useAuth } from '../../../contexts/AuthContext';
import { Briefcase, DollarSign, FileText, TrendingUp, Clock, Award } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../../../components/ui/button';
import { Progress } from '../../../components/ui/progress';
import { Badge } from '../../../components/ui/badge';
import { mockJobs } from '../../../data/mockData';

export const StudentDashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Active Applications', value: '5', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Total Earnings', value: '$1,250', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Completed Jobs', value: '12', icon: Award, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Success Rate', value: '95%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  const recentJobs = mockJobs.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}! 👋</h1>
        <p className="text-gray-600">Here's what's happening with your account today.</p>
      </div>

      {/* Profile Completion */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Complete Your Profile</span>
            <span className="text-sm text-gray-600">75% Complete</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={75} className="mb-4" />
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">✓ Basic Info</Badge>
            <Badge variant="outline">✓ Skills</Badge>
            <Badge variant="outline">✓ Education</Badge>
            <Badge variant="secondary">Add Portfolio</Badge>
          </div>
          <Link to="/dashboard/student/profile" className="mt-4 block">
            <Button>Complete Profile</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Recommended Opportunities</span>
            <Link to="/browse-jobs">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentJobs.map((job) => (
              <div key={job.id} className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{job.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{job.employerCompany}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      ${job.budget.min}-${job.budget.max}/{job.budget.type === 'hourly' ? 'hr' : 'project'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.duration}
                    </span>
                  </div>
                </div>
                <Button size="sm">Apply</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link to="/dashboard/student/applications">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold mb-1">My Applications</h3>
              <p className="text-sm text-gray-600">Track your job applications</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/dashboard/student/services">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-3 text-purple-600" />
              <h3 className="font-semibold mb-1">My Services</h3>
              <p className="text-sm text-gray-600">Manage your offerings</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/dashboard/student/earnings">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-3 text-green-600" />
              <h3 className="font-semibold mb-1">Earnings</h3>
              <p className="text-sm text-gray-600">View your income</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};
