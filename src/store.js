import { create } from "zustand";

 const useAppStore = create((set) => ({
  isOpen: false,
  id: null,
  title: "",
  description: "",
  price: "",
  setDescription: (description) => set({ description }),
  setPrice: (price) => set({ price }),
  setTitle: (title) => set({ title }),
  setId: (id) => set({ id }),
  setIsOpen: (isOpen) => set({ isOpen }),
}));
export default useAppStore;