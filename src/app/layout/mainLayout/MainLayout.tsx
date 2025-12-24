import { View } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import BottomTabBar from '@/shared/components/bottomTabBar';
import { useAuthStore } from '@/app/store/auth.store';
import AppNavigator from '@/app/navigation/AppNavigator';
import AuthNavigator from '@/app/navigation/AuthNavigator';

export default function MainLayout() {
//   const isAuthenticated = useAuthStore(s => s.isAuthenticated);
  const isAuthenticated =true;


  return (
    <View style={{ flex: 1 }}>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </View>
  );
}
