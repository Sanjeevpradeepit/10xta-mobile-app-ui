import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useThemedStyles } from '@/shared/theme';
import { createStyles } from './styles';

export default function ApplicationCard({ item }: any) {
  const navigation = useNavigation<any>();   // 👈 FIX
  const styles = useThemedStyles(createStyles); 
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('ApplicationDetails', {
          applicationId: item.id,
        })
      }
    >
      <Text style={styles.job}>{item.jobTitle}</Text>
      <Text style={styles.company}>{item.company}</Text>

      <View style={styles.row}>
        <Text style={styles.meta}>Candidate: {item.candidate}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>

      <Text style={styles.meta}>📍 {item.location}</Text>
      <Text style={styles.meta}>Applied on {item.appliedDate}</Text>
    </TouchableOpacity>
  );
}
