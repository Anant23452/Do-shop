
import { create } from 'zustand'

const useCartStore = create((set) => ({
  cart: [],
  addTocart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
}))

export default useCartStore;