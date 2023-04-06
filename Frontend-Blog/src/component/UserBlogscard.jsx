import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { DeleteSingleBlog } from '../Api/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


function UserBlogscard({ userblog }) {

  const navigate = useNavigate()
  const [open,setOpen]=useState(false)

 


  async function EDitblog() {
    navigate("/editblog", { state: userblog })
  }

    
 
  

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = async() => {
      let deletedblog = await axios.delete(DeleteSingleBlog + userblog._id)
    console.log(userblog._id);
    console.log("deleted blog", deletedblog);
    window.location.replace("http://localhost:5173/u-addedblogs")
      setOpen(false);
    };
  return (
    <>
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
          <button className='usericons'><DeleteIcon   onClick={handleClickOpen}/></button>
   
        </div>
      </div>
    </div>
    {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open} onClose={handleClose}
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Do You Want To  Delete 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleClose}>yes</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default UserBlogscard