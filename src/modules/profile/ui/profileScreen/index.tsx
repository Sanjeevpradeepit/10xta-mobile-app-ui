import { useThemedStyles } from '@/shared/theme';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from './styles';
import { useAuthStore } from '@/app/store/auth.store';
import Screen from '@/shared/components/screen/Screen';
import CustomHeader from '@/shared/components/customHeader';
// import { useAuthStore } from '../stores/auth.store';
 
export default function ProfileScreen() {
  const navigation = useNavigation<any>();
    const login = useAuthStore(state => state.login);
    const styles = useThemedStyles(createStyles); // ✅ ONE line
const handleLogout = () => {
  console.log('🚪 Logout clicked');

  // 1. Clear auth token
  login('');   // or logout() if you have it

  // 2. Reset navigation to SignIn
  navigation.reset({
    index: 0,
    routes: [{ name: 'Main' }],
  });
};
 const onPressBack = () => navigation.goBack();
 
  return (
       <Screen
                  keyboardAvoid
                  scroll
                  listMode
                  
                  header={<CustomHeader onPressBack={onPressBack} title="Profile" />}
                >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
 
      <View style={styles.content}>
        <Image
          source={require('../../../../assets/images/avatar.png')}
          style={styles.bigAvatar}
        />
 
        <Text style={styles.name}>Medan Sri</Text>
        <Text style={styles.role}>Recruiter</Text>
 
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
</Screen>
  );
}
 
