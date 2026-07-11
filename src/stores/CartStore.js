
import { create } from 'zustand'

const useCartStore = create((set) => ({
  cart: [],
  addTocart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
    console.log(cart)
}))

export default useCartStore;