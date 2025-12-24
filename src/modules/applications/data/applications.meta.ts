/* =======================
   APPLICATION LIST
======================= */

export const APPLICATIONS = [
  {
    id: 'A1',
    jobTitle: 'iOS Manager',
    company: 'Symphony',
    candidate: 'Amit Patel',
    appliedDate: '2025-03-05',
    status: 'Interview Scheduled',
    location: 'Albion, CA',
  },
  {
    id: 'A2',
    jobTitle: 'Backend Lead',
    company: 'Infosys',
    candidate: 'Sarah Johnson',
    appliedDate: '2025-03-02',
    status: 'Screening',
    location: 'New York, USA',
  },
  {
    id: 'A3',
    jobTitle: 'React Native Developer',
    company: 'TCS',
    candidate: 'Rohit Verma',
    appliedDate: '2025-02-28',
    status: 'Offer Sent',
    location: 'Bangalore, India',
  },
  {
    id: 'A4',
    jobTitle: 'QA Automation Engineer',
    company: 'Wipro',
    candidate: 'Neha Sharma',
    appliedDate: '2025-02-20',
    status: 'Rejected',
    location: 'Pune, India',
  },
  {
    id: 'A5',
    jobTitle: 'DevOps Engineer',
    company: 'Amazon',
    candidate: 'Kunal Mehta',
    appliedDate: '2025-02-18',
    status: 'Hired',
    location: 'Seattle, USA',
  },
];

/* =======================
   TABS
======================= */

export const APPLICATION_TABS = {
  SUMMARY: 'Summary',
  RESUME: 'Resume',
  INBOX: 'Inbox',
  SOCIAL: 'Social',
  RECOMMENDATION: 'Recommendation',
  ACTIVITIES: 'Activities',
  NOTES: 'Notes',
  ATTACHMENTS: 'Attachments',
  HISTORY: 'History',
} as const;

export type ApplicationTab =
  typeof APPLICATION_TABS[keyof typeof APPLICATION_TABS];

/* =======================
   APPLICATION DETAILS
======================= */

export const APPLICATION_DETAILS = {
  summary: {
    candidate: 'Amit Patel',
    job: 'iOS Manager',
    stage: 'Interview',
    appliedOn: '2025-03-05',
    recruiter: 'Medan Sri',
    experience: '7 years',
  },

  resume: {
    file: 'amit_patel_resume.pdf',
    skills: ['Swift', 'SwiftUI', 'System Design', 'Leadership', 'CI/CD'],
    experience: '7 years',
    education: 'B.Tech in Computer Science',
  },

  inbox: [
    {
      id: 1,
      from: 'Recruiter',
      message: 'Your interview is scheduled for 10 March at 10 AM',
      date: '2025-03-06',
    },
    {
      id: 2,
      from: 'Candidate',
      message: 'Thank you, I will attend',
      date: '2025-03-06',
    },
  ],

  social: {
    linkedin: 'https://linkedin.com/in/amitpatel',
    github: 'https://github.com/amitpatel',
    twitter: 'https://twitter.com/amitpatel',
  },

  recommendations: [
    {
      id: 1,
      by: 'Rahul Verma',
      role: 'Engineering Manager',
      text: 'Amit is one of the best iOS engineers I have worked with.',
    },
    {
      id: 2,
      by: 'Neha Sharma',
      role: 'Tech Lead',
      text: 'Strong leadership and clean architecture skills.',
    },
  ],

  activities: [
    {
      id: 1,
      type: 'Resume Reviewed',
      date: '2025-03-04',
    },
    {
      id: 2,
      type: 'Interview Scheduled',
      date: '2025-03-06',
    },
    {
      id: 3,
      type: 'Technical Round Completed',
      date: '2025-03-08',
    },
  ],

  notes: [
    {
      id: 1,
      author: 'Neha Sharma',
      text: 'Candidate is open to relocation.',
      date: '2025-03-05',
    },
    {
      id: 2,
      author: 'Medan Sri',
      text: 'Strong communication and leadership skills.',
      date: '2025-03-07',
    },
  ],

  attachments: [
    {
      id: 1,
      fileName: 'Job_Description.pdf',
      type: 'PDF',
    },
    {
      id: 2,
      fileName: 'Interview_Feedback.docx',
      type: 'Document',
    },
  ],

  history: [
    {
      id: 1,
      status: 'Applied',
      date: '2025-03-05',
    },
    {
      id: 2,
      status: 'Screening',
      date: '2025-03-06',
    },
    {
      id: 3,
      status: 'Interview Scheduled',
      date: '2025-03-06',
    },
    {
      id: 4,
      status: 'Technical Round',
      date: '2025-03-08',
    },
  ],
};
