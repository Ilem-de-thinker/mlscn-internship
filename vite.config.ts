import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          opportunities: path.resolve(__dirname, 'opportunities.html'),
          opportunityDetails: path.resolve(__dirname, 'opportunity-details.html'),
          browseByState: path.resolve(__dirname, 'browse-by-state.html'),
          institutionProfile: path.resolve(__dirname, 'institution-profile.html'),
          institutionRegister: path.resolve(__dirname, 'institution-register.html'),
          institutionVerification: path.resolve(__dirname, 'institution-verification.html'),
          announcements: path.resolve(__dirname, 'announcements.html'),
          faq: path.resolve(__dirname, 'faq.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          privacyPolicy: path.resolve(__dirname, 'privacy-policy.html'),
          terms: path.resolve(__dirname, 'terms.html'),
          applicantRegister: path.resolve(__dirname, 'applicant-register.html'),
          applicantLogin: path.resolve(__dirname, 'applicant-login.html'),
          institutionLogin: path.resolve(__dirname, 'institution-login.html'),
          adminLogin: path.resolve(__dirname, 'admin-login.html'),
          forgotPassword: path.resolve(__dirname, 'forgot-password.html'),
          resetPassword: path.resolve(__dirname, 'reset-password.html'),
          verifyAccount: path.resolve(__dirname, 'verify-account.html'),
          applicantDashboard: path.resolve(__dirname, 'applicant-dashboard.html'),
          applicantProfile: path.resolve(__dirname, 'applicant-profile.html'),
          editProfile: path.resolve(__dirname, 'edit-profile.html'),
          myApplications: path.resolve(__dirname, 'my-applications.html'),
          applicationDetails: path.resolve(__dirname, 'application-details.html'),
          apply: path.resolve(__dirname, 'apply.html'),
          applicationConfirmation: path.resolve(__dirname, 'application-confirmation.html'),
          savedOpportunities: path.resolve(__dirname, 'saved-opportunities.html'),
          notifications: path.resolve(__dirname, 'notifications.html'),
          applicantSettings: path.resolve(__dirname, 'applicant-settings.html'),
          institutionDashboard: path.resolve(__dirname, 'institution-dashboard.html'),
          institutionProfileSettings: path.resolve(__dirname, 'institution-profile-settings.html'),
          manageOpportunities: path.resolve(__dirname, 'manage-opportunities.html'),
          createOpportunity: path.resolve(__dirname, 'create-opportunity.html'),
          editOpportunity: path.resolve(__dirname, 'edit-opportunity.html'),
          institutionApplicants: path.resolve(__dirname, 'institution-applicants.html'),
          reviewApplication: path.resolve(__dirname, 'review-application.html'),
          shortlistedApplicants: path.resolve(__dirname, 'shortlisted-applicants.html'),
          acceptedApplicants: path.resolve(__dirname, 'accepted-applicants.html'),
          institutionStaff: path.resolve(__dirname, 'institution-staff.html'),
          institutionNotifications: path.resolve(__dirname, 'institution-notifications.html'),
          institutionSettings: path.resolve(__dirname, 'institution-settings.html'),
          adminDashboard: path.resolve(__dirname, 'admin-dashboard.html'),
          manageInstitutions: path.resolve(__dirname, 'manage-institutions.html'),
          manageApplicants: path.resolve(__dirname, 'manage-applicants.html'),
          adminManageOpportunities: path.resolve(__dirname, 'admin-manage-opportunities.html'),
          allApplications: path.resolve(__dirname, 'all-applications.html'),
          applicationMonitoring: path.resolve(__dirname, 'application-monitoring.html'),
          nationalAnalytics: path.resolve(__dirname, 'national-analytics.html'),
          manageAnnouncements: path.resolve(__dirname, 'manage-announcements.html'),
          reports: path.resolve(__dirname, 'reports.html'),
          complaints: path.resolve(__dirname, 'complaints.html'),
          auditLogs: path.resolve(__dirname, 'audit-logs.html'),
          platformSettings: path.resolve(__dirname, 'platform-settings.html')
        }
      }
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
