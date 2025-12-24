import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PhoneLoginScreen } from '../../modules/auth/ui/phoneLoginScreen';
import { OtpVerifyScreen } from '../../modules/auth/ui/otpVerifyScreen';

export type AuthStackParamList = {
  Login: undefined;
  OtpVerify: { phone: string };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={PhoneLoginScreen} />
      <Stack.Screen name="OtpVerify" component={OtpVerifyScreen} />
    </Stack.Navigator>
  );
}
