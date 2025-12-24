import { APPLICATION_DETAILS } from '@/modules/applications/data/applications.meta';
import { View, Text, StyleSheet } from 'react-native';

export default function Notes() {
  return (
    <View>
      {APPLICATION_DETAILS.notes.map(n => (
        <View key={n.id} style={styles.card}>
          <Text style={styles.author}>{n.author}</Text>
          <Text>{n.text}</Text>
          <Text style={styles.date}>{n.date}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 14, borderRadius: 10, marginBottom: 10 },
  author: { fontWeight: '700' },
  date: { fontSize: 11, color: '#777' },
});
