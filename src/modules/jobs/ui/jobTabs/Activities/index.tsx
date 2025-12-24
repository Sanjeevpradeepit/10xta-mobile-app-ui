import { JOB_ACTIVITIES } from '@/modules/jobs/data/job.meta';
import { View, Text, StyleSheet } from 'react-native';

export default function Activities() {
  return (
    <View>
      {JOB_ACTIVITIES.map(activity => (
        <View key={activity.id} style={styles.card}>
          <Text style={styles.type}>{activity.type}</Text>
          <Text style={styles.desc}>{activity.description}</Text>
          <Text style={styles.date}>{activity.date}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  type: {
    fontWeight: '700',
    color: '#1A73E8',
  },
  desc: {
    marginTop: 4,
    fontSize: 14,
  },
  date: {
    marginTop: 6,
    fontSize: 12,
    color: '#888',
  },
});
