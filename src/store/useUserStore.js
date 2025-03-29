import { create } from "zustand";

let userStore = (set) => ({
  user: {},
  fetch: async (id) => {
    const path = `https://jsonplaceholder.typicode.com/users/${id}`;
    const res = await fetch(path);
    set({ user: await res.json() });
  },
});

export const useUserStore = create(userStore);
