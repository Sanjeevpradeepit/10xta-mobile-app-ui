import { StyleSheet } from 'react-native';
import { Theme } from '@/shared/theme/types';
import { spacing, typography } from '@/shared/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      // backgroundColor: theme.surface,
      backgroundColor: theme.primary,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },

    row: {
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: spacing.md,
      justifyContent: 'space-between',
    },

    left: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingRight: spacing.sm,
    },

    right: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingLeft: spacing.sm,
      minWidth: 40, // keeps layout balanced
    },

    titleWrap: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: spacing.sm,
    },

    title: {
      ...typography.title,
      color: theme.textPrimary,
    },

    actionText: {
      color: theme.primary,
      fontSize: 15,
      fontWeight: '500',
    },
  });
