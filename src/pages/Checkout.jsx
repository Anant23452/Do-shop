import React from 'react'
import useCartStore from '../stores/CartStore';

export default function Checkout() {
  const cart = useCartStore(state => state.cart);
  return (
    <div>Checkout</div>
  )
}
