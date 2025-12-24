import { Theme } from '@/shared/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
   container: { flex: 1, backgroundColor: theme.primary },
  header: { marginTop: 70, alignItems: 'center' },
  logo: { color: '#fff', fontSize: 28, fontWeight: '700' },
  card: {
    marginTop: 40,
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
  },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 10 },
  subtitle: { color: '#777', marginBottom: 24 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
  },
  submitBtn: {
   backgroundColor: theme.primary,
    padding: 16,
    borderRadius: 10,
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  }
  });
