import { create } from "zustand";

interface State {
  isAuthenticated: boolean;
  loading: boolean;
  signIn: (data: any) => void;
}

export const useAuthStore = create<State>((set) => {
  
  const token = localStorage.getItem("token");

  return {
    isAuthenticated: token ? true : false,
    loading: false,
    signIn: ({ email, password }) => {
      localStorage.setItem("token", "test_token_1");
      set({ loading: false, isAuthenticated: true });
    },
    logout: () => {
      localStorage.removeItem("token");
      set({ loading: false, isAuthenticated: false });
    },
  };
});
