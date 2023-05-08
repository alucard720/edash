import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


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

const searchHandle = async (event)=>{

  let key =event.target.value
  if(key )
  {let result = await fetch(`http://localhost:3500/search/${key}`)

  result = await result.json()
  if(result){
    setProducts(result)
  }
}else{
  getProducts()
}
  


}


  return (
    <div className='product-list'>
    <h3>ProductList</h3>
    <input type="" className ='input-search' placeholder='Search Product' onChange={searchHandle}/>

    <ul>
    <li>S. No</li>
    <li>Name</li>
    <li>Price</li>
    <li>Category</li>
    <li>Company</li>
    <li>Operation</li>
    </ul>
   
    
    {
      products.length ? products.map((item, index)=>
      
      <ul key={item._id}>
      <li>{index+1}</li>
      <li>{item.name}</li>
      <li>{item.price}</li>
      <li>{item.category}</li>
      <li>{item.company}</li>
      <li><button onClick={()=> deleteProduct(item._id)}>Delete</button>
      <Link to ={"/update/"+item._id}>Update</Link>
      </li>
      
      </ul>

      )
      :<h1>No Product Listed</h1>
    }

    </div>
  )
}

export default ProductList