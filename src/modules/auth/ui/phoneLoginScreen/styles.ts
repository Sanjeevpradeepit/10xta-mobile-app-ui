import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../../shared/theme';

const theme = colors.light; // later switch dynamically

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.background,
  },

  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
    justifyContent: 'center',
  },

  title: {
    ...typography.title,
    color: theme.textPrimary,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },

  error: {
    color: theme.error,
    marginTop: spacing.sm,
    textAlign: 'center',
    fontSize: 14,
  },
});
