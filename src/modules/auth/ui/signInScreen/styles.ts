import { Theme } from '@/shared/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
   container: {
    flex: 1,
     backgroundColor: theme.primary,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  logo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    marginVertical: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
  },
  welcome: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  subText: {
    textAlign: 'center',
    color: '#777',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  check: {
    marginRight: 6,
    color: 'green',
  },
  terms: {
    color: '#555',
  },
  link: {
    color: '#0B4CCB',
  },
  forgot: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  signInBtn: {
   backgroundColor: theme.primary,
    padding: 16,
    borderRadius: 14,
  },
  signInText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  passwordContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
},
passwordInput: {
  flex: 1,
  paddingRight: 40,
},
eyeIcon: {
  position: 'absolute',
  right: 12,
  padding: 6,
},
eyeText: {
  fontSize: 18,
},
  error:{
    color: '#ff3a3a55'
  }
  });
