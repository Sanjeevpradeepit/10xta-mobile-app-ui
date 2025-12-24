import { radius, spacing, Theme, typography } from '@/shared/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#092448ff', // 🔥 Added so white text is visible
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  container: {
    backgroundColor: '#F3F6FB',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 16,
  },
  title: { fontSize: 20, fontWeight: '700' },
  subTitle: {
    fontSize: 14,
    color: '#1E73E8',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  chart: {
    width: '100%',
    height: 180,
  },
  });
