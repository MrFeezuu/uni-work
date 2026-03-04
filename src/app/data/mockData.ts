export interface Job {
  id: string;
  title: string;
  description: string;
  category: 'freelancing' | 'tutoring' | 'campus-jobs' | 'internships';
  employerId: string;
  employerName: string;
  employerCompany: string;
  location: string;
  type: 'remote' | 'on-site' | 'hybrid';
  budget: {
    min: number;
    max: number;
    type: 'hourly' | 'fixed';
  };
  skills: string[];
  duration: string;
  deadline: string;
  status: 'active' | 'closed' | 'filled';
  applicantsCount: number;
  createdAt: string;
}

export interface Application {
  id: string;
  jobId: string;
  studentId: string;
  studentName: string;
  coverLetter: string;
  status: 'pending' | 'shortlisted' | 'accepted' | 'rejected';
  appliedAt: string;
}

export interface StudentProfile {
  userId: string;
  bio: string;
  skills: string[];
  portfolio: string[];
  education: {
    university: string;
    degree: string;
    major: string;
    year: string;
  };
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string;
  }[];
  availability: string;
  hourlyRate?: number;
  rating: number;
  completionRate: number;
  profileCompletion: number;
}

export interface Service {
  id: string;
  studentId: string;
  studentName: string;
  title: string;
  description: string;
  category: string;
  price: number;
  priceType: 'hourly' | 'fixed';
  deliveryTime: string;
  skills: string[];
  rating: number;
  reviewsCount: number;
  createdAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  timestamp: string;
}

export interface Conversation {
  id: string;
  participants: {
    id: string;
    name: string;
    avatar?: string;
    role: string;
  }[];
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'earning' | 'payment' | 'withdrawal';
  amount: number;
  description: string;
  status: 'pending' | 'completed' | 'failed';
  date: string;
}

// Mock data
export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'React Developer for E-commerce Project',
    description: 'Looking for a skilled React developer to build a modern e-commerce platform. Must have experience with React, TypeScript, and Tailwind CSS.',
    category: 'freelancing',
    employerId: 'emp1',
    employerName: 'Sarah Johnson',
    employerCompany: 'TechStart Inc.',
    location: 'Remote',
    type: 'remote',
    budget: { min: 25, max: 40, type: 'hourly' },
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    duration: '3 months',
    deadline: '2026-03-15',
    status: 'active',
    applicantsCount: 12,
    createdAt: '2026-02-28',
  },
  {
    id: '2',
    title: 'Mathematics Tutor for Calculus II',
    description: 'Need help preparing for upcoming exams. Looking for a patient tutor with strong calculus background.',
    category: 'tutoring',
    employerId: 'stu2',
    employerName: 'Mike Chen',
    employerCompany: 'Student',
    location: 'University Campus',
    type: 'on-site',
    budget: { min: 20, max: 30, type: 'hourly' },
    skills: ['Calculus', 'Mathematics', 'Teaching'],
    duration: '1 month',
    deadline: '2026-03-10',
    status: 'active',
    applicantsCount: 5,
    createdAt: '2026-03-01',
  },
  {
    id: '3',
    title: 'Campus Event Photography',
    description: 'Photographer needed for annual spring festival. Must provide own equipment and have portfolio.',
    category: 'campus-jobs',
    employerId: 'admin1',
    employerName: 'Student Union',
    employerCompany: 'University Student Union',
    location: 'Main Campus',
    type: 'on-site',
    budget: { min: 300, max: 500, type: 'fixed' },
    skills: ['Photography', 'Photo Editing', 'Event Coverage'],
    duration: '2 days',
    deadline: '2026-03-08',
    status: 'active',
    applicantsCount: 8,
    createdAt: '2026-02-27',
  },
  {
    id: '4',
    title: 'Marketing Intern - Social Media',
    description: 'Join our marketing team as an intern. Help manage social media accounts, create content, and analyze performance metrics.',
    category: 'internships',
    employerId: 'emp2',
    employerName: 'David Martinez',
    employerCompany: 'GrowthHub Marketing',
    location: 'Hybrid',
    type: 'hybrid',
    budget: { min: 15, max: 20, type: 'hourly' },
    skills: ['Social Media', 'Content Creation', 'Analytics', 'Canva'],
    duration: '6 months',
    deadline: '2026-03-20',
    status: 'active',
    applicantsCount: 23,
    createdAt: '2026-02-25',
  },
  {
    id: '5',
    title: 'UI/UX Design for Mobile App',
    description: 'Design intuitive user interfaces for a student productivity app. Figma experience required.',
    category: 'freelancing',
    employerId: 'emp3',
    employerName: 'Lisa Wang',
    employerCompany: 'AppVenture',
    location: 'Remote',
    type: 'remote',
    budget: { min: 1500, max: 2500, type: 'fixed' },
    skills: ['UI Design', 'UX Design', 'Figma', 'Prototyping'],
    duration: '6 weeks',
    deadline: '2026-03-12',
    status: 'active',
    applicantsCount: 15,
    createdAt: '2026-02-26',
  },
];

export const mockServices: Service[] = [
  {
    id: 's1',
    studentId: 'stu1',
    studentName: 'Emma Thompson',
    title: 'Professional Resume Writing',
    description: 'Get a standout resume that gets you interviews. I\'ll work with you to highlight your strengths and achievements.',
    category: 'Career Services',
    price: 50,
    priceType: 'fixed',
    deliveryTime: '2 days',
    skills: ['Resume Writing', 'Career Counseling', 'LinkedIn Optimization'],
    rating: 4.9,
    reviewsCount: 47,
    createdAt: '2026-01-15',
  },
  {
    id: 's2',
    studentId: 'stu3',
    studentName: 'Alex Kumar',
    title: 'Python Programming Tutoring',
    description: 'Learn Python from basics to advanced. Specializing in data structures, algorithms, and Django.',
    category: 'Tutoring',
    price: 25,
    priceType: 'hourly',
    deliveryTime: 'Flexible',
    skills: ['Python', 'Django', 'Data Structures', 'Algorithms'],
    rating: 5.0,
    reviewsCount: 32,
    createdAt: '2026-01-20',
  },
];

export const categories = [
  { id: 'freelancing', name: 'Freelancing', icon: '💼' },
  { id: 'tutoring', name: 'Tutoring', icon: '📚' },
  { id: 'campus-jobs', name: 'Campus Jobs', icon: '🎓' },
  { id: 'internships', name: 'Internships', icon: '🚀' },
];

export const skills = [
  'React', 'TypeScript', 'Python', 'JavaScript', 'Node.js', 'Design', 'UI/UX',
  'Marketing', 'Content Writing', 'Photography', 'Video Editing', 'Graphic Design',
  'Data Analysis', 'Excel', 'Mathematics', 'Physics', 'Chemistry', 'Biology',
  'Teaching', 'Tutoring', 'Public Speaking', 'Event Planning', 'Social Media',
];
