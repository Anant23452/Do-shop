import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],

  addTocart: (product) =>
    set((state) => {
      const existingIndex = state.cart.findIndex((item) => item.id === product.id);

      if (existingIndex === -1) {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }

      return {
        cart: state.cart.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));

export default useCartStore;