import axios from 'axios'
import React from 'react'
import { useRef,useContext} from 'react'
import { LoginApi } from '../Api/api'
import { UserContext } from './context/UserContext'
import { useNavigate } from 'react-router-dom'


function Login() {
    const usernameref=useRef()
    const userpasswordref=useRef()
    const { setloggedinuser}=useContext(UserContext) //used for contain user details globaly
    
    const navigate=useNavigate()
async function loginuser(){
    
    let user={
        username:usernameref.current.value,
        password:userpasswordref.current.value
    }
    let res=await axios.post(LoginApi,user)
    console.log("user login",res);
    if(res.data.success==true){
    
        setloggedinuser(res.data.user)
        console.log(res.data.user);;
        localStorage.setItem("loggedinuser",JSON.stringify(res.data.user)) ///to store in local storage in chrome we can see it in inspect---application
        navigate("/addblog")
    }else{
        alert("not logined")
    }
}

  return (
    <div className="box">
        <img src="https://blog.ipleaders.in/wp-content/uploads/2018/02/BV-Acharya-17.jpg" className='login-img' alt="" />
    <div className="signup">
    <h1 className="signuph1">Login</h1>
    <h2 className="signuph2">Username</h2>
    <input type="text" className="signuinput" ref={usernameref} />
    <h2 className="signuph2">Password</h2>
    <input type="text" className="signuinput" ref={userpasswordref}/><br />
    <button className='log-btn' onClick={loginuser}>Login</button>
    </div>
    
</div>
  )
}

export default Login