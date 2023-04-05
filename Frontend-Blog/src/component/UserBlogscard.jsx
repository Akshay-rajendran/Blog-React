import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DeleteSingleBlog } from '../Api/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

function UserBlogscard({ userblog }) {

  const navigate = useNavigate()

  async function deleteblog() {
    let deletedblog = await axios.delete(DeleteSingleBlog + userblog._id)
    console.log(userblog._id);
    console.log("deleted blog", deletedblog);
    window.location.replace("http://localhost:5173/u-addedblogs")

  }


  async function EDitblog() {
    navigate("/editblog", { state: userblog })
  }




  return (
    <div className="carduserblog">
      <div className="smallIcon">
        <div className="person">
          <PersonIcon className='personicon'/>
          <div className="authorname">{userblog.authorname}</div>
        </div>
        <div className="Name">Blog Name : {userblog.blogname}</div>
        <div className="usercarddiscription">Blog Discription : {userblog.blogdiscription}</div>
        <div className="Descripion">Posted Date : {userblog.dateposted}</div>
        <div className="delete-edit-icons">
          <button className='usericons'><EditIcon onClick={EDitblog} /></button>
          <button className='usericons'><DeleteIcon onClick={deleteblog} /></button>
        </div>
      </div>
    </div>
  )
}

export default UserBlogscard