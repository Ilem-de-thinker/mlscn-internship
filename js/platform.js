/**
 * MLSCN National Internship Application Platform - Shared Core JavaScript
 */

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
  "Taraba", "Yobe", "Zamfara"
];

// Helper to check if a collection needs seeding
function shouldSeed(key, minCount = 3) {
  try {
    const val = localStorage.getItem(key);
    if (!val) return true;
    const parsed = JSON.parse(val);
    if (!Array.isArray(parsed) || parsed.length < minCount) return true;
    return false;
  } catch {
    return true;
  }
}

// Initial mock data stored in localStorage if not present or empty
function initializeMockData(force = false) {
  try {
    if (force || shouldSeed('mlscn_institutions', 6)) {
      const institutions = [
        {
          id: 'inst-1',
          name: 'Lagos University Teaching Hospital (LUTH)',
          state: 'Lagos',
          city: 'Idi-Araba, Surulere',
          type: 'Federal Teaching Hospital',
          status: 'Verified',
          email: 'internships@luth.gov.ng',
          phone: '+234 1 555 0192',
          logo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=200&q=80',
          accreditationNumber: 'MLSCN/ACC/2021/045',
          description: 'Premier federal teaching hospital offering comprehensive medical laboratory internship rotations across Chemical Pathology, Hematology, Microbiology, and Histopathology.',
          slots: 25
        },
        {
          id: 'inst-2',
          name: 'University College Hospital (UCH)',
          state: 'Oyo',
          city: 'Ibadan',
          type: 'Federal Teaching Hospital',
          status: 'Verified',
          email: 'interim@uch-ibadan.org.ng',
          phone: '+234 2 810 0223',
          logo: 'https://images.unsplash.com/photo-1538108149319-fbb6c18f96fb?auto=format&fit=crop&w=200&q=80',
          accreditationNumber: 'MLSCN/ACC/2020/012',
          description: 'World-class medical training and diagnostic center with state-of-the-art molecular and pathology laboratories.',
          slots: 30
        },
        {
          id: 'inst-3',
          name: 'National Hospital Abuja',
          state: 'FCT - Abuja',
          city: 'Central Business District, Abuja',
          type: 'Federal Tertiary Hospital',
          status: 'Verified',
          email: 'hr@nationalhospital.gov.ng',
          phone: '+234 9 234 5000',
          logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=200&q=80',
          accreditationNumber: 'MLSCN/ACC/2022/089',
          description: 'Ultra-modern healthcare delivery and internship institution equipped with advanced diagnostic facilities.',
          slots: 20
        },
        {
          id: 'inst-4',
          name: 'University of Nigeria Teaching Hospital (UNTH)',
          state: 'Enugu',
          city: 'Ituku-Ozalla, Enugu',
          type: 'Federal Teaching Hospital',
          status: 'Verified',
          email: 'internships@unth.gov.ng',
          phone: '+234 42 250 200',
          logo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=200&q=80',
          accreditationNumber: 'MLSCN/ACC/2019/034',
          description: 'Renowned medical center providing rigorous professional internship training in medical laboratory science.',
          slots: 18
        },
        {
          id: 'inst-5',
          name: 'University of Benin Teaching Hospital (UBTH)',
          state: 'Edo',
          city: 'Ugbowo, Benin City',
          type: 'Federal Teaching Hospital',
          status: 'Verified',
          email: 'internships@ubth.org.ng',
          phone: '+234 52 600 400',
          logo: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=200&q=80',
          accreditationNumber: 'MLSCN/ACC/2021/077',
          description: 'Top-tier referral medical institution with dedicated reference laboratories in clinical chemistry and hematology.',
          slots: 22
        },
        {
          id: 'inst-6',
          name: 'Aminu Kano Teaching Hospital (AKTH)',
          state: 'Kano',
          city: 'Zaria Road, Kano',
          type: 'Federal Teaching Hospital',
          status: 'Verified',
          email: 'placement@akth.gov.ng',
          phone: '+234 64 648 111',
          logo: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=200&q=80',
          accreditationNumber: 'MLSCN/ACC/2020/055',
          description: 'Premier tertiary healthcare center serving Northern Nigeria with extensive public health diagnostic services.',
          slots: 25
        },
        {
          id: 'inst-7',
          name: 'Rivers State University Teaching Hospital (RSUTH)',
          state: 'Rivers',
          city: 'Harley Street, Port Harcourt',
          type: 'State Teaching Hospital',
          status: 'Verified',
          email: 'interns@rsuth.ng',
          phone: '+234 84 230 450',
          logo: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=200&q=80',
          accreditationNumber: 'MLSCN/ACC/2022/103',
          description: 'Modernized diagnostic complex providing high-throughput internship rotations in pathology and microbiology.',
          slots: 16
        },
        {
          id: 'inst-8',
          name: 'Federal Medical Centre Owerri (FMC Owerri)',
          state: 'Imo',
          city: 'Orlu Road, Owerri',
          type: 'Federal Tertiary Hospital',
          status: 'Verified',
          email: 'training@fmcowerri.gov.ng',
          phone: '+234 83 234 567',
          logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=200&q=80',
          accreditationNumber: 'MLSCN/ACC/2023/018',
          description: 'Rapidly expanding federal referral center accredited for professional internship in clinical laboratory disciplines.',
          slots: 15
        }
      ];
      localStorage.setItem('mlscn_institutions', JSON.stringify(institutions));
    }

    if (force || shouldSeed('mlscn_opportunities', 6)) {
      const opportunities = [
        {
          id: 'opp-1',
          institutionId: 'inst-1',
          institutionName: 'Lagos University Teaching Hospital (LUTH)',
          title: 'Medical Laboratory Science Internship 2026/2027 Cohort',
          state: 'Lagos',
          type: 'Full-time / Rotational',
          slots: 25,
          deadline: '2026-11-30',
          startDate: '2027-01-15',
          duration: '12 Months',
          stipend: '₦85,000 / month',
          description: 'Applications are invited from suitably qualified candidates for internship training in Medical Laboratory Science for the 2026/2027 service year. Rotations include Chemical Pathology, Medical Microbiology & Parasitology, Hematology & Blood Transfusion Science, and Histopathology/Cytology.',
          requirements: [
            'B.MLS degree from an accredited Nigerian university or equivalent foreign qualification',
            'Provisional registration / Induction certificate from MLSCN',
            'Current practicing license or index number',
            'NYSC call-up letter or exemption certificate (if applicable)',
            'SSCE / WAEC with credits in English, Mathematics, Biology, Chemistry, and Physics'
          ],
          status: 'Active',
          postedDate: '2026-10-01'
        },
        {
          id: 'opp-2',
          institutionId: 'inst-2',
          institutionName: 'University College Hospital (UCH)',
          title: 'B.MLS Professional Internship Program',
          state: 'Oyo',
          type: 'Full-time / Rotational',
          slots: 30,
          deadline: '2026-12-15',
          startDate: '2027-02-01',
          duration: '12 Months',
          stipend: '₦80,000 / month',
          description: 'UCH Ibadan invites applications for the 1-year compulsory internship for fresh Medical Laboratory Science graduates. Gain hands-on clinical diagnostic experience in high-throughput reference laboratories.',
          requirements: [
            'Bachelor of Medical Laboratory Science (B.MLS)',
            'MLSCN Provisional Registration Certificate',
            'Birth Certificate or Declaration of Age',
            'Three (3) Referee Letters'
          ],
          status: 'Active',
          postedDate: '2026-10-05'
        },
        {
          id: 'opp-3',
          institutionId: 'inst-3',
          institutionName: 'National Hospital Abuja',
          title: 'Clinical Medical Laboratory Internship',
          state: 'FCT - Abuja',
          type: 'Full-time / Rotational',
          slots: 20,
          deadline: '2026-12-01',
          startDate: '2027-01-10',
          duration: '12 Months',
          stipend: '₦90,000 / month',
          description: 'Comprehensive internship program at the federal capital. Exposure to advanced molecular diagnostics, immunology, and specialized clinical pathology.',
          requirements: [
            'B.MLS Degree with minimum Second Class Lower',
            'MLSCN Induction Certificate',
            'Medical Fitness Certificate from a recognized government hospital'
          ],
          status: 'Active',
          postedDate: '2026-09-28'
        },
        {
          id: 'opp-4',
          institutionId: 'inst-4',
          institutionName: 'University of Nigeria Teaching Hospital (UNTH)',
          title: 'Medical Laboratory Science Interns (2026 Batch B)',
          state: 'Enugu',
          type: 'Full-time / Rotational',
          slots: 18,
          deadline: '2026-11-25',
          startDate: '2027-01-05',
          duration: '12 Months',
          stipend: '₦75,000 / month',
          description: 'UNTH Ituku-Ozalla offers specialized rotational internship training across all core disciplines of Medical Laboratory Science.',
          requirements: [
            'B.MLS / AMLSCN qualification',
            'Valid MLSCN license or registration receipt',
            'Curriculum Vitae'
          ],
          status: 'Active',
          postedDate: '2026-10-02'
        },
        {
          id: 'opp-5',
          institutionId: 'inst-5',
          institutionName: 'University of Benin Teaching Hospital (UBTH)',
          title: 'Molecular Biology & Diagnostic Genetics Internship',
          state: 'Edo',
          type: 'Full-time / Rotational',
          slots: 15,
          deadline: '2026-12-20',
          startDate: '2027-02-15',
          duration: '12 Months',
          stipend: '₦85,000 / month',
          description: 'Specialized diagnostic internship focusing on automated clinical chemistry, PCR molecular testing, and transfusion medicine.',
          requirements: [
            'B.MLS Degree from an MLSCN accredited program',
            'Provisional practicing license',
            'Statement of results'
          ],
          status: 'Active',
          postedDate: '2026-10-08'
        },
        {
          id: 'opp-6',
          institutionId: 'inst-6',
          institutionName: 'Aminu Kano Teaching Hospital (AKTH)',
          title: 'Clinical Microbiology & Parasitology Internship',
          state: 'Kano',
          type: 'Full-time / Rotational',
          slots: 22,
          deadline: '2026-12-10',
          startDate: '2027-01-20',
          duration: '12 Months',
          stipend: '₦80,000 / month',
          description: 'Rotational placement with extensive clinical casework in bacteriology, mycology, virology, and medical parasitology.',
          requirements: [
            'B.MLS Degree',
            'MLSCN Registration Certificate',
            'Two Letters of Recommendation'
          ],
          status: 'Active',
          postedDate: '2026-10-06'
        },
        {
          id: 'opp-7',
          institutionId: 'inst-7',
          institutionName: 'Rivers State University Teaching Hospital (RSUTH)',
          title: 'Hematology & Blood Transfusion Rotation',
          state: 'Rivers',
          type: 'Full-time / Rotational',
          slots: 16,
          deadline: '2026-12-05',
          startDate: '2027-02-01',
          duration: '12 Months',
          stipend: '₦95,000 / month',
          description: 'Hands-on practical training in blood banking, component therapy, hemoglobinopathy screening, and coagulation diagnostics.',
          requirements: [
            'B.MLS Certificate or Statement of Result',
            'MLSCN Provisional License',
            'Evidence of Council Induction'
          ],
          status: 'Active',
          postedDate: '2026-10-04'
        },
        {
          id: 'opp-8',
          institutionId: 'inst-8',
          institutionName: 'Federal Medical Centre Owerri (FMC Owerri)',
          title: 'Chemical Pathology Diagnostic Residency',
          state: 'Imo',
          type: 'Full-time / Rotational',
          slots: 14,
          deadline: '2026-12-18',
          startDate: '2027-01-25',
          duration: '12 Months',
          stipend: '₦75,000 / month',
          description: 'Core laboratory diagnostics training covering automated biochemistry, endocrinology, toxicological screening, and urinalysis.',
          requirements: [
            'B.MLS qualification',
            'MLSCN Registration',
            'Certificate of Medical Fitness'
          ],
          status: 'Active',
          postedDate: '2026-10-09'
        }
      ];
      localStorage.setItem('mlscn_opportunities', JSON.stringify(opportunities));
    }

    if (force || shouldSeed('mlscn_applications', 4)) {
      const applications = [
        {
          id: 'app-101',
          opportunityId: 'opp-1',
          opportunityTitle: 'Medical Laboratory Science Internship 2026/2027 Cohort',
          institutionName: 'Lagos University Teaching Hospital (LUTH)',
          applicantId: 'usr-applicant',
          applicantName: 'Chukwudi Okonkwo',
          applicantEmail: 'chukwudi.o@example.com',
          phone: '+234 803 123 4567',
          mlscnNumber: 'MLSCN/PR/2026/9821',
          university: 'University of Lagos (UNILAG)',
          graduationYear: '2026',
          cgpa: '4.45 (First Class)',
          status: 'Under Review',
          submittedDate: '2026-10-08',
          documents: ['bmls_certificate.pdf', 'mlscn_provisional.pdf', 'nysc_letter.pdf']
        },
        {
          id: 'app-102',
          opportunityId: 'opp-2',
          opportunityTitle: 'B.MLS Professional Internship Program',
          institutionName: 'University College Hospital (UCH)',
          applicantId: 'usr-applicant',
          applicantName: 'Chukwudi Okonkwo',
          applicantEmail: 'chukwudi.o@example.com',
          phone: '+234 803 123 4567',
          mlscnNumber: 'MLSCN/PR/2026/9821',
          university: 'University of Lagos (UNILAG)',
          graduationYear: '2026',
          cgpa: '4.45 (First Class)',
          status: 'Shortlisted',
          submittedDate: '2026-10-06',
          documents: ['bmls_certificate.pdf', 'mlscn_provisional.pdf', 'nysc_letter.pdf']
        },
        {
          id: 'app-103',
          opportunityId: 'opp-3',
          opportunityTitle: 'Clinical Medical Laboratory Internship',
          institutionName: 'National Hospital Abuja',
          applicantId: 'usr-app-2',
          applicantName: 'Aisha Mohammed',
          applicantEmail: 'aisha.m@example.com',
          phone: '+234 802 987 6543',
          mlscnNumber: 'MLSCN/PR/2026/4102',
          university: 'Ahmadu Bello University (ABU)',
          graduationYear: '2026',
          cgpa: '4.60 (First Class)',
          status: 'Accepted',
          submittedDate: '2026-10-03',
          documents: ['abu_degree.pdf', 'mlscn_cert.pdf', 'nysc_callup.pdf']
        },
        {
          id: 'app-104',
          opportunityId: 'opp-4',
          opportunityTitle: 'Medical Laboratory Science Interns (2026 Batch B)',
          institutionName: 'University of Nigeria Teaching Hospital (UNTH)',
          applicantId: 'usr-app-3',
          applicantName: 'Emeka Nnamdi',
          applicantEmail: 'emeka.n@example.com',
          phone: '+234 806 333 4455',
          mlscnNumber: 'MLSCN/PR/2026/7789',
          university: 'University of Nigeria, Nsukka (UNN)',
          graduationYear: '2026',
          cgpa: '4.20 (Second Class Upper)',
          status: 'Shortlisted',
          submittedDate: '2026-10-04',
          documents: ['unn_statement.pdf', 'mlscn_provisional.pdf', 'nysc_exemption.pdf']
        },
        {
          id: 'app-105',
          opportunityId: 'opp-5',
          opportunityTitle: 'Molecular Biology & Diagnostic Genetics Internship',
          institutionName: 'University of Benin Teaching Hospital (UBTH)',
          applicantId: 'usr-app-4',
          applicantName: 'Blessing Adeleke',
          applicantEmail: 'blessing.a@example.com',
          phone: '+234 814 555 7890',
          mlscnNumber: 'MLSCN/PR/2026/3312',
          university: 'University of Benin (UNIBEN)',
          graduationYear: '2026',
          cgpa: '4.55 (First Class)',
          status: 'Accepted',
          submittedDate: '2026-10-02',
          documents: ['uniben_cert.pdf', 'mlscn_receipt.pdf', 'nysc_letter.pdf']
        },
        {
          id: 'app-106',
          opportunityId: 'opp-6',
          opportunityTitle: 'Clinical Microbiology & Parasitology Internship',
          institutionName: 'Aminu Kano Teaching Hospital (AKTH)',
          applicantId: 'usr-app-5',
          applicantName: 'Fatima Umar',
          applicantEmail: 'fatima.u@example.com',
          phone: '+234 803 777 9900',
          mlscnNumber: 'MLSCN/PR/2026/6654',
          university: 'Bayero University Kano (BUK)',
          graduationYear: '2026',
          cgpa: '4.32 (Second Class Upper)',
          status: 'Under Review',
          submittedDate: '2026-10-07',
          documents: ['buk_result.pdf', 'mlscn_provisional.pdf', 'nysc_letter.pdf']
        }
      ];
      localStorage.setItem('mlscn_applications', JSON.stringify(applications));
    }

    if (force || shouldSeed('mlscn_announcements', 3)) {
      const announcements = [
        {
          id: 'ann-1',
          title: 'Guidelines for 2026/2027 Medical Laboratory Science Internship Placement',
          date: '2026-10-01',
          category: 'Policy',
          content: 'The Medical Laboratory Science Council of Nigeria (MLSCN) wishes to inform all newly inducted graduates and approved training institutions regarding the centralized online portal for internship placement. All applications must be submitted directly through this platform.'
        },
        {
          id: 'ann-2',
          title: 'Mandatory Accreditation Update for Training Centers',
          date: '2026-09-15',
          category: 'Institution Notice',
          content: 'All accredited teaching hospitals and specialist laboratories are required to update their available internship quotas on or before November 30, 2026.'
        },
        {
          id: 'ann-3',
          title: 'Provisional Registration Indexing Schedule for 2026 Inductees',
          date: '2026-09-28',
          category: 'Council Circular',
          content: 'Candidates who participated in the September 2026 induction ceremonies across approved universities can now verify their provisional license status online using their MLSCN index numbers.'
        },
        {
          id: 'ann-4',
          title: 'National Quota Allocation Policy for Federal Health Institutions',
          date: '2026-10-05',
          category: 'Regulatory Notice',
          content: 'Pursuant to Council regulations, all participating institutions must prioritize candidates registered under the centralized portal and uphold standard federal stipends across all geopolitical zones.'
        }
      ];
      localStorage.setItem('mlscn_announcements', JSON.stringify(announcements));
    }

    if (force || !localStorage.getItem('mlscn_user')) {
      localStorage.setItem('mlscn_user', JSON.stringify({
        role: 'guest',
        name: '',
        email: ''
      }));
    }
  } catch (err) {
    console.warn('Storage initialization warning:', err);
  }
}

// Ensure mock data is immediately initialized into localStorage on script evaluation!
initializeMockData();

// Safe getter that guarantees non-empty array data
function getStoredArray(key) {
  try {
    const val = localStorage.getItem(key);
    if (val) {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  initializeMockData(true);
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (e) {
    return [];
  }
}

// Helper to get current logged in user
function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('mlscn_user')) || { role: 'guest' };
  } catch {
    return { role: 'guest' };
  }
}

// Helper to set current user
function setCurrentUser(userObj) {
  localStorage.setItem('mlscn_user', JSON.stringify(userObj));
}
if (typeof window !== 'undefined') {
  window.initializeMockData = initializeMockData;
  window.resetDemoData = function() {
    initializeMockData(true);
    window.location.reload();
  };
  window.getStoredArray = getStoredArray;
  window.setCurrentUser = setCurrentUser;
  window.getCurrentUser = getCurrentUser;
}

// Render dynamic navbar based on user role
function renderNavbar() {
  const user = getCurrentUser();
  const navContainers = document.querySelectorAll('.dynamic-navbar');
  
  navContainers.forEach(container => {
    let dashboardLink = 'index.html';
    if (user.role === 'applicant') dashboardLink = 'applicant-dashboard.html';
    if (user.role === 'institution') dashboardLink = 'institution-dashboard.html';
    if (user.role === 'admin') dashboardLink = 'admin-dashboard.html';

    let authButtons = '';
    if (user.role === 'guest') {
      authButtons = `
        <div class="flex items-center space-x-3">
          <a href="applicant-login.html" class="text-slate-700 hover:text-teal-700 font-medium px-3 py-2 text-sm transition">Applicant Login</a>
          <a href="institution-login.html" class="text-slate-700 hover:text-teal-700 font-medium px-3 py-2 text-sm transition">Institution Portal</a>
          <a href="applicant-register.html" class="bg-teal-700 hover:bg-teal-800 text-white font-medium px-4 py-2 rounded-lg text-sm shadow-sm transition">Register / Apply</a>
        </div>
      `;
    } else {
      authButtons = `
        <div class="flex items-center space-x-4">
          <span class="text-xs uppercase tracking-wider bg-teal-100 text-teal-800 px-2.5 py-1 rounded-full font-semibold">${user.role}</span>
          <a href="${dashboardLink}" class="bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2 rounded-lg text-sm transition">Dashboard</a>
          <button id="logout-btn" class="text-red-600 hover:text-red-700 font-medium text-sm">Logout</button>
        </div>
      `;
    }

    container.innerHTML = `
      <header class="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-20 items-center">
            <div class="flex items-center space-x-3">
              <a href="index.html" class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round5" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <div>
                  <h1 class="font-bold text-slate-900 text-lg leading-tight">MLSCN Internship</h1>
                  <p class="text-xs text-slate-500 font-medium">National Placement Portal</p>
                </div>
              </a>
            </div>
            
            <nav class="hidden md:flex items-center space-x-8">
              <a href="opportunities.html" class="text-slate-600 hover:text-teal-700 font-medium text-sm transition">Opportunities</a>
              <a href="browse-by-state.html" class="text-slate-600 hover:text-teal-700 font-medium text-sm transition">Browse by State</a>
              <a href="announcements.html" class="text-slate-600 hover:text-teal-700 font-medium text-sm transition">Announcements</a>
              <a href="faq.html" class="text-slate-600 hover:text-teal-700 font-medium text-sm transition">FAQ</a>
              <a href="contact.html" class="text-slate-600 hover:text-teal-700 font-medium text-sm transition">Support</a>
            </nav>

            <div class="hidden md:block">
              ${authButtons}
            </div>

            <div class="md:hidden flex items-center">
              <button id="mobile-menu-btn" class="text-slate-600 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3">
          <a href="opportunities.html" class="block text-slate-700 font-medium py-2">Opportunities</a>
          <a href="browse-by-state.html" class="block text-slate-700 font-medium py-2">Browse by State</a>
          <a href="announcements.html" class="block text-slate-700 font-medium py-2">Announcements</a>
          <a href="faq.html" class="block text-slate-700 font-medium py-2">FAQ</a>
          <a href="contact.html" class="block text-slate-700 font-medium py-2">Support</a>
          <div class="pt-2 border-t border-slate-100">
            ${authButtons}
          </div>
        </div>
      </header>
    `;

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.setItem('mlscn_user', JSON.stringify({ role: 'guest' }));
        window.location.href = 'index.html';
      });
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  });
}

function renderFooter() {
  const footerContainers = document.querySelectorAll('.dynamic-footer');
  footerContainers.forEach(container => {
    container.innerHTML = `
      <footer class="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <span class="text-white font-bold text-lg">MLSCN Portal</span>
              </div>
              <p class="text-sm text-slate-400 leading-relaxed mb-4">
                The official national internship placement and accreditation portal for Medical Laboratory Science in Nigeria.
              </p>
              <p class="text-xs text-slate-500">© 2026 Medical Laboratory Science Council of Nigeria. All rights reserved.</p>
            </div>

            <div>
              <h4 class="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Quick Links</h4>
              <ul class="space-y-2.5 text-sm">
                <li><a href="opportunities.html" class="hover:text-teal-400 transition">Browse Opportunities</a></li>
                <li><a href="browse-by-state.html" class="hover:text-teal-400 transition">Openings by State</a></li>
                <li><a href="announcements.html" class="hover:text-teal-400 transition">Official Announcements</a></li>
                <li><a href="institution-register.html" class="hover:text-teal-400 transition">Register Training Institution</a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Portals & Login</h4>
              <ul class="space-y-2.5 text-sm">
                <li><a href="applicant-login.html" class="hover:text-teal-400 transition">Applicant Portal</a></li>
                <li><a href="institution-login.html" class="hover:text-teal-400 transition">Institution Portal</a></li>
                <li><a href="admin-login.html" class="hover:text-teal-400 transition">MLSCN Admin Login</a></li>
                <li><a href="faq.html" class="hover:text-teal-400 transition">Frequently Asked Questions</a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Legal & Support</h4>
              <ul class="space-y-2.5 text-sm">
                <li><a href="privacy-policy.html" class="hover:text-teal-400 transition">Privacy Policy</a></li>
                <li><a href="terms.html" class="hover:text-teal-400 transition">Terms of Service</a></li>
                <li><a href="contact.html" class="hover:text-teal-400 transition">Contact & Help Desk</a></li>
                <li><a href="institution-verification.html" class="hover:text-teal-400 transition">Verify Accredited Center</a></li>
                <li><button onclick="resetDemoData()" class="text-teal-400 hover:text-teal-300 transition text-xs flex items-center gap-1 cursor-pointer pt-1">↻ Reset Demo Data</button></li>
              </ul>
            </div>
          </div>

          <div class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
            <p>Medical Laboratory Science Council of Nigeria (MLSCN) National Portal</p>
            <div class="flex space-x-6 mt-4 sm:mt-0">
              <a href="privacy-policy.html" class="hover:underline">Privacy</a>
              <a href="terms.html" class="hover:underline">Terms</a>
              <a href="contact.html" class="hover:underline">Support</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  });
}

// Auto-run initialization on script load
function initPlatform() {
  initializeMockData();
  renderNavbar();
  renderFooter();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPlatform);
} else {
  initPlatform();
}
