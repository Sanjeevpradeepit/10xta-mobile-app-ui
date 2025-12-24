/**
 * App Entry
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import RootNavigator from './src/app/navigation/RootNavigator';
import { ThemeProvider } from './src/shared/theme/ThemeProvider';
import { colors } from './src/shared/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode
    ? colors.dark.background
    : colors.light.background;

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          />

          <SafeAreaView
            edges={['top']}
            style={{ flex: 1, backgroundColor }}
          >
            <RootNavigator />
          </SafeAreaView>
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;




  // const logout = useAuthStore(s => s.logout);
          // <Button title="Logout" onPress={logout} />

//  <ThemeSwitcher />