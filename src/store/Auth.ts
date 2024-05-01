import { create } from "zustand";

interface State {
  isAuthenticated: boolean;
  loading:boolean;
  signIn: (data:any) => void
}

export const useAuthStore = create<State>((set) => ({
  isAuthenticated: false,
  loading: false,
  signIn: ({email, password}) =>
    set({ loading: false, isAuthenticated: true }),
}));
