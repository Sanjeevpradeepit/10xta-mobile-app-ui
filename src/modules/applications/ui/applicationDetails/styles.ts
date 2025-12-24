import { StyleSheet } from 'react-native';
import { radius, spacing, Theme, typography } from '../../../../shared/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F7FB' },
  tabBar: {
    height: 48,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#888',
  },
  activeTab: {
    color: '#1A73E8',
    fontWeight: '700',
    borderBottomWidth: 2,
    borderColor: '#1A73E8',
  },
  content: {
    padding: 16,
  },
  });
