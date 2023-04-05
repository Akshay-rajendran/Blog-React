import React, { useRef } from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import axios from 'axios'
import { BlogAddApi } from '../Api/api'
import { Link, useNavigate } from 'react-router-dom'

function AddBlog() {
    const { loggedinuser}=useContext(UserContext)
    const inputref=useRef()
    const textarearef=useRef()
    const navigate=useNavigate()


async function add(){
    let blogcontent={
        blogname:inputref.current.value,
        blogdiscription:textarearef.current.value,
        authorid:loggedinuser._id,
        authorname:loggedinuser.username,
        dateposted:new Date().toDateString()
    }
    let blog=await axios.post(BlogAddApi,blogcontent)
    console.log("blog",blog);
    navigate("/u-addedblogs")
}


  return (
    <div className="blogbox">
        <h1 className="blogh1">Add Blog</h1>
        <h2 className="blogh2">Blog Name</h2>
        <input type="text" className="bloginput" ref={inputref} />       
        <h2 className="blogh2">Blog Content</h2>
        <textarea name="" id="" cols="30" rows="10" className="blogtextarea" ref={textarearef}></textarea> <br />
        
        <button className="blogbtn" onClick={add}>Add </button>
        <button className="blogbtn" ><Link className='addblog-linktag' to="/u-addedblogs">view blogs</Link></button>
    </div>
  )
}

export default AddBlog