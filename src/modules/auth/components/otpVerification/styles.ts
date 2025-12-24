import { StyleSheet } from 'react-native';
import { radius, spacing, Theme, typography } from '../../../../shared/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: spacing.md,
      backgroundColor: theme.background,
    },

    infoText: {
      ...typography.body,
      color: theme.textSecondary,
      textAlign: 'center',
      marginBottom: spacing.lg,
    },

    buttonWrapper: {
      marginTop: spacing.lg,
      borderRadius: radius.md,
      overflow: 'hidden',
    },
  });
