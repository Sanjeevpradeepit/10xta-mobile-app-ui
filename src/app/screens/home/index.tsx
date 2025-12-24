import CustomHeader from '@/shared/components/customHeader';
import Screen from '@/shared/components/screen/Screen';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
 
export default function HomeScreen() {
  return (
  <Screen
      keyboardAvoid={false}
      scroll={false}
      listMode
  
      header={<CustomHeader title="Home" />}
    >
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/avatar.png')} // optional
          style={styles.avatar}
        />
        <Text style={styles.userName}>Medan Sri</Text>
      </View>
 
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Dashboards & KPIs</Text>
        <Text style={styles.subTitle}>Recruiter Dashboard</Text>
 
        {/* Job Status */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🔵 Job Status Graph</Text>
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
 
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  container: {
    backgroundColor: '#F3F6FB',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 16,
  },
  title: { fontSize: 20, fontWeight: '700' },
  subTitle: {
    fontSize: 14,
    color: '#1E73E8',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  chart: {
    width: '100%',
    height: 180,
  },
});
 
 
 