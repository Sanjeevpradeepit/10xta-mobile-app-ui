import { View, Text, StyleSheet } from 'react-native';
import { JOB_TEAMS } from '@/modules/jobs/data/job.meta';

export default function Teams() {
  return (
    <View style={styles.container}>
      {JOB_TEAMS.map(member => (
        <View key={member.id} style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.initials}>
              {member.name
                .split(' ')
                .map(n => n[0])
                .join('')}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.role}>{member.role}</Text>
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
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#1A73E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  initials: {
    color: '#fff',
    fontWeight: '700',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  role: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
});
