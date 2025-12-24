// src/shared/theme/useThemedStyles.ts
import { useMemo } from 'react';
import { useTheme } from './ThemeProvider';
import { Theme } from './types';

type StyleFactory<T> = (theme: Theme) => T;

export function useThemedStyles<T>(
  factory: StyleFactory<T>,
): T {
  const { theme } = useTheme();
  return useMemo(() => factory(theme), [theme, factory]);
}
