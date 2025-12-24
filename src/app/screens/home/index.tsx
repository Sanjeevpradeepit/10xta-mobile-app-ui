import CustomHeader from '@/shared/components/customHeader';
import Screen from '@/shared/components/screen/Screen';
import { useThemedStyles } from '@/shared/theme';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStyles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
const navigation = useNavigation<any>()
    const styles = useThemedStyles(createStyles); // ✅ ONE line

  return (
    <Screen
      keyboardAvoid={false}
      scroll={false}
      listMode={false}
      header={<CustomHeader title="Home" />}
    >
      {/* Top user bar */}
      <TouchableOpacity
  style={styles.header}
  onPress={() => navigation.navigate('Profile')}
>
  <Image
    source={require('../../../assets/images/avatar.png')}
    style={styles.avatar}
  />
  <Text style={styles.userName}>Medan Sri</Text>
</TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Dashboards & KPIs</Text>
        <Text style={styles.subTitle}>Recruiter Dashboard</Text>

        {/* Job Status */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🔵 Job Status</Text>
          <Image
            source={require('../../../assets/images/pie-chart.png')}
            style={styles.chart}
            resizeMode="contain"
          />
        </View>

        {/* Interviews */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🔵 Interviews – By Client</Text>
          <Image
            source={require('../../../assets/images/pie-chart.png')}
            style={styles.chart}
            resizeMode="contain"
          />
        </View>

        {/* Trends */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🔵 Monthly Trends</Text>
          <Image
            source={require('../../../assets/images/pie-chart.png')}
            style={styles.chart}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </Screen>
  );
}
