import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { Link, useNavigate } from 'react-router-dom'



function Logout() {
    const { setloggedinuser}=useContext(UserContext)
    const navigate=useNavigate()

    async function logout(e){
        setloggedinuser(null)
        localStorage.removeItem("loggedinuser")
        navigate("/")


    }



  return (
    <div class="uiverse">
    <span class="tooltip">click to logout</span>
<p className="logout design-l-out" onClick={(e)=>{logout(e)}}><Link className="logout" >logout</Link></p>
</div>
  )
}

export default Logout