import React, { Component } from 'react'

export default function ProductCard({product}) {
  
    return (
       <div
   className="border  rounded-lg p-4  hover:shadow-xl  transition-shadow duration-300 "
   key={product.id}
   
   >
    <div className="aspect-square  bg-gray-200 rounded-md mb-4">
      <img 
      src={product.image}
       alt={product.title}
       className='w-full h-full object-cover ' 
       />
    </div>
    <h3 className="font-semibold text-gray-300">{product.title}</h3>
    <p className="text-orange-700 font-bold text-lg mt-1">{product.price}</p>
    <p>Rating: {product.rating.rate} / 5</p>
    <p>Total Reviews: {product.rating.count}</p>
            <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md font-medium transition-colors">
              Add to Cart
            </button>
    
  </div>
    )
  
}

