import { View, Text, StyleSheet } from 'react-native';
import { JOB_ATTACHMENTS } from '@/modules/jobs/data/job.meta';

export default function Attachments() {
  return (
    <View style={styles.container}>
      {JOB_ATTACHMENTS.map(file => (
        <View key={file.id} style={styles.card}>
          <View style={styles.icon}>
            <Text style={styles.iconText}>
              {file.type === 'PDF' ? '📄' : '📊'}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.fileName}>{file.fileName}</Text>
            <Text style={styles.meta}>{file.type} • {file.date}</Text>
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
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 18,
  },
  fileName: {
    fontSize: 14,
    fontWeight: '600',
  },
  meta: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
});
