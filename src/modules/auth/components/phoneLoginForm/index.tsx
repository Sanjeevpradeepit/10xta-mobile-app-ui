import React from 'react';
import { View, Button } from 'react-native';
import { Control } from 'react-hook-form';
import { FormInput } from '../../../../shared/components/FormInput';
import { styles } from './styles';

interface Props {
  control: Control<{ phoneNumber: string }>;
  onSubmit: () => void;
  loading?: boolean;
}

export function PhoneLoginForm({
  control,
  onSubmit,
  loading,
}: Props) {
  return (
    <View style={styles.container}>
      <FormInput
        name="phoneNumber"
        control={control}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
      />

      <View style={styles.buttonWrapper}>
        <Button
          title={loading ? 'Sending OTP...' : 'Send OTP'}
          onPress={onSubmit}
          disabled={loading}
        />
      </View>
    </View>
  );
}
