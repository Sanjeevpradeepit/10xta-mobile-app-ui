import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainLayout from '../layout/mainLayout/MainLayout';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainLayout} />
    </Stack.Navigator>
  );
}
