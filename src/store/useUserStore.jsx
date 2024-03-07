/** @format */

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { apiGetCurrent, apiGetRoles } from "~/apis/user";

export const useUserStore = create(
  persist(
    (set, get) => ({
      token: null,
      current: null,
      roles: [],
      setToken: (token) => set(() => ({ token })),
      getCurrent: async () => {
        const user = await apiGetCurrent();
        if (user.success) return set(() => ({ current: user?.currentUser }));
      },
      getRoles: async () => {
        const roles = await apiGetRoles();
        if (roles.success) return set(() => ({ roles: roles?.roleUser }));
      },
    }),
    {
      name: "real_state",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            (el) => el[0] === "token" || el[0] === "current"
          )
        ),
    }
  )
);
