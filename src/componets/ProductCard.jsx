import React, { Component } from 'react'

export default function ProductCard({product}) {
  
    return (
      <div
  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-2"
>
  {/* Product Image */}
  <div className="relative h-64 bg-gray-100 overflow-hidden">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
    />

    {/* Category Badge */}
    <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full capitalize shadow">
      {product.category}
    </span>
  </div>

  {/* Card Body */}
  <div className="p-5 flex flex-col justify-between">
    <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[56px]">
      {product.title}
    </h3>

    {/* Rating */}
    <div className="flex items-center justify-between mt-3">
      <div className="flex items-center gap-1">
        <span className="text-yellow-500">⭐</span>
        <span className="font-medium">{product.rating.rate}</span>
        <span className="text-gray-500 text-sm">
          ({product.rating.count} reviews)
        </span>
      </div>
    </div>

    {/* Price */}
    <div className="mt-4 flex items-center justify-between">
      <p className="text-2xl font-bold text-indigo-600">
        ${product.price}
      </p>
    </div>

    {/* Button */}
    <button className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
      🛒 Add to Cart
    </button>
  </div>
</div>
    )
  
}

