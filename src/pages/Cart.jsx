import React from 'react';
import useCartStore from '../stores/CartStore';

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-800 tracking-tight">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed rounded-2xl text-gray-500">
          <p className="text-2xl">Your cart is empty 🛒</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="group flex items-center bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              {/* Product Image */}
              <div className="w-32 h-32 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Details */}
              <div className="flex-grow px-6 text-gray-700">
                <h2 className="text-xl font-bold text-gray-800 mb-1 bg-gray-900 rounded">{item.title}</h2>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  In Stock
                </span>
                <p className="text-2xl font-bold text-gray-900 mt-2">${item.price.toFixed(2)}</p>
              </div>

              {/* Controls */}
              <div className="flex flex-col items-center gap-3 p-3  justify-center">
                <div className="flex items-center border rounded-full overflow-hidden shadow-inner bg-gray-50">
                  <button onClick={() => decreaseQuantity(item.id)} className="px-4 py-2 hover:bg-gray-200 transition-colors font-bold">-</button>
                  <span className="px-4 font-bold text-lg">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="px-4 py-2 hover:bg-gray-200 transition-colors font-bold">+</button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm font-semibold hover:text-red-700 hover:underline transition-all"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Checkout Summary Footer */}
          <div className="mt-8 pt-6 border-t flex justify-end">
            <div className="text-right">
              <p className="text-gray-500">Total Price</p>
              <h2 className="text-4xl font-extrabold text-blue-600">${total.toFixed(2)}</h2>
              <button className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-transform active:scale-95">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}