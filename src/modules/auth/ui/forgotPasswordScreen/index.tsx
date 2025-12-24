// src/screens/ForgotPasswordScreen.tsx
import CustomHeader from '@/shared/components/customHeader';
import Screen from '@/shared/components/screen/Screen';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
 
export default function ForgotPasswordScreen({navigation}:any) {
  const [email, setEmail] = useState('');

  const onPressBack = () => navigation.goBack();
 
  return (
     <Screen
          keyboardAvoid
          scroll
          listMode
          header={<CustomHeader onPressBack={onPressBack} title="Forgot Password" />}
        > <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Ceipal ATS</Text>
      </View>
 
      <View style={styles.card}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Please enter your email address and we'll send you a password reset
          link.
        </Text>
 
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
 
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View></Screen>
   
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B4CCB' },
  header: { marginTop: 70, alignItems: 'center' },
  logo: { color: '#fff', fontSize: 28, fontWeight: '700' },
  card: {
    marginTop: 40,
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
  },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 10 },
  subtitle: { color: '#777', marginBottom: 24 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
  },
  submitBtn: {
    backgroundColor: '#0B4CCB',
    padding: 16,
    borderRadius: 10,
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});
 