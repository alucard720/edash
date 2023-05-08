import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const UpdateProduct = () => {
    const [name, setName]= useState('')
    const[price, setPrice]= useState('')
    const [category, setCategory]=useState('')
    const [company, setCompany] = useState('')
    const params = useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{

        getProductDetails();

    },[])

    const getProductDetails = async()=>{
       
        let result = await fetch(`http://localhost:3500/product/${params.id}`)
        result = await result.json();
        console.warn(result)
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct =async ()=>{

      let result = await fetch(`http://localhost:3500/product/${params.id}`,{
        method:'Put',
        body:JSON.stringify({name,price,category,company}),
        headers: {'Content-Type':'application/json'
      }
      });
        

    result = await result.json();
    console.log(result);
      navigate('/');

    }


  return (
    <div className='product'>
    <h1>Update Product</h1>
      <input type='text' placeholder='Enter product' className='inputBox'
      required 
      value={name}
      onChange={(e)=>{setName(e.target.value)}}
      />
          <input type='text' placeholder='Enter price' className='inputBox'
      value={price}
      onChange={(e)=>{setPrice(e.target.value)}}/>

      <input type='text' placeholder='Enter Category' className='dropdown-input inputBox'
      value={category}
      onChange={(e)=>{setCategory(e.target.value)}}/>

      <input type='text' placeholder='Enter company' className='inputBox'
      value={company}
      onChange={(e)=>{setCompany(e.target.value)}}/>

      <button onClick={updateProduct}   type='button' className='appButton'>Update Product</button>
    </div>
  )
}

export default UpdateProduct