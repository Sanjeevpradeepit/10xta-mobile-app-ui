export const JOB_META = {
  id: '1',
  code: 'JD103',
  title: 'iOS Manager',
  company: 'Symphony',
  location: 'Albion, CA, USA',
  department: 'Mobile Engineering',
  hiringManager: 'Rahul Mehta',
  recruiter: 'Neha Sharma',
  openings: 3,
  status: 'OPEN',
  postedAt: '2025-02-10',
  salaryRange: '$120,000 - $150,000',
  employmentType: 'Full-time',
};


export const CANDIDATES = [
  {
    id: 'C1',
    name: 'Amit Patel',
    email: 'amit@gmail.com',
    stage: 'Screening',
    score: 78,
    experience: '7 years',
    status: 'Active',
  },
  {
    id: 'C2',
    name: 'Sarah Johnson',
    email: 'sarah@gmail.com',
    stage: 'Technical Round',
    score: 88,
    experience: '6 years',
    status: 'Active',
  },
];
export const JOB_SUMMARY = {
  description:
    'We are looking for an experienced iOS Manager to lead our mobile team.',
  responsibilities: [
    'Lead iOS team',
    'Architect mobile solutions',
    'Review code',
  ],
  requirements: ['Swift', 'SwiftUI', 'System Design', '7+ years experience'],
};
export const JOB_TEAMS = [
  { id: 'T1', name: 'Rahul Mehta', role: 'Hiring Manager' },
  { id: 'T2', name: 'Neha Sharma', role: 'Recruiter' },
];
export const JOB_NOTES = [
  { id: 'N1', author: 'Rahul', text: 'Strong architecture knowledge', date: '2025-03-06' },
  { id: 'N2', author: 'Neha', text: 'Candidate open to relocation', date: '2025-03-08' },
];
export const JOB_ATTACHMENTS = [
  { id: 'F1', fileName: 'JD103.pdf', type: 'PDF', date: '2025-02-10' },
  { id: 'F2', fileName: 'InterviewPanel.xlsx', type: 'Excel', date: '2025-02-20' },
];
export const JOB_ACTIVITIES = [
  { id: 'A1', type: 'Interview', description: 'Tech round scheduled', date: '2025-03-05' },
  { id: 'A2', type: 'Email', description: 'Offer discussion sent', date: '2025-03-07' },
];



export const JOB_SOURCING = {
  budget: {
    total: 5000,
    spent: 2800,
    currency: 'USD',
  },

  channels: [
    {
      id: 'S1',
      name: 'LinkedIn',
      applicants: 24,
      interviews: 8,
      hires: 2,
      cost: 1200,
    },
    {
      id: 'S2',
      name: 'Indeed',
      applicants: 18,
      interviews: 5,
      hires: 1,
      cost: 900,
    },
    {
      id: 'S3',
      name: 'Referral',
      applicants: 6,
      interviews: 4,
      hires: 1,
      cost: 300,
    },
    {
      id: 'S4',
      name: 'Company Website',
      applicants: 12,
      interviews: 3,
      hires: 0,
      cost: 400,
    },
  ],
};


export const JOB_RECOMMENDATIONS = [
  {
    id: 'R1',
    candidate: 'Sarah Johnson',
    recommendedBy: 'Rahul Mehta',
    reason: 'Strong iOS architecture experience and leadership skills',
    rating: 4.5,
  },
  {
    id: 'R2',
    candidate: 'Amit Patel',
    recommendedBy: 'David Clark',
    reason: 'Excellent SwiftUI and performance optimization knowledge',
    rating: 4.0,
  },
];
export const JOB_REPORTS = {
  timeToHire: '32 days',
  totalApplicants: 60,
  shortlisted: 18,
  interviewed: 12,
  offersSent: 4,
  hired: 3,
  conversionRate: '18%',
  dropOffRate: '22%',
  topSource: 'LinkedIn',
};