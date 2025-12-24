import React from 'react';
import { View, Text, Button } from 'react-native';
import { Control } from 'react-hook-form';

import { FormInput } from '../../../../shared/components/FormInput';
import { createStyles } from './styles';
import { useThemedStyles } from '../../../../shared/theme';

interface Props {
  control: Control<{ otp: string }>;
  onSubmit: () => void;
  loading?: boolean;
  phoneNumber: string;
}

export function OtpVerifyForm({
  control,
  onSubmit,
  loading,
  phoneNumber,
}: Props) {
  const styles = useThemedStyles(createStyles); // ✅ ONE line

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        OTP sent to {phoneNumber}
      </Text>

      <FormInput
        name="otp"
        control={control}
        placeholder="Enter OTP"
        keyboardType="number-pad"
      />

      <View style={styles.buttonWrapper}>
        <Button
          title={loading ? 'Verifying...' : 'Verify OTP'}
          onPress={onSubmit}
          disabled={loading}
        />
      </View>
    </View>
  );
}
