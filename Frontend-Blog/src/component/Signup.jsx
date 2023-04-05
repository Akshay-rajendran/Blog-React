import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { SignupApi } from '../Api/api'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


function Signup() {
  const usernameref = useRef()
  const useremailref = useRef()
  const userpasswordref = useRef()
  const navigate = useNavigate()

  async function signin() {


    let user = {
      username: usernameref.current.value,
      email: useremailref.current.value,
      password: userpasswordref.current.value
    }
    let res = await axios.post(SignupApi, user)
    console.log("Sign up", res);
    if (res.data.success == true) {
      navigate("/login")
    }else{
      alert(res.data.message)
    }

  }


  return (
    <div className="box">
      <div className="signup">
        <h1 className="signuph1">Signup</h1>
        <h2 className="signuph2">Username</h2>
        <input type="text" className="signuinput" ref={usernameref} />
        <h2 className="signuph2">Email</h2>
        <input type="text" className="signuinput" ref={useremailref} />
        <h2 className="signuph2">Password</h2>
        <input type="text" className="signuinput" ref={userpasswordref} /><br />
        <div className="buttons">
          <button onClick={signin}>Singin</button>
          <button><Link to="/login" className='log-btn-sinpage'>Login</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Signup