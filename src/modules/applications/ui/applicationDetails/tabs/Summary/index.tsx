import { APPLICATION_DETAILS } from '@/modules/applications/data/applications.meta';
import { Text, View, StyleSheet } from 'react-native';

export default function Summary() {
  const s = APPLICATION_DETAILS.summary;

  return (
    <View style={styles.card}>
      <Row label="Candidate" value={s.candidate} />
      <Row label="Job" value={s.job} />
      <Row label="Stage" value={s.stage} />
      <Row label="Applied" value={s.appliedOn} />
    </View>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 8,
  },
  label: {
    color: '#666',
    fontSize: 13,
  },
  value: {
    fontWeight: '700',
    color: '#111',
    fontSize: 14,
  },
});
