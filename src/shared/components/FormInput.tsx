import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface FormInputProps<T extends FieldValues>
  extends TextInputProps {
    name: Path<T>;
  control: Control<T>;
  label?: string;
}

export function FormInput<T extends FieldValues>({
  name,
  control,
  label,
  ...inputProps
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState }) => (
        <View style={styles.container}>
          {label && <Text style={styles.label}>{label}</Text>}

          <TextInput
            style={[
              styles.input,
              fieldState.error && styles.errorInput,
            ]}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            {...inputProps}
          />

          {fieldState.error && (
            <Text style={styles.errorText}>
              {fieldState.error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  errorInput: {
    borderColor: '#ff4d4f',
  },
  errorText: {
    marginTop: 4,
    color: '#ff4d4f',
    fontSize: 12,
  },
});
