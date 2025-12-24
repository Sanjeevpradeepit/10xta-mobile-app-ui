import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Job } from '@/modules/jobs/components/jobCard';

type JobsStackParamList = {
  JobsList: undefined;
  JobDetails: { jobId: string };
};

type Props = NativeStackScreenProps<JobsStackParamList, 'JobDetails'>;

const JOBS_MAP: Record<string, Job> = {
  '1': {
    id: '1',
    code: 'JD103',
    title: 'iOS Manager',
    company: 'Symphony',
    location: 'Albion, CA, USA',
    statusColor: '#FF8800',
    submissions: 0,
    pipeline: 0,
  },
};

const JobDetailsScreen: React.FC<Props> = ({ route }) => {
  const job = JOBS_MAP[route.params.jobId];

  if (!job) {
    return (
      <View style={styles.center}>
        <Text>Job not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text>{job.company}</Text>
      <Text>{job.location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
});

export default JobDetailsScreen;
