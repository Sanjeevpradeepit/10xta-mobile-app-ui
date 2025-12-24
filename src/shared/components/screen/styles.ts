import { StyleSheet } from 'react-native';
import { spacing, Theme, typography } from '../../theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      // backgroundColor: theme.background,
    },

    headerWrapper: {
      backgroundColor: theme.surface,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },

    headerTitleContainer: {
      height: 56,
      justifyContent: 'center',
      paddingHorizontal: spacing.md,
    },

    headerTitle: {
      ...typography.title,
      color: theme.textPrimary,
    },

    stickyFooter: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.surface,
      borderTopWidth: 1,
      borderTopColor: theme.border,
      paddingHorizontal: spacing.md,
      paddingTop: spacing.sm,
    },
  });
