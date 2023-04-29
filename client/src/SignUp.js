
import React, {useState} from 'react'

const SignUp =()=>{
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const collectData=()=>{
        console.warn(name,email,password);
    }
    


    return(
        <div className="signup">
        <h1>Register</h1>
        <input className="inputBox" type="text" placeholder="Username"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input className="inputBox" type="email" placeholder="Enter Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <input className="inputBox" type="password" placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <button className="appButton" type="button"
        onClick={collectData}
        >SignUp</button>
        </div>
    )
}

export default SignUp;