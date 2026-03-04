import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Check } from 'lucide-react';

export const PricingPage = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for students getting started',
      features: ['Create profile', 'Browse jobs', 'Apply to unlimited jobs', 'Basic messaging'],
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: '/month',
      description: 'For serious job seekers',
      features: ['Everything in Free', 'Featured profile', 'Priority support', 'Advanced analytics', 'No commission fees'],
      popular: true,
    },
    {
      name: 'Employer',
      price: '$49',
      period: '/month',
      description: 'For businesses hiring students',
      features: ['Post unlimited jobs', 'Access to all students', 'Advanced filtering', 'Dedicated support', 'Bulk messaging'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600">Choose the plan that works for you</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.popular ? 'border-2 border-blue-600 shadow-lg' : ''}>
            {plan.popular && (
              <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-600">{plan.period}</span>}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
