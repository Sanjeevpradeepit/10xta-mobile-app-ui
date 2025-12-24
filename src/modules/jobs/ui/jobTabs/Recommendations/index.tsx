import { JOB_RECOMMENDATIONS } from '@/modules/jobs/data/job.meta';
import { View, Text, StyleSheet } from 'react-native';

export default function Recommendations() {
  return (
    <View style={styles.container}>
      {JOB_RECOMMENDATIONS.map(rec => (
        <View key={rec.id} style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.candidate}>{rec.candidate}</Text>
            <Text style={styles.rating}>⭐ {rec.rating}</Text>
          </View>

          <Text style={styles.by}>Recommended by {rec.recommendedBy}</Text>
          <Text style={styles.reason}>{rec.reason}</Text>
        </View>
      ))}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  candidate: {
    fontWeight: '700',
    fontSize: 14,
  },
  rating: {
    fontSize: 13,
    color: '#F2994A',
  },
  by: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  reason: {
    fontSize: 13,
    color: '#444',
  },
});
