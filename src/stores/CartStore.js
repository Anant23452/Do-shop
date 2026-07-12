import { create } from 'zustand'

const useCartStore = create((set) => ({
  cart: [],
  
  addTocart: (product) =>
    set((state) => {
      // 1. Find the index of the product
      const existingIndex = state.cart.findIndex((item) => item.id === product.id);

      // 2. If product not found (index is -1), add it as a new entry
      if (existingIndex === -1) {
        return {
          cart: [
            ...state.cart,
            { ...product, quantity: 1 }
          ]
        };
      }

      // 3. If found, use map() to increment the quantity of that specific item
      return {
        cart: state.cart.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    }),
  increaseQuantity:(id)=>
    set((state)=>{
      
    })
}))

export default useCartStore;