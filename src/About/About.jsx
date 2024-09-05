import React from 'react'
import "./About.css"
import aboutAnime from "../assets/about_anime.gif"
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className='about'>
       <h1>About me</h1>
       <p className='para'>Frontend Developer</p>
        <div className="about-main">
          <div className="about-main-left">
            <h3 className="about-subheading">Developer</h3>
            <p className='about-subheadingDetails'>
            As a passionate and detail-oriented Frontend Developer, I specialize in creating dynamic, responsive, and user-centric web applications. With a strong foundation in modern web technologies like HTML5, CSS3, JavaScript (ES6+), and frameworks such as React, I am dedicated to delivering intuitive and aesthetically pleasing user experiences.
            </p>
          </div>
          <div className="about-main-right">
            <img src={aboutAnime} alt="anime" loading='lazy' className='about-anime'/>
          </div>
        </div>
        <div className="check">
          <Link to={'/project'}>
            <h5>Check out my projects</h5>
          </Link>
          
        </div>
        {/* <div className="vector-frame">
          <img src={aboutVector} alt="" />
        </div> */}
    </div>
  )
}

export default About