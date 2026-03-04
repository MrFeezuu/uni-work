import { useState } from 'react';
import { Link } from 'react-router';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import { mockJobs } from '../../data/mockData';
import { Search, MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';

export const BrowseJobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || job.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Browse Opportunities</h1>
        <p className="text-xl text-gray-600">Find the perfect job that fits your skills and schedule</p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search jobs..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="freelancing">Freelancing</SelectItem>
            <SelectItem value="tutoring">Tutoring</SelectItem>
            <SelectItem value="campus-jobs">Campus Jobs</SelectItem>
            <SelectItem value="internships">Internships</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                      {job.employerCompany.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <p className="text-gray-600 mb-3">{job.employerCompany}</p>
                      <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          ${job.budget.min}-${job.budget.max}/{job.budget.type === 'hourly' ? 'hr' : 'project'}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.duration}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="capitalize">
                          {job.category.replace('-', ' ')}
                        </Badge>
                        {job.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:items-end">
                  <Link to="/auth/login">
                    <Button>Apply Now</Button>
                  </Link>
                  <p className="text-sm text-gray-500">{job.applicantsCount} applicants</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No jobs found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};
