import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import JobsStack from './JobsStack';
import BottomTabBar from '@/shared/components/bottomTabBar';
import ApplicationsStack from './ApplicationsStack';
import ProfileScreen from '@/modules/profile/ui/profileScreen';

export type AppStackParamList = {
  Home: undefined;
  JobsTab: undefined;
  Applications: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home">
        {() => (
          <View style={{ flex: 1 }}>
            <Home />
            <BottomTabBar />
          </View>
        )}
      </Stack.Screen>

      <Stack.Screen name="JobsTab">
        {() => (
          <View style={{ flex: 1 }}>
            <JobsStack />
            <BottomTabBar />
          </View>
        )}
      </Stack.Screen>

      <Stack.Screen name="Applications">
        {() => (
          <View style={{ flex: 1 }}>
            <ApplicationsStack />
            <BottomTabBar />
          </View>
        )}
      </Stack.Screen>

      <Stack.Screen name="Profile">
        {() => (
          <View style={{ flex: 1 }}>
            <ProfileScreen />
            {/* <BottomTabBar /> */}
          </View>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
