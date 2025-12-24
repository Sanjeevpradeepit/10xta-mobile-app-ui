// modules/auth/components/LoginForm.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Control } from 'react-hook-form';

import { EmailLoginSchema } from '../auth.schema';
import { FormInput } from '../../../shared/components/FormInput';

interface Props {
  control: Control<EmailLoginSchema>;
  onSubmit: () => void;
  loading?: boolean;
  error?: string;
}

export function LoginForm({
  control,
  onSubmit,
  loading,
  error,
}: Props) {
  return (
    <View>
      <FormInput
        name="email"
        control={control}
        placeholder="Email"
      />

      <FormInput
        name="password"
        control={control}
        placeholder="Password"
        secureTextEntry
      />

      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      <Button
        title={loading ? 'Logging in...' : 'Login'}
        onPress={onSubmit}
        disabled={loading}
      />
    </View>
  );
}
