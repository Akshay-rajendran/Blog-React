import React, { useEffect, useState } from 'react'
import HomeAllBlogCard from './HomeAllBlogCard'
import { GetAllBlog } from '../Api/api'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import Navbar from './Navbar'
import About from './About'
import 'animate.css';
import '../home.css'


function Home() {

  const [allblog, setallblogs] = useState()
  const { loggedinuser } = useContext(UserContext)

  async function fetchallblog() {
    let allblogs = await axios.get(GetAllBlog)
    setallblogs(allblogs.data.allblog)
    // console.log("blogs",allblogs);
  }

  useEffect(() => { fetchallblog() }, [])

  return (
    <div className="home fadein">
      <Navbar />

    
          <p className="cmt">Explore the world</p>
          <p className="quote">Have stories to tell not stuff to show</p>
      <div className="img-slider">
        <div className="slider-container">
          <div className="slide"><img src="https://media.istockphoto.com/id/1277015766/photo/sporty-man-on-the-mountain-peak-looking-on-mountain-valley-with-sunbeams-at-colorful-sunset.jpg?b=1&s=170667a&w=0&k=20&c=KL1FAqDRJ3_SHLgiX-dSpmisd3GXwdyR84cmrnHbxjg=" alt="" className="img-cards" /></div>
          <div className="slide"> <img src="https://images.unsplash.com/photo-1587821684250-a7ececf4bf78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwb24lMjBib2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="img-cards" /></div>
          <div className="slide"><img src="https://hips.hearstapps.com/hmg-prod/images/large-group-of-happy-friends-in-mountains-area-royalty-free-image-1653422631.jpg?crop=1xw:0.84276xh;center,top" alt="" className="img-cards" /></div>
          <div className="slide"> <img src="https://img.freepik.com/free-photo/female-tourists-who-are-taking-photos-atmosphere_1150-7431.jpg?w=2000" alt="" className="img-cards" /></div>
          <div className="slide"><img src="https://images.news18.com/ibnlive/uploads/2022/06/solo-travel-16573504513x2.png" alt="" className="img-cards" /></div>
          <div className="slide"><img src="https://st.focusedcollection.com/18002410/i/1800/focused_200729034-stock-photo-people-painting-workshop-drawing-scenery.jpg" alt="" className="img-cards" /></div>
        </div>
      </div>
      <div className="user">
        <>
          <h1 className='headblog'>Blogs</h1>
        </>
       
      <div className="fade"></div>
        
      </div>
      <div className="mapallblogs">
        {allblog && allblog.map((m) => {
          return (
            <HomeAllBlogCard blogs={m} />

          )
        })}
      </div>
    

       
        <div className="talkimg">
          <div className="blur">
            <div className="about-item-contain">
            <p className="lettalk">post your blog share with your friend</p>
            <p className="lettalk travelabout">travel, travel alot</p><br/>
            <button className="talkbtn">get in chat</button>
            </div>
          

        </div>
      </div>
        <About className="up" />
    </div>


  )
}


export default Home