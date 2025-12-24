import { StyleSheet } from 'react-native';
import { radius, spacing, Theme, typography } from '../../../../shared/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#fff',
  },

  tabBar: {
    height: 48,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#fff',
  },

  tabContent: {
    alignItems: 'center',
  },

  tabButton: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },

  tabText: {
    fontSize: 13,
    color: '#888',
    fontWeight: '500',
  },

  activeTabText: {
    color: '#1A73E8',
    fontWeight: '700',
  },

  indicator: {
    marginTop: 6,
    width: 24,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#1A73E8',
  },

  content: {
    flex: 1,
    padding: 12,
  },
  });
