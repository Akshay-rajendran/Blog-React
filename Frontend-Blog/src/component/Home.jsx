import React, { useEffect, useState } from 'react'
import HomeAllBlogCard from './HomeAllBlogCard'
import {  GetAllBlog } from '../Api/api'
import axios from 'axios'


function Home() {

    const [allblog,setallblogs]=useState()

async function fetchallblog(){
    let allblogs=await axios.get(GetAllBlog)
    setallblogs(allblogs.data.allblog)
    console.log("blogs",allblogs);
}

useEffect(()=>{fetchallblog()},[])

  return (
<div className="home">
    <div className="nav">
    <div className='logoda'>DA</div>
        <div className="navchild1">
        
        <p className='p'>About</p>
        <p className='p'>Review</p>
        </div>
        <div className="navchild2">
            <p className='login-signup-btn'>SignUp</p>
            <p  className='login-signup-btn'>Login</p>
        </div>
    </div>
    <h1 className='headblog'>Blogs</h1>
    <div className="mapallblogs">
    {allblog && allblog.map((m)=>{
        return(
            <HomeAllBlogCard blogs={m}/>
        )
    })}
    </div>
</div>


  )
}


export default Home