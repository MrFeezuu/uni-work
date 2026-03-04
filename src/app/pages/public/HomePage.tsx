import { Link } from 'react-router';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { 
  Search, 
  UserPlus, 
  Briefcase, 
  DollarSign,
  GraduationCap,
  Code,
  BookOpen,
  Coffee,
  Rocket,
  Star,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';

export const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  🎓 Work. Learn. Grow.
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Empowering Students Through{' '}
                <span className="text-yellow-300">Work-While-Learning</span>
              </h1>
              
              <p className="text-xl text-blue-100">
                Connect with flexible job opportunities, tutoring gigs, freelance projects, and internships designed for university students.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth/signup">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    How It Works
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-blue-200">Active Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">5K+</div>
                  <div className="text-blue-200">Jobs Posted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-blue-200">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwd29ya2luZyUyMHRvZ2V0aGVyJTIwbGFwdG9wfGVufDF8fHx8MTc3MjQ0NzY1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students working together"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How UniWorks Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and unlock opportunities tailored for students
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: UserPlus,
                title: 'Create Your Profile',
                description: 'Sign up and showcase your skills, experience, and availability',
                color: 'bg-blue-100 text-blue-600',
              },
              {
                icon: Search,
                title: 'Browse Opportunities',
                description: 'Find jobs, gigs, and internships that match your interests',
                color: 'bg-purple-100 text-purple-600',
              },
              {
                icon: Briefcase,
                title: 'Apply & Connect',
                description: 'Submit applications and connect with employers instantly',
                color: 'bg-green-100 text-green-600',
              },
              {
                icon: DollarSign,
                title: 'Earn & Grow',
                description: 'Get hired, complete work, and build your professional portfolio',
                color: 'bg-yellow-100 text-yellow-600',
              },
            ].map((step, index) => (
              <Card key={index} className="relative overflow-hidden border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="absolute top-0 right-0 text-6xl font-bold text-gray-100">
                    {index + 1}
                  </div>
                  <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-4`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories of Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect work opportunity that fits your schedule and skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Freelancing',
                description: 'Web dev, design, writing & more',
                icon: Code,
                image: 'https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlbGFuY2VyJTIwY29kaW5nJTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDF8fHx8MTc3MjQ0NzY1MXww&ixlib=rb-4.1.0&q=80&w=1080',
                count: '2,431 jobs',
                color: 'from-blue-600 to-cyan-600',
              },
              {
                title: 'Tutoring',
                description: 'Share knowledge, earn income',
                icon: BookOpen,
                image: 'https://images.unsplash.com/photo-1660128357991-713518efae48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwdHV0b3JpbmclMjB0ZWFjaGluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcyNDQ3NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
                count: '1,847 students',
                color: 'from-purple-600 to-pink-600',
              },
              {
                title: 'Campus Jobs',
                description: 'On-campus work opportunities',
                icon: Coffee,
                image: 'https://images.unsplash.com/photo-1726244236917-38c2dc9dd073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBqb2IlMjBzdHVkZW50JTIwd29ya2luZyUyMGNvZmZlZXxlbnwxfHx8fDE3NzI0NDc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
                count: '823 positions',
                color: 'from-green-600 to-emerald-600',
              },
              {
                title: 'Internships',
                description: 'Build your career foundation',
                icon: Rocket,
                image: 'https://images.unsplash.com/photo-1638452033979-14fba9e17fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5zaGlwJTIwcHJvZmVzc2lvbmFsJTIwb2ZmaWNlJTIweW9uZ38ZW58MXx8fHwxNzcyNDQ3NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
                count: '1,294 openings',
                color: 'from-orange-600 to-red-600',
              },
            ].map((category, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <category.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600">{category.count}</span>
                    <span className="text-sm text-gray-500">Explore →</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/browse-jobs">
              <Button size="lg">
                Browse All Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose UniWorks?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for students, by students who understand your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Verified Opportunities',
                description: 'All employers and jobs are vetted to ensure legitimacy and student safety',
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                description: 'Find work that fits around your classes and study schedule',
              },
              {
                icon: TrendingUp,
                title: 'Career Growth',
                description: 'Build your portfolio and gain real-world experience while studying',
              },
              {
                icon: DollarSign,
                title: 'Competitive Pay',
                description: 'Earn fair compensation for your skills and time',
              },
              {
                icon: GraduationCap,
                title: 'Student-Focused',
                description: 'Platform designed with student needs and challenges in mind',
              },
              {
                icon: Star,
                title: 'Build Your Reputation',
                description: 'Earn ratings and reviews to stand out to future employers',
              },
            ].map((feature, index) => (
              <Card key={index} className="border-2 hover:border-blue-600 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from students who are earning while learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Martinez',
                role: 'Computer Science, Year 3',
                university: 'MIT',
                content: 'UniWorks helped me land my first freelance web development project. I earned $2,500 while building my portfolio. Now employers are reaching out to me!',
                rating: 5,
              },
              {
                name: 'James Chen',
                role: 'Business Administration, Year 2',
                university: 'Stanford',
                content: 'I found an amazing marketing internship through UniWorks. The flexible hours let me balance work with my studies, and I gained invaluable experience.',
                rating: 5,
              },
              {
                name: 'Emma Thompson',
                role: 'Mathematics, Year 4',
                university: 'Harvard',
                content: "Tutoring through UniWorks has been incredible. I help other students with calculus and earn $30/hour. It's flexible and rewarding!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.university}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students already earning while learning on UniWorks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Sign Up as Student
              </Button>
            </Link>
            <Link to="/auth/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Post a Job
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};