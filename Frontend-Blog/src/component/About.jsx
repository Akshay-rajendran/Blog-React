import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function About() {
  return (
   <div className="about" id="about">
    <h1 className="abouth1">DA Blogs</h1>
    <h2 className="abouth2">Blogger</h2>
    <div className="right">
        <p className="aboutitem">Home</p>
        <p className="aboutitem">Food</p>
        <p className="aboutitem">Drink</p>
        <p className="aboutitem ab">Contact</p>
        <p className="aboutitem">FAQ</p>
        
    </div>
    <div className="abouticon">
    <ul className="wrapper">
    <li className="icon facebook">
        <span className="tooltip">Facebook</span>
        <span><i className="fab fa-facebook-f"><FacebookIcon/></i></span>
    </li>
    <li className="icon twitter">
        <span className="tooltip">Twitter</span>
        <span><i className="fab fa-twitter"><TwitterIcon/></i></span>
    </li>
    <li className="icon instagram">
        <span className="tooltip">Instagram</span>
        <span><i class="fab fa-instagram"><InstagramIcon/></i></span>
    </li>
</ul>

    </div>

   </div>
  )
}

export default About