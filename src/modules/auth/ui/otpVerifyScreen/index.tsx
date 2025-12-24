import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { useVerifyOtp } from '../../hooks/useVerifyOtp';
import { useAuthStore } from '../../../../app/store/auth.store';
import { OtpVerifyForm } from '../../components/otpVerification';

export function OtpVerifyScreen({ route, navigation }: any) {
  const { phoneNumber } = route.params;
  const form = useForm<{ otp: string }>();
  const verifyOtp = useVerifyOtp();
 const login = useAuthStore(state => state.login);
  const onSubmit = (data: { otp: string }) => {
    verifyOtp.mutate(
      { phoneNumber, otp: data.otp },
      {
       onSuccess: response => {
          // ✅ CONNECT API → ZUSTAND HERE
          login(response.accessToken);

          // navigate to app
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        },
      },
    );
  };

  return (
    <View>
      <OtpVerifyForm
        control={form.control}
        onSubmit={form.handleSubmit(onSubmit)}
        loading={verifyOtp.isPending}
        phoneNumber={phoneNumber}
      />
    </View>
  );
}
