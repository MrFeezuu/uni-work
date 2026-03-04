import { createBrowserRouter } from "react-router";
import { PublicLayout } from "./layouts/PublicLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { AuthLayout } from "./layouts/AuthLayout";

// Public Pages
import { HomePage } from "./pages/public/HomePage";
import { AboutPage } from "./pages/public/AboutPage";
import { HowItWorksPage } from "./pages/public/HowItWorksPage";
import { BrowseJobsPage } from "./pages/public/BrowseJobsPage";
import { BrowseTalentPage } from "./pages/public/BrowseTalentPage";
import { PricingPage } from "./pages/public/PricingPage";
import { BlogPage } from "./pages/public/BlogPage";
import { FAQPage } from "./pages/public/FAQPage";
import { ContactPage } from "./pages/public/ContactPage";

// Auth Pages
import { SignupPage } from "./pages/auth/SignupPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { VerifyEmailPage } from "./pages/auth/VerifyEmailPage";
import { ForgotPasswordPage } from "./pages/auth/ForgotPasswordPage";
import { ResetPasswordPage } from "./pages/auth/ResetPasswordPage";

// Student Dashboard
import { StudentDashboard } from "./pages/dashboard/student/StudentDashboard";
import { StudentProfile } from "./pages/dashboard/student/StudentProfile";
import { MyApplications } from "./pages/dashboard/student/MyApplications";
import { MyServices } from "./pages/dashboard/student/MyServices";
import { TutoringSection } from "./pages/dashboard/student/TutoringSection";
import { Messages } from "./pages/dashboard/student/Messages";
import { Earnings } from "./pages/dashboard/student/Earnings";

// Employer Dashboard
import { EmployerDashboard } from "./pages/dashboard/employer/EmployerDashboard";
import { PostJob } from "./pages/dashboard/employer/PostJob";
import { ManageJobs } from "./pages/dashboard/employer/ManageJobs";
import { Applicants } from "./pages/dashboard/employer/Applicants";
import { EmployerPayments } from "./pages/dashboard/employer/EmployerPayments";

// Admin Dashboard
import { AdminDashboard } from "./pages/dashboard/admin/AdminDashboard";
import { ManageUsers } from "./pages/dashboard/admin/ManageUsers";
import { ManageJobsAdmin } from "./pages/dashboard/admin/ManageJobsAdmin";
import { ManagePayments } from "./pages/dashboard/admin/ManagePayments";
import { EmailManagement } from "./pages/dashboard/admin/EmailManagement";

import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "how-it-works", Component: HowItWorksPage },
      { path: "browse-jobs", Component: BrowseJobsPage },
      { path: "browse-talent", Component: BrowseTalentPage },
      { path: "pricing", Component: PricingPage },
      { path: "blog", Component: BlogPage },
      { path: "faq", Component: FAQPage },
      { path: "contact", Component: ContactPage },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "signup", Component: SignupPage },
      { path: "login", Component: LoginPage },
      { path: "verify-email", Component: VerifyEmailPage },
      { path: "forgot-password", Component: ForgotPasswordPage },
      { path: "reset-password", Component: ResetPasswordPage },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      // Student routes
      { path: "student", Component: StudentDashboard },
      { path: "student/profile", Component: StudentProfile },
      { path: "student/applications", Component: MyApplications },
      { path: "student/services", Component: MyServices },
      { path: "student/tutoring", Component: TutoringSection },
      { path: "student/messages", Component: Messages },
      { path: "student/earnings", Component: Earnings },
      
      // Employer routes
      { path: "employer", Component: EmployerDashboard },
      { path: "employer/post-job", Component: PostJob },
      { path: "employer/jobs", Component: ManageJobs },
      { path: "employer/applicants", Component: Applicants },
      { path: "employer/payments", Component: EmployerPayments },
      
      // Admin routes
      { path: "admin", Component: AdminDashboard },
      { path: "admin/users", Component: ManageUsers },
      { path: "admin/jobs", Component: ManageJobsAdmin },
      { path: "admin/payments", Component: ManagePayments },
      { path: "admin/emails", Component: EmailManagement },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
