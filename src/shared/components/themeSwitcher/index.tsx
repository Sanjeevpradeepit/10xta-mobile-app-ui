import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme, useThemedStyles } from '../../theme';
import { createStyles } from './styles';

export function ThemeSwitcher() {
  const { mode, toggleTheme, setMode } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Theme</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.button,
            mode === 'light' && styles.active,
          ]}
          onPress={() => setMode('light')}
        >
          <Text style={styles.buttonText}>Light</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            mode === 'dark' && styles.active,
          ]}
          onPress={() => setMode('dark')}
        >
          <Text style={styles.buttonText}>Dark</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            mode === 'system' && styles.active,
          ]}
          onPress={() => setMode('system')}
        >
          <Text style={styles.buttonText}>System</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.toggleButton]}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}
