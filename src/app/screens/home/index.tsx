import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuthStore } from '../../store/auth.store';
import { ThemeSwitcher } from '../../../shared/components/themeSwitcher';
import Screen from '../../../shared/components/screen/Screen';
import CustomHeader from '@/shared/components/customHeader';

export default function HomeScreen({ route, navigation }: any) {
  const logout = useAuthStore(s => s.logout);

  const onPressBack = () => navigation.goBack();

  return (
    <Screen
      keyboardAvoid
      scroll
      listMode
      header={<CustomHeader onPressBack={onPressBack} title="Home" />}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Home 🎉</Text>
        <ThemeSwitcher />
        <Button title="Logout" onPress={logout} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
});
