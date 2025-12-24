import { View, Text, StyleSheet } from 'react-native';
import { JOB_NOTES } from '@/modules/jobs/data/job.meta';

export default function Notes() {
  return (
    <View style={styles.container}>
      {JOB_NOTES.map(note => (
        <View key={note.id} style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.author}>{note.author}</Text>
            <Text style={styles.date}>{note.date}</Text>
          </View>

          <Text style={styles.text}>{note.text}</Text>
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
  author: {
    fontWeight: '700',
    fontSize: 13,
  },
  date: {
    fontSize: 11,
    color: '#999',
  },
  text: {
    fontSize: 13,
    color: '#444',
    lineHeight: 18,
  },
});
