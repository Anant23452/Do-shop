import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className="nav bg-gray-500 flex justify-evenly items-center  ">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>

    </div>
    
    </>
  )
}
