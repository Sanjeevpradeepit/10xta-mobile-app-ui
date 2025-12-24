import { APPLICATION_DETAILS } from '@/modules/applications/data/applications.meta';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Resume() {
  const resume = APPLICATION_DETAILS.resume;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Resume</Text>

      <View style={styles.fileRow}>
        <Text style={styles.file}>📄 {resume.file}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Skills</Text>
      {resume.skills.map(skill => (
        <Text key={skill} style={styles.skill}>• {skill}</Text>
      ))}

      <Text style={styles.exp}>Experience: {resume.experience}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  fileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  file: {
    fontWeight: '600',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#1A73E8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  label: {
    fontWeight: '600',
    marginTop: 12,
  },
  skill: {
    color: '#444',
    marginTop: 4,
  },
  exp: {
    marginTop: 12,
    fontWeight: '600',
    color: '#555',
  },
});
