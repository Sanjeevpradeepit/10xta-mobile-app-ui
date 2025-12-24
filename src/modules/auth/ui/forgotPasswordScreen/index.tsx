// src/screens/ForgotPasswordScreen.tsx
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
 import CustomHeader from '@/shared/components/customHeader';
import Screen from '@/shared/components/screen/Screen';
import { useThemedStyles } from '@/shared/theme';
import { createStyles } from './styles';

export default function ForgotPasswordScreen({navigation}:any) {
  const [email, setEmail] = useState('');
  const styles = useThemedStyles(createStyles);
  const onPressBack = () => navigation.goBack();
  
 
  return (
     <Screen
          keyboardAvoid
          scroll
          listMode
          header={<CustomHeader onPressBack={onPressBack} title="Forgot Password" />}
        > <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>10xTA</Text>
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
 

 