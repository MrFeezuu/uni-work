import { Card, CardContent } from '../../components/ui/card';
import { UserCheck, Search, Send, Award } from 'lucide-react';

export const HowItWorksPage = () => {
  const studentSteps = [
    { icon: UserCheck, title: 'Create Profile', description: 'Sign up and build your student profile with skills and experience' },
    { icon: Search, title: 'Browse Jobs', description: 'Explore opportunities that match your interests and schedule' },
    { icon: Send, title: 'Apply', description: 'Submit applications and connect with employers' },
    { icon: Award, title: 'Get Hired', description: 'Complete work, earn money, and build your portfolio' },
  ];

  const employerSteps = [
    { icon: UserCheck, title: 'Create Account', description: 'Register as an employer and set up your company profile' },
    { icon: Send, title: 'Post Job', description: 'Create job listings with requirements and budget' },
    { icon: Search, title: 'Review Applications', description: 'Browse student profiles and applications' },
    { icon: Award, title: 'Hire', description: 'Select the best candidate and complete the project' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How UniWorks Works</h1>
        <p className="text-xl text-gray-600">Simple steps to get started</p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">For Students</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentSteps.map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">For Employers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {employerSteps.map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
