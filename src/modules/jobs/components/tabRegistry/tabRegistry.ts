import { JOB_TABS } from '../../ui/jobTabs';

import Candidates from '../../ui/jobTabs/Candidates/Candidates';
import Summary from '../../ui/jobTabs/Summary';
import Teams from '../../ui/jobTabs/Teams';
import Recommendations from '../../ui/jobTabs/Recommendations';
import Activities from '../../ui/jobTabs/Activities';
import Notes from '../../ui/jobTabs/Notes';
import Attachments from '../../ui/jobTabs/Attachments';
import Sourcing from '../../ui/jobTabs/Sourcing';
import Reports from '../../ui/jobTabs/Reports';

export const TAB_COMPONENTS = {
  [JOB_TABS.CANDIDATES]: Candidates,
  [JOB_TABS.SUMMARY]: Summary,
  [JOB_TABS.TEAMS]: Teams,
  [JOB_TABS.RECOMMENDATIONS]: Recommendations,
  [JOB_TABS.ACTIVITIES]: Activities,
  [JOB_TABS.NOTES]: Notes,
  [JOB_TABS.ATTACHMENTS]: Attachments,
  [JOB_TABS.SOURCING]: Sourcing,
  [JOB_TABS.REPORTS]: Reports,
} as const;
