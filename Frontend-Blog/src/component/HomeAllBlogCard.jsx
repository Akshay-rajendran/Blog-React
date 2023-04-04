import React from 'react'

function HomeAllBlogCard({blogs}) {
    return (
        <div className="allblogcards">
            <article className="card">
                <div className="temporary_text">{blogs.blogname} </div>
                <div className="card_content">
                    <span className="card_title">{blogs.authorname}</span>
                    <span className="card_subtitle">{blogs.blogdiscription}</span>
                    <p className="card_description">{blogs.dateposted}</p>

                </div>
            </article>

        </div>
    )
}

export default HomeAllBlogCard