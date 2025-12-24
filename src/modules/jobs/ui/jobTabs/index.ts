export const JOB_TABS = {
  CANDIDATES: 'Candidates',
  SUMMARY: 'Summary',
  TEAMS: 'Teams',
  RECOMMENDATIONS: 'Recommendations',
  ACTIVITIES: 'Activities',
  NOTES: 'Notes',
  ATTACHMENTS: 'Attachments',
  SOURCING: 'Sourcing',
  REPORTS: 'Reports',
} as const;

export type JobTab = typeof JOB_TABS[keyof typeof JOB_TABS];
