    import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';
function HomeAllBlogCard({blogs}) {

const navigate=useNavigate()    

function view(){
    navigate("/single-blogview",{state:{blogs}})

}

    return (
        <div className="card-container">
            <article className="homecard">
                <div className="cardblogname">{blogs.blogname} </div>

                   
                    <span className="cardtitlename">{blogs.authorname}</span>
                   
                    <span className="cardsubtitlename">{blogs.blogdiscription}</span>
                    <p className="carddescriptionname">{blogs.dateposted}</p>
                  
                       

                 

              
            </article>
                        <button className="card-button" onClick={view}>View</button>

        </div>
    )
}

export default HomeAllBlogCard