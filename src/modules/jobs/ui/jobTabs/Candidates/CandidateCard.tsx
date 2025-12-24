import { View, Text, Image, StyleSheet } from 'react-native';

export default function CandidateCard({ candidate }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: candidate.avatar }} style={styles.avatar} />

      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{candidate.name}</Text>
        <Text style={styles.meta}>{candidate.stage} • {candidate.experience}</Text>
        <Text style={styles.meta}>Score: {candidate.score}</Text>
      </View>

      <Text style={[styles.status, { color: candidate.status === 'Active' ? '#2ECC71' : '#F2994A' }]}>
        {candidate.status}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 12,
  },
  name: { fontWeight: '700', fontSize: 14 },
  meta: { color: '#666', fontSize: 12 },
  status: { fontWeight: '600', alignSelf: 'center' },
});
