import { APPLICATION_DETAILS } from '@/modules/applications/data/applications.meta';
import { View, Text, StyleSheet } from 'react-native';

export default function Attachments() {
  return (
    <View>
      {APPLICATION_DETAILS.attachments.map(a => (
        <View key={a.id} style={styles.file}>
          <Text>{a.fileName}</Text>
          <Text style={styles.type}>{a.type}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  file: { backgroundColor: '#fff', padding: 14, borderRadius: 10, marginBottom: 10 },
  type: { color: '#777' },
});
