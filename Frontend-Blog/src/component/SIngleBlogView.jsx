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
import { BlogsOfSingleAuthorApi, addComment, addLikeApi, getCommentsApi, likeCountApi } from '../Api/api';
import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';
function SIngleBlogView() {
    const location = useLocation()
    console.log("passed state from view", location.state);
    const { loggedinuser } = useContext(UserContext)
    const commentref = useRef()
    const navigate = useNavigate()
    const [AllComment, setAllComment] = useState()
    const [refresh, setRefresh] = useState()
    const [likes, setlikes] = useState("")



    async function add() {

        if (loggedinuser) {

            let commentdata = {
                comment: commentref.current.value,
                blogid: location.state.blogs._id,
                userid: loggedinuser._id,
                username: loggedinuser.username
            }
            let addcomment = await axios.post(addComment, commentdata)
            console.log(addcomment);
            commentref.current.value = ""
            setRefresh(!refresh)
            printComment()
            
        } else {
            navigate("/login")
        }
    }

////
async function printComment(){     ///it just a function to save this api function to use in other function
    console.log(location.state.blogs._id);
    let getAllComments = await axios.get(getCommentsApi + location.state.blogs._id)
    console.log("All Comments", getAllComments);
    setAllComment(getAllComments.data.comments)
}
////




    async function getComment() {
      if(AllComment){
      setAllComment(false)
    }else{
      printComment()
    }
    }


    async function authorFullBlog(){
        let response=await axios.get(BlogsOfSingleAuthorApi+location.state.blogs.authorid)
        console.log("blogs of single Author",response);
        navigate("/authorfullblog",{state:response.data.authorAllBlog})
    }



    async function addlike(){
        if(loggedinuser){
            let body={
                blogid:location.state.blogs._id,
                userid:loggedinuser._id
              }
        
        
                let likeadd=await axios.post(addLikeApi,body)
                console.log("added like",likeadd);
                if(likeadd.data.msg=="you are already liked"){
                    alert("you already liked")
                  
                }
            
        }else{
            navigate("/login")
        }

      
    }


    async function likeCount(){
        let Likecount=await axios.get(likeCountApi+location.state.blogs._id)
        console.log("get likes",Likecount);
        setlikes(Likecount.data.count)


    }
  

    useEffect(() => {likeCount() }, [refresh])


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
                    

                <label class="container">
  <input type="checkbox" />
  <svg id="Layer_1" version="1.0" onClick={addlike} viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
  <p>{likes && likes}</p>
</label>




                    < CommentIcon onClick={getComment} />
                    <ShareIcon />
                    <p className='commentp' onClick={authorFullBlog} >all blogs of {location.state.blogs.authorname}<NearMeRoundedIcon /></p>
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
                        <input type="text" placeholder='add comment' className='comment-input' ref={commentref} />
                        <button className='add-commentbtn' onClick={add}>add</button>
                    </div>
                </div>

                <div className="map-comments">
                    {AllComment && AllComment.map((m) => {
                        return (
                            <>
                                <h1 className="commented-user">{m.username}</h1>
                                <p className="date">{m.dateposted}</p>
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