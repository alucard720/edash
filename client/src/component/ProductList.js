import React, { useEffect, useState } from 'react'

const ProductList = () => {

const [products, setProducts]= useState([])

useEffect(()=>{
    getProducts();

},[])

const getProducts = async ()=>{
    let result = await fetch('http://localhost:3500/product-list')
    result = await result.json();
    setProducts(result);
}
   

const deleteProduct = async (id)=>{
  console.warn(id)
  let result = await fetch(`http://localhost:3500/product/${id}`,{
    method:'delete'
  })

  result = await result.json()
  if(result){
    alert(" Product Delete")
  }

}


  return (
    <div className='product-list'>
    <h3>ProductList</h3>
    <ul>
    <li>S. No</li>
    <li>Name</li>
    <li>Price</li>
    <li>Category</li>
    <li>Operation</li>
    </ul>
   
    
    {
      products.map((item, index)=>
      
      <ul key={item._id}>
      <li>{index+1}</li>
      <li>{item.name}</li>
      <li>{item.price}</li>
      <li>{item.category}</li>
      <li><button onClick={()=> deleteProduct(item._id)}>Delete</button></li>
      </ul>

      )
    }

    </div>
  )
}

export default ProductList