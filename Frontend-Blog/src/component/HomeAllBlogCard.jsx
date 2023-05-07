import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';
function HomeAllBlogCard({ blogs }) {

    const navigate = useNavigate()

    function view() {
        navigate("/single-blogview", { state: { blogs } })

    }

    return (
        <div className="card-container">
            <article className="homecard">
                <div className="dateandname">
                    <span className="cardtitlename"><AccountCircleIcon />author:{blogs.authorname}</span>
                    <p className="carddescriptionname">date:{blogs.dateposted}</p>

                </div>
                <div className="cardblogname">name:{blogs.blogname} </div>



                <span className="cardisname">{blogs.blogdiscription}</span>

                <div className="homecardicons">
                    <FavoriteBorderIcon />
                    <CommentIcon />

                </div>




            </article>
            <button className="card-button" onClick={view}>View</button>

        </div>
    )
}

export default HomeAllBlogCard