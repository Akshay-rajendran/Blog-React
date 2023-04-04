import React from 'react'

function UserBlogscard({userblog}) {
  return (
    <div className="card">
  <div className="smallIcon">
    <div className="Icon">{userblog.authorname}</div>
    <div className="Name">{userblog.blogname}</div>
    <div className="Roles">vx</div>
    <div className="Descripion">dgdfg</div>
  </div>
</div>
  )
}

export default UserBlogscard