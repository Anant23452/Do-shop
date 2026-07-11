import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { FetchProduct } from '../services/api'
import ProductCard from '../componets/ProductCard'
import ProductGrid from '../componets/ProductGrid'

export const Home = () => {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: FetchProduct,
  })
console.log(data)
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error.message}</h1>
  }

  return (
    <>
     <h1>Products</h1>
    <ProductGrid data ={data} />
     
    </>
  )
}

export default Home