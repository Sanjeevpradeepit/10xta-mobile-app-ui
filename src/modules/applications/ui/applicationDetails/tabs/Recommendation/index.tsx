import { APPLICATION_DETAILS } from '@/modules/applications/data/applications.meta';
import { View, Text, StyleSheet } from 'react-native';

export default function Recommendation() {
  return (
    <View>
      {APPLICATION_DETAILS.recommendations.map(r => (
        <View key={r.id} style={styles.card}>
          <Text style={styles.by}>{r.by}</Text>
          <Text>{r.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 14, borderRadius: 10, marginBottom: 10 },
  by: { fontWeight: '700' },
});
