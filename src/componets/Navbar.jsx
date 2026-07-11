import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-blue-300'>
    <div className="nav bg-gray-500 flex justify-center items-center h-32 ">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>

    </div>
    
    </div>
  )
}
