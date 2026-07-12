import React from 'react'

import useCartStore from '../stores/CartStore'

export default function Cart() {
  const cart = useCartStore((state)=>state.cart)
  return (
    <div className="max-w-6xl mx-auto p-8">
    <div className="heading text-3xl font-bold mb-8">
      <h1>My Whishlist</h1>
    </div>
   {cart.length===0?(
    <h2>Your cart is empty</h2>
   ):(
     cart.map((item)=>{
      <div key={item.id} className="key">
        <h2>{item.title} </h2>
        <p>Quantity:{item.quantity} </p>
        <p>${item.price} </p>
      </div>
    })
   )}
    </div>
  )
}
