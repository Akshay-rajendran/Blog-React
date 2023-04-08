import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import About from './About';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import axios from 'axios';
import { addComment, getCommentsApi } from '../Api/api';

function SIngleBlogView() {
    const location = useLocation()
    console.log("passed state from view", location.state);
    const { loggedinuser}=useContext(UserContext)
    const commentref=useRef()
    const navigate=useNavigate()
    const [AllComment,setAllComment]=useState([])
    const [refresh,setRefresh]=useState()



async function add(){

     if (loggedinuser) {
     
        let commentdata={
            comment:commentref.current.value,
            blogid:location.state.blogs._id,
            userid:loggedinuser._id,
            username:loggedinuser.username
            }
        let addcomment=await axios.post(addComment,commentdata)
        console.log( addcomment);
        commentref.current.value=""
        setRefresh(!refresh)
     }else{
          navigate("/login")
     }
}


 async function getComment(){
    console.log(location.state.blogs._id);
    let getAllComments=await axios.get(getCommentsApi+location.state.blogs._id)
    console.log("All Comments",getAllComments);
    setAllComment(getAllComments.data.comments)
 }

useEffect(()=>{
    getComment()
},[refresh])



    return (
        <div className="detail">
            <div className="comment-colour">
            <Navbar />
            <div className="picture-heading">
                <div className="h1-profile">
                    <h1 className="viewh1">{location.state.blogs.blogname}</h1>
                    <p className="username"><AccountCircleIcon />{location.state.blogs.authorname
}</p>
                </div>
                <img src="https://i.pinimg.com/474x/f7/af/37/f7af3773accdfcb324614d58d03548dc.jpg" alt="" className="view-img" />

            </div>
            <div className="view-icons">
                < FavoriteBorderIcon />
                < CommentIcon />
                <ShareIcon />
            </div>
            <p className="view-detail">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nam alias eum consequuntur reiciendis vitae veniam debitis, quas repudiandae illum? Laudantium impedit ullam minima repudiandae inventore quos autem totam deleniti?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem recusandae eos molestiae amet voluptas, accusantium cupiditate veniam eveniet! Repudiandae possimus sunt similique harum atque exercitationem quae at nesciunt nam assumenda deserunt quaerat doloremque molestias dignissimos, autem a eius laudantium nobis quos iusto non animi ea quas? Temporibus ratione, inventore nesciunt quia magnam commodi cum assumenda facere aspernatur impedit, consequatur quae voluptatem molestias! Saepe porro itaque quidem deleniti molestiae placeat reiciendis rem voluptates eveniet! Repellat facilis maxime nihil error? Voluptatum et, asperiores explicabo voluptate repellendus totam. Voluptatum quis iusto, officia mollitia laborum quia velit, ex ducimus corporis aspernatur autem! Eum voluptates distinctio molestiae aspernatur dolorem praesentium reiciendis sapiente error est voluptas earum adipisci natus, dignissimos obcaecati et, facilis odio tempore necessitatibus, temporibus ut officiis. Dolore, alias! Accusantium velit esse soluta architecto saepe cum odit odio, eveniet commodi accusamus corporis a atque expedita. Voluptatum recusandae, explicabo eos odit reprehenderit dolores incidunt tempora adipisci itaque iusto dignissimos beatae excepturi! Itaque ad earum neque vitae mollitia, distinctio repudiandae eum modi tempora repellendus aliquam, sit similique inventore aliquid eveniet? Ab fuga voluptatum nisi aperiam error ratione eos quo maiores deserunt reprehenderit cumque impedit, hic dolorem dolore eum beatae obcaecati nam omnis amet, autem vitae expedita laudantium nemo! Ducimus et tenetur eveniet aliquam possimus magnam excepturi enim. Ab repellat nam ullam hic sint animi amet aut, quis maxime mollitia, quidem dolores ducimus nesciunt eum vero modi minus neque voluptas tempore atque ipsum a cum! Tempora a obcaecati, expedita autem harum, ullam necessitatibus excepturi, saepe recusandae accusantium dolores! Accusantium aut quod impedit corporis aperiam nostrum explicabo, rerum consequuntur corrupti accusamus? Tempore nam unde ducimus culpa, ut officiis repudiandae adipisci suscipit aperiam cum explicabo nemo aut, amet eius, nesciunt eaque. Iste doloremque, quo sequi atque, laudantium libero eos dignissimos similique sit tempore, repudiandae repellat ratione nulla! Recusandae, iusto eveniet quia tempore nesciunt laborum, impedit veritatis, odio aspernatur saepe illo itaque. Repellat nesciunt laudantium provident nam odio nostrum ut placeat error tenetur cum natus similique possimus, aliquid ullam, iste iure inventore voluptatibus harum? Libero quam, vero quaerat, delectus ipsa unde non architecto, cumque distinctio aperiam similique exercitationem deleniti quasi corrupti. Quod nihil, labore a reiciendis sint sapiente ipsa rerum nisi aperiam nemo vero? Modi aperiam itaque ratione esse dolorem eos porro rerum veritatis sapiente molestiae! Rerum totam corrupti quo dolorum ea sint assumenda placeat blanditiis provident sed sit ex reiciendis ipsa culpa at quae expedita obcaecati veritatis eligendi, excepturi beatae, temporibus cum. Temporibus ut odio quas, neque asperiores distinctio hic reiciendis labore molestiae quae, soluta ducimus quo nulla voluptatem nihil libero numquam voluptate sint. Dolorem sed dolor ullam. Quidem rerum odit esse, quae natus dignissimos aliquam doloribus expedita consequatur perspiciatis sapiente, excepturi recusandae in ea! Numquam quaerat aliquid ipsam amet dolor dignissimos aperiam eaque, sapiente ipsum dolorem quae voluptatem sit corporis recusandae eos doloremque cupiditate quibusdam, aut perspiciatis culpa quo! Laborum porro fugiat, nisi assumenda velit expedita? Minus ipsum amet, eligendi praesentium velit alias ducimus! Expedita, animi harum inventore sequi soluta beatae voluptate debitis vero eligendi, accusantium iure.
            </p>
            
            </div>
            <div className="comments">
                
                <div className="comment-section">
                    <h1 className="commenth1">Comments</h1>
                    <div>
                    <input type="text" placeholder='add comment' className='comment-input' ref={commentref}/>
                    <button className='add-commentbtn' onClick={add}>add</button>
                    </div>
                </div>

                           <div className="map-comments">
                { AllComment.map((m)=>{
                    return(
                        <>
                        <h1 className="commented-user">{m.username}</h1>
                        <div className="comment-detail">
                            {m.comment}
                        </div>
                        <hr />
                        </>

                    )

                })}
               </div>
              
            </div>
            <About />
        </div>
    )
}

export default SIngleBlogView