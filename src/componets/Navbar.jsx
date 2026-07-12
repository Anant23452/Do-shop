import React from 'react'
import {Link} from 'react-router-dom'
import useCartStore from '../stores/CartStore'

export default function Navbar() {
  const cart = useCartStore((state)=>state.cart)
  console.log(cart)
  return (
    <>
    <div className="nav bg-gray-500 flex justify-evenly items-center  ">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to ="/cart">Cart({cart.length}) </Link> 

    </div>
    
    </>
  )
}
