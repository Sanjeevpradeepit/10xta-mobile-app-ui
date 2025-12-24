import { APPLICATION_DETAILS } from '@/modules/applications/data/applications.meta';
import { View, Text, StyleSheet } from 'react-native';

export default function Social() {
  const s = APPLICATION_DETAILS.social;

  return (
    <View style={styles.card}>
      <Text>LinkedIn: {s.linkedin}</Text>
      <Text>GitHub: {s.github}</Text>
      <Text>Twitter: {s.twitter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12 },
});
