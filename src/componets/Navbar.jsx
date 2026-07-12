import React from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../stores/CartStore';

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left: Logo & Company Name */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            D
          </div>
          <span className="text-2xl font-extrabold text-blue-600 tracking-tight">
            DO-SHOP
          </span>
        </Link>

        {/* Right: Links */}
        <div className="flex items-center gap-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/checkout" className="hover:text-blue-600 transition-colors">Checkout</Link>
          
          <Link to="/cart" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <span>Cart</span>
            {/* Cart Badge */}
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {totalQuantity}
            </span>
          </Link>
        </div>
        
      </div>
    </nav>
  );
}