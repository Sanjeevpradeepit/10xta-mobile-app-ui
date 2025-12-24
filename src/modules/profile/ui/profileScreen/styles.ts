import { StyleSheet } from 'react-native';
import { radius, spacing, Theme, typography } from '../../../../shared/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
   safe: {
    flex: 1,
         backgroundColor: theme.primary,
  },
  header: {
    padding: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    backgroundColor: '#F3F6FB',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    alignItems: 'center',
    paddingTop: 40,
  },
  bigAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  role: {
    fontSize: 14,
    color: '#666',
    marginBottom: 32,
  },
  logoutBtn: {
    backgroundColor: '#E53935',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  });
