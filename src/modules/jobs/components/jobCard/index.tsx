// src/features/jobs/components/JobCard.tsx
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export type Job = {
  id: string;
  code: string;          // e.g. "JD103"
  title: string;         // e.g. "iOS Manager"
  company: string;
  location: string;
  statusColor: string;   // e.g. "#FF8800"
  submissions: number;
  pipeline: number;
};

type Props = {
  job: Job;
  onPress?: () => void;
};

const JobCard: React.FC<Props> = ({job, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.row}>
        <Text style={styles.code}>{job.code}</Text>
        <View style={[styles.dot, {backgroundColor: job.statusColor}]} />
      </View>

      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.location}>{job.location}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.meta}>Submissions: {job.submissions}</Text>
        <Text style={styles.meta}>Pipeline: {job.pipeline}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
  row: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  code: {fontWeight: '600', fontSize: 14, color: '#333'},
  dot: {width: 12, height: 12, borderRadius: 6},
  title: {marginTop: 4, fontSize: 16, fontWeight: '600', color: '#111'},
  company: {marginTop: 2, fontSize: 13, color: '#555'},
  location: {marginTop: 2, fontSize: 12, color: '#777'},
  metaRow: {flexDirection: 'row', marginTop: 8, justifyContent: 'space-between'},
  meta: {fontSize: 12, color: '#555'},
});

export default JobCard;
