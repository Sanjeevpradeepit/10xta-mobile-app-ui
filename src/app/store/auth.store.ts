import { create } from 'zustand';
import * as Keychain from 'react-native-keychain';
interface AuthState {
  isAuthenticated: boolean;
  token: string | null;

  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: false,
  token: null,

  login: async (token) => {
  await Keychain.setGenericPassword('auth', token);
  set({ isAuthenticated: true, token });
},
  logout: () =>
    set({
      isAuthenticated: false,
      token: null,
    }),
}));
