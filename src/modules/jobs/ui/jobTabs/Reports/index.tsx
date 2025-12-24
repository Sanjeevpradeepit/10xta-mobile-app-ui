import { JOB_REPORTS } from '@/modules/jobs/data/job.meta';
import { View, Text, StyleSheet } from 'react-native';

export default function Reports() {
  const r = JOB_REPORTS;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Time to Hire</Text>
        <Text style={styles.value}>{r.timeToHire}</Text>
      </View>

      <View style={styles.grid}>
        <Metric label="Applicants" value={r.totalApplicants} />
        <Metric label="Shortlisted" value={r.shortlisted} />
        <Metric label="Interviewed" value={r.interviewed} />
        <Metric label="Offers" value={r.offersSent} />
        <Metric label="Hired" value={r.hired} />
      </View>

      <View style={styles.card}>
        <Text>Conversion Rate: {r.conversionRate}</Text>
        <Text>Drop-off Rate: {r.dropOffRate}</Text>
        <Text>Top Source: {r.topSource}</Text>
      </View>
    </View>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 1,
  },
  label: {
    fontSize: 12,
    color: '#777',
  },
  value: {
    fontSize: 20,
    fontWeight: '700',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  metric: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 1,
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A73E8',
  },
  metricLabel: {
    fontSize: 12,
    color: '#777',
  },
});
