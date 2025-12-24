import { APPLICATION_TABS } from "@/modules/applications/data/applications.meta";

import Summary from "./Summary";
import Resume from "./Resume";
import Inbox from "./Inbox";
import Social from "./Social";
import Recommendation from "./Recommendation";
import Activities from "./Activities";
import Notes from "./Notes";
import Attachments from "./Attachments";
import History from "./History";

export const APPLICATION_TAB_COMPONENTS = {
  [APPLICATION_TABS.SUMMARY]: Summary,
  [APPLICATION_TABS.RESUME]: Resume,
  [APPLICATION_TABS.INBOX]: Inbox,
  [APPLICATION_TABS.SOCIAL]: Social,
  [APPLICATION_TABS.RECOMMENDATION]: Recommendation,
  [APPLICATION_TABS.ACTIVITIES]: Activities,
  [APPLICATION_TABS.NOTES]: Notes,
  [APPLICATION_TABS.ATTACHMENTS]: Attachments,
  [APPLICATION_TABS.HISTORY]: History,
} as const;
