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
        <div className="allblogcards">
            <article className="card">
                <div className="temporary_text">{blogs.blogname} </div>
                <div className="card_content">
                    <div className="home-person-logo">
                        < AccountCircleIcon  className="arrow"/>
                    <span className="card_title">{blogs.authorname}</span>
                    </div>
                    <span className="card_subtitle">{blogs.blogdiscription}</span>
                    <p className="card_description">{blogs.dateposted}</p>
                    <div className="homeicons">
                        < FavoriteBorderIcon  className="arrow"/>
                        <CommentIcon  className="arrow" />
                        <div className="arrow arr1"  onClick={view}><ArrowOutwardIcon className='arr-out'/></div>

                    </div>

                </div>
            </article>

        </div>
    )
}

export default HomeAllBlogCard