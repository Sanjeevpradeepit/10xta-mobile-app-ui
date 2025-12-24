import { APPLICATION_DETAILS } from '@/modules/applications/data/applications.meta';
import { View, Text, StyleSheet } from 'react-native';

export default function Activities() {
  return (
    <View>
      {APPLICATION_DETAILS.activities.map(a => (
        <View key={a.id} style={styles.row}>
          <Text style={styles.type}>{a.type}</Text>
          <Text style={styles.date}>{a.date}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 10 },
  type: { fontWeight: '700' },
  date: { color: '#777' },
});
