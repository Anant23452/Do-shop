import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({data}) {
  return (
     <>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6  ">
 {data.map((product) => (
 
        <ProductCard product={product} />
      ))}
      </div>
     </>
  )
}
