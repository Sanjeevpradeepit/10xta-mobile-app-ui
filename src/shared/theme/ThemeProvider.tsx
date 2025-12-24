// src/shared/theme/ThemeProvider.tsx
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import { useColorScheme } from 'react-native';

import { colors } from './colors';
import { Theme, ThemeMode } from './types';

interface ThemeContextValue {
  theme: Theme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>('system');

  const theme = useMemo(() => {
    const resolvedMode =
      mode === 'system' ? systemScheme : mode;

    return resolvedMode === 'dark'
      ? colors.dark
      : colors.light;
  }, [mode, systemScheme]);

  const toggleTheme = () => {
    setMode(prev =>
      prev === 'dark' ? 'light' : 'dark',
    );
  };

  return (
    <ThemeContext.Provider
      value={{ theme, mode, setMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error(
      'useTheme must be used inside ThemeProvider',
    );
  }
  return ctx;
}
