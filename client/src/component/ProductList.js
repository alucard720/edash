import React, { useEffect, useState } from 'react'

const ProductList = () => {

const [products, setProducts]= useState('')

useEffect(()=>{
    getProducts();

},[])

const getProducts = async ()=>{
    let result = await fetch('http://localhost:3500/product-list',{
        method:'get',

    })
    console.warn(result);
}
   
  return (
    <div>ProductList</div>
  )
}

export default ProductList