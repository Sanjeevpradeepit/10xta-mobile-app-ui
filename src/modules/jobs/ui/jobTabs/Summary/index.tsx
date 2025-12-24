import { View, Text, StyleSheet } from 'react-native';
import { JOB_META, JOB_SUMMARY } from '@/modules/jobs/data/job.meta';

export default function Summary() {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.label}>Department</Text>
        <Text style={styles.value}>{JOB_META.department}</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.label}>Hiring Manager</Text>
        <Text style={styles.value}>{JOB_META.hiringManager}</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.label}>Salary Range</Text>
        <Text style={styles.value}>{JOB_META.salaryRange}</Text>
      </View>

      <Text style={styles.section}>Responsibilities</Text>

      {JOB_SUMMARY.responsibilities.map(r => (
        <View key={r} style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.listText}>{r}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  block: {
    marginBottom: 14,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 1,
  },
  label: {
    fontSize: 12,
    color: '#888',
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
  },
  section: {
    fontSize: 14,
    fontWeight: '700',
    marginVertical: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 14,
    marginRight: 8,
  },
  listText: {
    flex: 1,
    fontSize: 13,
    color: '#444',
  },
});
