import { StyleSheet } from 'react-native';
import { radius, spacing, Theme, typography } from '../../../../shared/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 1,
  },
  job: {
    fontWeight: '700',
    fontSize: 15,
  },
  company: {
    color: '#777',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meta: {
    fontSize: 12,
    color: '#555',
  },
  status: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1A73E8',
  },
  });
