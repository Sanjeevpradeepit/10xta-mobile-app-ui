

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApplicationDetailsScreen from '@/modules/applications/ui/applicationDetails';
import ApplicationsScreen from '@/modules/applications/ui/applicationsScreen/ApplicationsScreen';
export type ApplicationsStackParamList = {
  ApplicationsScreen: undefined;
  ApplicationDetails: { applicationId: string };
};

const Stack = createNativeStackNavigator<ApplicationsStackParamList>();

export default function ApplicationsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ApplicationsScreen" component={ApplicationsScreen} />
      <Stack.Screen name="ApplicationDetails" component={ApplicationDetailsScreen} />
    </Stack.Navigator>
  );
}
