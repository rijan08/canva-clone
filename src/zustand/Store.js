import { create } from "zustand";

const useShapeStore = create((set) => ({
  shapes: [],
  //   addShape: (newState) => set((state) => ({ shapes: [...state, newState] })),
  addShape: (newState) => {
    set((state) => ({
      shapes: [...state.shapes, newState],
    }));
  },
  removeShape: (newState) =>
    set((state) => ({ shapes: state.filter((item) => item == newState) })),
  removeAll: () => set({ bears: [] }),
}));

export default useShapeStore;
