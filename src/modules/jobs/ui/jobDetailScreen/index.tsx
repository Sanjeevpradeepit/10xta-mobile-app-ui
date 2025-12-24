import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { JOB_TABS, JobTab } from '../jobTabs';
import { JOB_META } from '@/modules/jobs/data/job.meta';
import { TAB_COMPONENTS } from '../../components/tabRegistry/tabRegistry';
import { useThemedStyles } from '@/shared/theme';
import { createStyles } from './styles';
import Screen from '@/shared/components/screen/Screen';
import CustomHeader from '@/shared/components/customHeader';

type JobsStackParamList = {
  JobsList: undefined;
  JobDetails: { jobId: string };
};

type Props = NativeStackScreenProps<JobsStackParamList, 'JobDetails'>;

export default function JobDetailsScreen({ route ,navigation}: Props) {
  const { jobId } = route.params;
   const styles = useThemedStyles(createStyles); // ✅ ONE line
  const [tab, setTab] = useState<JobTab>(JOB_TABS.CANDIDATES);

  const ActiveTab = TAB_COMPONENTS[tab];
 const onPressBack = () => navigation.goBack();
  return (
    <Screen
              keyboardAvoid
              scroll
              listMode
              
              header={<CustomHeader onPressBack={onPressBack} title="Job Details" />}
            >
    <View style={styles.container}>
      {/* Header */}
      {/* <Text style={styles.title}>{JOB_META.title}</Text> */}

      {/* Tabs */}
      <View style={styles.tabBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabContent}
        >
          {Object.values(JOB_TABS).map(tabKey => (
            <TouchableOpacity
              key={tabKey}
              onPress={() => setTab(tabKey)}
              style={styles.tabButton}
            >
              <Text
                style={[
                  styles.tabText,
                  tab === tabKey && styles.activeTabText,
                ]}
              >
                {tabKey}
              </Text>

              {tab === tabKey && <View style={styles.indicator} />}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {ActiveTab && <ActiveTab jobId={jobId} />}
      </View>
    </View>
    </Screen>
  );
}
