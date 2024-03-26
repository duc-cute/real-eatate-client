/** @format */

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { apiGetPropertyType } from "~/apis/propertyType";

export const usePropertyStore = create(
  persist(
    (set, get) => ({
      propertyType: [],
      getPropertyType: async (field) => {
        const res = await apiGetPropertyType(field);
        console.log("pro", res);
        if (res.success)
          return set(() => ({ propertyType: res?.propertyType }));
      },
    }),
    {
      name: "real_state_property-type",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => Object.fromEntries(Object.entries(state)),
    }
  )
);
