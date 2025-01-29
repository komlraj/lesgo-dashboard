import { create } from "zustand";

interface AuthState {
  user: { email: string } | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  initAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (email, password) => {
    const mockEmail = "user@example.com";
    const mockPassword = "password123";

    if (email === mockEmail && password === mockPassword) {
      set({ user: { email } });
      localStorage.setItem("user", JSON.stringify({ email }));
      return true;
    }
    return false;
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem("user");
  },
  initAuth: () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      set({ user: JSON.parse(storedUser) });
    }
  }
}));

// Initialize auth state when the store is created
useAuthStore.getState().initAuth();