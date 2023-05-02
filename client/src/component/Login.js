
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }

    },[])

    const handlelogin = async ()=>{
        let result= await fetch("http://localhost:3500/login",{
            method:'post',
            body:JSON.stringify({email, password}),
            headers:{
               'Content-Type':'application/json'
            }
        });
        result= await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')

        }else{
            alert("Please enter correct details")
        }
    }
    
  return (
    <div className="login">
      <h1>Login</h1>
      <input  type='text' className="inputBox" placeholder='User email' 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      ></input>
      <input type='password' className="inputBox" placeholder='Password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}></input>
      <button onClick={handlelogin} className='appButton' type='button'>Login</button>
    </div>
  )
}

export default Login
