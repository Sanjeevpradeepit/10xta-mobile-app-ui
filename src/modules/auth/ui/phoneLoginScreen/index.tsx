import {
  View,
  Text,
} from 'react-native';
import { useForm } from 'react-hook-form';

import { useSendOtp } from '../../hooks/useSendOtp';
import { styles } from './styles';
import Screen from '../../../../shared/components/screen/Screen';
import { PhoneLoginForm } from '../../components/phoneLoginForm';

interface PhoneLoginFormValues {
  phoneNumber: string;
}

export function PhoneLoginScreen({ navigation }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneLoginFormValues>({
    defaultValues: {
      phoneNumber: '',
    },
  });

  const sendOtp = useSendOtp();

  const onSubmit = (data: PhoneLoginFormValues) => {
    sendOtp.mutate(
      { phoneNumber: data.phoneNumber },
      {
        onSuccess: () => {
          navigation.navigate('OtpVerify', {
            phoneNumber: data.phoneNumber,
          });
        },
      },
    );
  };

  return (
    <Screen keyboardAvoid scroll={false} listMode={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Login with Phone</Text>

        <PhoneLoginForm
          control={control}
          onSubmit={handleSubmit(onSubmit)}
          loading={sendOtp.isPending}
        />

        {/* API ERROR */}
        {sendOtp.isError && (
          <Text style={styles.error}>
            {(sendOtp.error as any)?.message ||
              'Failed to send OTP. Please try again.'}
          </Text>
        )}

        {/* FORM ERROR (if you add validation later) */}
        {errors.phoneNumber && (
          <Text style={styles.error}>{errors.phoneNumber.message}</Text>
        )}
      </View>
    </Screen>
  );
}
