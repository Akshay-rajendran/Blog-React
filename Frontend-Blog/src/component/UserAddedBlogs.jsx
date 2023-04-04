import React, { useEffect, useState } from 'react'
import UserBlogscard from './UserBlogscard'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import axios from 'axios'
import { AuthorAddedblogs } from '../Api/api'


function UserAddedBlogs() {
    const [userblogs,setuserblogs]=useState()

    const { loggedinuser}=useContext(UserContext) ///we setted author id from user id when blog added just look that

async function fetchuseraddedblog(){
    let id=loggedinuser._id
    let res=await axios.get(AuthorAddedblogs+id)
    setuserblogs(res.data.singleblog)
    console.log(res.data.singleblog);
}    

useEffect(()=>{fetchuseraddedblog()},[])

  return (
   <div className="userblog">
    <h1 className="userbloghead">Added Blogs</h1>
    <div className="userblogcard">
{ userblogs && userblogs.map((userblog)=>{
    return(
        <UserBlogscard userblog={userblog}/>
    )
}) }

      </div>

   </div>
  )
}

export default UserAddedBlogs