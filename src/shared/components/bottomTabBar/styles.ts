import { StyleSheet } from 'react-native';
import { Theme } from '@/shared/theme/types';
import { spacing, typography } from '@/shared/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.background,   // use theme
      // borderTopLeftRadius: 26,
      // borderTopRightRadius: 26,
      elevation: 18,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 12,
    },

    row: {
      flexDirection: 'row',
      paddingVertical: spacing.md,
      justifyContent: 'space-around',
    },

    tab: {
      alignItems: 'center',
      width: '25%',
    },

    label: {
      fontSize: typography.caption.fontSize,
      color: theme.textSecondary,
      marginTop: 4,
    },

    active: {
      color: theme.textPrimary,
      fontWeight: '600',
    },

    indicatorContainer: {
      height: 6,
      position: 'relative',
    },

    indicator: {
      position: 'absolute',
      bottom: 0,
      left: 20,
      width: 42,
      height: 4,
      borderRadius: 4,
      backgroundColor: theme.textPrimary,
    },
  });
