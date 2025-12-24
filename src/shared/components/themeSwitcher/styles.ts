import { StyleSheet } from 'react-native';
import { radius, spacing, Theme, typography } from '../../theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: spacing.md,
      backgroundColor: theme.surface,
      borderRadius: radius.md,
    },

    title: {
      ...typography.title,
      color: theme.textPrimary,
      marginBottom: spacing.md,
    },

    row: {
      flexDirection: 'row',
      gap: spacing.sm,
      marginBottom: spacing.md,
    },

    button: {
      // flex: 1,
      paddingVertical: spacing.sm,
      borderRadius: radius.sm,
      alignItems: 'center',
      backgroundColor: theme.background,
      borderWidth: 1,
      borderColor: theme.border,
    },

    active: {
      backgroundColor: theme.primary,
    },

    buttonText: {
      color: theme.textPrimary,
      fontWeight: '500',
    },

    toggleButton: {
      backgroundColor: theme.primary,
    },
  });
