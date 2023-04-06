import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { EditoneBlog } from '../Api/api'
import Navbar from './Navbar'


function EditSingleBlog() {
const [blogname,setblogname]=useState()
const [blogdiscription,setblogdiscription]=useState()
const location=useLocation()
const navigate=useNavigate()


useEffect(()=>{
    setblogname(location.state.blogname)
    setblogdiscription(location.state.blogdiscription)
},[])

async function Edit(){
     let editedblog=await axios.patch(EditoneBlog+location.state._id,{blogname:blogname,blogdiscription:blogdiscription})
     console.log(editedblog);
     navigate("/u-addedblogs")
}

  return (
  <div className="editbody">
    <Navbar/>
    
<div class="cardedit">

<h1 className="edith1">Edit Blog</h1>
<h2 className="edith2">Blog Name</h2>
<input type="text" className="editinput" value={blogname} onChange={(e)=>{
    setblogname(e.target.value)
}}/>
<h2 className="edith3">Blog Discription</h2>
<textarea name="" id="" cols="30" rows="10" className="edittextarea" value={blogdiscription} onChange={(e)=>{
    setblogdiscription(e.target.value)
}}></textarea><br />
<button className='edit-btn' onClick={Edit}>submit</button>

</div>
</div>
  )
}

export default EditSingleBlog