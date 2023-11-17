import { create } from "zustand";

type UserStore = {
  user: any;
};

export const useStore = create<UserStore>((set) => ({
  user: {},
  removeUser: () => set({ user: "" }),
}));
