/** @format */

import { create } from "zustand";

export const useAppStore = create((set) => ({
  isShowModal: false,
  contentModal: null,
  setModal: (newState) =>
    set(() => ({
      isShowModal: newState.isShowModal,
      contentModal: newState.contentModal,
    })),
}));
