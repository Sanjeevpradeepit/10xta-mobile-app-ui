import { JOB_SOURCING } from '@/modules/jobs/data/job.meta';
import { View, Text, StyleSheet } from 'react-native';

export default function Sourcing() {
  const { budget, channels } = JOB_SOURCING;

  const percent = Math.round((budget.spent / budget.total) * 100);

  return (
    <View style={styles.container}>
      {/* Budget */}
      <View style={styles.budgetCard}>
        <Text style={styles.label}>Sourcing Budget</Text>
        <Text style={styles.amount}>
          ${budget.spent} / ${budget.total}
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: `${percent}%` }]} />
        </View>
        <Text style={styles.percent}>{percent}% used</Text>
      </View>

      {/* Channels */}
      <Text style={styles.section}>Sources</Text>

      {channels.map(source => (
        <View key={source.id} style={styles.sourceCard}>
          <Text style={styles.sourceName}>{source.name}</Text>

          <View style={styles.row}>
            <Text>Applicants</Text>
            <Text>{source.applicants}</Text>
          </View>

          <View style={styles.row}>
            <Text>Interviews</Text>
            <Text>{source.interviews}</Text>
          </View>

          <View style={styles.row}>
            <Text>Hires</Text>
            <Text>{source.hires}</Text>
          </View>

          <View style={styles.row}>
            <Text>Cost</Text>
            <Text>${source.cost}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  budgetCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 16,
  },
  label: {
    color: '#777',
    fontSize: 12,
  },
  amount: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 6,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progress: {
    height: 8,
    backgroundColor: '#1A73E8',
  },
  percent: {
    fontSize: 12,
    color: '#777',
    marginTop: 6,
  },
  section: {
    fontWeight: '700',
    marginBottom: 10,
  },
  sourceCard: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 1,
  },
  sourceName: {
    fontWeight: '700',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
});
