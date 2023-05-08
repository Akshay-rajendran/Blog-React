import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { Link } from 'react-router-dom'
import Logout from './Logout'
import Catagory from './Catagory'


function Navbar() {
  const { loggedinuser } = useContext(UserContext)

  return (
    <div className="nav">
      <div className='homelogo'>DA Blogs</div>
      <input type="checkbox" id='all_check' hidden />
      <div className="all">
        <div className="navchild1">

          <p className='p'>Home</p>
          <a href="#about"> <p className='p'>About</p></a>
          <p className='p'>Review</p>
        </div>
        <Catagory />
        <div className="navchild2">
          <p className='button2'><Link className='login-signup-btn' to="/signup">SignUp</Link></p><br />
          {/* <p  className='button3'><Link className='login-signup-btn' to="login">SignIn</Link></p> */}
          {loggedinuser ? <Logout /> : <p className='button3'><Link to="/login" className='login-signup-btn' >login</Link></p>}
        </div>
      </div>
      <div>
          <label for="all_check" className="hamberg">
            <div></div>
            <div></div>
            <div></div>
          </label>
          </div>

    </div>
  )
}

export default Navbar