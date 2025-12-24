import { APPLICATION_DETAILS } from '@/modules/applications/data/applications.meta';
import { View, Text, StyleSheet } from 'react-native';

export default function Inbox() {
  return (
    <View style={styles.container}>
      {APPLICATION_DETAILS.inbox.map(m => (
        <View key={m.id} style={styles.message}>
          <Text style={styles.from}>{m.from}</Text>
          <Text style={styles.text}>{m.message}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F7FB',
    padding: 12,
    borderRadius: 12,
  },
  message: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 1,
  },
  from: {
    fontWeight: '700',
    color: '#1A73E8',
    marginBottom: 4,
  },
  text: {
    color: '#333',
    fontSize: 14,
  },
});
