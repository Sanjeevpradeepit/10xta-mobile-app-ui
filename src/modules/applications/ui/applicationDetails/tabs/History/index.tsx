import { APPLICATION_DETAILS } from '@/modules/applications/data/applications.meta';
import { View, Text, StyleSheet } from 'react-native';

export default function History() {
  return (
    <View style={styles.container}>
      {APPLICATION_DETAILS.history.map((h, index) => (
        <View key={h.id} style={styles.row}>
          <View style={styles.timeline}>
            <View style={styles.dot} />
            {index !== APPLICATION_DETAILS.history.length - 1 && (
              <View style={styles.line} />
            )}
          </View>

          <View style={styles.content}>
            <Text style={styles.status}>{h.status}</Text>
            <Text style={styles.date}>{h.date}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  timeline: {
    width: 24,
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1A73E8',
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#ddd',
    marginTop: 2,
  },
  content: {
    flex: 1,
    paddingLeft: 12,
  },
  status: {
    fontWeight: '700',
    fontSize: 14,
  },
  date: {
    color: '#777',
    fontSize: 12,
  },
});
