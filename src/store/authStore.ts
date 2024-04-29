import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  setIsLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  isLoading: true,
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
