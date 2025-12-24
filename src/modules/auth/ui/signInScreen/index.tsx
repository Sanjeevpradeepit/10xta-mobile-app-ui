import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
 
export default function SignInScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(false);
 
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign in</Text>
        <Text style={styles.logo}>Ceipal ATS</Text>
      </View>
 
      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.subText}>
          Hello there, sign in to continue
        </Text>
 
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
 
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password as any}
          onChangeText={setPassword as any}
        />
 
        <View style={styles.termsRow}>
          <Text style={styles.check}>✔</Text>
          <Text style={styles.terms}>
            I accept the <Text style={styles.link}>terms</Text> and{' '}
            <Text style={styles.link}>privacy policy</Text>
          </Text>
        </View>
 
        <TouchableOpacity
         style={styles.forgot}
         onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
 
        <TouchableOpacity
        style={styles.signInBtn}
        onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B4CCB',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  logo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    marginVertical: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
  },
  welcome: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  subText: {
    textAlign: 'center',
    color: '#777',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  check: {
    marginRight: 6,
    color: 'green',
  },
  terms: {
    color: '#555',
  },
  link: {
    color: '#0B4CCB',
  },
  forgot: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  signInBtn: {
    backgroundColor: '#0B4CCB',
    padding: 16,
    borderRadius: 14,
  },
  signInText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});