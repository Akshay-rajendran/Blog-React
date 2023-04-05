import React, { useEffect, useState } from 'react'
import HomeAllBlogCard from './HomeAllBlogCard'
import {  GetAllBlog } from '../Api/api'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Home() {

    const [allblog,setallblogs]=useState()

async function fetchallblog(){
    let allblogs=await axios.get(GetAllBlog)
    setallblogs(allblogs.data.allblog)
    // console.log("blogs",allblogs);
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
            <p className='button2'><Link className='login-signup-btn' to="signup">SignUp</Link></p>
            <p  className='button3'><Link className='login-signup-btn' to="login">Login</Link></p>
        </div>
    </div>
    <div className="div"></div>
    <p className="cmt">Explore the world</p>
    <p className="quote">Have stories to tell not stuff to show</p>
    <div className="images">
        <img src="https://st.focusedcollection.com/18002410/i/1800/focused_200729034-stock-photo-people-painting-workshop-drawing-scenery.jpg" alt="" className="img-cards" />
        <img src="https://media.istockphoto.com/id/1277015766/photo/sporty-man-on-the-mountain-peak-looking-on-mountain-valley-with-sunbeams-at-colorful-sunset.jpg?b=1&s=170667a&w=0&k=20&c=KL1FAqDRJ3_SHLgiX-dSpmisd3GXwdyR84cmrnHbxjg=" alt="" className="img-cards" />
        <img src="https://images.unsplash.com/photo-1587821684250-a7ececf4bf78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwb24lMjBib2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="img-cards" />
        <img src="https://hips.hearstapps.com/hmg-prod/images/large-group-of-happy-friends-in-mountains-area-royalty-free-image-1653422631.jpg?crop=1xw:0.84276xh;center,top" alt="" className="img-cards" />
        <img src="https://images.news18.com/ibnlive/uploads/2022/06/solo-travel-16573504513x2.png" alt="" className="img-cards" />
        <img src="https://img.freepik.com/free-photo/female-tourists-who-are-taking-photos-atmosphere_1150-7431.jpg?w=2000" alt="" className="img-cards" />
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