import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';

export const FAQPage = () => {
  const faqs = [
    {
      question: 'How does UniWorks work?',
      answer: 'UniWorks connects students with flexible work opportunities. Students create profiles, browse jobs, and apply. Employers post jobs and hire talented students.',
    },
    {
      question: 'Is UniWorks free for students?',
      answer: 'Yes! Creating an account and applying to jobs is completely free for students. We offer optional premium features for enhanced visibility.',
    },
    {
      question: 'How do I get paid?',
      answer: 'Payments are processed securely through our platform. Once a job is completed and approved, funds are transferred to your account within 3-5 business days.',
    },
    {
      question: 'Can I work remotely?',
      answer: 'Absolutely! Many opportunities on UniWorks are remote-friendly. You can filter by location type when browsing jobs.',
    },
    {
      question: 'How do employers verify students?',
      answer: 'We require university email verification for all student accounts. Employers can also request additional verification.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">Find answers to common questions</p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
