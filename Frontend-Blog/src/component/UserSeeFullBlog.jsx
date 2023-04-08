import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function UserSeeFullBlog() {


    const location = useLocation()

    const [blogs, setBlogs] = useState()

    console.log("blogs", blogs);
    useEffect(() => {
        return (

            setBlogs(location.state)
        )
    }, [])

    return (
        <>
            <div className="head-btn">
                <h1 className="allbloghead">All Blogs Of {blogs && blogs[0].authorname}</h1>
                <button className="btn">back</button>
            </div>
            <div className="AllBlogsOfAuthor">
                {blogs && blogs.map((e) => {
                    return (

                        <div className="AuthorAllBlogs">
                            <h1 className='Allblogh1'>Blog : {e.blogname}</h1>
                            <p className="AllBlogdate">{e.dateposted}</p>
                            <h2 className="AllBlogcate">Category : {e.catagory}</h2>
                            <p className="Allblogdis">Discription : {e.blogdiscription}</p>

                        </div>

                    )
                })}
            </div>
        </>
    )
}

export default UserSeeFullBlog